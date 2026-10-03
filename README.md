# 施震 · 嵌入式与机器人作品集

个人作品集与实习简历，围绕 ROS 仿真、STM32 控制、FreeRTOS 与机器人团队协作项目。首页以真实仿真截图和验收数据作为主案例，再展开项目档案、技能方向与简历；项目内容与页面组件分离，详情页链接到对应仓库和验证记录。

## 本地运行

需要 Node.js 20.19+ 或 22.12+。

1. 安装依赖：npm install
2. 启动开发服务器：npm run dev
3. 类型检查：npm run check
4. 生产构建：npm run build
5. 本地预览：npm run preview

## 页面

- 首页：个人定位、项目数据概览、ROS 主案例实图与审计结果、嵌入式/机器人技能卡片。
- 项目索引：按机器人、嵌入式、开发工具筛选。
- 项目详情：架构、代码入口、数据口径与项目边界。
- 简历：可下载的一页 A4 PDF，也可用浏览器打印窗口另存。

网站使用 React、TypeScript、Vite、Tailwind CSS 4 和 React Router hash 路由；hash 路由可直接部署为静态站点。

## GitHub Pages

仓库已附 GitHub Actions workflow。将此目录内容推送到 GitHub 默认分支，并在仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions，后续 push 会自动构建并发布。

VITE_BASE_PATH 会按仓库名自动设置，项目站点与 username.github.io 根站点均可使用。GitHub 当前对自定义 Pages workflow 的标准流程为构建、上传 Pages artifact 和部署 artifact。[GitHub Pages workflow 文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## 内容边界

作品集里的仿真统计明确标为 Gazebo 仿真结果；RM2026 标为团队协作并只列出可核实的个人提交；云台 5 ms 是源码目标周期，不是实测性能；STM32 实验页不表示所有课程均重新构建或全部上板通过。非实机项目图使用结构示意，并明确标注。

公开联系方式：施震 · 18379697488。
