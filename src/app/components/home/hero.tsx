"use client";

import Link from "next/link";
import SectionReveal from "../ui/section-reveal";
import { useDictionary } from "../providers/dictionary-provider";
import DnaBackground from "../ui/dna-background";

type HeroProps = {
  locale: string;
};

export default function Hero({ locale }: HeroProps) {
  const dict = useDictionary();

  return (
    <section className="relative overflow-hidden bg-[#16120f] px-4 pb-12 pt-36 text-white sm:px-6 sm:pb-14 sm:pt-40 md:px-8 md:pt-40 lg:px-12 lg:pb-16 lg:pt-44 xl:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(227,181,112,0.24),_transparent_26%),radial-gradient(circle_at_80%_24%,_rgba(109,71,36,0.32),_transparent_24%)]" />
      <DnaBackground tone="dark" density="hero" />
      <div className="absolute left-1/2 top-6 hidden h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/6 xl:block" />

      <SectionReveal className="relative mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
        <div className="max-w-2xl xl:max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d2b48c] sm:text-xs">
            {dict.hero.eyebrow}
          </p>

          <h1 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {dict.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base md:text-lg">
            {dict.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/services`}
              className="w-full rounded-full bg-[#d6a35d] px-6 py-3 text-center text-sm font-semibold text-[#1c1611] transition hover:bg-[#e2b577] sm:w-auto"
            >
              {dict.hero.primaryCta}
            </Link>

            <Link
              href={`/${locale}/quote`}
              className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              {dict.hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {dict.hero.stats.map((stat) => (
              <div key={stat.value + stat.label}>
                <p className="text-2xl font-semibold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-6 text-white/65 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-4 hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur 2xl:block">
            {dict.hero.floatingLabels.top}
          </div>

          <div className="absolute bottom-6 right-0 hidden rounded-full border border-[#d2b48c]/30 bg-[#d2b48c]/10 px-4 py-2 text-xs text-[#f1ddc0] backdrop-blur 2xl:block">
            {dict.hero.floatingLabels.bottom}
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/6 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:rounded-[30px] sm:p-4">
            <div className="rounded-[20px] border border-white/10 bg-[#201914] p-3 sm:rounded-[26px] sm:p-5">
              <div className="grid gap-3 xl:grid-cols-[1fr_0.92fr]">
                <div className="rounded-[20px] bg-[linear-gradient(160deg,#f0dfc8,#bf905b,#38281b)] p-4 text-[#1d1814] sm:rounded-[24px] sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#5d4630]">
                    {dict.hero.card.eyebrow}
                  </p>

                  <h2 className="mt-4 max-w-md text-xl font-semibold leading-snug sm:text-2xl">
                    {dict.hero.card.title}
                  </h2>

                  <div className="mt-6 rounded-[18px] bg-white/55 p-4 backdrop-blur">
                    <p className="text-xs text-[#5d4630]">
                      {dict.hero.card.focusLabel}
                    </p>
                    <p className="mt-1.5 text-base font-semibold sm:text-lg">
                      {dict.hero.card.focusValue}
                    </p>

                    <p className="mt-4 text-xs text-[#5d4630]">
                      {dict.hero.card.approachLabel}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-6 sm:text-base">
                      {dict.hero.card.approachValue}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[20px] bg-white/5 p-6">
                    <div className="mb-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
                      <span className="text-white/70">
                        {dict.hero.card.planningLabel}
                      </span>
                      <span className="text-[#d6a35d]">
                        {dict.hero.card.planningValue}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[88%] rounded-full bg-[#d6a35d]" />
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60 sm:text-sm">
                      {dict.hero.card.supportLabel}
                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-white/85">
                      {dict.hero.card.supportItems.map((item) => (
                        <li key={item} className="leading-6">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[20px] bg-white/5 p-4">
                    <p className="text-xs text-white/60 sm:text-sm">
                      {dict.hero.card.workStyleLabel}
                    </p>
                    <p className="mt-1.5 text-lg font-semibold leading-snug text-white sm:text-xl">
                      {dict.hero.card.workStyleValue}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-[#d6a35d]/20 bg-[#d6a35d]/8 p-4">
                    <p className="text-sm font-medium leading-6 text-[#f4dfbf]">
                      {dict.hero.card.gazetteLabel}
                    </p>
                    <Link
                      href="https://www.resmigazete.gov.tr/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex text-sm font-semibold text-white underline decoration-[#d6a35d]/60 underline-offset-4 transition hover:text-[#f4dfbf] sm:text-base"
                    >
                      {dict.hero.card.gazetteLinkLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
