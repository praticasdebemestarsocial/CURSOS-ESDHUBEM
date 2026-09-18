import React, { useState, useEffect } from 'react';
import { COURSE_DATA, getAllLessons } from './data/courseData';
import { Header } from './components/Header';
import { VideoPlayer } from './components/VideoPlayer';
import { LessonSidebar } from './components/LessonSidebar';
import { ExerciseModal } from './components/ExerciseModal';
import { ToolsSection } from './components/ToolsSection';
import { ExportModal } from './components/ExportModal';
import { IOSInstallGuide } from './components/IOSInstallGuide';
import { usePWAInstall } from './hooks/usePWAInstall';
import { Wifi, WifiOff } from 'lucide-react';

export default function App() {
  const allLessons = getAllLessons();

  // Active Lesson state
  const [currentLessonId, setCurrentLessonId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('assertiva_current_lesson');
      return saved && allLessons.some((l) => l.id === saved) ? saved : allLessons[0].id;
    } catch {
      return allLessons[0].id;
    }
  });

  // Completed Lessons list
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('assertiva_completed_lessons');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals state
  const [isExerciseOpen, setIsExerciseOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isIOSGuideOpen, setIsIOSGuideOpen] = useState(false);

  // Network state for PWA offline detection
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Persist current lesson
  const handleSelectLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    try {
      localStorage.setItem('assertiva_current_lesson', lessonId);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  // Toggle completion
  const handleToggleComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      const next = prev.includes(lessonId)
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId];
      try {
        localStorage.setItem('assertiva_completed_lessons', JSON.stringify(next));
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
      return next;
    });
  };

  // Find active lesson object
  const currentLesson = allLessons.find((l) => l.id === currentLessonId) || allLessons[0];
  const currentIndex = allLessons.findIndex((l) => l.id === currentLesson.id);
  const hasNextLesson = currentIndex < allLessons.length - 1;

  const handleNextLesson = () => {
    if (hasNextLesson) {
      const nextId = allLessons[currentIndex + 1].id;
      handleSelectLesson(nextId);
    }
  };

  // PWA Install Hook
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-600 selection:text-black">
      
      {/* Offline Status Bar Banner (PWA feature) */}
      {!isOnline && (
        <div className="bg-amber-950/90 border-b border-amber-700/80 px-4 py-2 text-center text-xs font-semibold text-amber-200 flex items-center justify-center gap-2">
          <WifiOff className="w-3.5 h-3.5 text-amber-400" />
          <span>Você está no modo offline. As aulas e exercícios continuam acessíveis através do cache do PWA!</span>
        </div>
      )}

      {/* Header with Progress & Actions */}
      <Header
        completedCount={completedLessons.length}
        totalLessons={allLessons.length}
        onOpenExportModal={() => setIsExportOpen(true)}
        onInstallPWA={install}
        isInstallable={isInstallable && !isInstalled}
        isIOS={isIOS && !isInstalled}
        onShowIOSGuide={() => setIsIOSGuideOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* Course Core Grid: Player + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Stage: Player & Lesson Info */}
          <div className="lg:col-span-8 space-y-6">
            <VideoPlayer
              lesson={currentLesson}
              isCompleted={completedLessons.includes(currentLesson.id)}
              onToggleComplete={handleToggleComplete}
              onOpenExercise={() => setIsExerciseOpen(true)}
              onNextLesson={handleNextLesson}
              hasNextLesson={hasNextLesson}
            />
          </div>

          {/* Sidebar: 4 Modules, 13 Lessons */}
          <div className="lg:col-span-4">
            <LessonSidebar
              modules={COURSE_DATA.modules}
              currentLessonId={currentLesson.id}
              completedLessons={completedLessons}
              onSelectLesson={handleSelectLesson}
              onToggleComplete={handleToggleComplete}
            />
          </div>

        </div>

        {/* Tools Section: Templates Copiáveis, Roleplay, Checklist Pré-Conversa */}
        <ToolsSection />

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-amber-950/80 bg-[#050b14] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span className="font-semibold text-slate-300">
              Comunicação Assertiva com a Liderança
            </span>
            {" — "}
            <span>PWA Corporativo para Alta Performance e Alinhamento Estratégico</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsExportOpen(true)}
              className="text-amber-500 hover:text-amber-300 underline underline-offset-2"
            >
              Código dos 5 Arquivos para GitHub Pages
            </button>
            <span className="text-slate-600">•</span>
            <span className="font-mono text-slate-500">Service Worker v1.0</span>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ExerciseModal
        lesson={currentLesson}
        isOpen={isExerciseOpen}
        onClose={() => setIsExerciseOpen(false)}
        onCompleteLesson={handleToggleComplete}
        isLessonCompleted={completedLessons.includes(currentLesson.id)}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      <IOSInstallGuide
        isOpen={isIOSGuideOpen}
        onClose={() => setIsIOSGuideOpen(false)}
      />

    </div>
  );
}
