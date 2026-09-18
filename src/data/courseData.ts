import { Module, RoleplayItem, TemplateItem, ChecklistItem } from '../types';

export const COURSE_MODULES: Module[] = [
  {
    id: 1,
    title: 'Módulo 1: O Que a Liderança Realmente Espera da Sua Comunicação',
    tagline: 'Comunicação orientada a valor de negócio, perfis executivos e canais assertivos.',
    lessons: [
      {
        id: 'aula-01',
        number: 1,
        moduleId: 1,
        title: 'Aula 01: A Mente do Gestor',
        subtitle: 'Foco em soluções de negócio vs. relatar problemas.',
        duration: '14 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'Regra 1-3-1: 1 Problema, 3 Soluções Viáveis, 1 Recomendação Clara.',
        summary: [
          'Gestores operam sob restrição severa de tempo e pressão por metas da diretoria.',
          'Trazer um problema isolado transfere carga cognitiva; trazer alternativas demonstra liderança técnica.',
          'Sempre quantifique o impacto operacional e o custo de não agir antes de pedir decisões.'
        ],
        exercise: {
          id: 'ex-01',
          scenario: 'Um fornecedor crítico atrasou a entrega do módulo de pagamentos em 5 dias, comprometendo o lançamento previsto para a próxima semana. Seu gestor acabou de entrar na sala ou chamar no chat.',
          question: 'Qual é a abordagem de comunicação mais estratégica e assertiva?',
          options: [
            {
              id: 'a',
              text: '"Oi chefe, o fornecedor atrasou de novo e infelizmente não vamos conseguir entregar na semana que vem por causa deles."',
              isAssertive: false,
              classification: 'Passiva / Reativa',
              feedback: 'Postura de vítima e mera relatora de caos. Transfere a culpa sem propor contingência, gerando irritação imediata no gestor.'
            },
            {
              id: 'b',
              text: '"Temos um desvio de 5 dias no módulo de pagamentos pelo fornecedor. Já tracei 2 caminhos: lançar a versão beta com pagamento manual assistido ou mobilizar a squad interna por 48h com custo adicional de R$ 3.500. Recomendo a opção 1 para não estourar o orçamento."',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Perfeita aplicação da Regra 1-3-1. Expõe o fato sem rodeios, contextualiza o impacto e oferece solução pronta com recomendação de negócio.'
            },
            {
              id: 'c',
              text: '"Eu já avisei semana passada que esse fornecedor era ruim, agora não adianta cobrar a equipe se atrasar tudo."',
              isAssertive: false,
              classification: 'Passivo-Agressiva',
              feedback: 'Defensiva e acusatória ("eu avisei"). Não resolve o cronograma da empresa e desgasta sua reputação interpessoal.'
            }
          ]
        }
      },
      {
        id: 'aula-02',
        number: 2,
        moduleId: 1,
        title: 'Aula 02: Mapeamento de Perfil',
        subtitle: 'Como lidar com chefes analíticos, pragmáticos, relacionais e visionários.',
        duration: '18 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'Matriz dos 4 Perfis de Liderança (Analítico, Pragmático, Relacional, Visionário).',
        summary: [
          'Pragmático (Foco em resultado e velocidade): Vá direto ao ponto final em 30 segundos, sem narrativas longas.',
          'Analítico (Foco em dados e risco): Traga números, premissas, planilhas e riscos mitigados.',
          'Relacional (Foco em clima e pessoas): Comece alinhando expectativas humanas e impacto no time.',
          'Visionário (Foco no futuro e big picture): Conecte sua proposta ao objetivo estratégico trimestral.'
        ],
        exercise: {
          id: 'ex-02',
          scenario: 'Seu gestor possui perfil estritamente Pragmático (orientado a velocidade e resultados objetivos). Você precisa pedir autorização para contratar uma nova ferramenta de automação.',
          question: 'Como iniciar a conversa para capturar a atenção dele sem ser interrompido?',
          options: [
            {
              id: 'a',
              text: '"Quero te contar a história de como a equipe começou a perder tempo mês passado, passo a passo, analisando 12 sistemas diferentes..."',
              isAssertive: false,
              classification: 'Passiva / Reativa',
              feedback: 'Prolixa demais. O líder pragmático perde o foco nos primeiros 45 segundos e assumirá que você não domina a síntese.'
            },
            {
              id: 'b',
              text: '"Você nunca para pra ouvir o time de verdade, mas essa ferramenta é urgente."',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Ataque pessoal que fecha qualquer canal de negociação e aciona gatilhos de confronto hierárquico.'
            },
            {
              id: 'c',
              text: '"Objetivo: reduzir 15 horas de retrabalho semanal da equipe com payback em 45 dias. A ferramenta custa R$ 800/mês e economiza R$ 4.200 em horas extras. Posso mostrar a comparação de ROI em 2 minutos?"',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Excelente adaptação ao perfil Pragmático. Mostra objetivo, benefício financeiro imediato e pede permissão de tempo delimitada.'
            }
          ]
        }
      },
      {
        id: 'aula-03',
        number: 3,
        moduleId: 1,
        title: 'Aula 03: Timing e Canais',
        subtitle: 'Escolhendo estrategicamente entre 1:1, e-mail e mensagens instantâneas.',
        duration: '12 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'A Pirâmide da Fricção de Comunicação: Síncrono vs. Assíncrono.',
        summary: [
          'Mensagens instantâneas (Slack/Teams): Notificações rápidas, bloqueios operacionais imediatos de 1 frase.',
          'E-mail: Formalização de acordos, prestação de contas com histórico e alinhamentos multidisciplinares.',
          'Reunião 1:1: Conversas difíceis, negociação de escopo, desenvolvimento de carreira e feedback delicado.',
          'Nunca trate divergências de opinião profundas ou críticas via chat público ou threads com 15 pessoas.'
        ],
        exercise: {
          id: 'ex-03',
          scenario: 'Você discorda veementemente de uma decisão tomada pelo seu líder durante uma reunião com toda a diretoria sobre o cancelamento de um recurso que você desenvolveu.',
          question: 'Qual é o canal e timing corretos para manifestar seu posicionamento?',
          options: [
            {
              id: 'a',
              text: 'Interromper na frente da diretoria para provar tecnicamente que a decisão do seu gestor está equivocada.',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Violação grave de lealdade hierárquica pública. Gera constrangimento diante dos pares e mina a confiança executiva.'
            },
            {
              id: 'b',
              text: 'Ficar em silêncio durante a reunião e enviar uma mensagem privada em tom irônico no chat do Teams.',
              isAssertive: false,
              classification: 'Passivo-Agressiva',
              feedback: 'Comportamento tóxico que demonstra covardia argumentativa e desgasta laços profissionais.'
            },
            {
              id: 'c',
              text: 'Aguardar o término da reunião geral, solicitar 15 minutos em 1:1 reservado no mesmo dia e apresentar os dados do impacto com respeito à hierarquia.',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Maturidade corporativa exemplar: preserva o líder publicamente e negocia no fórum adequado com dados privados.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Módulo 2: CNV Aplicada à Hierarquia (Comunicação Não Violenta Vertical)',
    tagline: 'Fatos mensuráveis, recusa estratégica com priorização e reeenquadramento técnico.',
    lessons: [
      {
        id: 'aula-04',
        number: 4,
        moduleId: 2,
        title: 'Aula 04: Os 4 Passos no Corporativo',
        subtitle: 'Fatos, Impacto Operacional, Necessidade e Pedido Viável.',
        duration: '16 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'Modelo FINP: Fato Inquestionável + Impacto no Negócio + Necessidade Estrutural + Pedido Específico.',
        summary: [
          'Passo 1 (Fato): Dados observáveis sem adjetivos acusatórios (ex: "Recebi 4 alterações após aprovação").',
          'Passo 2 (Impacto): Consequência para o negócio ou metas (ex: "Isso acrescenta 8h de revisão e adia a entrega").',
          'Passo 3 (Necessidade): O que viabiliza o sucesso conjunto (ex: "Precisamos de estabilidade no escopo").',
          'Passo 4 (Pedido Viável): Ação binária clara e negociável (ex: "Podemos fechar o escopo final até amanhã às 12h?").'
        ],
        exercise: {
          id: 'ex-04',
          scenario: 'Seu gestor costuma enviar demandas complexas às 21h cobrando respostas para a manhã seguinte, prejudicando seu descanso e a qualidade técnica da entrega.',
          question: 'Como aplicar a estrutura FINP em uma conversa individual?',
          options: [
            {
              id: 'a',
              text: '"Você não respeita o horário de ninguém e quer que a gente faça milagre de madrugada."',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Julgamento inflamado. Provocará contra-ataque imediato sobre compromisso com a empresa.'
            },
            {
              id: 'b',
              text: '"Nas últimas 2 semanas, recebi 4 solicitações após as 21h com prazo para as 8h. Quando isso acontece, a revisão técnica fica sob risco e não consigo performar com o rigor habitual. Para mantermos a excelência, proponho que as demandas noturnas entrem na fila da manhã seguinte às 9h. Podemos acordar esse fluxo?"',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'FINP aplicado cirurgicamente: Fato (número de mensagens), Impacto (risco de qualidade), Necessidade (excelência de entrega) e Pedido (acordo de fila matinal).'
            },
            {
              id: 'c',
              text: 'Apenas ignorar as mensagens e reclamar no corredor com colegas de outros setores.',
              isAssertive: false,
              classification: 'Passivo-Agressiva',
              feedback: 'Comportamento que perpetua o problema, desgasta a equipe em fofocas e não estabelece nenhum limite produtivo.'
            }
          ]
        }
      },
      {
        id: 'aula-05',
        number: 5,
        moduleId: 2,
        title: 'Aula 05: Dizer "Não" com Estratégia',
        subtitle: 'Técnicas de priorização conjunta e limites sem confronto.',
        duration: '15 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'O "Sim Condicional" e o Trade-off Transparente de Recursos.',
        summary: [
          'Nunca diga um "Não" seco; líderes interpretam como má vontade ou falta de dedicação.',
          'Use o "Sim Condicional": "Com certeza podemos assumir esse projeto novo! Para garantir o padrão, qual dos projetos atuais devemos pausar?"',
          'Coloque o líder no papel de tomador de decisão sobre o trade-off, em vez de assumir toda a sobrecarga calado.',
          'Mantenha uma visualização visual do pipeline de prioridades da squad/setor sempre atualizada.'
        ],
        exercise: {
          id: 'ex-05',
          scenario: 'Sua agenda já está em 100% da capacidade com a entrega regulatória do trimestre. O gestor chega pedindo para você criar uma apresentação urgente para a reunião da diretoria de quinta-feira.',
          question: 'Qual resposta demonstra lealdade executiva sem destruir sua saúde física e prazo regulatório?',
          options: [
            {
              id: 'a',
              text: '"Impossível, você sabe muito bem que estou afogado com o projeto regulatório. Peça para outra pessoa."',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Postura de confronto inflexível que rotula você como profissional rígido e pouco colaborativo.'
            },
            {
              id: 'b',
              text: '"Consigo montar essa apresentação sim! Hoje minha prioridade 1 é o relatório regulatório com prazo fatal na sexta. Se eu focar na apresentação entre hoje e amanhã, o relatório atrasará 2 dias. Faz sentido trocarmos essa prioridade ou você prefere que eu ajude a delegar os slides para um analista sênior sob minha orientação?"',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'O clássico Sim Condicional com Trade-off transparente: você não se recusou, demonstrou as consequências objetivas e ofereceu alternativa de liderança.'
            },
            {
              id: 'c',
              text: '"Tá bom, deixa comigo... (aceita calado, trabalha até 3h da manhã e entrega ambos pela metade com erros)."',
              isAssertive: false,
              classification: 'Passiva / Reativa',
              feedback: 'O falso "sim" do colaborador submisso. Resulta em burnout, falha de entrega e perda de credibilidade.'
            }
          ]
        }
      },
      {
        id: 'aula-06',
        number: 6,
        moduleId: 2,
        title: 'Aula 06: Laboratório de Reenquadramento',
        subtitle: 'Transformando reclamações em propostas técnicas.',
        duration: '13 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'Técnica do Reenquadramento por Hipótese de Negócio (Problem-to-Proposal).',
        summary: [
          'Reclamações drenam energia; propostas técnicas atraem orçamento e autonomia.',
          'Substitua "aqui a comunicação é péssima" por "podemos implementar uma daily síncrona de 10 minutos para cortar 40% dos e-mails".',
          'Identifique a causa raiz e converta incômodos operacionais em melhorias de processo mensuráveis.',
          'Apresente métricas piloto de baixo risco antes de pedir mudanças radicais corporativas.'
        ],
        exercise: {
          id: 'ex-06',
          scenario: 'A equipe perde horas todos os dias porque não há alinhamento claro de prioridades e os briefings chegam incompletos dos clientes internos.',
          question: 'Como reenquadrar essa dor crônica em uma proposta executiva para o líder?',
          options: [
            {
              id: 'a',
              text: '"Ninguém nesta empresa sabe passar briefing direito, é uma bagunça generalizada."',
              isAssertive: false,
              classification: 'Passivo-Agressiva',
              feedback: 'Reclamação estéril que ataca a cultura da empresa sem construir nenhuma solução funcional.'
            },
            {
              id: 'b',
              text: '"Mapeei que nossa equipe gasta cerca de 12h semanais retrabalhando briefings que chegam com campos vagos. Criei um checklist padrão de 5 perguntas obrigatórias no formulário inicial. Quero rodar um teste piloto por 15 dias para medirmos a redução desse tempo. Posso iniciar nesta segunda?"',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Reenquadramento magistral: quantificou o desperdício, desenhou o artefato de solução, propôs teste piloto de baixo risco e pediu aval claro.'
            },
            {
              id: 'c',
              text: '"Se não mudarem os briefings, eu vou parar de atender os chamados a partir de hoje."',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Ultimato infantil que acarreta sanções disciplinares e quebra de compliance corporativo.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    title: 'Módulo 3: Recebendo Feedbacks Difíceis com Inteligência Emocional',
    tagline: 'Desarmar reatividade, converter críticas vagas em planos de ação e formalizar alinhamentos.',
    lessons: [
      {
        id: 'aula-07',
        number: 7,
        moduleId: 3,
        title: 'Aula 07: Desarmando a Reatividade',
        subtitle: 'Como controlar os mecanismos de defesa e escutar ativamente.',
        duration: '15 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'O Protocolo da Pausa Tática e Parafraseamento Investigativo.',
        summary: [
          'Quando ouvimos uma crítica, o cérebro ativa o modo luta ou fuga (sequestro da amígdala).',
          'Pausa Tática de 3 segundos: Respire e separe a sua identidade profissional do fato operacional apontado.',
          'Nunca interrompa com justificativas nos primeiros minutos; anote os pontos com calma.',
          'Parafraseie: "Deixe-me assegurar que compreendi seus pontos principais..." Isso desconcerta a agressividade do interlocutor.'
        ],
        exercise: {
          id: 'ex-07',
          scenario: 'Seu gestor diz de maneira dura: "Você foi muito imaturo na apresentação para o cliente hoje e quase colocou a conta em risco."',
          question: 'Qual é o primeiro movimento assertivo para desarmar a tensão?',
          options: [
            {
              id: 'a',
              text: '"Imaturo foi você, que nem leu a apresentação antes e me deixou sozinho lá!"',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Explosão reativa fatal para a carreira. Transforma um erro operacional em quebra irreparável de respeito mútuo.'
            },
            {
              id: 'b',
              text: '"Entendo sua preocupação com a segurança da conta, e o cliente é prioridade máxima. Para que eu possa corrigir imediatamente: qual momento ou comportamento específico você avaliou como imaturo?"',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Desarma a carga emocional, valida a intenção de negócio do líder e exige dados factuais específicos em vez de aceitar o rótulo abstrato.'
            },
            {
              id: 'c',
              text: 'Abaixar a cabeça, concordar em pranto e pedir desculpas sem nem saber o que exatamente incomodou o gestor.',
              isAssertive: false,
              classification: 'Passiva / Reativa',
              feedback: 'Postura de submissão emocional que não gera aprendizado técnico e reforça desequilíbrio na relação de trabalho.'
            }
          ]
        }
      },
      {
        id: 'aula-08',
        number: 8,
        moduleId: 3,
        title: 'Aula 08: Perguntas de Filtro',
        subtitle: 'Como converter críticas vagas em metas mensuráveis de entrega.',
        duration: '17 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'Funil Socrático de Desambiguação de Feedback Vago.',
        summary: [
          'Feedbacks vagos como "você precisa ter mais atitude de dono" ou "seja mais estratégico" são armadilhas perigosas.',
          'Faça a pergunta do comportamento observável: "Se eu estiver demonstrando essa atitude com excelência daqui a 30 dias, o que você verá de diferente na minha rotina?"',
          'Identifique exemplos de sucesso que o líder admira na empresa e use como benchmark concreto.',
          'Defina indicadores de entrega para que a avaliação futura não seja baseada em impressões de humor.'
        ],
        exercise: {
          id: 'ex-08',
          scenario: 'Em sua avaliação de desempenho, o líder diz: "Você entrega tudo no prazo, mas sinto que falta ser mais proativo e ter mais visão macro."',
          question: 'Como transformar esse apontamento abstrato em um plano de metas concreto?',
          options: [
            {
              id: 'a',
              text: '"Mas eu entrego tudo no prazo! Você nunca está satisfeito com nada que faço."',
              isAssertive: false,
              classification: 'Passivo-Agressiva',
              feedback: 'Reatividade cega. Discute o histórico em vez de construir o critério para a próxima promoção.'
            },
            {
              id: 'b',
              text: '"Quero muito desenvolver essa visão macro alinhada ao seu padrão. Pensando nos projetos do próximo mês, que tipo de iniciativa específica você gostaria de ver partindo de mim antes de você me pedir? Há algum relatório estratégico que posso assumir?"',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Excelente uso do Funil Socrático. Força o líder a transformar o adjetivo vago em entregáveis práticos que podem ser mensurados.'
            },
            {
              id: 'c',
              text: '"Ok, vou tentar ser mais proativo." (e vai embora sem a menor ideia de qual mudança é esperada).',
              isAssertive: false,
              classification: 'Passiva / Reativa',
              feedback: 'Acordo vazio. Em 6 meses o líder repetirá a mesma queixa e seu bônus ou promoção continuará travado.'
            }
          ]
        }
      },
      {
        id: 'aula-09',
        number: 9,
        moduleId: 3,
        title: 'Aula 09: Fechamento do Ciclo',
        subtitle: 'Formalização do alinhamento por e-mail e definição de data para follow-up.',
        duration: '12 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'A Técnica do E-mail Espelho de Confirmação e Checkpoint.',
        summary: [
          'Conversas orais se perdem na memória seletiva de ambas as partes.',
          'Envie o "E-mail Espelho" até 3 horas após o feedback alinhando os 3 compromissos assumidos.',
          'Fixe uma data explícita de checkpoint (ex: "Sugiro revisarmos este plano no dia 20 para validar o progresso").',
          'Isso cria blindagem jurídica e profissional, demonstrando maturidade sênior de execução.'
        ],
        exercise: {
          id: 'ex-09',
          scenario: 'Você acabou de ter uma conversa produtiva de 45 minutos com o gestor ajustando a rota de um projeto e assumindo novas responsabilidades.',
          question: 'Qual é o fechamento adequado para garantir que o combinado não mude na próxima semana?',
          options: [
            {
              id: 'a',
              text: 'Não enviar nada para não parecer burocrático e confiar na memória de ambos.',
              isAssertive: false,
              classification: 'Passiva / Reativa',
              feedback: 'Vulnerabilidade extrema. Na primeira cobrança divergente, será a sua palavra contra a do gestor.'
            },
            {
              id: 'b',
              text: 'Enviar um e-mail estruturado: "Olá [Nome], obrigado pelo alinhamento de hoje. Conforme acordamos: 1) Eu assumo o relatório X até quinta; 2) Você aprova o orçamento Y até sexta; 3) Faremos um checkpoint de 15 min no dia 25. Caso algo precise de ajuste, avise."',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Padrão ouro corporativo. Cria registro compartilhado, estabelece expectativas mútuas e agenda o retorno sem gerar atrito.'
            },
            {
              id: 'c',
              text: 'Mandar uma mensagem longa de áudio no WhatsApp relembrando tudo com comentários opinativos.',
              isAssertive: false,
              classification: 'Passivo-Agressiva',
              feedback: 'Canal inadequado para formalização corporativa. Áudios longos são difíceis de pesquisar e geram ruído desnecessário.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Módulo 4: Upward Feedback — Como Dar Feedback para Cima com Segurança',
    tagline: 'Matriz de viabilidade de risco, framework SCI invertido e construção de acordos duradouros.',
    lessons: [
      {
        id: 'aula-10',
        number: 10,
        moduleId: 4,
        title: 'Aula 10: Matriz de Viabilidade',
        subtitle: 'Leitura de cenário: quando vale a pena falar e quando recuar.',
        duration: '16 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'A Matriz de Risco Político vs. Impacto Operacional do Upward Feedback.',
        summary: [
          'Dar feedback para a liderança exige capital político prévio acumulado.',
          'Avalie 3 variáveis: Receptividade do líder, gravidade do impacto no negócio e tempo de convivência de confiança.',
          'Se o líder for narcisista ou punitivo e o impacto for meramente cosmético, o caminho seguro é contorno ou transferência.',
          'Se o líder for desenvolvível e o negócio estiver em risco, intervenha estruturadamente.'
        ],
        exercise: {
          id: 'ex-10',
          scenario: 'Seu gestor acabou de assumir a área há 3 semanas. Ele tem o hábito de interromper você no meio do raciocínio em reuniões com pares. Você ainda não tem relação consolidada com ele.',
          question: 'Como proceder segundo a Matriz de Viabilidade?',
          options: [
            {
              id: 'a',
              text: 'Confrontá-lo na primeira oportunidade para não parecer fraco diante do time.',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Erro tático crítico. Com apenas 3 semanas de relação, o líder verá você como uma ameaça insubordinada.'
            },
            {
              id: 'b',
              text: 'Fazer entregas impecáveis nas próximas semanas para construir capital de confiança, mapear se ele faz isso com todos ou apenas com você, e só então abordar o tema em 1:1 privado a partir da semana 5.',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Leitura política e estratégica impecável. Capital de confiança vem antes da intervenção em comportamentos delicados.'
            },
            {
              id: 'c',
              text: 'Fazer deboche pelas costas dele com os outros analistas para queimar a autoridade do novo líder.',
              isAssertive: false,
              classification: 'Passivo-Agressiva',
              feedback: 'Gera sabotagem de clima, quebra código de conduta e coloca em risco sua própria estabilidade na organização.'
            }
          ]
        }
      },
      {
        id: 'aula-11',
        number: 11,
        moduleId: 4,
        title: 'Aula 11: O Framework SCI Invertido',
        subtitle: 'Aplicando Situação, Comportamento e Impacto com a chefia.',
        duration: '18 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'Framework SCI Invertido: Situação Específica + Comportamento Neutro + Impacto Compartilhado de Negócio.',
        summary: [
          'Upward Feedback nunca usa acusações genéricas ("Você é desorganizado").',
          'S (Situação): "Na reunião de alinhamento com a diretoria na terça-feira..."',
          'C (Comportamento): "...quando as alterações de escopo foram aprovadas sem aviso prévio à equipe de engenharia..."',
          'I (Impacto): "...o time precisou descartar 3 dias de código homologado, elevando o risco de entrega do MVP."',
          'Finalize sempre com uma pergunta de colaboração: "Como podemos calibrar esse fluxo juntos nas próximas aprovações?"'
        ],
        exercise: {
          id: 'ex-11',
          scenario: 'Seu gestor frequentemente muda os requisitos técnicos do projeto no meio do sprint sem atualizar o Jira, gerando retrabalho na squad.',
          question: 'Como aplicar o SCI Invertido na próxima reunião 1:1?',
          options: [
            {
              id: 'a',
              text: '"Você não sabe o que quer e fica mudando de ideia toda hora, deixando a equipe louca."',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Ataque de julgamento adjetivado. Aciona defesas e não foca no impacto prático mensurável.'
            },
            {
              id: 'b',
              text: '"Na última quinta-feira, durante o sprint corrente (Situação), quando a mudança na arquitetura do banco foi solicitada via chat sem registro no board (Comportamento), o time precisou refazer 16 horas de testes e a entrega final ficou sob risco (Impacto). Gostaria de propor um alinhamento: podemos instituir que qualquer mudança passe por 5 min de validação comigo antes de entrar no sprint?"',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'SCI Invertido cirúrgico. Focado no fato incontestável, impacto mensurado em horas de negócio e convite para solução colaborativa.'
            },
            {
              id: 'c',
              text: 'Não falar nada, fingir que está tudo bem e atrasar a entrega de propósito para ele aprender a lição.',
              isAssertive: false,
              classification: 'Passivo-Agressiva',
              feedback: 'Sabotagem corporativa velada. O líder perceberá a má vontade e você será penalizado tecnicamente.'
            }
          ]
        }
      },
      {
        id: 'aula-12',
        number: 12,
        moduleId: 4,
        title: 'Aula 12: Construção de Acordos',
        subtitle: 'Como alinhar fluxos de trabalho e prevenir desgastes futuros.',
        duration: '14 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'Contrato Psicológico de Trabalho e Acordo de Nível de Serviço (SLA) Interno.',
        summary: [
          'Conflitos recorrentes são sintomas de acordos operacionais implícitos ou inexistentes.',
          'Estabeleça os SLAs: Tempo de resposta para mensagens urgentes vs. planejamento ordinário.',
          'Crie rituais fixos de sincronização para reduzir ansiedade de microgerenciamento.',
          'Alinhe como resolver divergências técnicas antes que o projeto comece, quando a temperatura emocional está baixa.'
        ],
        exercise: {
          id: 'ex-12',
          scenario: 'Seu gestor costuma cobrar status a cada 2 horas por WhatsApp, o que interrompe seu estado de foco (deep work) e gera ansiedade.',
          question: 'Como estabelecer um acordo operacional assertivo?',
          options: [
            {
              id: 'a',
              text: 'Bloquear o gestor no WhatsApp ou colocar status ofensivo no perfil.',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Comportamento infantil e antiético que gera desligamento imediato por justa causa ou desrespeito.'
            },
            {
              id: 'b',
              text: '"Percebo sua preocupação legítima com o andamento desse projeto crítico. Para que eu consiga focar nos blocos complexos de código e ao mesmo tempo te dar 100% de visibilidade, proponho te enviar um status consolidado em tópicos duas vezes ao dia: às 11h e às 17h. Se houver qualquer bloqueador grave, eu mesmo te aciono imediatamente. Podemos testar essa cadência por uma semana?"',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Excelente construção de acordo. Atende à necessidade subjacente de segurança do líder, propõe ritmo de previsibilidade e resgata seu tempo de concentração.'
            },
            {
              id: 'c',
              text: 'Ficar respondendo com monossílabos ("ok", "sim", "indo") visivelmente irritado.',
              isAssertive: false,
              classification: 'Passivo-Agressiva',
              feedback: 'Não resolve a ansiedade do gestor (que continuará cobrando ainda mais para obter detalhes) e queima seu profissionalismo.'
            }
          ]
        }
      },
      {
        id: 'aula-13',
        number: 13,
        moduleId: 4,
        title: 'Aula 13: Simulação Real e Plano de Ação',
        subtitle: 'Elaboração do seu plano de comunicação de 30 dias.',
        duration: '20 min',
        videoSrc: 'URL_DO_VIDEO_AQUI',
        keyFramework: 'Plano Estratégico de Comunicação Executiva de 30 Dias (Diagnóstico, Ajuste, Consolidação).',
        summary: [
          'Dia 1 ao 10: Mapeamento detalhado dos gatilhos e estilo decisório do gestor.',
          'Dia 11 ao 20: Aplicação prática da Regra 1-3-1 e do Sim Condicional em todas as interações cotidianas.',
          'Dia 21 ao 30: Condução da primeira reunião 1:1 estruturada de alinhamento de expectativas mútuas.',
          'Monitore semanalmente a redução de atritos e o aumento da sua autonomia decisória.'
        ],
        exercise: {
          id: 'ex-13',
          scenario: 'Você finalizou os 4 módulos do curso e está pronto para consolidar sua postura assertiva no trabalho a partir de amanhã.',
          question: 'Qual é o primeiro passo prático do seu plano de 30 dias para obter resultados consistentes?',
          options: [
            {
              id: 'a',
              text: 'Chegar amanhã impondo todas as novas regras ao gestor e cobrando feedbacks imediatos.',
              isAssertive: false,
              classification: 'Agressiva',
              feedback: 'Mudança brusca sem calibragem. Assusta a liderança e soa como arrogância teórica recém-adquirida.'
            },
            {
              id: 'b',
              text: 'Guardar o conteúdo do curso na gaveta e agir exatamente do mesmo jeito de antes por comodismo.',
              isAssertive: false,
              classification: 'Passiva / Reativa',
              feedback: 'Desperdício completo do aprendizado. Sem prática diária deliberada, nenhuma habilidade de comunicação se consolida.'
            },
            {
              id: 'c',
              text: 'Iniciar a semana observando e anotando o perfil predominante do gestor, adotar a Regra 1-3-1 nos próximos e-mails e preparar o checklist de 5 minutos antes da próxima reunião relevante.',
              isAssertive: true,
              classification: 'Assertiva',
              feedback: 'Perfeita execução estratégica gradual: diagnóstico sem julgamentos, melhoria imediata no fluxo de soluções e uso contínuo das ferramentas de apoio.'
            }
          ]
        }
      }
    ]
  }
];

export const ROLEPLAY_MATRIX: RoleplayItem[] = [
  {
    id: 'rp-1',
    context: 'Demanda urgente jogada no seu colo no final do expediente (17h50)',
    reactiveResponse: '"Todo dia a mesma coisa! Eu tenho vida fora daqui e não sou obrigado a ficar até mais tarde sem aviso."',
    reactiveRisk: 'Gera rótulo de baixa flexibilidade, atrito emocional e fechamento de oportunidades de liderança futura.',
    assertiveResponse: '"Consigo endereçar essa demanda sim. Como já estou encerrando as entregas de hoje, posso priorizá-la logo no primeiro horário de amanhã às 8h30 ou pausar o relatório financeiro agora. Qual das opções melhor atende a estratégia?"',
    assertiveAdvantage: 'Não confronta pessoalmente, apresenta opções claras de negócio e transfere o trade-off de prioridade para a liderança com elegância.'
  },
  {
    id: 'rp-2',
    context: 'Feedback genérico e injusto: "Você precisa vestir mais a camisa da empresa"',
    reactiveResponse: '"Eu dou o sangue aqui dentro e você não valoriza nada! Se for pra ser assim, nem me esforço mais."',
    reactiveRisk: 'Vitimização agressiva. Mostra imaturidade emocional e foca no ressentimento em vez de clarear critérios de avaliação.',
    assertiveResponse: '"Quero muito garantir que minha entrega esteja 100% conectada às expectativas da área. Para que eu calibre minhas ações: que comportamento observável ou iniciativa prática você gostaria de ver partindo de mim no próximo mês?"',
    assertiveAdvantage: 'Desarma a crítica rasa, exige métricas comportamentais claras e transforma um rótulo tóxico em plano de ação auditável.'
  },
  {
    id: 'rp-3',
    context: 'Mudança radical de prioridade no meio do projeto sem aviso prévio',
    reactiveResponse: '"Desisto! Não adianta planejar nada nessa empresa porque vocês mudam de ideia todo dia."',
    reactiveRisk: 'Passivo-agressividade que contagia negativamente os pares e destrói sua imagem de maturidade executiva.',
    assertiveResponse: '"Perfeito, entendi a mudança de rumo pelo mercado. Para alinharmos os impactos: com essa nova prioridade, o cronograma do projeto anterior terá um acréscimo de 10 dias úteis. Posso atualizar os stakeholders com essa premissa?"',
    assertiveAdvantage: 'Aceita a volatilidade com serenidade técnica, documenta formalmente o impacto e protege sua squad de cobranças indevidas.'
  },
  {
    id: 'rp-4',
    context: 'Sobrecarga crônica de tarefas acumuladas no seu setor',
    reactiveResponse: '(Fica em silêncio, aceita tudo, começa a adoecer e comete erros graves por cansaço extremo)',
    reactiveRisk: 'Burnout, queda na qualidade do trabalho e perda de credibilidade técnica por não saber gerenciar capacidade.',
    assertiveResponse: '"Mapeei a capacidade operacional da minha semana: tenho 40h disponíveis e atualmente temos 62h de demandas alocadas. Gostaria de 10 minutos para definirmos juntos quais 3 entregas geram mais valor agora e quais podemos postergar."',
    assertiveAdvantage: 'Usa dados matemáticos indiscutíveis em vez de lamentações, facilitando a decisão do líder sem drama.'
  },
  {
    id: 'rp-5',
    context: 'Sua ideia técnica foi ignorada na reunião e adotada quando dita por outra pessoa',
    reactiveResponse: '"Engraçado, né? Quando eu falei há 10 minutos ninguém ligou, agora todo mundo acha genial..."',
    reactiveRisk: 'Comentário irônico e amargo que soa como inveja infantil e afasta o apoio dos colegas e da chefia.',
    assertiveResponse: '"Fico muito satisfeito que o time convergiu para esse caminho! Como mencionei no início, esse modelo reduz nossos custos em 15%. Já tenho uma prévia da arquitetura pronta e posso liderar a implementação desse piloto."',
    assertiveAdvantage: 'Reivindica a autoria com elegância política, reforça o dado de negócio e se posiciona naturalmente como o dono da execução.'
  }
];

export const TEMPLATES_LIST: TemplateItem[] = [
  {
    id: 'tmpl-1',
    title: 'Follow-up Executivo Pós-Reunião (Alinhamento Blindado)',
    category: 'Follow-up',
    description: 'Use para documentar acordos, responsabilidades e datas imediatamente após conversas verbais.',
    content: `Assunto: [Alinhamento & Próximos Passos] - Reunião sobre [Tema do Projeto]

Olá [Nome do Gestor],

Obrigado pelo tempo e direcionamento na nossa conversa de hoje. Para garantir que estejamos 100% sincronizados, consolido abaixo os acordos e decisões principais:

1. Decisão Tomada:
- Aprovamos seguir com a abordagem [Opção A], priorizando o objetivo de [Meta Principal].

2. Responsabilidades e Prazos:
- [Meu Nome]: Entrega do [Entregável 1] até [Data, Ex: Quinta-feira, 16h].
- [Liderança / Outro]: Validação da [Aprovação / Orçamento] até [Data, Ex: Sexta-feira, 12h].

3. Próximo Checkpoint:
- Alinhamento de 15 minutos via 1:1 agendado para [Data/Hora] para avaliar os primeiros resultados.

Caso algum ponto precise de ajuste ou complemento, estou à disposição para calibrarmos.

Atenciosamente,
[Seu Nome]
[Seu Cargo]`
  },
  {
    id: 'tmpl-2',
    title: 'Solicitação Estratégica de Reunião 1:1',
    category: '1:1',
    description: 'Abordagem respeitosa para pedir tempo na agenda concorrida da liderança com pauta delimitada.',
    content: `Olá [Nome do Gestor], tudo bem?

Gostaria de agendar 20 minutos individuais com você nos próximos dias para tratarmos de [Tema Específico, Ex: alinhamento de prioridades do Q3 / feedback do projeto X].

Para otimizarmos seu tempo, estruturei uma pauta bem objetiva com 3 tópicos:
1. Status das 2 entregas prioritárias da minha frente;
2. Bloqueador operacional que preciso do seu direcionamento de negócio;
3. Proposta de melhoria para o fluxo de revisão do time.

Qual desses horários melhor se encaixa na sua agenda?
- Opção 1: [Ex: Terça-feira às 14h30]
- Opção 2: [Ex: Quarta-feira às 10h00]

Caso prefira outro momento, fico à disposição.

Obrigado,
[Seu Nome]`
  },
  {
    id: 'tmpl-3',
    title: 'Renegociação Estratégica de Prazos e Trade-offs',
    category: 'Prazos',
    description: 'Como avisar sobre desvios com antecedência e propor caminhos viáveis sem passar sensação de descaso.',
    content: `Assunto: [Atualização de Cronograma & Proposta de Mitigação] - Projeto [Nome]

Olá [Nome do Gestor],

Escrevo para atualizar com antecedência sobre o andamento do projeto [Nome], visando garantir a qualidade e segurança da entrega.

Identificamos um desvio decorrente de [Fato Objetivo, Ex: atraso na homologação da API externa / inclusão de novos requisitos regulatórios]. 

Para não comprometermos a meta principal de [Meta da Empresa], formulei 2 cenários viáveis para sua decisão:

• Cenário A (Recomendado): Manter o lançamento no dia [Data Original] contendo as 3 funcionalidades essenciais (escopo core), postergando os módulos complementares para o sprint seguinte.
• Cenário B: Entregar o escopo completo com prorrogação de [X dias úteis], garantindo testes rigorosos e homologação sem sobrecarga.

Qual desses caminhos você considera mais oportuno para o posicionamento da área perante a diretoria?

Estou pronto para executar a opção definida.

Abraço,
[Seu Nome]`
  }
];

export const PRE_MEETING_CHECKLIST: ChecklistItem[] = [
  {
    id: 'chk-1',
    category: 'Fatos e Dados',
    question: 'Separei fatos concretos e números verificáveis em vez de adjetivos e opiniões subjetivas?',
    tip: 'Evite palavras como "sempre", "nunca", "você acha", "é óbvio". Use datas, quantidades e métricas.'
  },
  {
    id: 'chk-2',
    category: 'Proposta de Negócio',
    question: 'Preparei pelo menos 2 alternativas viáveis com recomendação clara (Regra 1-3-1)?',
    tip: 'Líderes querem tomar decisões, não inventar soluções operacionais sob pressão.'
  },
  {
    id: 'chk-3',
    category: 'Perfil do Gestor',
    question: 'Ajustei meu discurso ao perfil do gestor (Pragmático, Analítico, Relacional ou Visionário)?',
    tip: 'Para pragmáticos, comece pela conclusão em 30 segundos. Para analíticos, tenha as premissas em mãos.'
  },
  {
    id: 'chk-4',
    category: 'Controle Emocional',
    question: 'Estou calmo e ciente da Pausa Tática caso receba uma objeção ou crítica inesperada?',
    tip: 'Respire 3 segundos antes de responder. Não interrompa o raciocínio do interlocutor.'
  },
  {
    id: 'chk-5',
    category: 'Pedido Viável',
    question: 'Meu pedido final é específico, mensurável e realizável pela autoridade do gestor?',
    tip: 'Finalize com um chamado claro à ação: "Podemos fechar esse acordo até sexta-feira às 12h?"'
  },
  {
    id: 'chk-6',
    category: 'Formalização',
    question: 'Já tenho o rascunho mental do follow-up por e-mail para registrar o que for decidido?',
    tip: 'Acordos que não são formalizados viram ruídos na memória seletiva de curto prazo.'
  }
];

export const COURSE_DATA = {
  modules: COURSE_MODULES,
  roleplay: ROLEPLAY_MATRIX,
  templates: TEMPLATES_LIST,
  checklist: PRE_MEETING_CHECKLIST
};

export const getAllLessons = (): import('../types').Lesson[] => {
  return COURSE_MODULES.flatMap(m => m.lessons);
};

