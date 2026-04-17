import SectionReveal from "../ui/section-reveal";

export default function TeamHighlight() {
  return (
    <SectionReveal className="bg-[#e7ddcf] px-6 py-16 md:px-10 lg:px-16 lg:py-20" delay={140}>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[28px] bg-[#1d1814] p-6 text-white shadow-[0_30px_90px_rgba(30,24,18,0.18)] sm:rounded-[36px] sm:p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d3ae79]">Ekip ve Yaklasim</p>
          <h2 className="mt-5 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Sureci sadece tasima olarak degil, sorumluluk olarak ele alan bir ekip yapisi
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
            Musteriler icin guven veren sey bazen sadece hizmet listesi degil, o sureci nasil takip
            ettiginiz ve nasil iletisim kurdugunuzdur. Bu alan o guveni daha dogru anlatmak icin var.
          </p>
        </article>

        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[28px] bg-[#f8f4ed] p-6 shadow-[0_26px_70px_rgba(30,24,18,0.08)] sm:rounded-[36px] sm:p-8">
            <div className="rounded-[22px] bg-[linear-gradient(160deg,#d6be9d,#9c7447,#3b2d20)] p-5 text-white sm:rounded-[28px] sm:p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">Calisma sekli</p>
              <p className="mt-12 text-xl font-semibold sm:mt-20 sm:text-2xl">Planli iletisim, duzenli takip, net sorumluluk</p>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="rounded-[24px] bg-white p-6 shadow-[0_26px_70px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-7">
              <p className="text-4xl font-semibold text-[#1d1814]">14+</p>
              <p className="mt-3 text-sm leading-7 text-[#5f554c]">Gumruk ve lojistik sureclerine odakli ekip yapisi</p>
            </article>
            <article className="rounded-[24px] bg-white p-6 shadow-[0_26px_70px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-7">
              <p className="text-4xl font-semibold text-[#1d1814]">9 dk</p>
              <p className="mt-3 text-sm leading-7 text-[#5f554c]">Hizli geri donus ve ilk yonlendirme hedefi</p>
            </article>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
