export default function Home() {
  return (
    <>
      {/* ✅ 상단 네비게이션 */}
<header className="fixed top-0 left-0 w-full bg-[#f3f4f6] text-gray-700 shadow z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    {/* 메뉴 왼쪽 */}
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

    {/* 로고 오른쪽 */}
    <a href="/">
      <img
        src="/knotz-logo.png"
        alt="Knotz 로고"
        className="h-8 w-auto"
      />
    </a>
  </div>
</header>


      {/* ✅ Hero Section with background image */}
      <section
  className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat pt-32"
  style={{
    backgroundImage: "url('/background-hero.jpg')",
  }}
>
  {/* ✅ 어두운 그라데이션 오버레이 */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
    }}
  ></div>

  {/* ✅ 콘텐츠 */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center max-w-4xl mx-auto">
    <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
      Make Your Software Quality
    </h1>
    <p className="text-base sm:text-lg mt-4 text-gray-200 drop-shadow">
      품질로 신뢰를 완성합니다. Knotz와 함께하세요.
    </p>

    {/* 버튼 영역 - 반응형 간격 */}
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


    </>
  );
}
