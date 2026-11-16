export type ProjectCategory = 'Game Art' | 'UI/UX';

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface DeliverableItem {
  id: string;
  title: string;
  type: string;
  caption: string;
  description?: string;
}

export interface VisualGalleryImage {
  id?: string;
  src: string; // JPG, JPEG, PNG, GIF(애니메이션 유지) 이미지 경로
  title?: string;
  description?: string;
  caption?: string;
  alt?: string;
  imageClassName?: string;
}

export interface VisualGallerySubcategory {
  id: string;
  code: string;
  title?: string;
  columns?: 1 | 2 | 3 | 5;
  images: VisualGalleryImage[];
}

export interface VisualGalleryCategory {
  id: string;
  categoryCode: string;
  title: string;
  description: string;
  images: VisualGalleryImage[];
  subcategories?: VisualGallerySubcategory[];
}

export type AchievementBadgeType =
  | 'AWARDED'
  | 'SELECTED'
  | 'CONFIRMED'
  | 'ONGOING'
  | 'PLANNED'
  | 'award'
  | 'ongoing'
  | 'upcoming';

export type ProjectThumbnailBadgeType = 'award' | 'activity';

export interface ProjectThumbnailBadge {
  label: string;
  type: ProjectThumbnailBadgeType;
  awardRank?: number;
  date?: string;
}

export interface ProjectAchievement {
  title: string;
  badge: string;
  badgeType: AchievementBadgeType;
  description: string;
  footer?: string;
  date?: string;
  researchTitle?: string;
  posterPdfUrl?: string;
  posterThumbnail?: string;
}

export interface TeamMemberRole {
  role: string;
  scope: string;
  isSelf?: boolean;
}

export interface PrototypeVideoItem {
  id: string;
  code: string;
  title: string;
  roleLabel: string;
  description: string;
  youtubeUrl?: string;
  caption?: string;
}

export interface ProjectVideo {
  src?: string; // Static MP4/WebM path (e.g. '/videos/off-the-record/gameplay.mp4')
  youtubeUrl?: string; // YouTube video URL
  poster?: string; // Optional poster image
  caption?: string; // Caption displayed below player
  videos?: PrototypeVideoItem[]; // 프로젝트별 다중 영상 등록용 배열
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  previousTitle?: string;
  subtitle: string;
  category: ProjectCategory;
  subCategory: string;
  genre?: string;
  ip?: string;
  developmentStage?: string;
  kicker: string;
  isFeatured?: boolean;
  status?: string;
  program?: string;
  platform?: string;
  period: string;
  tools: string[];
  team: string;
  teamMembers?: TeamMemberRole[];
  video?: ProjectVideo;
  prototypeVideos?: PrototypeVideoItem[];
  externalLinks?: { label: string; url: string }[];
  roleScope: string;
  contributionRate?: number | null;
  summary: string;
  
  overview: {
    purpose: string;
    background: string;
    keyThemes: string[];
    program?: string;
    platform?: string;
  };

  myRole: {
    roleTitle?: string;
    directResponsibilities: string[];
    collaborationProcess: string;
    individualContribution: string;
  };

  artDirection?: {
    headline: string;
    concept: string;
    points: { title: string; description: string }[];
  };

  process: ProcessStep[];

  deliverables: DeliverableItem[];
  visualGallery?: VisualGalleryCategory[];

  creativeProcess?: {
    title: string;
    description: string;
    steps: { title: string; tool: string; description: string }[];
  };

  thumbnailBadges?: ProjectThumbnailBadge[];
  projectAchievements?: ProjectAchievement[];

  developmentStatus?: {
    currentStatus: string;
    currentDescription: string;
    upcomingMilestone: string;
    roadmap: { phase: string; title: string; details: string; status: 'completed' | 'in-progress' | 'planned' }[];
  };

  reflection: {
    problemSolved: string;
    learnings: string;
    futureImprovements: string;
  };
}

export interface DesignerProfile {
  name: string;
  nameEn: string;
  roleTitle: string;
  oneLiner: string;
  heroHeadline: string;
  heroSubheadline: string;
  specializations: string[];
  aboutBio: string;
  education: {
    university: string;
    major: string;
    subMajor: string;
    type: string;
    status: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  tools: {
    name: string;
    role: string;
  }[];
  contact: {
    email: string;
    behance: string;
    github: string;
    location: string;
  };
}

export type AchievementCategory =
  | 'AWARDS'
  | 'COMPETITION'
  | 'ACADEMIC EXCELLENCE'
  | 'SCHOLARSHIP'
  | 'EDUCATION & TRAINING'
  | 'LEADERSHIP';

export interface AchievementProof {
  src: string;
  title: string;
  date?: string;
  alt?: string;
}

export interface Achievement {
  id: string;
  category: AchievementCategory;
  categoryLabel: string;
  title: string;
  teamName?: string;
  organization: string;
  hostOrganizations?: string[];
  operatingOrganizations?: string[];
  date: string;
  isOngoing?: boolean;
  year: number;
  order?: number;
  highlight?: boolean;
  awardDivision?: string;
  paperTitle?: string;
  statusBadge?: string;
  statusBadges?: string[];
  status?: string;
  description: string;
  details?: string[];
  articleUrl?: string;
  articleLabel?: string;
  proofs?: AchievementProof[];
}
