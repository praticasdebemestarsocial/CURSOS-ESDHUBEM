import React, { useState, useEffect } from 'react';
import { X, Target, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Lesson, ExerciseOption } from '../types';

interface ExerciseModalProps {
  lesson: Lesson;
  isOpen: boolean;
  onClose: () => void;
  onCompleteLesson: (lessonId: string) => void;
  isLessonCompleted: boolean;
}

export const ExerciseModal: React.FC<ExerciseModalProps> = ({
  lesson,
  isOpen,
  onClose,
  onCompleteLesson,
  isLessonCompleted
}) => {
  const [selectedOption, setSelectedOption] = useState<ExerciseOption | null>(null);

  // Reset selection when changing lesson
  useEffect(() => {
    setSelectedOption(null);
  }, [lesson.id, isOpen]);

  if (!isOpen) return null;

  const exercise = lesson.exercise;

  const handleSelectOption = (opt: ExerciseOption) => {
    setSelectedOption(opt);
    if (opt.isAssertive && !isLessonCompleted) {
      onCompleteLesson(lesson.id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-slate-100 border border-yellow-300/80 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-yellow-950/50 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-yellow-950 bg-[#07101d] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-yellow-100 border border-yellow-700/60 flex items-center justify-center text-yellow-600">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-yellow-600 font-bold">
                Exercício Prático • Aula {lesson.number}
              </span>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                {lesson.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition"
            title="Fechar Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 flex-1">
          
          {/* Corporate Scenario Box */}
          <div className="p-4 rounded-xl bg-[#071220] border border-yellow-300">
            <div className="flex items-center gap-2 text-yellow-600 text-xs font-bold uppercase tracking-wider mb-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Estudo de Caso Situacional
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              "{exercise.scenario}"
            </p>
          </div>

          {/* Question Prompt */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3">
              {exercise.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3">
              {exercise.options.map((option, idx) => {
                const isSelected = selectedOption === option;
                let cardStyle = "bg-[#0d1f35] border-yellow-200 hover:bg-[#122b4a] text-slate-800";

                if (isSelected) {
                  if (option.isAssertive) {
                    cardStyle = "bg-emerald-950/40 border-emerald-600 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                  } else {
                    cardStyle = "bg-rose-950/40 border-rose-600 text-rose-100 shadow-[0_0_15px_rgba(244,63,94,0.2)]";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option)}
                    id={`exercise-opt-${idx}`}
                    className={`w-full p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm transition-all duration-200 flex items-start gap-3 ${cardStyle}`}
                  >
                    <span className={`w-5 h-5 rounded-full border text-[11px] font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isSelected
                        ? option.isAssertive
                          ? 'border-emerald-400 bg-emerald-900 text-emerald-300'
                          : 'border-rose-400 bg-rose-900 text-rose-300'
                        : 'border-slate-600 bg-slate-100 text-slate-600'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>

                    <span className="flex-1 leading-relaxed">
                      {option.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Feedback Panel */}
          {selectedOption && (
            <div
              className={`p-4 rounded-xl border animate-in slide-in-from-bottom-2 duration-300 ${
                selectedOption.isAssertive
                  ? 'bg-emerald-950/50 border-emerald-700/80 text-emerald-100'
                  : 'bg-yellow-100/40 border-yellow-300 text-amber-100'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-1.5">
                {selectedOption.isAssertive ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Resposta Assertiva e Recomendada</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-700">
                      Classificação: {selectedOption.classification}
                    </span>
                  </>
                )}
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
                {selectedOption.feedback}
              </p>

              {selectedOption.isAssertive && (
                <div className="mt-2.5 pt-2.5 border-t border-emerald-800/50 flex items-center justify-between text-xs text-emerald-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Aula marcada automaticamente como concluída!
                  </span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-yellow-950 bg-[#07101d] flex items-center justify-between">
          <span className="text-xs text-slate-600">
            {selectedOption ? (
              selectedOption.isAssertive ? "Parabéns! Padrão executivo atingido." : "Tente refinar sua resposta."
            ) : (
              "Selecione a melhor alternativa corporativa."
            )}
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold text-slate-900 bg-slate-200 hover:bg-slate-300 border border-slate-400 transition"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
