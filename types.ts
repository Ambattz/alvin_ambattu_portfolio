export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  grade?: string;
  period: string;
  location: string;
  types: ('management' | 'technical' | 'project')[];
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  tech: string[];
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  details: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}