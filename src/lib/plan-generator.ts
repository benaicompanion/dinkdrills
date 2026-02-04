import { DRILL_DATABASE, Drill, getWarmup, getCooldown } from "./drills";

interface PlanInput {
  rating: number;
  weaknesses: string[];
  timePerSession: number;
  daysPerWeek: number;
  goal: string;
  isYouth: boolean;
  age: number | null;
}

interface PlanDrill {
  name: string;
  description: string;
  coaching_tip?: string;
  variation?: string;
  duration: number;
}

interface PlanDay {
  title: string;
  focus: string;
  duration: number;
  drills: PlanDrill[];
  cool_down: string;
}

interface Plan {
  overview: string;
  days: PlanDay[];
  weekly_tip: string;
}

// Seeded random for reproducibility in tests
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getAvailableDrills(
  skill: string,
  rating: number,
  isYouth: boolean
): Drill[] {
  return DRILL_DATABASE.filter(
    (d) =>
      d.skill === skill &&
      rating >= d.minRating &&
      rating <= d.maxRating &&
      (!isYouth || d.youthFriendly)
  );
}

function pickDrills(
  weaknesses: string[],
  rating: number,
  isYouth: boolean,
  targetMinutes: number,
  seed: number
): PlanDrill[] {
  const result: PlanDrill[] = [];
  let remaining = targetMinutes;
  let attemptSeed = seed;

  // Distribute time across weaknesses
  const minutesPerWeakness = Math.floor(targetMinutes / weaknesses.length);

  for (const weakness of weaknesses) {
    const available = getAvailableDrills(weakness, rating, isYouth);
    if (available.length === 0) continue;

    const shuffled = seededShuffle(available, attemptSeed++);
    let allocated = 0;

    for (const drill of shuffled) {
      if (allocated + drill.duration > minutesPerWeakness + 5) break;
      if (remaining <= 0) break;

      result.push({
        name: drill.name,
        description: drill.description,
        coaching_tip: drill.coaching_tip,
        variation: drill.variation,
        duration: Math.min(drill.duration, remaining),
      });
      allocated += drill.duration;
      remaining -= drill.duration;
    }
  }

  return result;
}

const DAY_THEMES = [
  "Touch & Control",
  "Power & Placement",
  "Defense & Resets",
  "Game Situations",
  "Speed & Agility",
  "Full Court Mastery",
];

const GOAL_TIPS: Record<string, string> = {
  recreational:
    "Focus on having fun and building consistency this week. Don't worry about winning — focus on getting 80% of your serves in deep and keeping rallies going longer.",
  competitive:
    "Tournament mindset: practice your weakest shots under pressure. Play practice games where you start at 8-8 to simulate close-game intensity.",
  rating:
    "DUPR improvement comes from beating higher-rated players. Focus on reducing unforced errors first — that alone can boost your rating 0.2-0.3 points.",
  youth:
    "Keep it fun and varied! Young players develop fastest when they enjoy practice. Mix competition and cooperation. Celebrate effort over results.",
};

export function generatePlan(input: PlanInput): Plan {
  const {
    rating,
    weaknesses,
    timePerSession,
    daysPerWeek,
    goal,
    isYouth,
    age,
  } = input;

  const warmupTime = isYouth ? 7 : rating < 4 ? 8 : 10;
  const cooldownTime = isYouth ? 8 : 5;
  const drillTime = timePerSession - warmupTime - cooldownTime;

  const seed = Math.floor(rating * 100) + weaknesses.length * 7 + daysPerWeek * 13;

  const days: PlanDay[] = [];

  for (let i = 0; i < daysPerWeek; i++) {
    // Rotate which weaknesses get focus each day
    const dayWeaknesses = weaknesses.length <= 2
      ? weaknesses
      : weaknesses.slice(i % weaknesses.length).concat(weaknesses.slice(0, i % weaknesses.length)).slice(0, 3);

    const dayDrills = pickDrills(dayWeaknesses, rating, isYouth, drillTime, seed + i * 100);

    const focusAreas = [...new Set(dayWeaknesses)].slice(0, 2).join(" & ");
    const theme = DAY_THEMES[i % DAY_THEMES.length];

    days.push({
      title: `Day ${i + 1}: ${theme}`,
      focus: focusAreas,
      duration: timePerSession,
      drills: [
        {
          name: "Warm-Up",
          description: getWarmup(rating, isYouth),
          duration: warmupTime,
        },
        ...dayDrills,
      ],
      cool_down: getCooldown(rating, isYouth),
    });
  }

  const levelLabel =
    rating < 3.0
      ? "beginner"
      : rating < 3.5
      ? "intermediate"
      : rating < 4.5
      ? "advanced intermediate"
      : "advanced";

  const youthNote = isYouth
    ? ` Designed for a ${age || "youth"}-year-old player with age-appropriate intensity.`
    : "";

  const overview = `A ${daysPerWeek}-day/week training plan for a ${levelLabel} player (${rating.toFixed(1)} DUPR). Each session is ${timePerSession} minutes, focusing on: ${weaknesses.join(", ")}.${youthNote}`;

  return {
    overview,
    days,
    weekly_tip: GOAL_TIPS[goal] || GOAL_TIPS.competitive,
  };
}
