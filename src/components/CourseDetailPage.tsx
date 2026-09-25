import React, { useState } from 'react';
import {
  Clock,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ExternalLink,
  Users,
  Star,
  BookOpen,
  ShieldCheck,
  ArrowLeft,
  Signal,
  Tv,
  Sparkles,
  Info,
  Award,
  FileCheck,
  Target,
  BrainCircuit,
  QrCode,
  LayoutTemplate,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Eye,
  FileText
} from 'lucide-react';
import { Course } from '../types';
import profSilvianeImg from '../assets/prof-silviane.png';

interface CourseDetailPageProps {
  course?: Course;
  onBackToHome: () => void;
  onEnroll: () => void;
  onOpenValidator: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  onBackToHome,
  onEnroll,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<
    'sobre' | 'conteudo' | 'publico' | 'competencias' | 'legislacao' | 'autenticidade' | 'formato'
  >('sobre');
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const courseId = course?.id || 'fp-assertiva';
    const baseUrl = window.location.href.split('?')[0];
    const url = `${baseUrl}?curso=${courseId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleModule = (index: number) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter((i) => i !== index));
    } else {
      setExpandedModules([...expandedModules, index]);
    }
  };

  // Fallbacks if no course passed
  const title = course?.title || 'Comunicação Assertiva com a Liderança';
  const subtitle = course?.subtitle || 'Aprenda a expressar suas ideias com firmeza, clareza e respeito no ambiente corporativo.';
  const category = course?.category || 'Cursos Freepremium';
  const image = course?.image || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80';
  const hours = course?.hours || 40;
  const rating = course?.rating || 4.9;
  const studentsCount = course?.studentsCount || 3800;
  const badge = course?.badge || 'Curso Destaque';
  const syllabus = course?.syllabus || [
    'Módulo 1: Fundamentos da Comunicação Assertiva',
    'Módulo 2: Postura e Comportamento',
    'Módulo 3: Aplicando no Ambiente Corporativo'
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 pb-20">
      
      {/* Breadcrumb Bar */}
      <div className="bg-[#182333] border-b border-slate-700/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <button
                onClick={onBackToHome}
                className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Início</span>
              </button>
              <span>/</span>
              <span className="text-[#FFC72C] font-semibold truncate">
                {title}
              </span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Course Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden shadow-lg border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto py-10 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
          
          {/* Hero Left Content */}
          <div className="w-full md:w-2/3 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#FFC72C] text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {category}
              </span>
              <span className="bg-white/10 text-slate-200 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
                {badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-white tracking-tight">
              {title}
            </h1>

            <p className="text-slate-300 text-sm md:text-base max-w-2xl mb-6 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-200">
              {category === 'Landing Pages & Biolinks' ? (
                <>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                    <Clock className="w-4 h-4 text-[#FFC72C]" />
                    <span>Prazo de Entrega: <strong>{hours} horas</strong></span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                    <LayoutTemplate className="w-4 h-4 text-[#FFC72C]" />
                    <span>Domínio & Hospedagem 1 Ano Grátis</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-amber-300">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    <span className="font-bold text-white">{rating}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                    <Clock className="w-4 h-4 text-[#FFC72C]" />
                    <span>Carga Horária: <strong>{hours} horas</strong></span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                    <GraduationCap className="w-4 h-4 text-[#FFC72C]" />
                    <span>Com Certificado Oficial</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-amber-300">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    <span className="font-bold text-white">{rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-slate-300">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span>+{studentsCount} alunos</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Hero Right Visual Banner */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 max-w-sm w-full group">
              <img
                src={image}
                alt={title}
                className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#182333] via-[#182333]/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="bg-[#182333]/90 backdrop-blur-xs px-2.5 py-1 rounded-md font-semibold text-[#FFC72C]">
                  ESDHUBEM Oficial
                </span>
              </div>
            </div>
            
            {/* Share Buttons (Hero) */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl shadow-sm backdrop-blur-xs max-w-sm w-full justify-center">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Compartilhar:</span>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-slate-200 hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-sky-500 flex items-center justify-center text-slate-200 hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-700 flex items-center justify-center text-slate-200 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FFC72C] flex items-center justify-center text-slate-200 hover:text-[#182333] transition-colors relative"
                  title="Copiar Link"
                >
                  <Copy className="w-4 h-4" />
                  {copied && (
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-[#182333] text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap shadow-xl z-50">
                      Link Copiado!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <BookOpen className="w-[450px] h-[450px] text-white" />
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
            <button
              onClick={() => setActiveTab('sobre')}
              className={`whitespace-nowrap py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'sobre'
                  ? 'border-[#182333] text-[#182333]'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              Descrição
            </button>
            <button
              onClick={() => setActiveTab('conteudo')}
              className={`whitespace-nowrap py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                activeTab === 'conteudo'
                  ? 'border-[#182333] text-[#182333]'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {category === 'Landing Pages & Biolinks' ? 'O que está incluso' : 'Conteúdo'}
            </button>
            {category !== 'Landing Pages & Biolinks' && (
              <>
                <button
                  onClick={() => setActiveTab('publico')}
                  className={`whitespace-nowrap py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'publico'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  Público-Alvo
                </button>
                <button
                  onClick={() => setActiveTab('competencias')}
                  className={`whitespace-nowrap py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'competencias'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  Competências Desenvolvidas
                </button>
                <button
                  onClick={() => setActiveTab('legislacao')}
                  className={`whitespace-nowrap py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'legislacao'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  Legislação
                </button>
                <button
                  onClick={() => setActiveTab('autenticidade')}
                  className={`whitespace-nowrap py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'autenticidade'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  Autenticidade
                </button>
                <button
                  onClick={() => setActiveTab('formato')}
                  className={`whitespace-nowrap py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'formato'
                      ? 'border-[#182333] text-[#182333]'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  Formato
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Content (Left Column - 2/3) */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-10 min-h-[500px]">
              
              {/* TAB 1: Descrição */}
              {activeTab === 'sobre' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#182333] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                      <Info className="w-4 h-4" />
                    </div>
                    <span>Sobre o Curso</span>
                  </h3>
                  <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-sm sm:text-base">
                    <p>
                      Este curso oferece uma visão completa e aprofundada sobre como planejar, estruturar e aplicar técnicas práticas e contemporâneas. Através de metodologias fundamentadas, você compreenderá o que o mercado moderno espera de um profissional capacitado para dialogar com clareza e autoridade.
                    </p>
                    <p>
                      {course?.description || 'Você aprenderá desde o gerenciamento de demandas corporativas até a condução estratégica de resultados no seu ambiente de trabalho.'}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: Conteúdo */}
              {activeTab === 'conteudo' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#182333] flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <span>{category === 'Landing Pages & Biolinks' ? 'Itens do Pacote' : 'O que você vai aprender'}</span>
                    </h3>
                    <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                      {syllabus.length} Módulos
                    </span>
                  </div>

                  <div className="space-y-3">
                    {syllabus.map((mod, index) => (
                      <div key={index} className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                        <div
                          onClick={() => toggleModule(index)}
                          className="bg-slate-50 hover:bg-slate-100 px-5 py-4 flex justify-between items-center cursor-pointer transition select-none"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-lg bg-[#243042] text-[#FFC72C] text-xs font-black flex items-center justify-center">
                              {index + 1}
                            </span>
                            <h4 className="font-bold text-sm sm:text-base text-[#182333]">
                              {mod}
                            </h4>
                          </div>
                          {expandedModules.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-slate-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-500" />
                          )}
                        </div>

                        {expandedModules.includes(index) && (
                          <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {category === 'Landing Pages & Biolinks' ? (
                              <p className="mb-2 text-slate-500">Incluso no serviço padrão contratado</p>
                            ) : (
                              <p className="mb-2 text-slate-500">Videoaula explicativa + Material complementar em PDF</p>
                            )}
                            <ul className="space-y-2">
                              <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span>{category === 'Landing Pages & Biolinks' ? 'Garantia de Qualidade' : 'Acesso Imediato'}</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Público-Alvo */}
              {activeTab === 'publico' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#182333] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                      <Users className="w-4 h-4" />
                    </div>
                    <span>Público-Alvo</span>
                  </h3>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      Estudantes universitários em busca de horas complementares averbadas, recém-formados, analistas, supervisores, gestores de equipe e profissionais de todas as áreas (Saúde, Negócios, Educação, Audiovisual e Tecnologia) que desejam desenvolver uma postura técnica e assertiva.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 4: Competências */}
              {activeTab === 'competencias' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#182333] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                      <BrainCircuit className="w-4 h-4" />
                    </div>
                    <span>Competências Desenvolvidas</span>
                  </h3>
                  <ul className="space-y-4 text-sm sm:text-base text-slate-700 bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Capacidade de autorregulação e maturidade socioemocional.</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Comunicação empática em momentos de tensão interpessoal.</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Ferramentas práticas de aplicação imediata no ambiente profissional e pessoal.</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Pensamento crítico, humanista e ético embasado cientificamente.</strong></span>
                    </li>
                  </ul>
                </div>
              )}

              {/* TAB 5: Legislação */}
              {activeTab === 'legislacao' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#182333] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <span>Validade Oficial e Legislação</span>
                  </h3>
                  <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                    <p className="text-sm sm:text-base text-amber-900 leading-relaxed text-justify">
                      Certificado de Curso Livre emitido pela <strong>ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar (CNPJ 61.928.778/0001-50)</strong> em total conformidade com a <strong>Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/96)</strong>. Não é diploma de graduação, pós-graduação ou ensino técnico.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 6: Autenticidade */}
              {activeTab === 'autenticidade' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#182333] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                      <QrCode className="w-4 h-4" />
                    </div>
                    <span>Autenticidade e Consulta Pública</span>
                  </h3>
                  <div className="border border-slate-200 p-6 rounded-xl bg-slate-50 flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 shrink-0">
                      <QrCode className="w-20 h-20 text-[#182333]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#182333] mb-2">Verificação Instantânea</h4>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Inclui autenticidade via QR Code e código alfanumérico com consulta pública instantânea para faculdades, empresas e conselhos de classe.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 7: Formato */}
              {activeTab === 'formato' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#182333] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#243042] text-[#FFC72C] flex items-center justify-center text-sm shadow-xs">
                      <LayoutTemplate className="w-4 h-4" />
                    </div>
                    <span>Formato e Carga Horária</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-slate-200 bg-white p-6 rounded-xl text-center shadow-sm">
                      <Clock className="w-10 h-10 text-[#FFC72C] mx-auto mb-3" />
                      <h4 className="font-bold text-[#182333] text-lg mb-1">Carga Horária</h4>
                      <p className="text-base text-slate-600 font-semibold">40 horas expressas</p>
                    </div>
                    <div className="border border-slate-200 bg-white p-6 rounded-xl text-center shadow-sm">
                      <Tv className="w-10 h-10 text-[#FFC72C] mx-auto mb-3" />
                      <h4 className="font-bold text-[#182333] text-lg mb-1">Formato</h4>
                      <p className="text-base text-slate-600 font-semibold">100% Online Assíncrono</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Sidebar (Right Column - 1/3) */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Teacher Profile Card */}
            <div className="bg-white border border-slate-200 shadow-md rounded-2xl overflow-hidden">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 shrink-0 border-2 border-white shadow-md">
                    <img
                      src={profSilvianeImg}
                      alt="Professora Silviane Silvério"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#FFC72C] text-slate-950 p-1 rounded-full shadow-xs" title="Docente Certificada ESDHUBEM">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#182333] mb-1">
                  Professora Silviane Silvério
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                  Graduada em Biomedicina, Pós-graduada em Práticas Integrativas e Complementares. Especialista em Desenvolvimento Humano e Comunicação Assertiva.
                </p>

                <a
                  href="http://lattes.cnpq.br/7481458793724724"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[#243042] hover:text-[#FFC72C] hover:bg-[#243042] bg-slate-100 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all"
                  title="Acessar Currículo Lattes no CNPq"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>CURRÍCULO LATTES</span>
                </a>
              </div>
            </div>

            {/* Course Purchase / Enrollment Card (Sticky on desktop) */}
            <div className="bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden sticky top-24">
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-3 left-4 flex gap-2">
                  <span className="bg-[#243042]/90 backdrop-blur-xs text-[#FFC72C] text-xs font-bold px-2.5 py-1 rounded-md">
                    {course?.pillar === 'horas-complementares' ? 'Horas Complementares' : 'Freepremium Oficial'}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-3xl font-black text-[#182333]">
                      {category === 'Landing Pages & Biolinks' ? course?.priceNote || 'A partir de R$ 397' : 'Acesso Livre'}
                    </span>
                    <span className="block text-[11px] text-emerald-700 font-semibold">
                      {category === 'Landing Pages & Biolinks' ? 'Pagamento Único' : 'Início Imediato'}
                    </span>
                  </div>
                </div>

                {category === 'Landing Pages & Biolinks' ? (
                  <a
                    href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20solicitar%20a%20criação%20da%20minha%20página."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#FFC72C] hover:bg-[#F5B014] active:scale-95 transition-all text-[#243042] font-extrabold text-sm py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Adquira Já (WhatsApp)</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={onEnroll}
                    className="w-full bg-[#243042] hover:bg-[#182333] active:scale-95 transition-all text-[#FFC72C] font-extrabold text-sm py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Acessar Curso Agora</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                {/* Strategic Certificate Preview Card */}
                {category !== 'Landing Pages & Biolinks' && (
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700/80 space-y-2">
                    <div className="flex items-center gap-2 text-[#FFC72C] font-bold text-xs">
                      <Award className="w-4 h-4 shrink-0" />
                      <span>Certificado Oficial por Mérito Acadêmico</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Conheça os 4 níveis de certificação (Bronze, Prata, Ouro e Diamante) amparados pela Lei nº 9.394/96.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        if (onNavigate) onNavigate('regras-certificacao-merito');
                        else if (onOpenCertificatePreview) onOpenCertificatePreview();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-2 px-3 bg-[#FFC72C] hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Regras de Certificação</span>
                    </button>
                  </div>
                )}

                <ul className="text-xs text-slate-600 space-y-3.5">
                  {category === 'Landing Pages & Biolinks' ? (
                    <>
                      <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                        <span className="flex items-center gap-2 text-slate-500">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span>Prazo de Entrega</span>
                        </span>
                        <span className="font-bold text-[#182333]">Até {hours} horas</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                        <span className="flex items-center gap-2 text-slate-500">
                          <ShieldCheck className="w-4 h-4 text-slate-400" />
                          <span>Suporte e Atualizações</span>
                        </span>
                        <span className="font-bold text-[#182333]">3 meses grátis</span>
                      </li>
                      <li className="flex justify-between items-center pb-1">
                        <span className="flex items-center gap-2 text-slate-500">
                          <LayoutTemplate className="w-4 h-4 text-slate-400" />
                          <span>Domínio & Hospedagem</span>
                        </span>
                        <span className="font-bold text-[#182333]">1 Ano Incluso</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                        <span className="flex items-center gap-2 text-slate-500">
                          <Signal className="w-4 h-4 text-slate-400" />
                          <span>Nível</span>
                        </span>
                        <span className="font-bold text-[#182333]">Iniciante ao Intermediário</span>
                      </li>

                      <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                        <span className="flex items-center gap-2 text-slate-500">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span>Carga Horária</span>
                        </span>
                        <span className="font-bold text-[#182333]">{hours} horas expressas</span>
                      </li>

                      <li className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                        <span className="flex items-center gap-2 text-slate-500">
                          <Tv className="w-4 h-4 text-slate-400" />
                          <span>Formato</span>
                        </span>
                        <span className="font-bold text-[#182333]">100% Online Assíncrono</span>
                      </li>
                      
                      <li className="flex justify-between items-center pb-1">
                        <span className="flex items-center gap-2 text-slate-500">
                          <Award className="w-4 h-4 text-slate-400" />
                          <span>Certificado</span>
                        </span>
                        <span className="font-bold text-[#182333]">Oficial com QR Code</span>
                      </li>
                    </>
                  )}
                </ul>
                
                {/* Share Buttons (Sidebar) */}
                <div className="pt-4 border-t border-slate-100 flex flex-col items-center gap-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Compartilhar este curso</span>
                  <div className="flex items-center gap-2.5">
                    <button className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-500 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white flex items-center justify-center text-slate-500 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-slate-100 hover:bg-blue-700 hover:text-white flex items-center justify-center text-slate-500 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleCopyLink}
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#FFC72C] flex items-center justify-center text-slate-500 hover:text-[#182333] transition-colors relative"
                      title="Copiar Link"
                    >
                      <Copy className="w-4 h-4" />
                      {copied && (
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#182333] text-white text-[10px] px-2 py-1 rounded font-bold whitespace-nowrap shadow-xl z-50">
                          Copiado!
                        </span>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
