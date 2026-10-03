import type { Project } from "./types";
import { publicAsset } from "./assets";

export const projects: Project[] = [
  {
    slug: "community-robot-simulation",
    index: "01",
    category: "Robotics",
    year: "ROS 1 · GAZEBO",
    title: "智慧社区巡检机器人",
    subtitle: "ROS Noetic 仿真与多点任务",
    summary:
      "基于 Gazebo 的十点巡检仿真，集成导航、人员检测、车牌 OCR 与任务审计。20 轮完整验收 16/20，车牌字符 58/60，平均 136.309 仿真秒；实际车身回位双阈值通过 0/20。",
    technologies: ["ROS Noetic", "Gazebo Classic", "C++", "Python", "OpenCV", "PaddleOCR"],
    facts: [
      { value: "16 / 20", label: "完整任务验收" },
      { value: "58 / 60", label: "车牌字符正确" },
      { value: "136.309 s", label: "平均仿真任务时间" },
      { value: "0 / 20", label: "车身回位双阈值通过" },
    ],
    highlights: [
      "组织 HOME—POINT_1…POINT_10—HOME 十点任务流程，接入到点处理、结果汇总和运行审计。",
      "组合 GMapping、AMCL、Navfn 与自定义 ForwardPathFollower，加入激光/深度避障和速度通行门控。",
      "集成人员检测与多帧车牌 OCR；统计 20 轮冻结源码的仿真结果，保留失败轮次与误差边界。",
    ],
    boundaries: [
      "数据来自 Gazebo 仿真，不代表真实机器人部署结果。",
      "AMCL 估计回位与 Gazebo 车身实际位姿分开统计；同时满足 3 cm 和 0.04 rad 的车身回位标准为 0/20。",
      "仿真依赖和当前环境条件见仓库交接文档；检测权重与训练来源按原项目记录说明。",
    ],
    visual: "ros-report",
    image: {
      src: publicAsset("projects/mission-times.png"),
      alt: "智慧社区机器人仿真项目 20 轮任务时间统计图",
      caption: "原项目 20 轮仿真任务审计图 · 含全部轮次",
    },
    evidenceImages: [
      {
        src: publicAsset("projects/sim-person-detection.png"),
        alt: "Gazebo 巡检仿真画面中的人物检测框与分类标签",
        caption: "原项目 POINT_2 仿真检测证据帧 · Gazebo 画面，非实地照片",
      },
    ],
    links: [
      { label: "GitHub 仓库", href: "https://github.com/czself/ros", external: true },
      {
        label: "20 轮完整报告",
        href: "https://github.com/czself/ros/blob/main/docs/agent_context/tasks/task009/docs20_20260929/REPORT.md",
        external: true,
      },
      {
        label: "当前交接文档",
        href: "https://github.com/czself/ros/blob/main/docs/agent_context/tasks/task009/HANDOFF_20260929.md",
        external: true,
      },
    ],
  },
  {
    slug: "rm2026-hero-integration",
    index: "02",
    category: "Robotics",
    year: "ROBOMASTER · TEAM PROJECT",
    title: "RM2026 英雄机器人",
    subtitle: "底盘 / 云台 / 发射模块联调示例",
    summary:
      "在 eternal-laws 战队仓库参与英雄机器人框架协作，个人可核实的三条提交覆盖集成演示入口、UART/RTT 日志切换和 Windows OpenOCD 烧录脚本。",
    technologies: ["C", "CMake", "UART / RTT", "OpenOCD", "PowerShell", "Git"],
    facts: [
      { value: "03", label: "可核实个人提交" },
      { value: "C + CMake", label: "集成演示构建入口" },
      { value: "UART / RTT", label: "日志输出切换" },
      { value: "Windows", label: "OpenOCD 烧录脚本" },
    ],
    highlights: [
      "新增 integrated_demo 的 main.c 与 CMakeLists.txt，整理整机演示构建入口。",
      "更新演示说明，并为 bsp_log 增加 UART 与 RTT 日志输出切换相关改动。",
      "修订 Windows PowerShell OpenOCD 烧录流程，补充 upload.cfg 与执行结果处理。",
    ],
    boundaries: [
      "这是 eternal-laws 战队共同维护的仓库，页面列出的是施震的提交范围，不将整套战队代码描述为个人独立作品。",
      "上游 HNUYueLuRM 框架保留其来源；提交记录不等同于整机性能验收或比赛成绩。",
    ],
    visual: "robot-system",
    links: [
      {
        label: "战队仓库",
        href: "https://gitee.com/eternal-laws/rm2026",
        external: true,
      },
      {
        label: "集成演示提交",
        href: "https://gitee.com/eternal-laws/rm2026/commit/fb187fc91f76849c8db97d3f43ee5ca235360335",
        external: true,
      },
      {
        label: "日志切换提交",
        href: "https://gitee.com/eternal-laws/rm2026/commit/f9054951b09a55d3f324ec9eb494213eaab0cfb5",
        external: true,
      },
      {
        label: "Windows 烧录提交",
        href: "https://gitee.com/eternal-laws/rm2026/commit/8f4dee6e454a34bcffe622f59c176ee046d7f4b5",
        external: true,
      },
    ],
  },
  {
    slug: "stm32f407-gimbal",
    index: "03",
    category: "Embedded",
    year: "STM32F407 · CONTROL",
    title: "STM32F407 双轴云台",
    subtitle: "IMU 姿态解算与串级控制",
    summary:
      "面向 BMI088 与 GM6020 的 Yaw / Pitch 控制工程，包含 Mahony 姿态解算、角度/速度 PID、CAN 电机通信和 VOFA+ 调试入口；5 ms 为源码目标周期，尚无完整实测数据。",
    technologies: ["STM32F407", "C", "BMI088", "CAN", "PID", "VOFA+"],
    facts: [
      { value: "2 axis", label: "Yaw / Pitch" },
      { value: "1 Mbps", label: "CAN 配置" },
      { value: "5 ms", label: "源码目标控制周期" },
      { value: "BMI088", label: "SPI 传感器" },
    ],
    highlights: [
      "从 BMI088 SPI 采样到 Mahony 姿态估计，再进入角度环 / 速度环控制与 CAN 电流指令链路。",
      "解析 GM6020 电机反馈并提供 VOFA+ 遥测、串口命令和参数调试代码。",
      "工程使用 STM32F407IGH6，GNU Arm 工具链构建，并包含 OpenOCD 下载配置。",
    ],
    boundaries: [
      "5 ms 是源码设定的目标循环时间，实际周期、抖动和控制精度尚无完整实测数据。",
      "仓库 OpenMV 人脸检测示例尚未形成向 STM32 发送目标并控制云台的完整链路。",
      "姿态零偏历史记录与当前 AHRS 代码存在版本差异；不宣称已达到特定稳态误差。",
    ],
    visual: "gimbal",
    links: [
      { label: "GitHub 仓库", href: "https://github.com/czself/gimbal", external: true },
      {
        label: "控制主循环",
        href: "https://github.com/czself/gimbal/blob/main/Core/Src/main.c",
        external: true,
      },
      {
        label: "调试记录",
        href: "https://github.com/czself/gimbal/blob/main/DEBUG_LOG.md",
        external: true,
      },
    ],
  },
  {
    slug: "stm32-freertos-labs",
    index: "04",
    category: "Embedded",
    year: "STM32F103 · FREERTOS",
    title: "STM32 外设与 FreeRTOS 实验",
    subtitle: "寄存器 / HAL 双轨工程",
    summary:
      "围绕 STM32F103C8T6 整理编号 00–62 的实验目录，覆盖 GPIO、定时器、ADC/DMA、通信、低功耗与 FreeRTOS。",
    technologies: ["STM32F103", "C", "FreeRTOS", "PlatformIO", "DMA", "CAN"],
    facts: [
      { value: "63", label: "编号实验目录" },
      { value: "REG + HAL", label: "两种实现路径" },
      { value: "ADC / DMA", label: "采样与任务通知" },
      { value: "FreeRTOS", label: "同步与调度专题" },
    ],
    highlights: [
      "从寄存器与 HAL 两条路径学习 STM32 外设，覆盖 GPIO、PWM、UART、I²C、SPI、CAN 和 ADC。",
      "FreeRTOS 部分包括队列、信号量、互斥量、事件组、任务通知与软件定时器等专题。",
      "第 60 课围绕 FreeRTOS + ADC + DMA，第 61 课整理多外设综合系统，第 62 课为 LCD 显示。",
    ],
    boundaries: [
      "页面介绍仓库覆盖范围和代表入口，不表示 63 个实验已全部重新构建或逐项上板验收。",
      "仓库包含第三方参考资料和课程材料，来源及许可证按原仓库标注。",
    ],
    visual: "firmware",
    links: [
      {
        label: "GitHub 仓库",
        href: "https://github.com/czself/stm_regis_hal",
        external: true,
      },
      {
        label: "ADC / DMA 实验",
        href: "https://github.com/czself/stm_regis_hal/tree/main/stm32_full/60_freertos_adc_dma",
        external: true,
      },
      {
        label: "综合系统实验",
        href: "https://github.com/czself/stm_regis_hal/tree/main/stm32_full/61_small_system_project",
        external: true,
      },
    ],
  },
  {
    slug: "tinyvim-ide",
    index: "05",
    category: "Tools",
    year: "RUST · DEVELOPER TOOLING",
    title: "TinyVim 终端 IDE",
    subtitle: "Rust 编写的轻量开发工具",
    summary:
      "一个面向 C/C++ 与 Python 开发流程的终端编辑器项目，提供编辑预览、编译运行入口和多平台发布版本。",
    technologies: ["Rust", "Cargo", "C / C++", "Python", "GitHub Actions"],
    facts: [
      { value: "4", label: "平台发布目标" },
      { value: "Rust", label: "核心实现语言" },
      { value: "CI", label: "自动化构建记录" },
      { value: "CLI", label: "终端交互界面" },
    ],
    highlights: [
      "提供面向终端的代码编辑与预览体验，并将 C/C++、Python 的常见编译运行入口集成到工具内。",
      "仓库发布页提供四个平台的可执行文件与 Windows 启动脚本。",
      "以独立工具项目补充嵌入式与机器人系统之外的软件工程实践。",
    ],
    boundaries: [
      "这是开发工具项目，不属于机器人控制系统；发布与构建状态以仓库 Releases 和 Actions 为准。",
    ],
    visual: "terminal",
    links: [
      { label: "GitHub 仓库", href: "https://github.com/czself/TinyVim-IDE", external: true },
      {
        label: "Releases",
        href: "https://github.com/czself/TinyVim-IDE/releases",
        external: true,
      },
      {
        label: "CI 构建记录",
        href: "https://github.com/czself/TinyVim-IDE/actions",
        external: true,
      },
    ],
  },
];

export const featuredProjects = projects.slice(0, 4);
