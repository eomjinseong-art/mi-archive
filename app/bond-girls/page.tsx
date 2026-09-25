import type { Metadata } from "next";
import { BondGirlsHub } from "@/components/BondGirlsHub";
import { bondGirls, isHomeBondGirl } from "@/data/bondGirls";

export const metadata: Metadata = {
  title: "본드걸",
};

export default function BondGirlsPage() {
  const featured = bondGirls.filter(isHomeBondGirl).length;
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">본드걸 · 주요 여성 인물</h1>
      <p className="mt-2 text-sm leading-7 text-muted">
        본드걸 {featured}명과 조연·카메오·반복 출연입니다.
      </p>
      <BondGirlsHub />
    </div>
  );
}
