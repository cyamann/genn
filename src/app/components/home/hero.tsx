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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#efe3d3_0%,#f6efe4_48%,#e8ddcf_100%)] px-4 pb-10 pt-32 text-[#1d1814] sm:px-6 sm:pb-12 sm:pt-36 md:px-8 md:pt-40 lg:px-12 lg:pb-14 lg:pt-44 xl:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(214,163,93,0.28),_transparent_30%),radial-gradient(circle_at_82%_22%,_rgba(185,137,86,0.2),_transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.32),transparent_46%,rgba(198,146,74,0.08))]" />
      <DnaBackground tone="light" density="hero" />
      <div className="absolute left-1/2 top-6 hidden h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-[#c6924a]/10 xl:block" />

      <SectionReveal className="relative mx-auto grid max-w-7xl gap-6 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
        <div className="max-w-2xl xl:max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#9a7444] sm:text-xs">
            {dict.hero.eyebrow}
          </p>

          <h1 className="max-w-3xl text-[1.7rem] font-semibold leading-[1.08] tracking-tight sm:text-[2.15rem] md:text-[2.5rem] lg:text-[2.8rem]">
            {dict.hero.title}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#5f554c] sm:text-base md:text-[1.05rem]">
            {dict.hero.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/services`}
              className="w-full rounded-full bg-[#d6a35d] px-6 py-3 text-center text-sm font-semibold text-[#1c1611] transition hover:bg-[#e2b577] sm:w-auto"
            >
              {dict.hero.primaryCta}
            </Link>

            <Link
              href={`/${locale}/quote`}
              className="w-full rounded-full border border-[#d8c9b5] bg-white/70 px-6 py-3 text-center text-sm font-semibold text-[#1d1814] transition hover:bg-white sm:w-auto"
            >
              {dict.hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-8 grid gap-4 border-t border-[#d8c9b5] pt-5 sm:grid-cols-3">
            {dict.hero.stats.map((stat) => (
              <div key={stat.value + stat.label}>
                <p className="text-2xl font-semibold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-6 text-[#6a5c4f] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-4 hidden rounded-full border border-[#d8c9b5] bg-white/70 px-4 py-2 text-xs text-[#6a5c4f] backdrop-blur 2xl:block">
            {dict.hero.floatingLabels.top}
          </div>

          <div className="absolute bottom-6 right-0 hidden rounded-full border border-[#c6924a]/25 bg-white/70 px-4 py-2 text-xs text-[#9a7444] backdrop-blur 2xl:block">
            {dict.hero.floatingLabels.bottom}
          </div>

          <div className="rounded-[24px] border border-[#d9c5a9] bg-[#eadac4]/82 p-3 shadow-[0_24px_80px_rgba(30,24,18,0.12)] backdrop-blur-sm sm:rounded-[30px] sm:p-4">
            <div className="rounded-[20px] border border-[#dec9ad] bg-[#efe2cf] p-3 sm:rounded-[26px] sm:p-4">
              <div className="grid gap-3 xl:grid-cols-[1fr_0.92fr]">
                <div className="rounded-[20px] bg-[linear-gradient(160deg,#f0dfc8,#bf905b,#38281b)] p-4 text-[#1d1814] sm:rounded-[24px]">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#5d4630]">
                    {dict.hero.card.eyebrow}
                  </p>

                  <h2 className="mt-2 max-w-sm text-lg font-semibold leading-snug sm:text-xl xl:text-[1.15rem]">
                    {dict.hero.card.title}
                  </h2>

                  <div className="mt-5 rounded-[18px] bg-[#efe2cf]/78 p-4 backdrop-blur">
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

                <div className="space-y-4">
                  <div className="rounded-[20px] border border-[#d6a35d]/30 bg-[#f3e5cf] p-4">
                    <p className="text-sm font-bold leading-6 text-[#5d4630]">
                      {dict.hero.card.gazetteLabel}
                    </p>
                    <Link
                      href="https://www.resmigazete.gov.tr/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex text-sm font-semibold text-[#1d1814] underline decoration-[#d6a35d]/70 underline-offset-4 transition hover:text-[#9a7444] sm:text-base"
                    >
                      {dict.hero.card.gazetteLinkLabel}
                    </Link>
                  </div>

                  <div className="rounded-[20px] bg-[#f7eddc] p-5">
                    <div className="mb-2 flex items-center justify-between gap-3 text-xs sm:text-sm">
                      <span className="text-[#6a5c4f]">
                        {dict.hero.card.planningLabel}
                      </span>
                      <span className="text-[#d6a35d]">
                        {dict.hero.card.planningValue}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-[#eadfce]">
                      <div className="h-2 w-[88%] rounded-full bg-[#d6a35d]" />
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-[#dec9ad] bg-[#f7eddc] p-4">
                    <p className="text-xs text-[#6a5c4f] sm:text-sm">
                      {dict.hero.card.supportLabel}
                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-[#322821]">
                      {dict.hero.card.supportItems.map((item) => (
                        <li key={item} className="leading-6">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[20px] bg-[#f7eddc] p-4">
                    <p className="text-xs text-[#6a5c4f] sm:text-sm">
                      {dict.hero.card.workStyleLabel}
                    </p>
                    <p className="mt-1.5 text-lg font-semibold leading-snug text-[#1d1814] sm:text-xl">
                      {dict.hero.card.workStyleValue}
                    </p>
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
