import { getDictionary } from "@/src/lib/getDictionaries";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MailtoForm from "../../components/ui/mailto-form";
import SectionReveal from "../../components/ui/section-reveal";

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-[#f5f1e8] px-6 py-24 md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              {dict.careers.eyebrow}
            </p>

            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
              {dict.careers.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f554c]">
              {dict.careers.description}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {dict.careers.highlights.map((item: string) => (
                <div
                  key={item}
                  className="rounded-[24px] bg-white p-5 shadow-[0_20px_60px_rgba(30,24,18,0.08)]"
                >
                  <p className="text-base font-medium text-[#1d1814]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <MailtoForm
            email="kariyer@sirket.com"
            subjectPrefix={dict.careers.form.subjectPrefix}
            title={dict.careers.form.title}
            description={dict.careers.form.description}
            buttonLabel={dict.careers.form.buttonLabel}
            theme="light"
            fields={[
              {
                id: "fullName",
                label: dict.careers.form.fields.fullName.label,
                placeholder: dict.careers.form.fields.fullName.placeholder,
              },
              {
                id: "email",
                label: dict.careers.form.fields.email.label,
                type: "email",
                placeholder: dict.careers.form.fields.email.placeholder,
              },
              {
                id: "position",
                label: dict.careers.form.fields.position.label,
                placeholder: dict.careers.form.fields.position.placeholder,
              },
              {
                id: "experience",
                label: dict.careers.form.fields.experience.label,
                placeholder: dict.careers.form.fields.experience.placeholder,
              },
              {
                id: "cv",
                label: dict.careers.form.fields.cv.label,
                type: "file",
                placeholder: dict.careers.form.fields.cv.placeholder,
              },
              {
                id: "message",
                label: dict.careers.form.fields.message.label,
                type: "textarea",
                placeholder: dict.careers.form.fields.message.placeholder,
              },
            ]}
          />
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}