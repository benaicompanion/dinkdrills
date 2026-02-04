export interface Drill {
  name: string;
  description: string;
  coaching_tip?: string;
  variation?: string;
  duration: number;
  skill: string;
  minRating: number;
  maxRating: number;
  youthFriendly: boolean;
}

export const DRILL_DATABASE: Drill[] = [
  // DINKING
  {
    name: "Cross-Court Dink Rally",
    description: "With a partner, rally dinks cross-court (forehand to forehand). Focus on keeping the ball below the net height and placing it in the kitchen. Count consecutive dinks — aim for 30+.",
    coaching_tip: "Stay low with bent knees. Use your legs, not your wrist. Soft grip pressure (3/10).",
    variation: "Switch to backhand cross-court. Then alternate forehand/backhand every 5 dinks.",
    duration: 10,
    skill: "dinking",
    minRating: 2.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Figure-8 Dinking Pattern",
    description: "Two players alternate dinking to each other's forehand and backhand, creating a figure-8 pattern. Start slow and increase pace as comfort builds.",
    coaching_tip: "Move your feet to the ball — don't reach. Stay balanced on the balls of your feet.",
    variation: "Add a 'speed up' rule: after 10 dinks, one player can speed up and the other must reset.",
    duration: 10,
    skill: "dinking",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Dink & Attack Decision Making",
    description: "Rally dinks with a partner. When you see a dink pop up above the net, attack it. When it's below, keep dinking. Focus on shot selection patience.",
    coaching_tip: "The biggest dinking mistake is attacking too early. If the ball is below the net — be patient.",
    variation: "Play points starting from a dink rally. First to force an error or hit a winner.",
    duration: 15,
    skill: "dinking",
    minRating: 3.5,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Wall Dink Practice",
    description: "Stand 7 feet from a wall and practice dinking softly against it. Focus on a consistent contact point and soft hands. Alternate forehand and backhand every 10 hits.",
    coaching_tip: "This is about touch and control. If the ball bounces back too hard, you're hitting too hard.",
    duration: 8,
    skill: "dinking",
    minRating: 2.0,
    maxRating: 3.5,
    youthFriendly: true,
  },

  // DRIVES & POWER
  {
    name: "Drive & Reset Drill",
    description: "Partner at kitchen, you at baseline. Hit hard drives at your partner who practices blocking/resetting. Switch roles after 10 drives. Focus on consistent drive placement.",
    coaching_tip: "Aim for your opponent's hip area — hardest spot to return. Keep drives low over the net.",
    variation: "Add targets: 5 to forehand side, 5 to backhand side, 5 at the body.",
    duration: 12,
    skill: "drives",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Forehand Drive Consistency",
    description: "From mid-court, feed yourself balls and hit forehand drives to a target zone (backhand corner). Focus on 80% power with 100% consistency. Track how many out of 20 hit the target.",
    coaching_tip: "Power comes from rotation, not arm. Turn your shoulders and follow through to your target.",
    variation: "Add a step: shuffle to the ball before driving. Simulates real game movement.",
    duration: 10,
    skill: "drives",
    minRating: 2.5,
    maxRating: 5.0,
    youthFriendly: true,
  },
  {
    name: "Counter-Drive Battle",
    description: "Both players at baseline. Rally hard drives back and forth. Focus on staying in the rally with controlled power. First to 11 errors loses.",
    coaching_tip: "Keep your paddle up and out front. If drives are going long, close your paddle face slightly.",
    duration: 10,
    skill: "drives",
    minRating: 3.5,
    maxRating: 6.0,
    youthFriendly: true,
  },

  // SERVES & RETURNS
  {
    name: "Serve Placement Challenge",
    description: "Place 4 targets (towels) in each corner of the service box. Hit 5 serves to each target. Track your accuracy. Goal: hit 12+ out of 20.",
    coaching_tip: "Consistent toss + consistent contact point = consistent serve. Don't rush your service motion.",
    variation: "Add a deep serve target (within 2 feet of the baseline). Deep serves are the most effective.",
    duration: 12,
    skill: "serves",
    minRating: 2.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Deep Return Practice",
    description: "Have a partner serve to you. Focus on returning deep — past the NVZ line, ideally to the baseline. Count how many returns land in the back third of the court.",
    coaching_tip: "Step into the return. Contact the ball out front. Return deep to neutralize the serve advantage.",
    variation: "Practice return & advance: return deep and immediately move to the kitchen line.",
    duration: 10,
    skill: "serves",
    minRating: 2.5,
    maxRating: 5.0,
    youthFriendly: true,
  },
  {
    name: "Power Serve Development",
    description: "Practice generating topspin on your serve. Focus on low-to-high paddle path and hitting through the ball. Aim for the baseline with enough pace to push the returner back.",
    coaching_tip: "A good serve doesn't need to be an ace. A deep, heavy serve that forces a weak return is more valuable.",
    variation: "Mix in soft, short serves to keep your opponent guessing.",
    duration: 10,
    skill: "serves",
    minRating: 3.5,
    maxRating: 6.0,
    youthFriendly: false,
  },

  // VOLLEYS
  {
    name: "Rapid Volley Exchange",
    description: "Both players at the kitchen line, 7 feet apart. Volley back and forth as fast as possible — no bounces. Focus on keeping your paddle up and using short, compact swings.",
    coaching_tip: "Paddle up, wrist firm, out in front of your body. Absorb don't swing. Think 'catch and redirect.'",
    variation: "Do forehand-only for 1 minute, backhand-only for 1 minute, then mix.",
    duration: 8,
    skill: "volleys",
    minRating: 2.5,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "2-on-1 Volley Drill",
    description: "One player at the kitchen vs two players on the other side. The solo player must redirect volleys to both opponents. Great for reaction time and placement.",
    coaching_tip: "The solo player should focus on depth of volley — push opponents back when possible.",
    variation: "Rotate positions every 2 minutes so everyone gets solo time.",
    duration: 12,
    skill: "volleys",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Block Volley Defense",
    description: "Partner feeds hard drives at you while you're at the kitchen line. Practice blocking volleys — absorbing pace and redirecting soft and low. Focus on staying balanced.",
    coaching_tip: "Don't swing at hard shots. Just present your paddle face and let the ball do the work.",
    duration: 10,
    skill: "volleys",
    minRating: 3.0,
    maxRating: 5.5,
    youthFriendly: true,
  },

  // THIRD SHOT DROPS
  {
    name: "Drop Shot Ladder",
    description: "Start at the kitchen line dropping into the kitchen. After 5 successful drops, step back 3 feet. Repeat until you're at the baseline. Goal: consistent drops from every distance.",
    coaching_tip: "The third shot drop is a lift, not a hit. Push from your legs, follow through upward.",
    variation: "Have a partner at the net calling 'in kitchen' or 'too high' to give real-time feedback.",
    duration: 15,
    skill: "drops",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Drop vs Drive Decision",
    description: "Partner feeds from the kitchen. Based on the feed (high/low, fast/slow), decide whether to hit a drop or a drive. Low balls = drop, high balls = drive.",
    coaching_tip: "Don't try to drop everything. If the ball is above your waist at contact, driving is often better.",
    variation: "Play the point out after each shot to practice transitioning.",
    duration: 12,
    skill: "drops",
    minRating: 3.5,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Bucket Drop Practice",
    description: "Place a bucket or target in the kitchen. From mid-court, practice dropping balls into/near the bucket. Track accuracy out of 20 attempts.",
    coaching_tip: "Arc is your friend. A good drop peaks on YOUR side of the net and falls into the kitchen.",
    duration: 10,
    skill: "drops",
    minRating: 2.5,
    maxRating: 4.5,
    youthFriendly: true,
  },

  // LOBS & OVERHEADS
  {
    name: "Lob & Overhead Combo",
    description: "One player at the kitchen practices offensive lobs. The other player practices overhead smashes. Alternate roles. Focus on lob height and placement (over backhand side).",
    coaching_tip: "A good lob should be just barely out of reach. Too high gives them time to set up an overhead.",
    variation: "Make it a game: lobber gets a point if overhead misses, smasher gets a point for a put-away.",
    duration: 12,
    skill: "lobs",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Overhead Footwork Drill",
    description: "Partner feeds lobs alternating between left and right. Practice shuffling back, getting set, and hitting overheads. Focus on getting behind the ball.",
    coaching_tip: "Turn sideways, shuffle back (don't backpedal), point at the ball with your non-paddle hand.",
    duration: 10,
    skill: "lobs",
    minRating: 3.0,
    maxRating: 5.5,
    youthFriendly: true,
  },

  // FOOTWORK & POSITIONING
  {
    name: "Kitchen Line Shuffle Drill",
    description: "Side shuffle along the kitchen line, touching each sideline. Do 10 reps as fast as possible. Then add a split step and volley after each shuffle.",
    coaching_tip: "Stay low. Small, quick steps. Never cross your feet. Always face the net.",
    variation: "Add a ball feed: shuffle to position, hit a volley, shuffle to next position.",
    duration: 8,
    skill: "footwork",
    minRating: 2.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Split Step Timing",
    description: "Practice the split step: as your opponent contacts the ball, do a small hop to land balanced on both feet. Have a partner feed random shots — your job is to split step before each one.",
    coaching_tip: "The split step is the single most important movement in pickleball. Time it with your opponent's contact.",
    duration: 8,
    skill: "footwork",
    minRating: 2.5,
    maxRating: 5.0,
    youthFriendly: true,
  },
  {
    name: "Transition Zone Movement",
    description: "Start at baseline. Hit a 3rd shot drop, then advance to the kitchen using 2-3 steps with a split step before each shot. Practice the advance pattern until it's automatic.",
    coaching_tip: "Don't run straight to the kitchen. Move in stages: drop → advance → split step → volley/drop → advance.",
    duration: 12,
    skill: "footwork",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },

  // STRATEGY
  {
    name: "Stacking Practice (Doubles)",
    description: "Practice stacking formations with your partner. Work through: standard stack, I-formation, and switch patterns. Run 5 points from each formation.",
    coaching_tip: "Stacking keeps your strongest side (forehand) in the middle. Communication with your partner is key.",
    duration: 15,
    skill: "strategy",
    minRating: 3.5,
    maxRating: 6.0,
    youthFriendly: false,
  },
  {
    name: "Pattern Play: Middle Attack",
    description: "Play points where you intentionally aim every attackable ball down the middle (between opponents). Track how often this creates confusion or errors.",
    coaching_tip: "In doubles, the middle is the most effective target. It creates confusion about who takes it.",
    variation: "Alternate: 5 points attacking the middle, 5 points attacking the sidelines. Compare success rates.",
    duration: 12,
    skill: "strategy",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Scoreboard Pressure Simulation",
    description: "Play games to 11, but start at various scores (8-8, 9-10, etc). Practice performing under pressure scenarios. Focus on shot selection when points matter most.",
    coaching_tip: "In pressure situations, go back to your strengths. Don't try hero shots — solid execution wins.",
    duration: 15,
    skill: "strategy",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },

  // TRANSITION ZONE
  {
    name: "No-Volley Zone Approach",
    description: "Start at baseline. Feed a ball to yourself, hit a drop, and approach the kitchen in 2-3 controlled steps. Hit a volley/reset on the way up. Repeat 15 times.",
    coaching_tip: "The transition zone is where most points are lost. Move slowly and controlled — don't sprint.",
    duration: 12,
    skill: "transitions",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Mid-Court Survival Drill",
    description: "Stand in the transition zone (between baseline and kitchen). Partner feeds fast shots at your feet. Practice half-volleys and resets. Goal: get 10 consecutive resets into the kitchen.",
    coaching_tip: "Bend your knees deeply. Paddle face open. Absorb and redirect — don't fight the ball.",
    duration: 10,
    skill: "transitions",
    minRating: 3.5,
    maxRating: 6.0,
    youthFriendly: true,
  },

  // RESETS & DEFENSE
  {
    name: "Reset Under Pressure",
    description: "Partner at the kitchen hitting speed-ups at you. Your job: reset every ball softly into the kitchen. Track consecutive resets. Goal: 10+ in a row.",
    coaching_tip: "Soft grip, absorb the energy. Your paddle should barely move — use the opponent's pace against them.",
    variation: "Partner varies the speed and placement to simulate unpredictable attacks.",
    duration: 12,
    skill: "resets",
    minRating: 3.0,
    maxRating: 6.0,
    youthFriendly: true,
  },
  {
    name: "Defensive Lob Recovery",
    description: "Partner at kitchen hitting overheads at you. Practice retrieving/getting them back in play and resetting the point. Focus on getting into defensive position and neutralizing.",
    coaching_tip: "When lobbed over, don't try to win the point — just get it back deep and get to the kitchen.",
    duration: 10,
    skill: "resets",
    minRating: 3.0,
    maxRating: 5.5,
    youthFriendly: true,
  },
  {
    name: "Erne Defense Drill",
    description: "Practice defending against erne attempts. Partner fakes erning from the sideline while you redirect your dink to the open court or lob over.",
    coaching_tip: "When you see an erne coming, go behind them or lob. Don't dink to the sideline they're attacking from.",
    duration: 10,
    skill: "resets",
    minRating: 4.0,
    maxRating: 6.0,
    youthFriendly: false,
  },
];

// Warm-up and cool-down by level
export function getWarmup(rating: number, isYouth: boolean): string {
  if (isYouth) {
    return "5 min dynamic stretching: arm circles, leg swings, high knees, side shuffles. Then 2 min cooperative rally to get loose.";
  }
  if (rating < 3.0) {
    return "5 min light rally: hit easy forehand-to-forehand. Focus on making contact and getting loose.";
  }
  if (rating < 4.0) {
    return "5 min dynamic warm-up: arm circles, leg swings, lateral shuffles. Then 3 min cooperative dink rally.";
  }
  return "5 min dynamic warm-up: band work for shoulders, lateral shuffles, split step practice. Then 5 min progressive dinking (slow → medium → fast).";
}

export function getCooldown(rating: number, isYouth: boolean): string {
  if (isYouth) {
    return "3 min easy rally for fun. 5 min stretching: quads, hamstrings, shoulders, wrists.";
  }
  if (rating < 3.5) {
    return "5 min light stretching: shoulders, wrists, quads, hamstrings. Hydrate!";
  }
  return "5 min static stretching: hip flexors, shoulders, forearms, calves. Foam roll if available. Log what went well and what needs work.";
}
