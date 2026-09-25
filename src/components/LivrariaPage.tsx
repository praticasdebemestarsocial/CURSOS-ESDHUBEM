import React from 'react';
import { ArrowLeft, BookOpen, ShoppingCart, Info, Award } from 'lucide-react';

interface LivrariaPageProps {
  onBackToHome: () => void;
}

export const LivrariaPage: React.FC<LivrariaPageProps> = ({ onBackToHome }) => {
  // Temporary mock data for the bookstore
  const mockBooks = [
    {
      id: 'livro-1',
      title: 'Comunicação Assertiva Corporativa',
      author: 'Silviane Silvério',
      type: 'eBook',
      price: 'R$ 47,90',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'livro-2',
      title: 'Guia Prático de Desenvolvimento Pessoal',
      author: 'Silviane Silvério',
      type: 'Apostila',
      price: 'R$ 29,90',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'livro-3',
      title: 'Liderança e Ética (Edição Impressa)',
      author: 'Silviane Silvério',
      type: 'Livro Físico',
      price: 'R$ 89,90',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-16">
      {/* Header */}
      <div className="bg-[#182333] pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors text-sm font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Início</span>
          </button>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC72C] text-xs font-bold tracking-wide mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Loja Oficial</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                Livraria & <span className="text-[#FFC72C]">Materiais</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                Adquira nossos livros físicos, apostilas de estudo e eBooks focados em desenvolvimento e aceleração de carreira.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-white font-bold">Materiais Oficiais</p>
                <p className="text-sm text-slate-300">Conteúdos originais</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 shadow-lg shadow-amber-500/5 mb-8">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 font-medium leading-relaxed">
            Esta página da Livraria é uma <strong>versão demonstrativa</strong>. Em breve, você poderá finalizar a compra dos livros reais diretamente por aqui usando o sistema seguro de checkout!
          </p>
        </div>

        {/* Bookstore Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mockBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all group flex flex-col">
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur border border-white px-3 py-1.5 rounded-full text-xs font-bold text-[#182333] shadow-sm">
                  {book.type}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-slate-500 font-medium mb-1">Por {book.author}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 leading-snug">
                  {book.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-black text-emerald-600">{book.price}</span>
                  
                  <button className="w-10 h-10 rounded-xl bg-[#243042] text-white flex items-center justify-center hover:bg-[#182333] hover:scale-105 transition-all cursor-pointer shadow-md">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
