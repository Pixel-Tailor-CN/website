import type { APIRoute } from 'astro';
import { site } from '@/config/site';

// 当前站点只有首页，项目锚点不作为独立页面收录。
export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${new URL('/', site.url).href}</loc></url>
</urlset>`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
