"use client";

import { useEffect, useState } from "react";

const logos = [
  { name: "MAERSK", accent: "bg-[#d9ecf7] text-[#0b4d72]" },
  { name: "MSC", accent: "bg-[#f2e7d2] text-[#6f4f22]" },
  { name: "CMA CGM", accent: "bg-[#dce6f9] text-[#244c8f]" },
  { name: "HAPAG-LLOYD", accent: "bg-[#f5ddcf] text-[#934726]" },
  { name: "DSV", accent: "bg-[#efe7f6] text-[#5a2b79]" },
  { name: "DB SCHENKER", accent: "bg-[#f7dbdb] text-[#8d1f1f]" },
  { name: "DHL", accent: "bg-[#fff0b8] text-[#7a4d00]" },
  { name: "CEVA", accent: "bg-[#e1f3eb] text-[#1f5f4a]" },
  { name: "KUEHNE+NAGEL", accent: "bg-[#dae9fb] text-[#214c85]" },
  { name: "BOLLORE", accent: "bg-[#ece6de] text-[#574636]" },
  { name: "EKOL", accent: "bg-[#dff0ff] text-[#0d5a95]" },
  { name: "GEODIS", accent: "bg-[#f6ddd8] text-[#914334]" },
];

type PartnersShowcaseProps = {
  dictionary: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export default function PartnersShowcase({ dictionary }: PartnersShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % logos.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[34px] bg-[#1d1814] p-6 text-white shadow-[0_30px_90px_rgba(30,24,18,0.16)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d3ae79]">
          {dictionary.eyebrow}
        </p>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          {dictionary.title}
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
          {dictionary.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {logos.slice(0, 6).map((logo) => (
            <div
              key={logo.name}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-[0.22em] ${logo.accent}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {logos.map((logo, index) => (
          <div
            key={logo.name}
            className={`flex min-h-[120px] items-center justify-center rounded-[28px] border border-[#eadfce] px-4 text-center text-sm font-semibold tracking-[0.22em] shadow-[0_20px_60px_rgba(30,24,18,0.06)] transition sm:min-h-[140px] ${
              activeIndex === index
                ? "scale-[1.03] bg-[#1d1814] text-white"
                : `${logo.accent} border-transparent`
            }`}
          >
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}