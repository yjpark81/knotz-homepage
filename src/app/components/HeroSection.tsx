// src/app/components/HeroSection.tsx
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative w-full 
        h-[420px] sm:h-[520px] lg:h-[600px]
        bg-cover bg-center bg-no-repeat
        pt-24 sm:pt-28 lg:pt-32
      "
      style={{
        backgroundImage: "url('/background-hero.jpg')",
      }}
    >
      {/* 어두운 그라데이션 오버레이 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
        }}
      />

      {/* 콘텐츠 영역 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
          Make Your Software Quality
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-200 drop-shadow max-w-xl">
          품질로 신뢰를 완성합니다. Knotz가 함께 하겠습니다.
        </p>
      </div>
    </section>
  );
}
