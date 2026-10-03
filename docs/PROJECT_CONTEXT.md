# 施震 · 机器人与嵌入式软件作品集

## 目标与公开资料

- 目标岗位：嵌入式软件 / 机器人研发实习；城市不限。
- 姓名：施震。
- 学校与专业：豫章师范学院，软件工程。
- 毕业时间：预计 2029 年。
- 联系方式：18379697488。用户明确提供用于简历与展示页面。
- GitHub：czself；Gitee：sz___sz。

## 项目展示顺序

1. ROS 1 Noetic / Gazebo 智慧社区巡检机器人仿真。
2. RM2026 英雄机器人战队协作与可核实个人提交。
3. STM32F407 + BMI088 + GM6020 双轴云台。
4. STM32F103 / FreeRTOS 外设实验集。
5. TinyVim Rust 终端 IDE（补充项目）。

没有把先前对话中提及、但仓库证据无法确认的 ESP32-S3 四足机器人或个人哨兵职责写入简历。

## 项目事实与限制

- ROS：ROS 1 Noetic / Gazebo Classic；完整任务验收 16/20，车牌字符正确 58/60，平均 136.309 仿真秒；实际车身同时满足 3 cm 与 0.04 rad 回位标准为 0/20。明确标注仿真，保留失败轮次。
- RM2026：仓库由 eternal-laws 战队维护。三条提交作者为 sz___sz，分别涉及 integrated_demo、UART/RTT 日志与 Windows OpenOCD 烧录流程；不代表整机独立完成或比赛成绩。
- 云台：STM32F407IGH6、BMI088 SPI、Mahony AHRS、Yaw/Pitch 双轴 GM6020、CAN、串级 PID、VOFA+。5 ms 是源码目标循环，不是实测性能；OpenMV 示例未与云台形成完整目标跟踪闭环。
- STM32 教程：编号 00–62 共 63 个实验目录，覆盖寄存器 / HAL 与 FreeRTOS；不宣称全部重建或逐项上板。
- TinyVim：Rust 终端工具，仓库提供四个平台发行版本及 CI 记录。
- 自制头像为机器人风格原创插画，不是实人照片；已输出网页 WebP 与 GitHub PNG。

仓库盘点与整理报告是独立的本地工作材料，不作为此网站仓库内容分发。

## 实现

React 19、TypeScript、Vite 8、Tailwind CSS 4、React Router hash 路由；页面含首页、项目索引/筛选、五个项目详情、打印简历。静态 GitHub Pages workflow 已配置 Vite base path。

首页采用深色编辑式布局：突出求职方向，首屏使用真实 Gazebo 仿真证据帧，主案例同时展示任务时间图与 20 轮数据，其他项目和技能按视觉层级展开。手机端以 320 px 为最窄检查宽度。

## 账号资料

网站源码目标仓库为 `czself/resume`。个人主页 README 草稿与头像素材放在 `github-profile/`；GitHub 账号简介和账号头像需要单独设置。说明见 `github-profile/ACCOUNT_SETUP.md`。

## 验收状态

- 页面与项目内容：完成。
- 类型检查与生产构建：通过；npm 安装审计为 0 vulnerabilities。
- 桌面与 320 px 手机浏览器：首页、筛选、五个项目详情、简历和 404 路由均检查，无横向溢出。
- 交互：项目分类筛选、移动导航打开/关闭和页首按钮已验证。
- GitHub Pages：根站点与 /robotics-portfolio/ 子路径均构建成功；子路径下脚本、样式、头像、图表、仿真截图和 PDF 均返回 200，浏览器控制台无错误。首次 GitHub Actions 发布在上传后核验。
- 简历 PDF：浏览器打印生成，A4 单页；PDF 文本和下载路径可读。
- GitHub 账号个人主页 README 与账号头像设置尚未更改；Gitee 远程仓库未写入。
