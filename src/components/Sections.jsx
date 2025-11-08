import React from 'react';
import { Check, Wand2, Laptop, Cog, Boxes, Layout, Server } from 'lucide-react';

export const Services = () => {
  const services = [
    { icon: Laptop, title: 'Custom App AI (Web/Mobile)', desc: 'Produk end-to-end dari ide hingga rilis, performa dan kualitas produksi.' },
    { icon: Wand2, title: 'Integrasi LLM, Vision, Speech, RAG', desc: 'Solusi AI yang menyatu dengan proses bisnis Anda.' },
    { icon: Boxes, title: 'Automation & Workflow (n8n/Make/Zapier)', desc: 'Automasi proses rutin, integrasi antarsistem yang andal.' },
    { icon: Layout, title: 'UI/UX & Prototyping', desc: 'Desain berfokus outcome, cepat divalidasi bersama pengguna.' },
    { icon: Server, title: 'DevOps & Cloud (Docker, Kubernetes, VPS)', desc: 'Pipelines aman, skalabel, dan hemat biaya.' },
  ];
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-50">Layanan</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
              <s.icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Process = () => {
  const steps = [
    { title: 'Discover', desc: 'Workshop tujuan, risiko, dan metrik. Output: problem statement & scope awal.', time: '1–3 hari' },
    { title: 'Design', desc: 'Arsitektur, prototipe, dan spesifikasi. Output: desain & backlog.', time: '3–7 hari' },
    { title: 'Build', desc: 'Implementasi iteratif, QA, dan demo mingguan.', time: '2–6 minggu' },
    { title: 'Integrate', desc: 'Hubungkan model & sistem eksternal. UAT & hardening.', time: '3–7 hari' },
    { title: 'Launch', desc: 'Deploy, observabilitas, dan handover. Garansi bug.', time: '1–3 hari' },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-50">Proses Kerja</h2>
      <ol className="grid gap-6 md:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="text-sm font-medium text-cyan-600 dark:text-cyan-300">Step {i + 1} · {s.time}</div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
        Deliverables mencakup: dokumen arsitektur, prototipe klik, backlog, kode sumber, infrastruktur, dan runbook operasional.
      </div>
    </section>
  );
};

export const TestimonialsPricingFAQ = () => {
  const testimonials = [
    { name: 'Ardi Pratama', role: 'Founder, E-Comm UMKM', quote: 'Tim Nexora menyederhanakan ide kami dan mengeksekusi cepat. Hasilnya nyata, konversi naik signifikan.' },
    { name: 'Nadia Putri', role: 'COO, SaaS Startup', quote: 'Implementasi RAG membuat tim support 2x lebih produktif. Implementasi rapi dan aman.' },
  ];
  const logos = ['logo1', 'logo2', 'logo3', 'logo4'];
  const plans = [
    { name: 'Starter (MVP)', price: 'Mulai 60jt', features: ['MVP 1–2 modul', 'Integrasi AI dasar', 'SLA 8×5', 'Garansi bug 30 hari'] },
    { name: 'Growth (Scaling)', price: 'Mulai 120jt', features: ['2–4 modul', 'Integrasi AI lanjutan', 'Observabilitas', 'SLA 12×5'] },
    { name: 'Enterprise (Custom)', price: 'Hubungi kami', features: ['Kebutuhan khusus', 'Kepatuhan & NDA', 'High-availability', 'SLA 24×7'] },
  ];

  const faqs = [
    { q: 'Berapa estimasi waktu pengembangan?', a: 'Umumnya 4–8 minggu untuk MVP tergantung kompleksitas. Kami bekerja iteratif dengan demo berkala.' },
    { q: 'Bagaimana keamanan data kami?', a: 'Kami mengikuti praktik terbaik ISO 27001, enkripsi in-transit, dan pembatasan akses berbasis peran.' },
    { q: 'Bagaimana soal hak cipta?', a: 'Kode sumber dan aset yang dikerjakan untuk Anda menjadi milik Anda sesuai perjanjian.' },
    { q: 'Apakah ada maintenance?', a: 'Kami menyediakan paket maintenance opsional termasuk update keamanan dan monitoring.' },
    { q: 'Apakah ada garansi bug?', a: 'Ya, garansi perbaikan bug 30 hari setelah rilis produksi.' },
    { q: 'Bisakah tanda tangan NDA?', a: 'Tentu. NDA tersedia sebelum diskusi teknis mendalam.' },
    { q: 'Apakah dukungan DevOps tersedia?', a: 'Ya, kami menyiapkan CI/CD, observabilitas, dan otomatisasi infrastruktur.' },
    { q: 'Apakah bisa on-premise?', a: 'Bisa, sesuai kebutuhan kepatuhan dan infrastruktur Anda.' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Testimonials */}
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-50">Testimoni & Klien</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-slate-700 dark:text-slate-300">“{t.quote}”</p>
            <footer className="mt-3 text-sm font-medium text-slate-900 dark:text-slate-200">{t.name} · {t.role}</footer>
          </blockquote>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {logos.map((l, i) => (
          <div key={i} className="flex h-16 items-center justify-center rounded-2xl border border-dashed border-slate-300 text-slate-400 dark:border-slate-700">Logo</div>
        ))}
      </div>

      {/* Pricing */}
      <h2 className="mt-14 mb-6 text-2xl font-bold text-slate-900 dark:text-slate-50">Pricing</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="text-sm font-medium text-cyan-600 dark:text-cyan-300">{p.name}</div>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-500" aria-hidden /> {f}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 font-semibold text-white hover:opacity-90 dark:bg-white dark:text-slate-900">Pilih Paket</a>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="mt-14 mb-6 text-2xl font-bold text-slate-900 dark:text-slate-50">FAQ</h2>
      <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
        {faqs.map((f, i) => (
          <details key={f.q} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-medium text-slate-900 marker:hidden dark:text-slate-100">
              {f.q}
              <span className="ml-4 text-cyan-600 group-open:hidden">+</span>
              <span className="ml-4 hidden text-cyan-600 group-open:inline">−</span>
            </summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};
