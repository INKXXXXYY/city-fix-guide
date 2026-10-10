import cities from "@/data/cities.json";

export type CityProgram = {
  slug: string;
  city: string;
  region: string;
  programName: string;
  operator: string;
  species: string;
  eligibility: string;
  cost: string;
  phone: string;
  applyUrl: string;
  sourceUrl: string;
  verifiedOn: string;
  published: boolean;
  petfinderEmbed: string;
  insuranceUrl: string;
  chewyUrl: string;
  notice: string;
};

const programs = cities as CityProgram[];

export function getPublishedCities(): CityProgram[] {
  return programs.filter((city) => city.published);
}

export function getCity(slug: string): CityProgram | undefined {
  return getPublishedCities().find((city) => city.slug === slug);
}

export function formatVerifiedOn(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function petfinderSrc(embed: string): string | null {
  const match = embed.match(/src=["']([^"']+)["']/i);
  if (!match) return null;
  try {
    const url = new URL(match[1]);
    if (url.protocol !== "https:") return null;
    if (!url.hostname.endsWith("petfinder.com")) return null;
    return url.toString();
  } catch {
    return null;
  }
}
