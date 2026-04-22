// Gallery.jsx — Responsive photo grid of institute life
import React from "react";

// 6 high-quality Unsplash images: students, classroom, campus
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
    alt: "Students studying in library",
    span: "col-span-2 row-span-2", // large featured image
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    alt: "Modern classroom with students",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    alt: "Teacher explaining on whiteboard",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
    alt: "Group study session",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80",
    alt: "Student with books preparing for exam",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    alt: "Campus life and study area",
    span: "",
  },
];

const Gallery = () => {
  return (
    <div className="bg-navy-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14 space-y-4">
          <span className="font-body text-teal-400 font-semibold text-sm tracking-widest uppercase">
            Campus Life
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            Where Focus Meets{" "}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="font-body text-slate-400 text-lg max-w-xl mx-auto">
            State-of-the-art facilities designed to cultivate the perfect learning environment.
          </p>
        </div>

        {/* Masonry-style CSS Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-3 h-auto lg:h-[500px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl group relative ${img.span || ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[160px]"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-all duration-300 flex items-end p-4">
                <p className="text-white text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;