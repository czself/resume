import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { publicAsset } from "../data/assets";

const resumeProjects = projects.slice(0, 4);

export function ResumePage() {
  return (
    <div className="resume-page section-wrap">
      <div className="resume-toolbar no-print">
        <span className="section-index"><span>PRINT EDITION</span><i /> ONE PAGE / A4</span>
        <div className="resume-actions">
          <a className="button button-primary" href={publicAsset("resume.pdf")} download>
            下载 PDF <span aria-hidden="true">↓</span>
          </a>
          <button className="button button-quiet" type="button" onClick={() => window.print()}>
            打印 / 另存为 PDF <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <span className="eyebrow">EMBEDDED SYSTEMS · ROBOTICS</span>
            <h1>{profile.name}<span className="accent-dot">.</span></h1>
            <p>{profile.target} <span>·</span> {profile.location}</p>
          </div>
          <img src={publicAsset("avatar.webp")} alt="" />
        </header>
        <div className="resume-contact">
          <a href={"tel:" + profile.phone}>{profile.phone}</a>
          <a href={profile.github}>github.com/czself</a>
          <a href={profile.gitee}>gitee.com/sz___sz</a>
        </div>
        <section className="resume-section">
          <h2>个人简介</h2>
          <p>软件工程专业在读，关注嵌入式控制、机器人软件与系统集成。项目实践覆盖 STM32 / FreeRTOS、ROS 1 / Gazebo、姿态解算、电机控制、机器人仿真验证及团队代码协作。</p>
        </section>
        <section className="resume-section">
          <h2>技术能力</h2>
          <div className="resume-skills">
            <p><strong>嵌入式：</strong>C、STM32F1/F4、FreeRTOS、UART / SPI / I²C / CAN、ADC / DMA、PlatformIO</p>
            <p><strong>机器人：</strong>ROS 1 Noetic、Gazebo Classic、AMCL、GMapping、PID 控制、系统联调</p>
            <p><strong>视觉与工具：</strong>OpenCV、YOLO 接入、PaddleOCR、Linux、Git、CMake、Rust、Python</p>
          </div>
        </section>
        <section className="resume-section">
          <h2>项目经历</h2>
          <div className="resume-projects">
            {resumeProjects.map((project) => (
              <div className="resume-project" key={project.slug}>
                <div className="resume-project-heading"><strong>{project.title}</strong><span>{project.year}</span></div>
                <p>{project.summary}</p>
                <ul>{project.highlights.slice(0, 2).map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
        <section className="resume-section">
          <h2>教育经历</h2>
          <div className="resume-education"><strong>{profile.education}</strong><span>{profile.graduation}</span></div>
        </section>
        <footer className="resume-footer">
          <span>项目源代码与验证记录</span>
          <a href={profile.github}>github.com/czself</a>
          <a href={profile.gitee}>gitee.com/sz___sz</a>
        </footer>
      </article>
      <p className="resume-note no-print">使用浏览器打印窗口选择“另存为 PDF”。打印版会隐藏网站导航，并自动排成简历文档。</p>
    </div>
  );
}
