import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'fp-assertiva',
    title: 'Comunicação Assertiva com a Liderança',
    category: 'Comunicação & Soft Skills',
    hours: 40,
    pillar: 'freepremium',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    syllabus: [
      'Módulo 0: Apresentação e Boas-Vindas ao Método Assertivo',
      'Módulo 1: Os 4 Estilos de Comunicação no Trabalho',
      'Módulo 2: CNV Aplicada a Reuniões e Feedbacks Estratégicos',
      'Módulo 3: Negociação de Prazos e Alinhamento com Gestores',
      'Módulo 4: Comunicação Não-Violenta sob Pressão',
      'Módulo 5: Plano de Ação Prático e Síntese de Aprendizado'
    ],
    description: 'Aprenda a se comunicar com clareza, firmeza e empatia junto à liderança corporativa.'
  },
  {
    id: 'hc-1',
    title: 'Saúde Mental & Manejo do Stress no Ambiente de Trabalho',
    category: 'Bem-Estar & Saúde Emocional',
    hours: 30,
    pillar: 'horas-complementares',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    syllabus: [
      'Aula 1: Neurobiologia do Estresse e Burnout',
      'Aula 2: Ferramentas de Regulação Emocional no Trabalho',
      'Aula 3: Organização da Rotina e Desconexão Digital',
      'Aula 4: Construindo Ambientes Psicológica e Emocionalmente Seguros'
    ],
    description: 'Estratégias científicas para gerenciar a ansiedade e manter a saúde mental corporativa.'
  },
  {
    id: 'fp-1',
    title: 'Liderança Humanizada & Gestão de Equipes de Alta Performance',
    category: 'Liderança & Gestão',
    hours: 60,
    pillar: 'formacao-livre',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    syllabus: [
      'Aula 1: Fundamentos da Liderança Empática e Resultados',
      'Aula 2: Delegação Eficiente e Autonomia Orientada',
      'Aula 3: Gestão de Conflitos e Mediação de Crises',
      'Aula 4: Cultura de Feedback Contínuo e Reconhecimento'
    ],
    description: 'Desenvolva competências de liderança inspiradora e gestão humana voltada para resultados.'
  },
  {
    id: 'fl-1',
    title: 'Práticas Integrativas e Qualidade de Vida no Trabalho',
    category: 'Práticas Integrativas',
    hours: 20,
    pillar: 'formacao-livre',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    syllabus: [
      'Aula 1: Introdução às Práticas Integrativas no Corporativo',
      'Aula 2: Mindful Working e Pausas Conscientes',
      'Aula 3: Ergonomia e Exercícios Práticos de Alongamento'
    ],
    description: 'Técnicas integrativas para promover bem-estar físico e mental durante a jornada profissional.'
  }
];
