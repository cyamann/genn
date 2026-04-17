import AboutCarousel from "../../../components/about/about-carousel";
import Footer from "../../../components/layout/footer";
import Navbar from "../../../components/layout/navbar";
import SectionReveal from "../../../components/ui/section-reveal";

export default async function AboutCompanyPage({
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">Biz Kimiz</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
            Gumruk ve lojistik sureclerini birlikte planlayan bir operasyon ekibiyiz
          </h1>
          <p className="mt-8 text-base leading-8 text-[#5f554c] sm:text-lg">
            Musterilerimizin ithalat, ihracat, tasima ve depolama ihtiyaclarina uygun daha duzenli bir
            surec kurmayi hedefliyoruz. Teknik bilgi kadar iletisim ve koordinasyonu da onemsiyoruz.
          </p>

          <div className="mt-10">
            <AboutCarousel
              slides={[
                {
                  eyebrow: "Planlama",
                  title: "Sureci baslatmadan once resmi ve operasyonel ihtiyaci netlestiriyoruz",
                  description:
                    "Belge, tasima ve zamanlama ayaklarini birlikte degerlendirerek gereksiz belirsizligi azaltmaya calisiyoruz.",
                },
                {
                  eyebrow: "Takip",
                  title: "Iletisim ve koordinasyonu surecin ayrilmaz parcasi olarak goruyoruz",
                  description:
                    "Musterinin surece hakim kalmasi icin duzenli geri bildirim ve net sorumluluk dagilimi benimsiyoruz.",
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
