"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LocaleSwitcherProps = {
  locale: string;
  inverted?: boolean;
};

export default function LocaleSwitcher({
  locale,
  inverted = false,
}: LocaleSwitcherProps) {
  const pathname = usePathname();

  function buildHref(targetLocale: string) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${targetLocale}`;
    }

    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border p-1 ${
        inverted ? "border-white/15 bg-white/8" : "border-[#e8dccd] bg-[#fcfaf6]"
      }`}
    >
      {(["tr", "en"] as const).map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={buildHref(item)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
              isActive
                ? inverted
                  ? "bg-[#d6a35d] text-[#1d1814]"
                  : "bg-[#1d1814] text-white"
                : inverted
                  ? "text-white/72 hover:text-white"
                  : "text-[#6d6357] hover:text-[#1d1814]"
            }`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
