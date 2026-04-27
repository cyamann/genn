import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipientEmail = "social@genn.com.tr";

type SubmittedField = {
  id: string;
  label: string;
  value: string;
};

type MailError = Error & {
  code?: string;
  command?: string;
  response?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpPort = Number(process.env.SMTP_PORT || "465");
  const smtpSecure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : smtpPort === 465;
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const smtpFrom = process.env.SMTP_FROM?.trim() || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
    return NextResponse.json(
      { error: "Mail server is not configured." },
      { status: 500 }
    );
  }

  const payload = (await request.json()) as {
    subject?: string;
    fields?: SubmittedField[];
  };

  if (!payload.subject || !Array.isArray(payload.fields)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const rows = payload.fields
    .map(
      (field) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #eadfce;font-weight:600;">${escapeHtml(field.label)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eadfce;">${escapeHtml(field.value)}</td>
        </tr>
      `
    )
    .join("");

  const text = payload.fields
    .map((field) => `${field.label}: ${field.value}`)
    .join("\n");

  const replyToValue = payload.fields.find((field) => field.id === "email")?.value;
  const replyTo = replyToValue && replyToValue.includes("@") ? replyToValue : undefined;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: recipientEmail,
      replyTo,
      subject: payload.subject,
      text,
      html: `
        <div style="font-family:Arial,sans-serif;color:#1d1814;">
          <h1 style="font-size:20px;">${escapeHtml(payload.subject)}</h1>
          <table style="border-collapse:collapse;width:100%;max-width:720px;">
            <tbody>${rows}</tbody>
          </table>
        </div>
      `,
    });
  } catch (error) {
    const mailError = error as MailError;
    const code = mailError.code || "";

    console.error("SMTP send failed", {
      code: mailError.code,
      command: mailError.command,
      response: mailError.response,
    });

    if (code === "EAUTH") {
      return NextResponse.json(
        {
          error:
            "SMTP kullanıcı adı veya şifre hatalı. social@genn.com.tr hesabının mail panelindeki SMTP şifresini kullanın.",
        },
        { status: 500 }
      );
    }

    if (code === "EDNS") {
      return NextResponse.json(
        {
          error:
            "SMTP host DNS'te bulunamadı. SMTP_HOST değerini mail panelindeki giden sunucu adresiyle birebir değiştirin.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        error:
          "Mail sunucusuna bağlanılamadı. SMTP host, port ve SSL/TLS ayarlarını kontrol edin.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
