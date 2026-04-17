"use client";
import Link from "next/link";
import SectionReveal from "../ui/section-reveal";
import { useDictionary } from "../providers/dictionary-provider";

type HeroProps = {
  locale: string;
};

export default function Hero({ locale }: HeroProps) {
  const dict = useDictionary();
  return (
    <section className="relative overflow-hidden bg-[#16120f] px-6 pb-16 pt-44 text-white sm:pt-48 md:px-10 md:pt-36 lg:px-16 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(227,181,112,0.28),_transparent_28%),radial-gradient(circle_at_80%_30%,_rgba(109,71,36,0.42),_transparent_28%)]" />
      <div className="absolute left-1/2 top-8 hidden h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/6 xl:block" />

      <SectionReveal className="relative mx-auto grid min-h-[72vh] max-w-7xl gap-10 xl:min-h-[82vh] xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.38em] text-[#d2b48c]">
            {dict.hero.eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {dict.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            {dict.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${locale}/services`}
              className="w-full rounded-full bg-[#d6a35d] px-7 py-3 text-center text-sm font-semibold text-[#1c1611] transition hover:bg-[#e2b577] sm:w-auto"
            >
              {dict.hero.primaryCta}
            </Link>

            <Link
              href={`/${locale}/quote`}
              className="w-full rounded-full border border-white/20 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              {dict.hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-14 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
            {dict.hero.stats.map((stat) => (
              <div key={stat.value + stat.label}>
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="mt-2 text-sm text-white/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 backdrop-blur 2xl:block">
            {dict.hero.floatingLabels.top}
          </div>

          <div className="absolute bottom-8 right-0 hidden rounded-full border border-[#d2b48c]/30 bg-[#d2b48c]/10 px-5 py-3 text-sm text-[#f1ddc0] backdrop-blur 2xl:block">
            {dict.hero.floatingLabels.bottom}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/6 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:rounded-[36px] sm:p-5">
            <div className="rounded-[24px] border border-white/10 bg-[#201914] p-4 sm:rounded-[30px] sm:p-6">
              <div className="grid gap-4 2xl:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[24px] bg-[linear-gradient(160deg,#f0dfc8,#bf905b,#38281b)] p-5 text-[#1d1814] sm:rounded-[28px] sm:p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#5d4630]">
                    {dict.hero.card.eyebrow}
                  </p>

                  <h2 className="mt-5 max-w-md text-2xl font-semibold leading-tight sm:text-3xl">
                    {dict.hero.card.title}
                  </h2>

                  <div className="mt-10 rounded-[24px] bg-white/55 p-4 backdrop-blur sm:mt-16">
                    <p className="text-sm text-[#5d4630]">{dict.hero.card.focusLabel}</p>
                    <p className="mt-2 text-lg font-semibold sm:text-xl">
                      {dict.hero.card.focusValue}
                    </p>

                    <p className="mt-5 text-sm text-[#5d4630]">{dict.hero.card.approachLabel}</p>
                    <p className="mt-1 text-base font-medium">
                      {dict.hero.card.approachValue}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] bg-white/5 p-5">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-white/70">{dict.hero.card.planningLabel}</span>
                      <span className="text-[#d6a35d]">{dict.hero.card.planningValue}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[88%] rounded-full bg-[#d6a35d]" />
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/60">{dict.hero.card.supportLabel}</p>
                    <ul className="mt-4 space-y-3 text-sm text-white/85">
                      {dict.hero.card.supportItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-4 2xl:grid-cols-2">
                    <div className="rounded-[24px] bg-[#f5f1e8] p-5 text-[#1d1814]">
                      <p className="text-sm text-[#7b6a57]">{dict.hero.card.serviceAreaLabel}</p>
                      <p className="mt-2 text-xl font-semibold sm:text-2xl">
                        {dict.hero.card.serviceAreaValue}
                      </p>
                    </div>

                    <div className="rounded-[24px] bg-white/5 p-5">
                      <p className="text-sm text-white/60">{dict.hero.card.workStyleLabel}</p>
                      <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                        {dict.hero.card.workStyleValue}
                      </p>
                    </div>
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