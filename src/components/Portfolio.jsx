import React from 'react';
import { ExternalLink } from 'lucide-react';

const cases = [
  {
    title: 'Voice Assist Sales Copilot',
    summary: 'UMKM e-commerce mengalami konversi chat rendah. Kami merancang voice copilot berbasis LLM yang memahami katalog dan histori pelanggan.',
    result: 'Hasil: +27% konversi, -35% waktu respon, CSAT naik 0.6 poin dalam 8 minggu.',
    stack: 'LLM, RAG, Whisper, Next.js, FastAPI, Pinecone',
    images: ['/assets/case1-1.png', '/assets/case1-2.png', '/assets/case1-3.png']
  },
  {
    title: 'Vision QC Inspector',
    summary: 'Perusahaan manufaktur butuh inspeksi visual cepat. Sistem vision kami mendeteksi cacat dengan akurasi tinggi dan dashboard real-time.',
    result: 'Hasil: -42% cacat lolos, -18% downtime, ROI tercapai di bulan ke-3.',
    stack: 'YOLOv8, FastAPI, React, Edge GPU',
    images: ['/assets/case2.png']
  },
  {
    title: 'RAG Knowledge Portal',
    summary: 'Startup SaaS perlu pencarian dokumen cerdas. Portal RAG memungkinkan tim menemukan jawaban kontekstual dari ribuan file.',
    result: 'Hasil: -55% waktu pencarian, produktivitas support naik 2.1x.',
    stack: 'OpenAI, LangChain, Postgres, S3',
    images: ['/assets/case3.png']
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Portofolio & Studi Kasus</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Contoh pekerjaan kami dengan fokus pada hasil terukur dan dampak bisnis.</p>
        </div>
        <a href="#contact" className="hidden rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 dark:bg-white dark:text-slate-900 md:inline-block">Diskusikan Proyek</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <article key={c.title} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
              <img src={c.images[0]} alt={`${c.title} screenshot`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{c.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.summary}</p>
            <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-200">{c.result}</p>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
              <span>Stack: {c.stack}</span>
              <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-1.5 font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                Detail <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Full case study */}
      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Studi Kasus: Voice Assist Sales Copilot</h3>
        <p className="mt-3 text-slate-700 dark:text-slate-300">
          Sebelum: tim penjualan UMKM e-commerce kesulitan menangani chat masuk saat jam sibuk. Waktu respon lama, informasi produk tercecer, dan peluang upsell terlewat. Kami melakukan discovery singkat, memetakan intent utama pelanggan, serta mengindeks katalog dan FAQ. Solusi: voice & chat copilot berbasis LLM dengan RAG, terhubung ke CRM dan WhatsApp API. Antarmuka memandu agen dengan saran jawaban, ringkas percakapan, dan rekomendasi produk otomatis. Setelah implementasi dan pelatihan 2 minggu, metrik inti membaik: konversi naik 27%, waktu respon turun 35%, dan CSAT meningkat 0,6 poin. Sistem berjalan di infrastruktur cloud dengan observabilitas, backup, serta kebijakan keamanan sesuai praktik terbaik.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <img src="/assets/case1-1.png" alt="Voice copilot dashboard" className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/assets/case1-2.png" alt="Knowledge base RAG" className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/assets/case1-3.png" alt="WhatsApp integration" className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
