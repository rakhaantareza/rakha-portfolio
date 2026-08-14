type ProjectVisual = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectMark = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PublishedFeaturedProject = {
  status: "published";
  index: string;
  year: string;
  category: string;
  name: string;
  mark?: ProjectMark;
  proposition: string;
  description: string;
  technologies: string;
  caseStudyUrl: string;
  liveProductUrl: string | null;
  visual: ProjectVisual | null;
};

type DraftFeaturedProject = {
  status: "draft";
  index: string;
  year: null;
  category: null;
  name: null;
  proposition: null;
  description: null;
  technologies: null;
  caseStudyUrl: null;
  liveProductUrl: null;
  visual: null;
};

type FeaturedProjectRecord =
  | PublishedFeaturedProject
  | DraftFeaturedProject;

export const applyFitProject: PublishedFeaturedProject = {
  status: "published",
  index: "01",
  year: "2026",
  category: "FULL-STACK · PRODUCT",
  name: "ApplyFit",
  mark: {
    src: "/projects/applyfit/applyfit-mark.svg",
    alt: "",
    width: 33,
    height: 33,
  },
  proposition: "Know the gap before you apply.",
  description:
    "A career-readiness platform that helps job seekers understand how their skills and real evidence align with a job before sending an application.",
  technologies: "Next.js · TypeScript · InsForge",
  caseStudyUrl: "/projects/applyfit",
  liveProductUrl: null,
  visual: {
    src: "/projects/applyfit/applyfit-featured.png",
    alt: "ApplyFit fit analysis dashboard",
    width: 2880,
    height: 2212,
  },
};

export const featuredProjectIndex: FeaturedProjectRecord[] = [
  applyFitProject,
  {
    status: "draft",
    index: "02",
    year: null,
    category: null,
    name: null,
    proposition: null,
    description: null,
    technologies: null,
    caseStudyUrl: null,
    liveProductUrl: null,
    visual: null,
  },
  {
    status: "draft",
    index: "03",
    year: null,
    category: null,
    name: null,
    proposition: null,
    description: null,
    technologies: null,
    caseStudyUrl: null,
    liveProductUrl: null,
    visual: null,
  },
];

export const publishedFeaturedProjects = featuredProjectIndex.filter(
  (project): project is PublishedFeaturedProject =>
    project.status === "published",
);
