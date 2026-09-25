import React from 'react';
import { ArrowLeft, Search, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';

interface BlogPageProps {
  onBackToHome: () => void;
  onNavigateToPost: (postId: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBackToHome, onNavigateToPost }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Imersivo */}
      <div className="bg-[#182333] pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -right-20 w-72 h-72 bg-[#FFC72C] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-500 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium mb-6 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Home
          </button>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Blog <span className="text-[#FFC72C]">ESDHUBEM</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Artigos, reflexões e conteúdos exclusivos sobre desenvolvimento humano, bem-estar e gestão.
          </p>

          {/* Barra de Pesquisa */}
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-[#FFC72C] transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#FFC72C] focus:bg-white/15 transition-all shadow-lg backdrop-blur-md"
              placeholder="Buscar artigos por título ou tema..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Grid de Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#182333] mb-2">Nenhum artigo encontrado</h3>
            <p className="text-slate-500">Tente buscar por outras palavras-chave.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full hover:-translate-y-1"
                onClick={() => onNavigateToPost(post.id)}
              >
                {/* Imagem do Card */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[#182333]/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#FFC72C] text-[#182333] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#182333] mb-3 group-hover:text-[#FFC72C] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-500" />
                      </div>
                      <span className="text-sm font-semibold text-[#182333]">{post.author}</span>
                    </div>
                    <button className="text-[#FFC72C] hover:text-amber-500 font-bold text-sm flex items-center gap-1 transition-colors">
                      Ler Artigo <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
