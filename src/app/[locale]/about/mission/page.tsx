import AboutCarousel from "../../../components/about/about-carousel";
import Footer from "../../../components/layout/footer";
import Navbar from "../../../components/layout/navbar";
import SectionReveal from "../../../components/ui/section-reveal";

export default async function AboutMissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-[#f8f4ed] px-6 py-24 md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">Amacimiz</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
            Surecleri daha anlasilir, daha takip edilebilir ve daha guvenilir hale getirmek
          </h1>
          <p className="mt-8 text-base leading-8 text-[#5f554c] sm:text-lg">
            Her yukte ayni cozumun gecerli olmadigini biliyoruz. Bu nedenle amacimiz, ihtiyaca gore
            planlama yapip operasyonu gereksiz karmasadan uzaklastirmak.
          </p>

          <div className="mt-10">
            <AboutCarousel
              slides={[
                {
                  eyebrow: "Sadelik",
                  title: "Karmasik operasyonu daha anlasilir karar adimlarina bolmek istiyoruz",
                  description:
                    "Surec uzadikca iletisim zayiflamasin diye operasyonu daha okunur bir yapiyla yonetmeyi hedefliyoruz.",
                },
                {
                  eyebrow: "Guven",
                  title: "Musterinin ne oldugunu bildigi ve ne bekleyecegini gordugu bir surec kurmak istiyoruz",
                  description:
                    "Belirsizligi azaltan, acik ve tutarli iletisim kuran bir hizmet dili olusturmak onceligimiz.",
                },
              ]}
            />
          </div>
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}
