import Header from "../../components/Header";
import SocialSection from "../../components/SocialSection";
import Footer from "../../components/Footer";

export default function SocialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 👇 불필요한 공백/줄바꿈/section/p/br/py-xx 절대 쓰지 말기! */}
      <Header />
      <main className="flex-1 pt-24"> {/* 헤더 높이만큼 pt-24 유지 */}
        <SocialSection />
      </main>
    </div>
  );
}
