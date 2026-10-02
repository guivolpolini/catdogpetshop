"use client";

interface CatDogLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function CatDogLogo({ className = "", size = "md" }: CatDogLogoProps) {
  const isSm = size === "sm";
  const isLg = size === "lg";

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Oval badge mirroring real storefront facade sign */}
      <div
        className={`relative flex items-center justify-center rounded-full bg-gradient-to-r from-[#F6A540] via-[#FFAE42] to-[#E89535] border-2 border-white/60 shadow-md ${
          isSm
            ? "px-3 py-1"
            : isLg
            ? "px-6 py-2.5"
            : "px-4 sm:px-5 py-1.5 sm:py-2"
        }`}
      >
        <div className="flex flex-col items-center leading-none">
          <span
            className={`font-young font-extrabold tracking-wide text-[#4F2D96] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)] ${
              isSm ? "text-lg" : isLg ? "text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            Cat Dog
          </span>
          <span
            className={`font-sans font-bold uppercase tracking-widest text-[#4F2D96]/90 mt-0.5 ${
              isSm ? "text-[8px]" : isLg ? "text-[11px]" : "text-[9px] sm:text-[10px]"
            }`}
          >
            • Pet Shop •
          </span>
        </div>
      </div>
    </div>
  );
}
