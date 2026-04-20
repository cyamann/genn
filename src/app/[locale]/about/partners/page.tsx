import PartnersShowcase from "../../../components/about/partners-showcase";
import Footer from "../../../components/layout/footer";
import Navbar from "../../../components/layout/navbar";
import SectionReveal from "../../../components/ui/section-reveal";
import DnaBackground from "../../../components/ui/dna-background";
import { getDictionary } from "@/src/lib/getDictionaries";

export default async function AboutPartnersPage({
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
          <SectionReveal className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              {dict.partners.eyebrow}
            </p>

            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
              {dict.partners.title}
            </h1>

            <div className="mt-12">
              <PartnersShowcase dictionary={dict.partners.showcase} />
            </div>
          </SectionReveal>
        </main>
      </div>
      <Footer locale={locale} />
    </>
  );
}
