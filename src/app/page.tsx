"use client";
import { useState } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    nav: { about: "关于我们", services: "核心服务", products: "产品", contact: "联系我们" },
    hero: {
      tagline: "科技赋能金融，创新驱动效率",
      title: "星匠科技",
      subtitle: "金融科技领域的 SaaS 解决方案提供商",
      desc: "为券商、保险公司、资产管理等金融机构提供全栈数字化服务",
      cta: "了解更多",
    },
    about: {
      title: "关于星匠科技",
      p1: "星匠科技（香港）有限公司是一家专注于金融科技领域的 SaaS 解决方案提供商。我们为券商、保险公司、资产管理等金融机构提供全栈数字化服务，包括企业级管理系统开发、智能移动应用、AI 赋能工具等。",
      p2: "我们以「科技赋能金融，创新驱动效率」为使命，通过领先的云原生技术架构和人工智能能力，帮助客户实现业务流程自动化、运营成本优化和服务体验升级。",
      p3: "团队深耕香港及大湾区市场，致力于成为金融机构数字化转型的首选技术合作伙伴。",
      stats: [
        { value: "金融科技", label: "行业专注" },
        { value: "全栈服务", label: "技术能力" },
        { value: "大湾区", label: "深耕市场" },
        { value: "AI 赋能", label: "技术前沿" },
      ],
    },
    services: {
      title: "核心服务",
      subtitle: "端到端的金融科技解决方案",
      items: [
        { icon: "building", title: "企业级管理系统", desc: "为金融机构量身定制的管理平台，涵盖客户关系管理、合规审计、业务流程自动化等功能模块。" },
        { icon: "mobile", title: "智能移动应用", desc: "面向金融从业者和终端用户的移动端解决方案，提供安全、高效、直观的交互体验。" },
        { icon: "brain", title: "AI 赋能工具", desc: "利用人工智能技术优化金融业务决策，提升运营效率，降低人工成本。" },
        { icon: "cloud", title: "云原生架构", desc: "基于领先的云原生技术栈，确保系统的高可用性、弹性伸缩和安全合规。" },
      ],
    },
    products: {
      title: "核心产品",
      subtitle: "已验证的行业解决方案",
      items: [
        { title: "公司秘书管理平台", desc: "一站式公司秘书事务管理，包括公司注册、年审、变更等全生命周期管理。", tag: "企业管理" },
        { title: "财务流程优化系统", desc: "自动化财务流程，从账单处理到合规报告，大幅降低人工操作成本。", tag: "流程优化" },
        { title: "保险销售赋能工具", desc: "为保险销售团队提供智能化的客户管理、产品推荐和业绩追踪工具。", tag: "销售赋能" },
        { title: "互动娱乐应用", desc: "创新型互动娱乐产品，将游戏化元素融入金融教育和用户参与。", tag: "用户参与" },
      ],
    },
    contact: {
      title: "联系我们",
      subtitle: "期待与您合作",
      email: "联系邮箱",
      location: "公司地址",
      locationValue: "中国香港",
    },
    footer: {
      company: "星匠科技（香港）有限公司",
      rights: "版权所有",
    },
  },
  en: {
    nav: { about: "About", services: "Services", products: "Products", contact: "Contact" },
    hero: {
      tagline: "Empower Finance with Technology, Drive Efficiency through Innovation",
      title: "Starwrights Technology",
      subtitle: "FinTech-focused SaaS Solutions Provider",
      desc: "Full-stack digital services for securities firms, insurance companies, and asset managers",
      cta: "Learn More",
    },
    about: {
      title: "About Starwrights",
      p1: "Starwrights Technology (Hong Kong) Limited is a FinTech-focused SaaS solutions provider. We deliver full-stack digital services for financial institutions including securities firms, insurance companies, and asset managers.",
      p2: "Our offerings span enterprise management systems, intelligent mobile applications, and AI-powered tools — covering company secretarial platforms, financial workflow optimization, insurance sales enablement, and interactive entertainment applications.",
      p3: "Based in Hong Kong and serving the Greater Bay Area, we are committed to becoming the preferred technology partner for financial institutions' digital transformation.",
      stats: [
        { value: "FinTech", label: "Industry Focus" },
        { value: "Full-Stack", label: "Tech Capability" },
        { value: "GBA", label: "Market Depth" },
        { value: "AI-Powered", label: "Innovation" },
      ],
    },
    services: {
      title: "Core Services",
      subtitle: "End-to-end FinTech solutions",
      items: [
        { icon: "building", title: "Enterprise Systems", desc: "Custom management platforms for financial institutions, covering CRM, compliance, and business process automation." },
        { icon: "mobile", title: "Smart Mobile Apps", desc: "Mobile solutions for financial professionals and end-users, delivering secure, efficient, and intuitive experiences." },
        { icon: "brain", title: "AI-Powered Tools", desc: "Leveraging AI to optimize financial decision-making, boost operational efficiency, and reduce costs." },
        { icon: "cloud", title: "Cloud-Native Architecture", desc: "Built on cutting-edge cloud-native stack ensuring high availability, elastic scaling, and security compliance." },
      ],
    },
    products: {
      title: "Products",
      subtitle: "Proven industry solutions",
      items: [
        { title: "Company Secretary Platform", desc: "One-stop company secretarial management including registration, annual review, and lifecycle management.", tag: "Enterprise" },
        { title: "Financial Workflow System", desc: "Automated financial processes from billing to compliance reporting, significantly reducing manual costs.", tag: "Optimization" },
        { title: "Insurance Sales Enablement", desc: "Smart tools for insurance teams — client management, product recommendations, and performance tracking.", tag: "Sales" },
        { title: "Interactive Entertainment", desc: "Innovative products blending gamification with financial education and user engagement.", tag: "Engagement" },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's work together",
      email: "Email",
      location: "Location",
      locationValue: "Hong Kong, China",
    },
    footer: {
      company: "Starwrights Technology (Hong Kong) Limited",
      rights: "All rights reserved",
    },
  },
};

function Icon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    building: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
    mobile: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
    brain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>,
    cloud: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  };
  return <>{icons[name] || null}</>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Starwrights" className="h-8 w-8" />
            <span className="font-bold text-xl tracking-tight" style={{ color: "#295C8F" }}>
              {lang === "zh" ? "星匠科技" : "Starwrights"}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">{t.nav.about}</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition">{t.nav.services}</a>
            <a href="#products" className="text-gray-600 hover:text-gray-900 transition">{t.nav.products}</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">{t.nav.contact}</a>
            <button onClick={() => setLang(lang === "zh" ? "en" : "zh")} className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 text-xs font-medium hover:bg-gray-50 transition">
              <span style={{ opacity: lang === "en" ? 1 : 0.4 }}>EN</span>
              <span className="text-gray-300">|</span>
              <span style={{ opacity: lang === "zh" ? 1 : 0.4 }}>中文</span>
            </button>
          </div>
          <button onClick={() => setLang(lang === "zh" ? "en" : "zh")} className="md:hidden flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 text-xs font-medium">
            <span style={{ opacity: lang === "en" ? 1 : 0.4 }}>EN</span>
            <span className="text-gray-300">|</span>
            <span style={{ opacity: lang === "zh" ? 1 : 0.4 }}>中文</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-24 px-6" style={{ background: "linear-gradient(135deg, #f0f5ff 0%, #e8eeff 50%, #f5f0ff 100%)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-shrink-0">
            <img src="/logo-gradient.svg" alt="Starwrights" className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#295C8F" }}>{t.hero.tagline}</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4" style={{ color: "#111827" }}>{t.hero.title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">{t.hero.subtitle}</p>
            <p className="text-base text-gray-500 mb-10 max-w-2xl">{t.hero.desc}</p>
            <a href="#about" className="inline-block px-8 py-3 rounded-full text-white font-medium text-sm transition hover:opacity-90" style={{ background: "linear-gradient(135deg, #295C8F, #7c3aed)" }}>
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed">{t.about.p1}</p>
              <p className="text-gray-600 leading-relaxed">{t.about.p2}</p>
              <p className="text-gray-600 leading-relaxed">{t.about.p3}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {t.about.stats.map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-xl font-bold mb-1" style={{ color: "#295C8F" }}>{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.services.title}</h2>
            <p className="text-gray-500">{t.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="mb-5" style={{ color: "#295C8F" }}><Icon name={item.icon} /></div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.products.title}</h2>
            <p className="text-gray-500">{t.products.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.products.items.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8 hover:border-blue-200 transition">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: "#eef2ff", color: "#295C8F" }}>{item.tag}</span>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6" style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t.contact.title}</h2>
          <p className="text-gray-400 mb-12">{t.contact.subtitle}</p>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div>
              <div className="text-sm text-gray-400 mb-1">{t.contact.email}</div>
              <div className="text-white font-medium">contact@starwrights.ai</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">{t.contact.location}</div>
              <div className="text-white font-medium">{t.contact.locationValue}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-950 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {t.footer.company}. {t.footer.rights}.
        </p>
      </footer>
    </div>
  );
}
