import AboutCarousel from "../../../components/about/about-carousel";
import Footer from "../../../components/layout/footer";
import Navbar from "../../../components/layout/navbar";
import SectionReveal from "../../../components/ui/section-reveal";
import DnaBackground from "../../../components/ui/dna-background";
import { getDictionary } from "@/src/lib/getDictionaries";
export default async function AboutMissionPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" | "de" | "es" | "ar" | "ru" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="relative overflow-hidden bg-[#f8f4ed]">
        <DnaBackground tone="light" density="page" />
        <Navbar locale={locale} />
        <main className="px-6 py-24 md:px-10 md:py-28 lg:px-16">
          <SectionReveal className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              {dict.mission.eyebrow}
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
              {dict.mission.title}
            </h1>

            <p className="mt-8 text-base leading-8 text-[#5f554c] sm:text-lg">
              {dict.mission.description}
            </p>

            <div className="mt-10">
              <AboutCarousel slides={dict.mission.slides} />
            </div>
          </SectionReveal>
        </main>
      </div>
      <Footer locale={locale} />
    </>
  );
}
