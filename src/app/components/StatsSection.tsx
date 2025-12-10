// src/app/components/StatsSection.tsx
import React from "react";
import StatWithColor from "../../components/StatWithColor";

export default function StatsSection() {
  return (
    <section
      style={{ backgroundColor: "#f5faff" }}
      className="py-10 sm:py-12"
    >
      <div
        className="
          max-w-6xl mx-auto px-4 
          grid grid-cols-2 sm:grid-cols-4 
          gap-6 sm:gap-8 text-center
        "
      >
        {/* 업력 */}
        <div>
          <p className="text-3xl sm:text-4xl font-semibold">
            <StatWithColor end={19} duration={2} />
          </p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-600">
            업력
          </p>
        </div>

        {/* 글로벌 */}
        <div>
          <p className="text-3xl sm:text-4xl font-semibold">
            <StatWithColor end={6} duration={2} />
          </p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-600">
            글로벌
          </p>
        </div>

        {/* 엔지니어 */}
        <div>
          <p className="text-3xl sm:text-4xl font-semibold">
            <StatWithColor end={150} duration={2} />
          </p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-600">
            엔지니어
          </p>
        </div>

        {/* 누적 프로젝트 */}
        <div>
          <p className="text-3xl sm:text-4xl font-semibold">
            <StatWithColor end={1500} duration={3.0} />
          </p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-600">
            누적 프로젝트
          </p>
        </div>
      </div>
    </section>
  );
}
