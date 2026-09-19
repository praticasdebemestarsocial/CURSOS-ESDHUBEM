import React from 'react';
import { ShieldCheck, Download, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalLessons: number;
  onInstallPWA: () => void;
  isInstallable: boolean;
  isIOS: boolean;
  onShowIOSGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  completedCount,
  totalLessons,
  onInstallPWA,
  isInstallable,
  isIOS,
  onShowIOSGuide
}) => {
  const percentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <header className="sticky top-0 z-40 bg-slate-50/90 backdrop-blur-xl border-b border-yellow-200 shadow-lg shadow-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img 
            src={`${import.meta.env.BASE_URL}logo-cursos.png`} 
            alt="ESDHUBEM Logo" 
            className="h-10 w-auto object-contain"
          />
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
              Comunicação Assertiva com a Liderança
            </h1>
          </div>
        </div>

        {/* Global Progress & Action Controls */}
        <div className="flex items-center flex-wrap gap-3">
          
          {/* Progress Bar Widget */}
          <div className="bg-white border border-yellow-200 rounded-xl px-3.5 py-1.5 flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-800">
                {completedCount} de {totalLessons} aulas
              </div>
              <div className="text-[11px] text-slate-600">Progresso do curso</div>
            </div>
            <div className="w-24 sm:w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-yellow-100 p-[1px]">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-yellow-600 min-w-[34px]">
              {percentage}%
            </span>
          </div>

          {/* PWA Install Button (Chromium/Android or iOS) */}
          {isInstallable && (
            <button
              onClick={onInstallPWA}
              id="btn-install-pwa"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-900 bg-gradient-to-r from-yellow-500 to-blue-600 hover:from-yellow-400 hover:to-blue-500 border border-yellow-300/40 shadow-lg shadow-yellow-500/20 transition active:scale-95 animate-pulse"
            >
              <Download className="w-3.5 h-3.5" />
              Instalar App
            </button>
          )}

          {isIOS && (
            <button
              onClick={onShowIOSGuide}
              id="btn-install-ios"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-sky-200 bg-yellow-100/60 hover:bg-yellow-900/60 border border-yellow-700/50 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
              Instalar no iPhone
            </button>
          )}

        </div>
      </div>
    </header>
  );
};
