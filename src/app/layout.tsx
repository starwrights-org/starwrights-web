import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "星匠科技 Starwrights Technology | 金融科技SaaS解决方案 FinTech SaaS Solutions",
  description: "星匠科技（香港）有限公司 — 专注金融科技领域的SaaS解决方案提供商。为券商、保险公司、资产管理等金融机构提供企业级管理系统、智能移动应用、AI赋能工具。Starwrights Technology - FinTech SaaS provider in Hong Kong.",
  keywords: "星匠科技, Starwrights, fintech, SaaS, 金融科技, 香港, Hong Kong, 数字化转型, digital transformation, 券商系统, 保险科技, insurtech, 资产管理, asset management, 企业管理系统, AI, 人工智能, 云原生, cloud-native, 大湾区, Greater Bay Area, 公司秘书, company secretary, 财务系统",
  authors: [{ name: "Starwrights Technology (Hong Kong) Limited" }],
  creator: "Starwrights Technology",
  publisher: "Starwrights Technology (Hong Kong) Limited",
  metadataBase: new URL("https://starwrights.ai"),
  alternates: {
    canonical: "https://starwrights.ai",
  },
  openGraph: {
    title: "星匠科技 Starwrights Technology",
    description: "金融科技SaaS解决方案提供商 | FinTech SaaS Solutions Provider — 科技赋能金融，创新驱动效率",
    url: "https://starwrights.ai",
    siteName: "Starwrights Technology",
    locale: "zh_HK",
    alternateLocale: ["en_US", "zh_CN"],
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Starwrights Technology - FinTech SaaS Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "星匠科技 Starwrights Technology",
    description: "金融科技SaaS解决方案提供商 — 科技赋能金融，创新驱动效率",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-HK">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', 'Noto Sans SC', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
