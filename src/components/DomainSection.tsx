// src/components/DomainSection.tsx
import Link from "next/link";
import {
  ShoppingBag,
  Network,
  ShieldCheck,
  Cpu,
  Car,
} from "lucide-react";

const domains = [
  {
    href: "/domain#platform",
    label: "플랫폼 / 커머스",
    desc: "온라인 플랫폼·커머스 서비스 품질 검증",
    icon: ShoppingBag,
  },
  {
    href: "/domain#ictsi",
    label: "ICT / SI",
    desc: "금융·공공·통신 등 대형 SI 시스템 검증",
    icon: Network,
  },
  {
    href: "/domain#security",
    label: "보안솔루션",
    desc: "영상관제·출입통제·보안 솔루션 검증",
    icon: ShieldCheck,
  },
  {
    href: "/domain#embedded",
    label: "임베디드",
    desc: "디바이스·IoT·가전 임베디드 S/W 검증",
    icon: Cpu,
  },
  {
    href: "/domain#car",
    label: "자동차",
    desc: "IVI·ADAS 등 차량 전장 S/W 품질 검증",
    icon: Car,
  },
];

export default function DomainSection() {
  return (
    <section
      id="home-domain"
      className="w-full bg-white py-10 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* 제목 영역 */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827]">
              도메인 영역
            </h2>
            <p className="mt-1 text-sm sm:text-[15px] text-gray-600">
              플랫폼, ICT/SI, 보안, 임베디드, 자동차까지
              다양한 산업 도메인의 테스트 경험을 보유하고 있습니다.
            </p>
          </div>
        </div>

        {/* 도메인 카드들 */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-3 sm:gap-4 lg:gap-5
          "
        >
          {domains.map((d) => {
            const Icon = d.icon;
            return (
              <Link
                key={d.href}
                href={d.href}
                className="
                  group flex flex-col items-center text-center
                  rounded-xl bg-[#f5f8ff] hover:bg-[#e4edff]
                  border border-[#e1e7f5]
                  px-3 py-4 sm:px-4 sm:py-5
                  shadow-sm hover:shadow-md
                  transition-all duration-150
                "
              >
                <div
                  className="
                    flex items-center justify-center
                    rounded-full bg-white
                    h-10 w-10 sm:h-12 sm:w-12
                    shadow-[0_3px_8px_rgba(15,23,42,0.12)]
                    mb-2 sm:mb-3
                  "
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#1d4ed8]" />
                </div>
                <div className="text-[11px] sm:text-[16px] font-bold text-[#111827] leading-snug">
                  {d.label}
                </div>
                <p className="mt-1 text-[10px] sm:text-xs text-gray-600 leading-snug">
                  {d.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
