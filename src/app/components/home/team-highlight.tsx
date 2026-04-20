"use client";

import SectionReveal from "../ui/section-reveal";
import { useDictionary } from "../providers/dictionary-provider";
import DnaBackground from "../ui/dna-background";
export default function TeamHighlight() {
  const dict = useDictionary();

  return (
    <SectionReveal
      className="relative overflow-hidden bg-[#e7ddcf] px-6 py-16 md:px-10 lg:px-16 lg:py-20"
      delay={140}
    >
      <DnaBackground tone="light" density="page" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[28px] bg-[#1d1814] p-6 text-white shadow-[0_30px_90px_rgba(30,24,18,0.18)] sm:rounded-[36px] sm:p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d3ae79]">
            {dict.teamHighlight.eyebrow}
          </p>
          <h2 className="mt-5 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {dict.teamHighlight.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
            {dict.teamHighlight.description}
          </p>
        </article>

        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[28px] bg-[#f8f4ed] p-6 shadow-[0_26px_70px_rgba(30,24,18,0.08)] sm:rounded-[36px] sm:p-8">
            <div className="rounded-[22px] bg-[linear-gradient(160deg,#d6be9d,#9c7447,#3b2d20)] p-5 text-white sm:rounded-[28px] sm:p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                {dict.teamHighlight.workStyle.label}
              </p>
              <p className="mt-12 text-xl font-semibold sm:mt-20 sm:text-2xl">
                {dict.teamHighlight.workStyle.value}
              </p>
            </div>
          </article>

          <div className="grid gap-6">
            {dict.teamHighlight.stats.map((stat) => (
              <article
                key={stat.value + stat.label}
                className="rounded-[24px] bg-white p-6 shadow-[0_26px_70px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-7"
              >
                <p className="text-4xl font-semibold text-[#1d1814]">{stat.value}</p>
                <p className="mt-3 text-sm leading-7 text-[#5f554c]">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
