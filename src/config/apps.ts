/**
 * 应用矩阵集中配置
 *
 * 维护说明：
 * - icon：放置在 /public/icons/ 目录下的 SVG/PNG 路径
 * - googlePlay / github：留空字符串则按钮不会渲染
 * - accent：用于卡片悬停时的点缀色（Google 四色之一）
 */
export type AccentColor = 'blue' | 'red' | 'yellow' | 'green';

export interface AppItem {
  id: string;
  name: string;
  summary: string;
  highlights: string[];
  icon: string;
  accent: AccentColor;
  links: {
    googlePlay?: string;
    github?: string;
    apk?: string;
  };
}

export const apps: AppItem[] = [
  {
    id: 'pixel-telo',
    name: 'Pixel Telo',
    summary: '现代化的来电与通讯管理工具，纯粹的拦截体验。',
    highlights: ['智能来电拦截', '原生通讯录联动'],
    icon: '/icons/pixel-telo.png',
    accent: 'blue',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.telo',
      github: 'https://github.com/Pixel-Tailor-CN/pixel-telo',
    },
  },
  {
    id: 'pixel-text',
    name: 'Pixel Text',
    summary: '专为简体中文设计的短信解析应用，卡片式提取票据信息。',
    highlights: ['票据信息卡片化', '简体中文场景优化'],
    icon: '/icons/pixel-text.png',
    accent: 'green',
    links: {
      googlePlay: '',
      github: 'https://github.com/Pixel-Tailor-CN/pixel-text',
    },
  },
  {
    id: 'pixel-meter',
    name: 'Pixel Meter',
    summary: '高精度的状态栏网速监视器与流量统计工具。',
    highlights: ['毫秒级状态栏网速', '流量与连接统计'],
    icon: '/icons/pixel-meter.png',
    accent: 'yellow',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.meter',
      github: 'https://github.com/Pixel-Tailor-CN/pixel-meter',
    },
  },
  {
    id: 'pixel-geo',
    name: 'Pixel Geo',
    summary: '优雅的地理位置增强与网络环境辅助工具。',
    highlights: ['位置增强', '网络环境辅助'],
    icon: '/icons/pixel-geo.png',
    accent: 'red',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.geo',
      github: 'https://github.com/Pixel-Tailor-CN/pixel-geo',
    },
  },
];
