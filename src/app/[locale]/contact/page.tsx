import Link from "next/link";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MapEmbed from "../../components/ui/map-embed";
import MailtoForm from "../../components/ui/mailto-form";
import SectionReveal from "../../components/ui/section-reveal";
import { getDictionary } from "@/src/lib/getDictionaries";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-[#191512] px-6 py-24 text-white md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              {dict.contact.eyebrow}
            </p>

            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
              {dict.contact.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {dict.contact.description}
            </p>
          </div>

          <MailtoForm
            email="info@sirket.com"
            subjectPrefix={dict.contact.form.subjectPrefix}
            title={dict.contact.form.title}
            description={dict.contact.form.description}
            buttonLabel={dict.contact.form.buttonLabel}
            fields={[
              {
                id: "name",
                label: dict.contact.form.fields.name.label,
                placeholder: dict.contact.form.fields.name.placeholder,
              },
              {
                id: "email",
                label: dict.contact.form.fields.email.label,
                type: "email",
                placeholder: dict.contact.form.fields.email.placeholder,
              },
              {
                id: "phone",
                label: dict.contact.form.fields.phone.label,
                type: "tel",
                placeholder: dict.contact.form.fields.phone.placeholder,
              },
              {
                id: "message",
                label: dict.contact.form.fields.message.label,
                type: "textarea",
                placeholder: dict.contact.form.fields.message.placeholder,
              },
            ]}
          />
        </SectionReveal>

        <SectionReveal
          className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-5"
          delay={120}
        >
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-white/50">{dict.contact.info.emailLabel}</p>
            <p className="mt-2 text-lg text-white">info@sirket.com</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-white/50">{dict.contact.info.phoneLabel}</p>
            <p className="mt-2 text-lg text-white">+90 212 000 00 00</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-white/50">{dict.contact.info.addressLabel}</p>
            <p className="mt-2 text-lg text-white">{dict.contact.info.addressValue}</p>
          </div>

          <Link
            href={dict.contact.info.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-white/50">{dict.contact.info.instagramLabel}</p>
            <p className="mt-2 text-lg text-white">{dict.contact.info.instagramValue}</p>
          </Link>

          <Link
            href={dict.contact.info.linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-white/50">{dict.contact.info.linkedinLabel}</p>
            <p className="mt-2 text-lg text-white">{dict.contact.info.linkedinValue}</p>
          </Link>
        </SectionReveal>

        <SectionReveal className="mx-auto mt-10 max-w-6xl" delay={160}>
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              {dict.contact.location.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {dict.contact.location.title}
            </h2>
          </div>

          <MapEmbed
            title={dict.contact.location.mapTitle}
            query={dict.contact.location.mapQuery}
          />
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}
