import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, type Crumb } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs = [{ name: "홈", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="경로" className="mb-4 text-xs text-muted">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <li key={`${crumb.path}-${crumb.name}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden>›</span> : null}
                {last ? (
                  <span className="text-paper">{crumb.name}</span>
                ) : (
                  <Link href={crumb.path} className="hover:text-gold">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </>
  );
}
