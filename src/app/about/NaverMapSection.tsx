"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

// 전역(모듈 스코프) 플래그: 컴포넌트가 여러 번 마운트되어도 1번만 true가 됨
let NAVER_MAP_INITIALIZED = false;

declare global {
  interface Window {
    naver: any;
  }
}

const branches = [
  {
    label: "본사",
    addr1: "서울시 성동구 성수일로10",
    addr2: "서울숲 ITCT 지식산업센터 902호, 903호",
    tel: "TEL. 02-6430-5020 / FAX. 02-6430-5021",
  },
  {
    label: "기업부설연구소",
    addr1: "서울시 성동구 성수일로10",
    addr2: "서울숲 ITCT 지식산업센터 902호, 903호",
    tel: "",
  },
  {
    label: "Software Test Campus",
    addr1: "서울시 성동구 성수일로10",
    addr2: "서울숲 ITCT 지식산업센터 203호",
    tel: "",
  },
];

export default function NaverMapSection() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const initMap = () => {
    // 이미 초기화 됐다면 다시 하지 않음 (StrictMode / 재렌더 방지)
    if (NAVER_MAP_INITIALIZED) {
      return;
    }

    if (!window.naver || !window.naver.maps) {
      console.warn("window.naver.maps 가 아직 준비되지 않았습니다.");
      return;
    }

    if (!mapContainerRef.current) return;

    NAVER_MAP_INITIALIZED = true; // 여기서 딱 한 번만 true로 전환

    const center = new window.naver.maps.LatLng(37.54504, 127.05758);

    const map = new window.naver.maps.Map(mapContainerRef.current, {
      center,
      zoom: 17,
    });

    new window.naver.maps.Marker({
      position: center,
      map,
    });

    console.log("네이버 인터랙티브 지도 초기화 완료");
  };

  useEffect(() => {
    // dev 모드에서 Script onLoad보다 먼저 naver가 준비된 경우를 대비
    if (typeof window !== "undefined" && window.naver && window.naver.maps) {
      initMap();
    }
  }, []);

  return (
    <section
      id="location"                              // ✅ /about#location 앵커
      className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-24" // ✅ 헤더에 안 가리도록 오프셋
    >
      {/* 네이버 지도 SDK 로드 */}
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log("네이버 지도 SDK 로드 완료");
          initMap();
        }}
      />

      <h2 className="text-xl md:text-2xl font-extrabold text-[#111827] mb-5">
        오시는길
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.8fr] gap-6 md:gap-8 items-start">
        {/* 주소 카드 */}
        <div className="space-y-4 text-sm md:text-[18px] text-gray-700">
          {branches.map((b) => (
            <div
              key={b.label}
              className="rounded-xl border border-[#e3e9f5] bg-white shadow-sm px-4 py-3 md:px-5 md:py-4"
            >
              <div className="mb-3">
                <span className="inline-block rounded-md bg-[#2563eb] px-3.5 py-0.4 text-sm md:text-base font-extrabold text-white shadow">
                  {b.label}
                </span>
              </div>
              <div className="leading-6">
                <div>{b.addr1}</div>
                <div>{b.addr2}</div>
              </div>
              {b.tel && (
                <div className="mt-2 text-[14px] text-gray-500">{b.tel}</div>
              )}
            </div>
          ))}
        </div>

        {/* 지도 영역 */}
        <div className="w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden border border-[#e3e9f5] bg-gray-100">
          <div ref={mapContainerRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
