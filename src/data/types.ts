export type ProjectCategory = "Robotics" | "Embedded" | "Tools";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  index: string;
  category: ProjectCategory;
  year: string;
  title: string;
  subtitle: string;
  summary: string;
  technologies: string[];
  facts: { value: string; label: string }[];
  highlights: string[];
  boundaries: string[];
  visual: "ros-report" | "robot-system" | "gimbal" | "firmware" | "terminal";
  image?: { src: string; alt: string; caption: string };
  evidenceImages?: { src: string; alt: string; caption: string }[];
  links: ProjectLink[];
};
