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
              className="keen-slider__slide flex justify-center items-center"
              key={c.logo}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="w-32 h-16 object-contain shadow-lg bg-transparent rounded transition"
                title={c.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
