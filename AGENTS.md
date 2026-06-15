# Pixel-Tailor-CN 门户网站

本文档是本仓库的项目规范和协作说明的唯一权威来源。后续需要修改项目说明、协作规则或开发约定时，请修改 `AGENTS.md`；`CLAUDE.md` 仅作为兼容 Claude Code 的指引壳，不承载项目规范。

本仓库包含 Pixel-Tailor-CN「原点系列」应用的官方静态门户落地页，为不完美的体验做精细的缝补。

## 技术栈

- Astro 6 静态站点
- Tailwind CSS v4，通过 `@tailwindcss/vite` 集成
- TypeScript，启用 Astro strict 配置
- pnpm 10
- Node.js 22 LTS 或更新版本
- Material Design 3 / Material You 视觉语言

## 开发命令

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm check
```

- `pnpm dev` 启动本地 Astro 开发服务器，通常位于 `http://localhost:4321`。
- `pnpm build` 构建静态产物到 `dist/`。
- `pnpm preview` 在本地预览构建结果。
- `pnpm check` 运行 Astro 类型和内容检查。

## 核心文件

### 配置中心

- `src/config/apps.ts` 是「原点系列」应用的集中配置，也是维护应用卡片、图标、点缀色和链接的主要入口。
- `src/config/site.ts` 包含站点身份信息和 SEO 元数据。
- `src/styles/global.css` 包含 Tailwind v4 `@theme` 变量和共享 Material Design 3 组件类。

### 页面与布局

- `src/pages/index.astro` 是首页入口。
- `src/layouts/Layout.astro` 包含全局布局、SEO 元数据和主题初始化脚本。

### 组件

- `src/components/Hero.astro` 是首屏区域。
- `src/components/AppMatrix.astro` 是「原点系列」应用网格。
- `src/components/AppCard.astro` 是单个应用卡片。
- `src/components/About.astro` 是关于区域和法律免责声明。
- `src/components/ThemeToggle.astro` 是主题切换按钮。
- `src/components/` 中的其他 Astro 单文件组件应保持小而聚焦。

### 静态资源

- `public/logo.svg` 是组织 Logo。
- `public/favicon.svg` 是站点图标。
- `public/icons/` 存放应用图标等静态资源。

## 开发指南

- 优先使用 Astro 单文件组件（`.astro`），保持组件小而聚焦。
- 优先使用 Tailwind 工具类编写样式。
- 主题变更应放在 `src/styles/global.css`，除非 Tailwind v4 配置确实需要，否则不要新增 `tailwind.config.js`。
- 使用 CSS 变量和现有 `.dark` class 方案处理暗黑模式，不要在组件层大量添加 `dark:` 变体。
- 结构化数据和配置使用 TypeScript。
- 添加项目代码注释时使用中文。
- 保持代码简洁，避免新增抽象，除非它能消除有意义的重复或符合现有本地模式。

## 验证约定

- 本项目后续代码改动不做单元测试，也不要新增单元测试框架或测试用例。
- 需要验证时，优先使用 `pnpm check`、`pnpm build` 和本地页面预览确认类型、构建与页面表现。

## 应用配置维护

编辑 `src/config/apps.ts` 时：

- `links.googlePlay`、`links.github`、`links.apk`、`links.privacy` 留空字符串时，对应按钮会自动隐藏。
- `icon` 应引用 `public/icons/` 下的资源。
- `accent` 应使用现有 Google 点缀色之一：`blue`、`red`、`yellow` 或 `green`。

替换应用图标时，将真实 SVG 或 PNG 放入 `public/icons/`，并在 `apps.ts` 中更新 `icon` 字段路径。替换组织 Logo 时更新 `public/logo.svg`。

## 站点信息与 SEO

调整品牌信息或 SEO 时，编辑 `src/config/site.ts` 中的 `name`、`description`、`seo.keywords` 等字段。

部署前请确认 `astro.config.mjs` 的 `site` 字段已改为真实域名，确保 SEO 和 Open Graph 元数据中的绝对 URL 正确。

## 主题与暗黑模式

主题变量位于 `src/styles/global.css` 的 `@theme { ... }` 块中，`.dark` 选择器覆盖暗色变量。

- M3 tonal surface 使用 `--color-surface-*` 系列。
- 主品牌色使用 `--color-primary`。
- Google 四色使用 `--color-google-blue`、`--color-google-red`、`--color-google-yellow`、`--color-google-green`。

暗黑模式规则：

- 默认跟随 `prefers-color-scheme` 系统设置。
- 用户手动切换后，会写入 `localStorage.theme` 并优先生效。
- 通过 `.dark` class 和 CSS 变量覆盖实现，组件层无需写 `dark:` 前缀。

## 部署

站点是完全静态的。构建产物位于 `dist/`，可部署到：

- Cloudflare Pages（构建命令 `pnpm build`，输出目录 `dist`）
- GitHub Pages
- 任意静态托管服务
- 自建 K3s / Nginx 静态服务

## 法律声明

Pixel-Tailor-CN 是独立开源项目，与 Google LLC 无任何关联。`Pixel` 是 Google LLC 的注册商标。
