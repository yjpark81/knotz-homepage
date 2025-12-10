"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NewsItem {
  title: string;
  date: string;
  desc: string;
  link: string;
  Image: string;
}

const newsData: NewsItem[] = [
  {
    title: "노츠·큐게임즈, 전략적 제휴 위한 업무협약 체결",
    date: "2024.05.23",
    desc: "노츠와 큐게임즈가 전략적 제휴 및 상호 협업을 위한 업무협약을 체결했습니다. 이번 협약을 통해 소프트웨어 및 게임 테스트 분야에서의 협업과 글로벌 시장 진출 지원이 기대됩니다...",
    link: "https://www.edaily.co.kr/News/Read?newsId=02568246629150272&mediaCodeNo=257",
    Image: "/news1.jpg",
  },
  {
    title: "노츠-스패로우, 전략적 업무협약 체결",
    date: "2023.11.10",
    desc: "노츠와 스패로우가 전략적 사업 협력을 위한 업무 협약을 체결했습니다. 이번 협약으로 멀티서비스 영역 확장과 고품질 시큐어코딩 제공 등 상생 발전이 기대됩니다...",
    link: "https://www.itbiznews.com/news/articleView.html?idxno=56006",
    Image: "/news2.jpg",
  },
  {
    title: "노츠 주식회사, 서울석병원과 지정병원 협약 체결",
    date: "2024.03.10",
    desc: "노츠와 서울석병원이 임직원 및 가족들의 건강관리를 위한 지정병원 협약을 체결했습니다. 노츠 임직원들은 다양한 진료편의와 종합검진서비스를 제공받게 됩니다...",
    link: "https://www.itbiznews.com/news/articleView.html?idxno=63746",
    Image: "/news3.jpg",
  },
  {
    title: "노츠 주식회사, 베트남 SGTC 개소 및 MOU체결",
    date: "2024.01.05",
    desc: "노츠가 베트남 하노이에 SGTC를 개소하고 WISEWIRES VIETNAM법인과 MOU를 체결했습니다. 현지화된 테스트 및 운영서비스로 동남아 시장 진출 교두보 역할을 할 예정입니다...",
    link: "https://www.itbiznews.com/news/articleView.html?idxno=86233",
    Image: "/news4.jpg",
  },
];

// 카드/간격 설정
const CARD_WIDTH = 340;
const GAP = 32;
// 1초에 몇 px 이동할지 (값을 줄이면 느려지고, 늘리면 빨라짐)
const SPEED_PX_PER_SEC = 20;

export default function NewsSection() {
  // 왼쪽으로 얼마나 이동했는지 (px)
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // 총 한 줄 너비
  const rowWidth = (CARD_WIDTH + GAP) * newsData.length;

  useEffect(() => {
    const step = (timestamp: number) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = timestamp;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const deltaMs = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      setOffset((prev) => {
        let next = prev + (SPEED_PX_PER_SEC * deltaMs) / 1000; // 오른쪽→왼쪽으로 보이게 translateX에서 -next 사용
        // 한 줄 길이를 넘으면 다시 0부터 (끊김 없이 보이도록)
        if (next >= rowWidth) {
          next -= rowWidth;
        }
        return next;
      });

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [rowWidth]);

  // 끊김 없이 이어지게 하기 위해 데이터 두 번 이어 붙임
  const loopData = newsData.concat(newsData);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div
          style={{
            overflow: "hidden",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: `${GAP}px`,
              transform: `translateX(-${offset}px)`,
              // transition 없음! → 계속 부드럽게 흘러가도록
            }}
          >
            {loopData.map((news, idx) => (
              <div
                key={news.title + idx}
                className="border border-gray-200 rounded-lg shadow-sm flex flex-col overflow-hidden group transition-all duration-400 ease-out"
                style={{
                  backgroundColor: "#f5faff",
                  width: CARD_WIDTH,
                  minWidth: CARD_WIDTH,
                  maxWidth: CARD_WIDTH,
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              >
                <div className="h-40 w-full relative">
                  <Image
                    src={news.Image}
                    alt={news.title}
                    fill
                    sizes="340px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded text-xs text-gray-600 font-medium shadow">
                    {news.date}
                  </span>
                </div>
                <div className="flex-1 flex flex-col p-4">
                  <Link
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg sm:text-base text-gray-900 leading-tight mb-2 group-hover:text-blue-700 transition-colors duration-150"
                    style={{ display: "inline-block" }}
                    tabIndex={-1}
                  >
                    {news.title}
                  </Link>
                  <p
                    className="text-gray-600 text-xs mb-2"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minHeight: "2.8em",
                    }}
                    title={news.desc}
                  >
                    {news.desc}
                  </p>
                  <Link
                    href={news.link}
                    className="mt-auto text-blue-600 text-xs hover:underline font-semibold self-end transition-colors duration-150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    상세 보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
