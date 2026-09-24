import React from 'react';
import { ShieldCheck, Download, Code2, Sparkles, CheckCircle2, GraduationCap } from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalLessons: number;
  onInstallPWA: () => void;
  isInstallable: boolean;
  isIOS: boolean;
  onShowIOSGuide: () => void;
  onOpenCertificateModal?: () => void;
  onOpenStudentPortal?: () => void;
  currentView?: 'course' | 'student-portal';
}

export const Header: React.FC<HeaderProps> = ({
  completedCount,
  totalLessons,
  onInstallPWA,
  isInstallable,
  isIOS,
  onShowIOSGuide,
  onOpenCertificateModal,
  onOpenStudentPortal,
  currentView = 'course'
}) => {
  const percentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <header className="sticky top-0 z-40 bg-[#182333] text-white border-b border-slate-700/80 shadow-lg shadow-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        
        {/* Brand with Seal Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={`${import.meta.env.BASE_URL}logo-cursos.png`} 
            alt="ESDHUBEM Logo" 
            className="h-11 w-11 object-contain rounded-full shadow-md border border-[#FFC72C]/40 bg-slate-900"
          />
          <div>
            <h1 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight">
              ESDHUBEM
            </h1>
            <p className="text-[11px] text-slate-400 font-medium">
              Cursos, Formações e Treinamentos
            </p>
          </div>
        </div>

        {/* Action Controls Header */}
        <div className="flex items-center flex-wrap gap-3">
          
          {/* Validar Código de Certificado (Substituindo o antigo Progresso do topo) */}
          <button
            onClick={onOpenCertificateModal}
            className="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-[#FFC72C]/50 px-3.5 py-1.5 rounded-xl transition cursor-pointer text-xs shadow-xs"
            title="Consultar Validade do Certificado ESDHUBEM"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="text-left">
              <span className="block text-[#FFC72C] font-extrabold text-xs leading-none">
                Validar Código de Certificado
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Carga horária averbada ao completar 100% das aulas
              </span>
            </div>
          </button>

          {/* Botão Sala de Aula Virtual / Portal do Aluno */}
          {onOpenStudentPortal && (
            <button
              onClick={onOpenStudentPortal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-950 bg-[#FFC72C] hover:bg-amber-400 border border-amber-500/40 shadow-sm transition active:scale-95 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-slate-950" />
              <span>{currentView === 'student-portal' ? 'Curso Principal' : 'Sala de Aula Virtual'}</span>
            </button>
          )}

          {/* Botão de Certificado (Só aparece em 100%) */}
          {percentage === 100 && (
            <button
              onClick={onOpenCertificateModal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)] animate-bounce transition-all cursor-pointer"
            >
              🎓 Solicitar Certificado
            </button>
          )}

          {/* PWA Install Button (Chromium/Android or iOS) */}
          {isInstallable && (
            <button
              onClick={onInstallPWA}
              id="btn-install-pwa"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-950 bg-[#FFC72C] hover:bg-amber-400 border border-yellow-300/40 shadow-lg shadow-yellow-500/20 transition active:scale-95 animate-pulse cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Instalar App
            </button>
          )}

          {isIOS && (
            <button
              onClick={onShowIOSGuide}
              id="btn-install-ios"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-sky-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
              Instalar no iPhone
            </button>
          )}

        </div>
      </div>
    </header>
  );
};
