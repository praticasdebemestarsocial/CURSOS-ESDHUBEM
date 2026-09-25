export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML ou string para renderizar
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'o-poder-do-desenvolvimento-pessoal',
    title: 'O Poder do Desenvolvimento Pessoal na Carreira',
    excerpt: 'Descubra como investir em autoconhecimento pode transformar não apenas a sua vida pessoal, mas também alavancar os seus resultados profissionais.',
    content: `
      <p class="mb-4">O desenvolvimento pessoal é uma jornada contínua de autoconhecimento e aprimoramento de habilidades. Muitas vezes, pensamos que o crescimento profissional está ligado apenas a diplomas e cursos técnicos, mas a inteligência emocional e a capacidade de se relacionar são igualmente cruciais.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4 text-[#182333]">Por que o Autoconhecimento Importa?</h3>
      <p class="mb-4">Quando você entende suas próprias emoções, gatilhos e pontos fortes, toma decisões mais assertivas. Profissionais que investem no desenvolvimento humano conseguem lidar melhor com a pressão, lideram equipes com empatia e constroem um ambiente de trabalho mais saudável.</p>
      
      <p class="mb-4">No cenário atual, as empresas procuram por <em>soft skills</em> (habilidades comportamentais). Um colaborador que se comunica bem, tem resiliência e pensamento ético, destaca-se rapidamente.</p>

      <h3 class="text-xl font-bold mt-8 mb-4 text-[#182333]">Como começar?</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Autopercepção:</strong> Tire alguns minutos do seu dia para refletir sobre suas atitudes.</li>
        <li><strong>Comunicação Empática:</strong> Escute ativamente as pessoas ao seu redor.</li>
        <li><strong>Cursos Livres:</strong> A ESDHUBEM oferece diversas formações que aceleram esse processo, como Inteligência Emocional e Comunicação Assertiva.</li>
      </ul>

      <p>Invista em você. A maior transformação sempre acontece de dentro para fora.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    author: 'Equipe ESDHUBEM',
    date: '24 de Outubro, 2026',
    category: 'Desenvolvimento Pessoal',
    readTime: '3 min de leitura'
  },
  {
    id: 'lideranca-humanizada',
    title: 'Liderança Humanizada: O Futuro das Organizações',
    excerpt: 'Entenda por que empresas modernas estão abandonando a gestão autoritária em favor de líderes que valorizam a empatia e a conexão humana.',
    content: `
      <p class="mb-4">O modelo tradicional de liderança, focado puramente em números e cobranças, está ultrapassado. A liderança humanizada coloca as pessoas no centro da estratégia empresarial.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4 text-[#182333]">O que é um Líder Humanizado?</h3>
      <p class="mb-4">É aquele que enxerga seus colaboradores não como engrenagens, mas como seres humanos complexos. Ele entende que a motivação e a produtividade estão diretamente ligadas ao bem-estar mental e emocional da equipe.</p>
      
      <p>Para se aprofundar nesse tema, recomendamos explorar nossa área de Treinamentos Corporativos, focada em transformar gestores em verdadeiros líderes inspiradores.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    author: 'Equipe ESDHUBEM',
    date: '15 de Outubro, 2026',
    category: 'Gestão e Liderança',
    readTime: '2 min de leitura'
  }
];
