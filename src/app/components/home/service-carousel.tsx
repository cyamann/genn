"use client";

import { useEffect, useState } from "react";
import SectionReveal from "../ui/section-reveal";

const slides = [
  {
    id: "01",
    tag: "Gumrukleme",
    title: "Ithalat ve ihracat sureclerinde belge, beyan ve mevzuat takibini destekliyoruz",
    description:
      "Surecin gerektirdigi evrak akisini, beyan hazirligini ve operasyon koordinasyonunu daha duzenli bir yapida ele aliyoruz.",
    bullets: ["Beyan surec destegi", "Belge kontrol akisi", "Koordinasyon ve takip"],
    accent: "from-[#d8b27d] via-[#9f6c38] to-[#2f2217]",
  },
  {
    id: "02",
    tag: "Karayolu",
    title: "Yurtiçi ve uluslararasi karayolu operasyonlarinda planli sevkiyat destegi",
    description:
      "Parsiyel ya da komple yuk ihtiyaclarinda, sevkiyat ritmine uygun planlama ve surec koordinasyonu sunuyoruz.",
    bullets: ["Yukleme planlamasi", "Sinir gecisi koordinasyonu", "Teslim sureci takibi"],
    accent: "from-[#ecdfca] via-[#b38a58] to-[#463224]",
  },
  {
    id: "03",
    tag: "Denizyolu",
    title: "Konteyner bazli tasimalarda daha dengeli maliyet ve sure planlamasi",
    description:
      "Hat secimi, liman surecleri ve evrak akisinda daha kontrollu bir operasyon akisi olusturuyoruz.",
    bullets: ["FCL / LCL organizasyonu", "Liman surec takibi", "Dokumantasyon destegi"],
    accent: "from-[#d7dce0] via-[#698198] to-[#1f2f3d]",
  },
  {
    id: "04",
    tag: "Havayolu",
    title: "Zaman hassasiyetli gonderiler icin hizli ve duzenli havayolu organizasyonu",
    description:
      "Acil sevkiyatlarda kapasite, belge ve operasyon koordinasyonunu daha temiz bir surece ceviriyoruz.",
    bullets: ["Rezervasyon koordinasyonu", "Belge hazirlik destegi", "Sure odakli planlama"],
    accent: "from-[#f3e5ce] via-[#c68d4a] to-[#4c3723]",
  },
];

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <SectionReveal className="bg-[#f5f1e8] px-6 py-16 md:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              Hizmet Alanlari
            </p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-5xl">
              Ihtiyaca gore sekillenen hizmet basliklarini sade bir yapiyla sunuyoruz.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#5f554c] md:text-lg">
            Burada amac, teknik olarak var olmayan bir sistemi anlatmak degil; hangi alanlarda destek
            verdiginizi daha anlasilir ve daha duzenli bir sekilde gostermek.
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a7444]">Yaklasimimiz</p>
              <h3 className="mt-4 text-xl font-semibold text-[#1d1814] sm:text-2xl">Calisma bicimimizi sade adimlarla anlatiyoruz</h3>
              <div className="mt-8 space-y-4">
                {["Ihtiyac ve surec degerlendirmesi", "Uygun hizmet modelinin belirlenmesi", "Operasyon planlamasi ve koordinasyon", "Surecin iletisimle takip edilmesi"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center gap-4 rounded-[20px] bg-[#f5f1e8] px-4 py-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d1814] text-sm font-semibold text-white">
                        0{index + 1}
                      </span>
                      <p className="text-sm font-medium text-[#322821]">{item}</p>
                    </div>
                  )
                )}
              </div>
            </article>

            <article className="rounded-[28px] bg-[#1d1814] p-6 text-white shadow-[0_26px_70px_rgba(30,24,18,0.16)] sm:rounded-[32px] sm:p-7">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d3ae79]">Odak Noktasi</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-[24px] bg-white/6 p-5">
                  <p className="text-3xl font-semibold">18</p>
                  <p className="mt-2 text-sm text-white/65">Ulke ve dis ticaret baglantisi</p>
                </div>
                <div className="rounded-[24px] bg-white/6 p-5">
                  <p className="text-3xl font-semibold">320+</p>
                  <p className="mt-2 text-sm text-white/65">Surec, belge ve koordinasyon takibi</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
