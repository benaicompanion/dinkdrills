"use client";

import { useState } from "react";
import Link from "next/link";

const SKILL_AREAS = [
  { id: "dinking", label: "Dinking", icon: "🎯" },
  { id: "drives", label: "Drives & Power", icon: "💥" },
  { id: "serves", label: "Serves & Returns", icon: "🎾" },
  { id: "volleys", label: "Volleys", icon: "⚡" },
  { id: "drops", label: "Third Shot Drops", icon: "🪂" },
  { id: "lobs", label: "Lobs & Overheads", icon: "🌙" },
  { id: "footwork", label: "Footwork & Positioning", icon: "👟" },
  { id: "strategy", label: "Game Strategy", icon: "🧠" },
  { id: "transitions", label: "Transition Zone", icon: "🔄" },
  { id: "resets", label: "Resets & Defense", icon: "🛡️" },
];

const TIME_OPTIONS = [
  { value: "30", label: "30 min/session" },
  { value: "60", label: "1 hour/session" },
  { value: "90", label: "1.5 hours/session" },
  { value: "120", label: "2 hours/session" },
];

const DAYS_OPTIONS = [
  { value: "2", label: "2 days/week" },
  { value: "3", label: "3 days/week" },
  { value: "4", label: "4 days/week" },
  { value: "5", label: "5 days/week" },
  { value: "6", label: "6 days/week" },
];

const GOAL_OPTIONS = [
  { id: "recreational", label: "Get better for fun" },
  { id: "competitive", label: "Win more tournaments" },
  { id: "rating", label: "Increase my DUPR rating" },
  { id: "youth", label: "Youth player development" },
];

export default function GeneratePage() {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState("3.5");
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [timePerSession, setTimePerSession] = useState("60");
  const [daysPerWeek, setDaysPerWeek] = useState("3");
  const [goal, setGoal] = useState("competitive");
  const [isYouth, setIsYouth] = useState(false);
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<any>(null);
  const [error, setError] = useState("");

  const toggleWeakness = (id: string) => {
    setWeaknesses((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating: parseFloat(rating),
          weaknesses,
          timePerSession: parseInt(timePerSession),
          daysPerWeek: parseInt(daysPerWeek),
          goal,
          isYouth,
          age: age ? parseInt(age) : null,
        }),
      });
      if (!res.ok) throw new Error("Failed to generate plan");
      const data = await res.json();
      setPlan(data.plan);
    } catch (e: any) {
      setError(e.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (plan) {
    return <PlanView plan={plan} onReset={() => { setPlan(null); setStep(1); }} />;
  }

  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between px-6 py-4 max-w-4xl mx-auto">
        <Link href="/" className="text-2xl font-bold no-underline">
          <span className="gradient-text">DinkDrills</span> 🏓
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Progress */}
        <div className="flex gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition ${
                s <= step ? "bg-[#10b981]" : "bg-[#1e293b]"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Skill Level */}
        {step === 1 && (
          <div>
            <h1 className="text-3xl font-bold mb-2">What&apos;s your skill level?</h1>
            <p className="text-[#94a3b8] mb-8">
              Enter your DUPR rating or best estimate. This helps us calibrate drill difficulty.
            </p>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">DUPR Rating</label>
              <input
                type="range"
                min="2.0"
                max="6.0"
                step="0.1"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full accent-[#10b981]"
              />
              <div className="flex justify-between text-sm text-[#64748b] mt-1">
                <span>2.0 (Beginner)</span>
                <span className="text-2xl font-bold text-[#10b981]">{parseFloat(rating).toFixed(1)}</span>
                <span>6.0 (Pro)</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isYouth}
                  onChange={(e) => setIsYouth(e.target.checked)}
                  className="w-5 h-5 accent-[#10b981]"
                />
                <span>This is for a youth player (5-18)</span>
              </label>
              {isYouth && (
                <input
                  type="number"
                  placeholder="Player age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-3 w-32 bg-[#1e293b] border border-[#334155] rounded-lg px-4 py-2 text-white"
                  min="5"
                  max="18"
                />
              )}
            </div>

            <button
              className="btn-primary w-full"
              onClick={() => setStep(2)}
            >
              Next: Select Weaknesses →
            </button>
          </div>
        )}

        {/* Step 2: Weaknesses & Goals */}
        {step === 2 && (
          <div>
            <h1 className="text-3xl font-bold mb-2">Where do you need work?</h1>
            <p className="text-[#94a3b8] mb-8">
              Select the areas you want to improve. Pick at least 2.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {SKILL_AREAS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => toggleWeakness(s.id)}
                  className={`card text-left cursor-pointer ${
                    weaknesses.includes(s.id) ? "selected" : ""
                  }`}
                >
                  <span className="text-xl mr-2">{s.icon}</span>
                  <span className="text-sm font-medium">{s.label}</span>
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Primary Goal</label>
              <div className="grid grid-cols-2 gap-3">
                {GOAL_OPTIONS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id)}
                    className={`card text-left text-sm cursor-pointer ${
                      goal === g.id ? "selected-accent" : ""
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="btn-primary bg-[#334155] w-1/3"
                style={{ background: "#334155" }}
                onClick={() => setStep(1)}
              >
                ← Back
              </button>
              <button
                className="btn-primary flex-1"
                disabled={weaknesses.length < 2}
                onClick={() => setStep(3)}
              >
                Next: Schedule →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Schedule */}
        {step === 3 && (
          <div>
            <h1 className="text-3xl font-bold mb-2">How much time do you have?</h1>
            <p className="text-[#94a3b8] mb-8">
              We&apos;ll build a plan that fits your schedule exactly.
            </p>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Time per session</label>
              <div className="grid grid-cols-2 gap-3">
                {TIME_OPTIONS.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTimePerSession(t.value)}
                    className={`card text-center text-sm transition cursor-pointer ${
                      timePerSession === t.value ? "selected" : ""
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Days per week</label>
              <div className="flex gap-3">
                {DAYS_OPTIONS.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setDaysPerWeek(d.value)}
                    className={`card flex-1 text-center text-sm transition cursor-pointer ${
                      daysPerWeek === d.value ? "selected" : ""
                    }`}
                  >
                    {d.value}
                  </button>
                ))}
              </div>
            </div>

            <div className="card bg-[#0f172a] mb-8">
              <h3 className="font-semibold text-sm mb-2">Your Plan Summary</h3>
              <ul className="text-sm text-[#94a3b8] space-y-1">
                <li>📊 Rating: {parseFloat(rating).toFixed(1)} DUPR{isYouth ? ` (Youth, age ${age})` : ""}</li>
                <li>🎯 Focus areas: {weaknesses.map(w => SKILL_AREAS.find(s => s.id === w)?.label).join(", ")}</li>
                <li>🏆 Goal: {GOAL_OPTIONS.find(g => g.id === goal)?.label}</li>
                <li>⏱️ {timePerSession} min × {daysPerWeek} days/week</li>
              </ul>
            </div>

            {error && (
              <div className="card border-red-500/50 bg-red-500/10 text-red-300 mb-4 text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <button
                className="btn-primary w-1/3"
                style={{ background: "#334155" }}
                onClick={() => setStep(2)}
              >
                ← Back
              </button>
              <button
                className="btn-primary flex-1 glow"
                onClick={handleGenerate}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">🏓</span> Generating...
                  </span>
                ) : (
                  "🤖 Generate My Plan"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PlanView({ plan, onReset }: { plan: any; onReset: () => void }) {
  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <Link href="/" className="text-2xl font-bold no-underline">
          <span className="gradient-text">DinkDrills</span> 🏓
        </Link>
        <button onClick={onReset} className="text-sm text-[#94a3b8] hover:text-white transition">
          Generate New Plan
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Your Training Plan</h1>
          <p className="text-[#94a3b8]">{plan.overview}</p>
        </div>

        <div className="grid gap-6">
          {plan.days.map((day: any, i: number) => (
            <div key={i} className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h2 className="text-lg font-bold">{day.title}</h2>
                  <p className="text-sm text-[#64748b]">{day.focus} · {day.duration} min</p>
                </div>
              </div>

              <div className="space-y-4">
                {day.drills.map((drill: any, j: number) => (
                  <div key={j} className="bg-[#0f172a] rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-[#10b981]">{drill.name}</h3>
                      <span className="text-xs text-[#64748b] bg-[#1e293b] px-2 py-1 rounded">
                        {drill.duration} min
                      </span>
                    </div>
                    <p className="text-sm text-[#94a3b8] mb-2">{drill.description}</p>
                    {drill.coaching_tip && (
                      <p className="text-xs text-[#f59e0b] flex items-start gap-1">
                        <span>💡</span> {drill.coaching_tip}
                      </p>
                    )}
                    {drill.variation && (
                      <p className="text-xs text-[#64748b] mt-1 flex items-start gap-1">
                        <span>🔄</span> Variation: {drill.variation}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {day.cool_down && (
                <div className="mt-4 text-sm text-[#64748b] border-t border-[#334155] pt-3">
                  🧊 Cool Down: {day.cool_down}
                </div>
              )}
            </div>
          ))}
        </div>

        {plan.weekly_tip && (
          <div className="card mt-8 border-[#f59e0b]/30 bg-[#f59e0b]/5">
            <h3 className="font-semibold text-[#f59e0b] mb-2">📋 Weekly Coach&apos;s Note</h3>
            <p className="text-[#94a3b8] text-sm">{plan.weekly_tip}</p>
          </div>
        )}

        <div className="flex gap-4 mt-10 justify-center">
          <button onClick={onReset} className="btn-primary">
            Generate Another Plan
          </button>
        </div>
      </div>
    </div>
  );
}
