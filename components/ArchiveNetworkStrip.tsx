import {
  BOND_NETWORK_LABEL,
  FF_ARCHIVE_LABEL,
  NETWORK_LABEL,
  bondArchiveUrl,
  ffArchiveUrl,
  type NetworkMedium,
} from "@/lib/site";

const linkClass =
  "text-muted underline decoration-line underline-offset-4 hover:text-gold";

export function ArchiveNetworkStrip({ medium }: { medium: NetworkMedium }) {
  return (
    <nav aria-label={NETWORK_LABEL} className="border-b border-line/80 bg-card/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-1 px-4 py-1.5 text-xs">
        <span className="font-serif tracking-[0.16em] text-gold">{NETWORK_LABEL}</span>
        <a
          href={bondArchiveUrl(medium)}
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {BOND_NETWORK_LABEL}
        </a>
        <a
          href={ffArchiveUrl(medium)}
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {FF_ARCHIVE_LABEL}
        </a>
      </div>
    </nav>
  );
}
