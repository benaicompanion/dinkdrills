import { generatePlan } from "@/lib/plan-generator";
import { DRILL_DATABASE } from "@/lib/drills";

describe("generatePlan", () => {
  const defaultInput = {
    rating: 3.5,
    weaknesses: ["dinking", "drops"],
    timePerSession: 60,
    daysPerWeek: 3,
    goal: "competitive",
    isYouth: false,
    age: null,
  };

  it("generates a plan with correct number of days", () => {
    const plan = generatePlan(defaultInput);
    expect(plan.days).toHaveLength(3);
  });

  it("generates a plan with 5 days when requested", () => {
    const plan = generatePlan({ ...defaultInput, daysPerWeek: 5 });
    expect(plan.days).toHaveLength(5);
  });

  it("includes an overview string", () => {
    const plan = generatePlan(defaultInput);
    expect(plan.overview).toBeTruthy();
    expect(plan.overview).toContain("3.5");
    expect(plan.overview).toContain("dinking");
  });

  it("includes a weekly tip", () => {
    const plan = generatePlan(defaultInput);
    expect(plan.weekly_tip).toBeTruthy();
    expect(plan.weekly_tip.length).toBeGreaterThan(20);
  });

  it("each day has a warm-up as the first drill", () => {
    const plan = generatePlan(defaultInput);
    for (const day of plan.days) {
      expect(day.drills[0].name).toBe("Warm-Up");
      expect(day.drills[0].duration).toBeGreaterThan(0);
    }
  });

  it("each day has a cool-down", () => {
    const plan = generatePlan(defaultInput);
    for (const day of plan.days) {
      expect(day.cool_down).toBeTruthy();
    }
  });

  it("each day has at least 2 drills (warmup + 1 real drill)", () => {
    const plan = generatePlan(defaultInput);
    for (const day of plan.days) {
      expect(day.drills.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("drill durations don't exceed session time", () => {
    const plan = generatePlan(defaultInput);
    for (const day of plan.days) {
      const totalDrillTime = day.drills.reduce((sum, d) => sum + d.duration, 0);
      expect(totalDrillTime).toBeLessThanOrEqual(defaultInput.timePerSession);
    }
  });

  it("generates different plans for different ratings", () => {
    const plan1 = generatePlan({ ...defaultInput, rating: 2.5 });
    const plan2 = generatePlan({ ...defaultInput, rating: 4.5 });
    // At least some drills should differ
    const drills1 = plan1.days.flatMap((d) => d.drills.map((dr) => dr.name));
    const drills2 = plan2.days.flatMap((d) => d.drills.map((dr) => dr.name));
    expect(drills1).not.toEqual(drills2);
  });

  it("handles youth players correctly", () => {
    const plan = generatePlan({
      ...defaultInput,
      isYouth: true,
      age: 12,
    });
    expect(plan.overview).toContain("12");
    // Should not include non-youth-friendly drills
    const drillNames = plan.days.flatMap((d) => d.drills.map((dr) => dr.name));
    const nonYouthDrills = DRILL_DATABASE.filter((d) => !d.youthFriendly).map(
      (d) => d.name
    );
    for (const name of drillNames) {
      expect(nonYouthDrills).not.toContain(name);
    }
  });

  it("uses youth goal tip for youth goal", () => {
    const plan = generatePlan({ ...defaultInput, goal: "youth" });
    expect(plan.weekly_tip).toContain("fun");
  });

  it("uses rating goal tip for rating goal", () => {
    const plan = generatePlan({ ...defaultInput, goal: "rating" });
    expect(plan.weekly_tip).toContain("DUPR");
  });

  it("handles 30 min sessions (shorter drills)", () => {
    const plan = generatePlan({ ...defaultInput, timePerSession: 30 });
    for (const day of plan.days) {
      const totalTime = day.drills.reduce((sum, d) => sum + d.duration, 0);
      expect(totalTime).toBeLessThanOrEqual(30);
    }
  });

  it("handles many weaknesses", () => {
    const plan = generatePlan({
      ...defaultInput,
      weaknesses: [
        "dinking",
        "drives",
        "serves",
        "volleys",
        "drops",
        "footwork",
      ],
    });
    expect(plan.days).toHaveLength(3);
    for (const day of plan.days) {
      expect(day.drills.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("plan overview includes level label", () => {
    const beginnerPlan = generatePlan({ ...defaultInput, rating: 2.5 });
    expect(beginnerPlan.overview).toContain("beginner");

    const advPlan = generatePlan({ ...defaultInput, rating: 5.0 });
    expect(advPlan.overview).toContain("advanced");
  });
});

describe("DRILL_DATABASE", () => {
  it("has drills for every skill area", () => {
    const skills = [
      "dinking", "drives", "serves", "volleys", "drops",
      "lobs", "footwork", "strategy", "transitions", "resets",
    ];
    for (const skill of skills) {
      const drills = DRILL_DATABASE.filter((d) => d.skill === skill);
      expect(drills.length).toBeGreaterThan(0);
    }
  });

  it("all drills have valid rating ranges", () => {
    for (const drill of DRILL_DATABASE) {
      expect(drill.minRating).toBeLessThan(drill.maxRating);
      expect(drill.minRating).toBeGreaterThanOrEqual(2.0);
      expect(drill.maxRating).toBeLessThanOrEqual(6.0);
    }
  });

  it("all drills have positive duration", () => {
    for (const drill of DRILL_DATABASE) {
      expect(drill.duration).toBeGreaterThan(0);
    }
  });

  it("all drills have descriptions", () => {
    for (const drill of DRILL_DATABASE) {
      expect(drill.description.length).toBeGreaterThan(20);
    }
  });
});
