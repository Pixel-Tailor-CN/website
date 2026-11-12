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
- `src/config/support.ts` 集中管理赞助渠道，供首页和应用配置 JSON 共用。
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

### TensorIMS 资料维护

- TensorIMS 沿用首页 `AppCard`，内部入口为 `/#tensorims`，没有单独详情页。列表优先展示 Pixel Telo、Pixel Text、Pixel Meter 和 Pixel Snooze，TensorIMS 放在最后。卡片不显示维护者；`requirements`、`history` 和 `details` 在 `AppDetails` 弹窗内展示支持范围、旧名说明与使用须知；`links.docs`、`links.issues` 提供文档与反馈入口。
- 功能资料于 2026-09-12 对照 [正式版 3.7.4.r135.3a9c68f2](https://github.com/Pixel-Tailor-CN/TensorIMS/releases/tag/3.7.4.r135.3a9c68f2)、该标签的 `README_CN.md` 和 `app/src/main/res/values-zh-rCN/strings.xml` 核实。后续更新应再次核对正式版，不能直接把开发分支功能当作已发布能力。
- 实验性持久化仅保留 VoLTE 开启设置，需兼容系统接口、设备及运营商；其他 IMS、5G 配置仍需 Shizuku 重新应用。介绍时保留系统更新、换卡及卸载前恢复的限制。
- `public/icons/tensorims.png` 原样复用上述版本的 `app/src/main/ic_launcher-playstore.png`。项目说明该图标源于 iconfont 并经修改，来源与鸣谢见 [中文文档](https://github.com/Pixel-Tailor-CN/TensorIMS/blob/master/README_CN.md)。

## 赞助配置维护

- 应用读取 `https://pixel.mystery0.app/support/config.json`；它由 `src/pages/support/config.json.ts` 在构建时生成，修改 `src/config/support.ts` 后须重新构建并部署，开发服务器上的修改不会自动发布到官网。
- `schemaVersion` 是整数版本号，当前为 `1`。破坏性变更应升级版本，旧版应用遇到不支持的版本须显示不可用并允许重试，不可尝试猜测字段含义。
- 顶层 `enabled` 和每个渠道的 `enabled` 均为布尔值，`false` 表示停用。停用时首页同步隐藏对应入口；顶层停用或无可用渠道时首页隐藏整个赞助区。
- `channels` 是数组，当前仅包含 `id` 为 `alipay`、`wechat` 的渠道。`qrCodeUrl` 是根据 `src` 和站点域名生成的绝对 HTTPS 图片地址，图片保存在 `public/support/`。当前 Pixel Text 只接受 `https://pixel.mystery0.app/support/` 下的资源，地址不得包含查询参数、片段、编码路径或路径穿越。更新时核对图片对应的真实收款方，并检查文件在部署产物中存在。
- `paymentUrl` 是可选的收款页链接；仅在确认对应渠道支持、且经真机验证后填写，不得编造跳转协议。当前 Pixel Text 只接受没有用户名密码、显式端口和片段的 HTTPS 链接；`alipay` 仅允许主机 `qr.alipay.com`，`wechat` 仅允许主机 `payapp.weixin.qq.com`。这些限制只是客户端安全白名单，不表示对应主机上的任意地址都有可用的收款跳转能力。当前不提供该字段；没有已验证可用的链接时继续缺省，应用应降级为打开对应应用首页，并保留收款码和保存入口；打开应用不等于发起支付或支付成功。
- 应用不得把远程字段直接作为包名、任意 Intent 或未经校验的跳转目标。名称、说明、包名和纯自愿赞助文案由应用内固定维护，赞助不兑换功能或其他数字权益。
- 空响应、`null`、非法 JSON、缺失/类型错误的必要字段、未知版本、没有有效渠道、HTTP 错误和网络超时均应安全显示不可用或失败与重试；单个无效渠道应隔离，不能导致其他有效渠道或应用崩溃。未知新增字段应忽略；`paymentUrl` 缺失或无效时只禁用直达收款页能力。
- 接口只下发公开静态配置，不需要客户端上传短信、手机号、设备或安装标识，不查询交易记录，也不提供支付结果回调。托管服务的访问日志仍按其配置处理。
- JSON 是供应用使用的机器配置，不是独立内容页面，不加入 sitemap。发布后检查配置返回 JSON、引用图片可访问，并按托管环境需要刷新 CDN 缓存。

当前 JSON 示例：

```json
{
  "schemaVersion": 1,
  "enabled": true,
  "channels": [
    {
      "id": "alipay",
      "enabled": true,
      "qrCodeUrl": "https://pixel.mystery0.app/support/alipay.jpg"
    },
    {
      "id": "wechat",
      "enabled": true,
      "qrCodeUrl": "https://pixel.mystery0.app/support/wechat.png"
    }
  ]
}
```

## 站点信息与 SEO

调整品牌信息或 SEO 时，编辑 `src/config/site.ts` 中的 `name`、`description`、`seo.keywords` 等字段。

部署前请确认 `astro.config.mjs` 的 `site` 字段已改为真实域名，确保 SEO 和 Open Graph 元数据中的绝对 URL 正确。

`src/pages/sitemap.xml.ts` 生成首页 sitemap，`public/robots.txt` 声明其地址；项目锚点不单独收录。新增独立页面时同步更新 sitemap，变更域名时同时更新 robots 中的地址。

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

推送到 `main` 后，`.github/workflows/deploy.yml` 构建后先部署到 GitHub Pages，再部署到 EdgeOne Pages 国内站账号（`--site china`）的 `pixel-tailor-cn` 项目，项目名和站点写在工作流中。

- 仓库 Secret `EDGEONE_API_TOKEN`：在 EdgeOne Pages 控制台的「API Token」页创建，有效期最长一年，到期前须更换；缺失或过期时部署失败。
- `pixel-tailor-cn` 是「直接上传」类型项目，加速区域须为「全球可用区（不含中国大陆）」，其他区域要求域名备案。
- 过渡期内工作流仍先部署到 GitHub Pages，`CNAME` 文件为其保留自定义域名。DNS 切到 EdgeOne Pages 并确认无误后，删除工作流中的 GitHub Pages 步骤和 `CNAME` 文件，并更新本节。
- 自定义域名 `pixel.mystery0.app` 在 EdgeOne Pages 控制台的域名管理中绑定。

`edgeone.json` 定义 EdgeOne Pages 的响应头：`/support/config.json` 缓存 5 分钟，`/_astro/*` 长期缓存。应用读取的域名 `pixel.mystery0.app` 不得变更，切换托管只改 DNS 指向。

站点是完全静态的。构建产物位于 `dist/`，也可部署到：

- Cloudflare Pages（构建命令 `pnpm build`，输出目录 `dist`）
- GitHub Pages
- 任意静态托管服务
- 自建 K3s / Nginx 静态服务

## 法律声明

Pixel-Tailor-CN 是独立开源项目，与 Google LLC 无任何关联。`Pixel` 是 Google LLC 的注册商标。
