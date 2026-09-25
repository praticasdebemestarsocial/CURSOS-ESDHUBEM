import React from 'react';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Scale,
  Award,
  CheckCircle2,
  ArrowLeft,
  FileText,
  Lightbulb,
  Compass,
  Cpu,
  BookmarkCheck,
  Users,
  Search,
  ExternalLink,
  Target
} from 'lucide-react';

interface DiretrizesPedagogicasPageProps {
  onBackToHome: () => void;
  onOpenValidator: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigateToArticles?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const DiretrizesPedagogicasPage: React.FC<DiretrizesPedagogicasPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigateToArticles,
  onNavigate
}) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-16">
      {/* Breadcrumb Bar */}
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
              Diretrizes e Esclarecimento Pedagógico
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onNavigate?.('informacoes-legais')}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5 text-cyan-400" />
              <span>Valor Legal</span>
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => onNavigate?.('regras-certificacao-merito')}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-[#FFC72C]" />
              <span>Escala de Mérito</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner Header */}
      <section className="bg-gradient-to-b from-[#182333] via-[#1E293B] to-[#0F172A] text-white py-12 lg:py-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,44,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFC72C]/15 border border-[#FFC72C]/40 px-4 py-1.5 rounded-full text-[#FFC72C] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
              <BookOpen className="w-4 h-4 text-[#FFC72C]" />
              <span>DIRETRIZES E ESCLARECIMENTO PEDAGÓGICO</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Nosso Manifesto: Saberes Integrativos, Escrita Criativa e o Método Científico Aberto
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
              Na nossa escola livre, acreditamos que a sabedoria humana se expande quando unimos{' '}
              <strong className="text-[#FFC72C] font-semibold">tradição, símbolo, sensibilidade e tecnologia</strong>.
              Nossos cursos e trilhas de aprendizagem navegam pelas fronteiras da filosofia, história, sociologia, astrologia simbólica, hermetismo, alquimia, saúde coletiva e inteligência artificial, sempre sob a ótica da{' '}
              <strong className="text-white font-semibold">pesquisa qualitativa, subjetiva e integrativa</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-10">
        
        {/* Card 1: O Que Somos e Qual É o Nosso Propósito */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Missão & Visão</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                O Que Somos e Qual É o Nosso Propósito
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            O objetivo primordial desta plataforma é ser um <strong className="text-slate-900 font-semibold">celeiro de expansão de consciência, leitura crítica e estímulo à escrita reflexiva</strong>. Atuamos como uma ponte acolhedora entre saberes holísticos/humanistas e as ferramentas estruturadas da comunicação intelectual.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <Users className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Foco no Desenvolvimento Pessoal e Humano</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Apoiar coaches, terapeutas, estudantes e curiosos a traduzirem suas vivências, percepções e práticas em narrativas organizadas, fundamentadas e éticas.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <Search className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Leitura e Escrita Desmistificadas</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Incentivar a leitura de artigos científicos sem medo acadêmico, ensinando a identificar metodologias, autores de referência e estados da arte.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <FileText className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Protótipos de Artigos Científicos</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Conduzir o aluno na elaboração de esboços de artigos com regras estruturais básicas. O foco é treinar o pensamento crítico, a argumentação e o respeito às fontes, preparando o caminho para quem deseja dar continuidade à vida acadêmica formal ou buscar publicações em periódicos e eventos.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2 hover:border-amber-300 transition-colors">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <Cpu className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Inovação e Tecnologia Humanizada</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Integrar ferramentas de Inteligência Artificial de forma ética como copilotos de escrita, organização de ideias e pesquisa, potencializando a criatividade humana sem substituí-la.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Esclarecimento Institucional: Nossa Posição em Relação à Ciência Tradicional */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Transparência Integral</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Esclarecimento Institucional: Nossa Posição em Relação à Ciência Tradicional
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Para mantermos a transparência e a integridade com nossa comunidade, <strong className="text-slate-900 font-semibold">esclarecemos expressamente:</strong>
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-slate-800">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-sm">
                1
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Sem Pretensão de Comprovação Positivista</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nossos cursos livres <strong className="text-slate-900 font-semibold">não têm como propósito a validação científica empírico-quantitativa, clínica, laboratorial ou biomédica</strong> de nenhuma prática, crença, técnica integrativa ou saber simbólico.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-slate-800">
              <div className="w-8 h-8 rounded-full bg-cyan-600 text-white font-black flex items-center justify-center shrink-0 text-sm">
                2
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Abordagem Fenomenológica e Simbólica</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Trabalhamos temas como astrologia simbólica, hermetismo e práticas integrativas do ponto de vista <strong className="text-slate-900 font-semibold">histórico, sociológico, psicológico (arquetípico) e qualitativo</strong>. Respeitamos essas práticas como expressões culturais, metafóricas e de bem-estar humano, sem dogmas religiosos e sem reivindicações de verdade científica médica ou exata.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-slate-800">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-sm">
                3
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Liberdade de Investigação e Protótipos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  O exercício de redigir um "protótipo de artigo" é uma <strong className="text-slate-900 font-semibold">ferramenta pedagógica de inclusão e expressão</strong>, destinada a organizar pensamentos e treinar a linguagem acadêmica, e não uma chancela formal de descoberta científica pela escola.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Natureza Jurídica e Certificação de Cursos Livres */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Conformidade Legal (LDB)</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Natureza Jurídica e Certificação de Cursos Livres
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Nossa escola opera em plena conformidade com a legislação educacional brasileira:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <BookmarkCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Modalidade de Cursos Livres</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Nossos cursos integram a categoria de <strong>Educação Profissional e Tecnológica</strong> (Formação Inicial e Continuada ou Qualificação Profissional), regidos pela <strong>Lei nº 9.394/1996 (Lei de Diretrizes e Bases da Educação Nacional - LDB)</strong> e pelo Decreto Presidencial nº 5.154/2004.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Autonomia e Isenção de MEC</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Por definição legal, cursos livres <strong>não dependem de autorização, credenciamento ou reconhecimento prévio do Ministério da Educação (MEC)</strong>. Portanto, nossos cursos não conferem grau acadêmico nem títulos de pós-graduação formal.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Award className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Certificados de Extensão</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Os certificados emitidos registram a carga horária e o conteúdo programático concluído. Eles são válidos em todo o Brasil como <strong>comprovação de atividades extracurriculares e horas complementares</strong> para faculdades e currículo profissional.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Nosso Modelo de Aprendizagem e Acesso */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Democratização do Saber</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Nosso Modelo de Aprendizagem e Acesso
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Para democratizar o conhecimento e acolher diferentes momentos de vida e de carreira, estruturamos nossa escola em:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <span className="text-xs font-bold text-[#FFC72C] bg-slate-900 px-2 py-0.5 rounded inline-block">FreePremium</span>
              <p className="text-slate-700 text-xs leading-relaxed">
                Conteúdos e aulas gratuitas de introdução com opção de certificação acessível.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded inline-block">Horas Complementares</span>
              <p className="text-slate-700 text-xs leading-relaxed">
                Cursos objetivos voltados à prática de leitura crítica, metodologia qualitativa e escrita formativa.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded inline-block">Formações Livres</span>
              <p className="text-slate-700 text-xs leading-relaxed">
                Cursos densos de especialização livre para terapeutas, pesquisadores independentes e profissionais de bem-estar.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded inline-block">Clubes de Benefícios</span>
              <p className="text-slate-700 text-xs leading-relaxed">
                Assinaturas que viabilizam acesso facilitado a certificados e descontos exclusivos em materiais de estudo e literatura especializada.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5: Compromisso Pedagógico: Da Reflexão Criativa à Publicação Científica */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Metodologia e Rigor</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Compromisso Pedagógico: Da Reflexão Criativa à Publicação Científica
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Na nossa escola, o respeito à sabedoria subjetiva caminha de mãos dadas com a seriedade intelectual. Não enxergamos a criatividade e a profundidade analítica como forças opostas, mas como dimensões complementares da mente humana: é pela reflexão viva e pela escrita dinâmica que ampliamos a visão de mundo e refinamos a nossa percepção sobre a realidade, o bem-estar e a sociedade.
          </p>

          {/* Sub-block A */}
          <div className="space-y-4 bg-slate-50/80 p-6 rounded-2xl border border-slate-200/70">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-600" />
              <span>O Caminho da Pesquisa Séria e da Continuidade Acadêmica</span>
            </h3>
            <p className="text-slate-600 text-sm">
              Incentivamos nossos alunos a utilizarem o conhecimento adquirido como trampolim para a sua evolução intelectual e profissional:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Estímulo à Continuidade Acadêmica</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Nassas trilhas preparam estudantes de graduação, pós-graduandos e pesquisadores independentes para perderem o receio do ambiente acadêmico formal, capacitando-os a dialogar com a literatura contemporânea, formular hipóteses consistentes e estruturar textos de fálogo.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Projeção para Periódicos Científicos</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Orientamos o aluno a compreender os critérios editoriais e os padrões éticos exigidos por revistas científicas conceituadas, munindo-o de ferramentas para transformar suas inquietações teóricas e práticas em artigos robustos.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Parcerias com Revistas Acadêmicas e Periódicos Apoiadores</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Para criar uma verdadeira passarela de entrada no universo da publicação, estabelecemos diálogos e parcerias com revistas científicas, periódicos juniores e publicações integrativas que acolhem e valorizam pesquisas qualitativas, ensaios teóricos e produções desenvolvidas em nossa comunidade discente.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Acolhimento Editorial e Primeiros Passos</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Essa ponte institucional reduz a distância histórica entre quem está começando a produzir e os conselhos editoriais, permitindo que os protótipos amadurecidos ao longo dos cursos encontrem espaços legítimos de circulação científica e divulgação do conhecimento.
                </p>
              </div>
            </div>
          </div>

          {/* Sub-block B */}
          <div className="space-y-4 bg-slate-50/80 p-6 rounded-2xl border border-slate-200/70">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Seriedade, Profundidade e Ampliação de Percepções</span>
            </h3>
            <p className="text-slate-600 text-sm">
              Buscamos a seriedade não pelo apego a burocracias engessadas, mas pela responsabilidade com a verdade e com as referências:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Aprofundamento Epistemológico</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  O estudo de fenômenos subjetivos, da astrologia simbólica, do hermetismo, da filosofia ou da saúde coletiva não é tratado de forma rasa ou panfletária; incentivamos o resgate das fontes primárias, o confronto de teorias e a leitura atenta de artigos científicos atuais.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Escrita Dinâmica com Rigor Conceitual</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Ensinamos que escrever bem é pensar com clareza. Nossos módulos valorizam uma prosa fluida e expressiva, amparada na correta atribuição de autorias, na citação ética de fontes e na honestidade metodológica.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 text-sm block">Ampliação de Visões e Consciência</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Queremos que o aluno saia da superficialidade das redes sociais e adentre a densidade do pensamento crítico, desenvolvendo sensibilidade para investigar o invisível, o relacional e o humano com critério, elegância e maturidade intelectual.
                </p>
              </div>
            </div>
          </div>

          {/* Table: Como Nossos Cursos Conectam a Teoria à Prática */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-slate-900">
              Como Nossos Cursos Conectam a Teoria à Prática
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#182333] text-white">
                    <th className="py-3.5 px-4 font-bold border-b border-slate-700 w-1/4">Dimensão</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-700 w-1/3">Nosso Foco</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-700">Impacto na Sua Jornada</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Leitura Crítica</td>
                    <td className="py-3.5 px-4 text-slate-700">Mapeamento do "estado da arte" em bases de dados abertas.</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">Capacidade de ler e dissecar artigos complexos com autonomia.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Metodologia Qualitativa</td>
                    <td className="py-3.5 px-4 text-slate-700">Cartografia de narrativas, estudos de caso e ensaios teóricos.</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">Estruturação de experiências subjetivas em dados compreensíveis e organizados.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Escrita e IA Ética</td>
                    <td className="py-3.5 px-4 text-slate-700">Uso de novas tecnologias para aprimorar argumentação e clareza.</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">Produção de protótipos autorais sem perder a voz humana.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">Ponte com o Meio Científico</td>
                    <td className="py-3.5 px-4 text-slate-700">Mentorias de submissão, Lattes/ORCID e periódicos parceiros.</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">Transição segura do estudo livre para a publicação e o reconhecimento acadêmico.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Card 6: Integração com a Ciência Aberta Radical (Open Science) e DeSci */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Ecossistema Emancipatório</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Integração com a Ciência Aberta Radical (Open Science) e DeSci (Ciência Descentralizada)
              </h2>
            </div>
          </div>

          <p className="text-slate-700 text-base leading-relaxed">
            Estimulamos ativamente a complementaridade e integração dos nossos discentes com o ecossistema da <strong className="text-slate-900 font-semibold">Ciência Aberta Radical (Open Science)</strong> e da <strong className="text-slate-900 font-semibold">DeSci (Decentralized Science / Ciência Descentralizada)</strong>. Nesse modelo inovador e emancipatório, o artigo não fica aprisionado em processos burocráticos lentos ou em modelos corporativos excludentes: o trabalho é registrado publicamente, com identificador perene, revisão aberta ou sob governança de comunidades autônomas.
          </p>

          <div className="space-y-6">
            {/* 1. Servidores de Preprints */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">1</span>
                <span>Servidores de Preprints Abertos e Descentralizados</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Permitem que qualquer pesquisador (independente, comunitário, universitário ou autodidata) publique seu manuscrito integral, receba um <strong className="text-slate-900 font-semibold">DOI (Digital Object Identifier)</strong> e disponibilize o texto imediatamente para leitura e citação global, sem cobrança de taxas e sem barreiras fechadas:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Zenodo (via OpenAIRE / CERN)</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Financiado pela União Europeia e pelo CERN, é o maior repositório aberto de dados, ensaios e artigos do mundo. Qualquer pessoa pode submeter um artigo ou protótipo, gerando um DOI oficial instantâneo e perene. Aceita publicações em português, espanhol, inglês e múltiplos idiomas.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">SocArXiv</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Servidor voltado para ciências sociais, humanidades, educação e reflexões culturais, totalmente aberto e gratuito.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">OSF Preprints (Open Science Framework)</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Infraestrutura livre do Center for Open Science, agregando pesquisas interdisciplinares com foco em transparência, reprodutibilidade e diversidade metodológica.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">SciELO Preprints</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Plataforma latino-americana de publicação rápida e aberta para textos em português e espanhol em saúde coletiva, ciências humanas e educação.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Plataformas DeSci */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">2</span>
                <span>Plataformas de Publicação DeSci (Decentralized Science)</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A Ciência Descentralizada utiliza tecnologias de registro distribuído (blockchain, IPFS e governança comunitária) para devolver o controle e a autoria diretamente aos pesquisadores e leitores:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">ResearchHub</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Ambiente colaborativo e aberto que funciona como uma rede de produção científica, permitindo publicação de preprints, revisões de literatura, debates públicos globais e incentivos comunitários.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">DeSci Publish / Planck Network</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Protocolos de publicação perene em sistemas descentralizados (IPFS/Arweave), garantindo preservação contra censura ou barreiras pagas, com revisão transparente por pares.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">PubPub (Knowledge Futures Group)</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Plataforma de código aberto (originada em projetos ligados ao MIT Media Lab) que permite criar publicações dinâmicas e periódicos comunitários interativos, sem taxas para autores ou leitores.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Periódicos com Revisão Aberta */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">3</span>
                <span>Periódicos com Revisão Aberta (Open Peer Review) e Revistas Comunitárias</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Open Peer Review (ex: F1000Research, Open Research Europe)</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Processos onde o artigo é publicado e as avaliações dos pareceristas são transparentes e visíveis para a comunidade, tornando a revisão uma etapa pedagógica e construtiva.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 text-sm block">Revistas Comunitárias em OJS Independente</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Periódicos acadêmicos mantidos em software livre Open Journal Systems (OJS) por coletivos e núcleos interdisciplinares, acolhendo saberes ancestrais, fenomenologia e práticas integrativas.
                  </p>
                </div>
              </div>
            </div>

            {/* Tabela Comparativa: Como Isso se Conecta com a ESDHUBEM */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">
                Como Isso se Conecta com a ESDHUBEM
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#182333] text-white">
                      <th className="py-3.5 px-4 font-bold border-b border-slate-700 w-1/2">Caminho Tradicional (Centralizado)</th>
                      <th className="py-3.5 px-4 font-bold border-b border-slate-700 w-1/2">Modelo Descentralizado & Aberto (Proposta ESDHUBEM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 text-slate-700">Exige titulação mínima formal (Mestrado/Doutorado) para submissão.</td>
                      <td className="py-3.5 px-4 text-slate-900 font-semibold bg-emerald-50/40">Acolhe a produção de pesquisadores autônomos, terapeutas, autodidatas e estudantes.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 text-slate-700">Avaliação em "caixa preta" que leva de 6 meses a 2 anos.</td>
                      <td className="py-3.5 px-4 text-slate-900 font-semibold bg-emerald-50/40">Publicação e disponibilização dinâmica com registro seguro de autoria (DOI / Identificador Perene).</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 text-slate-700">Foco restrito a métricas quantitativas e modelos estritamente positivistas.</td>
                      <td className="py-3.5 px-4 text-slate-900 font-semibold bg-emerald-50/40">Acolhe abordagens qualitativas, fenomenológicas, simbólicas, ensaísticas e cartografias de experiência.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 text-slate-700">Risco de cobrança de taxas de publicação abusivas (APCs).</td>
                      <td className="py-3.5 px-4 text-slate-900 font-semibold bg-emerald-50/40">100% gratuito para autores e de livre circulação mundial.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-slate-800 text-sm leading-relaxed mt-4">
                Para os alunos da <strong className="text-slate-900 font-bold">ESDHUBEM</strong>, aprender a redigir protótipos consistentes e registrá-los em plataformas abertas como o Zenodo, ou publicá-los via redes abertas e comunitárias, proporciona uma experiência real e imediata de autoria reconhecida, impacto social e inclusão no ecossistema global de produção de conhecimento.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Actions */}
        <div className="bg-[#182333] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#FFC72C]">Precisa de validação ou suporte acadêmico?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Confira os selos de mérito, valide certificados emitidos ou acesse nossos artigos e modelos de protótipos científicos.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenValidator}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer border border-white/20"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Validar Certificado</span>
            </button>

            <button
              onClick={() => onNavigate?.('informacoes-legais')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer border border-white/20"
            >
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>Valor Legal</span>
            </button>

            <button
              onClick={() => onNavigate?.('regras-certificacao-merito')}
              className="bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Award className="w-4 h-4" />
              <span>Escala de Mérito</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
