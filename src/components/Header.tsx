import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  Menu,
  X,
  Phone,
  Mail,
  Sparkles,
  LayoutGrid,
  ShoppingCart,
  Bell,
  User,
  Info,
  Award,
  Scale
} from 'lucide-react';
import esdhubemLogo from '../assets/esdhubem-logo.png';

interface HeaderProps {
  onSearch: (term: string) => void;
  searchTerm: string;
  onNavigate: (sectionId: string) => void;
  onOpenValidator: () => void;
  onOpenAbout: () => void;
  savedCount: number;
  currentPage?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onSearch,
  searchTerm,
  onNavigate,
  onOpenValidator,
  onOpenAbout,
  savedCount,
  currentPage = 'home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topSearch, setTopSearch] = useState(searchTerm);
  const [cartCount, setCartCount] = useState(2);
  const [messagesCount, setMessagesCount] = useState(2);
  const [notificationsCount, setNotificationsCount] = useState(2);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(topSearch);
    onNavigate('catalogo-cursos');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#243042] text-white shadow-md transition-all">
      {/* Top Bar: Logo, Search and User Actions */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">
            
            {/* Left: Brand Logo & Grid Launcher */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div
                onClick={() => onNavigate('inicio')}
                className="flex items-center gap-2 cursor-pointer group select-none"
                id="logo-brand-btn"
                title="ESDHUBEM - Início"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-white/20 p-0.5 shrink-0 group-hover:scale-105 transition-transform">
                  <img src={esdhubemLogo} alt="ESDHUBEM Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase font-sans hidden sm:block">
                  ESDHUBEM
                </span>
              </div>

              <button
                onClick={() => onNavigate('explorar-categorias')}
                className="p-1.5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Aprofundar nas Categorias"
                id="grid-launcher-btn"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>

            {/* Center: Search Input */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-2">
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <input
                  type="text"
                  value={topSearch}
                  onChange={(e) => {
                    setTopSearch(e.target.value);
                    onSearch(e.target.value);
                  }}
                  placeholder="Buscar tutoriais, cursos, vídeos..."
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-300 pl-10 pr-4 py-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
                  id="top-header-search-input"
                />
                <Search className="w-4 h-4 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2" />
              </form>
            </div>

            {/* Right Action Icons with Badges */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <button
                onClick={() => onNavigate('catalogo-cursos')}
                className="relative p-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer"
                title="Carrinho de Cursos"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              <button
                onClick={() => onNavigate('catalogo-cursos')}
                className="relative p-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer hidden sm:block"
                title="Mensagens"
              >
                <Mail className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {messagesCount}
                </span>
              </button>

              <button
                onClick={() => onNavigate('catalogo-cursos')}
                className="relative p-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer hidden sm:block"
                title="Avisos Acadêmicos"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                  {notificationsCount}
                </span>
              </button>

              <button
                onClick={() => onNavigate('sala-de-aula')}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 rounded-full border transition-all cursor-pointer ${
                  currentPage === 'sala-de-aula'
                    ? 'bg-[#F5B014] text-slate-950 border-[#F5B014] shadow-md ring-2 ring-[#FFC72C]/40'
                    : 'bg-[#FFC72C] hover:bg-[#F5B014] border-[#FFC72C] text-slate-950 shadow-sm'
                }`}
                title="Área do Aluno"
              >
                <User className="w-4 h-4" />
                <span className="font-bold text-xs sm:text-sm hidden lg:inline-block">Sala de Aula</span>
                <span className="bg-slate-950 text-[#FFC72C] text-[9px] sm:text-[10px] font-black px-1.5 py-0.5 rounded hidden sm:inline-block">ALUNO</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Navigation Links (Desktop/Laptop) */}
      <div className="hidden lg:block bg-[#182333]">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 overflow-x-auto scrollbar-none">
          <nav className="flex items-center justify-center gap-4 lg:gap-6 xl:gap-8 h-11 text-xs xl:text-sm font-medium whitespace-nowrap">
            <button
              onClick={() => onNavigate('inicio')}
              className={`transition-all py-1 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onNavigate('categorias')}
              className={`transition-all py-1 cursor-pointer flex items-center gap-1.5 ${
                currentPage === 'categorias'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              <span>Categorias</span>
              <span className="bg-white/10 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">18</span>
            </button>
            <button
              onClick={() => onNavigate('categoria:landing-pages-biolinks')}
              className={`transition-all py-1 cursor-pointer ${
                currentPage.startsWith('categoria:landing-pages-biolinks')
                  ? 'text-emerald-400 font-bold border-b-2 border-emerald-400'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              Sites & Biolinks
            </button>
            <button
              onClick={() => onNavigate('aplicativos')}
              className={`transition-all py-1 cursor-pointer ${
                currentPage === 'aplicativos'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-[#FFC72C]/90 hover:text-[#FFC72C] hover:border-b-2 hover:border-[#FFC72C]/50'
              }`}
            >
              Apps & Dashboards
            </button>
            <button
              onClick={() => onNavigate('livraria')}
              className={`transition-all py-1 cursor-pointer ${
                currentPage === 'livraria'
                  ? 'text-[#FFC72C] font-bold border-b-2 border-[#FFC72C]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/30'
              }`}
            >
              Livros
            </button>
            <button
              onClick={onOpenAbout}
              className="text-white/80 hover:text-white hover:border-b-2 hover:border-white/30 transition-all py-1 cursor-pointer"
            >
              Sobre Nós
            </button>
          </nav>
        </div>
      </div>

      {/* Second Menu Bar: Sub-Menu Buttons (Políticas, Diretrizes, Artigos, Blog, Certificação) */}
      <div className="hidden lg:block bg-[#111927] border-t border-b border-slate-700/60 py-2 shadow-inner">
        <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between gap-3 overflow-x-auto scrollbar-none text-xs font-medium">
          
          {/* Left Button Group: Políticas, Diretrizes, Artigos Científicos, Blog */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('politicas')}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer border font-semibold ${
                currentPage === 'politicas'
                  ? 'bg-slate-200 text-slate-900 border-white font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
              }`}
            >
              <span>Políticas</span>
            </button>

            <button
              onClick={() => onNavigate('diretrizes-pedagogicas')}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer border font-semibold ${
                currentPage === 'diretrizes-pedagogicas'
                  ? 'bg-[#FFC72C] text-slate-950 border-[#FFC72C] font-bold shadow-sm'
                  : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/40'
              }`}
            >
              <span>Diretrizes e Esclarecimento Pedagógico</span>
            </button>

            <button
              onClick={() => onNavigate('artigos')}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer border font-semibold ${
                currentPage === 'artigos' || currentPage === 'artigo-detalhe'
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                  : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border-cyan-500/40'
              }`}
            >
              <span>Artigos Científicos</span>
            </button>

            <button
              onClick={() => onNavigate('blog')}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer border font-semibold ${
                currentPage === 'blog' || currentPage === 'blog-post'
                  ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
              }`}
            >
              <span>Blog</span>
            </button>
          </div>

          {/* Right Button Group: Validar Certificado, Valor Legal, Escala de Mérito */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenValidator}
              className="bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/40 font-bold text-xs px-3.5 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Validar Certificado</span>
            </button>

            <button
              onClick={() => onNavigate('informacoes-legais')}
              className="bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 font-bold text-xs px-3.5 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <Scale className="w-3.5 h-3.5 text-cyan-400" />
              <span>Valor Legal dos Certificados</span>
            </button>

            <button
              onClick={() => onNavigate('regras-certificacao-merito')}
              className="bg-[#FFC72C]/15 hover:bg-[#FFC72C]/25 text-[#FFC72C] border border-[#FFC72C]/40 font-bold text-xs px-3.5 py-1.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs hover:border-[#FFC72C]"
            >
              <Award className="w-3.5 h-3.5 text-[#FFC72C]" />
              <span>Certificação & Escala de Mérito</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Search bar (visible only on lg/md) */}
      <div className="lg:hidden px-4 pb-3 pt-2 bg-[#243042]">
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <input
            type="text"
            value={topSearch}
            onChange={(e) => {
              setTopSearch(e.target.value);
              onSearch(e.target.value);
            }}
            placeholder="Buscar tutoriais, cursos..."
            className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-300 pl-10 pr-4 py-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFC72C]"
          />
          <Search className="w-4 h-4 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2" />
        </form>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E293B] border-t border-slate-700 px-4 py-4 space-y-3 shadow-2xl text-white">
          <button onClick={() => { onNavigate('inicio'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Início</button>
          <button onClick={() => { onNavigate('categorias'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 flex justify-between">
            <span>Categorias</span>
            <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">18</span>
          </button>
          <button onClick={() => { onNavigate('categoria:landing-pages-biolinks'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-emerald-400">Sites & Biolinks</button>
          <button onClick={() => { onNavigate('aplicativos'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-[#FFC72C]">Apps & Dashboards (MEI e ME)</button>
          <button onClick={() => { onNavigate('livraria'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-amber-300">Livros</button>
          <button onClick={() => { onOpenAbout(); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Sobre Nós</button>

          <div className="pt-2 border-t border-slate-700 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-3">Recursos & Diretrizes</span>
            <button onClick={() => { onNavigate('diretrizes-pedagogicas'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-amber-300 hover:bg-white/10">Diretrizes e Esclarecimento Pedagógico</button>
            <button onClick={() => { onNavigate('politicas'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Políticas</button>
            <button onClick={() => { onNavigate('artigos'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 text-cyan-400">Artigos Científicos (Zenodo / DOI)</button>
            <button onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10">Blog</button>
          </div>

          <div className="pt-2 border-t border-slate-700 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-3">Validação & Certificados</span>
            <button onClick={() => { onOpenValidator(); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-emerald-400 hover:bg-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Validar Certificado</span>
            </button>
            <button onClick={() => { onNavigate('informacoes-legais'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-cyan-400 hover:bg-white/10 flex items-center gap-2">
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>Valor Legal dos Certificados</span>
            </button>
            <button onClick={() => { onNavigate('regras-certificacao-merito'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-[#FFC72C] hover:bg-white/10 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFC72C]" />
              <span>Certificação & Escala de Mérito</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
