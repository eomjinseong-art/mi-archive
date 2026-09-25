import { redirect } from "next/navigation";
import { pageSeo } from "@/lib/seo";

/** Dedicated 시리즈 URL; the eight-film framing lives on the films hub. */
export const metadata = pageSeo({
  path: "/films",
  title: "미션 임파서블 영화 순서",
  description: "시리즈 설명은 영화 순서 페이지로 이어집니다.",
  index: false,
});

export default function SeriesPage() {
  redirect("/films");
}
