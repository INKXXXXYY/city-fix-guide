import Link from "next/link";

export default function NotFound() {
  return (
    <main className="city-top">
      <div>
        <h1>That city is not listed.</h1>
        <p className="lede">
          <Link href="/">Back to the five cities.</Link>
        </p>
      </div>
    </main>
  );
}
