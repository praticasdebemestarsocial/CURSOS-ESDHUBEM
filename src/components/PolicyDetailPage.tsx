import React, { useMemo } from 'react';
import { POLICIES_DETAIL_DATA } from '../data/policiesData';
import {
  ArrowLeft,
  Scale,
  ShieldCheck,
  CreditCard,
  RefreshCcw,
  Truck,
  Gavel,
  CalendarDays
} from 'lucide-react';

interface PolicyDetailPageProps {
  policyId: string;
  onBackToPolicies: () => void;
  onBackToHome: () => void;
}

export const PolicyDetailPage: React.FC<PolicyDetailPageProps> = ({
  policyId,
  onBackToPolicies,
  onBackToHome
}) => {
  const policy = useMemo(() => POLICIES_DETAIL_DATA.find(p => p.id === policyId), [policyId]);

  if (!policy) return null;

  // Render the correct icon component based on the string name
  const renderIcon = () => {
    const props = { className: "w-8 h-8" };
    switch (policy.iconName) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Gavel': return <Gavel {...props} />;
      case 'CreditCard': return <CreditCard {...props} />;
      case 'RefreshCcw': return <RefreshCcw {...props} />;
      case 'Truck': return <Truck {...props} />;
      default: return <Scale {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#182333] border-b border-slate-700/60 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
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
              onClick={onBackToPolicies}
              className="hover:text-[#FFC72C] transition-colors cursor-pointer"
            >
              Políticas
            </button>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold truncate max-w-[150px] sm:max-w-none">
              {policy.title}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header for Policy */}
      <header className={`bg-gradient-to-br ${policy.color} text-white py-12 sm:py-16 px-4 sm:px-6 shadow-inner`}>
        <div className="max-w-4xl mx-auto flex flex-col items-start gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
            {renderIcon()}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mt-2">
            {policy.title}
          </h1>
          <div className="flex items-center gap-2 text-white/80 text-sm font-medium mt-2 bg-black/10 px-3 py-1.5 rounded-full">
            <CalendarDays className="w-4 h-4" />
            <span>Última atualização: {policy.lastUpdated}</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-32">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 sm:p-10 border border-slate-100">
          
          {/* Introduction */}
          <div className="prose prose-slate max-w-none mb-10">
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
              {policy.introduction}
            </p>
          </div>

          <hr className="border-slate-100 mb-10" />

          {/* Sections */}
          <div className="space-y-12">
            {policy.sections.map((section, idx) => (
              <section key={idx} className="scroll-mt-24">
                <h2 className="text-2xl font-extrabold text-[#182333] mb-5 tracking-tight border-b border-slate-100 pb-3">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-base text-slate-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
        
        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBackToPolicies}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-full hover:border-[#243042] hover:text-[#243042] transition-colors shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Políticas
          </button>
        </div>
      </main>
    </div>
  );
};
