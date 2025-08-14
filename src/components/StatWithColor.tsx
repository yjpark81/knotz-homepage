'use client';
import { useEffect, useRef } from 'react';

interface StatWithColorProps {
  end: number;
  duration: number;
  colorFrom?: string; // "#c7e0f9"
  colorTo?: string;   // "#1e3a8a"
}

function lerpColor(a: string, b: string, t: number) {
  // "#rrggbb"
  const ah = parseInt(a.slice(1), 16), bh = parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
  const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `rgb(${rr},${rg},${rb})`;
}

export default function StatWithColor({
  end,
  duration,
  colorFrom = '#c7e0f9',
  colorTo = '#1e3a8a',
}: StatWithColorProps) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const val = Math.round(end * progress);
      const color = lerpColor(colorFrom, colorTo, progress);
      if (spanRef.current) {
        spanRef.current.textContent = val.toLocaleString();
        spanRef.current.style.color = color;
      }
      if (progress < 1) frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, colorFrom, colorTo]);

  // span의 초기값 및 색상
  return (
    <span ref={spanRef} style={{ color: colorFrom, transition: "color 0.2s" }}>
      0
    </span>
  );
}
