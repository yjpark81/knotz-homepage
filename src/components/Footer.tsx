// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-[#1a2233] text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full gap-6">

          {/* ───────────── 회사 정보 ───────────── */}
          <div className="text-xs sm:text-sm leading-5 space-y-1">
            <div className="font-bold text-sm sm:text-base">노츠(주) | Knotz Corp.</div>
            <div className="text-gray-400">
              대표이사 정상현 | 사업자등록번호: 135-81-83908
            </div>
            <div className="text-gray-400">
              주소: 서울특별시 성동구 성수일로 10, 서울숲 ITCT 지식산업센터 902호 (04780)
            </div>
            <div className="text-gray-400">
              전화: 02-6430-5020 | 팩스: 02-6430-5021
            </div>
          </div>

          {/* ───────────── SNS + 카피라이트 ───────────── */}
          <div className="flex flex-col items-center md:items-end gap-3">

            {/* SNS 아이콘 */}
            <div className="flex gap-3">
              {/* 네이버 */}
              <a
                href="https://blog.naver.com/knotz01"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#03C75A] hover:scale-110 transition"
              >
                <span className="text-white font-bold text-lg">N</span>
              </a>

              {/* 새로운 Facebook 아이콘 (정식 스타일, 균형 잡힌 비율) */}
              <a
                href="https://www.facebook.com/%EB%85%B8%EC%B8%A0-%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC-114457876957940/"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1877F3] hover:scale-110 transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.69V11.01h3.13V8.41c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764V11.01h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"/>
                </svg>
              </a>
            </div>

            {/* 카피라이트 */}
            <div className="text-[11px] sm:text-xs text-gray-400 font-bold text-center md:text-right">
              © 2006 - 2025 Knotz Corp. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
