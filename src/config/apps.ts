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
    summary: '专为 Pixel 和类原生 Android 设计的来电识别与拦截应用，与系统拨号器深度集成。',
    highlights: ['来电识别拦截', '归属地与标签规则', '本地优先查询'],
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
    summary: '面向国内 Pixel 用户的 SMS/MMS 短信应用，把验证码、账单、快递等服务短信整理成卡片。',
    highlights: ['默认短信应用', '服务短信卡片', '端侧骚扰识别'],
    icon: '/icons/pixel-text.png',
    accent: 'green',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.text',
      github: 'https://github.com/Pixel-Tailor-CN/PixelText',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelText/raw/refs/heads/main/PRIVACY.md',
    }
  },
  {
    id: 'pixel-meter',
    name: 'Pixel Meter',
    summary: '专为 Pixel 和原生 Android 设计的网速监控工具，过滤 VPN 虚拟接口，显示更准确的实时速度。',
    highlights: ['VPN 流量过滤', '通知栏与悬浮窗', '快捷设置开关'],
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
    summary: '专业罗盘与定位工具，提供真北/磁北切换、WGS-84 坐标和水平仪，传感器与定位数据本地处理。',
    highlights: ['真北/磁北', 'WGS-84 坐标', '水平仪与分享'],
    icon: '/icons/pixel-geo.png',
    accent: 'red',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.geo',
      github: 'https://github.com/Pixel-Tailor-CN/PixelGeo',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelGeo/raw/refs/heads/master/PRIVACY.md',
    },
  },
];
