// Footer.jsx — Site footer with contact info and links
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">E</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Elevate<span className="text-teal-400">IAS</span>
              </span>
            </div>
            <p className="font-body text-slate-500 text-sm leading-relaxed max-w-xs">
              India's premier competitive exam coaching institute, empowering
              students since 2009 with 10,000+ selections nationwide.
            </p>
            <div className="space-y-1">
              <p className="font-body text-slate-400 text-sm">📍 123 Knowledge Park, Sector 18, Noida, UP 201301</p>
              <p className="font-body text-slate-400 text-sm">📞 +91 98765 43210</p>
              <p className="font-body text-slate-400 text-sm">✉️ admissions@elevateias.in</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-base">Programs</h4>
            <ul className="space-y-2">
              {["JEE Main & Advanced", "NEET UG", "Banking Exams", "SSC / UPSC", "Foundation Batch"].map((item) => (
                <li key={item}>
                  <a href="#programs" className="font-body text-slate-500 hover:text-teal-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4 text-base">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Our Faculty", "Results", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-slate-500 hover:text-teal-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-slate-600 text-xs">
            © {currentYear} ElevateIAS. All rights reserved.
          </p>
          <p className="font-body text-slate-600 text-xs">
            Privacy Policy · Terms of Service · Refund Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;