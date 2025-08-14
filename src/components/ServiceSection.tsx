import {
  ClipboardCheck,
  BarChart2,
  Globe,
  Layers,
} from "lucide-react";

// 각 서비스별 아이콘 및 타이틀
const services = [
  {
    icon: ClipboardCheck,
    title: "기능 테스트",
  },
  {
    icon: BarChart2,
    title: "비기능 테스트",
  },
  {
    icon: Globe,
    title: "글로벌 테스트",
  },
  {
    icon: Layers,
    title: "멀티 서비스",
  },
];

// 아이콘별 랜덤 부유효과 스타일 함수
function getFloatStyle(idx: number) {
  const durations = [2.8, 3.2, 2.5, 3.6];
  const delays = [0, 0.4, 0.2, 0.6];
  return {
    animation: `floatUpDown ${durations[idx % durations.length]}s ease-in-out infinite`,
    animationDelay: `${delays[idx % delays.length]}s`,
    display: "block",
  };
}

export default function ServiceSection() {
  return (
    <section id="services" style={{ backgroundColor: "#f5faff" }} className="py-16">
      <style>
        {`
          @keyframes floatUpDown {
            0% { transform: translateY(0px);}
            20% { transform: translateY(-18px);}
            40% { transform: translateY(0px);}
            60% { transform: translateY(12px);}
            80% { transform: translateY(0px);}
            100% { transform: translateY(0px);}
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4">
        {/* 제목+버튼+소개문구 */}
        <div className="mb-10">
          <div className="flex items-center mb-2">
            <h2 className="text-xl font-bold mr-3">서비스</h2>
            <a
              href="/services"
              className="inline-block px-4 py-1.5 text-sm rounded font-bold text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition"
              style={{ lineHeight: "1.2" }}
            >
              이동하기
            </a>
          </div>
          <p className="text-gray-700 text-base leading-relaxed max-w-3xl md:text-left text-left">
            노츠는 고객의 Needs를 충족시키는 최상의 IT서비스를 제공하기 위해<br className="hidden md:block" />
            끊임없이 고민하고 노력하고 있습니다.
          </p>
        </div>
        {/* 서비스 1행, 아이콘+타이틀, 부유효과 */}
        <div className="flex flex-col md:flex-row items-stretch gap-[210px]">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex-1 flex flex-col items-center justify-center px-6 py-8 md:py-0 min-w-0"
              >
                <Icon
                  size={54}
                  color="#1e3a8a"
                  strokeWidth={2.2}
                  style={getFloatStyle(i)}
                  className="mb-2"
                />
                <span className="font-bold text-lg text-gray-900">{s.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
