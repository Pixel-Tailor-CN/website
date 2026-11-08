import { site } from './site';

export interface SupportChannel {
  id: 'alipay' | 'wechat';
  enabled: boolean;
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  chip: string;
  /** 仅填写已验证、可直接进入对应渠道收款页的链接。 */
  paymentUrl?: string;
}

// 首页和应用配置共用此处的开关与收款码，修改后需重新构建并部署。
export const supportConfig = {
  schemaVersion: 1,
  enabled: true,
};

export const supportChannels: SupportChannel[] = [
  {
    id: 'alipay',
    enabled: true,
    name: '支付宝',
    src: '/support/alipay.jpg',
    alt: '支付宝收款码',
    width: 1080,
    height: 1621,
    chip: 'bg-google-blue/10 text-[#185ABC] dark:text-google-blue',
  },
  {
    id: 'wechat',
    enabled: true,
    name: '微信',
    src: '/support/wechat.png',
    alt: '微信收款码',
    width: 1123,
    height: 1527,
    chip: 'bg-google-green/10 text-[#137333] dark:text-google-green',
  },
];

/** 仅公开应用所需字段，不下发任意包名、Intent 或远程界面文案。 */
export function getSupportManifest() {
  return {
    ...supportConfig,
    channels: supportChannels.map((channel) => ({
      id: channel.id,
      enabled: channel.enabled,
      qrCodeUrl: new URL(channel.src, site.url).href,
      ...(channel.paymentUrl ? { paymentUrl: channel.paymentUrl } : {}),
    })),
  };
}
