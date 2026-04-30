import Image from "next/image";

type LogoLoaderProps = {
  className?: string;
};

export default function LogoLoader({ className = "" }: LogoLoaderProps) {
  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#f5f1e8]/92 backdrop-blur-sm ${className}`}>
      <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
        <div className="logo-loader-ring absolute inset-0 rounded-full border border-[#d6a35d]/30" />
        <div className="logo-loader-ring logo-loader-ring-delay absolute inset-4 rounded-full border border-[#9a7444]/20" />
        <div className="logo-loader-mark relative rounded-[22px] border border-[#eadfce] bg-white px-4 py-3 shadow-[0_24px_70px_rgba(30,24,18,0.12)]">
          <Image
            src="/logo.ai.png"
            alt="Genn"
            width={140}
            height={47}
            priority
            className="h-auto w-[112px] sm:w-[120px]"
          />
        </div>
      </div>
    </div>
  );
}
