"use client";

import { useState } from "react";

type MailtoFormProps = {
  email?: string;
  subjectPrefix: string;
  title: string;
  description: string;
  fields: Array<{
    id: string;
    label: string;
    type?: "text" | "email" | "tel" | "textarea";
    placeholder: string;
  }>;
  theme?: "dark" | "light";
  buttonLabel: string;
};

const turkishMailLabels: Record<string, string> = {
  company: "Firma",
  name: "Ad Soyad",
  fullName: "Ad Soyad",
  email: "E-posta",
  phone: "Telefon",
  service: "Hizmet İhtiyacı",
  position: "Pozisyon",
  experience: "Deneyim",
  message: "Mesaj",
};

export default function MailtoForm({
  email = "social@genn.com.tr",
  subjectPrefix,
  title,
  description,
  fields,
  theme = "dark",
  buttonLabel,
}: MailtoFormProps) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((field) => [field.id, ""]))
  );
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const isDark = theme === "dark";

  function handleChange(id: string, value: string) {
    setValues((current) => ({
      ...current,
      [id]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");

    const primaryValue = values.name || values.fullName || values.company || "Yeni Talep";
    const subject = `${subjectPrefix}: ${primaryValue}`;
    const submittedFields = fields.map((field) => ({
      id: field.id,
      label: turkishMailLabels[field.id] || field.label,
      value: values[field.id] || "-",
    }));
    const body = submittedFields
      .map((field) => `${field.label}: ${field.value}`)
      .join("\n");
    const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoHref;
    setStatus("sent");
    setStatusMessage("Mail uygulamanız açıldı. Gönderimi oradan tamamlayabilirsiniz.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-[32px] border p-8 shadow-[0_26px_70px_rgba(30,24,18,0.12)] ${
        isDark ? "border-white/10 bg-white/5 text-white" : "border-[#e8dccd] bg-white text-[#1d1814]"
      }`}
    >
      <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? "text-[#d3ae79]" : "text-[#9a7444]"}`}>
        Mail Form
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight">{title}</h2>
      <p className={`mt-4 text-sm leading-7 ${isDark ? "text-white/70" : "text-[#5f554c]"}`}>{description}</p>

      <div className="mt-8 grid gap-4">
        {fields.map((field) => {
          const commonClasses = `w-full rounded-[20px] border px-4 py-3 text-sm outline-none transition ${
            isDark
              ? "border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-[#d3ae79]"
              : "border-[#e8dccd] bg-[#fcfaf6] text-[#1d1814] placeholder:text-[#8e8277] focus:border-[#9a7444]"
          }`;

          return (
            <label key={field.id} className="grid gap-2">
              <span className={`text-sm ${isDark ? "text-white/70" : "text-[#5f554c]"}`}>{field.label}</span>
              {field.type === "textarea" ? (
                <textarea
                  rows={5}
                  value={values[field.id]}
                  onChange={(event) => handleChange(field.id, event.target.value)}
                  className={commonClasses}
                  placeholder={field.placeholder}
                />
              ) : (
                <input
                  type={field.type || "text"}
                  value={values[field.id]}
                  onChange={(event) => handleChange(field.id, event.target.value)}
                  className={commonClasses}
                  placeholder={field.placeholder}
                />
              )}
            </label>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`mt-8 rounded-full px-6 py-3 text-sm font-semibold transition ${
          isDark
            ? "bg-[#d6a35d] text-[#1d1814] hover:bg-[#e4b97f]"
            : "bg-[#1d1814] text-white hover:bg-[#342821]"
        } disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {status === "sending" ? "Gönderiliyor..." : buttonLabel}
      </button>

      {statusMessage ? (
        <p
          className={`mt-4 text-sm font-medium ${
            status === "sent" ? "text-[#3f6f3a]" : "text-[#9a3f36]"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
