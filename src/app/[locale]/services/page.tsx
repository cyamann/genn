import { getDictionary } from "@/src/lib/getDictionaries";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import DnaBackground from "../../components/ui/dna-background";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: "en" | "tr" | "de" | "es" | "ar" | "ru" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="relative overflow-hidden bg-[#f4f1ea]">
        <DnaBackground tone="light" density="page" />
        <Navbar locale={locale} />
        <main className="px-6 py-24 md:px-10 md:py-28 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#8c6a3c]">
              {dict.services.title}
            </p>

            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#1f1a17] sm:text-4xl md:text-6xl">
              {dict.services.heading}
            </h1>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {dict.services.items.map((item: string) => (
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
      </div>
      <Footer locale={locale} />
    </>
  );
}
