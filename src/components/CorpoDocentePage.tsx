import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Database,
  Layers,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  Sparkles,
  Users,
  Brain,
  Phone,
  Mail
} from 'lucide-react';
import profSilvianeImg from '../assets/prof-silviane.png';
import henriqueVivianImg from '../assets/henrique-vivian.jpg';

interface CorpoDocentePageProps {
  onBackToHome: () => void;
  onNavigateToCourseCatalog?: () => void;
}

export const CorpoDocentePage: React.FC<CorpoDocentePageProps> = ({
  onBackToHome,
  onNavigateToCourseCatalog
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
            <span className="text-[#FFC72C] font-semibold">Corpo Docente & Especialistas</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC72C]/10 border border-[#FFC72C]/30 text-[#FFC72C] text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Diretrizes de Qualidade Google E-E-A-T</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Corpo Docente & Especialistas ESDHUBEM
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Conheça os especialistas, pesquisadores e engenheiros responsáveis pela elaboração pedagógica, matriz curricular, análise de dados e suporte tecnológico da nossa instituição.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Intro E-E-A-T Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Compromisso com a Autoria e Rigor Técnico
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Na ESDHUBEM, prezamos pela máxima transparência pedagógica exigida pelas diretrizes globais do Google e pelas normas da Lei nº 9.394/96 (LDB). Nossos treinamentos são criados e auditados por profissionais com titulação acadêmica comprovada, atuantes no mercado e na pesquisa científica.
              </p>
            </div>
          </div>
        </div>

        {/* Professors Section */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
              <Users className="w-6 h-6 text-[#243042]" />
              <span>Docentes e Responsáveis Técnicos</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Perfis verificados e qualificações dos membros fundadores e educadores principais.
            </p>
          </div>

          {/* Profile Card 1: Silviane Silvério */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden hover:border-slate-300 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Photo & Badges */}
              <div className="lg:col-span-4 bg-gradient-to-b from-[#182333] to-[#243042] p-8 text-white flex flex-col items-center justify-center text-center">
                <div className="w-36 h-36 rounded-full border-4 border-[#FFC72C] overflow-hidden shadow-xl mb-4 bg-slate-800">
                  <img
                    src={profSilvianeImg}
                    alt="Profª. Silviane Silvério"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-1">
                  Profª. Silviane Silvério
                </h3>
                <p className="text-xs text-[#FFC72C] font-semibold uppercase tracking-wider mb-3">
                  Fundadora & Docente Principal
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span>Especialista em Práticas Integrativas</span>
                </div>
              </div>

              {/* Right Bio & Details */}
              <div className="lg:col-span-8 p-6 sm:p-8 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                    Formação & Experiência Acadêmica
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Especialista e pesquisadora em Desenvolvimento Humano, Práticas Integrativas e Complementares em Saúde, Liderança Assertiva e Gestão de Conflitos. Atua há mais de uma década na estruturação de metodologias de ensino EAD focadas na capacitação prática de estudantes universitários e profissionais do setor corporativo.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-slate-900 block flex items-center gap-1.5">
                      <Brain className="w-4 h-4 text-emerald-600" />
                      Especialidades Pedagógicas
                    </span>
                    <p className="text-xs text-slate-600">
                      Comunicação Assertiva, Práticas Integrativas de Bem-estar, Liderança Inspiradora e Educação Emocional.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-slate-900 block flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      Responsabilidade Acadêmica
                    </span>
                    <p className="text-xs text-slate-600">
                      Supervisão de conteúdos ementários, validação de apostilas e regência das videoaulas de Desenvolvimento Pessoal.
                    </p>
                  </div>
                </div>

                {/* Academic Profile Badges: Lattes iD & ORCID iD */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-amber-200/80 space-y-2">
                  <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-amber-600" />
                    Perfis Acadêmicos & Científicos Verificados
                  </span>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href="http://lattes.cnpq.br/7481458793724724"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-900 text-xs font-bold transition-all shadow-xs group"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600 inline-block group-hover:scale-125 transition-transform" />
                      <span>Currículo Lattes iD</span>
                      <ExternalLink className="w-3 h-3 text-blue-600" />
                    </a>

                    <a
                      href="https://orcid.org/0000-0001-6311-1195"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-900 text-xs font-bold transition-all shadow-xs group"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block group-hover:scale-125 transition-transform" />
                      <span>ORCID iD: 0000-0001-6311-1195</span>
                      <ExternalLink className="w-3 h-3 text-emerald-600" />
                    </a>
                  </div>
                </div>

                {/* Courses Taught Tag */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-slate-700">Cursos sob sua regência:</span>
                    <span className="bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full font-bold">Comunicação Assertiva (40h)</span>
                    <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-bold">Práticas Integrativas (60h)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card 2: Henrique Vivian */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden hover:border-slate-300 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Photo & Badges */}
              <div className="lg:col-span-4 bg-gradient-to-b from-[#182333] to-[#243042] p-8 text-white flex flex-col items-center justify-center text-center">
                <div className="w-36 h-36 rounded-full border-4 border-[#FFC72C] overflow-hidden shadow-xl mb-4 bg-slate-800">
                  <img
                    src={henriqueVivianImg}
                    alt="Prof. Henrique Vivian"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-1">
                  Prof. Henrique Vivian
                </h3>
                <p className="text-xs text-[#FFC72C] font-semibold uppercase tracking-wider mb-3">
                  Backend, Análise de Dados & Arquitetura
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-bold">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Pós-Graduado em Arquitetura de Sistemas</span>
                </div>
              </div>

              {/* Right Bio & Details */}
              <div className="lg:col-span-8 p-6 sm:p-8 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                    Formação & Titulação Técnica
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Graduado em Análise de Sistemas e Pós-Graduado em Arquitetura e Desenvolvimento de Sistemas com ênfase em Padrões de Projetos (Design Patterns). Especialista em desenvolvimento backend, engenharia de dados, microsserviços e integração de plataformas computacionais.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-slate-900 block flex items-center gap-1.5">
                      <Database className="w-4 h-4 text-cyan-600" />
                      Engenharia de Dados & IA
                    </span>
                    <p className="text-xs text-slate-600">
                      Análise de dados de aprendizagem, modelos preditivos de desempenho do aluno e inteligência computacional aplicada.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-slate-900 block flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-indigo-600" />
                      Arquitetura & Segurança
                    </span>
                    <p className="text-xs text-slate-600">
                      Desenvolvimento backend, padronização de APIs RESTful, segurança de dados e criptografia de certificados.
                    </p>
                  </div>
                </div>

                {/* Courses Taught Tag */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-slate-700">Responsabilidades Técnicas:</span>
                    <span className="bg-indigo-100 text-indigo-900 px-2.5 py-0.5 rounded-full font-bold">Arquitetura da Plataforma</span>
                    <span className="bg-cyan-100 text-cyan-900 px-2.5 py-0.5 rounded-full font-bold">Segurança & Autenticidade (SHA-256)</span>
                  </div>
                </div>

                {/* Direct Contact Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://wa.me/5511960319637?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20Henrique%20Vivian%20sobre%20desenvolvimento%20tecnol%C3%B3gico,%20apps,%20dashboards%20ou%20biolinks"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Falar com Henrique via WhatsApp (11) 960319637</span>
                  </a>

                  <a
                    href="mailto:esdhubem@proton.me?subject=Contato%20T%C3%A9cnico%20-%20Henrique%20Vivian"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#182333] hover:bg-[#243042] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FFC72C]" />
                    <span>Contato Técnico por E-mail</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Amparo Legal Banner */}
        <div className="bg-[#182333] text-white rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#FFC72C] text-xs font-extrabold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Fundamentação Jurídica & Reconhecimento</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold">
            Cursos Livres Amparados pela Legislação Federal Brasileira
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
            Nossos treinamentos e certificações seguem integralmente as diretrizes da <strong>Lei nº 9.394/1996 (Lei de Diretrizes e Bases da Educação Nacional)</strong> e do <strong>Decreto Presidencial nº 5.154/2004</strong>, garantindo legitimidade para Atividades Complementares nas faculdades, prova de títulos em concursos públicos e qualificação no mercado de trabalho.
          </p>
        </div>

      </div>
    </div>
  );
};
