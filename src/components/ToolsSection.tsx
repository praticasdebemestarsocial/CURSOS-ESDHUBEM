import React, { useState } from 'react';
import { Copy, Check, FileText, Users, CheckSquare, Sparkles, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { COURSE_DATA } from '../data/courseData';
import { TemplateItem, RoleplayItem, ChecklistItem } from '../types';

export const ToolsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'templates' | 'roleplay' | 'checklist'>('templates');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // Checklist state stored in localStorage
  const [checklistChecks, setChecklistChecks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('assertiva_checklist_checks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleChecklistItem = (index: number) => {
    setChecklistChecks(prev => {
      const next = prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index];
      localStorage.setItem('assertiva_checklist_checks', JSON.stringify(next));
      return next;
    });
  };

  const handleCopyTemplate = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const totalChecklist = COURSE_DATA.checklist.length;
  const checkedCount = checklistChecks.length;
  const checklistPercent = Math.round((checkedCount / totalChecklist) * 100);

  return (
    <section className="bg-white border border-yellow-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200 mt-8">
      
      {/* Section Header with Tabs */}
      <div className="p-5 sm:p-6 border-b border-yellow-200 bg-[#081220] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-yellow-600 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Caixa de Ferramentas do Aluno
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Ferramental Executivo e Recursos de Apoio
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Modelos prontos, matrizes de roleplay e checklist de 5 minutos para negociações reais.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#060c17] rounded-xl border border-yellow-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab('templates')}
            id="tab-btn-templates"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'templates'
                ? 'bg-gradient-to-r from-yellow-600 to-blue-600 text-slate-900 shadow-md shadow-yellow-500/20'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Templates Copiáveis
          </button>

          <button
            onClick={() => setActiveTab('roleplay')}
            id="tab-btn-roleplay"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'roleplay'
                ? 'bg-gradient-to-r from-yellow-600 to-blue-600 text-slate-900 shadow-md shadow-yellow-500/20'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Quadro de Roleplay
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            id="tab-btn-checklist"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              activeTab === 'checklist'
                ? 'bg-gradient-to-r from-yellow-600 to-blue-600 text-slate-900 shadow-md shadow-yellow-500/20'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            Checklist Pré-Conversa ({checkedCount}/{totalChecklist})
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-5 sm:p-6">
        
        {/* TAB 1: TEMPLATES COPIÁVEIS */}
        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {COURSE_DATA.templates.map((tmpl: TemplateItem, idx: number) => {
                const isCopied = copiedIndex === idx;

                return (
                  <div
                    key={tmpl.id || idx}
                    className="bg-slate-50 border border-yellow-300 rounded-xl p-4 flex flex-col justify-between hover:border-yellow-700/60 transition shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-yellow-600 bg-yellow-100/70 border border-yellow-300/60 px-2 py-0.5 rounded">
                          {tmpl.category}
                        </span>
                        <button
                          onClick={() => handleCopyTemplate(tmpl.content, idx)}
                          id={`btn-copy-template-${idx}`}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border transition ${
                            isCopied
                              ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                              : 'bg-slate-200/80 text-yellow-700 border-yellow-300/60 hover:bg-slate-300'
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              Copiado!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              Copiar
                            </>
                          )}
                        </button>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        {tmpl.title}
                      </h3>

                      <div className="bg-[#030812] p-3 rounded-lg border border-yellow-950 font-mono text-[11px] text-slate-700 whitespace-pre-wrap select-text leading-relaxed max-h-56 overflow-y-auto custom-scrollbar">
                        {tmpl.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: QUADRO DE ROLEPLAY */}
        {activeTab === 'roleplay' && (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600">
              Analise a diferença radical de impacto entre a postura impulsiva/reativa e a resposta executiva assertiva:
            </p>

            <div className="space-y-4">
              {COURSE_DATA.roleplay.map((item: RoleplayItem, idx: number) => (
                <div
                  key={item.id || idx}
                  className="bg-slate-50 border border-yellow-300 rounded-xl p-4 sm:p-5"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-yellow-600 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    Situação {idx + 1}: {item.context}
                  </div>

                  <div className="grid md:grid-cols-2 gap-3.5">
                    {/* Reativa */}
                    <div className="bg-rose-950/20 border border-rose-900/50 rounded-lg p-3.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        Reação Reativa / Vítima (Risco)
                      </div>
                      <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed italic">
                        "{item.reactiveResponse}"
                      </p>
                    </div>

                    {/* Assertiva */}
                    <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-lg p-3.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Resposta Estratégica / Assertiva
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed font-medium">
                        "{item.assertiveResponse}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CHECKLIST PRÉ-CONVERSA */}
        {activeTab === 'checklist' && (
          <div className="space-y-5">
            
            {/* Score Banner */}
            <div className="p-4 rounded-xl bg-[#071222] border border-yellow-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-yellow-600" />
                  Prontidão da Conversa Executiva
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Revise estes 6 pontos críticos 5 minutos antes de entrar na reunião.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-slate-800">
                    {checkedCount} de {totalChecklist} verificados
                  </div>
                  <div className="text-[11px] text-yellow-600">
                    {checkedCount === totalChecklist ? '100% Pronto!' : 'Em preparação'}
                  </div>
                </div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-extrabold text-sm border shadow-lg ${
                  checkedCount === totalChecklist
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-300 shadow-emerald-500/20'
                    : 'bg-yellow-100 border-yellow-700 text-yellow-700'
                }`}>
                  {checklistPercent}%
                </div>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="divide-y divide-yellow-950/60 bg-slate-50 rounded-xl border border-yellow-950 overflow-hidden">
              {COURSE_DATA.checklist.map((item: ChecklistItem, idx: number) => {
                const isChecked = checklistChecks.includes(idx);

                return (
                  <label
                    key={item.id || idx}
                    id={`checklist-item-${idx}`}
                    className="p-3.5 sm:p-4 flex items-start gap-3.5 cursor-pointer hover:bg-slate-100/40 transition select-none"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleChecklistItem(idx)}
                      className="mt-1 w-4 h-4 rounded border-yellow-300 text-yellow-600 focus:ring-yellow-500 focus:ring-offset-0 bg-slate-100 accent-yellow-500 cursor-pointer"
                    />

                    <div>
                      <span className={`text-xs sm:text-sm leading-relaxed block transition ${
                        isChecked ? 'text-slate-600 line-through' : 'text-slate-800 font-medium'
                      }`}>
                        {item.question}
                      </span>
                      {item.tip && (
                        <span className="text-[11px] text-yellow-600/80 mt-0.5 block">
                          Dica: {item.tip}
                        </span>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  setChecklistChecks([]);
                  localStorage.removeItem('assertiva_checklist_checks');
                }}
                className="text-xs text-slate-600 hover:text-yellow-600 underline underline-offset-2 transition"
              >
                Resetar checklist para nova reunião
              </button>
            </div>

          </div>
        )}

      </div>

    </section>
  );
};
