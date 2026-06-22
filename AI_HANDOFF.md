# AI 接管说明

## 项目一句话

英文 Name Generator 静态工具站，域名 baiyeyun.xyz，部署在 Cloudflare Pages，通过 GitHub 推送自动部署。

## 当前完成度

- [x] 方向已定
- [x] 网站结构已定
- [x] 网站文件已生成
- [x] SEO 基础文件已生成
- [x] 域名已写入站点文件
- [x] GitHub 仓库创建与上传
- [x] Cloudflare Pages 发布
- [x] 自定义域名绑定验证
- [x] 工具页扩展至 78 个
- [x] SEO 博客文章 43 篇
- [x] Google Search Console 验证 + sitemap 提交
- [x] Cloudflare Web Analytics 启用
- [x] 更多博客文章（目标 30+ 篇，当前 43）
- [ ] AdSense 申请（域名满 6 个月后）

## 技术栈

- HTML / CSS / 原生 JavaScript
- GitHub（源码管理）
- Cloudflare Pages（自动部署）
- 零后端、零数据库、零付费服务

## 接手时不要改的方向

- 不要改成 WordPress
- 不要加数据库
- 不要接付费 AI API
- 不要拆成多站
- 不要改成中文站
- 不要改仓库名

## 接手时优先做的事

1. 检查 https://baiyeyun.xyz/ 是否正常
2. 读 RETURN_LATER.md 和 PROJECT_DEV_LOG.md
3. 继续扩展工具页
4. 继续写博客文章
5. 等域名满 6 个月后申请 AdSense

## 页面结构

```
/
├── index.html                    # 首页
├── tools/
│   ├── index.html                # 工具总页
│   ├── business-name-generator.html
│   ├── youtube-name-generator.html
│   └── ... (78 个工具页)
├── blog/
│   ├── index.html                # 博客索引
│   ├── how-to-choose-a-business-name.html
│   └── ... (43 篇博客)
├── assets/
│   ├── styles.css
│   └── app.js
├── about.html
├── contact.html
├── privacy.html
├── terms.html
├── 404.html
├── robots.txt
├── sitemap.xml
└── _headers
```

## 78 个工具页完整列表

### Creator（10 个）
YouTube / TikTok / Instagram / Discord / Podcast / Blog / Band / Twitch / Twitter / Email Newsletter

### Business（37 个）
Business / Brand / Shop / Bakery / Clothing Brand / Etsy Shop / Restaurant / Coffee Shop / Photography Business / Hair Salon / Startup / Gym / Real Estate / Cleaning Business / Law Firm / Spa / Food Truck / Agency / Studio / Barbershop / Bar / Tattoo Shop / Nail Salon / Plumbing / Landscaping / Interior Design / Event Planning / Roofing / HVAC / Painting / Moving Company / Pressure Washing / Electrical / Garage Door / Window Cleaning / Pest Control / Junk Removal / Tree Service / Concrete / Pool Cleaning

### Pets（3 个）
Pet / Cat / Dog

### Gaming（18 个）
Gamer Tag / Fantasy / DnD / Guild / Team / Dragon / Minecraft / Clan / Superhero / Pirate / Elf / Witch / Robot / Fantasy Town / Wizard / Anime / Valorant / Pokemon / Fortnite / League of Legends

### Fun（5 个）
WiFi / Baby / Boat / Nickname / Couple

## 43 篇博客文章

1. How to Choose a Business Name
2. 50 Best YouTube Channel Name Ideas
3. Fantasy Name Ideas: Worldbuilding Tips
4. How to Name Your Brand
5. Best Cat Names for Every Personality
6. Cool Gamer Tags: How to Stand Out
7. Coffee Shop Name Ideas
8. How to Pick a Restaurant Name
9. Twitch Username Tips for New Streamers
10. Dragon Names for D&D and Fantasy
11. How to Pick a Twitch Username
12. Best Dog Names for Every Breed
13. How to Choose a Podcast Name
14. WiFi Name Ideas: Funny and Clever
15. Etsy Shop Name Ideas
16. DnD Character Names Guide
17. How to Name Your Etsy Shop
18. Anime Character Name Ideas
19. Valorant Name Ideas
20. How to Name Your Agency
21. Studio Name Ideas
22. Barbershop Name Ideas
23. Pokemon Name Ideas
24. Fortnite Name Ideas
25. League of Legends Name Ideas
26. Bar Name Ideas
27. Tattoo Shop Name Ideas
28. Pokemon Team Name Ideas
29. Speakeasy Bar Name Ideas
30. Fine Line Tattoo Studio Name Ideas
31. Roofing Business Name Ideas
32. HVAC Business Name Ideas
33. Painting Business Name Ideas
34. Moving Company Name Ideas
35. Pressure Washing Business Name Ideas
36. Electrical Business Name Ideas
37. Garage Door Business Name Ideas
38. Window Cleaning Business Name Ideas
39. Pest Control Business Name Ideas
40. Junk Removal Business Name Ideas
41. Tree Service Name Ideas
42. Concrete Business Name Ideas
43. Pool Cleaning Business Name Ideas

## 工具页模板结构

每个工具页包含：
- 面包屑导航
- 分类标签
- 标题 + 描述
- 快捷关键词按钮（prompt chips）
- Quick ideas 面板
- 生成器表单（关键词 + 风格选择）
- 结果列表（Shuffle + Copy all）
- 候选名单（Save + Copy shortlist + Clear）
- Starter list 侧边栏
- Tips + Checklist
- Prompt ideas
- FAQ
- Related tools
- Keep browsing
- Header + Footer（含 Blog 导航）

## 博客文章模板结构

- 面包屑导航
- 标题 + 描述
- 长文本 SEO 内容（800-1200 字）
- 内部链接指向相关工具页
- 底部 CTA 指向工具页
- Header + Footer

## 后续扩展建议

### 工具页扩展方向
- Baby Name Generator（已有）
- Anime Name Generator
- Cat Name Generator（已有）
- Dog Name Generator（已有）
- 更多细分商业工具：Salon / Barbershop / Agency / Studio
- 更多游戏工具：Pokemon / Fortnite / Valorant / League of Legends
- 更多趣味工具：Ship Name / Squad Name / Roller Derby Name

### 博客文章扩展方向
- 每个工具页配一篇 800+ 字的 SEO 文章
- 目标：30+ 篇（AdSense 审核要求，当前 43）
- 长尾关键词覆盖
- 内部链接网络

### 流量获取
- Google Search Console 已接入
- Cloudflare Web Analytics 已接入
- 等待 Google 收录
- 考虑社交媒体推广
- 考虑外链建设

### 变现
- AdSense 申请（域名满 6 个月 + 30 篇文章 + 有流量）
- 考虑 affiliate 链接（域名注册、建站工具等）

## GitHub 认证

推送需要 GitHub Personal Access Token（Classic，repo 权限）。
生成地址：https://github.com/settings/tokens
建议设置 No expiration。

## 关键 URL

- 正式站：https://baiyeyun.xyz/
- GitHub：https://github.com/baiye74433/Repository-name-baiyeyun-name-generator
- Cloudflare Pages：https://repository-name-baiyeyun-name-generator.pages.dev/
- Search Console：https://search.google.com/search-console
- Cloudflare Dashboard：https://dash.cloudflare.com/

## 2026-06-21 AdSense Readiness Notes

- Current real counts: 78 tools, 43 blog articles, 129 HTML pages, 128 sitemap URLs.
- `node .\audit-adsense-readiness.js` returns `issues: []`.
- Live sitemap check passed: 128 URLs, 0 `.html` URLs, 0 bad URLs.
- Public URL signals are now extensionless across canonical, Open Graph URL, structured data, and sitemap.
- Older blog Open Graph metadata has been normalized; canonical and `og:url` now match across all 129 HTML pages.
- All blog articles are 500+ words.
- Add `ads.txt` only after Google AdSense provides the real publisher ID.
- Recommended next step: keep the site stable for review, then add a small number of high-intent tools/blogs after the readiness pass.

## 2026-06-22 Handoff Update

- Current focus: AdSense readiness, Search Console cleanup, canonical domain stability.
- Do not mass-add new tools or blogs right now.
- Cloudflare setup completed:
  - `www.baiyeyun.xyz` DNS exists as a proxied CNAME to `baiyeyun.xyz`.
  - Dynamic redirect rules are enabled for both HTTP and HTTPS `www` traffic.
  - All `www` traffic redirects to the apex domain `https://baiyeyun.xyz/`.
- Verified redirect behavior:
  - Apex HTTPS returns 200.
  - Apex HTTP redirects to HTTPS.
  - `www` HTTP and HTTPS redirect to apex HTTPS.
  - Path redirects preserve the path.
- Latest local audit command:

```powershell
node .\audit-adsense-readiness.js
```

Expected result:

```json
{
  "tools": 78,
  "blogs": 43,
  "htmlPages": 129,
  "sitemapUrls": 128,
  "issues": []
}
```

### Next step

1. Re-submit `https://baiyeyun.xyz/sitemap.xml` in Google Search Console.
2. Check index coverage and sitemap status.
3. Fix only real GSC errors if any appear.
4. Wait 3-7 stable days before AdSense application.

Do not add `ads.txt` until AdSense gives the real publisher ID.

## 2026-06-22 Google Verification DNS Status

- Cloudflare / Google Domain Connect authorization was completed.
- Cloudflare DNS now contains the Google Search Console verification TXT record:
  - `google-site-verification=AzkGHwqJWZFXcBGx0ia6Vni7a-s9DYUTBmFWa3MBb9g`
- Public DNS confirms the record through both Cloudflare DNS (`1.1.1.1`) and Google DNS (`8.8.8.8`).
- Next Search Console action: open Search Console in a normal browser if the in-app Google login stalls, click Verify if needed, then re-submit `https://baiyeyun.xyz/sitemap.xml`.

## 2026-06-22 Search Console Sitemap Submitted

- Google Search Console accepted the sitemap submission.
- Submitted:
  - `https://baiyeyun.xyz/sitemap.xml`
- UI confirmation observed: `Sitemap submitted successfully`.
- Keep the site stable for 3-7 days, then review indexing coverage before applying to AdSense.
