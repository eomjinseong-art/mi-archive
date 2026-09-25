import type { Metadata } from "next";
import { CarExplorer } from "@/components/CarExplorer";

export const metadata: Metadata = {
  title: "차량",
};

export default function CarsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">차량</h1>
      <p className="mt-2 text-sm text-muted">
        본드카 12대와 본드카 외 차량. 본드카는 아이콘·브랜드·시대로 볼 수
        있습니다.
      </p>
      <div className="mt-8">
        <CarExplorer />
      </div>
    </div>
  );
}
