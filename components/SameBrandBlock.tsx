import { bondCarsForBrand } from "@/lib/bondCars";
import { BOND_NETWORK_LABEL, FF_ARCHIVE_LABEL, ffArchiveUrl } from "@/lib/site";

export function SameBrandBlock({
  brand,
  brandKo,
}: {
  brand: string;
  brandKo: string;
}) {
  const matches = bondCarsForBrand(brand);

  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">다른 영화 속 같은 브랜드</h2>
      <p className="mt-2 text-sm leading-7 text-muted">
        같은 브랜드로 주소가 확인된 차만 잇습니다. 분노의 질주 아카이브는 차량
        목록으로 갑니다.
      </p>

      <div className="mt-4 rounded-lg border border-line p-4">
        <h3 className="text-sm text-gold">{BOND_NETWORK_LABEL}</h3>
        {matches.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {matches.map((car) => (
              <li key={car.slug}>
                <a
                  href={car.href}
                  className="text-sm text-paper hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {car.nameKo} ({car.nameEn}) · {car.filmKo}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm leading-7 text-muted">
            확인된 {brandKo} 페이지는 없습니다.
          </p>
        )}
      </div>

      <div className="mt-3 rounded-lg border border-line p-4">
        <h3 className="text-sm text-gold">{FF_ARCHIVE_LABEL}</h3>
        <a
          href={ffArchiveUrl("car", "/cars")}
          className="mt-3 inline-block text-sm text-paper hover:text-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          차량 목록
        </a>
        <p className="mt-2 text-xs leading-6 text-muted">
          아카이브가 열리면 이 목록에서 같은 브랜드를 찾습니다.
        </p>
      </div>
    </section>
  );
}
