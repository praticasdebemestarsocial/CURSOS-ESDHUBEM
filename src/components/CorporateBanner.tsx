import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';

interface CorporateBannerProps {
  onNavigate: () => void;
}

export const CorporateBanner: React.FC<CorporateBannerProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl flex flex-col items-center cursor-pointer group h-full" onClick={onNavigate}>
      {/* Background Image / Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Treinamento Corporativo" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#182333]/90 via-[#182333]/80 to-[#182333]/40"></div>
          </div>
          
      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10 flex-1 text-left flex flex-col justify-center w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC72C] text-xs font-bold tracking-wide mb-4 w-fit">
              <Building2 className="w-4 h-4" />
              <span>Para o Setor Corporativo</span>
            </div>
            
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Treinamento em <span className="text-[#FFC72C]">Empresas</span>
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              Capacite sua equipe com cursos especializados e trilhas de desenvolvimento focadas em resultados reais e aumento de produtividade.
            </p>
            
        <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-[#FFC72C] transition-colors mt-auto">
          <span>Conheça as Soluções</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
