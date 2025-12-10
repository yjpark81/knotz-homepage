// src/app/page.tsx
// 'use client';  // ✅ 메인 페이지는 서버 컴포넌트로 두는게 깔끔

// 상단의 useEffect/useState 관련 코드는 모두 제거했습니다.
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";

import NewsSection from "../components/NewsSection";
import DomainSection from "../components/DomainSection";
import ServiceSection from "../components/ServiceSection";
import ClientsSectionServer from "./components/ClientsSection.server";

export default function Home() {
  return (
    <>
      {/* Hero 영역 */}
      <HeroSection />

      {/* 통계 영역 */}
      <StatsSection />

      {/* 뉴스 / 서비스 / 도메인 / 고객사 섹션 */}
      <NewsSection />
      <ServiceSection />
      <DomainSection />
      <ClientsSectionServer />
    </>
  );
}
