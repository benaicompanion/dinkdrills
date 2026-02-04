import { NextRequest, NextResponse } from "next/server";
import { generatePlan } from "@/lib/plan-generator";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      rating,
      weaknesses,
      timePerSession,
      daysPerWeek,
      goal,
      isYouth,
      age,
    } = body;

    // Validation
    if (typeof rating !== "number" || rating < 2.0 || rating > 6.0) {
      return NextResponse.json(
        { error: "Rating must be between 2.0 and 6.0" },
        { status: 400 }
      );
    }

    if (!Array.isArray(weaknesses) || weaknesses.length < 2) {
      return NextResponse.json(
        { error: "Select at least 2 skill areas to focus on" },
        { status: 400 }
      );
    }

    const validSkills = [
      "dinking", "drives", "serves", "volleys", "drops",
      "lobs", "footwork", "strategy", "transitions", "resets",
    ];
    const invalidSkills = weaknesses.filter((w: string) => !validSkills.includes(w));
    if (invalidSkills.length > 0) {
      return NextResponse.json(
        { error: `Invalid skill areas: ${invalidSkills.join(", ")}` },
        { status: 400 }
      );
    }

    if (![30, 60, 90, 120].includes(timePerSession)) {
      return NextResponse.json(
        { error: "Invalid session time" },
        { status: 400 }
      );
    }

    if (![2, 3, 4, 5, 6].includes(daysPerWeek)) {
      return NextResponse.json(
        { error: "Invalid days per week" },
        { status: 400 }
      );
    }

    const plan = generatePlan({
      rating,
      weaknesses,
      timePerSession,
      daysPerWeek,
      goal: goal || "competitive",
      isYouth: isYouth || false,
      age: age || null,
    });

    return NextResponse.json({ plan });
  } catch (error) {
    console.error("Plan generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate plan" },
      { status: 500 }
    );
  }
}
