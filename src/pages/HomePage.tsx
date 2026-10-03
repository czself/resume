import { Link } from "react-router";
import { ProjectCard } from "../components/ProjectCard";
import { featuredProjects, projects } from "../data/projects";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import { publicAsset } from "../data/assets";

const selectedProjects = featuredProjects.slice(1);
const leadProject = projects[0];

export function HomePage() {
  return (
    <>
      <section className="hero hero--cover section-wrap" id="top">
        <div className="hero-copy hero-copy--cover">
          <div className="hero-overline hero-overline--cover">
            <span className="status-pulse" aria-hidden="true" />
            <span>OPEN TO INTERNSHIP</span>
            <span className="hero-overline-year">2029 GRADUATE · CITY FLEXIBLE</span>
          </div>
          <p className="hero-greeting">你好，我是</p>
          <h1 className="hero-name">施震<span>.</span></h1>
          <p className="hero-role">嵌入式 <i>×</i> 机器人软件</p>
          <p className="hero-intro hero-intro--cover">软件工程专业在读，关注嵌入式控制、机器人系统与视觉应用。把驱动、通信、控制和任务串起来，也把结果和边界写清楚。</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">看项目案例 <span aria-hidden="true">↗</span></Link>
            <Link className="button button-quiet" to="/resume">打开简历 <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-meta hero-meta--cover">
            <div><span>EDUCATION</span><strong>{profile.education}</strong></div>
            <div><span>GRADUATION</span><strong>{profile.graduation}</strong></div>
            <div><span>LOCATION</span><strong>{profile.location}</strong></div>
          </div>
        </div>

        <aside className="hero-stage" aria-label="机器人巡检仿真项目预览">
          <div className="stage-orbit stage-orbit--one" aria-hidden="true" />
          <div className="stage-orbit stage-orbit--two" aria-hidden="true" />
          <div className="stage-coordinate stage-coordinate--top">MAP_FRAME / ODOM</div>
          <figure className="stage-window">
            <div className="stage-window-bar">
              <span className="stage-window-mark"><i /><i /><i /></span>
              <span>GAZEBO SIMULATION / POINT_02</span>
              <span className="stage-live"><b /> CAPTURE</span>
            </div>
            <img src={publicAsset("projects/sim-person-detection.png")} alt="Gazebo 巡检仿真中的人物检测画面" />
            <figcaption><span>PERCEPTION PIPELINE</span><span>DETECTION + MULTI-FRAME OCR</span></figcaption>
          </figure>
          <div className="stage-readout stage-readout--top"><span>VALIDATION RUNS</span><strong>20<span>×</span></strong><small>frozen-source trials</small></div>
          <div className="stage-profile">
            <img src={publicAsset("avatar.webp")} alt="施震的机器人主题头像插画" />
            <span><strong>SHI ZHEN</strong><small>EMBEDDED · ROBOTICS</small></span>
            <b>czself</b>
          </div>
          <div className="stage-coordinate stage-coordinate--bottom">SIMULATION EVIDENCE<br />NOT FIELD FOOTAGE</div>
        </aside>
      </section>

      <section className="proof-strip section-wrap" aria-label="项目与代码概览">
        <div className="proof-intro"><span>AT A GLANCE</span><strong>项目记录<br />来自代码。</strong></div>
        <div className="proof-metric"><strong>05</strong><span>精选仓库项目</span><small>机器人 · 嵌入式 · 工具</small></div>
        <div className="proof-metric"><strong>20<span>轮</span></strong><span>仿真运行审计</span><small>成功与失败都保留</small></div>
        <div className="proof-metric"><strong>63</strong><span>STM32 实验目录</span><small>寄存器 / HAL / FreeRTOS</small></div>
        <div className="proof-metric"><strong>03</strong><span>战队仓库个人提交</span><small>按提交记录核实范围</small></div>
      </section>

      <section className="section-wrap section-block work-section" id="projects">
        <div className="section-heading section-heading--work">
          <div>
            <div className="section-index"><span>01</span><i /> SELECTED ENGINEERING WORK</div>
            <h2>不止是功能，<br /><em>还有验证过程。</em></h2>
          </div>
          <p className="section-heading-note">从仿真导航到 MCU 固件，按项目展示代码入口、测试记录和实际边界。点击主案例可查看完整数据与实现说明。</p>
        </div>

        <article className="featured-case">
          <div className="featured-case-topline">
            <span><b>01</b> / FEATURED CASE</span>
            <span>ROBOTICS · ROS NOETIC · GAZEBO</span>
          </div>
          <div className="featured-case-main">
            <div className="featured-case-copy">
              <span className="featured-label">AUTONOMOUS PATROL / SIMULATION</span>
              <h3>{leadProject.title}</h3>
              <p className="featured-subtitle">{leadProject.subtitle}</p>
              <p className="featured-summary">十点巡检任务串联导航、人员检测、车牌 OCR 与任务审计。结果按 20 轮冻结源码仿真统计，成功与未达标项都保留。</p>
              <ul className="featured-points">
                <li><i>01</i><span>HOME—POINT_1…POINT_10—HOME 任务流程与到点处理</span></li>
                <li><i>02</i><span>GMapping、AMCL、Navfn 与自定义路径跟随器组合</span></li>
                <li><i>03</i><span>人员检测、多帧车牌 OCR、速度门控与运行审计</span></li>
              </ul>
              <div className="tag-row featured-tags">
                {leadProject.technologies.slice(0, 6).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
              <Link className="button button-primary featured-link" to={"/projects/" + leadProject.slug}>查看完整案例 <span aria-hidden="true">↗</span></Link>
            </div>

            <div className="featured-case-media">
              <figure className="featured-sim-frame">
                <div className="featured-media-label"><span>SIMULATION FRAME / POINT_02</span><span>01 — 20</span></div>
                <img src={publicAsset("projects/sim-person-detection.png")} alt="Gazebo 社区巡检仿真画面，包含人物检测框与标签" loading="lazy" />
                <figcaption>Gazebo 仿真证据帧 · 人员检测</figcaption>
              </figure>
              <figure className="featured-chart-frame">
                <div className="featured-media-label"><span>MISSION TIME AUDIT</span><span>20 TRIALS</span></div>
                <img src={publicAsset("projects/mission-times.png")} alt="机器人仿真项目 20 轮任务时间统计图" loading="lazy" />
              </figure>
            </div>
          </div>
          <div className="featured-metrics">
            {leadProject.facts.map((fact, index) => (
              <div className={index === 3 ? "featured-metric featured-metric--limit" : "featured-metric"} key={fact.label}>
                <strong>{fact.value}</strong><span>{fact.label}</span>
              </div>
            ))}
          </div>
          <p className="featured-boundary">测试范围：Gazebo 仿真；车身实际回位双阈值 0/20 通过。仿真结论不等同于真实机器人部署。</p>
        </article>

        <div className="secondary-work-heading">
          <span>MORE PROJECTS</span>
          <span>ROBOTICS / EMBEDDED / FIRMWARE</span>
        </div>
        <div className="project-grid project-grid--secondary">
          {selectedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <div className="section-end-link">
          <span>05 个项目 · 每项均有代码或提交记录入口</span>
          <Link className="text-link" to="/projects">浏览全部项目 <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="skills-section section-block skills-section--cards">
        <div className="section-wrap">
          <div className="section-heading section-heading--compact">
            <div>
              <div className="section-index"><span>02</span><i /> ENGINEERING TOOLBOX</div>
              <h2>从底层接口，<br /><em>一路连到系统。</em></h2>
            </div>
            <p className="section-heading-note">技能词条对应公开项目中的代码和工程入口，按可展示的实践范围归类。</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.number}>
                <div className="skill-card-top"><span>{group.number} / 04</span><span aria-hidden="true">↗</span></div>
                <div className="skill-card-glyph" aria-hidden="true">{group.title === "Embedded" ? "μC" : group.title === "Robotics" ? "Rˣ" : group.title === "Perception" ? "CV" : "{ }"}</div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="system-chain" aria-label="机器人软件开发链路">
            <span>SENSOR</span><i>→</i><span>MCU</span><i>→</i><span>CONTROL</span><i>→</i><span>ROS</span><i>→</i><span>VALIDATION</span>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block about-strip about-strip--editorial">
        <div className="section-index"><span>03</span><i /> ABOUT / DIRECTION</div>
        <div className="about-strip-body">
          <div>
            <span className="eyebrow">SOFTWARE ENGINEERING · CLASS OF 2029</span>
            <h2>愿意从问题<br /><em>一路追到现场。</em></h2>
          </div>
          <div className="about-strip-copy">
            <p>我在整理仓库时，也会把构建方式、运行依赖和测试边界一并记录。希望项目不只“能展示”，也能让面试官顺着代码看清楚我做了什么、怎么验证、还差什么。</p>
            <div className="about-actions">
              <Link className="text-link" to="/resume">查看教育与项目经历 <span aria-hidden="true">↗</span></Link>
              <a className="text-link" href={profile.gitee} target="_blank" rel="noreferrer">Gitee 仓库 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
