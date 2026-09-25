import React from 'react';
import {
  GraduationCap,
  Scale,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  FileCheck,
  Award,
  ArrowLeft,
  Building2,
  BookOpen,
  AlertCircle,
  Briefcase,
  Gift,
  Compass,
  Eye,
  Download
} from 'lucide-react';
import modeloCertificadoImg from '../assets/modelo-certificado.jpg';

interface DireitosAlunoPageProps {
  onBackToHome: () => void;
  onOpenValidator?: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const DireitosAlunoPage: React.FC<DireitosAlunoPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigate
}) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Header Banner */}
      <div className="bg-[#182333] text-white border-b border-slate-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-slate-300">Transparência Acadêmica</span>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">Horas Complementares & Amparo Legal</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4" />
            <span>Resolução CNE/CES 7/2018 & Lei 9.394/96</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Horas Complementares vs. Extensão & Direitos do Aluno
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Entenda detalhadamente a diferença entre as Horas Complementares Tradicionais e a nova Extensão Curricular (os 10% do MEC), os direitos do estudante universitário e a aceitação dos nossos certificados em todo o Brasil.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Highlight Section: Entendendo as Duas Caixas da Faculdade */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Entendendo as Duas Obrigatividades da Faculdade</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Caixa 1 vs. Caixa 2: Onde os Cursos Livres se Enquadram?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A Resolução CNE/CES 7/2018 do Ministério da Educação (MEC) separou as exigências acadêmicas dos estudantes universitários em duas frentes independentes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Caixa 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-slate-200 text-slate-800">
                  Caixa 1
                </span>
                <span className="text-xs font-bold text-slate-500">Regra dos 10% do MEC</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Horas de Extensão Comunitária
              </h3>

              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p>
                  <strong>O que é:</strong> Atividades práticas e presenciais voltadas à comunidade externa (projetos sociais, oficinas públicas e atendimentos comunitários) organizadas diretamente pela sua própria universidade.
                </p>
                <p className="bg-rose-50 border border-rose-200 p-3 rounded-xl text-rose-900 font-semibold">
                  ⚠️ Cursos livres online de qualquer instituição externa NÃO podem ser utilizados para abater a Caixa 1 (Extensão Comunitária Prática).
                </p>
              </div>
            </div>

            {/* Caixa 2 */}
            <div className="p-6 rounded-2xl bg-amber-50/60 border-2 border-amber-300 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-[#243042] text-[#FFC72C]">
                  Caixa 2 • Nossos Cursos Entram Aqui!
                </span>
                <span className="text-xs font-bold text-amber-900">Aceitação Obrigatória</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Horas Complementares Convencionais
              </h3>

              <div className="space-y-3 text-xs text-slate-800 leading-relaxed">
                <p>
                  <strong>O que é:</strong> A exigência tradicional de 100h a 200h de atividades extracurriculares que todo aluno de graduação precisa comprovar para colar grau e se formar.
                </p>
                <p className="bg-emerald-100/80 border border-emerald-300 p-3 rounded-xl text-emerald-950 font-bold flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Nossos certificados são 100% ACEITOS e válidos pelas faculdades de todo o Brasil para preencher essa carga horária com rapidez e segurança jurídica.</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Pillars Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#243042]" />
              <span>Nossas 3 Modalidades de Capacitação</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Como a ESDHUBEM estrutura suas metodologias para atender alunos universitários e profissionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Gift className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">1. Cursos Freemium</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Assista a todas as videoaulas e acesse o material didático de forma 100% gratuita. Caso precise do certificado oficial com QR Code e código alfanumérico para a faculdade, você paga apenas uma taxa simbólica de emissão.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">2. Horas Complementares</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Treinamentos objetivos e focados nas principais disciplinas universitárias (20h a 60h). Planejados sob medida para rápida aprovação na secretaria acadêmica do seu curso superior.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold">
                <Compass className="w-5 h-5 text-[#FFC72C]" />
              </div>
              <h3 className="text-base font-bold text-slate-900">3. Formação Livre</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cursos densos e práticos desenhados para qualificação profissional e geração de renda imediata. Foco em ferramentas de mercado, liderança, programação e gestão de projetos.
              </p>
            </div>

          </div>
        </div>

        {/* Validação na Faculdade & Concursos */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              <span>O que a Secretaria da Faculdade e os RHs Analisam?</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Todos os nossos certificados possuem os 3 pilares obrigatórios para validação instantânea:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">1. CNPJ Ativo e Razão Social</span>
              <p className="text-slate-600">
                Emitidos sob o CNPJ ativo 61.928.778/0001-50 (São Paulo - SP), garantindo respaldo jurídico formal da instituição de ensino.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">2. Conteúdo Programático Ementado</span>
              <p className="text-slate-600">
                No verso do certificado, consta a grade ementada com a discriminação dos módulos e temas ministrados.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">3. Validação Pública via QR Code</span>
              <p className="text-slate-600">
                Código alfanumérico único e Hash SHA-256 para verificação imediata pela secretaria acadêmica ou avaliador de concurso.
              </p>
            </div>
          </div>

          {/* Applicable Scenarios */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 mb-3">
              Onde o seu certificado ESDHUBEM é aceito em todo o Brasil:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Faculdades e Universidades (Horas Complementares de Graduação)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Concursos Públicos (Prova de Títulos conforme edital)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Progressão Funcional de Servidores Públicos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Evolução de Carreira, Promoções e Seleção em RHs de Empresas Privadas</span>
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
                    Modelo Oficial do Certificado & Guia PDF do Novo Padrão
                  </h4>
                  <p className="text-xs text-slate-300">
                    Confira a estrutura visual do certificado e faça o download da apresentação completa do Padrão Digital.
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
        </div>

      </div>
    </div>
  );
};
