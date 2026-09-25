import React, { useState } from 'react';
import {
  ArrowLeft,
  FileText,
  Download,
  ExternalLink,
  Copy,
  Check,
  Share2,
  Calendar,
  User,
  Building,
  Tag,
  ShieldCheck,
  BookOpen,
  Award,
  Sparkles,
  Info
} from 'lucide-react';
import { AcademicArticle } from '../types';

interface ArtigoDetailPageProps {
  article: AcademicArticle;
  onBackToArticles: () => void;
  onBackToHome: () => void;
}

export const ArtigoDetailPage: React.FC<ArtigoDetailPageProps> = ({
  article,
  onBackToArticles,
  onBackToHome,
}) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const handleCopyCitation = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => {
      setCopiedFormat(null);
    }, 3000);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Header Banner - Academic Repository Style */}
      <div className="bg-[#182333] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Navigation Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 flex-wrap">
            <button
              onClick={onBackToHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Início
            </button>
            <span>/</span>
            <button
              onClick={onBackToArticles}
              className="hover:text-white transition-colors cursor-pointer text-[#FFC72C] font-semibold"
            >
              Repositório Acadêmico
            </button>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-xs">{article.title}</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Acesso Aberto (Open Access)</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-[#FFC72C] border border-amber-500/30 text-xs font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>DOI Verificado: {article.doi}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/15 text-xs font-medium">
                {article.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
                {article.subtitle}
              </p>
            )}

            {/* Author & Publication Meta */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#FFC72C]" />
                <span className="font-bold text-white">{article.authors.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-emerald-400" />
                <span>{article.institution}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Publicado em: {article.publicationDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-8">
        {/* Action Panel Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-[#FFC72C] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Preservação Digital Zenodo / CERN</p>
              <p className="text-sm font-bold text-slate-900">DOI Oficial: {article.doi}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {article.pdfUrl && (
              <a
                href={article.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Baixar PDF Completo</span>
              </a>
            )}

            <a
              href={article.zenodoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#243042] hover:bg-[#182333] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-[#FFC72C]" />
              <span>Ver Registro no Zenodo</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column: Resumo and Abstract */}
          <div className="lg:col-span-2 space-y-8">
            {/* Resumo em Português */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg border-b border-slate-100 pb-3">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <h2>Resumo (Português)</h2>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                {article.abstractPt}
              </p>
            </div>

            {/* Abstract em Inglês */}
            {article.abstractEn && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg border-b border-slate-100 pb-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <h2>Abstract (English)</h2>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify italic font-serif">
                  {article.abstractEn}
                </p>
              </div>
            )}

            {/* Palavras-chave / Tags */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Tag className="w-4 h-4 text-amber-500" />
                <h3>Palavras-chave e Indexação</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((kw, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors border border-slate-200"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Caixa de Citação ABNT & APA */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 font-bold text-base text-[#FFC72C]">
                  <Sparkles className="w-5 h-5 fill-[#FFC72C]" />
                  <h3>Como Citar este Trabalho</h3>
                </div>
                <span className="text-xs text-slate-400">Padrão ABNT NBR 6023 / APA</span>
              </div>

              {/* Citação ABNT */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Formato ABNT:
                  </span>
                  <button
                    onClick={() => handleCopyCitation(article.citationAbnt, 'ABNT')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFC72C] hover:underline cursor-pointer"
                  >
                    {copiedFormat === 'ABNT' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Citação</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed break-words">
                  {article.citationAbnt}
                </div>
              </div>

              {/* Citação APA */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Formato APA (Internacional):
                  </span>
                  <button
                    onClick={() => handleCopyCitation(article.citationApa, 'APA')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFC72C] hover:underline cursor-pointer"
                  >
                    {copiedFormat === 'APA' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Citação</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed break-words">
                  {article.citationApa}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column: Metadata & Student Submission Info */}
          <div className="space-y-6">
            {/* Metadata Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider border-b border-slate-100 pb-3">
                Informações do Registro
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Autoria:</span>
                  <span className="font-bold text-slate-800">{article.authors.join(', ')}</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Instituição Responsável:</span>
                  <span className="font-semibold text-slate-800">{article.institution}</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">DOI (Digital Object Identifier):</span>
                  <a
                    href={article.doiUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-emerald-600 hover:underline break-all block mt-0.5"
                  >
                    {article.doi}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Repositório Internacional:</span>
                  <span className="font-semibold text-slate-800">Zenodo / CERN (Genebra, Suíça)</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Licença de Distribuição:</span>
                  <span className="font-semibold text-slate-800">Creative Commons Attribution 4.0 International</span>
                </div>
              </div>
            </div>

            {/* Call to Action for ESDHUBEM Students */}
            <div className="bg-gradient-to-br from-[#182333] to-[#243042] text-white rounded-3xl p-6 space-y-4 shadow-xl border border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-[#FFC72C]/20 flex items-center justify-center text-[#FFC72C]">
                <Award className="w-5 h-5" />
              </div>

              <h4 className="font-bold text-base text-white">
                É aluno da ESDHUBEM?
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                Publicou seu trabalho científico no Zenodo para concluir seu curso livre ou horas complementares? Submeta seu DOI no portal do aluno para ser catalogado em nosso <strong>Repositório Acadêmico Oficial</strong>!
              </p>

              <button
                onClick={onBackToArticles}
                className="w-full py-2.5 px-4 rounded-xl bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-bold text-xs transition-all shadow-md cursor-pointer text-center"
              >
                Saiba como submeter seu artigo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
