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
    <section className="bg-gradient-to-r from-yellow-300 to-yellow-200 border border-yellow-400 rounded-2xl overflow-hidden shadow-xl shadow-yellow-500/10 mt-8 relative">
      <div className="p-5 sm:p-6 border-b border-yellow-400/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-green-600 hover:bg-green-700 transition shadow-lg whitespace-nowrap"
        >
          Ver Loja Completa
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <h3 className="text-sm font-bold text-slate-900 mb-1">{prod.name}</h3>
            <p className="text-xs text-slate-600">{prod.desc}</p>
          </a>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-100/50 p-4 border-t border-yellow-400/30">
        <p className="text-xs text-yellow-800 text-center font-medium opacity-80">
          Nossa plataforma faz sugestões de modelos de equipamentos e acessórios encontrados em lojas online mas não se responsabiliza pela venda, envio e entrega, nem eventuais danos aos equipamentos, trata-se apenas de uma parceria de acordo publicitário.
        </p>
      </div>
    </section>
  );
};
