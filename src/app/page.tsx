// 'use client';

// import { useEffect, useState } from 'react';
import StatWithColor from "../components/StatWithColor";
import NewsSection from "../components/NewsSection";
import DomainSection from "../components/DomainSection";
import ServiceSection from '../components/ServiceSection';
// import ClientsSection from "../components/ClientsSection";
import ClientsSectionServer from './components/ClientsSection.server';
import BackToTopButton from "../components/BackToTopButton"; // 👈 클라컴포넌트로 분리

import Link from "next/link";

export default function Home() {
  // const [isVisible, setIsVisible] = useState(false);
  /* const [currentHash, setCurrentHash] = useState(
    typeof window !== "undefined" ? window.location.hash : "#home"
  );

 useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []); */

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ✅ 상단 네비게이션(삭제, layout.tsx에서 관리) */}
      {/* <Header /> 등 관련 코드 모두 삭제 */}

      {/* ✅ Hero Section */}
      <section
        id="home"
        className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat pt-32"
        style={{
          backgroundImage: "url('/background-hero.jpg')",
        }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
            Make Your Software Quality
          </h1>        
          <p className="text-base sm:text-lg mt-4 text-gray-200 drop-shadow">
            품질로 신뢰를 완성합니다. Knotz가 함께 하겠습니다.
          </p>
        </div>
      </section>

      {/* ✅ 통계 섹션 */}
      <section style={{ backgroundColor: "#f5faff" }} className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-semibold">
              <StatWithColor end={19} duration={2} />
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">업력</p>
          </div>
          <div>
            <p className="text-4xl font-semibold">
              <StatWithColor end={3} duration={2} />
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">글로벌</p>
          </div>
          <div>
            <p className="text-4xl font-semibold">
              <StatWithColor end={150} duration={2} />
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">엔지니어</p>
          </div>
          <div>
            <p className="text-4xl font-semibold">
              <StatWithColor end={1500} duration={3.0} />
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">누적 프로젝트</p>
          </div>
        </div>
      </section>

      <NewsSection />
      <ServiceSection />
      <DomainSection />
      <ClientsSectionServer />
      <BackToTopButton />
     
    </>
  );
}
