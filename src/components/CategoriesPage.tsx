import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  HeartHandshake,
  Briefcase,
  Scale,
  Users,
  CircleDollarSign,
  SunMedium,
  Brain,
  Leaf,
  Gift,
  GraduationCap,
  Compass,
  Cpu,
  Target,
  BookOpenCheck,
  Building2,
  Award,
  ArrowRight,
  ArrowLeft,
  Search,
  BookOpen,
  CheckCircle2,
  Clock,
  Star,
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { CategoryItem, Course } from '../types';
import { CATEGORIES_DATA, COURSES_DATA } from '../data/coursesData';
import profSilvianeImg from '../assets/prof-silviane.png';

interface CategoriesPageProps {
  onBackToHome: () => void;
  onSelectCourse: (course: Course) => void;
  onNavigateToCourseDetail: () => void;
  onNavigateToCategoryDetail?: (categorySlug: string) => void;
}

// Map icons cleanly
const renderCategoryIcon = (iconName: string, className: string = 'w-6 h-6') => {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'CircleDollarSign':
      return <CircleDollarSign className={className} />;
    case 'SunMedium':
      return <SunMedium className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'Leaf':
      return <Leaf className={className} />;
    case 'Gift':
      return <Gift className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'BookOpenCheck':
      return <BookOpenCheck className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Award':
      return <Award className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

// Descriptions and key competencies for each category
const CATEGORY_DETAILS: Record<string, { summary: string; skills: string[] }> = {
  'desenvolvimento-pessoal': {
    summary: 'Autoconhecimento, inteligência emocional, foco, hábitos saudáveis e transformação individual.',
    skills: ['Autogestão', 'Inteligência Emocional', 'Resiliência', 'Mindset de Crescimento']
  },
  'desenvolvimento-humano': {
    summary: 'Compreensão do potencial humano, relações interpessoais profundas, empatia e bem-estar integral.',
    skills: ['Psicologia Positiva', 'Comunicação Empática', 'Saúde Mental', 'Relações Saudáveis']
  },
  'desenvolvimento-profissional': {
    summary: 'Carreira, oratória, comunicação corporativa, liderança e competências técnicas do mercado.',
    skills: ['Liderança Assertiva', 'Comunicação Corporativa', 'Gestão de Projetos', 'Negociação']
  },
  'desenvolvimento-etico': {
    summary: 'Conduta ética, responsabilidade social, integridade nas decisões e conformidade profissional.',
    skills: ['Ética Profissional', 'Tomada de Decisão', 'Compliance', 'Cidadania']
  },
  'desenvolvimento-relacional': {
    summary: 'Comunicação Não-Violenta (CNV), gestão de conflitos familiares e profissionais e sociabilidade.',
    skills: ['CNV', 'Mediação de Conflitos', 'Escuta Ativa', 'Dinâmicas de Grupo']
  },
  'desenvolvimento-financeiro': {
    summary: 'Educação financeira prática, planejamento orçamentário, investimentos conscientes e prosperidade.',
    skills: ['Planejamento Financeiro', 'Investimentos', 'Mentalidade Próspera', 'Controle de Gastos']
  },
  'praticas-integrativas': {
    summary: 'Terapias complementares, meditação, fitoterapia, aromaterapia e saúde integrativa (PICS).',
    skills: ['Naturopatia', 'Mindfulness', 'Bioenergética', 'Qualidade de Vida']
  },
  'desenvolvimento-da-consciencia': {
    summary: 'Filosofia prática, presença plena, ampliação perceptual e transcendência no cotidiano.',
    skills: ['Autopercepção', 'Presença Plena', 'Maturidade Emocional', 'Filosofia Aplicada']
  },
  'desenvolvimento-ambiental': {
    summary: 'Sustentabilidade prática, consumo consciente, ecologia pessoal e responsabilidade planetária.',
    skills: ['ESG', 'Sustentabilidade', 'Consumo Consciente', 'Eco-eficiência']
  },
  'cursos-freepremium': {
    summary: 'Aulas 100% gratuitas para assistir e aprender, com certificado oficial opcional de alta qualidade.',
    skills: ['Acesso Imediato', 'Zero Custo Inicial', 'Material Grátis', 'Certificação Rápida']
  },
  'horas-complementares': {
    summary: 'Cursos desenhados especificamente para averbação de horas acadêmicas em universidades do Brasil.',
    skills: ['Horas Complementares*', 'Emissão com Carga Horária', 'QR Code Antifraude', 'Acesso Imediato']
  },
  'formacao-livre': {
    summary: 'Programas densos e práticos para nova carreira profissional, transição e geração de renda.',
    skills: ['Formação Completa', 'Foco no Mercado', 'Mentoria', 'Portfólio Prático']
  },
  'desenvolvimento-tecnologico-ia': {
    summary: 'Inteligência artificial aplicada ao trabalho, ferramentas digitais e produtividade moderna.',
    skills: ['Prompt Engineering', 'Automação', 'Ferramentas IA', 'Produtividade Digital']
  },
  'coach-integrativo': {
    summary: 'Técnicas de coaching integrativo, ferramentas de facilitação e mentoria humanizada.',
    skills: ['Perguntas Poderosas', 'Metas SMART', 'Rapport', 'Plano de Vida']
  },
  'pedagogia-integrativa': {
    summary: 'Educação humanizada, metodologias ativas de ensino e práticas acolhedoras de aprendizagem.',
    skills: ['Metodologias Ativas', 'Educação Socioemocional', 'Inclusão', 'Facilitação']
  },
  'desenvolvimento-nas-empresas': {
    summary: 'Treinamentos in-company, cultura organizacional, team building e clima corporativo positivo.',
    skills: ['Cultura Organizacional', 'Engajamento de Times', 'Feedback 360°', 'Liderança Humanizada']
  },
  'formacao-empresarial': {
    summary: 'Gestão de negócios, empreendedorismo ético, processos executivos e visão estratégica.',
    skills: ['Planejamento Estratégico', 'Empreendedorismo', 'Modelos de Negócio', 'Inovação']
  }
};

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onBackToHome,
  onSelectCourse,
  onNavigateToCourseDetail,
  onNavigateToCategoryDetail
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('todos');
  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>('desenvolvimento-pessoal');

  // Filter groups
  const groups = [
    { id: 'todos', label: 'Todas as Áreas (18)' },
    { id: 'humano', label: 'Desenvolvimento Humano & Emocional' },
    { id: 'carreira', label: 'Profissional & Liderança' },
    { id: 'praticas', label: 'Práticas Integrativas & Saúde' },
    { id: 'academicas', label: 'Horas Acadêmicas & Formações' },
  ];

  // Group membership classifier
  const getCategoryGroup = (id: string): string => {
    if (['desenvolvimento-pessoal', 'desenvolvimento-humano', 'desenvolvimento-etico', 'desenvolvimento-relacional', 'desenvolvimento-da-consciencia'].includes(id)) {
      return 'humano';
    }
    if (['desenvolvimento-profissional', 'desenvolvimento-financeiro', 'desenvolvimento-tecnologico-ia', 'desenvolvimento-nas-empresas', 'formacao-empresarial'].includes(id)) {
      return 'carreira';
    }
    if (['praticas-integrativas', 'coach-integrativo', 'pedagogia-integrativa', 'desenvolvimento-ambiental'].includes(id)) {
      return 'praticas';
    }
    return 'academicas';
  };

  // Filtered categories
  const filteredCategories = useMemo(() => {
    return CATEGORIES_DATA.filter((cat) => {
      const matchesSearch =
        cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGroup = selectedGroup === 'todos' || getCategoryGroup(cat.id) === selectedGroup;
      return matchesSearch && matchesGroup;
    });
  }, [searchTerm, selectedGroup]);

  // Active Category Object
  const activeCategory = CATEGORIES_DATA.find((c) => c.id === activeCategorySlug) || CATEGORIES_DATA[0];

  // Matching courses for active category
  const categoryCourses = useMemo(() => {
    if (!activeCategorySlug) return COURSES_DATA.slice(0, 4);
    
    // Check if matching course category name or pillar
    const cleanTitle = activeCategory.title.replace('\n', ' ');
    const directMatches = COURSES_DATA.filter((c) => {
      return (
        c.category.toLowerCase().includes(cleanTitle.toLowerCase()) ||
        cleanTitle.toLowerCase().includes(c.category.toLowerCase()) ||
        (activeCategorySlug === 'cursos-freepremium' && c.pillar === 'freepremium') ||
        (activeCategorySlug === 'horas-complementares' && c.pillar === 'horas-complementares') ||
        (activeCategorySlug === 'formacao-livre' && c.pillar === 'formacao-livre')
      );
    });

    if (directMatches.length > 0) return directMatches;
    // Fallback so user always sees relevant high-quality courses
    return COURSES_DATA.slice(0, 3);
  }, [activeCategorySlug, activeCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
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
              Aprofunde nas Categorias & Áreas do Saber
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#FFC72C]" />
            <span>18 Categorias Oficiais da ESDHUBEM</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Catálogo Acadêmico Estruturado</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Categorias de Cursos <br className="hidden sm:inline" />
              <span className="text-[#FFC72C]">Desenvolvimento & Bem-Estar</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore nossas 18 áreas temáticas integradas. Da psicologia das relações e inteligência emocional até liderança corporativa, práticas integrativas e horas complementares universitárias.
            </p>

            {/* Live Search Bar */}
            <div className="pt-2 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Pesquisar por categoria (ex: Liderança, Práticas, Finanças...)"
                  className="w-full bg-white text-slate-900 placeholder-slate-400 pl-11 pr-4 py-3.5 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFC72C] shadow-lg"
                  id="categories-search-input"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-100 rounded-md"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Platform Metric Badges */}
          <div className="grid grid-cols-2 gap-3.5 w-full md:w-auto shrink-0">
            <div className="bg-[#182333]/90 border border-slate-700/80 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-3xl font-black text-[#FFC72C]">18</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Áreas do Saber</div>
            </div>

            <div className="bg-[#182333]/90 border border-slate-700/80 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-3xl font-black text-white">+300h</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Aulas Certificadas</div>
            </div>

            <div className="bg-[#182333]/90 border border-slate-700/80 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-3xl font-black text-emerald-400">100%</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Horas Complementares*</div>
            </div>

            <div className="bg-[#182333]/90 border border-slate-700/80 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-3xl font-black text-amber-300">4.9/5</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Satisfação Alunos</div>
            </div>
          </div>
        </div>

        {/* Decorative background logo */}
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
          <BookOpenCheck className="w-96 h-96 text-white" />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {groups.map((grp) => (
            <button
              key={grp.id}
              onClick={() => setSelectedGroup(grp.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                selectedGroup === grp.id
                  ? 'bg-[#243042] text-[#FFC72C] border-[#243042] shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {grp.label}
            </button>
          ))}
        </div>

        {/* Categories Grid (All 18 Categories) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#243042]" />
              <span>Explore as Áreas de Conhecimento</span>
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              Exibindo {filteredCategories.length} de 18 categorias
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCategories.map((cat) => {
              const isSelected = activeCategorySlug === cat.id;
              const details = CATEGORY_DETAILS[cat.id] || {
                summary: 'Capacitação prática e aprofundada para seu desenvolvimento contínuo.',
                skills: ['Prática', 'Certificação', 'EAD', 'Flexibilidade']
              };

              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveCategorySlug(cat.id)}
                  className={`bg-white rounded-2xl border transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? 'border-[#243042] ring-2 ring-[#FFC72C] shadow-lg shadow-black/5 bg-slate-50/50'
                      : 'border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                  }`}
                  id={`cat-card-${cat.id}`}
                >
                  <div className="space-y-3">
                    {/* Top row with Icon and Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${cat.accentColor} shadow-md group-hover:scale-105 transition-transform`}
                      >
                        {renderCategoryIcon(cat.iconName, 'w-6 h-6')}
                      </div>

                      <span className="text-[11px] font-bold bg-[#182333]/5 text-[#243042] px-2.5 py-1 rounded-full border border-slate-200">
                        {cat.coursesCount} Cursos
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="font-extrabold text-[#182333] text-base sm:text-lg leading-tight group-hover:text-[#243042] transition-colors">
                      {cat.title.replace('\n', ' ')}
                    </h3>

                    {/* Summary Description */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {details.summary}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {details.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span
                      className={`font-bold flex items-center gap-1 ${
                        isSelected ? 'text-[#243042]' : 'text-slate-500 group-hover:text-[#243042]'
                      }`}
                    >
                      {isSelected ? 'Categoria Ativa' : 'Selecionar'}
                    </span>
                    {onNavigateToCategoryDetail ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigateToCategoryDetail(cat.id);
                        }}
                        className="text-[11px] font-bold text-[#243042] bg-slate-100 hover:bg-[#243042] hover:text-white px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                        title="Ver página exclusiva desta categoria"
                      >
                        <span>Ver Cursos</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    ) : (
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#FFC72C] text-slate-950'
                            : 'bg-slate-100 text-slate-400 group-hover:bg-[#243042] group-hover:text-white'
                        }`}
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Category Course Showcase */}
        {activeCategory && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  <span>Cursos em Destaque na Área</span>
                </div>
                <h3 className="text-2xl font-black text-[#182333] flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${activeCategory.accentColor}`}
                  >
                    {renderCategoryIcon(activeCategory.iconName, 'w-5 h-5')}
                  </div>
                  <span>{activeCategory.title.replace('\n', ' ')}</span>
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="text-xs text-slate-500 max-w-md leading-relaxed">
                  {CATEGORY_DETAILS[activeCategory.id]?.summary}
                </div>
                {onNavigateToCategoryDetail && (
                  <button
                    onClick={() => onNavigateToCategoryDetail(activeCategory.id)}
                    className="inline-flex items-center gap-2 bg-[#243042] hover:bg-[#182333] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm cursor-pointer transition-all whitespace-nowrap"
                    id={`btn-pagina-categoria-${activeCategory.id}`}
                  >
                    <span>Ver Página da Categoria</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFC72C]" />
                  </button>
                )}
              </div>
            </div>

            {/* Courses Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-[#243042]/90 backdrop-blur-xs text-[#FFC72C] text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                      {course.tag}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/90 text-slate-800 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {course.rating}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="font-bold text-[#182333] text-base leading-snug line-clamp-2">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {course.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-[#243042]" />
                        <span>{course.hours} horas</span>
                      </div>
                      <div className="font-semibold text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Certificado Incluso</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      {course.id === 'fp-assertiva' ? (
                        <button
                          onClick={onNavigateToCourseDetail}
                          className="flex-1 bg-[#243042] hover:bg-[#182333] text-[#FFC72C] font-bold text-xs py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <span>Página do Curso</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => onSelectCourse(course)}
                          className="flex-1 bg-[#243042] hover:bg-[#182333] text-[#FFC72C] font-bold text-xs py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <span>Ver Detalhes</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Callout: Comunicação Assertiva */}
            <div className="bg-gradient-to-r from-[#182333] to-[#243042] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-slate-700">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                  <img
                    src={profSilvianeImg}
                    alt="Professora Silviane Silvério"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <span className="bg-[#FFC72C] text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                    Curso em Destaque 40h
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    Comunicação Assertiva com a Liderança
                  </h4>
                  <p className="text-xs text-slate-300 max-w-xl">
                    Ministrado pela Professora Silviane Silvério. Aprenda postura corporativa, CNV e feedback 360° com certificado de 40h válido para horas complementares.
                  </p>
                </div>
              </div>

              <button
                onClick={onNavigateToCourseDetail}
                className="bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-black text-xs px-6 py-3 rounded-xl transition-all shrink-0 cursor-pointer shadow-md flex items-center gap-1.5"
              >
                <span>Acessar Curso Completo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
