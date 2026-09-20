import React, { useCallback, useRef, useState, useEffect } from 'react';
import Crossword, { CrosswordImperative } from '@jaredreisinger/react-crossword';
import { Trophy, Brain } from 'lucide-react';
import styled from 'styled-components';

interface CourseCrosswordProps {
  moduleId: number;
  data: any;
  onComplete?: () => void;
}

const CrosswordWrapper = styled.div`
  /* Customize react-crossword styles to fit the Tailwind theme */
  .crossword {
    font-family: inherit;
  }
  rect {
    fill: #f8fafc;
    stroke: #cbd5e1;
    stroke-width: 1px;
  }
  rect.highlight-background {
    fill: #fef08a !important; /* Tailwind yellow-200 */
  }
  text {
    fill: #0f172a; /* Tailwind slate-900 */
  }
  .clue {
    color: #334155;
    font-size: 0.875rem;
  }
  .clue.correct {
    color: #10b981; /* Tailwind emerald-500 */
    text-decoration: line-through;
  }
`;

export const CourseCrossword: React.FC<CourseCrosswordProps> = ({ moduleId, data, onComplete }) => {
  const crosswordRef = useRef<CrosswordImperative>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Load progress on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`assertiva_crossword_module_${moduleId}`);
      if (saved === 'COMPLETED') {
        setIsCompleted(true);
      }
    } catch (e) {}
  }, [moduleId]);

  const handleCrosswordCorrect = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setIsCompleted(true);
      try {
        localStorage.setItem(`assertiva_crossword_module_${moduleId}`, 'COMPLETED');
      } catch (e) {}
      if (onComplete) onComplete();
    }
  }, [moduleId, onComplete]);

  if (!data) return null;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-100 rounded-2xl p-6 sm:p-8 mt-6 mb-8 relative overflow-hidden shadow-inner">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-600 rounded-lg text-white shadow-md">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-indigo-950 uppercase tracking-tight">
              Palavras-Cruzadas do Módulo
            </h2>
            <p className="text-sm text-indigo-800/80 font-medium">
              Preencha com o que você aprendeu nas aulas. Dica: clique nos números para começar.
            </p>
          </div>
        </div>

        {isCompleted ? (
          <div className="flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-xl border border-indigo-100 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-amber-300 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 mb-4 animate-bounce">
              <Trophy className="w-10 h-10 text-yellow-900" />
            </div>
            <h3 className="text-2xl font-black text-indigo-950 mb-2">Parabéns!</h3>
            <p className="text-indigo-800 font-medium max-w-sm">
              Você decifrou todas as palavras-chave do Módulo {moduleId} e garantiu seus pontos de progresso!
            </p>
          </div>
        ) : (
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <CrosswordWrapper>
              <Crossword
                ref={crosswordRef}
                data={data}
                onCrosswordCorrect={handleCrosswordCorrect}
                theme={{
                  gridBackground: 'transparent',
                  cellBackground: '#ffffff',
                  cellBorder: '#cbd5e1',
                  textColor: '#0f172a',
                  numberColor: '#64748b',
                  focusBackground: '#fef08a',
                  highlightBackground: '#fef9c3',
                }}
              />
            </CrosswordWrapper>
          </div>
        )}
      </div>
    </div>
  );
};
