import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  FileText,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  MessageCircle,
  Eye,
  FileCheck,
  Building2,
  Scale,
  BrainCircuit,
  Share2,
  Upload,
  BookMarked,
  Globe,
  Layers
} from 'lucide-react';

interface RegrasCertificacaoMeritoPageProps {
  onBackToHome: () => void;
  onOpenValidator?: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigateToArticles?: () => void;
}

export const RegrasCertificacaoMeritoPage: React.FC<RegrasCertificacaoMeritoPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigateToArticles
}) => {
  const [selectedTier, setSelectedTier] = useState<'all' | 'bronze' | 'prata' | 'ouro' | 'diamante'>('all');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-20">
      
      {/* Top Breadcrumbs */}
      <div className="bg-[#182333] border-b border-slate-700/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-slate-300">Secretaria Acadêmica</span>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">Regras de Certificação por Mérito Acadêmico</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-[#FFC72C]" />
            <span>Sistema de Selos de Mérito: Bronze, Prata, Ouro e Diamante</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <GraduationCap className="w-4 h-4" />
              <span>Escala de Mérito & Reconhecimento Científico</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Regras de Certificação: <br className="hidden sm:inline" />
              <span className="text-[#FFC72C]">Escala de Mérito Acadêmico</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Valorize sua jornada de estudos! Na ESDHUBEM, além da conclusão do curso, você pode elevar a categoria do seu certificado conquistando selos de mérito (Bronze, Prata, Ouro e Diamante) através da publicação de artigos, TCCs e pesquisas científicas com registro DOI.
            </p>
          </div>

          {/* Quick Stat Box */}
          <div className="bg-[#182333] border border-slate-700 p-6 rounded-2xl shadow-xl max-w-sm w-full space-y-4 shrink-0">
            <div className="text-xs font-bold text-[#FFC72C] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFC72C]" />
              <span>4 Categorias de Mérito</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-amber-900/30 border border-amber-600/40 text-amber-300 font-bold flex items-center gap-2">
                <span className="text-base">🥉</span> Bronze
              </div>
              <div className="p-2.5 rounded-xl bg-slate-700/50 border border-slate-500/40 text-slate-200 font-bold flex items-center gap-2">
                <span className="text-base">🥈</span> Prata
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-400 font-bold flex items-center gap-2">
                <span className="text-base">🥇</span> Ouro
              </div>
              <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-bold flex items-center gap-2">
                <span className="text-base">💎</span> Diamante
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-tight pt-1">
              ✓ Cada nível concede uma insígnia exclusiva impressa no certificado e cadastrada no registro público de validação.
            </p>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* SUMMARY TABLE SECTION */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <Layers className="w-4 h-4" />
              <span>Quadro Geral de Classificação</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
              Estrutura Unificada das Categorias de Certificado
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Compare os requisitos de cada selo e saiba onde sua produção acadêmica ou profissional será publicada e divulgada.
            </p>
          </div>

          {/* Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#182333] text-white border-b border-slate-700">
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">Categoria / Selo</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">Requisito Principal</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">Destino da Publicação</th>
                    <th className="py-4 px-6 font-bold uppercase tracking-wider">Complexidade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  {/* Bronze */}
                  <tr className="hover:bg-amber-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-amber-900 flex items-center gap-2">
                      <span className="text-xl">🥉</span>
                      <div>
                        <strong className="block text-slate-900">Bronze</strong>
                        <span className="text-[11px] text-amber-700 font-normal">Aproveitamento Básico</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      Responder às perguntas de múltipla escolha dos questionários de fixação.
                    </td>
                    <td className="py-4 px-6">
                      Sistema interno da escola (Painel EAD do Aluno).
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                        Baixa (Fixação)
                      </span>
                    </td>
                  </tr>

                  {/* Prata */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800 flex items-center gap-2">
                      <span className="text-xl">🥈</span>
                      <div>
                        <strong className="block text-slate-900">Prata</strong>
                        <span className="text-[11px] text-slate-500 font-normal">Produção de Conteúdo</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      Escrever um artigo curto e prático assinado pelo aluno.
                    </td>
                    <td className="py-4 px-6">
                      Blog Oficial da ESDHUBEM (com link público de autor para portfólio).
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold">
                        Média-Baixa (Divulgação)
                      </span>
                    </td>
                  </tr>

                  {/* Ouro */}
                  <tr className="hover:bg-amber-50/70 transition-colors">
                    <td className="py-4 px-6 font-bold text-amber-700 flex items-center gap-2">
                      <span className="text-xl">🥇</span>
                      <div>
                        <strong className="block text-slate-900">Ouro</strong>
                        <span className="text-[11px] text-amber-600 font-normal">Pesquisa & Preprint</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      Enviar o TCC estruturado <strong>OU</strong> publicar um artigo em repositório de Preprint.
                    </td>
                    <td className="py-4 px-6">
                      Página de Artigos Científicos da Escola / Repositórios (Zenodo, OSF, SciELO) com registro <strong>DOI</strong>.
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold">
                        Média-Alta (Pesquisa)
                      </span>
                    </td>
                  </tr>

                  {/* Diamante */}
                  <tr className="hover:bg-cyan-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-cyan-900 flex items-center gap-2">
                      <span className="text-xl">💎</span>
                      <div>
                        <strong className="block text-slate-900">Diamante</strong>
                        <span className="text-[11px] text-cyan-700 font-normal">Excelência Científica</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      Publicar um artigo aprovado em revista científica externa com revisão por pares.
                    </td>
                    <td className="py-4 px-6">
                      Periódico científico externo + Destaque especial de honra na página principal da escola.
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold">
                        Alta (Acadêmica)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 2: DETALHAMENTO DE CADA NÍVEL DE MÉRITO */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <BookMarked className="w-4 h-4" />
              <span>Detalhamento dos Requisitos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Como Funciona Cada Selo de Certificação
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Entenda os objetivos pedagógicos, os benefícios para seu currículo Lattes/LinkedIn e como conquistar cada nível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* TIER 1: BRONZE */}
            <div className="bg-white rounded-3xl border-2 border-amber-700/30 p-6 sm:p-8 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-800 text-amber-100 text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                Selo 🥉 Bronze
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-2xl shrink-0">
                  🥉
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Nível Bronze: Aproveitamento Básico</h3>
                  <span className="text-xs text-amber-800 font-semibold">Fixação e Retenção do Conteúdo</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Focado na retenção e absorção do conhecimento ministrado nas videoaulas. O aluno assiste às aulas completas e valida seu aprendizado respondendo aos questionários automáticos de múltipla escolha da plataforma EAD.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs space-y-2 text-amber-900">
                <strong>📌 Requisitos & Entregáveis:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Visualização de 100% dos módulos do curso.</li>
                  <li>Aprovação nos questionários com nota mínima 7.0.</li>
                  <li><strong>Certificado Emitido:</strong> Certificado Padrão com chancela de Conclusão e Selo Bronze.</li>
                </ul>
              </div>
            </div>

            {/* TIER 2: PRATA */}
            <div className="bg-white rounded-3xl border-2 border-slate-300 p-6 sm:p-8 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-slate-700 text-slate-100 text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                Selo 🥈 Prata
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center text-2xl shrink-0">
                  🥈
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Nível Prata: Produção de Conteúdo</h3>
                  <span className="text-xs text-slate-600 font-semibold">Divulgação Prática & Portfólio</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O aluno desenvolve um artigo curto e prático (entre 500 a 1.200 palavras) aplicando os conceitos aprendidos no seu contexto profissional. O texto é publicado no Blog Oficial da ESDHUBEM com a autoria completa do estudante.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-800">
                <strong>📌 Requisitos & Benefícios:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Elaboração de um artigo prático ou estudo de caso de autoria própria.</li>
                  <li>Aprovação pela equipe editorial da escola.</li>
                  <li><strong>Benefício:</strong> O aluno ganha uma página pública no blog com seu nome para utilizar no LinkedIn e currículo, movimentando seu portfólio profissional.</li>
                </ul>
              </div>
            </div>

            {/* TIER 3: OURO */}
            <div className="bg-white rounded-3xl border-2 border-amber-400 p-6 sm:p-8 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FFC72C] text-slate-950 text-xs font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                Selo 🥇 Ouro
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400 flex items-center justify-center text-2xl shrink-0">
                  🥇
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Nível Ouro: Pesquisa & Preprint</h3>
                  <span className="text-xs text-amber-700 font-semibold">DOI Criptográfico & Publicação Científica</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Destinado a trabalhos acadêmicos densos. Aqui entram os Trabalhos de Conclusão de Curso (TCCs) estruturados ou artigos científicos submetidos a plataformas públicas de Preprint (como Zenodo, OSF Preprints ou SciELO Preprints), garantindo um registro <strong>DOI (Digital Object Identifier)</strong> universal.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-2 text-amber-950">
                <strong>📌 Requisitos & Registro DOI:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Envio de TCC estruturado com ementa acadêmica <strong>OU</strong> submissão de artigo em servidor de Preprint.</li>
                  <li>Indexação do artigo na página oficial de Anais Científicos da ESDHUBEM.</li>
                  <li><strong>Registro DOI:</strong> Atribuição de um código DOI permanente para citação direta no Currículo Lattes.</li>
                </ul>
              </div>
            </div>

            {/* TIER 4: DIAMANTE */}
            <div className="bg-white rounded-3xl border-2 border-cyan-400 p-6 sm:p-8 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-600 text-white text-xs font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                Selo 💎 Diamante
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-2xl shrink-0">
                  💎
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Nível Diamante: Excelência Científica</h3>
                  <span className="text-xs text-cyan-700 font-semibold">Honraria Máxima & Revisão por Pares</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O nível mais elevado de reconhecimento acadêmico. Exige que o trabalho científico desenvolvido pelo aluno passe por aprovação e revisão por pares (*peer-review*) em uma revista ou periódico científico qualificado nacional ou internacional.
              </p>

              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs space-y-2 text-cyan-950">
                <strong>📌 Requisitos & Destaque Especial:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Publicação confirmada em revista científica externa com comitê editorial.</li>
                  <li><strong>Destaque de Honra:</strong> Exibição do feito em posição de destaque na página principal da ESDHUBEM.</li>
                  <li><strong>Chancela Diamante:</strong> Impressão de honraria máxima no certificado do aluno com QR Code de validação.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: FLUXO DE SUBMISSÃO PARA O ALUNO */}
        <section className="bg-[#182333] text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              Passo a Passo de Upgrade
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Como Submeter seu Trabalho e Elevar seu Selo
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Siga o fluxo simplificado da nossa comissão acadêmica para validar seu artigo ou TCC:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                1
              </span>
              <h4 className="font-bold text-white text-base">Escreva seu Trabalho</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Desenvolva seu artigo prático, TCC ou artigo de pesquisa com base nas orientações do seu curso na ESDHUBEM.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                2
              </span>
              <h4 className="font-bold text-white text-base">Envie para Avaliação</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Submeta o documento (PDF ou DOCX) através do e-mail da coordenação ou suporte acadêmico via WhatsApp.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                3
              </span>
              <h4 className="font-bold text-white text-base">Revisão Editorial</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nossa equipe de docentes e pareceristas revisa o trabalho e orienta as adequações ou indexação DOI.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                4
              </span>
              <h4 className="font-bold text-white text-base">Emissão do Selo</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                O seu certificado é atualizado no sistema com o Selo de Mérito (Prata, Ouro ou Diamante) e link de validação pública.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 4: CALL TO ACTION BANNER */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-800 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Pronto para transformar seu estudo em uma publicação real?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Explore nossos artigos científicos já publicados ou submeta seu trabalho para a coordenação acadêmica.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {onNavigateToArticles && (
              <button
                onClick={onNavigateToArticles}
                className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ver Artigos Publicados</span>
              </button>
            )}

            {onOpenCertificatePreview && (
              <button
                onClick={onOpenCertificatePreview}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-slate-600"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Ver Modelo do Certificado</span>
              </button>
            )}

            <a
              href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20submeter%20meu%20artigo%20ou%20TCC%20para%20avaliação%20de%20mérito%20acadêmico."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Submeter via WhatsApp</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
