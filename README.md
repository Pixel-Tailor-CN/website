# Pixel-Tailor-CN 门户网页

> 为不完美的体验，做精细的缝补。

「原点系列」的官方门户落地页。

## 技术栈

- **构建工具**：[Astro 6](https://astro.build/) — 零 JS 默认输出，纯静态高性能
- **样式**：[Tailwind CSS v4](https://tailwindcss.com/) — 通过 `@tailwindcss/vite` 集成，CSS 原生 `@theme` 主题配置
- **包管理**：[pnpm 10](https://pnpm.io/)
- **运行时**：Node.js 22 LTS+
- **设计语言**：Material Design 3 (Material You)

## 环境要求

```bash
node --version   # >= 22
pnpm --version   # >= 10
```

如未安装 pnpm：

```bash
# 通过 corepack（Node 22 自带，推荐）
corepack enable
corepack prepare pnpm@latest --activate

# 或通过 npm
npm install -g pnpm
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认 http://localhost:4321）
pnpm dev

# 构建静态产物到 dist/
pnpm build

# 本地预览构建结果
pnpm preview

# 类型 + 内容检查
pnpm check
```

## 目录结构

```
.
├── astro.config.mjs          # Astro 主配置（注入 @tailwindcss/vite 插件）
├── package.json              # 锁定 pnpm 包管理器、Node 22+ 引擎
├── public/
│   ├── favicon.svg
│   ├── logo.svg              # 组织 Logo（待替换为正式素材）
│   └── icons/                # 应用图标占位 SVG（待替换）
└── src/
    ├── pages/
    │   └── index.astro       # 首页
    ├── layouts/
    │   └── Layout.astro      # 全局布局 + SEO + 主题脚本
    ├── components/
    │   ├── Hero.astro        # 首屏
    │   ├── AppMatrix.astro   # 原点系列网格
    │   ├── AppCard.astro     # 单个应用卡片
    │   ├── About.astro       # 关于 + 法律免责声明
    │   ├── Footer.astro
    │   └── ThemeToggle.astro # 主题切换按钮
    ├── config/
    │   ├── site.ts           # 站点信息 / SEO 配置
    │   └── apps.ts           # 原点系列集中配置（核心维护点）
    └── styles/
        └── global.css        # @theme 主题变量 + M3 组件类
```

## 维护指南

### 替换应用下载链接

打开 [src/config/apps.ts](src/config/apps.ts)，编辑 `links.googlePlay` / `links.github` / `links.apk`。**留空字符串则对应按钮自动隐藏**。

### 替换图标资源

将真实 SVG/PNG 放入 `public/icons/`，并在 `apps.ts` 中更新 `icon` 字段路径。组织 Logo 替换 `public/logo.svg`。

### 调整品牌信息 / SEO

编辑 [src/config/site.ts](src/config/site.ts) 中的 `name` / `description` / `seo.keywords` 等字段。

### 调整主题色（Tailwind v4）

主题变量在 [src/styles/global.css](src/styles/global.css) 的 `@theme { ... }` 块中，`.dark` 选择器覆盖暗色变量。**不需要 tailwind.config.js**。

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

部署前请将 `astro.config.mjs` 中的 `site` 字段改为真实域名，确保 SEO / Open Graph 元数据中的绝对 URL 正确。

## 法律声明

Pixel-Tailor-CN 是一个独立的开源项目，与 Google LLC 无任何关联。"Pixel" 是 Google LLC 的注册商标。
