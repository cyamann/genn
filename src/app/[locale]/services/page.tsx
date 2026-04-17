import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-[#f4f1ea] px-6 py-24 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#8c6a3c]">
            Hizmetler
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#1f1a17] sm:text-4xl md:text-6xl">
            Gumruk, tasima ve saha surecleriniz icin tek merkezden koordine edilen hizmetler.
          </h1>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Ithalat ve ihracat gumrukleme",
              "Depolama ve antrepo koordinasyonu",
              "Karayolu ve denizyolu organizasyonu",
              "Havayolu operasyon planlamasi",
              "Belge ve mevzuat surec yonetimi",
              "Operasyonel lojistik danismanligi",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] bg-white p-6 shadow-[0_24px_60px_rgba(34,24,13,0.08)]"
              >
                <p className="text-lg font-medium text-[#1f1a17]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
