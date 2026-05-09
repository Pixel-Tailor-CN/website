/**
 * 站点级配置：标题、描述、SEO、组织信息等
 */
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  author: {
    name: string;
    org: string;
    github: string;
  };
  seo: {
    keywords: string[];
    ogImage: string;
  };
  /** 完整品牌 Logo（用于 Hero 大图，可包含文字） */
  logo: string;
  /** 简化标识 mark（用于导航栏小尺寸场景） */
  mark: string;
}

export const site: SiteConfig = {
  name: 'Pixel-Tailor-CN',
  tagline: '为不完美的体验，做精细的缝补。',
  description:
    '专注于提升 Google Pixel 国内使用体验的开源工具集，强调原生 Android 体验、隐私至上与 Material You 适配。',
  url: 'https://pixel-tailor-cn.github.io',
  locale: 'zh-CN',
  author: {
    name: 'Mystery0',
    org: 'Pixel-Tailor-CN',
    github: 'https://github.com/Pixel-Tailor-CN',
  },
  seo: {
    keywords: [
      'Pixel 优化',
      'Android 原生工具',
      'Material You',
      'Mystery0',
      'Pixel-Tailor-CN',
      '原点系列',
      '开源 Android 工具',
    ],
    ogImage: '/og.png',
  },
  logo: '/logo.svg',
  mark: '/logo.svg',
};
