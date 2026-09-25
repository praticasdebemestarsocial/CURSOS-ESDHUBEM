import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  BookOpen,
  Clock,
  Star,
  Users,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Layers,
  Sparkles,
  Phone,
  Download,
  Award,
  ChevronRight,
  HelpCircle,
  FileCheck,
  Target,
  UserCheck,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Mail,
  Map,
  PieChart,
  Presentation,
  Video,
  MonitorPlay,
  ClipboardList,
  LayoutTemplate,
  Eye
} from 'lucide-react';
import { Play, FileText, Video as VideoIcon } from 'lucide-react';
import profSilvianeImg from '../assets/prof-silviane.png';
import henriqueVivianImg from '../assets/henrique-vivian.jpg';
import { CategoryItem, Course } from '../types';
import { CATEGORIES_DATA, COURSES_DATA } from '../data/coursesData';

interface CategoryDetailPageProps {
  categorySlug?: string;
  onBackToCategories: () => void;
  onBackToHome: () => void;
  onSelectCourse: (course: Course) => void;
  onNavigateToCourseDetail: () => void;
  onNavigateToPortal: (courseId?: string) => void;
  onOpenValidator: () => void;
  onSelectAnotherCategory: (slug: string) => void;
  onOpenCertificatePreview?: () => void;
  onNavigate?: (sectionId: string) => void;
}

// Category custom themes and rich metadata
const CATEGORY_META: Record<
  string,
  {
    heroTag: string;
    description: string;
    targetPublic: string;
    skillsSummary: string[];
    b2bHighlights: string[];
    faq: { question: string; answer: string }[];
  }
> = {
  'desenvolvimento-nas-empresas': {
    heroTag: 'Capacitação Corporativa & DHO',
    description:
      'Cursos estratégicos voltados para fortalecimento da cultura organizacional, comunicação de liderança, gestão humanizada de equipes, saúde mental e produtividade ética em ambientes corporativos de alta performance.',
    targetPublic:
      'Líderes, gestores de equipes, profissionais de Recursos Humanos, consultores de DHO, psicólogos organizacionais e colaboradores que buscam evolução executiva.',
    skillsSummary: [
      'Segurança Psicológica & Feedback 360°',
      'Gestão Estratégica de Conflitos',
      'Saúde Mental no Trabalho e NR-1',
      'Liderança Humanizada & Equipes Ágeis',
      'Diversidade, Equidade e Inclusão (DEI)',
      'Consultoria e Diagnóstico de Clima'
    ],
    b2bHighlights: [
      'Turmas fechadas in-company e relatórios de aproveitamento para o RH',
      'Faturamento via Nota Fiscal de Serviços para Pessoa Jurídica',
      'Certificados com rastreabilidade digital para cumprimento de normas',
      'Conteúdo ministrado e supervisionado por mestres e doutores'
    ],
    faq: [
      {
        question: 'Os cursos desta categoria podem ser contratados para times inteiros da minha empresa?',
        answer:
          'Sim! A ESDHUBEM possui programas corporativos in-company customizados. Emitimos Nota Fiscal para pessoa jurídica (CNPJ), fornecemos relatórios analíticos de engajamento para a gerência de RH e geramos certificados corporativos com a chancela oficial da instituição.'
      },
      {
        question: 'Os certificados corporativos são válidos para planos de cargos e salários (PCCS)?',
        answer:
          'Sim. Nossos certificados cumprem a Lei nº 9.394/96 (LDB - Artigos 39 a 42) e o Decreto Presidencial nº 5.154/04 como Cursos Livres de Capacitação e Atualização Profissional, sendo amplamente aceitos para planos de progressão funcional e comprovação de horas de treinamento contínuo.'
      },
      {
        question: 'Posso solicitar apoio para elaborar um treinamento sob medida para o meu departamento?',
        answer:
          'Com certeza! Entre em contato direto pelo nosso WhatsApp corporativo (11) 960319637 para agendar uma conversa com nossa coordenação pedagógica chefiada pela Profa. Dra. Silviane Silvério.'
      }
    ]
  },
  'desenvolvimento-profissional': {
    heroTag: 'Carreira & Liderança Executiva',
    description:
      'Desenvolva competências decisivas para crescer no mercado de trabalho: oratória assertiva, negociação estratégica, liderança participativa e inteligência interpessoal.',
    targetPublic:
      'Profissionais em transição de carreira, estudantes universitários e líderes buscando recolocação ou promoção.',
    skillsSummary: [
      'Oratória e Comunicação Corporativa',
      'Liderança Situacional',
      'Gestão do Tempo e Produtividade',
      'Negociação Ganha-Ganha'
    ],
    b2bHighlights: [
      'Capacitação rápida e prática para aplicação no dia a dia',
      'Certificados oficiais válidos para enriquecimento de currículo e LinkedIn'
    ],
    faq: [
      {
        question: 'Estes cursos valem para horas complementares na faculdade?',
        answer:
          'Sim, todos os cursos emitem certificado com carga horária expressa e código de verificação aceito por secretarias acadêmicas de todo o Brasil.'
      }
    ]
  },
  'landing-pages-biolinks': {
    heroTag: 'Desenvolvimento Web & Soluções Digitais',
    description:
      'Soluções de alta conversão para profissionais, advogados, psicólogos, médicos e empresas. Criação de Landing Pages personalizadas, Biolinks interativos, hospedagem e estrutura técnica completa.',
    targetPublic:
      'Advogados, psicólogos, médicos, corretores de imóveis, consultores e profissionais liberais que buscam presença digital forte e atração de clientes.',
    skillsSummary: [
      'Design Responsivo & Alta Conversão',
      'Integração com WhatsApp & Formulários',
      'Configuração de Domínio & SSL',
      'Arquitetura de Sistemas & SEO'
    ],
    b2bHighlights: [
      'Entregue e configurado em até 48 horas',
      'Suporte técnico e manutenção inclusa'
    ],
    faq: [
      {
        question: 'Como funciona a entrega da Landing Page ou Biolink?',
        answer:
          'Após o fechamento, nossa equipe entra em contato via WhatsApp para alinhar o briefing. O desenvolvimento técnico e publicação no ar ocorrem em até 48 horas.'
      }
    ]
  }
};

export const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({
  categorySlug = 'desenvolvimento-nas-empresas',
  onBackToCategories,
  onBackToHome,
  onSelectCourse,
  onNavigateToCourseDetail,
  onNavigateToPortal,
  onOpenValidator,
  onSelectAnotherCategory,
  onOpenCertificatePreview,
  onNavigate
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [selectedHoursRange, setSelectedHoursRange] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const catId = currentCategory?.id || 'desenvolvimento-nas-empresas';
    const baseUrl = window.location.href.split('?')[0];
    const url = `${baseUrl}?categoria=${catId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Derive active category from slug (or fallback to generic B2B)
  const currentCategory: CategoryItem = useMemo(() => {
    return (
      CATEGORIES_DATA.find((cat) => cat.id === categorySlug) ||
      CATEGORIES_DATA.find((cat) => cat.id === 'desenvolvimento-nas-empresas') ||
      CATEGORIES_DATA[0]
    );
  }, [categorySlug]);

  const categoryCleanName = currentCategory.title.replace('\n', ' ');

  // Get specific category metadata or fallback
  const meta = CATEGORY_META[currentCategory.id] || {
    heroTag: `Área: ${categoryCleanName}`,
    description: `Cursos especializados e atualizados na área de ${categoryCleanName}, desenhados com metodologia ativa e certificação oficial válida em todo o Brasil.`,
    targetPublic: 'Estudantes, profissionais em busca de atualização e pessoas interessadas em aprimoramento contínuo.',
    skillsSummary: ['Aprendizado Prático', 'Certificação Reconhecida', 'Horas Complementares', 'Metodologia Ativa'],
    b2bHighlights: ['Metodologia flexível com videoaulas e e-books', 'Certificados com validação antifraude via QR Code'],
    faq: [
      {
        question: 'Como funciona a emissão do certificado deste curso?',
        answer:
          'Ao concluir os módulos e a avaliação final, o certificado é emitido instantaneamente em formato digital de alta resolução com código alfanumérico e QR Code único. Importante: A emissão do certificado é opcional e mediante taxa nos cursos livres gratuitos (Freepremium), mas já está totalmente incluída no pacote de benefícios dos cursos pagos de Formação e Horas Complementares.'
      },
      {
        question: 'Os cursos desta área são aceitos para Horas Complementares?',
        answer: 'Sim, os certificados têm valor como formação complementar. A aceitação para cômputo acadêmico nas faculdades fica sujeita às normas internas de cada instituição de ensino.'
      },
    ]
  };

  // Find all matching courses for this category
  const relatedCourses = useMemo(() => {
    const directMatches = COURSES_DATA.filter((c) => {
      // Direct category string match
      const inCategory =
        c.category.toLowerCase().includes(categoryCleanName.toLowerCase()) ||
        categoryCleanName.toLowerCase().includes(c.category.toLowerCase()) ||
        (currentCategory.id === 'desenvolvimento-nas-empresas' &&
          (c.category === 'Desenvolvimento nas empresas' ||
            c.id === 'fp-assertiva' ||
            c.id === 'hc-2' ||
            c.id === 'fl-4' ||
            c.id.startsWith('emp-')));

      if (!inCategory) return false;

      // Filter by search
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = c.title.toLowerCase().includes(query);
        const matchesSub = c.subtitle.toLowerCase().includes(query);
        const matchesDesc = c.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSub && !matchesDesc) return false;
      }

      // Filter by pillar
      if (selectedPillar !== 'all' && selectedPillar !== 'todos' && c.pillar !== selectedPillar) {
        return false;
      }

      // Filter by hours
      if ((selectedHoursRange === 'curta' || selectedHoursRange === '0-20') && c.hours > 40) return false;
      if ((selectedHoursRange === 'media' || selectedHoursRange === '21-60') && (c.hours < 41 || c.hours > 80)) return false;
      if ((selectedHoursRange === 'longa' || selectedHoursRange === '61+') && c.hours <= 80) return false;

      return true;
    });

    return directMatches;
  }, [categoryCleanName, currentCategory.id, searchTerm, selectedPillar, selectedHoursRange]);

  // Related sibling categories to display at bottom
  const siblingCategories = useMemo(() => {
    return CATEGORIES_DATA.filter((c) => c.id !== currentCategory.id).slice(0, 4);
  }, [currentCategory.id]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800" id="pagina-categoria-detalhe">
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
            <button
              onClick={onBackToCategories}
              className="hover:text-[#FFC72C] transition-colors cursor-pointer"
            >
              Categorias
            </button>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold truncate max-w-[220px] sm:max-w-none">
              {categoryCleanName}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            {/* Share Buttons Mini */}
            <div className="flex items-center gap-2 border-r border-slate-700 pr-4">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Compartilhar:</span>
              <button className="w-6 h-6 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <Facebook className="w-3 h-3" />
              </button>
              <button className="w-6 h-6 rounded-full bg-white/5 hover:bg-sky-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <Twitter className="w-3 h-3" />
              </button>
              <button className="w-6 h-6 rounded-full bg-white/5 hover:bg-blue-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                <Linkedin className="w-3 h-3" />
              </button>
              <button 
                onClick={handleCopyLink}
                className="w-6 h-6 rounded-full bg-white/5 hover:bg-[#FFC72C] flex items-center justify-center text-slate-300 hover:text-[#182333] transition-colors relative"
                title="Copiar Link"
              >
                <Copy className="w-3 h-3" />
                {copied && (
                  <span className="absolute right-0 top-8 bg-[#182333] border border-slate-700 text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap shadow-xl z-50">
                    Copiado!
                  </span>
                )}
              </button>
            </div>

            {/* Quick Switch to other popular categories */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">Trocar Categoria:</span>
              <select
                value={currentCategory.id}
                onChange={(e) => onSelectAnotherCategory(e.target.value)}
                className="bg-[#243042] text-xs text-white border border-slate-600 rounded-lg px-2.5 py-1 focus:outline-hidden focus:border-[#FFC72C] cursor-pointer"
              >
                {CATEGORIES_DATA.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title.replace('\n', ' ')} ({cat.coursesCount} cursos)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Section for the Selected Category */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center gap-8">
          <div className="max-w-3xl flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>{meta.heroTag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              <span className="block mb-2">{currentCategory.id === 'landing-pages-biolinks' ? 'Venda de' : 'Cursos de'}</span>
              <span className="text-[#FFC72C] block">{categoryCleanName}</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {meta.description}
            </p>

            {/* Target Audience Pill */}
            <div className="bg-[#182333]/80 border border-slate-700 rounded-xl p-3.5 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2.5 max-w-2xl mx-auto">
              <Users className="w-4 h-4 text-[#FFC72C] shrink-0" />
              <div>
                <strong className="text-white block sm:inline mr-1">Público-alvo principal:</strong>
                <span>{meta.targetPublic}</span>
              </div>
            </div>

            {/* Strategic Certificate Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('regras-certificacao-merito');
                  else if (onOpenCertificatePreview) onOpenCertificatePreview();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-[#FFC72C] hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl transition-all inline-flex items-center gap-2 shadow-md cursor-pointer hover:scale-105"
              >
                <Award className="w-4 h-4" />
                <span>Regras de Certificação</span>
              </button>
            </div>

            {/* B2B Authority Indicators - Only for Corporativas */}
            {currentCategory.id === 'treinamentos-palestras-corporativas' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 w-full max-w-2xl">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center flex flex-col items-center justify-center">
                  <span className="block text-xl sm:text-2xl font-black text-[#FFC72C]">Ativa</span>
                  <span className="text-xs text-slate-300 font-medium">Metodologia Andragógica</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center flex flex-col items-center justify-center">
                  <span className="block text-xl sm:text-2xl font-black text-white">In-Company</span>
                  <span className="text-xs text-slate-300 font-medium">Sob Medida</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center flex flex-col items-center justify-center">
                  <span className="block text-xl sm:text-2xl font-black text-emerald-400">Mensurável</span>
                  <span className="text-xs text-slate-300 font-medium">Foco em Resultado</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 w-full justify-center">
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                  <span className="block text-xl font-bold text-[#FFC72C]">
                    {relatedCourses.length}
                  </span>
                  <span className="text-[11px] text-slate-300">Cursos Disponíveis</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                  <span className="block text-xl font-bold text-white">4.9/5</span>
                  <span className="text-[11px] text-slate-300">Avaliação Média</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] text-slate-300">Horas Complementares*</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center flex flex-col items-center justify-center">
                  <span className="block text-xl font-bold text-emerald-400">In-Company</span>
                  <span className="text-[11px] text-slate-300">Atendimento B2B</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Card: In-Company & WhatsApp Hotline */}
          {currentCategory.id === 'treinamentos-palestras-corporativas' && (
            <div className="bg-[#182333] border border-slate-700/80 rounded-2xl p-6 lg:max-w-3xl w-full shadow-xl">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Left Side: Title & Highlights */}
                <div className="flex-1 space-y-4 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FFC72C] text-[#243042] flex items-center justify-center font-bold shadow-md">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-white">Treinamentos e Palestras</h4>
                        <p className="text-xs text-slate-400">Para Empresas & Equipes</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold ml-2">
                      Ativo
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-300">
                    {meta.b2bHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FFC72C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Actions */}
                <div className="flex-1 w-full md:border-l md:border-slate-700/60 md:pl-6 flex flex-col gap-3">
                  <a
                    href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20informações%20sobre%20Treinamentos%20e%20Palestras%20para%20minha%20equipe."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#FFC72C] hover:bg-[#F5B014] text-[#243042] font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Solicitar Proposta (WhatsApp)</span>
                  </a>
                  <button
                    onClick={onOpenValidator}
                    className="w-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer border border-white/5"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Validar Certificados</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Right Card: Digital Products Promo */}
          {currentCategory.id === 'landing-pages-biolinks' && (
            <div className="bg-[#182333] border border-emerald-500/30 rounded-2xl p-6 lg:max-w-3xl w-full shadow-xl">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex-1 space-y-4 w-full text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md">
                      <LayoutTemplate className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-white">Domínio & Hospedagem Grátis</h4>
                      <p className="text-xs text-emerald-400">Por 1 Ano Completo</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300">
                    Seu próximo cliente precisa encontrar você. Escolha um dos modelos abaixo, e nós cuidamos de toda a parte técnica, design e publicação para você focar no seu negócio.
                  </p>
                </div>
                <div className="flex-1 w-full md:border-l md:border-slate-700/60 md:pl-6 flex flex-col gap-3">
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Design de alta conversão (Focado em Vendas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Integração Direta com WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Pronto em 48 horas (Após briefing)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </header>

      {/* B2B Metodologia e Formatos (Apenas na categoria Corporativa) */}
      {currentCategory.id === 'treinamentos-palestras-corporativas' && (
        <div className="bg-slate-50 border-b border-slate-200">
          
          {/* Metodologia - Como Funciona */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#FFC72C] font-black uppercase tracking-widest text-xs mb-3 block">Metodologia</span>
              <h2 className="text-3xl font-black text-[#182333]">Como <span className="text-slate-500 font-light">Funciona</span></h2>
              <p className="text-slate-500 mt-4 font-medium">4 etapas do diagnóstico ao impacto mensurável na sua equipe.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Diagnóstico', desc: 'Mapeamento das necessidades, público-alvo e objetivos de aprendizagem do seu negócio.', icon: Search },
                { step: '2', title: 'Curadoria', desc: 'Desenvolvimento da estratégia pedagógica e definição de formatos, roteiros e trilhas.', icon: Map },
                { step: '3', title: 'Execução', desc: 'Entrega da solução in-company ou online, com facilitação especializada e andragogia.', icon: Sparkles },
                { step: '4', title: 'Avaliação', desc: 'Métricas de engajamento e certificação oficial. Análise de impacto e relatórios para gestão.', icon: PieChart }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center relative hover:-translate-y-1 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-[#182333] text-white flex items-center justify-center font-bold text-sm absolute -top-4 shadow-md">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 rounded-full bg-slate-50 text-[#FFC72C] flex items-center justify-center mb-4 mt-2">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#182333] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Formatos de Conteudo */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/60">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#FFC72C] font-black uppercase tracking-widest text-xs mb-3 block">Conteúdo</span>
              <h2 className="text-3xl font-black text-[#182333]">Formatos de <span className="text-slate-500 font-light">Entrega</span></h2>
              <p className="text-slate-500 mt-4 font-medium">Diferentes formatos para engajar, ensinar e desenvolver seu time.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <article className="bg-[#182333] text-white p-6 rounded-2xl shadow-md flex flex-col gap-3 group hover:bg-[#243042] transition-colors">
                <Presentation className="w-8 h-8 text-[#FFC72C] mb-2" />
                <h3 className="text-lg font-bold">Palestras In-Company</h3>
                <p className="text-sm text-slate-300 leading-relaxed">Momentos de alto impacto (1 a 2h) para conscientização, lançamento de campanhas, SIPAT e motivação direta da equipe presencial ou ao vivo.</p>
              </article>
              <article className="bg-white text-[#182333] border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col gap-3 group hover:border-[#FFC72C] transition-colors">
                <Users className="w-8 h-8 text-[#243042] mb-2" />
                <h3 className="text-lg font-bold">Workshops Práticos</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Sessões imersivas e dinâmicas (4 a 8h) focadas em desenvolver competências específicas, como liderança e feedback, através de ferramentas práticas.</p>
              </article>
              <article className="bg-white text-[#182333] border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col gap-3 group hover:border-[#FFC72C] transition-colors">
                <MonitorPlay className="w-8 h-8 text-[#243042] mb-2" />
                <h3 className="text-lg font-bold">Cursos Online Assíncronos</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Acesso flexível a trilhas de vídeo instrucionais, permitindo que cada colaborador estude no próprio ritmo com certificação ao final.</p>
              </article>
            </div>
          </section>

        </div>
      )}

      {/* 3. Filter Bar & Search Container */}
      <section className="bg-white border-b border-slate-200 sticky top-18 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar nesta categoria (ex: feedback, liderança)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#243042] focus:bg-white transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Pills & Hours Range: Hide for digital products */}
            {currentCategory.id !== 'landing-pages-biolinks' && (
              <>
                {/* Filter Pills: Pillars */}
                <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-1 md:pb-0">
                  <span className="text-xs font-semibold text-slate-500 whitespace-nowrap mr-1">
                    Modalidade:
                  </span>
                  {[
                    { id: 'todos', label: 'Todos' },
                    { id: 'freepremium', label: 'Freepremium (Grátis)' },
                    { id: 'horas-complementares', label: 'Horas Complementares' },
                    { id: 'formacao-livre', label: 'Formações Livres & DHO' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPillar(p.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                        selectedPillar === p.id
                          ? 'bg-[#243042] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                {/* Hours range filter */}
                <div className="hidden lg:flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  <select
                    value={selectedHoursRange}
                    onChange={(e) => setSelectedHoursRange(e.target.value as any)}
                    className="bg-slate-100 border border-slate-200 rounded-lg px-2 py-1 text-xs text-slate-700 focus:outline-hidden cursor-pointer"
                  >
                    <option value="todas">Todas as Cargas</option>
                    <option value="curta">Até 40 horas</option>
                    <option value="media">41h a 80 horas</option>
                    <option value="longa">Mais de 80 horas</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. Highlighted Banner for Comunicação Assertiva (if in empresas) */}
      {currentCategory.id === 'desenvolvimento-nas-empresas' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="bg-linear-to-r from-[#243042] to-[#182333] border border-amber-400/30 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFC72C] text-[#243042] text-[11px] font-black uppercase">
                <Sparkles className="w-3 h-3" />
                <span>Curso em Destaque nesta Categoria</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Comunicação Assertiva com a Liderança (40h)
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Aprenda a expressar suas ideias com clareza, autoridade e respeito, alinhando metas executivas e desenvolvendo uma presença profissional transformadora.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#FFC72C]" />
                  40 Horas de Certificação
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
                  4.9 de Avaliação (3.800+ alunos)
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Ministrado pela Profa. Dra. Silviane Silvério
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={onNavigateToCourseDetail}
                className="bg-[#FFC72C] hover:bg-[#F5B014] text-[#243042] font-bold text-xs py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                id="btn-ver-assertiva-categoria"
              >
                <span>Ver Página Completa do Curso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigateToPortal('fp-assertiva')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Assistir Aulas Grátis</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 5. Course Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-[#243042]">
              Cursos Disponíveis em {categoryCleanName}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Mostrando {relatedCourses.length} cursos com certificação válida e metodologia prática
            </p>
          </div>

          {(searchTerm || (selectedPillar !== 'all' && selectedPillar !== 'todos') || (selectedHoursRange !== 'all' && selectedHoursRange !== 'todas')) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedPillar('all');
                setSelectedHoursRange('all');
              }}
              className="text-xs text-[#243042] hover:underline font-bold cursor-pointer"
            >
              Limpar Filtros ✕
            </button>
          )}
        </div>

        {relatedCourses.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-700">Nenhum curso encontrado</h4>
            <p className="text-xs text-slate-500">
              Tente buscar por outros termos ou desmarque os filtros de modalidade e carga horária.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedPillar('all');
                setSelectedHoursRange('all');
              }}
              className="bg-[#243042] text-white text-xs font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#182333]"
            >
              Ver Todos os Cursos da Categoria
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                {/* Course Image & Badges */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-[#243042]/90 backdrop-blur-xs text-[#FFC72C] text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                      {course.badge || course.tag}
                    </span>
                    <span className="bg-white/90 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      <Clock className="w-3 h-3 text-[#243042]" />
                      {course.hours}h
                    </span>
                  </div>

                  {/* Bottom Image Data */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 text-[#FFC72C] font-semibold text-[11px]">
                      <Star className="w-3.5 h-3.5 fill-[#FFC72C] text-[#FFC72C]" />
                      {course.rating.toFixed(1)}
                      <span className="text-slate-300 font-normal">
                        ({course.studentsCount} alunos)
                      </span>
                    </span>
                    <span className="text-[11px] text-slate-200">
                      {course.modulesCount} Módulos
                    </span>
                  </div>
                </div>

                {/* Course Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                      {course.category}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#243042] transition-colors line-clamp-2">
                      {course.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Syllabus preview */}
                  <div className="bg-slate-50 rounded-xl p-3 text-[11px] text-slate-600 space-y-1.5 border border-slate-100">
                    <span className="font-bold text-slate-800 block text-[10px] uppercase tracking-wider">
                      Tópicos Principais do Curso:
                    </span>
                    {course.syllabus.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-slate-600">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                    {course.syllabus.length > 2 && (
                      <span className="text-[10px] text-slate-600 italic block">
                        + {course.syllabus.length - 2} outros tópicos no plano de aula
                      </span>
                    )}
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px]">
                        <span className="hidden sm:inline">
                          {course.category === 'Horas Complementares'
                            ? 'Horas Complementares*'
                            : 'Certificado Livre'}
                        </span>
                      </span>
                      <span className="font-bold text-[#243042]">
                        {course.pillar === 'freepremium'
                          ? 'Acesso Grátis'
                          : course.priceValue
                          ? `R$ ${course.priceValue.toFixed(2).replace('.', ',')}`
                          : 'Incluso'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          onSelectCourse(course);
                          if (course.id === 'fp-assertiva') {
                            onNavigateToCourseDetail();
                          }
                        }}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2 rounded-xl transition-colors text-center cursor-pointer"
                      >
                        Ver Detalhes
                      </button>

                      <button
                        onClick={() => {
                          if (course.id === 'fp-assertiva') {
                            onNavigateToCourseDetail();
                          } else {
                            onNavigateToPortal(course.id);
                          }
                        }}
                        className="w-full bg-[#243042] hover:bg-[#182333] text-white text-xs font-bold py-2 rounded-xl transition-all text-center flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                      >
                        <span>Acessar</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* 6. Corporate In-Company & B2B Solutions Section */}
      {currentCategory.id === 'treinamentos-palestras-corporativas' && (
        <section className="bg-white border-y border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#182333] text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-700 shadow-xl overflow-hidden relative">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                
                {/* Left Side: Info & Form */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC72C]/10 text-[#FFC72C] text-xs font-bold uppercase">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Soluções B2B para Recursos Humanos e Lideranças</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    Quer levar os cursos de {categoryCleanName} para a sua empresa?
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Oferecemos programas in-company adaptados à realidade do seu negócio. Seja para desenvolver novos líderes, implementar uma cultura de feedback contínuo ou cumprir exigências de saúde mental (NR-1) e DHO, estruturamos turmas exclusivas com relatórios para a gestão.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-xs">
                    <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC72C] shrink-0" />
                      <span>Emissão de Nota Fiscal de Serviços (PJ)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC72C] shrink-0" />
                      <span>Dashboard de Acompanhamento (RH)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC72C] shrink-0" />
                      <span>Certificados com Logo da sua Empresa</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC72C] shrink-0" />
                      <span>Mentoria e Workshops ao Vivo</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Action Cards */}
                <div className="flex flex-col gap-6">
                  
                  {/* WhatsApp Priority Card */}
                  <div className="bg-[#243042] border border-slate-700 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC72C]/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="w-12 h-12 bg-[#FFC72C] text-[#243042] rounded-full flex items-center justify-center font-black text-xl shadow-sm">
                        B2B
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Atendimento Rápido</h4>
                        <p className="text-xs text-slate-300 mt-1">
                          Fale com um especialista prioritário pelo WhatsApp
                        </p>
                      </div>

                      <a
                        href="https://wa.me/5511960319637?text=Olá!%20Represento%20uma%20empresa%20e%20gostaria%20de%20um%20orçamento%20para%20cursos%20de%20Treinamentos%20e%20Palestras."
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-[#FFC72C] hover:bg-[#F5B014] text-[#243042] font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Conversar no WhatsApp (11) 960319637</span>
                      </a>
                    </div>
                  </div>

                  {/* Formal Contact Form */}
                  <div className="bg-white text-[#182333] border border-slate-200 rounded-2xl p-6 shadow-lg relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-base">Solicitar Proposta Oficial</h4>
                    </div>
                    
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Formulário enviado com sucesso! Entraremos em contato em breve.'); }}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-500 uppercase">Nome</label>
                          <input required type="text" placeholder="Seu nome" className="w-full bg-slate-50 border border-slate-200 text-sm px-3 py-2 rounded-lg focus:outline-hidden focus:border-[#243042] focus:bg-white transition-colors" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-500 uppercase">Empresa</label>
                          <input required type="text" placeholder="Nome da empresa" className="w-full bg-slate-50 border border-slate-200 text-sm px-3 py-2 rounded-lg focus:outline-hidden focus:border-[#243042] focus:bg-white transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-500 uppercase">E-mail Corporativo</label>
                        <input required type="email" placeholder="email@empresa.com" className="w-full bg-slate-50 border border-slate-200 text-sm px-3 py-2 rounded-lg focus:outline-hidden focus:border-[#243042] focus:bg-white transition-colors" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-500 uppercase">Qual a necessidade?</label>
                        <select className="w-full bg-slate-50 border border-slate-200 text-sm px-3 py-2 rounded-lg focus:outline-hidden focus:border-[#243042] focus:bg-white transition-colors text-slate-700">
                          <option>Treinamento In-Company</option>
                          <option>Palestras e SIPAT</option>
                          <option>Assinatura de Cursos Online</option>
                          <option>Outros</option>
                        </select>
                      </div>
                      <button type="submit" className="w-full bg-[#243042] hover:bg-[#182333] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md mt-2">
                        Enviar Solicitação
                      </button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. Coordination & Technical Responsibility */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categorySlug === 'landing-pages-biolinks' || categorySlug === 'desenvolvimento-tecnologico-ia' || categorySlug === 'aplicativos' || categorySlug.includes('tecnolog') || categorySlug.includes('ia') ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center gap-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#243042] overflow-hidden shrink-0 border-4 border-[#FFC72C] shadow-md flex items-center justify-center text-white">
              <img src={henriqueVivianImg} alt="Henrique Vivian" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900 text-[11px] font-bold">
                <span>Engenharia de Software & Arquitetura Tecnológica</span>
              </div>
              <h3 className="text-2xl font-bold text-[#243042]">
                Henrique Vivian
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Graduado em Análise de Sistemas e Pós-Graduado em Arquitetura e Desenvolvimento de Sistemas com ênfase em Padrões de Projetos (Design Patterns). Responsável pelo desenvolvimento backend, análise de dados de aprendizagem, criação de arquitetura de software, dashboards e soluções tecnológicas da ESDHUBEM.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                <span className="font-semibold text-slate-700">
                  Especialidades & Função:
                </span>
                <span className="text-[#243042] font-bold">
                  Backend, Análise de Dados, Padrões de Projetos & IA Aplicada
                </span>
                <span className="text-slate-300">•</span>
                <span>Instituição: ESDHUBEM (CNPJ 61.928.778/0001-50)</span>
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
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center gap-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#243042] overflow-hidden shrink-0 border-4 border-[#FFC72C] shadow-md flex items-center justify-center text-white">
              <img src={profSilvianeImg} alt="Profa. Dra. Silviane Silvério" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
                <span>Coordenação Pedagógica & Docência</span>
              </div>
              <h3 className="text-2xl font-bold text-[#243042]">
                Profa. Dra. Silviane Silvério
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Especialista e Pesquisadora em Desenvolvimento Humano, Práticas Integrativas e Gestão da Saúde. Responsável técnica pela elaboração das matrizes curriculares, ementas formativas e rigor metodológico dos cursos da ESDHUBEM.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                <span className="font-semibold text-slate-700">
                  Currículo Lattes CNPq:
                </span>
                <a
                  href="http://lattes.cnpq.br/7481458793724724"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#243042] underline font-bold hover:text-[#FFC72C]"
                >
                  7481458793724724
                </a>
                <span className="text-slate-300">•</span>
                <span>Instituição: ESDHUBEM (CNPJ 61.928.778/0001-50)</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 8. Frequently Asked Questions for this Category */}
      <section className="bg-slate-100/70 border-t border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-extrabold text-[#243042]">
              Perguntas Frequentes sobre {categoryCleanName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Dúvidas sobre matrículas, emissão de certificados, validade legal e programas corporativos
            </p>
          </div>

          <div className="space-y-3">
            {meta.faq.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2"
              >
                <h4 className="text-sm font-bold text-[#243042] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#FFC72C] shrink-0 mt-0.5" />
                  <span>{item.question}</span>
                </h4>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Sibling Categories Navigation Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="text-lg font-bold text-[#243042]">
              Aprofunde em Outras Áreas do Saber
            </h4>
            <p className="text-xs text-slate-500">
              Conheça as demais categorias do catálogo acadêmico da ESDHUBEM
            </p>
          </div>
          <button
            onClick={onBackToCategories}
            className="text-xs font-bold text-[#243042] hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>Ver Todas as 18</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siblingCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectAnotherCategory(cat.id)}
              className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-[#243042] hover:shadow-md transition-all cursor-pointer group flex items-center justify-between"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-900 group-hover:text-[#243042] transition-colors block">
                  {cat.title.replace('\n', ' ')}
                </span>
                <span className="text-[11px] text-slate-600 font-medium">
                  {cat.coursesCount} cursos disponíveis
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#243042] transition-colors" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
