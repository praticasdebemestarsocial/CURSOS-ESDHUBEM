import React from 'react';
import { ShieldCheck, Download, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalLessons: number;
  onOpenExportModal: () => void;
  onInstallPWA: () => void;
  isInstallable: boolean;
  isIOS: boolean;
  onShowIOSGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  completedCount,
  totalLessons,
  onOpenExportModal,
  onInstallPWA,
  isInstallable,
  isIOS,
  onShowIOSGuide
}) => {
  const percentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <header className="sticky top-0 z-40 bg-[#070d18]/90 backdrop-blur-xl border-b border-sky-950/60 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-500 p-0.5 shadow-md shadow-cyan-500/20 flex-shrink-0">
            <div className="w-full h-full bg-[#081222] rounded-[10px] flex items-center justify-center border border-cyan-400/30">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded-full">
                PWA Corporativo
              </span>
              <span className="text-[11px] text-slate-400 font-medium">EdTech Executiva</span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
              Comunicação Assertiva com a Liderança
            </h1>
          </div>
        </div>

        {/* Global Progress & Action Controls */}
        <div className="flex items-center flex-wrap gap-3">
          
          {/* Progress Bar Widget */}
          <div className="bg-[#0b172a] border border-sky-900/40 rounded-xl px-3.5 py-1.5 flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-200">
                {completedCount} de {totalLessons} aulas
              </div>
              <div className="text-[11px] text-slate-400">Progresso do curso</div>
            </div>
            <div className="w-24 sm:w-32 h-2.5 bg-slate-900 rounded-full overflow-hidden border border-sky-950 p-[1px]">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400 min-w-[34px]">
              {percentage}%
            </span>
          </div>

          {/* GitHub Pages Code Export Button */}
          <button
            onClick={onOpenExportModal}
            id="btn-export-code"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition shadow-sm active:scale-95"
            title="Ver e copiar os códigos de index.html, styles.css, app.js, manifest.json e sw.js para deploy no GitHub Pages"
          >
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Arquivos</span> GitHub Pages
          </button>

          {/* PWA Install Button (Chromium/Android or iOS) */}
          {isInstallable && (
            <button
              onClick={onInstallPWA}
              id="btn-install-pwa"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 border border-sky-300/40 shadow-lg shadow-sky-500/20 transition active:scale-95 animate-pulse"
            >
              <Download className="w-3.5 h-3.5" />
              Instalar App
            </button>
          )}

          {isIOS && (
            <button
              onClick={onShowIOSGuide}
              id="btn-install-ios"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-sky-200 bg-sky-950/60 hover:bg-sky-900/60 border border-sky-700/50 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Instalar no iPhone
            </button>
          )}

        </div>
      </div>
    </header>
  );
};
