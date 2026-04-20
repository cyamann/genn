import { getDictionary } from "@/src/lib/getDictionaries";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import DnaBackground from "../../components/ui/dna-background";
import SectionReveal from "../../components/ui/section-reveal";

export default async function DocumentsPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="relative overflow-hidden bg-[#f5f1e8]">
        <DnaBackground tone="light" density="page" />
        <Navbar locale={locale} />
        <main className="px-6 py-24 md:px-10 md:py-28 lg:px-16">
          <SectionReveal className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              {dict.documents.eyebrow}
            </p>

            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
              {dict.documents.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f554c]">
              {dict.documents.description}
            </p>
          </SectionReveal>

          <SectionReveal
            className="mx-auto mt-12 grid max-w-7xl gap-8 xl:grid-cols-2"
            delay={120}
          >
            <section className="rounded-[26px] bg-white p-6 shadow-[0_24px_60px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a7444]">
                  {dict.documents.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1814]">
                  {dict.documents.exportTitle}
                </h2>
              </div>

              <div className="mt-8 grid gap-4">
                {dict.documents.exportItems.map((item: string, index: number) => (
                  <article
                    key={item}
                    className="rounded-[24px] bg-[#f8f4ed] p-5 shadow-[0_18px_40px_rgba(30,24,18,0.05)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7444]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#2a221d] sm:text-base">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[26px] bg-white p-6 shadow-[0_24px_60px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a7444]">
                  {dict.documents.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1814]">
                  {dict.documents.importTitle}
                </h2>
              </div>

              <div className="mt-8 grid gap-4">
                {dict.documents.importItems.map((item: string, index: number) => (
                  <article
                    key={item}
                    className="rounded-[24px] bg-[#f8f4ed] p-5 shadow-[0_18px_40px_rgba(30,24,18,0.05)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7444]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#2a221d] sm:text-base">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>
        </main>
      </div>
      <Footer locale={locale} />
    </>
  );
}
