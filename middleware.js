// EdgeOne Pages 中间件：仅随国际站项目部署，把中国大陆访客从国际站跳转到国内站。
// 每次触发都计入 Edge Functions 执行次数，所以 matcher 只匹配首页，
// 静态资源和 /support/* 不经过中间件，应用读取的赞助配置也不会被跳转。

const INTL_HOST = 'pixel.mystery0.app';
const MAINLAND_HOST = 'pixel.mystery0.vip';

export function middleware(context) {
  const { request, geo, next, redirect } = context;
  const url = new URL(request.url);

  // 限定来源域名，避免预览域名或国内站自身被跳转造成循环
  if (url.hostname === INTL_HOST && geo?.countryCodeAlpha2 === 'CN') {
    url.hostname = MAINLAND_HOST;
    return redirect(url.toString(), 302);
  }

  return next();
}

export const config = {
  matcher: ['/'],
};
