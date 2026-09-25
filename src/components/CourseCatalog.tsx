import React, { useState } from 'react';
import { Course } from '../types';
import {
  Clock,
  Star,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
  Heart,
  CheckCircle,
  PlayCircle,
  ShieldCheck
} from 'lucide-react';

interface CourseCatalogProps {
  courses: Course[];
  activePillar: 'all' | 'freepremium' | 'horas-complementares' | 'formacao-livre';
  onPillarChange: (pillar: 'all' | 'freepremium' | 'horas-complementares' | 'formacao-livre') => void;
  onNavigate?: (sectionId: string) => void;
  onSelectCourse: (course: Course) => void;
  onToggleSaveCourse: (courseId: string) => void;
  savedCourseIds: string[];
  searchTerm: string;
  selectedCategory: string | null;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  courses,
  activePillar,
  onPillarChange,
  onNavigate,
  onSelectCourse,
  onToggleSaveCourse,
  savedCourseIds,
  searchTerm,
  selectedCategory,
}) => {
  // Filter courses by pillar, search, and category
  const filteredCourses = courses.filter((course) => {
    const matchesPillar = activePillar === 'all' || course.pillar === activePillar;

    const matchesSearch =
      !searchTerm ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      course.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesPillar && matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-[#F8FAFC]" id="catalogo-cursos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#243042] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Grade de Treinamentos e Certificações</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Catálogo de Cursos Online ESDHUBEM
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
              Selecione o formato ideal para seu momento atual: videoaulas 100% livres, horas acadêmicas certificadas ou formações completas para renda imediata.
            </p>
          </div>

          {/* Pillar Tabs Matching the User's Requirements with Custom Colors */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-200/70 p-2 rounded-2xl self-start border border-slate-300/60 shadow-xs">
            {/* Todos os Cursos */}
            <button
              onClick={() => onPillarChange('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activePillar === 'all'
                  ? 'bg-slate-900 text-white shadow-md ring-2 ring-slate-900/20'
                  : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-300/80'
              }`}
            >
              <span>Todos os Cursos</span>
            </button>

            {/* Cursos Freepremium */}
            <button
              onClick={() => onPillarChange('freepremium')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activePillar === 'freepremium'
                  ? 'bg-cyan-600 text-white shadow-md ring-2 ring-cyan-600/20'
                  : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-900 border border-cyan-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 fill-cyan-500" />
              <span>Cursos Freepremium</span>
            </button>

            {/* Horas Complementares */}
            <button
              onClick={() => onPillarChange('horas-complementares')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activePillar === 'horas-complementares'
                  ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-500/20'
                  : 'bg-amber-100/90 hover:bg-amber-200 text-amber-950 border border-amber-300'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Horas Complementares</span>
            </button>

            {/* Formações Profissionais */}
            <button
              onClick={() => onPillarChange('formacao-livre')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activePillar === 'formacao-livre'
                  ? 'bg-purple-700 text-white shadow-md ring-2 ring-purple-700/20'
                  : 'bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-purple-600" />
              <span>Formações Profissionais</span>
            </button>

            {/* Sites & Biolinks */}
            <button
              onClick={() => onNavigate && onNavigate('categoria:landing-pages-biolinks')}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 shadow-2xs flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>Sites & Biolinks</span>
            </button>

            {/* Apps & Dashboards */}
            <button
              onClick={() => onNavigate && onNavigate('aplicativos')}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer text-slate-950 bg-[#FFC72C] hover:bg-amber-400 border border-amber-400 shadow-2xs flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-slate-950 inline-block" />
              <span>Apps & Dashboards</span>
            </button>

            {/* Livros & Materiais */}
            <button
              onClick={() => onNavigate && onNavigate('livraria')}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer text-rose-900 bg-rose-100 hover:bg-rose-200 border border-rose-300 shadow-2xs flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
              <span>Livros & Materiais</span>
            </button>

            {/* Artigos Científicos */}
            <button
              onClick={() => onNavigate && onNavigate('artigos')}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer text-indigo-900 bg-indigo-100 hover:bg-indigo-200 border border-indigo-300 shadow-2xs flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
              <span>Artigos Científicos</span>
            </button>
          </div>
        </div>

        {/* Active Filters Bar */}
        {(searchTerm || selectedCategory) && (
          <div className="mb-6 flex flex-wrap items-center gap-2 bg-amber-50/80 border border-amber-200 p-3 rounded-xl text-xs sm:text-sm">
            <span className="font-bold text-amber-900">Filtros ativos:</span>
            {searchTerm && (
              <span className="bg-white px-2.5 py-1 rounded-md text-slate-700 border border-amber-200 flex items-center gap-1.5 shadow-2xs">
                Busca: <strong>"{searchTerm}"</strong>
              </span>
            )}
            {selectedCategory && (
              <span className="bg-white px-2.5 py-1 rounded-md text-slate-700 border border-amber-200 flex items-center gap-1.5 shadow-2xs">
                Categoria: <strong>{selectedCategory}</strong>
              </span>
            )}
            <span className="text-amber-800 ml-auto font-bold">
              {filteredCourses.length} cursos encontrados
            </span>
          </div>
        )}

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">
              Nenhum curso encontrado para os filtros selecionados
            </h3>
            <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
              Tente buscar por outro termo ou explore as categorias gerais de desenvolvimento humano.
            </p>
            <button
              onClick={() => {
                onPillarChange('all');
              }}
              className="mt-5 px-5 py-2.5 rounded-full bg-[#243042] text-white text-xs font-bold cursor-pointer hover:bg-[#182333]"
            >
              Ver todos os cursos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => {
              const isSaved = savedCourseIds.includes(course.id);

              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden"
                  id={`course-card-${course.id}`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Pillar Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs ${
                          course.pillar === 'freepremium'
                            ? 'bg-emerald-600 text-white'
                            : course.pillar === 'horas-complementares'
                            ? 'bg-[#FFC72C] text-slate-900 font-extrabold'
                            : 'bg-[#182333] text-white'
                        }`}
                      >
                        {course.pillar === 'freepremium'
                          ? 'Freepremium'
                          : course.pillar === 'horas-complementares'
                          ? 'Horas Complementares'
                          : 'Formação Livre'}
                      </span>
                    </div>

                    {/* Bookmark / Favorite Heart */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveCourse(course.id);
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-600 hover:text-rose-500 hover:scale-110 transition-all cursor-pointer shadow-xs"
                      title={isSaved ? 'Remover dos salvos' : 'Salvar curso'}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isSaved ? 'text-rose-500 fill-rose-500' : 'text-slate-600'
                        }`}
                      />
                    </button>

                    {/* Hours Tag Bottom Left */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs font-semibold">
                      <span className="flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur-xs">
                        <Clock className="w-3.5 h-3.5 text-[#FFC72C]" />
                        {course.hours} horas
                      </span>
                      <span className="flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur-xs">
                        <Star className="w-3.5 h-3.5 text-[#FFC72C] fill-[#FFC72C]" />
                        {course.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 text-[11px] text-[#243042] font-bold">
                        <span className="truncate">{course.category}</span>
                        <span className="shrink-0 text-slate-400 font-medium">
                          {course.modulesCount} módulos
                        </span>
                      </div>

                      <h3
                        onClick={() => onSelectCourse(course)}
                        className="font-bold text-slate-900 group-hover:text-[#243042] transition-colors leading-snug cursor-pointer line-clamp-2 text-base"
                      >
                        {course.title}
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {course.subtitle}
                      </p>
                    </div>

                    {/* Price & Action Button */}
                    <div className="pt-3 border-t border-slate-100 space-y-3">
                      <div className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{course.priceNote}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onSelectCourse(course)}
                          className="flex-1 py-2.5 px-3 bg-[#243042] hover:bg-[#182333] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <PlayCircle className="w-3.5 h-3.5 text-[#FFC72C]" />
                          <span>Acessar Curso</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectCourse(course)}
                          className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors cursor-pointer text-xs"
                          title="Ver ementa completa"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
