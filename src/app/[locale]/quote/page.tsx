import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MailtoForm from "../../components/ui/mailto-form";
import SectionReveal from "../../components/ui/section-reveal";

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      <main className="bg-[#f5f1e8] px-6 py-24 md:px-10 md:py-28 lg:px-16">
        <SectionReveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9a7444]">
              Teklif Al
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
              Operasyon ihtiyaciniza uygun teklif icin bize temel bilgileri iletin
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f554c]">
              Yuk tipi, hedef ulke, tasima beklentisi ve zaman hassasiyetini paylasin. Ekibimiz size
              uygun yonlendirmeyle geri donus saglasin.
            </p>
          </div>

          <MailtoForm
            email="teklif@sirket.com"
            subjectPrefix="Teklif Talebi"
            title="Teklif talebi olusturun"
            description="Formu gonderdigingizde varsayilan mail uygulamaniz acilir ve bilgileriniz hazir bir e-posta olarak gelir."
            buttonLabel="Teklif Maili Olustur"
            theme="light"
            fields={[
              { id: "company", label: "Firma", placeholder: "Firma adiniz" },
              { id: "name", label: "Yetkili Kisi", placeholder: "Ad Soyad" },
              { id: "email", label: "E-posta", type: "email", placeholder: "ornek@mail.com" },
              { id: "phone", label: "Telefon", type: "tel", placeholder: "+90 ..." },
              { id: "service", label: "Hizmet Ihtiyaci", placeholder: "Gumrukleme, karayolu, denizyolu..." },
              { id: "message", label: "Detay", type: "textarea", placeholder: "Yuk ve surec detaylarini yazin" },
            ]}
          />
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}
