"use client";
import { useRef, useEffect, useState } from "react";

const leftImages = ["/art1.jpg", "/art2.jpg", "/art3.jpg", "/art4.jpg"];
const rightImages = ["/art5.jpg", "/art6.jpg", "/art7.jpg", "/art8.jpg"];
const rollingRepeat = 2;
const gapPx = 24;

function getRollingArr(arr) {
  return Array(rollingRepeat).fill(arr).flat();
}

export default function SocialSection() {
  const leftRolling = getRollingArr(leftImages);
  const rightRolling = getRollingArr(rightImages);

  const leftListRef = useRef(null);
  const rightListRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);
  const [rollingSetHeight, setRollingSetHeight] = useState(0);

  useEffect(() => {
    if (leftListRef.current) {
      const imgs = leftListRef.current.querySelectorAll("img");
      if (imgs.length > 0) {
        const h = imgs[0].clientHeight;
        setItemHeight(h);
        setRollingSetHeight(h * leftImages.length + gapPx * (leftImages.length - 1));
      }
    }
  }, []);

  useEffect(() => {
    if (!rollingSetHeight) return;
    let leftPos = 0, rightPos = 0, reqId = 0;
    function step() {
      if (leftListRef.current) {
        leftPos += 0.5;
        if (leftPos >= rollingSetHeight) leftPos -= rollingSetHeight;
        leftListRef.current.scrollTop = leftPos;
      }
      if (rightListRef.current) {
        rightPos += 0.5;
        if (rightPos >= rollingSetHeight) rightPos -= rollingSetHeight;
        rightListRef.current.scrollTop = rollingSetHeight - (rightPos % rollingSetHeight);
      }
      reqId = requestAnimationFrame(step);
    }
    reqId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(reqId);
  }, [rollingSetHeight]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    applyType: "",
    topic: "",
    grade: "",
    message: "",
    agree: false,
  });

  function setField(name, value) {
    setForm(f => ({ ...f, [name]: value }));
  }
  function checkRequiredFields() {
    if (!form.name) return "성함을 입력해 주세요.";
    if (!form.email) return "이메일을 입력해 주세요.";
    if (!form.phone) return "휴대전화번호를 입력해 주세요.";
    if (!form.applyType) return "지원분야를 선택해 주세요.";
    if (!form.topic) return "주제를 선택해 주세요.";
    if (!form.grade) return "종합 장애 정도를 선택해 주세요.";
    if (!form.agree) return "개인정보 수집에 동의해 주세요.";
    return null;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const msg = checkRequiredFields();
    if (msg) return alert(msg);
    alert("제출 완료!\n" + JSON.stringify(form, null, 2));
  }

  return (
    <section className="bg-white py-0 md:py-0">
      {/* 한 줄짜리: 좌 롤링 | 중앙 컨텐츠 | 우 롤링 */}
      <div className="max-w-7xl mx-auto flex flex-row justify-center items-start gap-8 px-0 pt-0">
        {/* 좌측 롤링 */}
        <div
          ref={leftListRef}
          className="overflow-y-scroll no-scrollbar flex flex-col gap-6 bg-white shadow-lg rounded-2xl hidden lg:flex"
          style={{
            zIndex: 2,
            marginLeft: "-256px",
            width: 480,
            height: 935,
            minHeight: 80,
          }}
        >
          {leftRolling.map((src, i) => (
            <img
              key={src + "-" + i}
              src={src}
              alt=""
              className="rounded-xl w-full object-cover"
              style={{ height: "280px" }}
            />
          ))}
        </div>

        {/* 중앙: 타이틀 + 설명 + 폼을 '하나의 배경 박스'로 묶음 */}
        <div className="flex-1 flex flex-col items-center justify-start px-6">
          <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl p-7 flex flex-col gap-3">
            {/* 타이틀+설명 */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-1">
              Knotz 사회공헌
            </h2>
            <div className="text-center text-lg text-gray-600 font-medium mb-4">
              장애인 화가 작품 갤러리 &middot; 예술을 통한 사회적 가치 실현
            </div>
            <div className="w-full text-left text-[15px] text-gray-800 font-normal leading-relaxed mb-2">
              <b>한마음일자리</b><br />
              한마음일자리는 노츠가 2023년부터 진행한 ‘보다 좋은 세상 만들기 운동’의 일환 중 하나인 사회공헌 프로그램입니다. 이를 통해 장애인 고용을 창출하고, 
              장애인미술작가는 지속적인 예술 활동으로 세상과 소통할 수 있는 기회를 갖게 됩니다.<br />
              ‘하나로 합친 마음’, ‘변함 없는 마음’, ‘모든 사람은 마음이 모여 이루어진 덩어리’라는 뜻을 가진 ‘한마음’이라는 단어를 사용해
              ‘한마음일자리’로 이름을 정하고, 2023년부터 장애인미술작가와 함께 보다 좋은 세상 만들기 운동을 함께 하고 있습니다.
            </div>
            {/* 폼 */}
            <form
              className="w-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 bg-white rounded-2xl shadow-lg p-6 mt-0 pt-0"
              onSubmit={handleSubmit}
              style={{ alignItems: "start" }}
            >
              {/* --- 1행 --- */}
              <div>
                <label className="block text-[15px] font-bold mb-1" htmlFor="name">
                  이름 <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="name"
                  className="border border-gray-300 rounded-xl px-4 py-1.5 w-full focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="이름을 남겨 주세요."
                  value={form.name}
                  onChange={e => setField("name", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[15px] font-bold mb-1" htmlFor="applyType">
                  지원분야 <span className="text-red-500 font-bold">*</span>
                </label>
                <select
                  id="applyType"
                  className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                  value={form.applyType}
                  onChange={e => setField("applyType", e.target.value)}
                >
                  <option value="">하나를 선택해 주세요.</option>
                  <option>회화</option>
                  <option>공예</option>
                  <option>서예</option>
                  <option>기타</option>
                </select>
              </div>

              {/* --- 2행 --- */}
              <div>
                <label className="block text-[15px] font-bold mb-1" htmlFor="email">
                  이메일 <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="email"
                  className="border border-gray-300 rounded-xl px-4 py-1.5 w-full focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="example@example.com"
                  type="email"
                  value={form.email}
                  onChange={e => setField("email", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[15px] font-bold mb-1" htmlFor="topic">
                  주제 <span className="text-red-500 font-bold">*</span>
                </label>
                <select
                  id="topic"
                  className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                  value={form.topic}
                  onChange={e => setField("topic", e.target.value)}
                >
                  <option value="">하나를 선택해 주세요.</option>
                  <option>자연</option>
                  <option>인물</option>
                  <option>동물</option>
                  <option>기타</option>
                </select>
              </div>

              {/* --- 3행 --- */}
              <div>
                <label className="block text-[15px] font-bold mb-1" htmlFor="phone">
                  휴대전화번호 <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  id="phone"
                  className="border border-gray-300 rounded-xl px-4 py-1.5 w-full focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="숫자만 입력해 주세요."
                  type="tel"
                  value={form.phone}
                  onChange={e => setField("phone", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[15px] font-bold mb-1" htmlFor="grade">
                  종합 장애 정도 <span className="text-red-500 font-bold">*</span>
                </label>
                <select
                  id="grade"
                  className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                  value={form.grade}
                  onChange={e => setField("grade", e.target.value)}
                >
                  <option value="">하나를 선택해 주세요.</option>
                  <option>경증</option>
                  <option>중증</option>
                </select>
              </div>

              {/* --- 4행: 문의내용 (col-span-2) --- */}
              <div className="col-span-2">
                <label className="block text-normal font-extrabold mb-1" htmlFor="message">
                  문의내용
                </label>
                <textarea
                  id="message"
                  className="border border-gray-300 rounded-xl px-4 py-4 w-full min-h-[120px] text-normal focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  placeholder="문의 내용을 입력해 주세요."
                  value={form.message}
                  onChange={e => setField("message", e.target.value)}
                  style={{ minHeight: 120 }}
                />
              </div>

              {/* --- 5행: 동의, 안내문, 버튼 (col-span-2) --- */}
              <div className="col-span-2 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                <div>
                  <label className="flex items-center text-base font-medium mb-2">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={e => setField("agree", e.target.checked)}
                      className="mr-2 accent-blue-600 scale-125"
                    />
                    개인정보수집에 동의합니다.
                    <span className="text-red-500 font-bold ml-1">*</span>
                  </label>
                  <div className="text-[11px] text-gray-700 leading-relaxed">
                    <span className="font-bold">개인정보 수집 이용 목적</span>은 한마음일자리 채용과 관련한 정보를 수집하기 위해서입니다.<br />
                    <span className="font-bold">수집하는 개인정보</span>는 이름, 이메일, 휴대전화, 지원분야, 주제, 종합 장애 정도는 필수입니다.<br />
                    <span className="font-bold">개인정보 보유 및 이용기간</span>은 3년이며, 제3자에게 제공하지 않습니다.<br />
                    문의자의 요청에 따라 열람, 정정, 삭제, 처리정지 등 대응 받을 권리가 있습니다.<br />
                    단, 필수항목의 수집 및 이용에 대해 동의하지 않을 경우에는 접수 및 처리가 제한됩니다.
                  </div>
                </div>
                <button
                  className="px-8 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold shadow-lg hover:shadow-2xl transition self-end md:self-auto"
                  type="submit"
                >
                  보내기
                </button>
              </div>
            </form>



          </div>
        </div>
        {/* 우측 롤링 */}
        <div
          ref={rightListRef}
          className="overflow-y-scroll no-scrollbar flex flex-col gap-6 bg-white shadow-lg rounded-2xl hidden lg:flex"
          style={{
            zIndex: 2,
            marginRight: "-256px",
            width: 480,
            height: 935,
            minHeight: 80,
          }}
        >
          {rightRolling.map((src, i) => (
            <img
              key={src + "-" + i}
              src={src}
              alt=""
              className="rounded-xl w-full object-cover"
              style={{ height: "280px" }}
            />
          ))}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
