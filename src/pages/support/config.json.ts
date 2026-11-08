import type { APIRoute } from 'astro';
import { getSupportManifest } from '@/config/support';

// 构建为静态 JSON，不接收用户信息，也不创建支付订单。
export const prerender = true;

export const GET: APIRoute = () => new Response(
  JSON.stringify(getSupportManifest(), null, 2),
  { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
);
