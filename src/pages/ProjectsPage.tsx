import { useMemo, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../data/types";

const filters: { key: "All" | ProjectCategory; label: string }[] = [
  { key: "All", label: "全部项目" },
  { key: "Robotics", label: "机器人" },
  { key: "Embedded", label: "嵌入式" },
  { key: "Tools", label: "开发工具" },
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["key"]>("All");
  const visibleProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="page-shell section-wrap">
      <div className="page-heading">
        <div className="section-index"><span>01—05</span><i /> PROJECT ARCHIVE</div>
        <h1>项目档案<span className="accent-dot">.</span></h1>
        <p>每一页都指向真实仓库、源代码或验证记录。选择方向，浏览工程细节。</p>
      </div>
      <div className="project-filter" role="group" aria-label="按项目方向筛选">
        {filters.map((filter) => {
          const count = filter.key === "All" ? projects.length : projects.filter((project) => project.category === filter.key).length;
          return (
            <button
              type="button"
              key={filter.key}
              className={activeFilter === filter.key ? "filter-button is-active" : "filter-button"}
              aria-pressed={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}<span>{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>
      <div className="project-grid project-grid--archive" aria-live="polite">
        {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
      <p className="archive-note">项目文字根据代码、公开提交及仓库文档整理；体验数据只在原始验证范围内解释。</p>
    </div>
  );
}
