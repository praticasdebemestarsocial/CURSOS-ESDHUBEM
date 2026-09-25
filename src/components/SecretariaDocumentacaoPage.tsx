import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  GraduationCap,
  Clock,
  QrCode,
  ArrowLeft,
  Building2,
  FileCheck,
  CreditCard,
  Truck,
  RotateCcw,
  UserCheck,
  BookOpen,
  DollarSign,
  Scale,
  MessageCircle,
  Eye,
  Lock,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface SecretariaDocumentacaoPageProps {
  onBackToHome: () => void;
  onOpenValidator?: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigateToPortal?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const SecretariaDocumentacaoPage: React.FC<SecretariaDocumentacaoPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigateToPortal,
  onNavigate
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-20">
      
      {/* Top Breadcrumb Bar */}
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
            <span className="text-[#FFC72C] font-semibold">Tabela de Serviços & Documentos</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#FFC72C]" />
            <span>Código de Defesa do Consumidor • Lei 9.394/96</span>
          </div>
        </div>
      </div>

      {/* Header Hero Banner */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <Building2 className="w-4 h-4" />
              <span>Secretaria Acadêmica Eletrônica EAD</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Secretaria & <span className="text-[#FFC72C]">Emissão de Documentos</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Diretrizes de Defesa do Consumidor: O acesso ao conhecimento é <strong>100% gratuito</strong>. A emissão de documentos oficiais, históricos e conveniências pedagógicas é opcional e tarifada com transparência total.
            </p>
          </div>

          {/* Quick Info Box */}
          <div className="bg-[#182333] border border-slate-700 p-6 rounded-2xl shadow-xl max-w-sm w-full space-y-3 shrink-0">
            <div className="text-xs font-bold text-[#FFC72C] uppercase tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <span>Dados Institucionais</span>
            </div>
            <div className="text-xs text-slate-300 space-y-2 border-t border-slate-700/80 pt-3">
              <p><strong>Razão Social:</strong> ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar</p>
              <p><strong>CNPJ:</strong> 61.928.778/0001-50</p>
              <p><strong>Amparo Legal:</strong> Lei nº 9.394/96 (LDB) & Decreto Presidencial nº 5.154/04</p>
              <p><strong>Atendimento:</strong> Seg a Sex, 9h às 17h via WhatsApp</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* SECTION 1: TABELA COMPARATIVA DE SERVIÇOS (GRATUITOS VS. OPCIONAIS) */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <Scale className="w-4 h-4" />
              <span>Transparência Comercial & Defesa do Consumidor</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
              Tabela de Serviços: O que é Grátis e o que é Opcional
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Em nossa instituição, você nunca é obrigado a pagar para aprender. O conhecimento e a conclusão das videoaulas são livres. As taxas aplicam-se apenas à emissão de documentos oficiais e serviços de conveniência.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* COLUMN 1: SERVIÇOS 100% GRATUITOS */}
            <div className="bg-white rounded-3xl border-2 border-emerald-500/80 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Serviços 100% Gratuitos</h3>
                    <p className="text-xs text-emerald-700 font-semibold">Sem custo de matrícula ou mensalidade</p>
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
                  R$ 0,00
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                  <div>
                    <strong className="block text-slate-900">Acesso Total ao Conteúdo Didático:</strong>
                    <p className="text-slate-500 text-xs mt-0.5">Videoaulas, e-books em PDF, leituras recomendadas e questionários de fixação de todas as etapas.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                  <div>
                    <strong className="block text-slate-900">Inscrição e Matrícula Imediata:</strong>
                    <p className="text-slate-500 text-xs mt-0.5">Cadastro em qualquer curso livre da plataforma sem taxas de adesão ou requisitos de aprovação de crédito.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                  <div>
                    <strong className="block text-slate-900">Painel do Aluno & Acompanhamento de Progresso:</strong>
                    <p className="text-slate-500 text-xs mt-0.5">Visualização dinâmica da porcentagem de aulas concluídas e relatórios internos de desempenho.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                  <div>
                    <strong className="block text-slate-900">Suporte Técnico Básico:</strong>
                    <p className="text-slate-500 text-xs mt-0.5">Atendimento para problemas de login, recuperação de senhas, erros de reprodução de vídeo ou navegação no site.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* COLUMN 2: SERVIÇOS OPCIONAIS E TARIFADOS */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Serviços Opcionais de Conveniência</h3>
                    <p className="text-xs text-slate-500">Solicitados conforme necessidade do aluno</p>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
                  Conveniência
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div>
                    <strong className="text-slate-900 block">Emissão de Certificado Oficial Digital (PDF + QR Code)</strong>
                    <span className="text-xs text-slate-500">Com registro alfanumérico, código Hash antifraude e ementa no verso.</span>
                  </div>
                  <span className="font-extrabold text-amber-700 whitespace-nowrap bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                    R$ 29,90 - R$ 49,90
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div>
                    <strong className="text-slate-900 block">Declaração de Matrícula / Vínculo Acadêmico</strong>
                    <span className="text-xs text-slate-500">Comprovação imediata de matrícula ativa para faculdade ou empresa.</span>
                  </div>
                  <span className="font-extrabold text-slate-800 whitespace-nowrap bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    R$ 24,90
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div>
                    <strong className="text-slate-900 block">Histórico Escolar & Ementa Detalhada Assinada</strong>
                    <span className="text-xs text-slate-500">Discriminação completa de matérias, horas e conceitos para averbação.</span>
                  </div>
                  <span className="font-extrabold text-slate-800 whitespace-nowrap bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    R$ 24,90
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div>
                    <strong className="text-slate-900 block">Envio Postal de Documento Impresso (Via Correios)</strong>
                    <span className="text-xs text-slate-500">Entrega do certificado físico em papel especial selado no seu endereço.</span>
                  </div>
                  <span className="font-extrabold text-slate-800 whitespace-nowrap bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    R$ 39,90 - R$ 59,90
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div>
                    <strong className="text-slate-900 block">Segunda Via de Certificado ou Declaração</strong>
                    <span className="text-xs text-slate-500">Reemissão de documentos solicitados anteriormente com atualização.</span>
                  </div>
                  <span className="font-extrabold text-slate-800 whitespace-nowrap bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    R$ 19,90
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div>
                    <strong className="text-slate-900 block">Tutoria Pedagógica / Suporte Prioritário</strong>
                    <span className="text-xs text-slate-500">Acesso direto ao professor para correção de trabalhos e esclarecimento de dúvidas.</span>
                  </div>
                  <span className="font-extrabold text-slate-800 whitespace-nowrap bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    R$ 49,90
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: TIPOS DE DOCUMENTOS EMITIDOS PELA ESCOLA */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <FileText className="w-4 h-4" />
              <span>Guia Completo de Documentação</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Quais Documentos a ESDHUBEM Pode Emitir para Você?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Conheça as especificações e o amparo legal de cada documento acadêmico disponível em nossa secretaria eletrônica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Document 1: Certificado de Conclusão */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#243042] text-[#FFC72C] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Certificado de Conclusão</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Documento oficial principal. Atesta que o aluno concluiu 100% das aulas e obteve aprovação. Contém Nome Completo, CPF, Carga Horária, Período de Realização, Assinatura da Coordenação, Ementa no verso e Módulo de Segurança com duplo QR Code.
              </p>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Válido para Horas Complementares & Concursos</span>
              </div>
            </div>

            {/* Document 2: Histórico Escolar */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#243042] text-[#FFC72C] flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Histórico Escolar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Relatório analítico da jornada do estudante. Discrimina todas as disciplinas cursadas, carga horária por módulo, notas obtidas nos questionários de fixação e conceito final aprovado.
              </p>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Solicitado por Empresas e Coordenadores</span>
              </div>
            </div>

            {/* Document 3: Declaração de Matrícula */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#243042] text-[#FFC72C] flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Declaração de Matrícula / Vínculo</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprova que o aluno está regularmente cadastrado e ativo no curso. Útil para quem precisa atestar que já iniciou os estudos antes mesmo de concluir o treinamento.
              </p>
              <div className="pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Emissão Imediata em PDF</span>
              </div>
            </div>

            {/* Document 4: Declaração de Frequência */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#243042] text-[#FFC72C] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Declaração de Frequência & Engajamento</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Atesta o tempo de permanência, acessos e taxa de participação do aluno dentro da plataforma EAD durante um período específico.
              </p>
            </div>

            {/* Document 5: Ementa Detalhada */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#243042] text-[#FFC72C] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Ementa & Conteúdo Programático</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Descrição aprofundada de todos os tópicos, referências bibliográficas e metodologias utilizadas. As faculdades exigem este documento para avaliar a equivalência acadêmica.
              </p>
            </div>

            {/* Transparência sobre Diplomas */}
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-amber-950">Nota Legal: Diplomas vs. Certificados</h3>
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>Diplomas</strong> são emitidos exclusivamente por instituições regulamentadas pelo MEC para Graduação, Pós-graduação e Cursos Técnicos. Cursos livres de formação e extensão emitem <strong>Certificados de Conclusão</strong> (Lei nº 9.394/96).
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 3: FLUXO DE OPERAÇÃO DA SECRETARIA ELETRÔNICA */}
        <section className="bg-[#182333] text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              Processo de Solicitação & Auditoria
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Como Funciona o Fluxo de Emissão do Seu Certificado
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Para garantir total aceitação em Faculdades e Concursos Públicos, nossa secretaria realiza uma auditoria técnica em 4 etapas rigorosas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                1
              </span>
              <h4 className="font-bold text-white text-base">Conclusão 100%</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                O botão de solicitação permanece bloqueado até o sistema registrar que todas as aulas foram assistidas e as notas mínimas foram atingidas.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                2
              </span>
              <h4 className="font-bold text-white text-base">Solicitação & Taxa</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                O aluno clica em "Solicitar Certificado" e efetua o pagamento da taxa de conveniência/emissão via Pix, Cartão ou Boleto.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                3
              </span>
              <h4 className="font-bold text-white text-base">Auditoria Antifraude</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nossos servidores checam a presença real, evitam robôs que pulam vídeos e conferem se Nome e CPF estão corretos para evitar erros no documento.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center">
                4
              </span>
              <h4 className="font-bold text-white text-base">Emissão & QR Code</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                O documento oficial em alta resolução é liberado instantaneamente na área do aluno e enviado por e-mail com registro de QR Code para validação pública.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 4: BOTÕES DE AÇÃO RÁPIDA */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-800 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Precisa de ajuda com a sua documentação acadêmica?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Nossa equipe de secretaria está disponível via WhatsApp para auxiliar alunos, faculdades e recrutadores.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {onNavigate ? (
              <button
                onClick={() => {
                  onNavigate('regras-certificacao-merito');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3 bg-[#FFC72C] hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105"
              >
                <Award className="w-4 h-4" />
                <span>Regras de Certificação</span>
              </button>
            ) : onOpenCertificatePreview && (
              <button
                onClick={onOpenCertificatePreview}
                className="px-5 py-3 bg-[#FFC72C] hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105"
              >
                <Award className="w-4 h-4" />
                <span>Regras de Certificação</span>
              </button>
            )}

            {onOpenValidator && (
              <button
                onClick={onOpenValidator}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-slate-600"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Validar Certificado</span>
              </button>
            )}

            <a
              href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20ajuda%20com%20documentação%20ou%20certificados."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Secretaria no WhatsApp</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
