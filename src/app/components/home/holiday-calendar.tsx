"use client";

import { useState } from "react";
import SectionReveal from "../ui/section-reveal";
import { useDictionary } from "../providers/dictionary-provider";
import DnaBackground from "../ui/dna-background";

type HolidayType = "official" | "religious" | "halfDay";
type HolidayKey =
  | "newYear"
  | "ramadanEve"
  | "ramadanDay1"
  | "ramadanDay2"
  | "ramadanDay3"
  | "nationalSovereignty"
  | "laborDay"
  | "youthDay"
  | "sacrificeEve"
  | "sacrificeDay1"
  | "sacrificeDay2"
  | "sacrificeDay3"
  | "sacrificeDay4"
  | "democracyDay"
  | "victoryDay"
  | "republicEve"
  | "republicDay";

type HolidayItem = {
  month: number;
  day: number;
  key: HolidayKey;
  type: HolidayType;
};

const HOLIDAYS_2026: HolidayItem[] = [
  { month: 0, day: 1, key: "newYear", type: "official" },
  { month: 2, day: 19, key: "ramadanEve", type: "halfDay" },
  { month: 2, day: 20, key: "ramadanDay1", type: "religious" },
  { month: 2, day: 21, key: "ramadanDay2", type: "religious" },
  { month: 2, day: 22, key: "ramadanDay3", type: "religious" },
  { month: 3, day: 23, key: "nationalSovereignty", type: "official" },
  { month: 4, day: 1, key: "laborDay", type: "official" },
  { month: 4, day: 19, key: "youthDay", type: "official" },
  { month: 4, day: 26, key: "sacrificeEve", type: "halfDay" },
  { month: 4, day: 27, key: "sacrificeDay1", type: "religious" },
  { month: 4, day: 28, key: "sacrificeDay2", type: "religious" },
  { month: 4, day: 29, key: "sacrificeDay3", type: "religious" },
  { month: 4, day: 30, key: "sacrificeDay4", type: "religious" },
  { month: 6, day: 15, key: "democracyDay", type: "official" },
  { month: 7, day: 30, key: "victoryDay", type: "official" },
  { month: 9, day: 28, key: "republicEve", type: "halfDay" },
  { month: 9, day: 29, key: "republicDay", type: "official" },
];

const localeMap: Record<string, string> = {
  tr: "tr-TR",
  en: "en-US",
  de: "de-DE",
  es: "es-ES",
  ar: "ar-SA",
  ru: "ru-RU",
  fr: "fr-FR",
  zh: "zh-CN",
};

const dayLabels = [1, 2, 3, 4, 5, 6, 0];

type HolidayCalendarProps = {
  locale: string;
};

export default function HolidayCalendar({ locale }: HolidayCalendarProps) {
  const dict = useDictionary();
  const formatterLocale = localeMap[locale] || "en-US";
  const currentMonth = new Date().getFullYear() === 2026 ? new Date().getMonth() : 0;
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const monthDate = new Date(2026, selectedMonth, 1);
  const firstDayRaw = monthDate.getDay();
  const firstDay = firstDayRaw === 0 ? 6 : firstDayRaw - 1;
  const totalDays = new Date(2026, selectedMonth + 1, 0).getDate();
  const monthHolidays = HOLIDAYS_2026.filter((item) => item.month === selectedMonth);

  const monthLabel = new Intl.DateTimeFormat(formatterLocale, {
    month: "long",
    year: "numeric",
  }).format(monthDate);

  const monthButtons = Array.from({ length: 12 }, (_, monthIndex) =>
    new Intl.DateTimeFormat(formatterLocale, { month: "short" }).format(
      new Date(2026, monthIndex, 1)
    )
  );

  const cells: Array<number | null> = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: totalDays }, (_, index) => index + 1),
  ];

  return (
    <SectionReveal
      className="relative overflow-hidden bg-[#f5f1e8] px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-12 lg:py-16 xl:px-16"
      delay={120}
    >
      <DnaBackground tone="light" density="page" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#9a7444] sm:text-xs">
              {dict.holidayCalendar.eyebrow}
            </p>
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-tight text-[#1d1814] sm:text-4xl md:text-5xl">
              {dict.holidayCalendar.title}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#5f554c] sm:text-base md:text-lg">
              {dict.holidayCalendar.description}
            </p>

            <div className="mt-6 grid gap-3">
              {dict.holidayCalendar.legend.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-[18px] bg-white/80 px-4 py-3 text-sm text-[#4b4037] shadow-[0_18px_40px_rgba(30,24,18,0.05)]"
                >
                  <span
                    className={`h-3.5 w-3.5 rounded-full ${
                      item.tone === "official"
                        ? "bg-[#1d1814]"
                        : item.tone === "religious"
                          ? "bg-[#b77a39]"
                          : "bg-[#d6a35d] ring-2 ring-[#d6a35d]/25"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-4 shadow-[0_26px_70px_rgba(30,24,18,0.08)] sm:rounded-[34px] sm:p-5">
            <div className="flex flex-wrap gap-2">
              {monthButtons.map((label, monthIndex) => {
                const isActive = monthIndex === selectedMonth;

                return (
                  <button
                    key={`${label}-${monthIndex}`}
                    type="button"
                    onClick={() => setSelectedMonth(monthIndex)}
                    className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition sm:px-4 ${
                      isActive
                        ? "bg-[#1d1814] text-white"
                        : "bg-[#f3ede4] text-[#6d6357] hover:bg-[#eadfce]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-[24px] bg-[linear-gradient(160deg,#f8f3eb,#efe1cd)] p-3.5 sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-semibold capitalize text-[#1d1814] sm:text-2xl">
                  {monthLabel}
                </p>
                <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b673f]">
                  2026
                </span>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-1.5 text-center sm:gap-2">
                {dayLabels.map((dayIndex) => (
                  <div
                    key={dayIndex}
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b7867]"
                  >
                    {dict.holidayCalendar.weekdays[dayIndex]}
                  </div>
                ))}

                {cells.map((day, index) => {
                  if (!day) {
                    return <div key={`empty-${index}`} className="h-16 rounded-[18px] sm:h-20" />;
                  }

                  const holiday = monthHolidays.find((item) => item.day === day);

                  return (
                    <div
                      key={`${selectedMonth}-${day}`}
                      className={`flex h-16 flex-col items-start gap-1 rounded-[18px] p-2 text-left sm:h-20 sm:gap-1.5 sm:p-2.5 ${
                        holiday
                          ? holiday.type === "official"
                            ? "bg-[#1d1814] text-white"
                            : holiday.type === "religious"
                              ? "bg-[#b77a39] text-white"
                              : "bg-[#f0d8b1] text-[#4f3920]"
                          : "bg-white/75 text-[#3f352d]"
                      }`}
                    >
                      <span className="text-xs font-semibold leading-none sm:text-sm">
                        {day}
                      </span>
                      {holiday ? (
                        <span className="line-clamp-3 text-[8px] leading-3 sm:text-[9px] sm:leading-3.5">
                          {dict.holidayCalendar.holidays[holiday.key]}
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
