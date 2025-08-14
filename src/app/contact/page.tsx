"use client";
import { useState } from "react";
import { Handshake } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    businessType: "",
    message: "",
    targets: [] as string[],
    start: [] as string[],       // 복수 선택
    period: [] as string[],      // 복수 선택
    channels: [] as string[],
    agree: false,
  });

  // 모든 항목 복수 선택(토글)
  function toggleMulti(name: string, value: string) {
    setForm(f => ({
      ...f,
      [name]: f[name].includes(value)
        ? f[name].filter((v: string) => v !== value)
        : [...f[name], value],
    }));
  }

  function setField(name: string, value: string) {
    setForm(f => ({ ...f, [name]: value }));
  }

  function checkRequiredFields() {
    if (!form.name) return "성함을 입력해 주세요.";
    if (!form.company) return "회사명을 입력해 주세요.";
    if (!form.email) return "이메일을 입력해 주세요.";
    if (!form.phone) return "연락처를 입력해 주세요.";
    if (!form.inquiryType) return "문의유형을 선택해 주세요.";
    if (!form.businessType) return "운영분야를 선택해 주세요.";
    if (!form.agree) return "개인정보 수집에 동의해 주세요.";
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const requiredMsg = checkRequiredFields();
    if (requiredMsg) {
      alert(requiredMsg);
      return;
    }
    alert("제출되었습니다.\n" + JSON.stringify(form, null, 2));
  }

  const targetOptions = ["Web", "Mobile Web", "App", "Embedded", "직접 입력"];
  const startOptions = ["즉시 착수", "1개월 이내", "3개월 이내", "6개월 이내", "협의가능"];
  const periodOptions = ["1개월 미만", "1-3개월", "연간 계약", "협의 필요"];
  const channelOptions = ["방문 미팅", "유선 통화", "이메일"];

  return (
    <section
      className="min-h-screen py-16 bg-[#fafcff] font-sans text-base text-gray-800"
      style={{ fontFamily: "'Noto Sans KR', Pretendard, ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* 상단 아이콘 & 타이틀 */}
      <div className="flex flex-col items-center mt-4 mb-">
        <Handshake size={42} strokeWidth={2} className="text-[#1e3a8a] mb-2" />
        <span className="text-lg text-[#1e3a8a] font-semibold mb-3">사업문의</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow p-8"
        style={{ alignItems: "start" }}
      >
        {/* 좌측: 기본정보 */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold">
            성함 <span className="text-red-600">*</span>
            <input
              className="mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              placeholder="성함을 남겨 주세요."
              value={form.name}
              onChange={e => setField("name", e.target.value)}
            />
          </label>
          <label className="text-sm font-semibold">
            회사명 <span className="text-red-600">*</span>
            <input
              className="mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              placeholder="회사명을 남겨 주세요."
              value={form.company}
              onChange={e => setField("company", e.target.value)}
            />
          </label>
          <label className="text-sm font-semibold">
            이메일 <span className="text-red-600">*</span>
            <input
              className="mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              placeholder="example@example.com"
              value={form.email}
              onChange={e => setField("email", e.target.value)}
              type="email"
            />
          </label>
          <label className="text-sm font-semibold">
            연락처 <span className="text-red-600">*</span>
            <input
              className="mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              placeholder="연락처를 입력해 주세요."
              value={form.phone}
              onChange={e => setField("phone", e.target.value)}
              type="tel"
            />
          </label>
          {/* 문의유형(드롭다운) */}
          <label className="text-sm font-semibold">
            문의유형 <span className="text-red-600">*</span>
            <select
              className="mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              value={form.inquiryType}
              onChange={e => setField("inquiryType", e.target.value)}
            >
              <option value="">문의유형을 선택해 주세요.</option>
              <option>테스트 서비스 문의</option>
              <option>견적 문의</option>
              <option>업무 제휴</option>
              <option>기타</option>
            </select>
          </label>
          {/* 운영분야(드롭다운) */}
          <label className="text-sm font-semibold">
            운영분야 <span className="text-red-600">*</span>
            <select
              className="mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              value={form.businessType}
              onChange={e => setField("businessType", e.target.value)}
            >
              <option value="">운영분야를 선택해 주세요.</option>
              <option>플랫폼/커머스</option>
              <option>ICT/SI</option>
              <option>보안솔루션</option>
              <option>임베디드</option>
              <option>자동차</option>
              <option>기타</option>
            </select>
          </label>
          <textarea
            className="border border-gray-300 rounded px-3 py-2 h-35 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="문의 내용을 입력해 주세요."
            value={form.message}
            onChange={e => setField("message", e.target.value)}
          />
          {/* 개인정보 수집동의 */}
          <label className="flex items-center text-xs mt- mb-0">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={e =>
                setForm(f => ({ ...f, agree: e.target.checked }))
              }
              className="mr-2"
            />
            개인정보수집에 동의합니다.
          </label>
          {/* 안내문 */}
          <div className="text-[11px] text-gray-600 leading-relaxed mt- mb-0">
            <span className="font-bold">개인정보 수집 이용 동의</span> <br />
            사업문의와 관련된 정보를 처리하기 위해서입니다. 수집하는 개인정보는 활용에 이용, 회사명, 이메일, 연락처 등이며,
            보유 및 이용기간은 3년입니다. 개인정보를 <b>제3자에게 제공하지 않습니다</b>.
            문의자의 요청에 따라 열람, 정정, 삭제, 처리정지 등 대응 받을 권리가 있습니다. <br />
            단, 필수항목의 수집 및 동의 철회 등으로 인해 업무 공유에는 불참 처리할 수 있습니다.
          </div>
        </div>

        {/* 우측: 상세선택 + 보내기 버튼 */}
        <div className="flex flex-col gap-5 justify-between h-full">
          <div>
            <div className="text-sm font-semibold text-gray-800 mb-1">
              추가 정보를 알려주시면 보다 빠르게 대응 가능합니다.<br />
            </div>
            <div className="mt-6">
              <div className="text-sm font-bold mb-1">01. 테스트 분야를 선택해 주세요. <span className="text-xs text-gray-400">(복수 선택 가능)</span></div>
              <div className="grid grid-cols-3 gap-2">
                {targetOptions.map(opt => (
                  <button
                    key={opt}
                    type="button"
                    className={`border rounded px-2 py-2 text-sm ${form.targets.includes(opt) ? "bg-blue-100 border-blue-600 text-blue-700 font-semibold" : "border-gray-300 bg-white text-gray-700"}`}
                    onClick={() => toggleMulti("targets", opt)}
                  >{opt}</button>
                ))}
              </div>
            </div>
            <div className="mt-13">
              <div className="text-sm font-bold mb-1">02. 요청하시는 착수 시점을 선택해 주세요. <span className="text-xs text-gray-400">(복수 선택 가능)</span></div>
              <div className="grid grid-cols-3 gap-2">
                {startOptions.map(opt => (
                  <button
                    key={opt}
                    type="button"
                    className={`border rounded px-2 py-2 text-sm ${form.start.includes(opt) ? "bg-blue-100 border-blue-600 text-blue-700 font-semibold" : "border-gray-300 bg-white text-gray-700"}`}
                    onClick={() => toggleMulti("start", opt)}
                  >{opt}</button>
                ))}
              </div>
            </div>
            <div className="mt-13">
              <div className="text-sm font-bold mb-1">03. 수행 기간을 선택해 주세요. <span className="text-xs text-gray-400">(복수 선택 가능)</span></div>
              <div className="grid grid-cols-3 gap-2">
                {periodOptions.map(opt => (
                  <button
                    key={opt}
                    type="button"
                    className={`border rounded px-2 py-2 text-sm ${form.period.includes(opt) ? "bg-blue-100 border-blue-600 text-blue-700 font-semibold" : "border-gray-300 bg-white text-gray-700"}`}
                    onClick={() => toggleMulti("period", opt)}
                  >{opt}</button>
                ))}
              </div>
            </div>
            <div className="mt-13">
              <div className="text-sm font-bold mb-1">04. 선호하시는 의사소통 방법을 선택해 주세요. <span className="text-xs text-gray-400">(복수 선택 가능)</span></div>
              <div className="grid grid-cols-3 gap-2">
                {channelOptions.map(opt => (
                  <button
                    key={opt}
                    type="button"
                    className={`border rounded px-2 py-2 text-sm ${form.channels.includes(opt) ? "bg-blue-100 border-blue-600 text-blue-700 font-semibold" : "border-gray-300 bg-white text-gray-700"}`}
                    onClick={() => toggleMulti("channels", opt)}
                  >{opt}</button>
                ))}
              </div>
            </div>
          </div>
          {/* 보내기 버튼: 우측 하단, 오른쪽 정렬 */}
          <div className="flex justify-end mt-6">
            <button
              className="px-10 py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold transition"
              type="submit"
            >
              보내기
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
