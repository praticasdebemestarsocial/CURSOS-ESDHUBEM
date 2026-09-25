import React, { useState } from 'react';
import {
  ArrowLeft,
  LayoutDashboard,
  Smartphone,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Zap,
  Building2,
  UserCheck,
  BarChart3,
  ShieldCheck,
  HelpCircle,
  FileSpreadsheet,
  MessageCircle,
  Clock,
  ChevronRight,
  Calculator,
  PieChart,
  Phone,
  Mail
} from 'lucide-react';
import henriqueVivianImg from '../assets/henrique-vivian.jpg';

interface AplicativosPageProps {
  onBackToHome: () => void;
}

export const AplicativosPage: React.FC<AplicativosPageProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'mei' | 'me'>('all');

  const apps = [
    {
      id: 'app-mei',
      type: 'mei',
      title: 'Aplicativo & Dashboard de Gestão MEI',
      subtitle: 'Controle simplificado de faturamento, vendas e tributos pensado exclusivamente para Microempreendedores Individuais.',
      badge: 'Para MEI',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      price: 'R$ 29,90/mês',
      priceDetail: 'ou R$ 297/ano no plano com desconto',
      popular: true,
      features: [
        'Alerta de limite anual de faturamento MEI (com teto atualizado)',
        'Controle de Receitas, Despesas e Lucro Líquido em tempo real',
        'Lembrete automático e guia rápida do DAS MEI',
        'Cadastro rápido de clientes, fornecedores e produtos',
        'Relatório mensal de faturamento para declaração anual (DASN-SIMEI)',
        'Acesso 100% online via Celular, Tablet e Computador'
      ],
      whatsappMsg: 'Olá! Gostaria de contratar/testar o Aplicativo e Dashboard para MEI.',
      accent: 'from-emerald-500 to-teal-700',
      icon: Smartphone
    },
    {
      id: 'app-me',
      type: 'me',
      title: 'Aplicativo & Dashboard Executivo para ME',
      subtitle: 'Sistema completo de Gestão Empresarial, DRE Gerencial, Fluxo de Caixa Futuro e Indicadores Estratégicos para Microempresas.',
      badge: 'Para Microempresa (ME)',
      badgeColor: 'bg-amber-500/10 text-[#FFC72C] border-amber-500/20',
      price: 'R$ 79,90/mês',
      priceDetail: 'ou R$ 790/ano no plano empresarial',
      popular: false,
      features: [
        'DRE Gerencial Automático (Demonstrativo do Resultado do Exercício)',
        'Fluxo de Caixa Previsto vs Realizado (Análise diária e mensal)',
        'Cálculo automático de margem de contribuição e ponto de equilíbrio',
        'Gestão avançada de estoque com alerta de reposição de itens',
        'Exportação profissional de relatórios em PDF e Excel para contabilidade',
        'Painel multi-usuário com permissões de acesso personalizadas'
      ],
      whatsappMsg: 'Olá! Gostaria de contratar/testar o Aplicativo e Dashboard para ME.',
      accent: 'from-[#FFC72C] to-amber-600',
      icon: BarChart3
    }
  ];

  const filteredApps = apps.filter((app) => {
    if (activeTab === 'all') return true;
    return app.type === activeTab;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* Top Banner / Hero */}
      <div className="bg-[#182333] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors text-sm font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Início</span>
          </button>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC72C] text-xs font-bold tracking-wide mb-4">
                <Sparkles className="w-4 h-4 fill-[#FFC72C]" />
                <span>Soluções Tecnológicas ESDHUBEM</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                Aplicativos & <span className="text-[#FFC72C]">Dashboards</span> de Gestão
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Potencialize seu negócio com nossas ferramentas inteligentes. Dashboards financeiros práticos, indicadores de crescimento e controle completo adaptado para <strong>MEI</strong> e <strong>Microempresas (ME)</strong>.
              </p>
            </div>

            {/* Quick Stat Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-3xl w-full lg:w-auto shrink-0 shadow-2xl flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 font-medium">Controle Total</p>
                  <p className="text-lg font-bold text-white">Relatórios em Tempo Real</p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 hidden sm:block lg:hidden" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FFC72C]/20 flex items-center justify-center text-[#FFC72C]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-300 font-medium">Segurança e Simplicidade</p>
                  <p className="text-lg font-bold text-white">Pronto para Usar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Navigation Filter Tabs */}
        <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-lg flex flex-wrap items-center justify-center gap-2 mb-10 max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#243042] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Todos as Soluções (2)
          </button>
          <button
            onClick={() => setActiveTab('mei')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'mei'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Para MEI</span>
          </button>
          <button
            onClick={() => setActiveTab('me')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'me'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Para Microempresa (ME)</span>
          </button>
        </div>

        {/* Apps Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredApps.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between relative group"
              >
                {app.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-[#FFC72C] text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Mais Recomendado
                  </div>
                )}

                <div>
                  {/* Card Header Gradient */}
                  <div className={`p-8 bg-gradient-to-r ${app.accent} text-white relative overflow-hidden`}>
                    <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10 pointer-events-none">
                      <Icon className="w-48 h-48" />
                    </div>

                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-white/20 backdrop-blur-md mb-3 border border-white/20">
                        {app.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black mb-2 leading-tight">
                        {app.title}
                      </h2>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {app.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Body - Pricing & Features */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="border-b border-slate-100 pb-6 flex items-baseline justify-between flex-wrap gap-2">
                      <div>
                        <span className="text-3xl font-black text-slate-900">{app.price}</span>
                        <p className="text-xs text-slate-500 font-medium">{app.priceDetail}</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                        Suporte Completo Incluso
                      </span>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Recursos Principais do Dashboard
                      </p>
                      <ul className="space-y-3">
                        {app.features.map((feat, index) => (
                          <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Liberação Imediata</span>
                  </div>

                  <a
                    href={`https://wa.me/5511960319637?text=${encodeURIComponent(app.whatsappMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Contratar via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why choose ESDHUBEM Dashboards banner */}
        <div className="mt-16 bg-gradient-to-r from-[#182333] via-[#243042] to-[#1e293b] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-700/60 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC72C] text-xs font-bold">
              <Zap className="w-3.5 h-3.5 fill-[#FFC72C]" />
              <span>Diferencial ESDHUBEM</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Por que usar nossos Aplicativos e Dashboards?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Diferente de sistemas genéricos e complexos, nossas ferramentas foram criadas focando na **realidade prática do empreendedor brasileiro**. Sem complicações, com relatórios diretos ao ponto para você tomar decisões certas e lucrar mais.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-[#FFC72C]" />
              <span className="text-xs font-semibold text-slate-200">Cálculos automáticos sem erro</span>
            </div>
            <div className="flex items-center gap-3">
              <PieChart className="w-6 h-6 text-emerald-400" />
              <span className="text-xs font-semibold text-slate-200">Gráficos intuitivos e visuais</span>
            </div>
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="w-6 h-6 text-cyan-400" />
              <span className="text-xs font-semibold text-slate-200">Exportação fácil de dados</span>
            </div>
          </div>
        </div>

        {/* Responsible Technical Architect Profile Card */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center gap-8">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#243042] overflow-hidden shrink-0 border-4 border-slate-100 shadow-md flex items-center justify-center text-white">
            <img src={henriqueVivianImg} alt="Henrique Vivian" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
              <span>Engenharia de Software & Arquitetura Tecnológica</span>
            </div>
            <h3 className="text-2xl font-bold text-[#243042]">
              Henrique Vivian
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Graduado em Análise de Sistemas e Pós-Graduado em Arquitetura e Desenvolvimento de Sistemas com ênfase em Padrões de Projetos. Responsável pelo desenvolvimento backend, análise de dados, criação de arquitetura de software, dashboards e soluções tecnológicas da ESDHUBEM.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="font-semibold text-slate-700">
                Especialidades:
              </span>
              <span className="text-[#243042] font-bold">
                Backend, Análise de Dados & Padrões de Projetos
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
      </div>
    </div>
  );
};
