// Testimonials.jsx — Student success quotes section
import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    result: "AIR 47 — NEET 2024",
    avatar: "PS",
    avatarBg: "bg-teal-500",
    quote:
      "ElevateIAS's structured approach to Biology completely changed how I study. The faculty's dedication at 10 PM doubt sessions is unmatched anywhere.",
  },
  {
    name: "Arjun Mehta",
    result: "AIR 112 — JEE Advanced 2024",
    avatar: "AM",
    avatarBg: "bg-gold-500",
    quote:
      "The mock test series was brutal — and that's exactly what I needed. By the time the actual exam arrived, it felt easy. Thank you ElevateIAS.",
  },
  {
    name: "Sneha Patel",
    result: "SBI PO — Selected 2024",
    avatar: "SP",
    avatarBg: "bg-purple-500",
    quote:
      "The banking program's current affairs module and speed math drills gave me a massive edge in the prelims. The interview grooming was the cherry on top.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14 space-y-4">
          <span className="font-body text-teal-600 font-semibold text-sm tracking-widest uppercase">
            Student Success
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900">
            Straight From Our{" "}
            <span className="gradient-text">Achievers</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-slate-50 border border-slate-100 rounded-2xl p-7 space-y-5 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-5 right-6 font-display text-7xl text-teal-100 select-none leading-none">
                "
              </span>

              {/* Quote text */}
              <p className="font-body text-slate-600 text-base leading-relaxed relative z-10">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center font-display font-bold text-white text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-body font-semibold text-navy-900 text-sm">{t.name}</div>
                  <div className="font-body text-teal-600 text-xs font-medium">{t.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;