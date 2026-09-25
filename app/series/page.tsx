import { redirect } from "next/navigation";

/** Dedicated 시리즈 URL; the 25+2 framing lives on the films hub. */
export default function SeriesPage() {
  redirect("/films");
}
