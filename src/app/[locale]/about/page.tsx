import AboutCarousel from "../../components/about/about-carousel";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import SectionReveal from "../../components/ui/section-reveal";

const sections = [
  {
    title: "Biz Kimiz",
    description:
      "Gumrukleme, dis ticaret ve lojistik sureclerinde planlama ve koordinasyon destegi sunan bir operasyon ekibiyiz.",
  },
  {
    title: "Amacimiz",
    description:
      "Karmasik surecleri daha sade, daha takip edilebilir ve daha guvenilir hale getirmek istiyoruz.",
  },
  {
    title: "Partnerlerimiz",
    description:
      "Tasima, depolama ve saha operasyonlarinda birlikte calistigimiz cozum ortaklariyla sureci guclendiriyoruz.",
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-[#f8f4ed] px-6 py-24 md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
            Hakkimizda
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
            Biz kimiz, neyi hedefliyoruz ve kimlerle calisiyoruz sorularina net cevaplar
          </h1>

          <div className="mt-12">
            <AboutCarousel
              slides={[
                {
                  eyebrow: "Biz Kimiz",
                  title: "Gumruk ve lojistik sureclerinde planlama ve koordinasyon destegi sunan bir ekibiz",
                  description:
                    "Operasyonun teknik tarafini iletisim ve takip disipliniyle birlestirerek daha okunur bir surec kurmayi hedefliyoruz.",
                },
                {
                  eyebrow: "Amacimiz",
                  title: "Karmasik surecleri daha sade ve daha guvenilir hale getirmek istiyoruz",
                  description:
                    "Her yukte ayni kalibi kullanmadan, ihtiyaca uygun yonlendirme ve kontrollu operasyon akisina odaklaniyoruz.",
                },
                {
                  eyebrow: "Partnerlerimiz",
                  title: "Tasima ve saha operasyonlarini is ortakliklariyla guclendiren bir yapi kuruyoruz",
                  description:
                    "Depolama, tasima ve dis ticaret baglantilarinda birlikte calistigimiz cozum ortaklariyla sureci destekliyoruz.",
                },
              ]}
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[26px] bg-white p-6 shadow-[0_24px_60px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-8">
                <h2 className="text-2xl font-semibold text-[#1d1814]">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#5f554c]">{section.description}</p>
              </article>
            ))}
          </div>
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}
