import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MapEmbed from "../../components/ui/map-embed";
import MailtoForm from "../../components/ui/mailto-form";
import SectionReveal from "../../components/ui/section-reveal";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-[#191512] px-6 py-24 text-white md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              Iletisim
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
              Operasyon ihtiyacinizi birlikte planlayalim.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Sevkiyat yapiniz, gumruk surecleriniz ve ihtiyac duydugunuz operasyon modelini bize
              iletin. Ekibimiz size en uygun akisla donus saglasin.
            </p>
          </div>

          <MailtoForm
            email="info@sirket.com"
            subjectPrefix="Iletisim Talebi"
            title="Bize yazin"
            description="Formu doldurdugunuzda varsayilan mail uygulamaniz acilir ve bilgileriniz hazir bir e-posta olarak gider."
            buttonLabel="Mail Gonder"
            fields={[
              { id: "name", label: "Ad Soyad", placeholder: "Adinizi girin" },
              { id: "email", label: "E-posta", type: "email", placeholder: "ornek@mail.com" },
              { id: "phone", label: "Telefon", type: "tel", placeholder: "+90 ..." },
              { id: "message", label: "Mesaj", type: "textarea", placeholder: "Operasyon ihtiyacinizi yazin" },
            ]}
          />
        </SectionReveal>

        <SectionReveal className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3" delay={120}>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-white/50">E-posta</p>
            <p className="mt-2 text-lg text-white">info@sirket.com</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-white/50">Telefon</p>
            <p className="mt-2 text-lg text-white">+90 212 000 00 00</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-white/50">Adres</p>
            <p className="mt-2 text-lg text-white">Istanbul, Turkiye</p>
          </div>
        </SectionReveal>

        <SectionReveal className="mx-auto mt-10 max-w-6xl" delay={160}>
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
              Konum
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Metroport Business lokasyonunu harita uzerinden goruntuleyin
            </h2>
          </div>
          <MapEmbed title="Metroport Business" query="Metroport Business Istanbul" />
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}
