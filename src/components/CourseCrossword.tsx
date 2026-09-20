import React, { useState, useEffect } from 'react';
import { Trophy, CheckCircle, Brain, Target } from 'lucide-react';

interface CrosswordWord {
  id: string;
  question: string;
  answer: string;
}

interface CourseCrosswordProps {
  lessonId: string;
  words: CrosswordWord[];
  onComplete?: () => void;
}

export const CourseCrossword: React.FC<CourseCrosswordProps> = ({ lessonId, words, onComplete }) => {
  const storageKey = `assertiva_crossword_${lessonId}`;
  
  // State for typed inputs
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [solved, setSolved] = useState<Record<string, boolean>>({});
  const [isFullySolved, setIsFullySolved] = useState(false);

  // Load from cache
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSolved(parsed);
        // If all words in the current props are solved
        if (words.every(w => parsed[w.id])) {
          setIsFullySolved(true);
        }
      }
    } catch (e) {}
  }, [lessonId, words, storageKey]);

  // Handle typing
  const handleInputChange = (wordId: string, idx: number, value: string) => {
    // Only accept letters
    if (value && !/^[a-zA-Z\u00C0-\u00FF]$/.test(value)) return;
    
    const key = `${wordId}_${idx}`;
    const upperValue = value.toUpperCase();
    
    setInputs(prev => {
      const newInputs = { ...prev, [key]: upperValue };
      checkWord(wordId, newInputs);
      return newInputs;
    });

    // Auto-focus next input
    if (value) {
      const nextInput = document.getElementById(`cw_${wordId}_${idx + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, wordId: string, idx: number) => {
    if (e.key === 'Backspace' && !inputs[`${wordId}_${idx}`]) {
      const prevInput = document.getElementById(`cw_${wordId}_${idx - 1}`);
      if (prevInput) {
        prevInput.focus();
        // Clear previous input
        setInputs(prev => ({ ...prev, [`${wordId}_${idx - 1}`]: '' }));
      }
    }
  };

  const checkWord = (wordId: string, currentInputs: Record<string, string>) => {
    const word = words.find(w => w.id === wordId);
    if (!word) return;

    const answer = word.answer.toUpperCase();
    let isCorrect = true;
    for (let i = 0; i < answer.length; i++) {
      if (currentInputs[`${wordId}_${i}`] !== answer[i]) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      setSolved(prev => {
        const newSolved = { ...prev, [wordId]: true };
        
        // Save progress
        localStorage.setItem(storageKey, JSON.stringify(newSolved));
        
        // Check if all solved
        if (words.every(w => newSolved[w.id])) {
          setIsFullySolved(true);
          if (onComplete) onComplete();
        }
        
        return newSolved;
      });
    }
  };

  if (!words || words.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-100 rounded-2xl p-6 sm:p-8 mt-6 mb-8 relative overflow-hidden shadow-inner">
      {/* Background Decor */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-600 rounded-lg text-white shadow-md">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-indigo-950 uppercase tracking-tight">Desafio da Aula</h2>
            <p className="text-sm text-indigo-800/80 font-medium">Complete as palavras-chave para fixar o conteúdo</p>
          </div>
        </div>

        {isFullySolved ? (
          <div className="flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-xl border border-indigo-100 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-amber-300 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 mb-4 animate-bounce">
              <Trophy className="w-10 h-10 text-yellow-900" />
            </div>
            <h3 className="text-2xl font-black text-indigo-950 mb-2">Parabéns!</h3>
            <p className="text-indigo-800 font-medium max-w-sm">Você completou o desafio desta aula e fixou os conceitos fundamentais.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {words.map((word, wIdx) => {
              const isWordSolved = solved[word.id];
              const answerChars = word.answer.toUpperCase().split('');

              return (
                <div key={word.id} className={`p-5 rounded-xl border transition-all duration-500 ${isWordSolved ? 'bg-emerald-50 border-emerald-200' : 'bg-white/80 border-indigo-100 shadow-sm'}`}>
                  <div className="flex items-start gap-3 mb-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold shrink-0 mt-0.5">
                      {wIdx + 1}
                    </span>
                    <p className={`text-sm sm:text-base font-semibold ${isWordSolved ? 'text-emerald-800' : 'text-indigo-950'}`}>
                      {word.question}
                    </p>
                    {isWordSolved && <CheckCircle className="w-5 h-5 text-emerald-500 ml-auto shrink-0 animate-in spin-in" />}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pl-9">
                    {answerChars.map((char, cIdx) => (
                      <input
                        key={cIdx}
                        id={`cw_${word.id}_${cIdx}`}
                        type="text"
                        maxLength={1}
                        disabled={isWordSolved}
                        value={isWordSolved ? char : (inputs[`${word.id}_${cIdx}`] || '')}
                        onChange={(e) => handleInputChange(word.id, cIdx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, word.id, cIdx)}
                        className={`w-8 h-10 sm:w-10 sm:h-12 text-center text-lg font-black uppercase rounded-lg border-b-4 focus:outline-none transition-all ${
                          isWordSolved 
                            ? 'bg-emerald-100 border-emerald-300 text-emerald-700' 
                            : 'bg-indigo-50/50 border-indigo-200 text-indigo-900 focus:bg-white focus:border-indigo-500 focus:shadow-[0_4px_0_0_rgba(99,102,241,1)]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
