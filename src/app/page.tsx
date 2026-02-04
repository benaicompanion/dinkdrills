"use client";

import Link from "next/link";

const features = [
  {
    icon: "🎯",
    title: "Personalized Plans",
    desc: "AI analyzes your DUPR rating, weaknesses, and goals to create a training plan tailored specifically to you.",
  },
  {
    icon: "📈",
    title: "Progressive Difficulty",
    desc: "Drills scale with your improvement. As you level up, your plan evolves to keep you challenged.",
  },
  {
    icon: "⏱️",
    title: "Fits Your Schedule",
    desc: "Whether you have 30 minutes or 2 hours, get a plan that works with your available practice time.",
  },
  {
    icon: "🏓",
    title: "Every Skill Covered",
    desc: "Dinking, drives, serves, volleys, drops, lobs, footwork, strategy — we cover it all.",
  },
  {
    icon: "👶",
    title: "Youth Programs",
    desc: "Age-appropriate drills for players 5-18. Perfect for academies and junior development.",
  },
  {
    icon: "🔄",
    title: "Fresh Plans Weekly",
    desc: "Never repeat the same workout. Generate new plans anytime to keep training exciting.",
  },
];

const testimonials = [
  {
    quote: "I went from 3.2 to 3.8 DUPR in 6 weeks following DinkDrills plans.",
    name: "Sarah M.",
    rating: "3.8 DUPR",
  },
  {
    quote: "Finally, drills that actually target my weaknesses instead of generic YouTube videos.",
    name: "Mike T.",
    rating: "4.2 DUPR",
  },
  {
    quote: "My youth players love the structured plans. Game changer for our academy.",
    name: "Coach Rivera",
    rating: "Academy Director",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="text-2xl font-bold">
          <span className="gradient-text">DinkDrills</span> 🏓
        </div>
        <div className="flex gap-6 items-center">
          <a href="#features" className="text-[#94a3b8] hover:text-white transition">
            Features
          </a>
          <a href="#how" className="text-[#94a3b8] hover:text-white transition">
            How It Works
          </a>
          <Link href="/generate" className="btn-primary text-sm py-2 px-4 inline-block no-underline">
            Get Your Plan →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <div className="inline-block bg-[#1e293b] text-[#10b981] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          🤖 Powered by AI · Designed for Competitive Players
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Your Personal
          <br />
          <span className="gradient-text">Pickleball Coach</span>
        </h1>
        <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10">
          AI-generated training plans tailored to your DUPR rating, skill gaps, and schedule.
          Stop guessing what to practice. Start improving with purpose.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/generate"
            className="btn-primary text-lg py-3 px-8 inline-block no-underline glow"
          >
            Generate My Plan — Free
          </Link>
        </div>
        <p className="text-sm text-[#64748b] mt-4">No signup required · Takes 30 seconds</p>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Players Choose <span className="gradient-text">DinkDrills</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card hover:border-[#10b981]/30 transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-[#94a3b8] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="flex flex-col gap-8">
          {[
            { step: "1", title: "Tell us about your game", desc: "Enter your DUPR rating (or self-assess), select your weaknesses, and choose how much time you have." },
            { step: "2", title: "AI builds your plan", desc: "Our AI analyzes your profile and generates a personalized weekly training plan with specific drills, durations, and coaching tips." },
            { step: "3", title: "Practice with purpose", desc: "Follow your plan on the court. Each drill includes clear instructions, variations, and what to focus on." },
          ].map((s) => (
            <div key={s.step} className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[#10b981] flex items-center justify-center text-xl font-bold shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                <p className="text-[#94a3b8]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Players Are Leveling Up
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <p className="text-[#94a3b8] italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#10b981]/20 flex items-center justify-center text-lg">
                  🏓
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-[#64748b]">{t.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <div className="card max-w-2xl mx-auto glow">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up?</h2>
          <p className="text-[#94a3b8] mb-6">
            Get your first AI-generated training plan in 30 seconds. Completely free.
          </p>
          <Link
            href="/generate"
            className="btn-primary text-lg py-3 px-8 inline-block no-underline"
          >
            Generate My Plan →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-[#64748b] text-sm border-t border-[#1e293b]">
        <p>© 2026 DinkDrills · AI-Powered Pickleball Training</p>
      </footer>
    </div>
  );
}
