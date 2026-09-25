import { PolicyDetail } from '../types';

export const POLICIES_DETAIL_DATA: PolicyDetail[] = [
  {
    id: 'privacidade',
    title: 'Política de Privacidade e LGPD',
    lastUpdated: '15 de Março de 2026',
    iconName: 'ShieldCheck',
    color: 'from-emerald-500 to-teal-600',
    introduction: 'A ESDHUBEM valoriza a sua privacidade. Esta política descreve como coletamos, usamos, protegemos e compartilhamos os seus dados pessoais ao utilizar nossa plataforma, em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).',
    sections: [
      {
        title: '1. Coleta de Dados Pessoais',
        content: [
          'Coletamos informações que você nos fornece diretamente ao se cadastrar, matricular-se em cursos ou solicitar emissão de certificados.',
          'Os dados coletados incluem: Nome completo, CPF, e-mail, telefone, endereço residencial (apenas para envio de certificados físicos) e dados de histórico acadêmico vinculados aos cursos.'
        ]
      },
      {
        title: '2. Uso das Informações',
        content: [
          'Utilizamos seus dados exclusivamente para: prestação de serviços educacionais, emissão e registro de certificados válidos, comunicação de suporte técnico, processamento de pagamentos e envio de atualizações sobre sua jornada de aprendizagem.',
          'Não vendemos, alugamos ou repassamos seus dados para empresas terceiras com fins publicitários ou comerciais alheios à educação.'
        ]
      },
      {
        title: '3. Proteção e Segurança',
        content: [
          'Seus dados são armazenados em servidores seguros com criptografia de ponta a ponta. Adotamos medidas técnicas e administrativas rigorosas para prevenir acesso não autorizado, vazamento ou alteração de informações.',
          'Os dados de pagamento são processados por gateways homologados (PCI-DSS) e não são armazenados em nossos bancos de dados.'
        ]
      },
      {
        title: '4. Seus Direitos (LGPD)',
        content: [
          'Você tem o direito de solicitar o acesso, a correção, a anonimização ou a exclusão dos seus dados pessoais a qualquer momento.',
          'Para exercer esses direitos, basta entrar em contato conosco através do e-mail esdhubem@proton.me. Salientamos que a exclusão total de dados pode impossibilitar a validação futura dos seus certificados já emitidos.'
        ]
      }
    ]
  },
  {
    id: 'termos',
    title: 'Termos de Uso',
    lastUpdated: '10 de Janeiro de 2026',
    iconName: 'Gavel',
    color: 'from-slate-600 to-slate-800',
    introduction: 'Bem-vindo à plataforma educacional da ESDHUBEM. Ao acessar ou utilizar nossos cursos (sejam eles gratuitos, Freepremium ou pagos), você concorda com as condições e regras estabelecidas neste documento.',
    sections: [
      {
        title: '1. Propriedade Intelectual',
        content: [
          'Todo o conteúdo disponibilizado na plataforma (vídeos, apostilas, e-books, designs, logotipos e textos) é protegido por leis de direitos autorais e é propriedade exclusiva da ESDHUBEM.',
          'É expressamente proibida a reprodução, distribuição, venda, cópia ou uso comercial não autorizado de qualquer material didático, sujeito a penalidades civis e criminais.'
        ]
      },
      {
        title: '2. Conta do Aluno',
        content: [
          'O acesso aos cursos exige a criação de uma conta pessoal e intransferível. O compartilhamento de senhas de acesso é proibido e pode resultar no bloqueio permanente da conta.',
          'O aluno é responsável por manter seus dados cadastrais (nome e CPF) corretos, visto que são utilizados para a emissão oficial dos certificados.'
        ]
      },
      {
        title: '3. Disponibilidade do Sistema',
        content: [
          'Nossa plataforma funciona 24 horas por dia, 7 dias por semana. No entanto, não nos responsabilizamos por interrupções temporárias causadas por manutenções programadas, falhas de conexão de internet do usuário ou eventos de força maior.'
        ]
      },
      {
        title: '4. Modelo Freepremium e Emissão de Certificados',
        content: [
          'Os cursos marcados como "Freepremium" possuem acesso gratuito ao conteúdo em vídeo. A emissão do certificado oficial comprobatório é opcional e condicionada ao pagamento de uma taxa administrativa.',
          'A validação do certificado depende da confirmação do pagamento e, em alguns casos, da realização de uma avaliação final com nota mínima de corte.'
        ]
      },
      {
        title: '5. Produtos Parceiros e Afiliação',
        content: [
          'Nas páginas de alguns cursos, podem existir sugestões de modelos de produtos de tecnologia de plataformas parceiras, com as quais a ESDHUBEM estipulou uma parceria de divulgação.',
          'A responsabilidade pelo pagamento, entrega, troca e devolução destes itens é inteiramente da plataforma parceira onde a transação final foi realizada (como no caso do Mercado Livre).'
        ]
      }
    ]
  },
  {
    id: 'pagamentos',
    title: 'Formas de Pagamento',
    lastUpdated: '20 de Fevereiro de 2026',
    iconName: 'CreditCard',
    color: 'from-blue-500 to-indigo-600',
    introduction: 'Para facilitar seu acesso à educação, a ESDHUBEM oferece múltiplas opções de pagamento seguro. Nossa infraestrutura financeira é gerida por parceiros rigorosamente auditados.',
    sections: [
      {
        title: '1. Cartão de Crédito',
        content: [
          'Aceitamos as principais bandeiras de cartão de crédito (Visa, Mastercard, Elo, Amex, Hipercard).',
          'Os pagamentos podem ser parcelados em até 12 vezes, dependendo do valor da taxa de emissão ou da formação. A liberação do acesso ou certificado é instantânea após a aprovação da operadora.'
        ]
      },
      {
        title: '2. Pix',
        content: [
          'O pagamento via Pix possui liberação imediata em nosso sistema (geralmente em menos de 10 segundos).',
          'O QR Code ou chave Copia e Cola gerados no checkout têm validade de 30 minutos. Se o tempo expirar, será necessário realizar um novo pedido.'
        ]
      },
      {
        title: '3. Boleto Bancário',
        content: [
          'O pagamento via boleto bancário pode levar de 1 a 3 dias úteis para ser compensado e reconhecido pelo sistema.',
          'Se você tiver urgência na liberação do seu certificado (por exemplo, para apresentar em atividades complementares na faculdade), recomendamos o uso do Pix ou Cartão de Crédito.'
        ]
      },
      {
        title: '4. Moeda Digital',
        content: [
          'Aceitamos também pagamentos utilizando a moeda digital SOL.',
          'A conversão e os detalhes da transferência devem ser alinhados diretamente com nosso atendimento oficial antes de efetuar o pagamento.'
        ]
      },
      {
        title: '5. Segurança Financeira',
        content: [
          'A ESDHUBEM não armazena os dados do seu cartão de crédito. Todas as transações são tokenizadas e processadas em ambientes seguros (SSL/TLS) pelas operadoras financeiras.'
        ]
      }
    ]
  },
  {
    id: 'trocas',
    title: 'Trocas e Reembolsos',
    lastUpdated: '05 de Janeiro de 2026',
    iconName: 'RefreshCcw',
    color: 'from-amber-500 to-orange-600',
    introduction: 'A nossa política de reembolso foi elaborada de acordo com o Código de Defesa do Consumidor (CDC) para garantir a sua tranquilidade ao investir na sua carreira.',
    sections: [
      {
        title: '1. Prazo de Arrependimento (Garantia de 7 Dias)',
        content: [
          'Conforme o Art. 49 do CDC, o consumidor tem o direito de solicitar o cancelamento e reembolso integral do valor pago no prazo de até 7 (sete) dias corridos após a compra.',
          'Para acionar a garantia incondicional, basta enviar um e-mail para esdhubem@proton.me informando o desejo de cancelamento. Não é necessário justificar o motivo.',
          'Para a compra de livros, o prazo de arrependimento de 7 dias também se aplica, devendo o produto ser devolvido sem indícios de uso.'
        ]
      },
      {
        title: '2. Exceção para Certificados Emitidos',
        content: [
          'Se o aluno concluir o curso, solicitar a emissão do certificado, realizar o download do documento autenticado e, após isso, solicitar o reembolso, a taxa administrativa não será reembolsada.',
          'O certificado digital gerado, uma vez validado, consumou a prestação do serviço administrativo e gera custos de emissão/registro não recuperáveis.'
        ]
      },
      {
        title: '3. Processamento do Estorno',
        content: [
          'Para pagamentos em Cartão de Crédito: o estorno é processado em até 5 dias úteis, mas pode levar de 1 a 2 faturas para aparecer, dependendo do banco emissor.',
          'Para pagamentos via Pix: o valor é devolvido para a mesma conta bancária de origem em até 48 horas úteis.',
          'Para Boletos: solicitaremos uma chave Pix ou conta corrente atrelada ao mesmo CPF do comprador para realizar o depósito.'
        ]
      }
    ]
  },
  {
    id: 'envio',
    title: 'Política de Envio e Prazos',
    lastUpdated: '01 de Março de 2026',
    iconName: 'Truck',
    color: 'from-rose-500 to-red-600',
    introduction: 'A ESDHUBEM prioriza a emissão de certificados digitais por questões de sustentabilidade e agilidade (formato PDF validado). Caso o aluno opte pelo certificado físico (impresso), aplicam-se as seguintes regras de envio.',
    sections: [
      {
        title: '1. Emissão Digital (Padrão)',
        content: [
          'O certificado digital é disponibilizado para download em PDF de alta resolução imediatamente após a aprovação do curso e confirmação do pagamento da taxa.',
          'Não há custo de frete para a modalidade digital.'
        ]
      },
      {
        title: '2. Certificado Físico e Livros',
        content: [
          'Caso o aluno solicite uma via física impressa do certificado ou compre livros, será cobrada uma taxa e custos de envio (frete via Correios).',
          'O prazo estimado de envio é de 7 a 10 dias úteis, o qual ocorre conforme a demanda da gráfica parceira.',
          'A coordenação do curso entrará em contato logo após a compra para confirmação exata dos prazos de produção e entrega.'
        ]
      },
      {
        title: '3. Prazos de Entrega (Correios)',
        content: [
          'O tempo de entrega depende do CEP de destino e da modalidade escolhida (Carta Registrada, PAC ou Sedex).',
          'Enviaremos o código de rastreamento para o e-mail cadastrado assim que o documento for postado na agência dos Correios.'
        ]
      },
      {
        title: '4. Endereço Incorreto ou Destinatário Ausente',
        content: [
          'É de responsabilidade do aluno o preenchimento correto do endereço de entrega. Caso o documento retorne à ESDHUBEM por endereço incorreto, incompleto ou ausência do recebedor, um novo frete será cobrado para o reenvio.'
        ]
      }
    ]
  }
];
