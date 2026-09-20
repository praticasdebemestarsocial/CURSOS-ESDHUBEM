export interface ExerciseOption {
  id: string;
  text: string;
  isAssertive: boolean;
  classification: 'Assertiva' | 'Passivo-Agressiva' | 'Agressiva' | 'Passiva / Reativa';
  feedback: string;
}

export interface Exercise {
  id: string;
  scenario: string;
  question: string;
  options: ExerciseOption[];
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  moduleId: number;
  duration: string;
  videoSrc: string;
  summary: string[];
  keyPoints?: string[];
  keyFramework: string;
  framework?: string;
  shorts?: { title: string; src: string }[];
  exercise: Exercise;
}

export interface Module {
  id: number;
  title: string;
  tagline: string;
  lessons: Lesson[];
}

export type CourseModule = Module;

export interface RoleplayItem {
  id: string;
  context: string;
  reactiveResponse: string;
  reactiveRisk: string;
  assertiveResponse: string;
  assertiveAdvantage: string;
}

export interface TemplateItem {
  id: string;
  title: string;
  category: '1:1' | 'Prazos' | 'Follow-up' | 'Alinhamento';
  description: string;
  content: string;
}

export interface ChecklistItem {
  id: string;
  category: string;
  question: string;
  tip: string;
}

export interface UserProgress {
  completedLessons: string[];
  solvedExercises: Record<string, { optionId: string; isCorrect: boolean }>;
  checklistChecked: string[];
}
