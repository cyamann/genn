"use client";

import { useEffect, useState } from "react";
import SectionReveal from "../ui/section-reveal";
import { useDictionary } from "../providers/dictionary-provider";

export default function ServiceCarousel() {
  const dict = useDictionary();
  const slides = dict.serviceCarousel.slides;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <SectionReveal className="bg-[#f5f1e8] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              {dict.serviceCarousel.eyebrow}
            </p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-5xl">
              {dict.serviceCarousel.title}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#5f554c] md:text-lg">
            {dict.serviceCarousel.description}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-5 sm:py-3 ${
                  isActive
                    ? "bg-[#1d1814] text-white shadow-[0_20px_40px_rgba(29,24,20,0.18)]"
                    : "bg-white text-[#5f554c] hover:bg-[#ece4d7]"
                }`}
              >
                {slide.tag}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article
            className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br ${activeSlide.accent} p-6 text-white shadow-[0_30px_90px_rgba(30,24,18,0.18)] sm:rounded-[36px] sm:p-8 md:p-10 lg:min-h-[430px]`}
          >
            <div className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/80 sm:right-8 sm:top-8 sm:px-4 sm:py-2 sm:text-xs">
              {activeSlide.id}
            </div>

            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">{activeSlide.tag}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:mt-6 sm:text-3xl md:text-5xl">
                {activeSlide.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/78 md:text-lg">
                {activeSlide.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3">
              {activeSlide.bullets.map((bullet) => (
                <div key={bullet} className="rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-sm leading-7 text-white/88">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-14 -right-12 hidden h-52 w-52 rounded-full border border-white/15 bg-white/10 blur-[2px] sm:block" />
          </article>

          <div className="grid gap-6">
            <article className="rounded-[28px] bg-white p-6 shadow-[0_26px_70px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a7444]">
                {dict.serviceCarousel.approach.eyebrow}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#1d1814] sm:text-2xl">
                {dict.serviceCarousel.approach.title}
              </h3>
              <div className="mt-8 space-y-4">
                {dict.serviceCarousel.approach.steps.map((item, index) => (
                  <div key={item} className="flex items-center gap-4 rounded-[20px] bg-[#f5f1e8] px-4 py-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d1814] text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-medium text-[#322821]">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] bg-[#1d1814] p-6 text-white shadow-[0_26px_70px_rgba(30,24,18,0.16)] sm:rounded-[32px] sm:p-7">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d3ae79]">
                {dict.serviceCarousel.focus.eyebrow}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {dict.serviceCarousel.focus.stats.map((stat) => (
                  <div key={stat.value + stat.label} className="rounded-[24px] bg-white/6 p-5">
                    <p className="text-3xl font-semibold">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/65">{stat.label}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}