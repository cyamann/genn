import Link from "next/link";
import { getDictionary } from "@/src/lib/getDictionaries";
import Footer from "../../../components/layout/footer";
import Navbar from "../../../components/layout/navbar";
import SectionReveal from "../../../components/ui/section-reveal";

const pdfPath = "/belge.pdf";

export default async function CertificatesPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="bg-[#f5f1e8]">
        <Navbar locale={locale} />
        <main className="px-6 py-24 md:px-10 md:py-28 lg:px-16">
          <SectionReveal className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              {dict.ourDocuments.eyebrow}
            </p>

            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
              {dict.ourDocuments.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f554c]">
              {dict.ourDocuments.description}
            </p>
          </SectionReveal>

          <SectionReveal className="mx-auto mt-12 max-w-7xl" delay={120}>
            <section className="rounded-[26px] bg-white p-6 shadow-[0_24px_60px_rgba(30,24,18,0.08)] sm:rounded-[32px] sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-[#1d1814] sm:text-2xl">
                {dict.ourDocuments.viewerTitle}
              </h2>

              <div className="mt-5 rounded-[24px] border border-[#eadfce] bg-[#f8f4ed] p-6 sm:p-8">
                <p className="max-w-2xl text-base leading-8 text-[#5f554c]">
                  <span className="block text-lg font-semibold tracking-tight text-[#1d1814]">
                    {dict.ourDocuments.certificateTitle}
                  </span>
                  <span className="mt-3 block">
                    {dict.ourDocuments.certificateDescription}
                  </span>
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={pdfPath}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#1d1814] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#342821]"
                  >
                    {dict.ourDocuments.primaryAction}
                  </Link>

                  <Link
                    href={pdfPath}
                    download
                    className="rounded-full border border-[#d8ccb8] bg-white px-6 py-3 text-sm font-semibold text-[#1d1814] transition hover:bg-white"
                  >
                    {dict.ourDocuments.secondaryAction}
                  </Link>
                </div>
              </div>
            </section>
          </SectionReveal>
        </main>
      </div>
      <Footer locale={locale} />
    </>
  );
}
