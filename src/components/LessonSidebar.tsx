import React, { useState } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronRight, PlayCircle, BookOpen, Layers } from 'lucide-react';
import { CourseModule, Lesson } from '../types';

interface LessonSidebarProps {
  modules: CourseModule[];
  currentLessonId: string;
  completedLessons: string[];
  onSelectLesson: (lessonId: string) => void;
  onToggleComplete: (lessonId: string) => void;
}

export const LessonSidebar: React.FC<LessonSidebarProps> = ({
  modules,
  currentLessonId,
  completedLessons,
  onSelectLesson,
  onToggleComplete
}) => {
  // By default expand all modules so the user can easily jump anywhere
  const [expandedModules, setExpandedModules] = useState<number[]>([1, 2, 3, 4]);

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev =>
      prev.includes(moduleId) ? prev.filter(id => id !== moduleId) : [...prev, moduleId]
    );
  };

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);

  return (
    <aside className="bg-[#0b1626] border border-sky-950/80 rounded-2xl overflow-hidden shadow-xl shadow-black/40 flex flex-col h-full max-h-[850px]">
      
      {/* Header */}
      <div className="p-4 bg-[#081220] border-b border-sky-950/70 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">
            Grade Curricular
          </h2>
        </div>
        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-sky-950/80 border border-sky-800/60 text-cyan-300">
          {completedLessons.length}/{totalLessons} Aulas
        </span>
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
              className="bg-[#07111e] border border-sky-950/80 rounded-xl overflow-hidden"
            >
              {/* Module Header Button */}
              <button
                onClick={() => toggleModule(mod.id)}
                id={`module-header-${mod.id}`}
                className="w-full p-3 bg-[#0a182b]/60 hover:bg-[#0d2038] text-left flex items-center justify-between gap-2 transition border-b border-sky-950/50"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                  <div className="truncate">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
                      Módulo {mod.id}
                    </span>
                    <h3 className="text-xs font-bold text-slate-200 truncate">
                      {mod.title.replace(/^Módulo \d+:\s*/, '')}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className={`text-[11px] font-mono font-medium px-1.5 py-0.5 rounded ${
                    isAllDone ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60' : 'text-slate-400'
                  }`}>
                    {completedInMod}/{mod.lessons.length}
                  </span>
                </div>
              </button>

              {/* Module Lessons List */}
              {isExpanded && (
                <div className="divide-y divide-sky-950/40">
                  {mod.lessons.map((lesson: Lesson) => {
                    const isActive = lesson.id === currentLessonId;
                    const isDone = completedLessons.includes(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        id={`lesson-item-${lesson.id}`}
                        className={`group relative p-2.5 sm:p-3 transition-all flex items-start gap-2.5 ${
                          isActive
                            ? 'bg-gradient-to-r from-sky-900/30 to-blue-950/20 border-l-2 border-cyan-400'
                            : 'hover:bg-slate-900/50'
                        }`}
                      >
                        {/* Checkbox Complete Toggle Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleComplete(lesson.id);
                          }}
                          className="mt-0.5 flex-shrink-0 text-slate-500 hover:text-cyan-400 transition"
                          title={isDone ? "Marcar como não concluída" : "Marcar como concluída"}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600 group-hover:text-slate-400" />
                          )}
                        </button>

                        {/* Lesson Details & Select Button */}
                        <button
                          onClick={() => onSelectLesson(lesson.id)}
                          className="flex-1 text-left min-w-0"
                        >
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="text-[10px] font-mono font-semibold text-slate-400">
                              Aula {lesson.number < 10 ? `0${lesson.number}` : lesson.number}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              {lesson.duration}
                            </span>
                          </div>

                          <h4 className={`text-xs font-semibold leading-snug line-clamp-2 ${
                            isActive ? 'text-cyan-300 font-bold' : isDone ? 'text-slate-300' : 'text-slate-200'
                          }`}>
                            {lesson.title.replace(/^Aula \d+:\s*/, '')}
                          </h4>

                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {lesson.subtitle}
                          </p>
                        </button>

                        {/* Active Indicator Icon */}
                        {isActive && (
                          <div className="flex-shrink-0 self-center">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
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
