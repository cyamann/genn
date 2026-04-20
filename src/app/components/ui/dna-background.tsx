type DnaBackgroundProps = {
  tone?: "light" | "dark";
  density?: "page" | "hero";
};

export default function DnaBackground({
  tone = "light",
  density = "page",
}: DnaBackgroundProps) {
  const steps = Array.from({ length: density === "hero" ? 14 : 12 }, (_, index) => index);
  const isDark = tone === "dark";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute left-1/2 top-[15%] -translate-x-1/2 ${density === "hero" ? "scale-100" : "scale-[0.9] opacity-70"}`}
      >
        <div className={`dna-helix-shell ${isDark ? "dna-helix-dark" : "dna-helix-light"}`}>
          {steps.map((step) => (
            <div
              key={`center-${step}`}
              className={`dna-rung ${step % 2 === 0 ? "-translate-x-5" : "translate-x-5"}`}
            >
              <span className={`dna-dot ${isDark ? "bg-[#d6a35d]/78" : "bg-[#c6924a]/52"}`} />
              <span className={`dna-link ${isDark ? "dna-link-dark" : "dna-link-light"}`} />
              <span className={`dna-dot ${isDark ? "bg-white/60" : "bg-[#7c6a59]/32"}`} />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`dna-parallax absolute left-[10%] top-[18%] h-[320px] w-[320px] rounded-full border ${isDark ? "border-[#d6a35d]/10" : "border-[#c6924a]/10"} blur-[1px]`}
      />
      <div
        className={`dna-parallax-slow absolute right-[10%] top-[22%] h-[360px] w-[360px] rounded-full border ${isDark ? "border-white/6" : "border-[#7c6a59]/8"} blur-[1px]`}
      />
      <div className={`dna-grid absolute inset-x-0 bottom-0 h-[220px] ${isDark ? "dna-grid-dark" : "dna-grid-light"}`} />
    </div>
  );
}
