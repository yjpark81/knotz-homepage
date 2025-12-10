"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  Network,
  ShieldCheck,
  Cpu,
  Car,
} from "lucide-react";
import { clients, Client } from "../data/clients";

// ---------------- 도메인 정보 ----------------
const domains = [
  { icon: ShoppingBag, label: "플랫폼 / 커머스", anchor: "platform" },
  { icon: Network, label: "ICT / SI", anchor: "ictsi" },
  { icon: ShieldCheck, label: "보안솔루션", anchor: "security" },
  { icon: Cpu, label: "임베디드", anchor: "embedded" },
  { icon: Car, label: "자동차", anchor: "car" },
];

// 도메인별 로고 그리드 크기
const logoGridLayout: Record<string, { rows: number; cols: number }> = {
  platform: { rows: 3, cols: 3 },
  ictsi: { rows: 2, cols: 3 },
  security: { rows: 1, cols: 3 },
  embedded: { rows: 2, cols: 3 },
  car: { rows: 2, cols: 3 },
};

// Tailwind Purge 대응용 클래스 맵
const gridClass = {
  "3x3": "grid-cols-3 grid-rows-3",
  "3x2": "grid-cols-3 grid-rows-2",
  "3x1": "grid-cols-3 grid-rows-1",
};

function getFloatStyle(idx: number) {
  const durations = [2.8, 3.2, 2.5, 3.6, 3.1];
  const delays = [0, 0.3, 0.2, 0.1, 0.4];
  return {
    animation: `floatUpDown ${durations[idx % durations.length]}s ease-in-out infinite`,
    animationDelay: `${delays[idx % durations.length]}s`,
  };
}

// 도메인별 고객사 목록 추출
function getDomainClients(domain: string) {
  return clients.filter((c) => c.domains.includes(domain));
}

// ---------------- 로고 그리드 캐러셀 ----------------
function LogoGridCarousel({
  clients,
  rows,
  cols,
  interval = 3500,
  transition = 600,
}: {
  clients: Client[];
  rows: number;
  cols: number;
  interval?: number;
  transition?: number;
}) {
  const GRID_SIZE = rows * cols;

  // 최소 GRID_SIZE 만큼 채우기
  const extended =
    clients.length < GRID_SIZE
      ? Array(Math.ceil(GRID_SIZE / clients.length))
          .fill(clients)
          .flat()
          .slice(0, GRID_SIZE)
      : clients;

  const sets: Client[][] = [];
  for (let i = 0; i < extended.length; i += GRID_SIZE) {
    sets.push(extended.slice(i, i + GRID_SIZE));
  }

  // 데이터가 GRID_SIZE보다 많을 때 추가 세트 구성
  if (clients.length > GRID_SIZE) {
    while (sets.length * GRID_SIZE < clients.length + GRID_SIZE) {
      const start = (sets.length * GRID_SIZE) % clients.length;
      sets.push(
        clients
          .slice(start)
          .concat(clients.slice(0, start))
          .slice(0, GRID_SIZE),
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

  const gridKey = `${cols}x${rows}` as keyof typeof gridClass;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`grid ${gridClass[gridKey]} gap-x-6 gap-y-3 transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ minHeight: `${rows * 64}px` }}
      >
        {sets[page].map((client, idx) => (
          <div
            key={client.logo + idx}
            className="flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow p-2 w-[108px] h-[52px]"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={88}
              height={36}
              className="object-contain"
              style={{ background: "transparent" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------- 페이지 컴포넌트 ----------------
export default function DomainDetailPage() {
  const sectionColors = ["#f5faff", "#ffffff", "#f5faff", "#ffffff", "#f5faff"];
  const domainKeys = ["platform", "ictsi", "security", "embedded", "car"];

  // 도메인 네비 클릭 → 스무스 스크롤
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    anchor: string,
  ) => {
    e.preventDefault();
    const elem = document.getElementById(anchor);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen pt-32 bg-white relative">
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

      {/* 상단 도메인 네비게이션 */}
<div className="max-w-5xl mx-auto px-4 mb-10">
  <div
    className="
      flex justify-center
      gap-4 sm:gap-10 lg:gap-[127px]
      mb-12
    "
  >
    {domains.map((d, idx) => {
      const Icon = d.icon;
      return (
        <a
          key={d.label}
          href={`#${d.anchor}`}
          onClick={(e) => handleNavClick(e, d.anchor)}
          className="flex flex-col items-center select-none min-w-[64px] sm:min-w-[120px] group focus:outline-none"
          tabIndex={0}
        >
          {/* ✅ 아이콘 크기: 모바일 작게 / PC 크게 */}
          <Icon
            color="#1e3a8a"
            strokeWidth={2.2}
            style={{ ...getFloatStyle(idx), display: "block" }}
            className="
              w-9 h-9           /* 모바일: 36px 정도 */
              sm:w-[54px] sm:h-[54px]  /* sm 이상: 54px (기존 크기) */
              group-hover:scale-110
              transition-transform
            "
          />

          {/* ✅ 레이블도 모바일에선 살짝 작게 */}
          <div
            className="
              mt-2 sm:mt-3
              font-bold
              text-xs sm:text-lg
              text-gray-900
              text-center
              whitespace-nowrap
            "
            style={{ lineHeight: 1.3 }}
          >
            {d.label}
          </div>
        </a>
      );
    })}
  </div>
</div>

      

      {/* 각 도메인 섹션 */}
      {domainKeys.map((key, idx) => (
        <div
          key={key}
          className="w-full"
          style={{ backgroundColor: sectionColors[idx] }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="flex flex-col md:flex-row md:items-center rounded-2xl"
              style={{ padding: "40px 0" }}
            >
              {/* 설명 영역 */}
              <div className="md:w-4/5 md:pr-2 px-4 md:px-8">
                <h3
                  id={key}
                  className="text-xl font-bold text-blue-900 mb-2 scroll-mt-[96px]"
                >
                  {domains[idx].label}
                </h3>
                <p className="text-gray-800 text-base">
                  {key === "platform" && (
                    <>
                      네트워크와 인터넷을 기반으로 OS, 마켓, SNS, 모바일 등 다양한 영역으로 확장되는 플랫폼 비즈니스는
                      각종 서비스와 융합하여 거대한 시장을 창출하고 있습니다. 게임, ICT, 교육 등 다양한 서비스를 안정적으로
                      운영하기 위한 플랫폼 테스트의 중요성도 점차 커지고 있습니다.
                      <br />
                      <br />
                      노츠는 다양한 플랫폼 비즈니스 및 전자상거래 테스트 경험을 바탕으로, 변화하는 디지털 환경에 맞는 효율적이고
                      신뢰할 수 있는 테스트 서비스를 제공합니다. 급성장하는 전자상거래 시장에서도, 고객의 시스템과 비즈니스 환경에
                      최적화된 품질 테스트를 약속드립니다.
                    </>
                  )}
                  {key === "ictsi" && (
                    <>
                      정보통신기술(ICT)과 시스템 통합(SI) 분야는 다양한 IT 인프라와 서비스가 서로 연동되고 복잡하게 운영되는
                      산업의 핵심입니다. 금융, 공공, 제조, 물류, 통신 등 다양한 산업에서 안정적이고 효율적인 시스템 운영을 위해
                      ICT/SI 테스트의 중요성이 꾸준히 높아지고 있습니다.
                      <br />
                      <br />
                      노츠는 대형 시스템 통합 프로젝트와 다양한 ICT 서비스 테스트 경험을 바탕으로, 고객 환경에 최적화된 테스트
                      전략과 품질 관리를 제공합니다. 끊임없이 변화하는 IT 환경에서도 시스템 간 연계와 복잡한 비즈니스 로직까지
                      철저히 검증하여, 고객 비즈니스의 신뢰성과 안정성을 보장합니다.
                    </>
                  )}
                  {key === "security" && (
                    <>
                      보안 산업의 중요성이 높아지면서, AI 기반 영상관제·생체인식·출입관리·안면인식·블록체인 데이터 보호 등 보안
                      서비스는 점점 더 고도화되고 있습니다. IP카메라, 사물인터넷(IoT) 기기와의 결합 등 기술 융합을 통한 서비스 혁신이
                      빠르게 이루어지는 만큼, 다양한 보안 솔루션의 품질 확보는 더욱 중요한 과제가 되고 있습니다.
                      <br />
                      <br />
                      노츠는 다수의 보안 서비스 및 솔루션 테스트 경험을 바탕으로, 신뢰성·호환성·사용성·안정성 등 각 제품의 특성에
                      맞는 전문 품질 테스트를 제공합니다. 끊임없이 진화하는 보안 환경에서도 고객의 서비스가 안전하고 신뢰받을 수
                      있도록 최적화된 테스트 전략으로 지원합니다.
                    </>
                  )}
                  {key === "embedded" && (
                    <>
                      최근 임베디드 산업은 하드웨어 중심에서 소프트웨어 기술 중심으로 빠르게 변화하고 있습니다. 이제 시스템의 성능과
                      경쟁력은 소프트웨어 품질에 의해 결정되는 기술 집약적 산업으로 발전하고 있습니다. 임베디드 소프트웨어는 공장 및
                      가정 자동화, 각종 디지털 가전, 자동 센서 장비 등 다양한 영역에서 핵심 역할을 담당합니다. 이와 함께 신뢰성,
                      호환성, 사용성, 안전성 등 높은 품질 기준에 대한 요구도 지속적으로 확대되고 있습니다.
                      <br />
                      <br />
                      노츠는 다수의 임베디드 제품과 IoT 기기 테스트 경험을 바탕으로, 최신 기술 환경에 적합한 맞춤형 품질 테스트와
                      품질 관리를 제공합니다. 복잡하고 진화하는 임베디드 환경에서도 안정적인 서비스와 고객 만족을 실현할 수 있도록,
                      체계적이고 전문화된 테스트 솔루션을 약속드립니다.
                    </>
                  )}
                  {key === "car" && (
                    <>
                      자동차 산업은 전기·전자 구조 설계, 반도체 설계, 전자제어기, 통신 등 다양한 기술이 융합된 대표적인 첨단 복합
                      산업입니다. 최근에는 멀티미디어 기반 AV(오디오/비디오) 장비, 스마트폰 연동, 음성 인식, 경보 시스템, 차선 변경
                      시스템 등 다양한 첨단 전자장치를 통해 자동차를 더욱 정밀하고 안전하게 제어하는 전자 시스템의 역할이 크게
                      확대되고 있습니다. 이처럼 자동차 소프트웨어의 복잡성이 증가하고 전자장치의 중요성이 높아짐에 따라, 소프트웨어
                      품질 확보의 필요성 또한 점차 커지고 있습니다.
                      <br />
                      <br />
                      노츠는 자동차 분야에서의 풍부한 테스트 경험을 기반으로, IVI(차량 인포테인먼트), ADAS(첨단 운전자 지원 시스템),
                      전장(전자장비) 등 다양한 영역에 최적화된 품질 테스트 서비스를 제공합니다.
                    </>
                  )}
                </p>
              </div>

              {/* 로고 그리드 */}
              <div className="md:w-1/2 flex justify-center items-center md:pl-2 md:ml-12 mt-8 md:mt-0">
                <LogoGridCarousel
                  clients={getDomainClients(key)}
                  rows={logoGridLayout[key].rows}
                  cols={logoGridLayout[key].cols}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
