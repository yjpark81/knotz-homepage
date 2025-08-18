"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ClipboardCheck,
  BarChart2,
  Globe,
  Layers,
} from "lucide-react";
import { clients } from "../data/clients";

// ────────────── 카테고리/색상/마커 정의 ──────────────
const funcCategories = [
  "UI 테스트", "단위 테스트", "통합 테스트", "시스템 테스트",
  "인수 테스트", "리그레션 테스트", "Ad-hoc 테스트", "스모크 테스트",
];
const nonFuncCategories = ["성능", "보안", "사용성", "호환성", "신뢰성"];
const globalCategories = [
  "미국 L.A OTC", "중국 연태 OTC", "일본 동경 OTC",
  "싱가포르 OTC", "베트남 호치민 OTC", "인도네시아 수라바야 OTC",
];
// 노츠 메인 컬러 5종(로고 색 순서)
const notesColors = [
  "#19378A", "#005FCC", "#008cffff", "#00aeffff", "#00ccffff",
];
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
  .filter(c => c.domains.some(d =>
    ["platform", "ictsi", "security", "embedded", "car"].includes(d)
  ))
  .map(c => c.logo);

// 멀티서비스 영역용(샘플)
const multiLogos = [
  "/clients/multi1.png", "/clients/multi2.png", "/clients/multi3.png"
];

// ────────────── 서비스 데이터 ──────────────
const services = [
  {
    icon: ClipboardCheck,
    label: "기능 테스트",
    anchor: "functional",
    desc: (
      <>
        고객의 요구사항에 대하여 블랙박스 설계 기법을 활용한 테스트케이스를 설계하여, 테스트를 수행하는 방법으로
        요구사항이 정상적으로 구현되었는지, 실제 기대한 대로 동작하는지 확인합니다.
        주요 기능 시나리오 및 사용자의 플로우를 중심으로 각 기능의 완전성·정확성·일관성을 검증합니다.<br /><br />
        노츠는 다양한 산업 분야의 기능 테스트 경험을 바탕으로 고객의 품질 요구를 충족하는 맞춤형 테스트 서비스를 제공합니다.
      </>
    ),
    logos: funcLogos,
    categories: funcCategories,
    categoryGridCols: 4,
    logoType: "grid", // ⭐️ 4x4 그리드 롤링
  },
  {
    icon: BarChart2,
    label: "비기능 테스트",
    anchor: "nonfunctional",
    desc: (
      <>
        성능, 보안, 사용성, 접근성 등 시스템의 품질 특성을 측정하고 검증하는 테스트입니다. 단순 기능 정상 여부뿐만 아니라,<br />
        실제 운영환경에서의 효율성과 안정성까지 테스트합니다.<br /><br />
        노츠는 다양한 비기능 품질 요구를 반영한 전문 테스트로, 시스템의 신뢰성과 경쟁력 강화를 지원합니다.
      </>
    ),
    logos: [],
    categories: nonFuncCategories,
    categoryGridCols: 5,
    logoType: "nonfunc-block", // ⭐️ 사선 효과
  },
  {
    icon: Globe,
    label: "글로벌 테스트",
    anchor: "global",
    desc: (
      <>
        해외 OTC(Offshore Testing Center)를 활용하여 현지 Field Test를 대행해 드리는 서비스 입니다.<br />
        다양한 언어, 국가, 기기 및 네트워크 환경에서 서비스의 동작성, 현지화/다국어/글로벌 시장 대응 테스트까지 폭넓게 검증합니다.<br /><br />
        노츠는 글로벌 프로젝트 다수 수행 경험을 바탕으로 전 세계 다양한 품질 요구에 최적화된 테스트 서비스를 제공합니다.
      </>
    ),
    logos: [],
    categories: globalCategories,
    categoryGridCols: 3,
    logoType: "none",
  },
  {
    icon: Layers,
    label: "멀티 서비스",
    anchor: "multi",
    desc: (
      <>
        노츠는 소프트웨어 테스트 서비스를 비롯하여, IT 전문기업들과의 협업으로 One Contact Multi Service를 제공합니다.<br /><br />
      </>
    ),
    logos: multiLogos,
    categories: ["보안 취약점 진단", "테스트 자동화", "RPA"],
    categoryGridCols: 3,
    logoType: "multi-grid", // ⭐️ 한 번에 1행 3개 노출
  },
];

// ────────────── 4x4 그리드 롤링배너 (기능테스트용) ──────────────
function LogoGridCarousel({ logos, interval = 3000, transition = 600 }) {
  const GRID_SIZE = 16; // 4x4
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

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`grid grid-cols-4 grid-rows-4 gap-x-6 gap-y-3
          transition-opacity duration-700
          ${fade ? "opacity-100" : "opacity-0"}
        `}
        style={{ minHeight: "240px" }}
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
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ────────────── 멀티서비스: 3x1 그리드 (슬라이드 없음) ──────────────
function LogoGridRow({ logos }: { logos: string[] }) {
  return (
<div className="mb-16 flex flex-col md:flex-row md:items-center rounded-2xl" style={{ padding: "40px 0" }}>
     <div className="grid grid-cols-3 gap-x-15 gap-y-3">
        {logos.map((src, idx) => (
          <div
            key={src + idx}
            className="flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow p-2 w-[108px] h-[52px]"
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

// ────────────── 기존 1줄 슬라이드 롤링배너 (멀티서비스에서 더이상 사용X) ──────────────
// ... ClientLogoSliderGrid 등 불필요해짐

// ────────────── 비기능 사선 애니메이션 블럭 (컬러 적용/축소) ──────────────
function NonFuncBlock({ keys }: { keys: string[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    let t: any;
    if (active < keys.length) {
      t = setTimeout(() => setActive(active + 1), 350);
    }
    return () => clearTimeout(t);
  }, [active, keys.length]);

  return (
    <div className="relative flex flex-row h-[160px] items-center justify-end min-w-[300px]">
      <div className="flex flex-row h-full gap-0">
        {keys.map((txt, i) => (
          <div
            key={txt}
            className={`
              flex flex-col items-center justify-center
              text-white text-lg font-bold select-none
              transition-all duration-600
              ${active > i ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}
            `}
            style={{
              width: 102,
              height: "100%",
              marginLeft: i === 0 ? 0 : -16,
              clipPath: "polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)",
              background: notesColors[i % notesColors.length],
              boxShadow: "2px 0 12px rgba(10,20,70,0.08)",
              zIndex: 10 - i
            }}
          >
            <span
              style={{
                writingMode: "vertical-rl",
                letterSpacing: "0.08em",
                fontWeight: 700,
                fontFamily: "inherit",
                margin: "0 auto"
              }}>
              {txt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ────────────── 부유효과 ──────────────
function getFloatStyle(idx: number) {
  const durations = [2.8, 3.2, 2.5, 3.6];
  const delays = [0, 0.4, 0.2, 0.6];
  return {
    animation: `floatUpDown ${durations[idx % durations.length]}s ease-in-out infinite`,
    animationDelay: `${delays[idx % durations.length]}s`,
  };
}

// ────────────── 메인 컴포넌트 ──────────────
export default function ServiceDetailPage() {
  const sectionColors = ["#f5faff", "#fff", "#f5faff", "#fff"];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 네비 클릭 시 헤더 아래에 타이틀 보이기
  const handleNavClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    const elem = document.getElementById(anchor);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-white relative">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes floatUpDown {
          0% { transform: translateY(0px);}
          20% { transform: translateY(-18px);}
          40% { transform: translateY(0px);}
          60% { transform: translateY(12px);}
          80% { transform: translateY(0px);}
          100% { transform: translateY(0px);}
        }
      `}</style>
      {/* 상단 네비 */}
      <div className="max-w-5xl mx-auto px-4 mb-10">
        <div className="flex flex-row justify-center gap-[210px] mb-12">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={`#${s.anchor}`}
                onClick={e => handleNavClick(e, s.anchor)}
                className="flex flex-col items-center select-none min-w-[120px] group focus:outline-none"
                tabIndex={0}
              >
                <Icon
                  size={54}
                  color="#1e3a8a"
                  style={{ ...getFloatStyle(idx), display: "block" }}
                  strokeWidth={2.2}
                  className="group-hover:scale-110 transition-transform"
                />
                <div className="mt-3 font-bold text-lg text-gray-900 text-center whitespace-nowrap" style={{ lineHeight: 1.3 }}>
                  {s.label}
                </div>
              </a>
            );
          })}
        </div>
      </div>
      {/* 상세 서비스 */}
      {services.map((s, idx) => (
        <div
          key={s.anchor}
          className="w-full"
          style={{ backgroundColor: sectionColors[idx] }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 flex flex-col md:flex-row md:items-center rounded-2xl" style={{ padding: "40px 0" }}>
              <div className="md:w-4/5 md:pr-2 px-8">
                <h3
                  id={s.anchor}
                  className="text-xl font-bold text-blue-900 mb-2 scroll-mt-[96px]"
                >
                  {s.label}
                </h3>
                <p className="text-gray-800 text-base">{s.desc}</p>
                {(s.logoType === "grid" || s.logoType === "slide" || s.logoType === "none" || s.logoType === "multi-grid") && s.categories && (
                  <div className="w-full mt-8">
                    <div className={`grid grid-cols-${s.categoryGridCols} gap-x-6 gap-y-3 w-full`}>
                      {s.categories.map((cat) => (
                        <span
                          key={cat}
                          className="flex items-center justify-center bg-[#153b85] text-white font-semibold text-base rounded-lg shadow text-center transition-all"
                          style={{
                            width: "100%",
                            fontSize: "14px",
                            letterSpacing: "-0.01em",
                            height: "30px",
                          }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* 로고 영역 타입별 분기 */}
              {s.logoType === "grid" && s.logos.length > 0 ? (
                <div
                  className="md:w-1/2 flex justify-center items-center md:pl-2 mt-8 md:mt-0"
                  style={{ marginLeft: "50px" }}
                >
                  <LogoGridCarousel logos={s.logos} />
                </div>
              ) : s.logoType === "multi-grid" && s.logos.length > 0 ? (
                <div
                  className="md:w-1/2 flex justify-center items-center md:pl-2 mt-8 md:mt-0"
                  style={{ marginLeft: "50px" }}
                >
                  <LogoGridRow logos={s.logos} />
                </div>
              ) : s.logoType === "nonfunc-block" ? (
                <div
                  className="md:w-1/2 flex justify-end items-center md:pl-2 mt-8 md:mt-0"
                  style={{ marginLeft: "50px" }}
                >
                  <NonFuncBlock keys={s.categories} />
                </div>
              ) : s.anchor === "global" ? (
                <div
                  className="md:w-1/2 flex justify-center items-center md:pl-2 mt-8 md:mt-0"
                  style={{ marginLeft: "50px" }}
                >
                  <div className="relative w-[450px] h-[280px] rounded-xl shadow bg-white overflow-hidden border border-gray-200">
                    {/* 지도 이미지 */}
                    <Image
                      src="/worldmap.png"
                      alt="세계지도"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                    {/* OTC 마커 */}
                    {otcMarkers.map((m, idx) => (
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
                            filter: "drop-shadow(0 2px 6px #90caf9)"
                          }}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="md:w-1/2 flex md:pl-2 mt-8 md:mt-0" style={{ marginLeft: "50px" }} />
              )}
            </div>
          </div>
        </div>
      ))}

      {/* ✅ Back to Top 버튼 */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
          aria-label="맨 위로 이동"
        >
          ↑
        </button>
      )}
    </section>
  );
}
