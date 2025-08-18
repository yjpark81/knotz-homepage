"use client";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

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

const CARD_COUNT = newsData.length;
const VIEW_COUNT = 3;
const INTERVAL_MS = 7000;

export default function NewsSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % CARD_COUNT);
    }, INTERVAL_MS);
    return () => timer.current && clearInterval(timer.current);
  }, []);

  // 카드 뷰: 항상 VIEW_COUNT+1개까지 보여주고 무한 루프 효과
  const slideItems = [];
  for (let i = 0; i < VIEW_COUNT + 1; i++) {
    const idx = (slideIdx + i) % CARD_COUNT;
    slideItems.push(newsData[idx]);
  }

  // 트랜지션 끝나면(끝으로 도달 시) 트릭으로 처음으로 순간 이동 (loop)
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
  }, [slideIdx]);

  const CARD_WIDTH = 340;
  const GAP = 32;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div
          style={{
            overflow: "hidden",
            width: "100%",
            /* width: CARD_WIDTH * VIEW_COUNT + GAP * (VIEW_COUNT - 1), */
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: `${GAP}px`,
              transition: transitioning ? "transform 0.7s cubic-bezier(.4,0,.2,1)" : "none",
              transform: `translateX(-${slideIdx * (CARD_WIDTH + GAP)}px)`,
              width: (CARD_WIDTH + GAP) * slideItems.length,
            }}
            onTransitionEnd={() => {
              // 무한루프 효과: 마지막이 끝나면 바로 첫 카드로 이동
              if (slideIdx === CARD_COUNT) {
                setTransitioning(false);
                setSlideIdx(0);
              }
            }}
          >
            {newsData.concat(newsData[0]).slice(0, CARD_COUNT + 1).map((news, idx) => (
              <div
                key={news.title + idx}
                className="border border-gray-200 rounded-lg shadow-sm flex flex-col overflow-hidden group transition-all duration-400 ease-out"
                style={{
                  backgroundColor: "#f5faff", // 카드 전체 배경
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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
