"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ClipboardCheck, BarChart2, Globe, Layers } from "lucide-react";
import { clients } from "../data/clients";

// ────────────── 카테고리/색상/마커 정의 ──────────────
const funcCategories = [
  "UI 테스트",
  "단위 테스트",
  "통합 테스트",
  "시스템 테스트",
  "인수 테스트",
  "리그레션 테스트",
  "Ad-hoc 테스트",
  "스모크 테스트",
];

const nonFuncCategories = ["성능", "보안", "사용성", "호환성", "신뢰성"];

const globalCategories = [
  "미국 L.A OTC",
  "중국 연태 OTC",
  "일본 동경 OTC",
  "싱가포르 OTC",
  "베트남 호치민 OTC",
  "인도네시아 수라바야 OTC",
];

// 노츠 메인 컬러 5종(로고 색 순서)
const notesColors = ["#19378A", "#005FCC", "#008cffff", "#00aeffff", "#00ccffff"];

const otcMarkers = [
  { label: "미국 L.A OTC", left: "12%", top: "44%", img: "/OL_point_usa.png" },
  { label: "중국 연태 OTC", left: "83%", top: "38%", img: "/OL_point_ch.png" },
  { label: "일본 동경 OTC", left: "90%", top: "41%", img: "/OL_point_jp.png" },
  { label: "싱가포르 OTC", left: "80%", top: "66%", img: "/OL_point_sing.png" },
  { label: "베트남 호치민 OTC", left: "81%", top: "57%", img: "/OL_point_vn.png" },
  { label: "인도네시아 수라바야 OTC", left: "82%", top: "73%", img: "/OL_point_indo.png" },
];

// 기능 테스트(모든 도메인)
const funcLogos = clients
  .filter((c) =>
    c.domains.some((d) => ["platform", "ictsi", "security", "embedded", "car"].includes(d)),
  )
  .map((c) => c.logo);

// 멀티서비스 영역용(샘플)
const multiLogos = ["/clients/multi1.png", "/clients/multi2.png", "/clients/multi3.png"];

// ────────────── 서비스 데이터 ──────────────
const services = [
  {
    icon: ClipboardCheck,
    label: "기능 테스트",
    anchor: "functional",
    desc: (
      <>
        고객의 요구사항에 대하여 블랙박스 설계 기법을 활용한 테스트케이스를 설계하여, 테스트를 수행하는 방법으로
        요구사항이 정상적으로 구현되었는지, 실제 기대한 대로 동작하는지 확인합니다. 주요 기능 시나리오 및 사용자의 플로우를
        중심으로 각 기능의 완전성·정확성·일관성을 검증합니다.
        <br />
        <br />
        노츠는 다양한 산업 분야의 기능 테스트 경험을 바탕으로 고객의 품질 요구를 충족하는 맞춤형 테스트 서비스를
        제공합니다.
      </>
    ),
    logos: funcLogos,
    categories: funcCategories,
    categoryGridCols: 4,
    logoType: "grid" as const, // 4x4 그리드 롤링
  },
  {
    icon: BarChart2,
    label: "비기능 테스트",
    anchor: "nonfunctional",
    desc: (
      <>
        성능, 보안, 사용성, 접근성 등 시스템의 품질 특성을 측정하고 검증하는 테스트입니다. 단순 기능 정상 여부뿐만 아니라,
        <br />
        실제 운영환경에서의 효율성과 안정성까지 테스트합니다.
        <br />
        <br />
        노츠는 다양한 비기능 품질 요구를 반영한 전문 테스트로, 시스템의 신뢰성과 경쟁력 강화를 지원합니다.
      </>
    ),
    logos: [] as string[],
    categories: nonFuncCategories,
    categoryGridCols: 5,
    logoType: "nonfunc-block" as const, // 사선 효과
  },
  {
    icon: Globe,
    label: "글로벌 테스트",
    anchor: "global",
    desc: (
      <>
        해외 OTC(Offshore Testing Center)를 활용하여 현지 Field Test를 대행해 드리는 서비스 입니다.
        <br />
        다양한 언어, 국가, 기기 및 네트워크 환경에서 서비스의 동작성, 현지화/다국어/글로벌 시장 대응 테스트까지 폭넓게
        검증합니다.
        <br />
        <br />
        노츠는 글로벌 프로젝트 다수 수행 경험을 바탕으로 전 세계 다양한 품질 요구에 최적화된 테스트 서비스를 제공합니다.
      </>
    ),
    logos: [] as string[],
    categories: globalCategories,
    categoryGridCols: 3,
    logoType: "none" as const,
  },
  {
    icon: Layers,
    label: "멀티 서비스",
    anchor: "multi",
    desc: (
      <>
        노츠는 소프트웨어 테스트 서비스를 비롯하여, IT 전문기업들과의 협업으로 One Contact Multi Service를 제공합니다.
        <br />
        <br />
      </>
    ),
    logos: multiLogos,
    categories: ["보안 취약점 진단", "테스트 자동화", "RPA"],
    categoryGridCols: 3,
    logoType: "multi-grid" as const, // 한 번에 1행 3개 노출
  },
];

// ────────────── 부유 효과 (상단 아이콘용) ──────────────
function getFloatStyle(idx: number) {
  const durations = [2.8, 3.2, 2.5, 3.6];
  const delays = [0, 0.4, 0.2, 0.6];
  return {
    animation: `floatUpDown ${durations[idx % durations.length]}s ease-in-out infinite`,
    animationDelay: `${delays[idx % durations.length]}s`,
  };
}

// ────────────── 4x4 그리드 롤링배너 (기능테스트용) ──────────────
function LogoGridCarousel({
  logos,
  interval = 3000,
  transition = 600,
}: {
  logos: string[];
  interval?: number;
  transition?: number;
}) {
  const GRID_SIZE = 16; // 4x4

  if (!logos || logos.length === 0) {
    return null;
  }

  const extended =
    logos.length < GRID_SIZE
      ? Array(Math.ceil(GRID_SIZE / logos.length))
          .fill(logos)
          .flat()
          .slice(0, GRID_SIZE)
      : logos;

  const sets: string[][] = [];
  for (let i = 0; i < extended.length; i += GRID_SIZE) {
    sets.push(extended.slice(i, i + GRID_SIZE));
  }

  if (logos.length > GRID_SIZE) {
    while (sets.length * GRID_SIZE < logos.length + GRID_SIZE) {
      const start = (sets.length * GRID_SIZE) % logos.length;
      sets.push(
        logos
          .slice(start)
          .concat(logos.slice(0, start))
          .slice(0, GRID_SIZE),
      );
      if (sets.length > 10) break;
    }
  }

  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (sets.length <= 1) return;

    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPage((p) => (p + 1) % sets.length);
        setFade(true);
      }, transition);
    }, interval);

    return () => clearInterval(timer);
  }, [sets.length, interval, transition]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`grid grid-cols-4 grid-rows-4 gap-x-4 gap-y-3 transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ minHeight: "240px" }} // 고정 높이로 Y축 안정화
      >
        {sets[page]?.map((src, idx) => (
          <div
            key={src + idx}
            className="flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow p-2 w-[92px] h-[48px] mx-auto"
          >
            <Image
              src={src}
              alt={`고객사 로고 ${idx + 1}`}
              width={80}
              height={32}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ────────────── 멀티서비스: 3x1 그리드 ──────────────
function LogoGridRow({ logos }: { logos: string[] }) {
  if (!logos || logos.length === 0) return null;
  return (
    <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-center rounded-2xl">
      <div className="grid grid-cols-3 gap-x-4 gap-y-3 w-full max-w-xs md:max-w-none mx-auto">
        {logos.map((src, idx) => (
          <div
            key={src + idx}
            className="flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow p-2 h-[52px]"
          >
            <Image
              src={src}
              alt={`멀티서비스 로고 ${idx + 1}`}
              width={88}
              height={36}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ────────────── 비기능 사선 애니메이션 블럭 ──────────────
function NonFuncBlock({ keys }: { keys: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    if (active < keys.length) {
      t = setTimeout(() => setActive(active + 1), 350);
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [active, keys.length]);

  return (
    <div className="relative flex flex-row h-[140px] md:h-[160px] items-center justify-end min-w-[260px] md:min-w-[300px]">
      <div className="flex flex-row h-full gap-0">
        {keys.map((txt, i) => (
          <div
            key={txt}
            className={`flex flex-col items-center justify-center text-white text-base md:text-lg font-bold select-none transition-all duration-600 ${
              active > i ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
            }`}
            style={{
              width: 88,
              height: "100%",
              marginLeft: i === 0 ? 0 : -16,
              clipPath: "polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)",
              background: notesColors[i % notesColors.length],
              boxShadow: "2px 0 12px rgba(10,20,70,0.08)",
              zIndex: 10 - i,
            }}
          >
            <span
              style={{
                writingMode: "vertical-rl",
                letterSpacing: "0.08em",
                fontWeight: 700,
                fontFamily: "inherit",
                margin: "0 auto",
              }}
            >
              {txt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ────────────── 메인 컴포넌트 ──────────────
export default function ServiceDetailPage() {
  const sectionColors = ["#f5faff", "#ffffff", "#f5faff", "#ffffff"];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const elem = document.getElementById(anchor);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen pt-20 md:pt-23 bg-white relative">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes floatUpDown {
          0% { transform: translateY(0px); }
          20% { transform: translateY(-18px); }
          40% { transform: translateY(0px); }
          60% { transform: translateY(12px); }
          80% { transform: translateY(0px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {/* 상단 네비게이션 (도메인 페이지와 동일한 구조로 통일) */}
<div className="w-full bg-white">
  <div className="max-w-5xl mx-auto px-4">

    {/* 모바일 : 가로 스크롤 */}
    <div className="md:hidden overflow-x-auto no-scrollbar py-4">
      <div className="flex gap-6 w-max">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={`#${s.anchor}`}
              onClick={(e) => handleNavClick(e, s.anchor)}
              className="flex flex-col items-center min-w-[80px] select-none group"
            >
              <Icon
                className="h-10 w-10 text-[#1e3a8a] group-hover:scale-110 transition-transform"
                strokeWidth={2.2}
                style={getFloatStyle(idx)}
              />
              <div className="mt-2 text-sm font-semibold text-gray-900 text-center whitespace-nowrap">
                {s.label}
              </div>
            </a>
          );
        })}
      </div>
    </div>

    {/* PC : 1행 4개 그리드 — 도메인 페이지와 동일한 높이 */}
    <div className="hidden md:grid grid-cols-4 gap-16 justify-items-center py-10">
      {services.map((s, idx) => {
        const Icon = s.icon;
        return (
          <a
            key={s.label}
            href={`#${s.anchor}`}
            onClick={(e) => handleNavClick(e, s.anchor)}
            className="flex flex-col items-center min-w-[120px] select-none group"
          >
            <Icon
              className="h-[54px] w-[54px] text-[#1e3a8a] group-hover:scale-110 transition-transform"
              strokeWidth={2.2}
              style={getFloatStyle(idx)}
            />
            <div className="mt-3 text-lg font-bold text-gray-900 text-center whitespace-nowrap">
              {s.label}
            </div>
          </a>
        );
      })}
    </div>

  </div>
</div>



      {/* 상세 서비스 섹션들 */}
      {services.map((s, idx) => {
        const colClass =
          s.categoryGridCols === 3
            ? "md:grid-cols-3"
            : s.categoryGridCols === 4
            ? "md:grid-cols-4"
            : "md:grid-cols-5";

        const isLast = idx === services.length - 1;
        const sectionMarginClass = isLast ? "mb-4 md:mb-6" : "mb-12 md:mb-16";

        return (
          <div key={s.anchor} className="w-full" style={{ backgroundColor: sectionColors[idx] }}>
            <div className="max-w-7xl mx-auto px-4">
              <div
                className={`${sectionMarginClass} flex flex-col md:flex-row md:items-center rounded-2xl py-8 md:py-10`}
              >
                {/* 설명 영역 */}
                <div className="w-full md:w-4/5 md:pr-4 px-2 md:px-8">
                  <h3
                    id={s.anchor}
                    className="text-lg md:text-xl font-bold text-blue-900 mb-3 scroll-mt-[88px] md:scroll-mt-[96px]"
                  >
                    {s.label}
                  </h3>
                  <p className="text-sm md:text-base text-gray-800 leading-7">{s.desc}</p>

                  {/* ※ 비기능 테스트 섹션에서는 pill 박스 숨김 */}
                  {s.anchor !== "nonfunctional" && s.categories && s.categories.length > 0 && (
                    <div className="w-full mt-6 md:mt-8">
                      <div className={`grid grid-cols-2 ${colClass} gap-x-3 md:gap-x-6 gap-y-3 w-full`}>
                        {s.categories.map((cat) => (
                          <span
                            key={cat}
                            className="flex items-center justify-center bg-[#153b85] text-white font-semibold rounded-lg shadow text-center px-2 md:px-3 py-1.5"
                          >
                            <span className="text-xs md:text-sm leading-tight">{cat}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 오른쪽 로고/이미지 영역 */}
                {s.logoType === "grid" && s.logos.length > 0 ? (
                  <div className="w-full md:w-1/2 flex justify-center items-center md:pl-4 mt-6 md:mt-0">
                    <LogoGridCarousel logos={s.logos} />
                  </div>
                ) : s.logoType === "multi-grid" && s.logos.length > 0 ? (
                  <div className="w-full md:w-1/2 flex justify-center items-center md:pl-4 mt-6 md:mt-0">
                    <LogoGridRow logos={s.logos} />
                  </div>
                ) : s.logoType === "nonfunc-block" ? (
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center md:pl-4 mt-6 md:mt-0">
                    <NonFuncBlock keys={s.categories ?? []} />
                  </div>
                ) : s.anchor === "global" ? (
                  <div className="w-full md:w-1/2 flex justify-center items-center md:pl-4 mt-6 md:mt-0">
                    <div className="relative w-full max-w-[450px] h-[220px] md:h-[280px] rounded-xl shadow bg-white overflow-hidden border border-gray-200">
                      <Image src="/worldmap.png" alt="세계지도" fill style={{ objectFit: "contain" }} />
                      {otcMarkers.map((m) => (
                        <span
                          key={m.label}
                          title={m.label}
                          className="absolute"
                          style={{
                            left: m.left,
                            top: m.top,
                            transform: "translate(-50%, -100%)",
                            zIndex: 2,
                            width: 24,
                            height: 44,
                            pointerEvents: "auto",
                          }}
                        >
                          <Image
                            src={m.img}
                            alt={m.label}
                            width={24}
                            height={44}
                            style={{
                              objectFit: "contain",
                              filter: "drop-shadow(0 2px 6px #90caf9)",
                            }}
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="w-full md:w-1/2 md:pl-4 mt-6 md:mt-0" />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
