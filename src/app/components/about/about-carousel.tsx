"use client";

import { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  title: string;
  description: string;
};

type AboutCarouselProps = {
  slides: Slide[];
};

export default function AboutCarousel({ slides }: AboutCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <div className="rounded-[34px] border border-[#eadfce] bg-white p-5 shadow-[0_30px_80px_rgba(30,24,18,0.08)] sm:p-6">
      <div className="flex flex-wrap gap-2">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.eyebrow}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                isActive
                  ? "bg-[#1d1814] text-white"
                  : "bg-[#f3ede4] text-[#6d6357] hover:bg-[#eadfce]"
              }`}
            >
              {slide.eyebrow}
            </button>
          );
        })}
      </div>

      <div className="mt-6 min-h-[280px] rounded-[28px] bg-[linear-gradient(160deg,#f8f3eb,#ead9c0,#b98956)] p-6 text-[#1d1814] sm:min-h-[320px] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d5338]">
          {activeSlide.eyebrow}
        </p>
        <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {activeSlide.title}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#3d342c] sm:text-lg">
          {activeSlide.description}
        </p>
      </div>
    </div>
  );
}
