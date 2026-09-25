import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  BookOpen,
  FileText,
  Download,
  ExternalLink,
  Award,
  ShieldCheck,
  Sparkles,
  User,
  Calendar,
  Tag,
  ChevronRight,
  Send,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { ACADEMIC_ARTICLES } from '../data/artigosData';
import { AcademicArticle } from '../types';

interface ArtigosPageProps {
  onBackToHome: () => void;
  onSelectArticle: (article: AcademicArticle) => void;
}

export const ArtigosPage: React.FC<ArtigosPageProps> = ({
  onBackToHome,
  onSelectArticle,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    'Práticas Integrativas & Saúde',
    'Desenvolvimento Profissional & Liderança',
    'Pedagogia Integrativa & Educação'
  ];

  const filteredArticles = ACADEMIC_ARTICLES.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.authors.some((a) => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
      art.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase())) ||
      art.doi.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory ? art.category === selectedCategory : true;

    return matchesSearch && matchesCategory;
  });

  const featuredArticle = ACADEMIC_ARTICLES.find((art) => art.isFeatured) || ACADEMIC_ARTICLES[0];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Top Banner / Hero */}
      <div className="bg-[#182333] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors text-sm font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Início</span>
          </button>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC72C] text-xs font-bold tracking-wide mb-4">
                <BookOpen className="w-4 h-4" />
                <span>Repositório Aberto de Produção Científica</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                Artigos Científicos & <span className="text-[#FFC72C]">Anais Acadêmicos</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Acesse a coleção oficial de artigos, pesquisas e estudos publicados pela coordenação pedagógica e por alunos da <strong>ESDHUBEM</strong>, preservados digitalmente com atribuição de <strong>DOI no Zenodo / CERN</strong>.
              </p>
            </div>

            {/* Quick Stat Badge */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-3xl w-full lg:w-auto shrink-0 shadow-2xl flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 font-medium">Indexação Oficial</p>
                  <p className="text-sm font-bold text-white">Zenodo (CERN / Suíça)</p>
                </div>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFC72C]/20 flex items-center justify-center text-[#FFC72C] font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 font-medium">Atribuição de Registro</p>
                  <p className="text-sm font-bold text-white">DOI Criptográfico Único</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-10">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por título, autor, palavra-chave ou DOI..."
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC72C] transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === null
                  ? 'bg-[#243042] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos ({ACADEMIC_ARTICLES.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Publication Banner */}
        {featuredArticle && !searchTerm && !selectedCategory && (
          <div className="bg-gradient-to-r from-[#182333] via-[#243042] to-[#1e293b] text-white rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#FFC72C] text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Publicação Científica em Destaque
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-3 py-0.5 rounded-full">
                  DOI: {featuredArticle.doi}
                </span>
              </div>

              <h2
                onClick={() => onSelectArticle(featuredArticle)}
                className="text-2xl sm:text-3xl font-black leading-tight cursor-pointer hover:text-[#FFC72C] transition-colors"
              >
                {featuredArticle.title}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl line-clamp-3">
                {featuredArticle.abstractPt}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <User className="w-4 h-4 text-[#FFC72C]" />
                  <span className="font-bold text-white">{featuredArticle.authors.join(', ')}</span>
                  <span>•</span>
                  <span>{featuredArticle.institution}</span>
                </div>

                <div className="flex items-center gap-3">
                  {featuredArticle.pdfUrl && (
                    <a
                      href={featuredArticle.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar PDF</span>
                    </a>
                  )}

                  <button
                    onClick={() => onSelectArticle(featuredArticle)}
                    className="px-5 py-2 rounded-xl bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Ler Artigo Completo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-wider">
              Artigos Publicados
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              Exibindo {filteredArticles.length} trabalho(s)
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                      {article.category}
                    </span>
                    <a
                      href={article.doiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold hover:underline"
                    >
                      DOI: {article.doi}
                    </a>
                  </div>

                  <h4
                    onClick={() => onSelectArticle(article)}
                    className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer leading-snug"
                  >
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {article.abstractPt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="font-semibold text-slate-800">
                      Por: {article.authors.join(', ')}
                    </span>
                    <span>•</span>
                    <span>{article.institution}</span>
                    <span>•</span>
                    <span>{article.publicationDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                  <button
                    onClick={() => onSelectArticle(article)}
                    className="px-4 py-2.5 rounded-xl bg-[#243042] hover:bg-[#182333] text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Ver Detalhes</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Article Submission Workflow Guide */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFC72C]/20 flex items-center justify-center text-slate-950 font-black">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Como os Alunos ESDHUBEM Publicam Seus Trabalhos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Passo a passo simples para registrar seu artigo no Zenodo e obter a validação no Repositório Oficial ESDHUBEM.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#182333] text-white text-xs font-bold flex items-center justify-center">
                1
              </div>
              <h4 className="font-bold text-sm text-slate-900">Escreva seu Artigo</h4>
              <p className="text-xs text-slate-600">
                Siga as orientações do seu curso e monte seu trabalho no modelo acadêmico padrão.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#182333] text-white text-xs font-bold flex items-center justify-center">
                2
              </div>
              <h4 className="font-bold text-sm text-slate-900">Deposite no Zenodo</h4>
              <p className="text-xs text-slate-600">
                Crie sua conta no Zenodo.org e faça o upload do PDF do seu artigo científico.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#182333] text-white text-xs font-bold flex items-center justify-center">
                3
              </div>
              <h4 className="font-bold text-sm text-slate-900">Gerador de DOI</h4>
              <p className="text-xs text-slate-600">
                O Zenodo gera gratuitamente o número de identificação internacional (DOI) do seu artigo.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#182333] text-white text-xs font-bold flex items-center justify-center">
                4
              </div>
              <h4 className="font-bold text-sm text-slate-900">Submeta na ESDHUBEM</h4>
              <p className="text-xs text-slate-600">
                Informe o link/DOI na Sala de Aula para receber a validação e exibição em nosso repositório.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
