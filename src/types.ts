export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  pillar: 'freepremium' | 'horas-complementares' | 'formacao-livre';
  hours: number;
  rating: number;
  studentsCount: number;
  image: string;
  tag: string;
  badge?: string;
  description: string;
  modulesCount: number;
  syllabus: string[];
  targetAudience: string;
  priceNote: string;
  priceValue?: number;
}

export interface CategoryItem {
  id: string;
  title: string;
  subtitle?: string;
  coursesCount: number;
  iconName: string;
  accentColor: string;
}

export interface MethodologyPillar {
  number: string;
  title: string;
  isPopular?: boolean;
  description: string;
  targetAudience: string;
  type: 'freepremium' | 'horas-complementares' | 'formacao-livre';
}

export interface CertificateVerification {
  code: string;
  studentName: string;
  courseTitle: string;
  category: string;
  hours: number;
  completionDate: string;
  status: 'valid' | 'invalid' | 'revoked';
  institution: string;
  authenticityHash: string;
}

export interface PolicySection {
  title: string;
  content: string[];
}

export interface PolicyDetail {
  id: string;
  title: string;
  lastUpdated: string;
  iconName: string;
  color: string;
  introduction: string;
  sections: PolicySection[];
}

export interface AcademicArticle {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  institution: string;
  publicationYear: string;
  publicationDate: string;
  doi: string;
  doiUrl: string;
  zenodoUrl: string;
  pdfUrl?: string;
  category: string;
  keywords: string[];
  abstractPt: string;
  abstractEn?: string;
  citationAbnt: string;
  citationApa: string;
  viewsCount?: number;
  downloadsCount?: number;
  isFeatured?: boolean;
}
