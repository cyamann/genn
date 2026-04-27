"use client";
import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "../providers/dictionary-provider";

type FooterProps = {
  locale: string;
};


export default function Footer({ locale }: FooterProps) {
  const dict = useDictionary();
  const instagramHref = dict.footer.contact.instagramHref;
  const linkedinHref = dict.footer.contact.linkedinHref;

  return (
    <footer className="bg-[#f5f1e8] px-6 pb-8 pt-14 text-[#1d1814] md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[34px] border border-[#eadfce] bg-[#fcfaf6] p-8 shadow-[0_30px_90px_rgba(30,24,18,0.1)] md:p-10">
          <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Link
                href={`/${locale}`}
                aria-label={dict.footer.brand}
                className="inline-flex items-center rounded-[22px] border border-[#eadfce] bg-white px-4 py-3 shadow-[0_18px_40px_rgba(30,24,18,0.08)]"
              >
                <Image
                  src="/logo.ai.png"
                  alt={dict.footer.brand}
                  width={176}
                  height={58}
                  className="h-auto w-[138px] md:w-[168px]"
                />
              </Link>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {dict.footer.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f554c]">
                {dict.footer.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7444]">
                  {dict.footer.linksTitle}
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-[#5f554c]">
                  <Link href={`/${locale}`}>{dict.footer.links.home}</Link>
                  <Link href={`/${locale}/services`}>{dict.footer.links.services}</Link>
                  <Link href={`/${locale}/resources`}>{dict.footer.links.resources}</Link>
                  <Link href={`/${locale}/documents`}>{dict.footer.links.documents}</Link>
                  <Link href={`/${locale}/documents/certificates`}>
                    {dict.footer.links.ourDocuments}
                  </Link>
                  <Link href={`/${locale}/about`}>{dict.footer.links.about}</Link>
                  <Link href={`/${locale}/careers`}>{dict.footer.links.careers}</Link>
                  <Link href={`/${locale}/contact`}>{dict.footer.links.contact}</Link>
                  <Link href={`/${locale}/quote`}>{dict.footer.links.quote}</Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a7444]">
                  {dict.footer.contactTitle}
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-[#5f554c]">
                  <p>{dict.footer.contact.email}</p>
                  <p>{dict.footer.contact.phone}</p>
                  <p>{dict.footer.contact.address}</p>
                  {instagramHref ? (
                    <Link href={instagramHref} target="_blank" rel="noreferrer">
                      {dict.footer.contact.instagramLabel}: {dict.footer.contact.instagramValue}
                    </Link>
                  ) : (
                    <p>
                      {dict.footer.contact.instagramLabel}: {dict.footer.contact.instagramValue}
                    </p>
                  )}
                  {linkedinHref ? (
                    <Link href={linkedinHref} target="_blank" rel="noreferrer">
                      {dict.footer.contact.linkedinLabel}: {dict.footer.contact.linkedinValue}
                    </Link>
                  ) : (
                    <p>
                      {dict.footer.contact.linkedinLabel}: {dict.footer.contact.linkedinValue}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div aria-hidden="true" className="pointer-events-none mt-10 h-10 overflow-hidden border-b border-[#eadfce]">
            <div className="absolute inset-x-0 bottom-2 h-px bg-[#c6924a]/25" />
            <div className="footer-ship-motion relative h-full w-full">
              <div className="absolute bottom-0 left-0">
                <img
                  src="https://openclipart.org/image/2000px/322884"
                  alt=""
                  className="footer-ship-icon h-11 w-[11rem] object-contain opacity-80 drop-shadow-[0_0_16px_rgba(198,146,74,0.16)]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 pt-6 text-sm text-[#6a5c4f] md:flex-row md:items-center md:justify-between">
            <p>{dict.footer.bottom.copyright}</p>
            <p>{dict.footer.bottom.slogan}</p>
            <p>{dict.footer.bottom.credit}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
