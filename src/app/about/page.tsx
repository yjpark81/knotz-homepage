// src/app/about/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  HeartHandshake,
  Gauge,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import NaverMapSection from "./NaverMapSection";

export const metadata: Metadata = {
  title: "회사소개 | Knotz",
  description: "소프트웨어 테스트 및 자동화 전문기업 노츠(주)를 소개합니다.",
};

/* ===================== Hero (로고 + 소개 문단) ===================== */
function IntroHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-24 pb-16 md:pb-20">
      {/* 상단 큰 타이틀 */}
      <h1 className="text-[22px] md:text-[26px] font-extrabold text-[#1f3b74] mb-6 md:mb-8">
        품질로 신뢰를 만들고, 신뢰로 성장을 이어갑니다.
      </h1>

      {/* 좌측: 사진 / 우측: 텍스트 */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-6 md:gap-8 items-stretch">
        {/* 왼쪽 : 로고 사진 */}
        <div className="relative w-full bg-[#0f244a] rounded-sm md:rounded-md overflow-hidden shadow-md">
          <Image
            src="/about/about-knotz-wall.jpg"
            alt="Knotz 사내 로고"
            width={900}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* 오른쪽 : 텍스트 (박스 없이 자연스럽게) */}
        <article className="text-[14px] md:text-[18px] leading-7 text-gray-800 space-y-3 md:space-y-4">
          <h2 className="text-base md:text-lg font-extrabold text-[#1f3b74]">
            품질은 신뢰의 시작입니다.
          </h2>

          <p>
            <strong>노츠(주)</strong>는 2006년 설립 이래, 다양한 산업군의 소프트웨어
            품질 향상을 목표로 전문적인 테스트 서비스를 제공해온{" "}
            <strong className="text-[#1d4ed8]">
              국내 대표 소프트웨어 테스트 전문기업
            </strong>
            입니다.
          </p>
          <p>
            웹·모바일, 임베디드 시스템, 자동차 전장, 미디어·통신 플랫폼 등
            폭넓은 영역에서 축적된 경험과 노하우를 기반으로, 고객의 제품과 서비스가{" "}
            <strong>최고의 품질로 시장에 출시</strong>될 수 있도록 지원하고 있습니다.
          </p>

          <p>
            노츠는 단순히 테스트를 수행하는 기업이 아니라,{" "}
            <strong>고객의 품질 파트너(Quality Partner)</strong>로서 테스트 전략
            수립부터 자동화, 품질 컨설팅까지 전 과정을 함께 고민합니다.
            <br />
            우리는{" "}
            <strong>신뢰와 전문성, 그리고 사람 중심의 협업 문화</strong>를 바탕으로
            구성원 각자의 역량이 곧 회사의 경쟁력이 된다고 믿습니다.
          </p>

          <p>
            빠르게 변화하는 디지털 환경 속에서, 노츠는 기술 변화에 유연하게 대응하며
            고객의 성공을 통해 함께 성장하는{" "}
            <strong>품질 중심 기업문화</strong>를 지켜가고 있습니다.
          </p>
        </article>
      </div>
    </section>
  );
}

/* ===================== 경영철학 (Mission + 핵심가치) ===================== */
function PhilosophySection() {
  const missionCards = [
    {
      title: "탁월한 테스트 서비스",
      desc: "고객에게 탁월한 테스트 서비스를 제공하기 위해 소프트웨어 테스트에 대한 끊임없는 고민과 노력을 이어갑니다.",
      image: "/about/about-mission-1.jpg",
    },
    {
      title: "고객의 성공 지원",
      desc: "고객의 성공이 곧 우리의 성공이라는 마음으로, 진심이 담긴 서비스를 제공하기 위해 모든 구성원이 노력합니다.",
      image: "/about/about-mission-2.jpg",
    },
    {
      title: "인류 구성원 역할",
      desc: "단순히 테스트 서비스를 제공하는 것을 넘어, 세상이 더 풍요롭고 안전해지도록 기여하는 구성원이 되고자 합니다.",
      image: "/about/about-mission-3.jpg",
    },
  ];

  const coreValues = [
    {
      label: "신뢰",
      icon: <HeartHandshake className="h-9 w-9" />,
      desc: "약속을 지키고, 테스트 결과와 이슈를 투명하게 공유하며 고객과 동료에게 신뢰받는 파트너가 됩니다.",
    },
    {
      label: "속도",
      icon: <Gauge className="h-9 w-9" />,
      desc: "빠르게 변화하는 환경에 기민하게 대응하여, 품질을 유지하면서도 출시 리드타임을 단축하는 것을 지향합니다.",
    },
    {
      label: "진정성",
      icon: <UserCheck className="h-9 w-9" />,
      desc: "고객과 사용자의 입장에서 고민하며, 형식적인 대응이 아닌 책임 있는 피드백과 행동으로 신뢰를 쌓습니다.",
    },
    {
      label: "탁월성",
      icon: <TrendingUp className="h-9 w-9" />,
      desc: "높은 수준의 테스트 역량과 자동화 기술을 통해, 기대치를 넘어서는 결과를 만들어 내는 것을 목표로 합니다.",
    },
    {
      label: "보안성",
      icon: <ShieldCheck className="h-9 w-9" />,
      desc: "고객의 자산과 데이터를 안전하게 보호하기 위해 정보보호 정책과 보안 프로세스를 철저히 준수합니다.",
    },
    {
      label: "가용성",
      icon: <Globe2 className="h-9 w-9" />,
      desc: "언제든지 안정적으로 서비스를 이용할 수 있도록, 시스템과 테스트 환경의 지속적인 운영과 개선에 힘씁니다.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-16 md:pb-20">
      {/* ✅ 경영철학 앵커 (드롭다운: /about#philosophy) */}
      <h2
        id="philosophy"
        className="text-xl md:text-2xl font-extrabold text-[#111827] mb-6 scroll-mt-24"
      >
        경영철학
      </h2>

      <div className="space-y-12 md:space-y-14">
        {/* Mission 영역 */}
        <div>
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            {/* Mission 리본 */}
            <div className="shrink-0">
              <div className="inline-flex items-center justify-center rounded-md bg-[#1d4ed8] px-5 py-2 text-sm md:text-base font-bold text-white shadow">
                Mission
              </div>
            </div>

            {/* Mission 텍스트 */}
            <p className="text-[14px] md:text-[15px] leading-7 text-gray-700">
              노츠는 탁월한 테스트 서비스를 바탕으로 고객 성공을 지원하며, 세상이 보다
              풍요롭고, 즐겁고, 안전해질 수 있도록 인류 구성원으로서의 역할을
              다한다는 것을 사명으로 합니다.
            </p>
          </div>

          {/* Mission 카드 3개 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {missionCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full h-48 md:h-56 rounded-md overflow-hidden shadow">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-3 text-base md:text-lg font-bold text-[#111827]">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs md:text-sm text-gray-600 leading-6 max-w-[260px]">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ✅ 핵심가치 영역 (드롭다운: /about#core-values) */}
        <div>
          <div
            id="core-values"
            className="flex items-center gap-3 mb-5 scroll-mt-24"
          >
            <div className="inline-flex items-center justify-center rounded-md bg-[#1d4ed8] px-5 py-2 text-sm md:text-base font-bold text-white shadow">
              핵심가치
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {coreValues.map((v) => (
              <article
                key={v.label}
                className="h-full rounded-xl bg-white border border-[#e5edf9] shadow-sm px-5 py-5 md:px-6 md:py-6 flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0369a1] text-white shadow-md">
                  {v.icon}
                </div>
                <h3 className="mt-3 text-sm md:text-[17px] font-semibold text-[#111827]">
                  {v.label}
                </h3>
                <p className="mt-2 text-xs md:text-[15px] leading-6 text-gray-600">
                  {v.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== 페이지 ===================== */
export default function AboutPage() {
  return (
    <main className="bg-white pt-4">
      {/* 헤더와 간격 확보 */}
      <div className="mt-16" />

      {/* 로고 + 회사 소개 */}
      <IntroHero />

      {/* 경영철학 (Mission + 핵심가치) */}
      <PhilosophySection />

      {/* 오시는 길 (네이버 지도 – 클라이언트 컴포넌트) */}
      {/* ✅ 드롭다운: /about#location 에 대응 */}
      <NaverMapSection />
    </main>
  );
}
