"use client";
import { useDictionary } from "../providers/dictionary-provider";
import SectionReveal from "../ui/section-reveal";
import DnaBackground from "../ui/dna-background";

export default function DiscoveryGrid() {
  const dict = useDictionary();

  return (
    <SectionReveal
      className="relative overflow-hidden bg-white px-6 py-16 md:px-10 lg:px-16 lg:py-20"
      delay={100}
    >
      <DnaBackground tone="light" density="page" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              {dict.discovery.eyebrow}
            </p>

            <h2 className="max-w-md text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-5xl">
              {dict.discovery.title}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {dict.discovery.items.map((item) => (
              <article
                key={item.title}
                className="group rounded-[24px] border border-[#ece2d4] bg-[#fcfaf6] p-6 transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(30,24,18,0.08)] sm:rounded-[30px] sm:p-7"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1814] text-lg font-semibold text-white">
                  +
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1814]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f554c]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
