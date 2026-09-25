import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { BlogPost } from '../data/blogData';

interface BlogPostPageProps {
  post: BlogPost;
  onBackToBlog: () => void;
  onBackToHome: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBackToBlog, onBackToHome }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyLink = () => {
    const baseUrl = window.location.href.split('?')[0];
    const url = `${baseUrl}?post=${post.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Header com Imagem */}
      <div className="relative h-[60vh] min-h-[400px] flex items-end justify-center">
        <div className="absolute inset-0">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#182333] via-[#182333]/60 to-transparent" />
        </div>

        {/* Navegação Topo */}
        <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-20 max-w-5xl mx-auto w-full">
          <button
            onClick={onBackToBlog}
            className="inline-flex items-center gap-2 text-white hover:text-[#FFC72C] transition-colors text-sm font-semibold bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </button>
          <button
            onClick={onBackToHome}
            className="text-white hover:text-[#FFC72C] text-sm font-semibold transition-colors drop-shadow-md"
          >
            Ir para Início
          </button>
        </div>

        {/* Título e Meta */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-center">
          <span className="inline-block bg-[#FFC72C] text-[#182333] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 shadow-lg">
            {post.category}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-white">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#FFC72C]" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FFC72C]" />
              {post.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Share Sidebar (Desktop) */}
        <div className="hidden lg:flex flex-col gap-4 sticky top-32 h-fit items-center w-16">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest writing-vertical rotate-180 mb-4">Compartilhe</span>
          <div className="h-12 w-px bg-slate-200 mb-4" />
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all">
            <Facebook className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-500 hover:bg-sky-50 transition-all">
            <Twitter className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-700 hover:border-blue-700 hover:bg-blue-50 transition-all">
            <Linkedin className="w-4 h-4" />
          </button>
          <button 
            onClick={handleCopyLink}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#182333] hover:border-[#182333] hover:bg-slate-100 transition-all group relative"
          >
            <Copy className="w-4 h-4" />
            {copied && (
              <span className="absolute left-14 bg-[#182333] text-white text-xs px-2 py-1 rounded">Copiado!</span>
            )}
          </button>
        </div>

        {/* Artigo Texto */}
        <div className="flex-1">
          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[#182333] prose-a:text-amber-600 hover:prose-a:text-amber-700">
            {/* Resumo em destaque */}
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8 border-l-4 border-[#FFC72C] pl-6 py-2 bg-slate-50 italic">
              {post.excerpt}
            </p>
            
            {/* O conteúdo principal renderizado como HTML */}
            <div 
              className="mt-8 text-slate-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>

          {/* Share Mobile */}
          <div className="lg:hidden mt-12 pt-8 border-t border-slate-200">
            <h4 className="text-sm font-bold text-[#182333] uppercase tracking-wider mb-4 text-center">Compartilhe este artigo</h4>
            <div className="flex items-center justify-center gap-4">
              <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-700 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={handleCopyLink}
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#182333] hover:text-white transition-colors relative"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
            {copied && <p className="text-center text-xs text-green-600 font-bold mt-2">Link copiado com sucesso!</p>}
          </div>
        </div>

      </div>
    </article>
  );
};
