import React from 'react';
import { Gauge, Brain, ShieldCheck, Paintbrush } from 'lucide-react';

const items = [
  {
    icon: Gauge,
    title: 'Cepat ke MVP',
    desc: 'Iterasi kilat dari ide ke MVP dalam hitungan minggu, bukan bulan. Fokus pada fitur bernilai bisnis.'
  },
  {
    icon: Brain,
    title: 'Integrasi AI End-to-End',
    desc: 'LLM, Vision, Speech, RAG—dirancang menyatu dengan arsitektur aplikasi Anda.'
  },
  {
    icon: ShieldCheck,
    title: 'Skalabel & Aman',
    desc: 'Arsitektur cloud-ready, praktik ISO dan enkripsi data. Monitoring & observabilitas siap.'
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Kelas Produk',
    desc: 'Desain modern, aksesibilitas WCAG AA, pengalaman mulus di web & mobile.'
  }
];

const ValueProps = () => {
  return (
    <section id="value" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Mengapa Nexora App</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Nilai yang kami hadirkan untuk mempercepat adopsi AI Anda.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
