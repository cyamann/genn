import PartnersShowcase from "../../../components/about/partners-showcase";
import Footer from "../../../components/layout/footer";
import Navbar from "../../../components/layout/navbar";
import SectionReveal from "../../../components/ui/section-reveal";

export default async function AboutPartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-[#f8f4ed] px-6 py-24 md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">Partnerlerimiz</p>
          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
            Sureci guclendiren is ortakliklariyla daha dengeli operasyon kurguluyoruz
          </h1>
          <div className="mt-12">
            <PartnersShowcase />
          </div>
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}
