# 部署日志

## 部署方式

代码推送到 GitHub `main` 分支 → Cloudflare Pages 自动部署（1-2 分钟）。

```bash
git add -A
git commit -m "描述改动"
git push origin main
```

## 2026-06-17 部署记录

### Batch 1：初始工具扩展

- 新增 10 个工具页（20→30）
- 更新 tools/index.html, sitemap.xml, 首页
- Commit: `629293a`

### Batch 2：博客 + Search Console

- 新增 10 篇 SEO 博客文章
- 创建 blog/index.html
- 全站导航加 Blog 链接
- 更新 sitemap.xml
- Google Search Console 验证 tag 加入 index.html
- Commit: `66c8e54`, `1fef787`

### Batch 3：工具扩展 Batch 2

- 新增 10 个工具页（30→40）
- 更新 tools/index.html, sitemap.xml, 首页
- Commit: `ad0d38e`

### Batch 4：工具扩展 Batch 3 + 博客

- 新增 10 个工具页（40→50）
- 新增 7 篇博客文章（10→17）
- 更新 tools/index.html, sitemap.xml, 首页
- Commit: `18e5832`

### Batch 5：工具扩展 Batch 4 + 博客

- 新增 5 个工具页（50→55）
- 新增 5 篇博客文章（17→22）
- 更新 tools/index.html, blog/index.html, sitemap.xml, 首页
- Commit: `da0f3a0`

### Batch 6：工具扩展 Batch 5 + 内容冲刺

- 新增 5 个工具页（55→60）
- 新增 8 篇博客文章（22→30）
- 更新 tools/index.html, blog/index.html, sitemap.xml, 首页与交接文档
- Commit: `849e53c`, `3d9c550`

## 验证结果

所有页面已验证 200 OK：

- 78 个工具页全部正常
- 43 篇博客文章全部正常
- 首页显示 "78 ready-to-use generators"
- 工具总页显示所有分类
- sitemap.xml 包含所有 URL
- Google Search Console 验证通过
- Cloudflare Web Analytics 数据收集正常

## 当前页面总数

- 78 个工具页
- 43 篇博客文章
- 1 个博客索引页
- 1 个工具索引页
- 5 个基础页面（首页, About, Contact, Privacy, Terms）
- 1 个 404 页面
- **总计：126 个 HTML 页面**

## 2026-06-21 AdSense readiness cleanup

- Added a longer meta description to `404.html`.
- Normalized absolute `.html` URLs inside structured data and other absolute URL fields.
- Extended `audit-adsense-readiness.js` to catch future sitemap or absolute `.html` URL regressions.
- Verified local audit: 78 tools, 43 blogs, 129 HTML pages, 128 sitemap URLs, `issues: []`.
- Verified live sitemap: 128 URLs, 0 `.html` URLs, 0 bad URLs.

## 2026-06-21 Blog Open Graph cleanup

- Added missing `og:description`, `og:url`, and `twitter:card` metadata to 16 older blog articles.
- Extended `audit-adsense-readiness.js` to validate canonical URL, Open Graph URL, H1 count, and unexpected `noindex`.
- Verified local audit again: 78 tools, 43 blogs, 129 HTML pages, 128 sitemap URLs, `issues: []`.
- Verified all 129 HTML pages have matching canonical and Open Graph URLs.

## 2026-06-22 Cloudflare Domain Normalization

- Configured canonical domain behavior in Cloudflare.
- `www.baiyeyun.xyz` now points to `baiyeyun.xyz` as a proxied CNAME.
- Enabled 301 redirects from `www` to apex HTTPS:
  - `https://www.baiyeyun.xyz/*` -> `https://baiyeyun.xyz/*`
  - `http://www.baiyeyun.xyz/*` -> `https://baiyeyun.xyz/*`
- Verified:
  - `https://baiyeyun.xyz/` -> 200
  - `http://baiyeyun.xyz/` -> 301 `https://baiyeyun.xyz/`
  - `https://www.baiyeyun.xyz/` -> 301 `https://baiyeyun.xyz/`
  - `http://www.baiyeyun.xyz/` -> 301 `https://baiyeyun.xyz/`
  - `https://www.baiyeyun.xyz/tools/business-name-generator` -> 301 `https://baiyeyun.xyz/tools/business-name-generator`

## 2026-06-22 Documentation Save Point

- Saved the current AdSense readiness status and next action plan into project handoff docs.
- Local audit still passes: 78 tools, 43 blogs, 129 HTML pages, 128 sitemap URLs, `issues: []`.
- Next manual platform task: re-submit sitemap in Google Search Console and inspect indexing coverage.

## 2026-06-22 Google Domain Verification DNS

- Used the Cloudflare / Google Domain Connect authorization flow for `baiyeyun.xyz`.
- Cloudflare added the Google Search Console verification TXT record:
  - `google-site-verification=AzkGHwqJWZFXcBGx0ia6Vni7a-s9DYUTBmFWa3MBb9g`
- Verified TXT propagation through public resolvers:
  - `1.1.1.1` returns the TXT record.
  - `8.8.8.8` returns the TXT record.
- Google login inside the in-app browser can still stall on the identifier page, so use a normal browser if the Search Console UI is needed.
