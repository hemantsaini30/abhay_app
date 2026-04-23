// Hero.jsx — Full-screen landing section with headline and CTA
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-navy-900 hero-pattern flex items-center overflow-hidden">

      {/* Decorative background circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text content */}
        <div className="space-y-7">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-400 text-sm font-body font-medium">🙏 Jai Shree Shyaam Coaching Institute</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Your Dream
            <br />
            <span className="gradient-text">Rank Starts</span>
            <br />
            Here.
          </h1>

          {/* Sub-headline */}
          <p className="font-body text-slate-400 text-lg lg:text-xl leading-relaxed max-w-lg">
            Expert faculty, proven strategies, and a track record of{" "}
            <span className="text-white font-medium">10,000+ selections</span>. Join ElevateIAS
            and turn your ambition into achievement.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 pt-2">
            {[
              { num: "10K+", label: "Selections" },
              { num: "98%", label: "Success Rate" },
              { num: "15+", label: "Years Legacy" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-teal-400">{stat.num}</div>
                <div className="font-body text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-400 text-white font-body font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-xl shadow-teal-500/30 hover:shadow-teal-400/50 text-center"
            >
              Get Free Counseling →
            </a>
            <a
              href="#programs"
              className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-body font-medium px-8 py-4 rounded-xl text-base transition-all duration-200 text-center"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* Right: Visual card stack */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
              alt="Students studying"
              className="rounded-2xl shadow-2xl shadow-black/40 w-full object-cover h-[480px]"
            />
            {/* Floating achievement card */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-xl px-5 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center text-xl">🏆</div>
                <div>
                  <div className="font-body font-semibold text-navy-900 text-sm">AIR 47 — NEET 2024</div>
                  <div className="font-body text-slate-500 text-xs">Priya, JSS Coaching Alumni</div>
                </div>
              </div>
            </div>
            {/* Floating batch card */}
            <div className="absolute -top-4 -right-6 bg-navy-800 border border-white/10 rounded-xl px-4 py-3 shadow-xl">
              <div className="font-body text-teal-400 text-xs font-medium">Next Batch Starts</div>
              <div className="font-display text-white font-bold text-base">June 15, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;