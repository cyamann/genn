import Link from "next/link";

type FooterProps = {
  locale: string;
};

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="mt-20 bg-[#120f0d] px-6 pb-8 pt-14 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:p-10">
          <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d3ae79]">
                Genn Logistics
              </p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Gumruk ve lojistik sureclerinde daha net iletisim, daha duzenli takip ve daha guvenli akis
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
                Dis ticaret ve operasyon sureclerinizde planlama, koordinasyon ve surec takibini tek bir
                yerde toplamak icin calisiyoruz.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  Sayfalar
                </h3>
                <div className="mt-4 grid gap-3 text-sm text-white/74">
                  <Link href={`/${locale}`}>Ana Sayfa</Link>
                  <Link href={`/${locale}/services`}>Hizmetler</Link>
                  <Link href={`/${locale}/about`}>Hakkimizda</Link>
                  <Link href={`/${locale}/careers`}>Kariyer</Link>
                  <Link href={`/${locale}/contact`}>Iletisim</Link>
                  <Link href={`/${locale}/quote`}>Teklif Al</Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  Iletisim
                </h3>
                <div className="mt-4 grid gap-3 text-sm text-white/74">
                  <p>info@sirket.com</p>
                  <p>+90 212 000 00 00</p>
                  <p>Istanbul, Turkiye</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Genn. Tum haklari saklidir.</p>
            <p>Planli operasyon. Net iletisim. Guvenilir surec.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
