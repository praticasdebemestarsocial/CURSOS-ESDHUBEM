import React from 'react';
import { Sparkles, BookOpen, ShieldCheck, Award, Building2 } from 'lucide-react';

interface HeroProps {
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="inicio" className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80"
            alt="Pessoas em desenvolvimento humano"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Overlay to make text readable */}
          <div className="absolute inset-0 bg-[#182333]/70" />
        </div>

        {/* Content over image */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mb-20 sm:mb-32">
          <div className="max-w-3xl space-y-6 flex flex-col items-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg">
              <Sparkles className="w-4 h-4 text-[#FFC72C]" />
              <span>Cursos Online ESDHUBEM</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] flex flex-col items-center">
              <span>Encontre o seu</span>
              <span className="text-[#FFC72C] text-[1.75rem] sm:text-4xl lg:text-5xl whitespace-normal sm:whitespace-nowrap mt-2">
                treinamento e desenvolvimento.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              Cursos que você precisa para aprender Desenvolvimento Pessoal, Humano, Profissional, Ético e Relacional.
            </p>
          </div>
        </div>
      </div>

      {/* Trust highlights Strip below the banner */}
      <div className="bg-white border-b border-slate-200 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-y-8 lg:gap-4">
            
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#243042] shrink-0 shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#182333]">100% Online</h4>
                <p className="text-sm text-slate-500">Estude no seu ritmo</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-center gap-4 sm:border-l border-slate-200 sm:pl-6 lg:pl-4 pt-6 sm:pt-0 border-t sm:border-t-0">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#182333]">Certificado Livre</h4>
                <p className="text-xs text-slate-500 leading-tight">Válido p/ horas complementares*</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-center gap-4 lg:border-l border-slate-200 lg:pl-4 pt-6 sm:pt-0 border-t sm:border-t-0">
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-amber-500 shrink-0 shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#182333]">Aulas Gratuitas</h4>
                <p className="text-xs text-slate-500 leading-tight">Taxa opcional p/ certificado</p>
              </div>
            </div>

            <div 
              onClick={() => onSelectCategory('treinamentos-palestras-corporativas')}
              className="flex items-center justify-center lg:justify-center gap-4 sm:border-l border-slate-200 sm:pl-6 lg:pl-4 pt-6 sm:pt-0 border-t sm:border-t-0 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#243042] flex items-center justify-center text-[#FFC72C] shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#182333] group-hover:text-amber-600 transition-colors">Nas Empresas</h4>
                <p className="text-xs text-slate-500 leading-tight">Treinamento Presencial</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
