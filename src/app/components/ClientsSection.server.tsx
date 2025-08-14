import path from "path";
import fs from "fs";
import ClientsSection from "./ClientsSection";

// 서버 컴포넌트 (폴더 자동 스캔)
export default function ClientsSectionServer() {
  // public 디렉토리 내부의 실제 경로
  const clientsDir = path.join(process.cwd(), "public", "clients");
  // .png, .jpg, .jpeg만 허용
  const files = fs
    .readdirSync(clientsDir)
    .filter(f => /\.(png|jpe?g|webp)$/i.test(f));
  // Next/Image의 src 경로는 /public을 생략하고 /clients/부터 시작
  const logos = files.map(f => ({
    name: f.replace(/\.(png|jpe?g|webp)$/i, ""),
    logo: `/clients/${f}`,
  }));

  // 데이터 props로 전달
  return <ClientsSection clients={logos} />;
}
