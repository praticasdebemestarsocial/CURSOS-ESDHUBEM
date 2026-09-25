import React from 'react';
import {
  Sparkles,
  HeartHandshake,
  Briefcase,
  Scale,
  Users,
  CircleDollarSign,
  SunMedium,
  Brain,
  Leaf,
  Gift,
  GraduationCap,
  Compass,
  Cpu,
  Target,
  BookOpenCheck,
  Building2,
  Award,
  ArrowRight,
  Filter,
  Library,
  LayoutDashboard
} from 'lucide-react';
import { CategoryItem } from '../types';

interface CategoryGridProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (categoryName: string | null) => void;
  onNavigateToCategoriesPage?: () => void;
  onNavigateToCategoryDetail?: (categorySlug: string) => void;
}

// Icon mapping helper
const renderCategoryIcon = (iconName: string, className: string = 'w-6 h-6') => {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'CircleDollarSign':
      return <CircleDollarSign className={className} />;
    case 'SunMedium':
      return <SunMedium className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'Leaf':
      return <Leaf className={className} />;
    case 'Gift':
      return <Gift className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'BookOpenCheck':
      return <BookOpenCheck className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Library':
      return <Library className={className} />;
    case 'LayoutDashboard':
      return <LayoutDashboard className={className} />;
    case 'Award':
    default:
      return <Award className={className} />;
  }
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onNavigateToCategoriesPage,
  onNavigateToCategoryDetail,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white" id="explorar-categorias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-[#243042] text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5">
              <Filter className="w-4 h-4 text-amber-500" />
              <span>Navegue por Áreas de Conhecimento</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Conheça as Categorias de Cursos
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Selecione uma área para filtrar treinamentos certificados, videoaulas e materiais didáticos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {selectedCategory && (
              <button
                onClick={() => onSelectCategory(null)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3.5 py-1.5 rounded-full transition-colors self-start sm:self-auto cursor-pointer shadow-xs"
              >
                <span>Filtro ativo:</span>
                <span className="text-[#243042] font-bold underline">{selectedCategory}</span>
                <span className="text-slate-400 ml-1">✕</span>
              </button>
            )}
          </div>
        </div>

        {/* 17 Categories Grid (Styled exactly like the user's screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {categories.map((cat) => {
            // Clean up title for matching
            const flatTitle = cat.title.replace('\n', ' ');
            const isSelected = selectedCategory?.toLowerCase() === flatTitle.toLowerCase();

            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (isSelected) {
                    onSelectCategory(null);
                  } else {
                    onSelectCategory(flatTitle);
                    if (cat.id !== 'livros' && cat.id !== 'treinamentos-palestras-corporativas') {
                      const catalogEl = document.getElementById('catalogo-cursos');
                      if (catalogEl) {
                        catalogEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }
                }}
                className={`group relative p-4 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[160px] border cursor-pointer ${
                  isSelected
                    ? 'bg-slate-50 border-2 border-[#243042] shadow-md -translate-y-0.5 ring-2 ring-[#FFC72C]/50'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
                id={`cat-card-${cat.id}`}
              >
                {/* Circular Dark Navy Badge with Yellow Icon (As in user screenshot) */}
                <div className="w-13 h-13 rounded-full bg-[#182333] flex items-center justify-center mb-2.5 shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  {renderCategoryIcon(cat.iconName, 'w-6 h-6 text-[#FBBF24]')}
                </div>

                {/* Centered Category Title */}
                <div className="flex-1 flex flex-col justify-center w-full">
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug group-hover:text-[#243042] line-clamp-2">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-normal mt-1 block">
                    Cursos
                  </span>
                </div>

                {/* Selected Indicator Pill */}
                {isSelected && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FFC72C]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
