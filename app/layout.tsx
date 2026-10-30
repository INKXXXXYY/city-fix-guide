import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "City spay and neuter desk",
    template: "%s",
  },
  description:
    "One checked page per city for spay and neuter vouchers and low-cost surgery.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="sheet">
          <header className="topbar">
            <Link href="/">City pet desk</Link>
            <span>Five cities</span>
          </header>
          {children}
          <footer className="site-links">
            <p>
              Related desk:{" "}
              <a href="https://mail.fxcalc.site/">
                Can I mail medicine overseas?
              </a>
              {" · "}
              <a href="https://mail.fxcalc.site/mail/melatonin-to-japan/">
                Melatonin to Japan
              </a>
              {" · "}
              <a href="https://mail.fxcalc.site/mail/melatonin-to-singapore/">
                Melatonin to Singapore
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
