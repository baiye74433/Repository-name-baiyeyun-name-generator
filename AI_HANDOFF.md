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
- [x] 工具页扩展至 55 个
- [x] SEO 博客文章 22 篇
- [x] Google Search Console 验证 + sitemap 提交
- [x] Cloudflare Web Analytics 启用
- [ ] 更多博客文章（目标 30+ 篇，当前 22）
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
│   └── ... (55 个工具页)
├── blog/
│   ├── index.html                # 博客索引
│   ├── how-to-choose-a-business-name.html
│   └── ... (22 篇博客)
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

## 55 个工具页完整列表

### Creator（10 个）
YouTube / TikTok / Instagram / Discord / Podcast / Blog / Band / Twitch / Twitter / Email Newsletter

### Business（17 个）
Business / Brand / Shop / Bakery / Clothing Brand / Etsy Shop / Restaurant / Coffee Shop / Photography Business / Hair Salon / Startup / Gym / Real Estate / Cleaning Business / Law Firm / Spa / Food Truck / Agency / Studio / Barbershop

### Pets（3 个）
Pet / Cat / Dog

### Gaming（15 个）
Gamer Tag / Fantasy / DnD / Guild / Team / Dragon / Minecraft / Clan / Superhero / Pirate / Elf / Witch / Robot / Fantasy Town / Wizard / Anime / Valorant

### Fun（5 个）
WiFi / Baby / Boat / Nickname / Couple

## 22 篇博客文章

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
- 目标：30+ 篇（AdSense 审核要求，当前 22）
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
