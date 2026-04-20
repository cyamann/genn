import { getDictionary } from "@/src/lib/getDictionaries";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MailtoForm from "../../components/ui/mailto-form";
import SectionReveal from "../../components/ui/section-reveal";
import DnaBackground from "../../components/ui/dna-background";

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" | "de" | "es" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="relative overflow-hidden bg-[#f5f1e8]">
        <DnaBackground tone="light" density="page" />
        <Navbar locale={locale} />
        <main className="px-6 py-24 md:px-10 md:py-28 lg:px-16">
          <SectionReveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
                {dict.quote.eyebrow}
              </p>

              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
                {dict.quote.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f554c]">
                {dict.quote.description}
              </p>
            </div>

            <MailtoForm
              email="teklif@sirket.com"
              subjectPrefix={dict.quote.form.subjectPrefix}
              title={dict.quote.form.title}
              description={dict.quote.form.description}
              buttonLabel={dict.quote.form.buttonLabel}
              theme="light"
              fields={[
                {
                  id: "company",
                  label: dict.quote.form.fields.company.label,
                  placeholder: dict.quote.form.fields.company.placeholder,
                },
                {
                  id: "name",
                  label: dict.quote.form.fields.name.label,
                  placeholder: dict.quote.form.fields.name.placeholder,
                },
                {
                  id: "email",
                  label: dict.quote.form.fields.email.label,
                  type: "email",
                  placeholder: dict.quote.form.fields.email.placeholder,
                },
                {
                  id: "phone",
                  label: dict.quote.form.fields.phone.label,
                  type: "tel",
                  placeholder: dict.quote.form.fields.phone.placeholder,
                },
                {
                  id: "service",
                  label: dict.quote.form.fields.service.label,
                  placeholder: dict.quote.form.fields.service.placeholder,
                },
                {
                  id: "message",
                  label: dict.quote.form.fields.message.label,
                  type: "textarea",
                  placeholder: dict.quote.form.fields.message.placeholder,
                },
              ]}
            />
          </SectionReveal>
        </main>
      </div>
      <Footer locale={locale} />
    </>
  );
}
