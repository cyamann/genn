import Link from "next/link";
import { getDictionary } from "@/src/lib/getDictionaries";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import SectionReveal from "../../components/ui/section-reveal";
import DnaBackground from "../../components/ui/dna-background";

export default async function ResourcesPage({
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
              {dict.resources.eyebrow}
            </p>

            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
              {dict.resources.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f554c]">
              {dict.resources.description}
            </p>
          </SectionReveal>

          <SectionReveal className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-2" delay={120}>
            {dict.resources.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[26px] bg-white p-6 shadow-[0_24px_60px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-8"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-[#1d1814]">
                  {section.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#5f554c]">
                  {section.description}
                </p>

                <div className="mt-8 grid gap-4">
                  {section.items.map((item) => (
                    <article
                      key={item.href}
                      className="rounded-[24px] bg-[#f8f4ed] p-5 shadow-[0_18px_40px_rgba(30,24,18,0.05)]"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-[#1d1814]">
                          {item.title}
                        </h3>
                        <span className="rounded-full border border-[#ddcfbb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7444]">
                          {item.domain}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[#5f554c]">
                        {item.description}
                      </p>

                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex rounded-full bg-[#1d1814] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#342821]"
                      >
                        {dict.resources.linkLabel}
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </SectionReveal>
        </main>
      </div>
      <Footer locale={locale} />
    </>
  );
}
