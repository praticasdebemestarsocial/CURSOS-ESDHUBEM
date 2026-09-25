import React from 'react';
import { Library, ArrowRight } from 'lucide-react';

interface BookstoreBannerProps {
  onNavigate: () => void;
}

export const BookstoreBanner: React.FC<BookstoreBannerProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl flex flex-col items-center cursor-pointer group h-full" onClick={onNavigate}>
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1200&q=80" 
          alt="Livraria e Materiais" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#182333]/90 via-[#182333]/80 to-[#182333]/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10 flex-1 text-left flex flex-col justify-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC72C] text-xs font-bold tracking-wide mb-4 w-fit">
          <Library className="w-4 h-4" />
          <span>Livros, Apostilas e eBooks</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Nossa <span className="text-[#FFC72C]">Livraria</span>
        </h2>
        
        <p className="text-slate-300 text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
          Materiais complementares exclusivos de alto nível para acelerar o seu aprendizado e transformar sua carreira.
        </p>
        
        <div className="inline-flex items-center gap-2 text-white font-bold group-hover:text-[#FFC72C] transition-colors mt-auto">
          <span>Acessar a Livraria</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
