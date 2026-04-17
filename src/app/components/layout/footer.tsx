"use client";
import Link from "next/link";
import { useDictionary } from "../providers/dictionary-provider";

type FooterProps = {
  locale: string;
};


export default function Footer({ locale }: FooterProps) {
  const dict = useDictionary();
  return (
    <footer className="mt-20 bg-[#120f0d] px-6 pb-8 pt-14 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:p-10">
          <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d3ae79]">
                {dict.footer.brand}
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {dict.footer.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
                {dict.footer.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  {dict.footer.linksTitle}
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-white/74">
                  <Link href={`/${locale}`}>{dict.footer.links.home}</Link>
                  <Link href={`/${locale}/services`}>{dict.footer.links.services}</Link>
                  <Link href={`/${locale}/about`}>{dict.footer.links.about}</Link>
                  <Link href={`/${locale}/careers`}>{dict.footer.links.careers}</Link>
                  <Link href={`/${locale}/contact`}>{dict.footer.links.contact}</Link>
                  <Link href={`/${locale}/quote`}>{dict.footer.links.quote}</Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  {dict.footer.contactTitle}
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-white/74">
                  <p>{dict.footer.contact.email}</p>
                  <p>{dict.footer.contact.phone}</p>
                  <p>{dict.footer.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>{dict.footer.bottom.copyright}</p>
            <p>{dict.footer.bottom.slogan}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}