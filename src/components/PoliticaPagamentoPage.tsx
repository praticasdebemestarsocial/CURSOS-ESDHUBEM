import React from 'react';
import {
  CreditCard,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Coins,
  ArrowLeft,
  FileText,
  DollarSign,
  Gift
} from 'lucide-react';

interface PoliticaPagamentoPageProps {
  onBackToHome: () => void;
}

export const PoliticaPagamentoPage: React.FC<PoliticaPagamentoPageProps> = ({
  onBackToHome
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
            <span className="text-slate-300">Informações Legais</span>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">Política de Pagamento & Reembolso</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Código de Defesa do Consumidor (Art. 49) & Transparência Financeira</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Política de Pagamentos, Cancelamento e Reembolsos
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Conheça todas as diretrizes financeiras da ESDHUBEM, regras de reembolso de 7 dias, condições para pagamentos em Criptoativos/Web3 e política de emissão de certificados freemium.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* Section 1: Formas de Pagamento Aceitas */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                1. Formas de Pagamento Aceitas
              </h2>
              <p className="text-xs text-slate-500">
                Meios de transação autorizados e prazos de liberação do ambiente virtual.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            A ESDHUBEM aceita pagamentos via <strong>Pix</strong> (com aprovação instantânea), <strong>Cartão de Crédito</strong> (com parcelamento em até 12 vezes) e <strong>Boletos Bancários</strong>. O acesso à Sala de Aula Virtual e à emissão do certificado é liberado automaticamente após a confirmação do gateway de pagamento parceiro.
          </p>
        </div>

        {/* Section 2: Direito de Arrependimento (Garantia de 7 Dias) */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                2. Direito de Arrependimento e Reembolso (Garantia de 7 Dias)
              </h2>
              <p className="text-xs text-slate-500">
                Conforme o Artigo 49 do Código de Defesa do Consumidor (CDC - Lei nº 8.078/90).
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            O aluno possui o prazo impreterível de <strong>7 (sete) dias corridos</strong>, a contar da data de confirmação da compra do curso pago ou formação, para solicitar o cancelamento da inscrição com reembolso de 100% do valor investido.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Compras via Pix</span>
              <p className="text-slate-600">
                O reembolso integral é efetuado diretamente para a mesma conta bancária de origem do Pix em até 3 dias úteis após a aprovação da solicitação de suporte.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Compras via Cartão de Crédito</span>
              <p className="text-slate-600">
                O estorno é solicitado à operadora em até 3 dias úteis. A efetivação do crédito na fatura depende exclusivamente da bandeira do cartão (geralmente em 1 a 2 faturas subsequentes).
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Regras Especiais para Pagamentos via Criptoativos / Web3 */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-900 flex items-center justify-center font-bold">
              <Coins className="w-5 h-5 text-cyan-700" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                3. Regras Especiais para Pagamentos via Criptoativos / Web3
              </h2>
              <p className="text-xs text-slate-500">
                Cláusulas de proteção cambial e restituição para transações em blockchain.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Caso a modalidade de pagamento via Criptoativos (Bitcoin, USDT, Ethereum ou similares) esteja disponível e seja escolhida pelo usuário no checkout, aplicam-se as seguintes regras de proteção cambial:
          </p>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">A. Fixação do Valor em Moeda Corrente Nacional (Reais - BRL)</span>
              <p className="text-slate-600 leading-relaxed">
                Para fins do direito de arrependimento (garantia de 7 dias), o valor considerado será estritamente o montante fixado em Reais (BRL) no momento exato do encerramento da compra, independentemente das oscilações, valorizações ou desvalorizações de mercado sofridas pelo token utilizado.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">B. Forma de Liquidação do Reembolso Cripto</span>
              <p className="text-slate-600 leading-relaxed">
                A critério exclusivo da instituição, a restituição de valores pagos originalmente em criptoativos será liquidada e devolvida via <strong>Pix em moeda corrente nacional (Reais)</strong>, utilizando o valor nominal fixado no dia do pedido original. As taxas de processamento de rede (*gas fees*) cobradas pelas redes blockchain não são reembolsáveis.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Política para Cursos Freemium */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
              <Gift className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                4. Política para Cursos Freemium e Serviço de Emissão de Certificados
              </h2>
              <p className="text-xs text-slate-500">
                Serviço digital instantâneo conforme a legislação de infoprodutos.
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Os nossos cursos na categoria <strong>Freemium</strong> possuem acesso 100% gratuito ao conteúdo das videoaulas e aos materiais didáticos. A taxa cobrada refere-se única e exclusivamente ao serviço de emissão, validação pública e disponibilização do Certificado Digital de Conclusão em PDF.
            </p>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-medium text-xs leading-relaxed">
              <strong>Inexistência de Reembolso após a Emissão:</strong> Como o aluno assiste a todo o conteúdo do curso gratuitamente antes de optar pela compra do documento, a emissão do certificado configura um <i>serviço digital prestado e entregue imediatamente na hora</i>. Não há devolução de valores após o certificado ter sido gerado e disponibilizado para download.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
