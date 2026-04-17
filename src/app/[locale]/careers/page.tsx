import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MailtoForm from "../../components/ui/mailto-form";
import SectionReveal from "../../components/ui/section-reveal";

export default async function CareersPage({
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
              Kariyer
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#1d1814] sm:text-4xl md:text-6xl">
              Operasyonu buyuten ekibe katilmak isteyenler icin acik bir basvuru alani
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f554c]">
              Gumruk operasyonu, musteri yonetimi, tasima planlama ve saha koordinasyonu alanlarinda
              guclu ekip arkadaslari ariyoruz. Asagidaki form ile ozgecmis ve kisa notunuzu bize
              mail olarak iletebilirsiniz.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "Gumruk operasyon uzmanligi",
                "Lojistik planlama",
                "Musteri ve partner yonetimi",
                "Analitik ve sorumluluk bilinci",
              ].map((item) => (
                <div key={item} className="rounded-[24px] bg-white p-5 shadow-[0_20px_60px_rgba(30,24,18,0.08)]">
                  <p className="text-base font-medium text-[#1d1814]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <MailtoForm
            email="kariyer@sirket.com"
            subjectPrefix="Kariyer Basvurusu"
            title="Basvurunuzu mail ile iletin"
            description="Bilgileriniz varsayilan mail uygulamaniza aktarilir. CV dosyanizi acilan mail ekranina ekleyebilirsiniz."
            buttonLabel="Basvuru Maili Olustur"
            theme="light"
            fields={[
              { id: "fullName", label: "Ad Soyad", placeholder: "Adinizi girin" },
              { id: "email", label: "E-posta", type: "email", placeholder: "ornek@mail.com" },
              { id: "position", label: "Pozisyon", placeholder: "Ilgilendiginiz alan" },
              { id: "experience", label: "Deneyim", placeholder: "Orn. 4 yil gumruk operasyonu" },
              { id: "cv", label: "CV", type: "file", placeholder: "" },
              { id: "message", label: "Kisa Not", type: "textarea", placeholder: "Kendinizden kisaca bahsedin" },
            ]}
          />
        </SectionReveal>
      </main>
      <Footer locale={locale} />
    </>
  );
}
