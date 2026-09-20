import React, { useState } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronRight, PlayCircle, BookOpen, Layers } from 'lucide-react';
import { CourseModule, Lesson } from '../types';

interface LessonSidebarProps {
  modules: CourseModule[];
  currentLessonId: string;
  completedLessons: string[];
  onSelectLesson: (lessonId: string) => void;
  onToggleComplete: (lessonId: string) => void;
  onOpenCertificateModal: () => void;
}

export const LessonSidebar: React.FC<LessonSidebarProps> = ({
  modules,
  currentLessonId,
  completedLessons,
  onSelectLesson,
  onToggleComplete,
  onOpenCertificateModal
}) => {
  const initialExpanded = modules
    .filter(m => m.lessons.some(l => l.id === currentLessonId))
    .map(m => m.id);
  const [expandedModules, setExpandedModules] = useState<number[]>(initialExpanded);

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev =>
      prev.includes(moduleId) ? prev.filter(id => id !== moduleId) : [...prev, moduleId]
    );
  };

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const is100Percent = completedLessons.length === totalLessons;

  return (
    <aside className="bg-white border border-yellow-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200 flex flex-col h-full max-h-[850px]">
      
      {/* Header */}
      <div className="p-4 bg-white border-b border-yellow-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-yellow-600" />
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Grade Curricular
          </h2>
        </div>
        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-yellow-100 border border-yellow-300/60 text-yellow-700">
          {completedLessons.length}/{totalLessons} Aulas
        </span>
      </div>

      {/* Certificate Preview */}
      <div className="p-4 border-b border-yellow-200 bg-slate-50 flex flex-col items-center gap-3">
        <img 
          src={`${import.meta.env.BASE_URL}certificado-modelo.png`} 
          alt="Modelo do Certificado" 
          className="w-full max-w-[280px] h-auto object-contain rounded shadow-md border border-slate-200"
        />
        
        {is100Percent ? (
          <button
            onClick={onOpenCertificateModal}
            className="w-full max-w-[280px] flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white bg-green-600 hover:bg-green-700 border border-green-400 shadow-[0_0_15px_rgba(22,163,74,0.6)] animate-bounce transition-all"
          >
            🎓 Solicitar Certificado
          </button>
        ) : (
          <button
            disabled
            className="w-full max-w-[280px] flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white bg-red-400 border border-red-300 opacity-60 cursor-not-allowed transition-all"
          >
            🔒 Conclua as aulas para liberar
          </button>
        )}
      </div>

      {/* Accordion List */}
      <div className="overflow-y-auto p-3 space-y-3 custom-scrollbar flex-1">
        {modules.map((mod: CourseModule) => {
          const isExpanded = expandedModules.includes(mod.id);
          const completedInMod = mod.lessons.filter((l: Lesson) => completedLessons.includes(l.id)).length;
          const isAllDone = completedInMod === mod.lessons.length;

          return (
            <div
              key={mod.id}
              className="bg-slate-50 border border-yellow-200 rounded-xl overflow-hidden"
            >
              {/* Module Header Button */}
              <button
                onClick={() => toggleModule(mod.id)}
                id={`module-header-${mod.id}`}
                className="w-full p-3 bg-slate-100 hover:bg-slate-200 text-left flex items-center justify-between gap-2 transition border-b border-yellow-300"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
                  )}
                  <div className="truncate">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-yellow-600 block">
                      Módulo {mod.id}
                    </span>
                    <h3 className="text-xs font-bold text-slate-800 truncate">
                      {mod.title.replace(/^Módulo \d+:\s*/, '')}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className={`text-[11px] font-mono font-medium px-1.5 py-0.5 rounded ${
                    isAllDone ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'text-slate-600'
                  }`}>
                    {completedInMod}/{mod.lessons.length}
                  </span>
                </div>
              </button>

              {/* Module Lessons List */}
              {isExpanded && (
                <div className="divide-y divide-yellow-200">
                  {mod.lessons.map((lesson: Lesson) => {
                    const isActive = lesson.id === currentLessonId;
                    const isDone = completedLessons.includes(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        id={`lesson-item-${lesson.id}`}
                        className={`group relative p-2.5 sm:p-3 transition-all flex items-start gap-2.5 ${
                          isActive
                            ? 'bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-2 border-yellow-500'
                            : 'hover:bg-slate-100/50'
                        }`}
                      >
                        {/* Checkbox Complete Toggle Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleComplete(lesson.id);
                          }}
                          className="mt-0.5 flex-shrink-0 text-slate-500 hover:text-yellow-600 transition"
                          title={isDone ? "Marcar como não concluída" : "Marcar como concluída"}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600 group-hover:text-slate-600" />
                          )}
                        </button>

                        {/* Lesson Details & Select Button */}
                        <button
                          onClick={() => onSelectLesson(lesson.id)}
                          className="flex-1 text-left min-w-0"
                        >
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="text-[10px] font-mono font-semibold text-slate-600">
                              Aula {lesson.number < 10 ? `0${lesson.number}` : lesson.number}
                            </span>
                            <span className="text-[10px] text-slate-600 font-mono">
                              {lesson.duration}
                            </span>
                          </div>

                          <h4 className={`text-xs font-semibold leading-snug line-clamp-2 ${
                            isActive ? 'text-yellow-700 font-bold' : isDone ? 'text-slate-700' : 'text-slate-800'
                          }`}>
                            {lesson.title.replace(/^Aula \d+:\s*/, '')}
                          </h4>

                          <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
                            {lesson.subtitle}
                          </p>
                        </button>

                        {/* Active Indicator Icon */}
                        {isActive && (
                          <div className="flex-shrink-0 self-center">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </aside>
  );
};
