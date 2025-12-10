// src/app/components/CategoryBadge.tsx
import React from "react";

interface CategoryBadgeProps {
  label: string;
  className?: string;   // 필요하면 추가 Tailwind 클래스 덧입힐 수 있게
}

export default function CategoryBadge({ label, className = "" }: CategoryBadgeProps) {
  const len = label.length;

  // 글자 길이에 따라 대략적으로 폰트 크기 조정
  let fontClass = "text-[13px]";
  if (len > 10 && len <= 16) fontClass = "text-[12px]";
  else if (len > 16) fontClass = "text-[11px]";

  return (
    <span
      className={`
        inline-flex items-center justify-center
        bg-[#153b85] text-white font-semibold
        rounded-lg shadow text-center transition-all
        px-3 py-2 leading-tight
        ${fontClass}
        ${className}
      `}
      style={{
        width: "100%",
        letterSpacing: "-0.01em",
        minHeight: "38px",   // 1~2줄까지 자연스럽게
        whiteSpace: "normal",
      }}
    >
      {label}
    </span>
  );
}
