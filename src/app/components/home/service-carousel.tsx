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
    <SectionReveal className="bg-[#f5f1e8] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#9a7444] sm:text-xs">
              {dict.serviceCarousel.eyebrow}
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-tight text-[#1d1814] sm:text-4xl md:text-5xl">
              {dict.serviceCarousel.title}
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[#5f554c] sm:text-base md:text-lg">
            {dict.serviceCarousel.description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:px-5 sm:py-2.5 sm:text-sm ${
                  isActive
                    ? "bg-[#1d1814] text-white shadow-[0_16px_34px_rgba(29,24,20,0.16)]"
                    : "bg-white text-[#5f554c] hover:bg-[#ece4d7]"
                }`}
              >
                {slide.tag}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
          <article
            className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br ${activeSlide.accent} p-5 text-white shadow-[0_24px_70px_rgba(30,24,18,0.14)] sm:rounded-[30px] sm:p-6 lg:p-7`}
          >
            <div className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/80 sm:px-4 sm:py-1.5">
              {activeSlide.id}
            </div>

            <div className="max-w-2xl pr-10 sm:pr-14">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/72 sm:text-xs">
                {activeSlide.tag}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
                {activeSlide.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/78 sm:text-base">
                {activeSlide.description}
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {activeSlide.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[18px] border border-white/15 bg-white/10 p-3.5 backdrop-blur-sm sm:rounded-[20px] sm:p-4"
                >
                  <p className="text-sm leading-6 text-white/88">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-12 -right-10 hidden h-40 w-40 rounded-full border border-white/15 bg-white/10 blur-[2px] sm:block" />
          </article>

          <div className="grid gap-4">
            <article className="rounded-[24px] bg-white p-5 shadow-[0_22px_60px_rgba(30,24,18,0.08)] sm:rounded-[30px] sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a7444] sm:text-xs">
                {dict.serviceCarousel.approach.eyebrow}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#1d1814] sm:text-xl md:text-2xl">
                {dict.serviceCarousel.approach.title}
              </h3>

              <div className="mt-6 space-y-3">
                {dict.serviceCarousel.approach.steps.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[18px] bg-[#f5f1e8] px-4 py-3.5 sm:rounded-[20px]"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1d1814] text-xs font-semibold text-white sm:h-10 sm:w-10 sm:text-sm">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-medium leading-6 text-[#322821]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[24px] bg-[#1d1814] p-5 text-white shadow-[0_22px_60px_rgba(30,24,18,0.14)] sm:rounded-[30px] sm:p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#d3ae79] sm:text-xs">
                {dict.serviceCarousel.focus.eyebrow}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {dict.serviceCarousel.focus.stats.map((stat) => (
                  <div
                    key={stat.value + stat.label}
                    className="rounded-[18px] bg-white/6 p-4 sm:rounded-[20px]"
                  >
                    <p className="text-2xl font-semibold sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-xs leading-6 text-white/65 sm:text-sm">
                      {stat.label}
                    </p>
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