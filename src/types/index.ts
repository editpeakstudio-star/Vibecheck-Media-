export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: string;
  highlight: string;
  whatsappMessage: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Video Editing' | 'Graphic Designing' | 'Web Development' | 'Social Media Creatives';
  description: string;
  image: string;
  tags: string[];
  metrics: string;
  clientType: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  metric: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
}
