/**
 * 原点系列应用集中配置
 *
 * 维护说明：
 * - icon：放置在 /public/icons/ 目录下的 SVG/PNG 路径
 * - googlePlay / github / apk / privacy：留空字符串或省略则按钮不会渲染
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
  comingSoon?: boolean;
  links: {
    googlePlay?: string;
    github?: string;
    apk?: string;
    privacy?: string;
  };
}

export const apps: AppItem[] = [
  {
    id: 'pixel-telo',
    name: 'Pixel Telo',
    summary: '专为 Pixel 打造的来电识别与拦截应用，本地优先处理，隐私零泄露。',
    highlights: ['智能来电拦截', '原生通话记录联动', '自定义黑白名单'],
    icon: '/icons/pixel-telo.png',
    accent: 'blue',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.telo',
      github: 'https://github.com/Pixel-Tailor-CN/PixelTelo',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelTelo/raw/refs/heads/master/PRIVACY.md',
    },
  },
  {
    id: 'pixel-text',
    name: 'Pixel Text',
    summary: '为 Pixel 打造的本地智能短信应用，验证码、账单、快递一眼看清。',
    highlights: ['智能信息卡片化', '针对简体中文场景优化', '大模型自动识别骚扰内容'],
    icon: '/icons/pixel-text.png',
    accent: 'green',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.text',
      github: 'https://github.com/Pixel-Tailor-CN/PixelText',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelText/raw/refs/heads/master/PRIVACY.md',
    }
  },
  {
    id: 'pixel-meter',
    name: 'Pixel Meter',
    summary: '专为 Pixel 和原生 Android 设计的精准网速指示器。',
    highlights: ['状态栏网速', '高精度', '适配VPN', '原生方案'],
    icon: '/icons/pixel-meter.png',
    accent: 'yellow',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.meter',
      github: 'https://github.com/Pixel-Tailor-CN/PixelMeter',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelMeter/raw/refs/heads/master/PRIVACY_POLICY_CN.md',
    },
  },
  {
    id: 'pixel-geo',
    name: 'Pixel Geo',
    summary: '原点罗盘是一款精准优雅的指南针与定位工具，提供真北方向、实时经纬度及内置水平仪功能，助您轻松掌握方向。数据纯本地处理，安全可靠无广告。',
    highlights: ['指南针', '经纬度定位', '水平仪'],
    icon: '/icons/pixel-geo.png',
    accent: 'red',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.geo',
      github: 'https://github.com/Pixel-Tailor-CN/PixelGeo',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelGeo/raw/refs/heads/master/PRIVACY.md',
    },
  },
];
