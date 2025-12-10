// src/app/components/LogoGridCarousel.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { Client } from "../data/clients";

type Props = {
  clients: Client[];
  autoPlayMs?: number;
};

const PER_PAGE = 12;      // ✅ 한 페이지 12개
const CELL_HEIGHT = 60;   // 한 셀 높이(대략)

export default function LogoGridCarousel({
  clients,
  autoPlayMs = 3500,
}: Props) {
  // ✅ 12개씩 끊어서 페이지 배열 생성 (빈 칸 padding 없음)
  const pages = useMemo<Client[][]>(() => {
    if (!clients || clients.length === 0) return [[]];

    const arr: Client[][] = [];
    for (let i = 0; i < clients.length; i += PER_PAGE) {
      arr.push(clients.slice(i, i + PER_PAGE));
    }
    return arr;
  }, [clients]);

  const [page, setPage] = useState(0);

  // ✅ 자동 슬라이드
  useEffect(() => {
    if (pages.length <= 1) return;

    const id = setInterval(
      () => setPage((p) => (p + 1) % pages.length),
      autoPlayMs,
    );
    return () => clearInterval(id);
  }, [pages.length, autoPlayMs]);

  const current = pages[page] ?? [];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* 부드러운 페이드 인 효과 */}
      <style jsx>{`
        @keyframes fadeInGrid {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .fade-grid {
          animation: fadeInGrid 0.45s ease-in-out;
        }
      `}</style>

      {/* ✅ 최소 높이만 잡아주고, 모바일에서는 행 수 늘어나도 자연스럽게 */}
      <div
        className="overflow-hidden"
        style={{ minHeight: CELL_HEIGHT * 2 + 40 }} // 2줄 기준 약간 여유
      >
        {/* page 키가 바뀔 때마다 그리드 전체가 페이드 인 */}
        <div
          key={page}
          className={`
            fade-grid
            grid gap-4
            grid-cols-2           /* 아주 작은 화면: 2열 */
            sm:grid-cols-3        /* 작은 화면: 3열 */
            md:grid-cols-4        /* 중간 화면: 4열 */
            lg:grid-cols-6        /* 데스크탑: 6열 → 2줄×6 = 12개 */
          `}
        >
          {current.map((c) => (
            <div
              key={c.logo}
              className="
                flex items-center justify-center
                bg-white border border-slate-200
                rounded-xl shadow-sm px-3 py-2
                h-[60px]
              "
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 페이지 인디케이터 */}
      {pages.length > 1 && (
        <div className="mt-4 flex justify-center gap-1.5">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`
                h-2.5 w-2.5 rounded-full border border-slate-300 transition
                ${i === page ? "bg-blue-500" : "bg-white"}
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}
