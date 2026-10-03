export const skillGroups = [
  {
    number: "01",
    title: "Embedded",
    description: "从外设驱动到实时任务",
    items: ["STM32F1 / F4", "FreeRTOS", "C", "GPIO · UART · SPI · I²C · CAN", "ADC · DMA · PWM"],
  },
  {
    number: "02",
    title: "Robotics",
    description: "控制、导航与系统联调",
    items: ["ROS 1 Noetic", "Gazebo Classic", "AMCL · GMapping", "PID", "Robot integration"],
  },
  {
    number: "03",
    title: "Perception",
    description: "图像处理与识别流程集成",
    items: ["OpenCV", "YOLO integration", "PaddleOCR", "Multi-frame validation"],
  },
  {
    number: "04",
    title: "Engineering",
    description: "构建、调试与开发工具",
    items: ["Linux", "Git", "CMake", "PlatformIO", "Rust · Python"],
  },
] as const;
