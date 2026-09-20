import React from 'react';
import { ShoppingBag, ExternalLink, Laptop, Headphones, Watch, Smartphone } from 'lucide-react';

export const AffiliateShowcase: React.FC = () => {
  const affiliateLink = "https://collshp.com/tuttibella/category/4266503?view=storefront";

  const products = [
    {
      name: "Notebooks de Alta Performance",
      desc: "Produtividade sem travamentos",
      icon: <Laptop className="w-8 h-8 text-yellow-600 mb-3" />
    },
    {
      name: "Smartphones Corporativos",
      desc: "Comunicação ágil em qualquer lugar",
      icon: <Smartphone className="w-8 h-8 text-yellow-600 mb-3" />
    },
    {
      name: "Fones Antirruído",
      desc: "Foco total nas suas reuniões",
      icon: <Headphones className="w-8 h-8 text-yellow-600 mb-3" />
    },
    {
      name: "Smartwatches",
      desc: "Gestão de tempo no pulso",
      icon: <Watch className="w-8 h-8 text-yellow-600 mb-3" />
    }
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-300 to-yellow-200 border border-yellow-400 rounded-2xl overflow-hidden shadow-xl shadow-yellow-500/10 m-4 relative flex-shrink-0">
      <div className="p-4 border-b border-yellow-400/30 flex flex-col gap-3">
        <div>
          <div className="flex items-center gap-2 text-slate-800 text-xs font-bold uppercase tracking-wider mb-1">
            <ShoppingBag className="w-3.5 h-3.5" />
            Recomendações do Especialista
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Equipamentos para Alta Performance
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 mt-0.5 font-medium">
            Acessórios e tecnologias selecionadas para otimizar sua rotina de estudos e trabalho.
          </p>
        </div>
        
        <a 
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-green-600 hover:bg-green-700 transition shadow-lg whitespace-nowrap self-start w-full sm:w-auto"
        >
          Ver Loja Completa
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="p-4 grid grid-cols-2 gap-2">
        {products.map((prod, idx) => (
          <a
            key={idx}
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-4 rounded-xl border border-yellow-200 bg-white hover:bg-slate-50 hover:border-yellow-400 transition cursor-pointer group shadow-sm hover:shadow-md"
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {prod.icon}
            </div>
            <h3 className="text-[10px] leading-tight font-bold text-slate-900 mb-0.5">{prod.name}</h3>
            <p className="text-[9px] leading-tight text-slate-600">{prod.desc}</p>
          </a>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-100/50 p-3 border-t border-yellow-400/30">
        <p className="text-[9px] leading-tight text-yellow-800 text-center font-medium opacity-80">
          Nossa plataforma faz sugestões de modelos de equipamentos e acessórios encontrados em lojas online mas não se responsabiliza pela venda, envio e entrega, nem eventuais danos aos equipamentos, trata-se apenas de uma parceria de acordo publicitário.
        </p>
      </div>
    </section>
  );
};
