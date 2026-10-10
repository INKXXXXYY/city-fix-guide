import Link from "next/link";
import { CityMark, ClinicScene } from "@/components/art";
import { formatVerifiedOn, getPublishedCities } from "@/lib/cities";

export default function HomePage() {
  const cities = getPublishedCities();

  return (
    <main>
      <section className="hero">
        <div>
          <h1>The low-cost fix, city by city.</h1>
          <p className="lede">
            Each page names the program, who qualifies, what it costs, and where
            to apply. The date is the day that page was checked against the
            official source.
          </p>
        </div>
        <ClinicScene />
      </section>
      <nav className="directory" aria-label="Cities">
        {cities.map((city) => (
          <Link key={city.slug} href={`/spay-neuter/${city.slug}`}>
            <CityMark slug={city.slug} />
            <span>
              <h2>{city.city}</h2>
              <p>{city.programName}</p>
              <p className="meta">{city.region}</p>
            </span>
            <span className="checked">Checked {formatVerifiedOn(city.verifiedOn)}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
