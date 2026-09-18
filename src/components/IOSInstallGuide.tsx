import React from 'react';
import { X, Share, PlusSquare, Sparkles } from 'lucide-react';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#0b1626] border border-amber-800/80 rounded-2xl w-full max-w-md p-5 sm:p-6 shadow-2xl shadow-amber-950/50 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-amber-950 mb-4">
          <div className="flex items-center gap-2 text-amber-500">
            <Sparkles className="w-4 h-4" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              Instalar no iPhone / iPad
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
          No iOS (Safari), os PWAs são adicionados como aplicativos nativos em 2 toques:
        </p>

        <div className="space-y-3 mb-5">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#07111e] border border-amber-950">
            <div className="w-7 h-7 rounded-lg bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-500 flex-shrink-0">
              <Share className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-xs text-white block">1. Toque no botão Compartilhar</strong>
              <span className="text-[11px] text-slate-400">
                Na barra inferior do Safari (ícone com uma seta apontando para cima).
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-[#07111e] border border-amber-950">
            <div className="w-7 h-7 rounded-lg bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-500 flex-shrink-0">
              <PlusSquare className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-xs text-white block">2. Selecione "Adicionar à Tela de Início"</strong>
              <span className="text-[11px] text-slate-400">
                Role o menu para baixo e toque em Adicionar à Tela de Início (+).
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-blue-600 hover:from-amber-500 hover:to-blue-500 border border-amber-500/40 shadow-lg shadow-amber-500/20 transition"
        >
          Entendi, fechar
        </button>
      </div>
    </div>
  );
};
