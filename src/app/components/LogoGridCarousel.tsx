"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Tailwind Purge 대응: 사용할 그리드 조합은 모두 미리 명시!
const gridClass = {
  "3x3": "grid-cols-3 grid-rows-3",
  "3x2": "grid-cols-3 grid-rows-2",
  "3x1": "grid-cols-3 grid-rows-1",
};

type Props = {
  logos: string[];
  rows: number;
  cols: number;
  interval?: number;
  transition?: number;
};

export default function LogoGridCarousel({
  logos,
  rows,
  cols,
  interval = 3000,
  transition = 600,
}: Props) {
  const GRID_SIZE = rows * cols;
  const extended =
    logos.length < GRID_SIZE
      ? Array(Math.ceil(GRID_SIZE / logos.length)).fill(logos).flat().slice(0, GRID_SIZE)
      : logos;
  const sets = [];
  for (let i = 0; i < extended.length; i += GRID_SIZE) {
    sets.push(extended.slice(i, i + GRID_SIZE));
  }
  if (logos.length > GRID_SIZE) {
    while (sets.length * GRID_SIZE < logos.length + GRID_SIZE) {
      sets.push(
        logos
          .slice((sets.length * GRID_SIZE) % logos.length)
          .concat(logos.slice(0, (sets.length * GRID_SIZE) % logos.length))
          .slice(0, GRID_SIZE)
      );
      if (sets.length > 10) break;
    }
  }
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPage((p) => (p + 1) % sets.length);
        setFade(true);
      }, transition);
    }, interval);
    return () => clearInterval(timer);
  }, [sets.length, interval, transition]);

  const gridKey = `${cols}x${rows}` as keyof typeof gridClass;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`grid ${gridClass[gridKey]} gap-x-6 gap-y-3 transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ minHeight: `${rows * 60}px` }}
      >
        {sets[page].map((src, idx) => (
          <div
            key={src + idx}
            className="flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow p-2 w-[108px] h-[52px]"
          >
            <Image
              src={src}
              alt={`고객사 로고 ${idx + 1}`}
              width={88}
              height={36}
              className="object-contain grayscale-0 transition"
              style={{ background: "transparent" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
