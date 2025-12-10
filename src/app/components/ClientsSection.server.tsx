// src/app/components/ClientsSection.server.tsx
import LogoGridCarousel from "./LogoGridCarousel";
import { clients } from "../data/clients";

export default function ClientsSectionServer() {
  // ✅ 같은 로고 경로는 한 번만 사용 (제노레이 반복 방지)
  const uniqueClients = Array.from(
    new Map(clients.map((c) => [c.logo, c])).values(),
  );

  return (
    <section
      id="clients"
      className="w-full"
      style={{ backgroundColor: "#f5faff" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-2xl font-extrabold text-[#111827]">
          주요 고객사
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          금융, 플랫폼, 임베디드, 자동차, 보안 솔루션 등 다양한 산업의 고객사와 함께
          1,500건 이상의 테스트 프로젝트를 수행하고 있습니다.
        </p>

        <div className="mt-8">
          <LogoGridCarousel clients={uniqueClients} />
        </div>
      </div>
    </section>
  );
}
