import type { Project } from "../data/types";

type Props = {
  project: Project;
  compact?: boolean;
};

const visualLabels: Record<Project["visual"], string> = {
  "ros-report": "SIMULATION RECORD / 20 RUNS",
  "robot-system": "INTEGRATION MAP / TEAM REPOSITORY",
  gimbal: "CONTROL LOOP / SOURCE CONFIGURATION",
  firmware: "FIRMWARE LAB / 00—62",
  terminal: "TOOLING / TERMINAL INTERFACE",
};

export function ProjectVisual({ project, compact = false }: Props) {
  if (project.image) {
    return (
      <figure className={"project-visual project-visual--image" + (compact ? " is-compact" : "")}>
        <div className="visual-topline">
          <span className="visual-dot" aria-hidden="true" />
          <span>{visualLabels[project.visual]}</span>
          <span className="visual-side-note">EVIDENCE</span>
        </div>
        <img src={project.image.src} alt={project.image.alt} loading="lazy" />
        {!compact && <figcaption>{project.image.caption}</figcaption>}
      </figure>
    );
  }

  return (
    <div
      className={"project-visual project-visual--diagram visual-" + project.visual + (compact ? " is-compact" : "")}
      role="img"
      aria-label={project.title + " " + visualLabels[project.visual] + " 结构示意图"}
    >
      <div className="visual-topline">
        <span className="visual-dot" aria-hidden="true" />
        <span>{visualLabels[project.visual]}</span>
        <span className="visual-side-note">SCHEMATIC</span>
      </div>
      {project.visual === "robot-system" && (
        <div className="system-map">
          <span className="map-line map-line--horizontal" />
          <span className="map-line map-line--vertical" />
          <div className="map-node map-node--chassis">CHASSIS</div>
          <div className="map-node map-node--gimbal">GIMBAL</div>
          <div className="map-node map-node--launcher">LAUNCHER</div>
          <div className="map-core">
            <span>HERO</span>
            <strong>integrated<br />demo</strong>
          </div>
          <div className="map-caption">C · CMAKE · UART / RTT · OPENOCD</div>
        </div>
      )}
      {project.visual === "gimbal" && (
        <div className="gimbal-map">
          <div className="gimbal-axis gimbal-axis--yaw"><span>YAW</span></div>
          <div className="gimbal-axis gimbal-axis--pitch"><span>PITCH</span></div>
          <div className="gimbal-platform">
            <div className="gimbal-camera"><i /><i /><i /></div>
            <span>GM6020 × 2</span>
          </div>
          <div className="gimbal-flow">
            <span>BMI088</span><b>→</b><span>AHRS</span><b>→</b><span>PID</span><b>→</b><span>CAN</span>
          </div>
        </div>
      )}
      {project.visual === "firmware" && (
        <div className="firmware-map">
          <div className="firmware-chip"><span>STM32</span><strong>F103</strong><small>MCU / 72 MHz</small></div>
          <div className="firmware-bus" aria-hidden="true" />
          <div className="firmware-modules">
            <span>GPIO</span><span>TIM / PWM</span><span>UART</span><span>ADC + DMA</span><span>FreeRTOS</span><span>CAN</span>
          </div>
          <div className="firmware-foot">REGISTERS <b>↔</b> HAL <i>·</i> 63 EXPERIMENT DIRECTORIES</div>
        </div>
      )}
      {project.visual === "terminal" && (
        <div className="terminal-visual">
          <div className="terminal-bar"><i /><i /><i /><span>tinyvim — workspace</span></div>
          <pre><span className="term-muted">01</span>  <span className="term-blue">fn</span> main() {"{"}{"\n"}<span className="term-muted">02</span>      <span className="term-blue">println!</span>(<span className="term-green">"Hello, embedded world"</span>);{"\n"}<span className="term-muted">03</span>  {"}"}<span className="term-cursor">▍</span></pre>
          <div className="terminal-status"><span>RUST</span><span>UTF-8</span><span>LINE 03 : COL 01</span></div>
        </div>
      )}
      {!compact && <div className="schematic-caption">结构示意图，非实机照片</div>}
    </div>
  );
}
