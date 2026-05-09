# Pixel-Tailor-CN 门户网站

「原点系列」官方门户落地页，为不完美的体验做精细的缝补。

## 技术栈

- **框架**: Astro 6 — 零 JS 默认输出，纯静态高性能
- **样式**: Tailwind CSS v4 — 通过 `@tailwindcss/vite` 集成，CSS 原生 `@theme` 主题配置
- **包管理**: pnpm 10
- **运行时**: Node.js 22 LTS+
- **设计语言**: Material Design 3 (Material You)

## 开发命令

```bash
pnpm dev      # 启动开发服务器 (http://localhost:4321)
pnpm build    # 构建静态产物到 dist/
pnpm preview  # 本地预览构建结果
pnpm check    # 类型 + 内容检查
```

## 核心文件

### 配置中心
- [src/config/apps.ts](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/config/apps.ts?type=file&root=%252F) — **原点系列应用集中配置**（核心维护点）
- [src/config/site.ts](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/config/site.ts?type=file&root=%252F) — 站点信息 / SEO 配置
- [src/styles/global.css](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/styles/global.css?type=file&root=%252F) — `@theme` 主题变量 + M3 组件类

### 页面与布局
- [src/pages/index.astro](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/pages/index.astro?type=file&root=%252F) — 首页
- [src/layouts/Layout.astro](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/layouts/Layout.astro?type=file&root=%252F) — 全局布局 + SEO + 主题脚本

### 组件
- [src/components/Hero.astro](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/components/Hero.astro?type=file&root=%252F) — 首屏
- [src/components/AppMatrix.astro](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/components/AppMatrix.astro?type=file&root=%252F) — 原点系列网格
- [src/components/AppCard.astro](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/components/AppCard.astro?type=file&root=%252F) — 单个应用卡片
- [src/components/About.astro](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/components/About.astro?type=file&root=%252F) — 关于 + 法律免责声明
- [src/components/ThemeToggle.astro](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/components/ThemeToggle.astro?type=file&root=%252F) — 主题切换按钮

## 维护指南

### 修改应用信息
编辑 [src/config/apps.ts](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/config/apps.ts?type=file&root=%252F)：
- `links.googlePlay` / `links.github` / `links.apk` / `links.privacy` — **留空字符串则对应按钮自动隐藏**
- `icon` — 图标路径（放置在 `public/icons/` 目录）
- `accent` — 卡片悬停点缀色（Google 四色之一：blue/red/yellow/green）

### 替换图标资源
将真实 SVG/PNG 放入 `public/icons/`，并在 `apps.ts` 中更新 `icon` 字段路径。组织 Logo 替换 `public/logo.svg`。

### 调整品牌信息 / SEO
编辑 [src/config/site.ts](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/config/site.ts?type=file&root=%252F) 中的 `name` / `description` / `seo.keywords` 等字段。

### 调整主题色
主题变量在 [src/styles/global.css](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/src/styles/global.css?type=file&root=%252F) 的 `@theme { ... }` 块中，`.dark` 选择器覆盖暗色变量。**不需要 tailwind.config.js**。

- M3 tonal surface：`--color-surface-*` 系列
- 主品牌色：`--color-primary`
- Google 四色：`--color-google-blue / red / yellow / green`

### 暗黑模式
- 默认跟随 `prefers-color-scheme` 系统设置
- 用户手动切换后，会写入 `localStorage.theme` 优先生效
- 通过 `.dark` class + CSS 变量覆盖实现，组件层无需写 `dark:` 前缀

## 部署

构建产物为纯静态文件（`dist/`），可直接托管至：
- Cloudflare Pages（构建命令 `pnpm build`，输出 `dist`）
- GitHub Pages
- 自建 K3s / Nginx 静态服务

部署前请将 [astro.config.mjs](air-file://t51k3ebqt8633v8fqcks/Users/mystery0/air/website/astro.config.mjs?type=file&root=%252F) 中的 `site` 字段改为真实域名，确保 SEO / Open Graph 元数据中的绝对 URL 正确。

## 代码规范

- 使用中文注释
- 组件采用 Astro 单文件格式（`.astro`）
- 样式优先使用 Tailwind 工具类
- 类型定义使用 TypeScript
- 保持代码简洁，避免过度抽象

## 法律声明

Pixel-Tailor-CN 是一个独立的开源项目，与 Google LLC 无任何关联。"Pixel" 是 Google LLC 的注册商标。
