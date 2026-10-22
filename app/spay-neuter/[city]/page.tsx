import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityMark } from "@/components/art";
import {
  formatVerifiedOn,
  getCity,
  getPublishedCities,
  pageTitle,
  petfinderSrc,
  phoneHref,
} from "@/lib/cities";

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return getPublishedCities().map((city) => ({ city: city.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: "City not found" };
  return {
    title: pageTitle(city),
    description: `${pageTitle(city)}. ${city.operator.replace(/\.$/, "")}. Checked ${formatVerifiedOn(city.verifiedOn)}.`,
  };
}

function paragraphs(text: string) {
  return text.split("\n\n").filter(Boolean);
}

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const sameLink = city.applyUrl === city.sourceUrl;
  const widgetSrc = petfinderSrc(city.petfinderEmbed);
  const offers = [
    city.insuranceUrl ? { href: city.insuranceUrl, label: "Pet insurance" } : null,
    city.chewyUrl ? { href: city.chewyUrl, label: "Chewy" } : null,
  ].filter((offer) => offer !== null);

  return (
    <main>
      <div className="city-top">
        <div>
          <h1>{pageTitle(city)}</h1>
          <p className="region">{city.region}</p>
          <p className="meta">Checked {formatVerifiedOn(city.verifiedOn)}</p>
        </div>
        <CityMark slug={city.slug} />
      </div>

      {city.notice ? <p className="notice">{city.notice}</p> : null}

      <div className="facts">
        <section className="fact">
          <h2>Program</h2>
          <p>{city.programName}</p>
          <p className="meta">{city.operator}</p>
        </section>
        <section className="fact">
          <h2>Animals</h2>
          <p>{city.species}</p>
        </section>
        <section className="fact">
          <h2>Who can apply</h2>
          {paragraphs(city.eligibility).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <section className="fact">
          <h2>What it costs</h2>
          {paragraphs(city.cost).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <section className="fact">
          <h2>How to apply</h2>
          <div className="actions">
            {city.phone ? (
              <a href={phoneHref(city.phone)}>{city.phone}</a>
            ) : null}
            <a href={city.applyUrl} target="_blank" rel="noopener noreferrer">
              {sameLink ? "Official page" : "Apply on the official page"}
            </a>
            {sameLink ? null : (
              <a
                className="secondary"
                href={city.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Program rules
              </a>
            )}
          </div>
        </section>
        {widgetSrc ? (
          <section className="fact">
            <h2>Adoptable pets</h2>
            <iframe className="embed" src={widgetSrc} title="Adoptable pets" />
          </section>
        ) : null}
        {offers.length > 0 ? (
          <section className="fact">
            <h2>After the surgery</h2>
            <div className="actions">
              {offers.map((offer) => (
                <a
                  key={offer.href}
                  href={offer.href}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                >
                  {offer.label}
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <p className="footer-note">
        This page is not the city, the clinic, or the shelter. Open the official
        page before you apply.
      </p>
    </main>
  );
}
