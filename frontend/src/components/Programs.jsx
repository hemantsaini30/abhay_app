// Programs.jsx — Cards showcasing the coaching programs offered
import React from "react";

// Program data — easy to extend
const programs = [
  {
    icon: "⚗️",
    title: "JEE (Main & Advanced)",
    tag: "Engineering",
    description:
      "Comprehensive 2-year and 1-year programs with daily practice sheets, mock tests, and personalized doubt sessions to crack IITs and NITs.",
    highlights: ["200+ Topic Tests", "Live Doubt Sessions", "AIR-proven Faculty"],
    color: "from-teal-500/20 to-teal-600/5",
    border: "border-teal-500/30",
    tagColor: "bg-teal-500/10 text-teal-400",
  },
  {
    icon: "🧬",
    title: "NEET (UG & PG)",
    tag: "Medical",
    description:
      "Biology-first approach with NCERT mastery, AIIMS-level practice, and weekly biology, chemistry, and physics revision cycles.",
    highlights: ["NCERT Deep Dive", "Weekly Full Mocks", "AIIMS Pattern Practice"],
    color: "from-gold-400/20 to-gold-500/5",
    border: "border-gold-400/30",
    tagColor: "bg-gold-400/10 text-gold-400",
  },
  {
    icon: "🏦",
    title: "Banking & Finance",
    tag: "IBPS / SBI / RBI",
    description:
      "Structured preparation for IBPS PO, SBI Clerk, RBI Grade B with quantitative aptitude, reasoning, and English language mastery.",
    highlights: ["Speed Math Drills", "Current Affairs Daily", "Interview Prep"],
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/30",
    tagColor: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: "🎯",
    title: "SSC & UPSC",
    tag: "Government Services",
    description:
      "End-to-end civil services preparation from Prelims to Mains, with optional personality test grooming for IAS/IPS aspirants.",
    highlights: ["Essay Workshops", "GS Foundation Course", "Mains Answer Writing"],
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/30",
    tagColor: "bg-rose-500/10 text-rose-400",
  },
];

const Programs = () => {
  return (
    <div className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-body text-teal-600 font-semibold text-sm tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900">
            Programs Designed to{" "}
            <span className="gradient-text">Win</span>
          </h2>
          <p className="font-body text-slate-500 text-lg max-w-2xl mx-auto">
            Each program is meticulously crafted by top-rank holders and seasoned educators
            to give you a measurable edge.
          </p>
        </div>

        {/* Program cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className={`card-hover bg-gradient-to-br ${prog.color} border ${prog.border} rounded-2xl p-6 space-y-4 bg-white shadow-sm`}
            >
              {/* Icon + Tag */}
              <div className="flex items-start justify-between">
                <span className="text-4xl">{prog.icon}</span>
                <span className={`font-body text-xs font-semibold px-2.5 py-1 rounded-full ${prog.tagColor}`}>
                  {prog.tag}
                </span>
              </div>

              {/* Title + Description */}
              <div>
                <h3 className="font-display font-bold text-navy-900 text-lg mb-2">{prog.title}</h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed">{prog.description}</p>
              </div>

              {/* Highlight bullets */}
              <ul className="space-y-1.5">
                {prog.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 font-body text-slate-600 text-sm">
                    <span className="text-teal-500">✓</span> {h}
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <a
                href="#contact"
                className="inline-block font-body font-semibold text-sm text-teal-600 hover:text-teal-500 transition-colors"
              >
                Enquire Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;