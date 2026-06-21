# 项目开发日志

## 项目名称

AI Name Generator

## 域名

baiyeyun.xyz

## 项目定位

英文名字生成器工具站。不是采集站，不是站群。目标是通过免费工具获取 SEO 流量，后续通过广告变现。

## 技术栈

- HTML / CSS / 原生 JavaScript
- GitHub + Cloudflare Pages（自动部署）
- 零成本运行

## 开发阶段

### 阶段 1-7：初始开发（前任 AI）

- 确定方向：英文工具站 + 静态部署
- 生成第一版网站：首页 + 20 个工具页 + 基础页面
- 补 SEO 基础：favicon, 404, _headers, canonical, meta, 结构化数据
- 工具页打磨：面包屑, Shuffle, Copy all, Prompt ideas, FAQ, Related tools
- 工具功能升级：Save, Shortlist, Copy shortlist, Clear
- 文档化：USER_MANUAL, SETUP_AND_DEPLOY, PROJECT_DEV_LOG, AI_HANDOFF, DEPLOY_LOG
- GitHub 推送 + Cloudflare Pages 部署 + baiyeyun.xyz 域名绑定

### 阶段 8：正式上线

- DNS 从阿里云转入 Cloudflare
- baiyeyun.xyz 绑定成功
- 正式站上线

### 阶段 9：工具页扩展 Batch 1（2026-06-17）

新 AI 助手接手，新增 10 个工具页（20→30）：

1. Team Name Generator (Gaming)
2. Band Name Generator (Creator)
3. Twitch Username Generator (Creator)
4. Twitter Username Generator (Creator)
5. Restaurant Name Generator (Business)
6. Coffee Shop Name Generator (Business)
7. Photography Business Name Generator (Business)
8. Hair Salon Name Generator (Business)
9. Dragon Name Generator (Gaming)
10. Startup Name Generator (Business)

同步更新：tools/index.html, sitemap.xml, 首页工具数

### 阶段 10：SEO 博客 + 基础设施（2026-06-17）

- 接入 Google Search Console（验证 + 提交 sitemap）
- 接入 Cloudflare Web Analytics（自动启用）
- 创建 10 篇 SEO 博客文章
- 全站导航加 Blog 链接

### 阶段 11：工具页扩展 Batch 2（2026-06-17）

新增 10 个工具页（30→40）：

1. Gym Name Generator (Business)
2. Baby Name Generator (Fun)
3. Minecraft Name Generator (Gaming)
4. Clan Name Generator (Gaming)
5. Boat Name Generator (Fun)
6. Real Estate Business Name Generator (Business)
7. Cleaning Business Name Generator (Business)
8. Nickname Generator (Fun)
9. Couple Name Generator (Fun)
10. Email Newsletter Name Generator (Creator)

### 阶段 12：工具页扩展 Batch 3 + 博客（2026-06-17）

新增 10 个工具页（40→50）+ 7 篇博客（10→17）：

工具：
1. Superhero Name Generator (Gaming)
2. Pirate Name Generator (Gaming)
3. Elf Name Generator (Gaming)
4. Witch Name Generator (Gaming)
5. Robot Name Generator (Gaming)
6. Law Firm Name Generator (Business)
7. Spa Name Generator (Business)
8. Food Truck Name Generator (Business)
9. Fantasy Town Name Generator (Gaming)
10. Wizard Name Generator (Gaming)

博客：
1. How to Pick a Twitch Username
2. Best Dog Names for Every Breed
3. How to Choose a Podcast Name
4. WiFi Name Ideas: Funny and Clever
5. Etsy Shop Name Ideas
6. DnD Character Names Guide
7. How to Name Your Etsy Shop

### 阶段 13：工具页扩展 Batch 4 + 博客（2026-06-18）

新增 5 个工具页（50→55）+ 5 篇博客（17→22）：

工具：
1. Anime Name Generator (Gaming)
2. Valorant Name Generator (Gaming)
3. Agency Name Generator (Business)
4. Studio Name Generator (Business)
5. Barbershop Name Generator (Business)

博客：
1. Anime Character Name Ideas
2. Valorant Name Ideas
3. How to Name Your Agency
4. Studio Name Ideas
5. Barbershop Name Ideas

### 阶段 14：工具页扩展 Batch 5 + 内容冲刺（2026-06-19）

新增 5 个工具页（55→60）+ 8 篇博客（22→30）：

工具：
1. Pokemon Name Generator (Gaming)
2. Fortnite Name Generator (Gaming)
3. League of Legends Name Generator (Gaming)
4. Bar Name Generator (Business)
5. Tattoo Shop Name Generator (Business)

博客：
1. Pokemon Name Ideas
2. Fortnite Name Ideas
3. League of Legends Name Ideas
4. Bar Name Ideas
5. Tattoo Shop Name Ideas
6. Pokemon Team Name Ideas
7. Speakeasy Bar Name Ideas
8. Fine Line Tattoo Studio Name Ideas

## 当前状态（2026-06-19）

- 正式站 https://baiyeyun.xyz/ 正常运行
- 78 个工具页全部上线
- 43 篇 SEO 博客文章
- Google Search Console 已验证 + sitemap 已提交
- Cloudflare Web Analytics 已启用
- 总计 126+ 个可索引页面

## 工具页分类

| 分类 | 数量 |
|------|------|
| Creator | 10 |
| Business | 37 |
| Pets | 3 |
| Gaming | 18 |
| Fun | 5 |
| **总计** | **78** |

## 下一步

1. 继续扩展工具页
2. 继续写博客文章（目标 30+ 篇）
3. 域名满 6 个月后申请 AdSense
4. 考虑社交媒体推广
5. 考虑外链建设

## 风险记录

1. AdSense 审核内容量门槛已达到（当前 30 篇），后续重点转向持续更新与流量积累
2. 域名年龄建议满 6 个月
3. 需要一些自然搜索流量才能通过 AdSense

## 2026-06-21 AdSense Readiness Notes

- Current real counts: 78 tools, 43 blog articles, 129 HTML pages, 128 sitemap URLs.
- `node .\audit-adsense-readiness.js` returns `issues: []`.
- Live sitemap check passed: 128 URLs, 0 `.html` URLs, 0 bad URLs.
- Public URL signals are now extensionless across canonical, Open Graph URL, structured data, and sitemap.
- `404.html` now has a fuller meta description.
- Do not add `ads.txt` until Google AdSense provides the real publisher ID.
