import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, CheckCircle, ArrowRight, BookOpen, Target, Sparkles } from 'lucide-react';
import { Lesson } from '../types';
import { CourseCrossword } from './CourseCrossword';

interface VideoPlayerProps {
  lesson: Lesson;
  isCompleted: boolean;
  onToggleComplete: (lessonId: string) => void;
  onOpenExercise: () => void;
  onNextLesson?: () => void;
  hasNextLesson: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  lesson,
  isCompleted,
  onToggleComplete,
  onOpenExercise,
  onNextLesson,
  hasNextLesson
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState('1.0x');

  const speeds = ['1.0x', '1.25x', '1.5x', '2.0x'];

  const cycleSpeed = () => {
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIdx]);
  };

  return (
    <div className="bg-white border border-yellow-200 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
      
      {/* 16:9 Responsive Video Stage */}
      <div className="relative aspect-video w-full bg-slate-100 overflow-hidden group">
        
        {/* Tech Background Grid with Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#0e274a_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-transparent to-transparent" />

        {/* Video Content */}
        {lesson.videoSrc && lesson.videoSrc.startsWith('http') ? (
          <iframe
            src={lesson.videoSrc}
            className="absolute inset-0 w-full h-full z-10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={lesson.title}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            {/* Animated Play Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              id="video-play-button"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-yellow-600/30 to-yellow-500/20 border-2 border-yellow-500/60 flex items-center justify-center text-yellow-700 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 mb-4 group/btn"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 text-yellow-700 fill-yellow-300" />
              ) : (
                <Play className="w-7 h-7 text-yellow-700 fill-yellow-300 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
              )}
            </button>

            <span className="text-xs font-mono uppercase tracking-widest text-yellow-600/90 mb-1">
              Player Corporativo HD • {lesson.duration}
            </span>
            <h2 className="text-base sm:text-xl font-extrabold text-slate-900 max-w-lg leading-snug">
              {lesson.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md">
              {lesson.subtitle}
            </p>

            {/* Placeholder Video URL Tag */}
            <div className="mt-4 px-3 py-1 bg-slate-200/60 backdrop-blur-md rounded-md border border-yellow-300 text-[11px] font-mono text-yellow-700/80">
              <code>video.src="{lesson.videoSrc}"</code>
            </div>

            {isPlaying && (
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Reproduzindo conteúdo demonstrativo ({speed})
              </div>
            )}
          </div>
        )}

        {/* Video Bottom Progress Bar (Simulated UI) */}
        {(!lesson.videoSrc || !lesson.videoSrc.startsWith('http')) && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-white/90 to-transparent p-3 flex items-center justify-between text-xs text-slate-700 z-20 pointer-events-none">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-yellow-600 transition pointer-events-auto"
                title={isPlaying ? "Pausar" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <span className="font-mono text-[11px] text-slate-600">03:42 / {lesson.duration}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={cycleSpeed}
                className="px-2 py-0.5 rounded bg-slate-200/80 hover:bg-slate-300 text-[11px] font-mono font-bold text-yellow-600 border border-slate-400 transition pointer-events-auto"
                title="Velocidade de Reprodução"
              >
                {speed}
              </button>
              <Volume2 className="w-4 h-4 text-slate-600" />
            </div>
          </div>
        )}

      </div>

      {/* Lesson Meta Header & Action Ribbon */}
      <div className="p-5 sm:p-6 border-b border-yellow-200 bg-white/90 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-600 bg-yellow-100/60 border border-yellow-300/50 px-2 py-0.5 rounded">
              Módulo {lesson.moduleId} • Aula {lesson.number} de 13
            </span>
            <span className="text-xs text-slate-600 font-medium">Tempo: {lesson.duration}</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            {lesson.title}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {lesson.subtitle}
          </p>
        </div>

        {/* Action Buttons: Mark Complete & Exercise Trigger */}
        <div className="flex items-center flex-wrap sm:flex-nowrap gap-2.5">
          <button
            onClick={() => onToggleComplete(lesson.id)}
            id="btn-toggle-complete-lesson"
            className={`flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition active:scale-95 whitespace-nowrap ${
              isCompleted
                ? 'bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200'
                : 'bg-slate-200/80 text-slate-800 border-slate-400 hover:bg-slate-300'
            }`}
          >
            <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-emerald-500' : 'text-slate-600'}`} />
            <span>{isCompleted ? 'Concluída' : 'Marcar Concluída'}</span>
          </button>

          <button
            onClick={onOpenExercise}
            id="btn-open-exercise-modal"
            className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-yellow-500 via-blue-600 to-indigo-600 hover:from-yellow-400 hover:to-blue-500 border border-yellow-500/40 shadow-lg shadow-yellow-500/25 active:scale-95 transition whitespace-nowrap"
          >
            <Target className="w-4 h-4 text-cyan-200" />
            <span>Exercício da Aula</span>
          </button>

          {hasNextLesson && (
            <button
              onClick={onNextLesson}
              id="btn-next-lesson"
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-200/40 hover:bg-slate-200 border border-slate-300 hover:border-slate-400 transition"
              title="Ir para a próxima aula"
            >
              <span>Próxima</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Lesson Framework & Takeaways */}
      <div className="p-5 sm:p-6 space-y-5">
        
        {/* Crossword Challenge (if available) */}
        {lesson.crossword && lesson.crossword.length > 0 && (
          <CourseCrossword 
            lessonId={lesson.id} 
            words={lesson.crossword} 
            onComplete={() => {
              if (!isCompleted) {
                onToggleComplete(lesson.id);
              }
            }}
          />
        )}

        {/* Framework Box */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-50 via-white to-yellow-50 border-l-4 border-yellow-500 border-y border-r border-yellow-200">
          <div className="flex items-center gap-2 text-yellow-600 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Framework Chave da Aula
          </div>
          <p className="text-sm sm:text-base font-semibold text-slate-900">
            {lesson.keyFramework || lesson.framework}
          </p>
        </div>

        {/* Pilares Fundamentais */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-yellow-600" />
            Pilares e Orientações Práticas
          </h3>
          <ul className="grid gap-2.5">
            {(lesson.keyPoints || lesson.summary).map((point: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-yellow-200"
              >
                <span className="w-5 h-5 rounded-full bg-yellow-100 border border-yellow-300 text-yellow-600 flex items-center justify-center font-mono text-[11px] font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
};
