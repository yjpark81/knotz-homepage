// src/components/ServiceSection.tsx
import Link from "next/link";
import { ClipboardCheck, BarChart2, Globe, Layers } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "기능 테스트",
    desc: "요구사항 기반의 시나리오와 테스트케이스 설계를 통해 서비스가 기획 의도대로 동작하는지 검증합니다.",
    href: "/services#functional",
  },
  {
    icon: BarChart2,
    title: "비기능 테스트",
    desc: "성능·보안·사용성 등 품질 특성을 종합적으로 점검하여 안정적인 서비스 운영을 지원합니다.",
    href: "/services#nonfunctional",
  },
  {
    icon: Globe,
    title: "글로벌 테스트",
    desc: "해외 OTC와 현지 환경 기반의 필드 테스트로 글로벌 사용자를 위한 품질을 확보합니다.",
    href: "/services#global",
  },
  {
    icon: Layers,
    title: "멀티 서비스",
    desc: "보안 진단, 자동화, RPA 등 IT 파트너와 협업한 One-Contact Multi Service를 제공합니다.",
    href: "/services#multi",
  },
];

export default function ServiceSection() {
  return (
    <section
      id="home-services"
      className="w-full bg-[#f5faff] py-10 sm:py-14" 
      // ← border-t 삭제함!
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* 제목 영역 */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827]">
              서비스 영역
            </h2>
            <p className="mt-1 text-sm sm:text-[15px] text-gray-600">
              기능·비기능·글로벌 테스트까지, 노츠가 제공하는 주요 서비스입니다.
            </p>
          </div>
        </div>

        {/* 카드 리스트 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                href={s.href}
                className="
                  group rounded-xl bg-white border border-[#e3ebf6]
                  shadow-[0_4px_14px_rgba(15,23,42,0.06)]
                  hover:shadow-[0_8px_24px_rgba(37,99,235,0.22)]
                  transition-all duration-200
                  px-4 py-4 sm:px-5 sm:py-5
                  flex flex-col h-full
                "
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#eef2ff] text-[#1d4ed8]">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-sm sm:text-[16px] font-extrabold text-[#111827]">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-xs sm:text-[13px] leading-6 text-gray-600 flex-1">
                  {s.desc}
                </p>
                <span className="mt-3 text-xs sm:text-[13px] font-semibold text-[#2563eb] group-hover:underline">
                  자세히 보기
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
