import { Link } from "react-router";
import type { Project } from "../data/types";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={"project-card" + (compact ? " project-card--compact" : "")}>
      <Link className="project-card-visual-link" to={"/projects/" + project.slug} aria-label={"查看项目：" + project.title}>
        <ProjectVisual project={project} compact />
      </Link>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{project.index} / {project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3><Link to={"/projects/" + project.slug}>{project.title}</Link></h3>
        <p className="project-card-subtitle">{project.subtitle}</p>
        <p className="project-card-summary">{project.summary}</p>
        <div className="tag-row">
          {project.technologies.slice(0, 5).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <Link className="text-link project-card-link" to={"/projects/" + project.slug}>
          阅读项目记录 <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
