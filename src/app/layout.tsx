import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starwrights Technology | FinTech SaaS Solutions",
  description: "Starwrights Technology (Hong Kong) Limited - FinTech-focused SaaS solutions provider for financial institutions.",
  keywords: "fintech, SaaS, Hong Kong, financial technology, digital transformation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', 'Noto Sans SC', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
