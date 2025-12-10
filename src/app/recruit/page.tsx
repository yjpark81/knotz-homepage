// src/app/recruit/page.tsx
import React from "react";
import type { Metadata } from "next";
import {
  HeartHandshake,
  UserCog,
  Workflow,
  CalendarClock,
  HandHeart,
  Users,
  // 복리후생 섹션 아이콘
  Rocket,
  PartyPopper,
  CheckCircle2,
  // 채용절차 섹션 아이콘
  FileText,
  MessageSquare,
  BadgeCheck,
  Mail,
  ChevronRight,
  ExternalLink,
  Circle,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "채용 | Knotz",
  description: "노츠의 인재상, 복리후생, 채용 절차를 한눈에 확인하세요.",
};

// ---------- 데이터 ----------
const benefits = [
  {
    title: "성장하는 노츠인",
    icon: "🚀",
    items: ["자기계발비", "체력단련비", "SW Test 자격증 100% 지원", "SW Test 교육"],
  },
  {
    title: "함께하는 노츠인",
    icon: "👥",
    items: ["팀운영비", "플레이샵 / 워크샵", "사내추천 포상금", "근속자 포상", "제휴병원 종합건강검진"],
  },
  {
    title: "즐거운 노츠인",
    icon: "🎉",
    items: ["생일선물", "명절 복지포인트", "경조금 및 휴가", "리조트 회원권", "신규 입사자 웰컴 키트"],
  },
];

// ---------- 인재상 카드 UI ----------
function ValueIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center pt-5 pb-3 bg-white">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef5ff] shadow-sm">
        <div className="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:stroke-[#2b66b1] [&>svg]:stroke-[1.8]">
          {children}
        </div>
      </div>
    </div>
  );
}

function ValueCard({
  title,
  desc,
  icon,
  tone = "a",
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  tone?: "a" | "b";
}) {
  const bodyFrom = tone === "a" ? "#2b4a68" : "#3677b3";
  const bodyTo = tone === "a" ? "#1e3f62" : "#2b66b1";

  return (
    <article className="overflow-hidden rounded-md bg-white shadow-[0_3px_14px_rgba(0,0,0,0.12)] border border-[#e7ecf3]">
      <ValueIcon>{icon}</ValueIcon>

      <div
        className="relative text-white text-center font-extrabold py-3"
        style={{ backgroundColor: bodyTo }}
      >
        <span className="text-[18px] tracking-tight">{title}</span>
        <span className="absolute left-1/2 -bottom-[8px] h-[8px] w-9 -translate-x-1/2 rounded-[2px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]" />
        <span className="absolute inset-x-0 -bottom-px h-px bg-[#d7e4f7]" />
      </div>

      <div
        className="bg-gradient-to-b text-white px-5 py-6"
        style={{ backgroundImage: `linear-gradient(to bottom, ${bodyFrom}, ${bodyTo})`, minHeight: 168 }}
      >
        <p className="text-[15px] leading-7 whitespace-pre-line">{desc}</p>
      </div>
    </article>
  );
}

function ValuesSection() {
  const items = [
    {
      title: "신뢰",
      desc: "신뢰를 바탕으로 업무를 수행하고 고객을 섬기며 개개인의 신뢰성을 쌓아갈 수 있는 사람",
      icon: <HeartHandshake />,
      tone: "a" as const,
    },
    {
      title: "전문성",
      desc: "테스트 관련지식과 경험을 개발하고,\n실무에 최적으로 활용할 수 있는 사람",
      icon: <UserCog />,
      tone: "b" as const,
    },
    {
      title: "적응성",
      desc: "어떠한 환경과 시장 환경 변화에서도\n적응할 수 있는 사람",
      icon: <Workflow />,
      tone: "a" as const,
    },
    {
      title: "성실성",
      desc: "업무를 꼼꼼하고 지속적으로 수행할 수\n있는 사람",
      icon: <CalendarClock />,
      tone: "b" as const,
    },
    {
      title: "배려와존중",
      desc: "직급의 높낮이에 상관없이 구성원 간에\n배려하고 존중을 실천하는 사람",
      icon: <HandHeart />,
      tone: "a" as const,
    },
    {
      title: "고객중심",
      desc: "고객이 성공할 수 있도록 진심으로\n도울 수 있는 사람",
      icon: <Users />,
      tone: "b" as const,
    },
  ] as const;

  return (
    <section id="values" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">인재상</h2>
      <p className="text-center text-gray-600 mb-10">
        노츠의 가장 큰 핵심은 함께하는 구성원입니다. 노츠와 함께 성장하며 더 큰 가치를 만들어갈 인재를 초대합니다.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {items.map((it) => (
          <ValueCard
            key={it.title}
            title={it.title}
            desc={it.desc}
            icon={it.icon}
            tone={it.tone}
          />
        ))}
      </div>
    </section>
  );
}

/* -------------------- 복리후생 카드 -------------------- */
function BenefitCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <article
      className="
        relative rounded-2xl bg-white border border-[#e6eef9]
        shadow-[0_6px_20px_rgba(43,102,177,0.08)]
        transition hover:shadow-[0_10px_26px_rgba(43,102,177,0.14)]
      "
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="rounded-2xl bg-[#eef5ff] p-3 shadow ring-1 ring-white">
          <div className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-[#2b66b1] [&>svg]:stroke-[2]">
            {icon}
          </div>
        </div>
      </div>

      <div className="pt-10 pb-6 px-6 min-h-[260px] flex flex-col">
        <h3 className="text-center text-[20px] font-extrabold text-[#1f3b61]">{title}</h3>
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#cfe0ff]" />

        <ul className="mt-6 space-y-3 text-[16px] text-[#334155]">
          {items.map((txt) => (
            <li key={txt} className="flex items-start gap-2">
              <CheckCircle2 className="mt-[3px] h-5 w-5 stroke-[#2b66b1]" />
              <span>{txt}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// ---------- 페이지 ----------
export default function RecruitPage() {
  return (
    <main className="bg-white pt-4">
      {/* 헤더와의 여백 보정 */}
      <div className="mt-12" />

      {/* 인재상 */}
      <ValuesSection />

      {/* 복리후생 */}
      <section
        id="benefits"
        className="scroll-mt-24 max-w-7xl mx-auto px-6 py-12 md:py-2"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
          복리후생
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <BenefitCard
            title="성장하는 노츠인"
            items={benefits.find((b) => b.title === "성장하는 노츠인")?.items ?? []}
            icon={<Rocket />}
          />
          <BenefitCard
            title="함께하는 노츠인"
            items={benefits.find((b) => b.title === "함께하는 노츠인")?.items ?? []}
            icon={<Users />}
          />
          <BenefitCard
            title="즐거운 노츠인"
            items={benefits.find((b) => b.title === "즐거운 노츠인")?.items ?? []}
            icon={<PartyPopper />}
          />
        </div>
      </section>

      {/* 채용절차 */}
      <section
        id="process"
        className="scroll-mt-24 max-w-7xl mx-auto px-6 py-12 md:py-14"
      >
        <h2 className="text-2xl md:text-3xl text-center font-extrabold">
          채용절차
        </h2>

        {/* Step Bar */}
        <div className="mt-6 rounded-2xl bg-[#f7f9fe] p-4 md:p-5 shadow-[inset_0_1px_0_#e8eefb]">
          <div className="flex items-stretch gap-2 md:gap-3 w-full">
            {[
              { n: 1, label: "입사지원", icon: <FileText className="h-5 w-5" /> },
              { n: 2, label: "1차 서류전형", icon: <FileText className="h-5 w-5" /> },
              { n: 3, label: "2차 면접전형", icon: <MessageSquare className="h-5 w-5" /> },
              { n: 4, label: "처우 협의", icon: <BadgeCheck className="h-5 w-5" /> },
              { n: 5, label: "최종합격", icon: <BadgeCheck className="h-5 w-5" /> },
            ].map((s, i, arr) => (
              <React.Fragment key={s.n}>
                <div className="flex-1 min-w-0">
                  <div className="rounded-xl bg-white px-3 py-3 md:px-4 md:py-3 shadow-sm border border-[#e8eef7]">
                    <div className="flex items-center gap-2 md:gap-2.5">
                      <div
                        className="inline-grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#eef5ff]"
                        style={{ boxShadow: "inset 0 0 0 2px #d7e8ff" }}
                      >
                        <span className="text-[12px] font-bold leading-[0] tabular-nums text-[#2b66b1]">
                          {s.n}
                        </span>
                      </div>
                      <span className="[&>svg]:stroke-[#2b66b1] [&>svg]:stroke-[1.6]">
                        {s.icon}
                      </span>
                      <span className="truncate text-[#1f2e47] font-semibold md:font-bold text-[14px] md:text-[15px]">
                        {s.label}
                      </span>
                    </div>
                  </div>
                </div>

                {i < arr.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-[#9bb6df] shrink-0 self-center" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 접수방법 */}
        <h3 className="mt-10 text-lg font-extrabold">접수방법</h3>
        <p className="mt-1 text-sm text-gray-600">
          온라인 채용 관련 사이트 및 이메일로 지원 가능합니다.
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* 사람인 */}
          <a
            href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=UHZITXJ6MG1ITkI5bkdmaVpITEMzQT09"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border bg-white px-5 py-4 shadow-sm hover:shadow-md transition"
            style={{ borderColor: "#e8eef7" }}
          >
            <div className="flex items-center gap-3">
              <ExternalLink className="h-5 w-5 stroke-[#2b66b1]" />
              <span className="font-semibold">사람인</span>
            </div>
            <Circle className="h-4 w-4 text-[#2b66b1] opacity-70 group-hover:opacity-100" />
          </a>

          {/* 잡코리아 */}
          <a
            href="https://www.jobkorea.co.kr/Recruit/Co_Read/C/testgate"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border bg-white px-5 py-4 shadow-sm hover:shadow-md transition"
            style={{ borderColor: "#e8eef7" }}
          >
            <div className="flex items-center gap-3">
              <ExternalLink className="h-5 w-5 stroke-[#2b66b1]" />
              <span className="font-semibold">잡코리아</span>
            </div>
            <Circle className="h-4 w-4 text-[#2b66b1] opacity-70 group-hover:opacity-100" />
          </a>

          {/* 이메일 지원 */}
          <a
            href="mailto:recruit@knotz.co.kr"
            className="group flex items-center justify-between rounded-2xl border bg-white px-5 py-4 shadow-sm hover:shadow-md transition"
            style={{ borderColor: "#e8eef7" }}
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 stroke-[#2b66b1]" />
              <span className="font-semibold">이메일 지원</span>
            </div>
            <Circle className="h-4 w-4 text-[#2b66b1] opacity-70 group-hover:opacity-100" />
          </a>

          {/* 지원 양식 다운로드 */}
          <a
            href="/files/노츠 입사지원서.doc"
            download
            className="group flex items-center justify-between rounded-2xl border bg-white px-5 py-4 shadow-sm hover:shadow-md transition"
            style={{ borderColor: "#e8eef7" }}
          >
            <div className="flex items-center gap-3">
              <Download className="h-5 w-5 stroke-[#2b66b1]" />
              <span className="font-semibold">지원 양식 다운로드</span>
            </div>
            <Circle className="h-4 w-4 text-[#2b66b1] opacity-70 group-hover:opacity-100" />
          </a>
        </div>

        {/* 제출 시 유의사항 / 기타 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 제출 시 유의사항 */}
          <div>
            <h3 className="text-lg font-extrabold">제출 시 유의사항</h3>
            <ul className="mt-3 space-y-2 text-[15px] leading-7 text-[#334155]">
              {[
                "파일명은 지원자성명-신입/경력 으로 지정해 주세요.",
                "제출한 서류는 반환되지 않습니다.",
                "제출한 서류에 사실이 다른 경우 불합격 처리될 수 있습니다.",
                "문의 : recruit@knotz.co.kr (채용 담당자)",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 stroke-[#2b66b1]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 기타 */}
          <div>
            <h3 className="text-lg font-extrabold">기타</h3>
            <ul className="mt-3 space-y-2 text-[15px] leading-7 text-[#334155]">
              {[
                "경력자의 경우 경력기술서가 포함된 이력서를 제출해 주세요.",
                "채용 진행 현황에 따라 수시로 검토/연락드릴 수 있습니다.",
                "메일 지원도 가능합니다: recruit@knotz.co.kr",
                "접수 후 약 1~2주 이내에 합/불 여부 개별 안내드립니다.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 stroke-[#2b66b1]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
