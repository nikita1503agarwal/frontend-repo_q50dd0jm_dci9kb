import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section aria-label="Nexora App Hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 sm:pt-24 lg:flex lg:items-center lg:gap-10 lg:pt-28 lg:pb-16">
        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100/70 px-3 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
            Trusted by founders & UMKM digital
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50">
            Bangun Aplikasi AI Anda, Lebih Cepat dengan
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent"> Nexora App</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Jasa pembuatan aplikasi berbasis AI: ideasi, desain, pengembangan, integrasi model, hingga deploy.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-400/30 transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:ring-offset-slate-900"
            >
              <Rocket className="mr-2 h-5 w-5" aria-hidden="true" />
              Konsultasi Gratis
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <PlayCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Lihat Portofolio
            </a>
          </div>
        </div>

        <div className="relative mt-10 h-[420px] w-full flex-1 rounded-3xl bg-slate-50 ring-1 ring-inset ring-slate-200 shadow-xl dark:bg-slate-900 dark:ring-slate-800 lg:mt-0 lg:h-[520px]">
          {/* Spline 3D animation */}
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* soft gradient overlay (non-blocking) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/30 via-transparent to-cyan-200/20 dark:from-slate-950/40 dark:via-transparent dark:to-cyan-500/10"
          />
        </div>
      </div>

      {/* subtle particles/auras */}
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/10" />
    </section>
  );
};

export default Hero;
