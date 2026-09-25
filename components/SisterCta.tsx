import { bondCarCta } from "@/lib/site";

export function SisterCta({
  label,
  path = "/brands/aston-martin",
}: {
  label: string;
  path?: string;
}) {
  return (
    <a
      href={bondCarCta(path)}
      className="inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-medium text-bg hover:bg-gold-dim"
    >
      {label}
    </a>
  );
}
