/**
 * 原点系列应用集中配置
 *
 * 维护说明：
 * - icon：放置在 /public/icons/ 目录下的 SVG/PNG 路径
 * - googlePlay / github / apk / privacy：留空字符串或省略则按钮不会渲染
 * - accent：用于卡片悬停时的点缀色（Google 四色之一）
 * - scene：中文场景名，承担扫读；summary 只补充增量信息，避免重复 scene
 */
export type AccentColor = 'blue' | 'red' | 'yellow' | 'green';

export interface AppItem {
  id: string;
  name: string;
  scene: string;
  summary: string;
  highlights: string[];
  icon: string;
  accent: AccentColor;
  comingSoon?: boolean;
  requirements?: string;
  history?: string;
  details?: { title: string; text: string }[];
  links: {
    googlePlay?: string;
    github?: string;
    apk?: string;
    privacy?: string;
    docs?: string;
    issues?: string;
  };
}

export const apps: AppItem[] = [
  {
    id: 'pixel-telo',
    name: 'Pixel Telo',
    scene: '来电识别与拦截',
    summary: '面向 Pixel 和类原生 Android，与系统拨号器深度集成。',
    highlights: ['来电识别拦截', '归属地与标签规则', '本地优先查询'],
    icon: '/icons/pixel-telo.png',
    accent: 'blue',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.telo',
      github: 'https://github.com/Pixel-Tailor-CN/PixelTelo',
      apk: 'https://github.com/Pixel-Tailor-CN/PixelTelo/releases/latest',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelTelo/raw/refs/heads/master/PRIVACY.md',
    },
  },
  {
    id: 'pixel-text',
    name: 'Pixel Text',
    scene: '短信与验证码',
    summary: '把验证码、账单、快递等服务短信整理成卡片，可作为默认短信应用。',
    highlights: ['默认短信应用', '服务短信卡片', '端侧骚扰识别'],
    icon: '/icons/pixel-text.png',
    accent: 'green',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.text',
      github: 'https://github.com/Pixel-Tailor-CN/PixelText',
      apk: 'https://github.com/Pixel-Tailor-CN/PixelText/releases/latest',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelText/raw/refs/heads/main/PRIVACY.md',
    }
  },
  {
    id: 'pixel-meter',
    name: 'Pixel Meter',
    scene: '网速监控',
    summary: '过滤 VPN 虚拟接口，在通知栏和悬浮窗显示更准确的实时速度。',
    highlights: ['VPN 流量过滤', '通知栏与悬浮窗', '快捷设置开关'],
    icon: '/icons/pixel-meter.png',
    accent: 'yellow',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.meter',
      github: 'https://github.com/Pixel-Tailor-CN/PixelMeter',
      apk: 'https://github.com/Pixel-Tailor-CN/PixelMeter/releases/latest',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelMeter/raw/refs/heads/master/PRIVACY_POLICY_CN.md',
    },
  },
  {
    id: 'pixel-snooze',
    name: 'Pixel Snooze',
    scene: '休息日闹钟辅助',
    summary: '在休息日自动处理 Google/AOSP 时钟通知里的跳过或关闭操作。',
    highlights: ['休息日判断', '通知监听跳过', '调休日历缓存'],
    icon: '/icons/pixel-snooze.png',
    accent: 'blue',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.snooze',
      github: 'https://github.com/Pixel-Tailor-CN/PixelSnooze',
      apk: 'https://github.com/Pixel-Tailor-CN/PixelSnooze/releases/latest',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelSnooze/raw/refs/heads/main/PRIVACY.md',
    },
  },
  {
    id: 'pixel-geo',
    name: 'Pixel Geo',
    scene: '罗盘与定位',
    summary: '提供真北/磁北切换、WGS-84 坐标和水平仪，传感器与定位数据本地处理。',
    highlights: ['真北/磁北', 'WGS-84 坐标', '水平仪与分享'],
    icon: '/icons/pixel-geo.png',
    accent: 'red',
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=vip.mystery0.pixel.geo',
      github: 'https://github.com/Pixel-Tailor-CN/PixelGeo',
      apk: 'https://github.com/Pixel-Tailor-CN/PixelGeo/releases/latest',
      privacy: 'https://github.com/Pixel-Tailor-CN/PixelGeo/raw/refs/heads/master/PRIVACY.md',
    },
  },
  {
    id: 'tensorims',
    name: 'TensorIMS',
    scene: 'Pixel Tensor 的 IMS 配置',
    summary: '通过 Shizuku 管理 VoLTE、VoWiFi 等通话与网络配置，无需 root。',
    highlights: ['VoLTE / VoWiFi', '按 SIM 配置', 'Shizuku 授权'],
    icon: '/icons/tensorims.png',
    accent: 'green',
    requirements: 'Android 13 及以上，仅支持搭载 Google Tensor 芯片的 Pixel 设备。主要维护中国大陆的中国移动、中国联通、中国电信网络。',
    history: '原 Mystery00/TurboIMS，现以 TensorIMS 名称继续维护；曾更名为 Mystery00/TensorIMS，后迁移至 Pixel-Tailor-CN。更名仅针对本维护版本。',
    details: [
      {
        title: '可以配置什么',
        text: '支持 VoLTE、VoWiFi、视频通话、VoNR（需 Android 14+）、Cross-SIM Calling（跨卡通话）、UT 补充业务及 5G NSA / SA 配置。先启动并授权 Shizuku，再选择 SIM 卡、调整选项并应用配置。配置开关不代表运营商已开通对应服务。',
      },
      {
        title: '支持与维护边界',
        text: '其他运营商因缺少设备、SIM 卡和网络测试条件，不作为主要适配与维护对象；这不表示其他网络一定无法使用，也不保证三大运营商下所有功能均可用。实际效果取决于设备、系统、SIM 卡及网络。',
      },
      {
        title: '实验性持久化 VoLTE',
        text: '正式版 3.7.4 已提供。需设备支持所需系统接口，且设备与运营商兼容；首次读取、启用或恢复时需要启动并授权 Shizuku，并选择单张 SIM。正常重启后可无需启动 Shizuku 继续使用 VoLTE，但应验证实际通话。仅保留 VoLTE 开启设置；5G、VoWiFi、VoNR 等额外配置重启后仍需 Shizuku 重新应用。系统更新或换卡后可能需要重新启用；卸载或清除数据前请先恢复原设置，以免丢失恢复记录。',
      },
    ],
    links: {
      github: 'https://github.com/Pixel-Tailor-CN/TensorIMS',
      apk: 'https://github.com/Pixel-Tailor-CN/TensorIMS/releases/latest',
      docs: 'https://github.com/Pixel-Tailor-CN/TensorIMS/blob/master/README_CN.md',
      issues: 'https://github.com/Pixel-Tailor-CN/TensorIMS/issues',
    },
  },
];
