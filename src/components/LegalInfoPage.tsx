import React, { useState } from 'react';
import {
  ShieldCheck,
  Scale,
  FileText,
  Lock,
  Building2,
  CheckCircle2,
  ExternalLink,
  ArrowLeft,
  GraduationCap,
  Award,
  Clock,
  QrCode,
  HelpCircle,
  FileCheck,
  PhoneCall,
  Mail,
  AlertCircle,
  Eye,
  Download
} from 'lucide-react';
import esdhubemLogo from '../assets/esdhubem-logo.png';
import modeloCertificadoImg from '../assets/modelo-certificado.jpg';

interface LegalInfoPageProps {
  onBackToHome: () => void;
  onOpenValidator: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigate?: (sectionId: string) => void;
}

type TabType = 'certificados' | 'termos' | 'privacidade' | 'institucional';

export const LegalInfoPage: React.FC<LegalInfoPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('certificados');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">
      {/* Breadcrumb Navigation */}
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
            <span className="text-[#FFC72C] font-semibold">
              Valor Legal dos Certificados & Informações Legais
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#FFC72C]" />
            <span>Amparo na Lei nº 9.394/96 & Decreto nº 5.154/04</span>
          </div>
        </div>
      </div>

      {/* Header Hero */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Segurança Jurídica & Transparência</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Valor Legal dos Certificados <br className="hidden sm:inline" />
              <span className="text-[#FFC72C]">& Informações Legais</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Cursos livres amparados pela Lei nº 9.394/1996 (LDB) e Decreto nº 5.154/2004. Não constituem ensino fundamental, médio, técnico ou superior. Cada certificado é emitido pela ESDHUBEM, com validade nacional como formação complementar.
            </p>
          </div>

          {/* Quick Legal Highlights */}
          <div className="bg-[#182333]/90 border border-slate-700/80 p-5 rounded-2xl shadow-xl max-w-sm w-full space-y-3 shrink-0">
            <div className="text-xs font-bold text-[#FFC72C] uppercase tracking-wider flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <span>Amparo Legal Reconhecido</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Lei de Diretrizes e Bases da Educação (LDB nº 9.394/96)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Decreto Federal nº 5.154/2004 (Cursos Livres)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Aceito em Universidades de todo o território nacional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Autenticidade digital com QR Code e Hash Antifraude</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative watermark */}
        <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none">
          <Scale className="w-96 h-96 text-white" />
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Navigation Sidebar Tabs */}
          <div className="w-full lg:w-1/4 bg-white border border-slate-200 rounded-2xl p-3 shadow-sm sticky top-24 space-y-1">
            <button
              onClick={() => setActiveTab('certificados')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                activeTab === 'certificados'
                  ? 'bg-[#243042] text-[#FFC72C] shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4 shrink-0" />
              <span>Validade dos Certificados</span>
            </button>

            <button
              onClick={() => setActiveTab('termos')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                activeTab === 'termos'
                  ? 'bg-[#243042] text-[#FFC72C] shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Termos e Condições de Uso</span>
            </button>

            <button
              onClick={() => setActiveTab('privacidade')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                activeTab === 'privacidade'
                  ? 'bg-[#243042] text-[#FFC72C] shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Lock className="w-4 h-4 shrink-0" />
              <span>Privacidade & LGPD</span>
            </button>

            <button
              onClick={() => setActiveTab('institucional')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                activeTab === 'institucional'
                  ? 'bg-[#243042] text-[#FFC72C] shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-4 h-4 shrink-0" />
              <span>Dados Institucionais & Contato</span>
            </button>

            {/* Quick Action Button for Validation */}
            <div className="pt-3 mt-3 border-t border-slate-100">
              <button
                onClick={onOpenValidator}
                className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Validar Certificado Agora</span>
              </button>
            </div>
          </div>

          {/* Detailed Content Panel (Right 3/4) */}
          <div className="w-full lg:w-3/4 space-y-8">
            
            {/* TAB 1: Validade dos Certificados */}
            {activeTab === 'certificados' && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-in fade-in duration-300">
                <div className="border-b border-slate-100 pb-5">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#243042] uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4 text-[#FFC72C]" />
                    <span>Educação Profissional Continuada</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
                    Validade Legal dos Certificados ESDHUBEM
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Fundamentação jurídica, aceitação acadêmica e mecanismos de segurança pública.
                  </p>
                </div>

                {/* Legal Basis Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="text-sm font-bold text-[#182333] flex items-center gap-2">
                      <Scale className="w-4 h-4 text-[#243042]" />
                      <span>Lei Federal nº 9.394/1996 (LDB)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Conforme os Artigos 39 a 42 da Lei de Diretrizes e Bases da Educação Nacional, a Educação Profissional integra diferentes dimensões do trabalho, ciência e tecnologia, contemplando a modalidade de formação continuada para jovens e adultos.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="text-sm font-bold text-[#182333] flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#243042]" />
                      <span>Decreto Presidencial nº 5.154/2004</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Regulamenta os cursos de Formação Inicial e Continuada (Cursos Livres) de trabalhadores, autorizando a oferta aberta, sem exigência de escolaridade prévia, conferindo aos concluintes direito ao respectivo certificado de qualificação profissional.
                    </p>
                  </div>
                </div>

                {/* Where the Certificate is Accepted */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#182333] flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#243042]" />
                    <span>Onde o seu certificado pode ser utilizado:</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-700">
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="font-bold text-[#182333] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Horas Complementares Universitárias</span>
                      </div>
                      <p className="text-slate-500">
                        Válido para horas complementares. A aceitação como atividade complementar fica sujeita às normas internas de cada instituição de ensino. Recomenda-se consulta prévia.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="font-bold text-[#182333] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Provas de Títulos em Concursos</span>
                      </div>
                      <p className="text-slate-500">
                        Válido como título de capacitação profissional em processos seletivos e concursos públicos, conforme critérios do edital específico de cada órgão.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="font-bold text-[#182333] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Progressão Funcional & Carreira</span>
                      </div>
                      <p className="text-slate-500">
                        Apresentação em planos de cargos, carreiras e salários (PCCS) de empresas privadas e instituições públicas para elevação salarial e promoção.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="font-bold text-[#182333] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Enriquecimento Curricular & LinkedIn</span>
                      </div>
                      <p className="text-slate-500">
                        Comprovação de competências técnicas e comportamentais (Soft Skills) perante recrutadores, headhunters e conselhos de classe.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Strategic Certificate Model & PDF Card */}
                <div className="p-6 rounded-2xl bg-[#182333] text-white border border-slate-700 shadow-lg space-y-4">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-600 shrink-0 relative group cursor-pointer" onClick={() => onOpenCertificatePreview?.()}>
                        <img src={modeloCertificadoImg} alt="Modelo Oficial do Certificado ESDHUBEM" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-5 h-5 text-amber-400" />
                        </div>
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-[#FFC72C] text-[10px] font-bold uppercase tracking-wider mb-1">
                          <Award className="w-3.5 h-3.5" />
                          <span>Padrão Institucional ESDHUBEM</span>
                        </div>
                        <h4 className="font-bold text-base text-white">
                          Modelo Oficial de Certificado & Manual do Padrão Digital (PDF)
                        </h4>
                        <p className="text-xs text-slate-300">
                          Veja a estrutura do certificado impresso e baixe o documento institucional com os pilares de confiança legal.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
                      <button
                        type="button"
                        onClick={() => {
                          if (onNavigate) onNavigate('regras-certificacao-merito');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-3 bg-[#FFC72C] hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-105"
                      >
                        <Award className="w-4 h-4" />
                        <span>Regras de Certificação</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Authenticity Features */}
                <div className="p-6 rounded-2xl bg-[#182333] text-white space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFC72C] text-slate-950 flex items-center justify-center font-black">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">
                        Tecnologia Antifraude e Validação Pública em Tempo Real
                      </h4>
                      <p className="text-xs text-slate-300">
                        Cada certificado emitido pela ESDHUBEM conta com elementos infalsificáveis de segurança:
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-2">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <span className="text-[#FFC72C] font-bold block mb-1">Código Único:</span>
                      Identificador alfanumérico perpétuo (ex: ESD-2026-XXXX).
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl">
                      <span className="text-[#FFC72C] font-bold block mb-1">Hash Criptográfico:</span>
                      Assinatura digital garantindo que o conteúdo original não foi alterado.
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl">
                      <span className="text-[#FFC72C] font-bold block mb-1">QR Code de Consulta:</span>
                      Leitura instantânea por celular para visualização do registro oficial.
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: Termos de Uso */}
            {activeTab === 'termos' && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-in fade-in duration-300">
                <div className="border-b border-slate-100 pb-5">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#243042] uppercase tracking-wider mb-1">
                    <FileText className="w-4 h-4 text-[#FFC72C]" />
                    <span>Regras da Plataforma</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
                    Termos e Condições Gerais de Uso
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Última atualização: Março de 2026 • ESDHUBEM Ensino a Distância.
                  </p>
                </div>

                <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <section className="space-y-2">
                    <h3 className="text-base font-bold text-[#182333]">1. Objeto e Aceitação</h3>
                    <p>
                      O presente instrumento regula as condições de utilização dos serviços educacionais da plataforma ESDHUBEM. Ao se cadastrar, navegar ou se matricular em qualquer treinamento, o usuário declara concordar integralmente com estes Termos.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base font-bold text-[#182333]">2. Modalidade dos Cursos & Freepremium</h3>
                    <p>
                      A ESDHUBEM oferece treinamentos na modalidade Cursos Livres via Ensino a Distância (EAD) e presencial. Nos cursos com modalidade <strong>Freepremium</strong>, há o <strong>Acesso Gratuito + Certificado Opcional digital ou físico</strong>. Você assiste às aulas sem custo. Caso deseje o certificado, é disponibilizada taxa de emissão referente à confecção, registro e validação do documento, conforme o tipo de certificado. Nenhum valor é exigido para acesso ao conteúdo de aprendizagem, mas caso queira existe a possibilidade de oferecer uma contribuição para a plataforma ESDHUBEM em forma de doação no formato de pix para o esdhubem@proton.me
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base font-bold text-[#182333]">3. Propriedade Intelectual e Direitos Autorais</h3>
                    <p>
                      Todo o acervo de videoaulas, apostilas, e-books, apresentações, ilustrações e marcas registradas são de titularidade exclusiva da ESDHUBEM e seus respectivos professores autores. É estritamente vedada a comercialização, reprodução desautorizada, cópia pública, download não franqueado, rateio de senhas ou qualquer forma de pirataria sob as penas da Lei nº 9.610/98 (Lei dos Direitos Autorais).
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base font-bold text-[#182333]">4. Direito de Arrependimento e Reembolso</h3>
                    <p>
                      Em respeito ao Artigo 49 do Código de Defesa do Consumidor (CDC), para aquisições de certificados ou cursos com taxas pagas online, o estudante possui o prazo incondicional de 7 (sete) dias corridos a contar da data de confirmação do pagamento para solicitar o estorno integral de qualquer quantia desembolsada, mediante contato com nossos canais de suporte. No caso dos cursos freepremium como são da modalidade gratuitos, eles não tem direito a pedido de reembolso.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base font-bold text-[#182333]">5. Emissão e Requisitos de Conclusão</h3>
                    <p>
                      Para a obtenção do certificado com carga horária averbada, o estudante deverá cumprir o percentual 100% de aulas assistidas e, quando exigido pelo módulo do treinamento, atingir a nota mínima de 7,0 aproveitamento na avaliação de verificação de aprendizagem. Já os certificados e requisitos para treinamentos presenciais nas empresas ficam a critério de negociação com as mesmas; portanto, a carga horária, emissão de certificados e conclusão dependerão dos acordos estabelecidos.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* TAB 3: Privacidade & LGPD */}
            {activeTab === 'privacidade' && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-in fade-in duration-300">
                <div className="border-b border-slate-100 pb-5">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#243042] uppercase tracking-wider mb-1">
                    <Lock className="w-4 h-4 text-[#FFC72C]" />
                    <span>Proteção de Dados Pessoais</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
                    Política de Privacidade & LGPD (Lei nº 13.709/18)
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Transparência sobre como seus dados pessoais são guardados com estrito sigilo.
                  </p>
                </div>

                <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <section className="space-y-2">
                    <h3 className="text-base font-bold text-[#182333]">1. Finalidade da Coleta de Dados</h3>
                    <p>
                      A ESDHUBEM coleta dados estritamente necessários para viabilizar sua jornada acadêmica:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li><strong>Nome Completo e CPF:</strong> exigidos por força da regulamentação educacional para emissão e autenticação fidedigna de certificados perante secretarias acadêmicas e órgãos públicos.</li>
                      <li><strong>E-mail e Telefone:</strong> para envio de links de acesso, comunicados pedagógicos e confirmação de matrícula.</li>
                    </ul>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base font-bold text-[#182333]">2. Não Compartilhamento e Sigilo Absoluto</h3>
                    <p>
                      A ESDHUBEM <strong>jamais vende, aluga ou compartilha seus dados pessoais com anunciantes de terceiros</strong>. O compartilhamento ocorre exclusivamente com os provedores técnicos essenciais à prestação do serviço (como gateways de pagamento criptografados e servidores de hospedagem segura).
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base font-bold text-[#182333]">3. Segurança da Informação</h3>
                    <p>
                      Adotamos protocolos avançados de segurança digital, incluindo criptografia SSL/TLS em todas as conexões, bancos de dados protegidos e rotinas de auditoria contra acessos não autorizados.
                    </p>
                  </section>

                  <section className="space-y-2">
                    <h3 className="text-base font-bold text-[#182333]">4. Direitos do Titular</h3>
                    <p>
                      Em conformidade com a LGPD, você possui o direito de confirmar a existência de tratamento, solicitar correção de dados incompletos ou inexatos, requerer a anonimização ou exclusão definitiva de cadastros quando legalmente aplicável, mediante simples solicitação ao nosso canal de atendimento.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* TAB 4: Dados Institucionais & Contato */}
            {activeTab === 'institucional' && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-in fade-in duration-300">
                <div className="border-b border-slate-100 pb-5">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#243042] uppercase tracking-wider mb-1">
                    <Building2 className="w-4 h-4 text-[#FFC72C]" />
                    <span>Identificação Institucional</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
                    Dados da Instituição & Coordenação Pedagógica
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Conheça a equipe responsável e os canais oficiais de comunicação e ouvidoria.
                  </p>
                </div>

                {/* School Presentation Card */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-200 p-0.5 shrink-0">
                      <img src={esdhubemLogo} alt="ESDHUBEM Logo" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#182333]">
                        ESDHUBEM - Escola de Desenvolvimento Humano e Bem-Estar
                      </h3>
                      <p className="text-xs text-slate-500">
                        Instituição especializada em capacitação continuada, inteligência emocional e práticas integrativas.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-200">
                    <div>
                      <span className="font-bold text-slate-500 block">Natureza Educacional:</span>
                      Cursos Livres de Educação Continuada e Profissional (Lei 9.394/96).
                    </div>
                    <div>
                      <span className="font-bold text-slate-500 block">Modalidade:</span>
                      Ensino a Distância (EAD) com certificação digital nacional.
                    </div>
                  </div>
                </div>

                {/* Pedagogical Leadership */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
                  <h4 className="text-sm font-bold text-[#182333] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#243042]" />
                    <span>Coordenação Pedagógica e Responsabilidade Técnica</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Professora Silviane Silvério</strong> • Biomédica graduada, Pós-graduada em Práticas Integrativas e Complementares em Saúde, atuante na formação de líderes e desenvolvimento humano humanizado.
                  </p>
                  <a
                    href="http://lattes.cnpq.br/7481458793724724"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#243042] hover:text-[#FFC72C] transition-colors"
                  >
                    <span>Consultar Currículo Lattes CNPq (nº 7481458793724724)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Contact Channels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#182333] text-white space-y-2">
                    <div className="flex items-center gap-2 text-[#FFC72C] text-xs font-bold uppercase">
                      <PhoneCall className="w-4 h-4" />
                      <span>WhatsApp Oficial</span>
                    </div>
                    <div className="text-lg font-extrabold text-white">
                      (11) 960319637
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Atendimento ao aluno, esclarecimento de dúvidas e suporte a matrículas de segunda a sexta-feira.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#182333] text-white space-y-2">
                    <div className="flex items-center gap-2 text-[#FFC72C] text-xs font-bold uppercase">
                      <Mail className="w-4 h-4" />
                      <span>Secretaria & Certificação</span>
                    </div>
                    <div className="text-sm font-bold text-white truncate">
                      esdhubem@proton.me
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Envio de requerimentos de 2ª via de certificado, validação institucional e termos de parceria.
                    </p>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
