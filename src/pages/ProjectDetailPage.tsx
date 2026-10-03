import { Link, useParams } from "react-router";
import { ProjectVisual } from "../components/ProjectVisual";
import { projects } from "../data/projects";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;

  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  return (
    <article className="project-detail section-wrap">
      <Link className="back-link" to="/projects"><span aria-hidden="true">←</span> 项目索引</Link>
      <div className="detail-heading">
        <div className="section-index"><span>{project.index}</span><i /> {project.category.toUpperCase()} / {project.year}</div>
        <h1>{project.title}<span className="accent-dot">.</span></h1>
        <p>{project.subtitle}</p>
      </div>
      <div className="detail-visual"><ProjectVisual project={project} /></div>
      {project.evidenceImages && (
        <div className="evidence-gallery">
          {project.evidenceImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
      <div className="detail-summary-grid">
        <div className="detail-summary"><span className="eyebrow">OVERVIEW</span><p>{project.summary}</p></div>
        <div className="detail-tech"><span className="eyebrow">TECH STACK</span><div className="tag-row">{project.technologies.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
      </div>
      {project.facts.length > 0 && (
        <section className="detail-facts" aria-label="项目数据">
          {project.facts.map((fact) => (
            <div className="detail-fact" key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>
          ))}
        </section>
      )}
      <div className="detail-body-grid">
        <section>
          <div className="section-index"><span>A</span><i /> IMPLEMENTATION</div>
          <h2>实现与工程入口</h2>
          <ul className="detail-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="boundary-section">
          <div className="section-index"><span>B</span><i /> SCOPE & EVIDENCE</div>
          <h2>范围与验证口径</h2>
          <ul className="detail-list">{project.boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>
      <section className="detail-links">
        <div className="section-index"><span>C</span><i /> SOURCE LINKS</div>
        <div className="detail-link-list">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
              <span>{link.label}</span><span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <Link className="next-project" to={"/projects/" + nextProject.slug}>
        <span>NEXT PROJECT / {nextProject.index}</span><strong>{nextProject.title}</strong><i aria-hidden="true">↗</i>
      </Link>
    </article>
  );
}
