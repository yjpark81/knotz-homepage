'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ✅ 상단 네비게이션 */}
      <header className="fixed top-0 left-0 w-full bg-[#f3f4f6] text-gray-700 shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* 메뉴 왼쪽 / 로고 오른쪽 */}
          <div className="flex items-center space-x-8">
            <nav className="hidden sm:flex space-x-6 text-sm font-medium">
              <a href="#home" className="hover:text-blue-700 transition">Home</a>
              <a href="#domain" className="hover:text-blue-700 transition">도메인</a>
              <a href="#services" className="hover:text-blue-700 transition">서비스</a>
              <a href="#culture" className="hover:text-blue-700 transition">채용 & 기업문화</a>
              <a href="#social" className="hover:text-blue-700 transition">사회공헌</a>
              <a href="#about" className="hover:text-blue-700 transition">회사소개</a>
            </nav>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md transition"
            >
              사업문의
            </a>
          </div>

          {/* 로고 */}
          <a href="/">
            <img
              src="/knotz-logo.png"
              alt="Knotz 로고"
              className="h-8 w-auto"
            />
          </a>
        </div>
      </header>

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
            품질로 신뢰를 완성합니다. Knotz와 함께하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-sm"
            >
              사업문의 하기
            </a>
            <a
              href="#services"
              className="border border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-md text-sm"
            >
              Knotz만의 서비스 알아보기
            </a>
          </div>
        </div>
      </section>

      {/* ✅ 통계 섹션 */}
      <section className="bg-[#f7f8f9] py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-semibold text-gray-700">
              <CountUp end={22} duration={2} />
            </p>
            <p className="mt-2 text-sm text-gray-600">업력</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-gray-700">
              <CountUp end={6} duration={2} />
            </p>
            <p className="mt-2 text-sm text-gray-600">글로벌</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-gray-700">
              <CountUp end={600} duration={2} separator="," />
            </p>
            <p className="mt-2 text-sm text-gray-600">엔지니어</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-gray-700">
              <CountUp end={2200} duration={2.5} separator="," />
            </p>
            <p className="mt-2 text-sm text-gray-600">누적 프로젝트</p>
          </div>
        </div>
      </section>

{/* ✅ 뉴스 카드 섹션 (타이틀 텍스트 제거됨) */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* 카드 1 */}
      <div className="bg-[#f9fafb] border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            [보도] Knotz, 글로벌 QA 프로젝트 2,000건 돌파
          </h3>
          <p className="text-sm text-gray-500 mt-2">2025.06.01</p>
          <p className="text-gray-600 mt-4 text-sm">
            Knotz는 2025년 상반기 기준 2,000건 이상의 글로벌 QA 프로젝트를 성공적으로 수행하였습니다...
          </p>
        </div>
        <a href="#" className="mt-4 text-blue-600 text-sm hover:underline">
          자세히 보기 →
        </a>
      </div>

      {/* 카드 2 */}
      <div className="bg-[#f9fafb] border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            [공지] 채용 설명회 안내
          </h3>
          <p className="text-sm text-gray-500 mt-2">2025.05.22</p>
          <p className="text-gray-600 mt-4 text-sm">
            QA 인재 확보를 위한 채용 설명회를 전국 4개 지역에서 진행합니다...
          </p>
        </div>
        <a href="#" className="mt-4 text-blue-600 text-sm hover:underline">
          자세히 보기 →
        </a>
      </div>

      {/* 카드 3 */}
      <div className="bg-[#f9fafb] border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            [업데이트] Knotz 플랫폼 개편 안내
          </h3>
          <p className="text-sm text-gray-500 mt-2">2025.04.15</p>
          <p className="text-gray-600 mt-4 text-sm">
            UX/UI 개선이 6월 중순부터 적용될 예정입니다...
          </p>
        </div>
        <a href="#" className="mt-4 text-blue-600 text-sm hover:underline">
          자세히 보기 →
        </a>
      </div>
    </div>
  </div>
</section>


     {/* ✅ 1. 수평 타임라인 형식 (현재 적용 중) 
<section id="domain" className="bg-[#f3f4f6] py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-left">
      Knotz의 주요 테스트 도메인
    </h2>
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
      <div className="flex-1 text-center">
        <div className="w-12 h-12 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold shadow">
          1
        </div>
        <h3 className="mt-4 font-semibold text-gray-800 text-lg">게임 QA</h3>
        <p className="text-sm text-gray-600 mt-2">모바일/콘솔/PC 게임 QA, 밸런스·어뷰징 검증 포함</p>
      </div>
      <div className="flex-1 text-center">
        <div className="w-12 h-12 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold shadow">
          2
        </div>
        <h3 className="mt-4 font-semibold text-gray-800 text-lg">금융·핀테크</h3>
        <p className="text-sm text-gray-600 mt-2">인증, 결제, 보안성 등 고신뢰성 중심 QA 수행</p>
      </div>
      <div className="flex-1 text-center">
        <div className="w-12 h-12 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold shadow">
          3
        </div>
        <h3 className="mt-4 font-semibold text-gray-800 text-lg">공공/대기업 플랫폼</h3>
        <p className="text-sm text-gray-600 mt-2">대규모 트래픽, 고가용성 시스템에 대한 정합성 테스트</p>
      </div>
    </div>
  </div>
</section> */}



{/*✅ 2. 카드 형식 섹션 (비활성화됨) */}

<section id="domain" className="bg-[#f3f4f6] py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-left">도메인</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800">게임 QA</h3>
        <p className="text-sm text-gray-600 mt-2">모바일/콘솔/PC 게임 기능 테스트, 밸런스 QA, 어뷰징 대응</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800">금융·핀테크</h3>
        <p className="text-sm text-gray-600 mt-2">정합성, 장애 대응, 보안 중심의 QA 수행</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800">공공/대기업 플랫폼</h3>
        <p className="text-sm text-gray-600 mt-2">대규모 서비스의 접근성·신뢰성 검증 QA</p>
      </div>
    </div>
  </div>
</section>



{/* 
✅ 3. 리스트 강조형 섹션 (비활성화됨)

<section id="domain" className="bg-[#f3f4f6] py-20">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-10 text-left">Knotz의 주요 테스트 도메인</h2>
    <ul className="space-y-4 text-gray-700 text-lg font-medium">
      <li>✔️ 게임 QA: 콘솔/모바일/PC 중심의 밸런스/어뷰징 검증</li>
      <li>✔️ 금융 QA: 인증/보안/결제 테스트 및 장애 대응</li>
      <li>✔️ 공공 QA: 고신뢰 시스템 및 대규모 트래픽 검증</li>
    </ul>
  </div>
</section>
*/}






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
    </>
  );
}
