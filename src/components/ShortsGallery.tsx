import React from 'react';
import { PlayCircle } from 'lucide-react';

interface Short {
  title: string;
  src: string;
}

interface ShortsGalleryProps {
  shorts?: Short[];
}

export const ShortsGallery: React.FC<ShortsGalleryProps> = ({ shorts }) => {
  if (!shorts || shorts.length === 0) return null;

  return (
    <section className="bg-white border-2 border-red-500/20 rounded-2xl p-6 shadow-sm relative overflow-hidden">
      {/* Decoração vermelha sutil para destacar conforme pedido */}
      <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
      
      <div className="flex items-center gap-2 mb-2 pl-4">
        <PlayCircle className="w-5 h-5 text-red-500" />
        <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Pílulas do Conhecimento</h2>
      </div>
      <p className="text-sm text-slate-600 mb-6 pl-4">
        Explicações rápidas e diretas sobre os principais conceitos abordados no vídeo maior.
      </p>

      <div className="flex gap-4 overflow-x-auto pb-4 pl-4 custom-scrollbar snap-x">
        {shorts.map((short, idx) => (
          <div key={idx} className="flex-shrink-0 w-[240px] h-[426px] bg-slate-900 rounded-xl overflow-hidden relative shadow-lg snap-center border border-slate-200 group">
            <iframe 
              src={short.src} 
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy"
            />
            <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-semibold leading-tight drop-shadow-md">{short.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
