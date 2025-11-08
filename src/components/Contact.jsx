import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Jadwalkan Konsultasi 30 Menit</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Isi formulir singkat di bawah. Kami akan menghubungi Anda dalam 1×24 jam kerja. NDA tersedia atas permintaan.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Nama</label>
              <input id="name" name="name" type="text" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="Nama lengkap" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input id="email" name="email" type="email" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="email@perusahaan.com" required />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Perusahaan</label>
              <input id="company" name="company" type="text" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="Nama perusahaan" />
            </div>
            <div>
              <label htmlFor="needs" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Kebutuhan</label>
              <select id="needs" name="needs" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
                <option>Custom App AI</option>
                <option>Integrasi LLM/Vision/Speech/RAG</option>
                <option>Automation & Workflow</option>
                <option>UI/UX & Prototyping</option>
                <option>DevOps & Cloud</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Ringkas kebutuhan Anda</label>
              <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="Masalah yang ingin diselesaikan, target metrik, timeline" />
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">Keamanan: data terenkripsi in-transit, mengikuti best-practice ISO 27001. NDA & SOW tersedia.</p>
          <button type="submit" className="mt-6 w-full rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 transition hover:brightness-95">Kirim</button>
        </form>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Kontak</h3>
          <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3"><Mail className="h-5 w-5" aria-hidden /> hello@nexora.app</li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5" aria-hidden /> +62 812-0000-0000</li>
            <li>Lokasi: Indonesia</li>
          </ul>
          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Kami melayani B2B & UMKM teknologi. Garansi bug 30 hari, maintenance opsional, dan dukungan SLA sesuai paket.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
