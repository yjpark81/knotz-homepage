"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const items = [
    { href: "/", label: "Home" },

    // ───────────────── 도메인 ─────────────────
    {
      href: "/domain",
      label: "도메인",
      dropdown: [
        { href: "/domain#platform", label: "Platform / e-Commerce" },
        { href: "/domain#ictsi", label: "ICT / SI" },
        { href: "/domain#security", label: "보안솔루션" },
        { href: "/domain#embedded", label: "임베디드" },
        { href: "/domain#car", label: "자동차" },
      ],
    },

    // ───────────────── 서비스 ─────────────────
    {
      href: "/services",
      label: "서비스",
      dropdown: [
        { href: "/services#functional", label: "기능 테스트" },
        { href: "/services#nonfunctional", label: "비기능 테스트" },
        { href: "/services#global", label: "글로벌 테스트" },
        { href: "/services#multi", label: "멀티 서비스" },
      ],
    },

    // ───────────────── 채용 ─────────────────
    {
      href: "/recruit",
      label: "채용",
      dropdown: [
        { href: "/recruit#values", label: "인재상" },
        { href: "/recruit#benefits", label: "복리후생" },
        { href: "/recruit#process", label: "채용절차" },
      ],
    },

    // ───────────────── 회사소개 ─────────────────
    {
      href: "/about",
      label: "회사소개",
      dropdown: [
        { href: "/about#philosophy", label: "경영철학" },
        { href: "/about#core-values", label: "핵심가치" },
        { href: "/about#location", label: "오시는길" },
      ],
    },

    { href: "/social", label: "사회공헌" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full text-gray-700 shadow z-50"
      style={{ backgroundColor: "#f5faff" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/">
          <Image
            src="/knotz-logo.png"
            alt="Knotz 로고"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* ✅ 데스크톱 네비게이션 + 사업문의 */}
        <div className="hidden sm:flex flex-1 items-center justify-between">
          {/* 네비게이션 */}
          <nav className="flex-1">
            <ul className="flex justify-center gap-10 text-normal font-bold">
              {items.map((item) => {
                const active = isActive(item.href);

                // ▼ 드롭다운 있는 항목들
                if ((item as any).dropdown) {
                  const dropdown = (item as any).dropdown as {
                    href: string;
                    label: string;
                  }[];

                  return (
                    <li
                      key={item.href}
                      className="basis-0 flex-1 max-w-[80px] relative group text-center"
                    >
                      {/* 상단 텍스트 + 화살표도 해당 페이지로 이동 */}
                      <Link
                        href={item.href}
                        className={`cursor-pointer select-none flex items-center justify-center gap-1 ${
                          active ? "text-blue-700" : "text-gray-700"
                        } hover:text-blue-800 transition`}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4 text-gray-600" />
                      </Link>

                      {/* 드롭다운 메뉴 */}
                      <ul
                        className="
                          absolute left-1/2 -translate-x-1/2 top-full mt-2
                          bg-white border border-gray-200 shadow-lg rounded-md
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible
                          transition-all duration-200 z-50
                          whitespace-nowrap py-2 text-left
                        "
                      >
                        {dropdown.map((menu) => (
                          <li key={menu.href}>
                            <Link
                              href={menu.href}
                              className="
                                block px-4 py-2 text-sm text-gray-700
                                hover:bg-blue-50 hover:text-blue-700
                              "
                            >
                              {menu.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                // ▼ 일반 메뉴 (Home, 사회공헌)
                return (
                  <li
                    key={item.href}
                    className="basis-0 flex-1 max-w-[80px] text-center"
                  >
                    <Link
                      href={item.href}
                      className={`transition ${
                        active
                          ? "text-blue-700"
                          : "text-gray-700 hover:text-blue-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* 데스크톱용 사업문의 버튼 */}
          <Link
            href="/contact"
            className="
              ml-6
              bg-blue-600 hover:bg-blue-700
              text-white text-sm font-semibold
              py-2 px-4
              rounded-md
              transition
              animate-pulse
            "
          >
            사업문의
          </Link>
        </div>

        {/* ✅ 모바일용: 사업문의 + 햄버거 */}
        <div className="flex items-center gap-2 sm:hidden">
          {/* 모바일에서도 항상 보이는 사업문의 버튼 */}
          <Link
            href="/contact"
            className="
              bg-blue-600 hover:bg-blue-700
              text-white text-xs font-semibold
              py-1.5 px-3
              rounded-md
              transition
              animate-pulse
            "
          >
            사업문의
          </Link>

          {/* 햄버거 버튼 */}
          <button
            className="p-2 text-gray-700"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ 모바일 메뉴 패널(햄버거 내부) — 사업문의 버튼 없음 */}
      {mobileOpen && (
        <div className="sm:hidden bg-white border-t border-gray-300 shadow-md">
          <nav className="px-4 py-3 space-y-3">
            {items.map((item) => (
              <div key={item.href} className="space-y-1">
                {/* 상단 메뉴 (Home / 도메인 / 서비스 / 채용 / 회사소개 / 사회공헌) */}
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-semibold text-gray-800"
                >
                  {item.label}
                </Link>

                {/* 서브 메뉴 (있는 경우에만) */}
                {(item as any).dropdown && (
                  <div className="ml-4 space-y-1 text-sm text-gray-600">
                    {(item as any).dropdown.map(
                      (child: { href: string; label: string }) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block hover:text-blue-700"
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
