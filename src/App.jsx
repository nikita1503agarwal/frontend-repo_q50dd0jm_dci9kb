import React, { useEffect } from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Services, Process, TestimonialsPricingFAQ } from './components/Sections';

const App = () => {
  useEffect(() => {
    // Basic SEO
    document.title = 'Nexora App — Jasa Pembuat Aplikasi AI Cepat, Aman, dan Skalabel';
    const meta = [
      { name: 'description', content: 'Nexora App membantu B2B & UMKM membangun aplikasi AI end-to-end: ideasi hingga deploy. Fokus hasil dan metrik. Konsultasi gratis.' },
      { property: 'og:title', content: 'Nexora App — Jasa Pembuat Aplikasi AI' },
      { property: 'og:description', content: 'Bangun aplikasi AI lebih cepat. Integrasi LLM, Vision, Speech, RAG. UI/UX premium.' },
      { property: 'og:image', content: '/assets/og.png' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Nexora App — Jasa Pembuat Aplikasi AI' },
      { name: 'twitter:description', content: 'Partner pembuatan aplikasi AI modern dan aman.' },
    ];
    meta.forEach((m) => {
      const tag = document.createElement('meta');
      Object.entries(m).forEach(([k, v]) => tag.setAttribute(k, v));
      document.head.appendChild(tag);
    });

    // Schema.org JSON-LD
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Nexora App',
      url: window.location.origin,
      logo: '/assets/logo.png',
      sameAs: ['https://www.linkedin.com/', 'https://twitter.com/'],
    };
    const product = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Jasa Pembuatan Aplikasi AI',
      brand: 'Nexora App',
      description: 'Layanan pembuatan aplikasi AI end-to-end untuk B2B & UMKM teknologi.',
    };
    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Berapa estimasi waktu pengembangan?', acceptedAnswer: { '@type': 'Answer', text: 'Umumnya 4–8 minggu untuk MVP tergantung kompleksitas.' } },
        { '@type': 'Question', name: 'Bagaimana keamanan data kami?', acceptedAnswer: { '@type': 'Answer', text: 'Praktik terbaik ISO 27001, enkripsi in-transit, RBAC.' } },
      ],
    };
    const scripts = [schema, product, faq].map((obj) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(obj);
      return s;
    });
    scripts.forEach((s) => document.head.appendChild(s));

    // Google Analytics placeholder
    const ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
    const gaInit = document.createElement('script');
    gaInit.text = "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-XXXXXXX');";
    document.head.appendChild(ga);
    document.head.appendChild(gaInit);

    return () => {
      // Cleanup dynamically added tags on unmount
      meta.forEach(() => document.head.querySelector('meta:last-child')?.remove());
      scripts.forEach(() => document.head.querySelector('script[type="application/ld+json"]')?.remove());
      ga.remove();
      gaInit.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
      {/* Skip link and basic a11y */}
      <a href="#main" className="absolute left-2 top-2 -translate-y-20 rounded bg-cyan-400 px-3 py-2 text-slate-900 focus:translate-y-0">Lewati ke konten</a>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500" />
            <span className="text-sm font-bold">Nexora App</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 dark:text-slate-300 md:flex">
            <a href="#value" className="hover:text-slate-900 dark:hover:text-white">Nilai</a>
            <a href="#services" className="hover:text-slate-900 dark:hover:text-white">Layanan</a>
            <a href="#portfolio" className="hover:text-slate-900 dark:hover:text-white">Portofolio</a>
            <a href="#process" className="hover:text-slate-900 dark:hover:text-white">Proses</a>
            <a href="#contact" className="rounded-xl bg-slate-900 px-3 py-1.5 font-semibold text-white hover:opacity-90 dark:bg-white dark:text-slate-900">Konsultasi</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <Hero />
        <ValueProps />
        <Services />
        <Portfolio />
        <Process />
        <TestimonialsPricingFAQ />
        <Contact />
      </main>

      <footer className="border-t border-slate-200/70 bg-white py-10 text-sm text-slate-600 dark:border-slate-800/60 dark:bg-slate-950 dark:text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500" />
              <span className="font-bold text-slate-900 dark:text-slate-50">Nexora App</span>
            </div>
            <p className="mt-3">Partner pembuatan aplikasi AI. Fokus hasil & metrik.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-slate-100">Navigasi</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#services">Layanan</a></li>
              <li><a href="#portfolio">Portofolio</a></li>
              <li><a href="#process">Proses</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-slate-100">Legal</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Syarat Layanan</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-slate-100">Sosial</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Nexora App. Semua hak cipta dilindungi.
        </div>
      </footer>
    </div>
  );
};

export default App;
