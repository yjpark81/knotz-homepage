import {
  ShoppingBag,
  Network,
  ShieldCheck,
  Cpu,
  Car,
} from "lucide-react";

const domains = [
  { icon: ShoppingBag, label: "Platform / e-Commerce" },
  { icon: Network, label: "ICT/SI" },
  { icon: ShieldCheck, label: "보안솔루션" },
  { icon: Cpu, label: "임베디드" },
  { icon: Car, label: "자동차" },
];

function getFloatStyle(idx: number) {
  const durations = [2.8, 3.2, 2.5, 3.6, 3.1];
  const delays = [0, 0.3, 0.2, 0.1, 0.4];
  return {
    animation: `floatUpDown ${durations[idx % durations.length]}s ease-in-out infinite`,
    animationDelay: `${delays[idx % delays.length]}s`,
  };
}

export default function DomainSection() {
  return (
    <section id="domain" className="bg-white py-16">
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
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
        {/* 제목+버튼 한 줄, 소개문구 한 줄 */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <h2 className="text-xl font-bold mr-3">도메인</h2>
            <a
              href="/domain"
              className="inline-block px-4 py-1.5 text-sm rounded font-bold text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition"
              style={{ lineHeight: "1.2" }}
            >
              이동하기
            </a>
          </div>
          <p className="text-gray-700 text-base leading-relaxed max-w-3xl md:text-left text-left">
            노츠는 소프트웨어 테스팅 국제표준 ISO/IEC 29119를 기반으로 다양한 산업군에 맞는 품질 서비스를 제공합니다.<br className="hidden md:block" />
            Platform, ICT/SI, 보안솔루션, 임베디드, 자동차 등 각 도메인에 최적화된 테스트 서비스를 제공합니다.
          </p>
        </div>
        {/* 아이콘 1행 - 서비스와 같은 gap-24 적용 */}
        <div className="w-full flex flex-wrap justify-center gap-35">
          {domains.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                className="flex flex-col items-center select-none"
                style={{ minWidth: "120px" }}
              >
                <Icon
                  size={54}
                  color="#1e3a8a"
                  style={{
                    ...getFloatStyle(idx),
                    display: "block",
                  }}
                  strokeWidth={2.2}
                />
                <div className="mt-3 font-bold text-lg text-gray-900 text-center">
                  {d.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
