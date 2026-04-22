import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./[locale]/globals.css";

export const metadata: Metadata = {
  title: "GENN Gümrük Müşavirliği",
  description: "Gümrük Müşavirliği ve Lojistik Hizmetleri A.Ş.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
