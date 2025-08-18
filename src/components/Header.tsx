"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 w-full text-gray-700 shadow z-50"
      style={{ backgroundColor: "#f5faff" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <nav className="hidden sm:flex space-x-6 text-m font-medium">
            {/* Home */}
            <Link
              href="/"
              className={`transition min-w-[48px] text-center ${
                pathname === "/" ? "text-blue-600 font-bold" : "hover:text-blue-900"
              }`}
            >
              Home
            </Link>
            <Link
              href="/domain"
              className={`transition min-w-[60px] text-center ${
                pathname.startsWith("/domain") ? "text-blue-600 font-bold" : "hover:text-blue-900"
              }`}
            >
              도메인
            </Link>
            <Link
              href="/services"
              className={`transition min-w-[60px] text-center ${
                pathname.startsWith("/services") ? "text-blue-600 font-bold" : "hover:text-blue-900"
              }`}
            >
              서비스
            </Link>
            <Link
              href="/culture"
              className={`transition min-w-[90px] text-center ${
                pathname.startsWith("/culture") ? "text-blue-600 font-bold" : "hover:text-blue-900"
              }`}
            >
              채용 & 기업문화
            </Link>
            <Link
              href="/social"
              className={`transition min-w-[60px] text-center ${
                pathname.startsWith("/social") ? "text-blue-600 font-bold" : "hover:text-blue-900"
              }`}
            >
              사회공헌
            </Link>
            <Link
              href="/about"
              className={`transition min-w-[60px] text-center ${
                pathname.startsWith("/about") ? "text-blue-600 font-bold" : "hover:text-blue-900"
              }`}
            >
              회사소개
            </Link>
          </nav>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md transition animate-pulse"
          >
            사업문의
          </Link>
        </div>
        <Link href="/">
          <Image
            src="/knotz-logo.png"
            alt="Knotz 로고"
            width={160}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
