import React, { useState } from 'react';
import {
  Scale,
  ShieldCheck,
  CreditCard,
  RefreshCcw,
  Truck,
  ArrowLeft,
  ChevronRight,
  Gavel
} from 'lucide-react';

interface PoliticasPageProps {
  onBackToHome: () => void;
  onNavigateToPolicy: (policyId: string) => void;
}

const POLICIES_DATA = [
  {
    id: 'privacidade',
    title: 'Privacidade (LGPD)',
    summary: 'Nossa política de proteção de dados, privacidade dos usuários e adequação à Lei Geral de Proteção de Dados (LGPD).',
    icon: <ShieldCheck className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'termos',
    title: 'Termos de Uso',
    summary: 'Condições gerais de utilização da plataforma ESDHUBEM, responsabilidades do aluno e da escola.',
    icon: <Gavel className="w-6 h-6" />,
    color: 'from-slate-600 to-slate-800'
  },
  {
    id: 'pagamentos',
    title: 'Formas de Pagamento',
    summary: 'Opções de parcelamento, métodos aceitos (Cartão, Pix, Boleto) e segurança das transações financeiras.',
    icon: <CreditCard className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'trocas',
    title: 'Trocas e Reembolsos',
    summary: 'Nossa política de garantia incondicional, prazos de arrependimento e como solicitar estornos.',
    icon: <RefreshCcw className="w-6 h-6" />,
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'envio',
    title: 'Política de Envio',
    summary: 'Regras e prazos para o envio de certificados físicos impressos para o seu endereço.',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-rose-500 to-red-600'
  }
];

export const PoliticasPage: React.FC<PoliticasPageProps> = ({
  onBackToHome,
  onNavigateToPolicy
}) => {
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
              Políticas e Termos
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Scale className="w-4 h-4 text-[#FFC72C]" />
            <span>Transparência Institucional</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-[#243042] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Normas e Diretrizes</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Nossas <span className="text-[#FFC72C]">Políticas</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Acreditamos na total transparência. Aqui você encontra todas as regras de convivência, diretrizes de segurança, privacidade de dados e termos comerciais que regem nossa plataforma.
          </p>
        </div>

        {/* Decorative background logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Scale className="w-96 h-96 text-white" />
        </div>
      </header>

      {/* Main Content Area: Cards Grid */}
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POLICIES_DATA.map((policy) => (
            <div
              key={policy.id}
              onClick={() => onNavigateToPolicy(policy.id)}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${policy.color} shadow-md group-hover:scale-105 transition-transform`}>
                  {policy.icon}
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-[#182333] text-xl leading-tight group-hover:text-[#243042] transition-colors">
                  {policy.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  {policy.summary}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-500 group-hover:text-[#243042]">
                  Ler na íntegra
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#243042] group-hover:text-white transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
