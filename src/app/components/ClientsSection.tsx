"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRef, useEffect } from "react";

// 타입 명시
type Client = { name: string; logo: string };
type Props = { clients?: Client[] };

export default function ClientsSection({ clients = [] }: Props) {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 6,
      spacing: 28,
    },
    mode: "snap",
    drag: true,
    breakpoints: {
      "(max-width: 900px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(max-width: 600px)": {
        slides: { perView: 2, spacing: 12 },
      },
    },
    renderMode: "performance",
  });

  useEffect(() => {
    if (!slider) return;
    function nextSlide() {
      slider.current?.next();
    }
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(nextSlide, 7000);

    slider.current?.on("dragStarted", () => {
      timer.current && clearInterval(timer.current);
    });
    slider.current?.on("animationEnded", () => {
      timer.current && clearInterval(timer.current);
      timer.current = setInterval(nextSlide, 7000);
    });
    slider.current?.on("updated", () => {
      timer.current && clearInterval(timer.current);
      timer.current = setInterval(nextSlide, 7000);
    });

    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <section id="clients" style={{ backgroundColor: "#f5faff" }} className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-left text-gray-800">고객사</h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-2xl mb-6 text-left">
            노츠와 함께하는 다양한 산업군의 주요 고객사입니다.
          </p>
        </div>
        <div ref={sliderRef} className="keen-slider flex items-center">
          {(clients ?? []).map((c, i) => (
            <div
              className="
                keen-slider__slide flex justify-center items-center
                bg-white rounded-xl shadow border border-gray-200
                p-2 box-border
              "
              key={c.logo}
              style={{
                width: "120px",
                height: "54px",
                minWidth: "120px",
                minHeight: "54px",
                margin: "0 auto",
              }}
            >
              <img
                src={c.logo}
                alt={c.name}
                title={c.name}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  background: "transparent",
                  display: "block",
                  // 필요하다면 maxWidth/maxHeight 등도 추가 가능
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
