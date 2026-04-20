import AboutCarousel from "../../components/about/about-carousel";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import SectionReveal from "../../components/ui/section-reveal";
import DnaBackground from "../../components/ui/dna-background";
import { getDictionary } from "@/src/lib/getDictionaries";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="relative overflow-hidden bg-[#f8f4ed]">
        <DnaBackground tone="light" density="page" />
        <Navbar locale={locale} />
        <main className="px-6 py-24 md:px-10 md:py-28 lg:px-16">
          <SectionReveal className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              {dict.aboutPage.eyebrow}
            </p>

            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
              {dict.aboutPage.title}
            </h1>

            <div className="mt-12">
              <AboutCarousel slides={dict.aboutPage.slides} />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {dict.aboutPage.sections.map((section: any) => (
                <article
                  key={section.title}
                  className="rounded-[26px] bg-white p-6 shadow-[0_24px_60px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-8"
                >
                  <h2 className="text-2xl font-semibold text-[#1d1814]">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#5f554c]">
                    {section.description}
                  </p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </main>
      </div>
      <Footer locale={locale} />
    </>
  );
}
