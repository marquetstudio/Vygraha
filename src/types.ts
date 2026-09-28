export type ServiceCategory = 'interiors' | 'furnishing' | 'consulting' | 'construction';

export interface SubService {
  id: string;
  name: string;
  description: string;
  features?: string[];
  iconName?: string;
}

export interface ServiceDiscipline {
  id: ServiceCategory;
  title: string;
  shortDesc: string;
  badge: string;
  image: string;
  subServices: SubService[];
}

export type ProjectCategory = 'all' | 'full-builds' | 'residential-interiors' | 'commercial';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  scopeOfWork: string;
  metrics: {
    plotArea: string;
    completionTimeframe: string;
    styleTheme: string;
    costEfficiency?: string;
  };
  summary: string;
  // Rendering vs actual completed site photo comparison
  renderingImage: string;
  completedImage: string;
  additionalImages?: string[];
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  experience: string;
  specialization: string;
  image?: string;
  education?: string;
  paragraphs?: string[];
  brands?: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  projectType: string;
  location: string;
  rating: number;
  review: string;
  highlight: string;
  completionYear: string;
}

export interface ContactFormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectType: 'New Construction' | 'Full Home Interiors' | 'Renovation' | 'Commercial' | '';
  projectLocation: string;
  budgetRange: string;
  notes: string;
}
