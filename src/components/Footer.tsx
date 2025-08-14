// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-[#1a2233] text-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start w-full relative">
          {/* 왼쪽: 회사 정보 */}
          <div>
            <div className="font-bold">노츠(주) | Knotz Corp.</div>
            <div className="text-sm text-gray-400">
              대표이사 정상현 | 사업자등록번호: 135-81-83908
            </div>
            <div className="text-sm text-gray-400">
              주소: 서울특별시 성동구 성수일로 10, 서울숲 ITCT 지식산업센터 902호 (04780)
            </div>
            <div className="text-sm text-gray-400">
              전화: 02-6430-5020 | 팩스: 02-6430-5021
            </div>
          </div>
          {/* 오른쪽: 소셜 + 카피라이트 */}
          <div className="flex flex-col items-end justify-between h-full min-h-[80px] w-[180px]">
            {/* 소셜 아이콘 (상단) */}
            <div className="flex gap-3 mb-2">
              <a
                href="https://blog.naver.com/knotz01"
                target="_blank"
                rel="noopener"
                aria-label="네이버 블로그"
                title="네이버 블로그"
              >
                <svg className="w-9 h-9 hover:scale-110 transition" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#03C75A" />
                  <path d="M26.14 12.85h-4.21V20.37l-4.06-7.52h-4.13v14.3h4.21v-7.52l4.08 7.52h4.11v-14.3Z" fill="white" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/%EB%85%B8%EC%B8%A0-%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC-114457876957940/"
                target="_blank"
                rel="noopener"
                aria-label="페이스북"
                title="페이스북"
              >
                <svg
                  className="w-9 h-9 hover:scale-110 transition"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#1877F3" />
                  <path
                    d="M26.5 20h-4v-3c0-.414.336-.75.75-.75H25v-3h-2.25C20.01 13.25 19 14.26 19 15.5v1.5h-2v3h2v7h3v-7h2.25l.25-3Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            {/* 카피라이트 (하단) */}
            <div className="text-xs text-gray-500 font-bold mt-auto pr-1 whitespace-nowrap">
              © 2006 - 2025 Knotz Corp. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
