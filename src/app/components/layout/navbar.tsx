"use client";

import Link from "next/link";
import { useState } from "react";
import LocaleSwitcher from "./locale-switcher";
import { useDictionary } from "../providers/dictionary-provider";

type NavbarProps = {
  locale: string;
  variant?: "overlay" | "solid";
};
export default function Navbar({
  locale,
  variant = "solid",
}: NavbarProps) {
  const dict = useDictionary();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const isOverlay = variant === "overlay";

  const shellClassName = isOverlay
    ? "border-white/12 bg-[rgba(255,255,255,0.08)] text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
    : "border-[#eadfce] bg-[rgba(255,255,255,0.92)] text-[#1d1814] shadow-[0_18px_50px_rgba(30,24,18,0.08)]";

  const menuLinkClassName = "transition hover:opacity-75";

  return (
    <nav className={`left-0 right-0 top-0 z-[120] ${isOverlay ? "absolute" : "sticky"}`}>
      <div className="mx-auto max-w-7xl px-5 pt-5 md:px-10 lg:px-16">
        <div
          className={`rounded-[30px] border px-4 py-4 backdrop-blur-xl md:rounded-full md:px-6 ${shellClassName}`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href={`/${locale}`}
              className="text-base font-semibold uppercase tracking-[0.24em] md:text-lg"
            >
              {dict.navbar.brand}
            </Link>

            <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
              <Link href={`/${locale}`} className={menuLinkClassName}>
                {dict.navbar.links.home}
              </Link>

              <Link href={`/${locale}/services`} className={menuLinkClassName}>
                {dict.navbar.links.services}
              </Link>

              <div className="group relative">
                <Link href={`/${locale}/about`} className={menuLinkClassName}>
                  {dict.navbar.links.about}
                </Link>

                <div className="absolute left-0 top-full hidden min-w-[230px] pt-4 group-hover:block">
                  <div className="rounded-[28px] border border-[#eadfce] bg-white p-3 text-[#1d1814] shadow-[0_24px_70px_rgba(30,24,18,0.12)]">
                    <Link
                      href={`/${locale}/about/company`}
                      className="block rounded-2xl px-4 py-3 text-sm hover:bg-black/5"
                    >
                      {dict.navbar.aboutMenu.company}
                    </Link>

                    <Link
                      href={`/${locale}/about/mission`}
                      className="block rounded-2xl px-4 py-3 text-sm hover:bg-black/5"
                    >
                      {dict.navbar.aboutMenu.mission}
                    </Link>

                    <Link
                      href={`/${locale}/about/partners`}
                      className="block rounded-2xl px-4 py-3 text-sm hover:bg-black/5"
                    >
                      {dict.navbar.aboutMenu.partners}
                    </Link>
                  </div>
                </div>
              </div>

              <Link href={`/${locale}/careers`} className={menuLinkClassName}>
                {dict.navbar.links.careers}
              </Link>

              <Link href={`/${locale}/contact`} className={menuLinkClassName}>
                {dict.navbar.links.contact}
              </Link>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <LocaleSwitcher locale={locale} inverted={isOverlay} />
              <Link
                href={`/${locale}/quote`}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${isOverlay
                    ? "bg-[#d6a35d] text-[#1d1814] hover:bg-[#e3b87c]"
                    : "bg-[#1d1814] text-white hover:bg-[#342821]"
                  }`}
              >
                {dict.navbar.links.quote}
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className={`flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${isOverlay ? "border-white/15 bg-white/8" : "border-[#eadfce] bg-[#fcfaf6]"
                }`}
              aria-label={dict.navbar.mobileMenuLabel}
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>

          {isMobileMenuOpen ? (
            <div className="mt-5 rounded-[24px] border border-white/10 bg-black/10 p-4 lg:hidden">
              <div className="grid gap-3 text-sm font-medium">
                <Link href={`/${locale}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {dict.navbar.links.home}
                </Link>

                <Link href={`/${locale}/services`} onClick={() => setIsMobileMenuOpen(false)}>
                  {dict.navbar.links.services}
                </Link>

                <button
                  type="button"
                  onClick={() => setIsAboutOpen((current) => !current)}
                  className="flex items-center justify-between"
                >
                  <span>{dict.navbar.links.about}</span>
                  <span>{isAboutOpen ? "-" : "+"}</span>
                </button>

                {isAboutOpen ? (
                  <div className="grid gap-2 rounded-[20px] bg-white/70 p-3 text-[#1d1814]">
                    <Link
                      href={`/${locale}/about/company`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dict.navbar.aboutMenu.company}
                    </Link>

                    <Link
                      href={`/${locale}/about/mission`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dict.navbar.aboutMenu.mission}
                    </Link>

                    <Link
                      href={`/${locale}/about/partners`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dict.navbar.aboutMenu.partners}
                    </Link>
                  </div>
                ) : null}

                <Link href={`/${locale}/careers`} onClick={() => setIsMobileMenuOpen(false)}>
                  {dict.navbar.links.careers}
                </Link>

                <Link href={`/${locale}/contact`} onClick={() => setIsMobileMenuOpen(false)}>
                  {dict.navbar.links.contact}
                </Link>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <LocaleSwitcher locale={locale} inverted={isOverlay} />
                <Link
                  href={`/${locale}/quote`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-full px-5 py-3 text-center text-sm font-semibold transition ${isOverlay
                      ? "bg-[#d6a35d] text-[#1d1814]"
                      : "bg-[#1d1814] text-white"
                    }`}
                >
                  {dict.navbar.links.quote}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}