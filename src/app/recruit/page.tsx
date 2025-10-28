"use client";

import React from "react";

// 채용 & 기업문화 페이지 (/recruit)
export default function RecruitPage() {
  return (
    <main className="bg-white">
      {/* Hero / 타이틀 */}
      <section className="max-w-7xl mx-auto pt-10 md:pt-8 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900">
          채용 & 기업문화
        </h1>
        <p className="text-center text-gray-600 mt-3">
          노츠의 핵심가치와 복리후생, 채용 절차를 한눈에 확인하세요.
        </p>
      </section>

      {/* 인재상 */}
      <section className="max-w-7xl mx-auto py-12 md:py-16 px-6">
        <h2 className="text-3xl font-extrabold text-center mb-10">인재상</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "신뢰",
              desc:
                "신뢰를 바탕으로 업무를 수행하고 고객을 섬기며 신뢰를 쌓아갈 수 있는 사람",
              icon: "🤝",
            },
            {
              title: "전문성",
              desc:
                "테스트 관련 지식과 경험을 개발하고 실무에 최적으로 활용할 수 있는 사람",
              icon: "💡",
            },
            {
              title: "적응성",
              desc: "환경 변화 속에서도 능동적으로 대응해 성장할 수 있는 사람",
              icon: "🔁",
            },
            {
              title: "성실성",
              desc: "업무를 꼼꼼하고 지속적으로 수행할 수 있는 사람",
              icon: "📅",
            },
            {
              title: "배려와 존중",
              desc: "서로 배려하고 존중을 실천하는 사람",
              icon: "❤️",
            },
            {
              title: "고객중심",
              desc: "고객의 성공을 진심으로 돕는 사람",
              icon: "🙌",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-center text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 복리후생 */}
      <section className="max-w-7xl mx-auto py-12 md:py-16 px-6">
        <h2 className="text-3xl font-extrabold text-center mb-10">복리후생</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "성장하는 노츠인",
              icon: "🚀",
              list: ["자기계발비", "체력단련비", "SW Test 자격증 100% 지원", "SW Test 교육"],
            },
            {
              title: "함께하는 노츠인",
              icon: "👥",
              list: ["팀운영비", "플레이샵 / 워크샵"],
            },
            {
              title: "즐거운 노츠인",
              icon: "🎉",
              list: [
                "생일선물",
                "명절 복지포인트",
                "경조금 및 휴가",
                "근속자 포상",
                "리조트 회원권",
                "건강검진",
              ],
            },
          ].map((box, idx) => (
            <div key={idx} className="bg-blue-50 rounded-2xl p-6 shadow">
              <div className="text-4xl mb-3 text-center">{box.icon}</div>
              <h3 className="text-lg font-bold text-blue-800 text-center mb-4">
                {box.title}
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {box.list.map((txt, i) => (
                  <li key={i}>• {txt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 채용 절차 */}
      <section className="max-w-7xl mx-auto py-12 md:py-16 px-6">
        <h2 className="text-3xl font-extrabold text-center mb-10">채용 절차</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          {[
            { title: "서류전형", icon: "📝" },
            { title: "인터뷰전형", icon: "💬" },
            { title: "최종합격", icon: "🙌" },
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl mb-3">{step.icon}</div>
              <span className="font-bold text-lg">{step.title}</span>
              {idx < 2 && (
                <div className="hidden md:block w-16 h-1 bg-blue-400 mt-4" />
              )}
            </div>
          ))}
        </div>

        {/* 지원 방법 */}
        <div className="text-center space-y-4">
          <p className="text-lg">
            이메일 지원:{" "}
            <a
              href="mailto:recruit@knotz.co.kr"
              className="text-blue-600 font-bold underline underline-offset-4"
            >
              recruit@knotz.co.kr
            </a>
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            {/* 사람인 / 잡코리아는 실제 공고 URL로 교체하세요 */}
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              사람인 지원하기
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              잡코리아 지원하기
            </a>
            {/* 입사지원서 파일 경로로 교체 */}
            <a
              href="/files/지원서양식.docx"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
              download
            >
              입사지원서 양식 다운로드
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
