# 项目开发日志

## 项目名称

`AI Name Generator`

## 域名

`baiyeyun.xyz`

## 项目定位

英文名字生成器工具站。

不是采集站，不是站群，不是洗稿站。

目标是先上线一个可用的小工具站，后续通过 SEO 内容和工具页扩展流量。

## 开发阶段记录

### 阶段 1：确定方向

确定不做：

- AI 采集站
- 垃圾站群
- 大量低质量内容页

改为做：

- 英文工具站
- Name Generator
- 静态网站
- 免费部署

### 阶段 2：确定技术路线

最终技术方案：

- HTML
- CSS
- 原生 JavaScript
- Cloudflare Pages
- GitHub

放弃：

- 服务器
- 数据库
- 后台管理
- 付费 AI API
- 用户登录

### 阶段 3：生成第一版网站

创建了：

- 首页
- 工具总页
- 20 个工具页
- About
- Contact
- Privacy Policy
- Terms
- robots.txt
- sitemap.xml

### 阶段 4：补 SEO 和发布基础

补充：

- `favicon.svg`
- `404.html`
- `_headers`
- `LAUNCH_CHECKLIST.md`
- 页面 canonical
- 基础 meta description
- 结构化数据

### 阶段 5：工具页打磨

新增：

- 面包屑
- Shuffle ideas
- Copy all
- Prompt ideas
- 命名清单
- FAQ
- Related tools
- Keep browsing

### 阶段 6：工具功能升级

新增：

- Save 单个名字
- Your shortlist
- Copy shortlist
- Clear shortlist

形成完整工具链路：

```text
输入关键词 -> 生成结果 -> 保存喜欢的名字 -> 复制候选名单
```

### 阶段 7：文档化

新增：

- `USER_MANUAL.md`
- `SETUP_AND_DEPLOY.md`
- `PROJECT_DEV_LOG.md`
- `AI_HANDOFF.md`
- `BUILD_PROCESS.md`
- `DEPLOY_LOG.md`

### 阶段 8：正式上线与域名绑定

- GitHub 推送完成
- Cloudflare Pages 自动部署
- 临时域名可访问：`https://repository-name-baiyeyun-name-generator.pages.dev/`
- DNS 从阿里云转入 Cloudflare
- 自定义域名 `baiyeyun.xyz` 绑定成功
- 正式站上线：`https://baiyeyun.xyz/`

### 阶段 9：工具页扩展（新 AI 接手）

2026-06-17，新 AI 助手接手项目，完成以下工作：

新增 10 个工具页：

1. Team Name Generator（Gaming）
2. Band Name Generator（Creator）
3. Twitch Username Generator（Creator）
4. Twitter Username Generator（Creator）
5. Restaurant Name Generator（Business）
6. Coffee Shop Name Generator（Business）
7. Photography Business Name Generator（Business）
8. Hair Salon Name Generator（Business）
9. Dragon Name Generator（Gaming）
10. Startup Name Generator（Business）

同步更新：

- `tools/index.html`（新工具加入对应分类）
- `sitemap.xml`（新增 10 个 URL）
- `index.html`（工具数从 20 改为 30）

工具页总数：20 → 30

分类分布：

- Creator：6 → 9
- Business：6 → 11
- Pets：3
- Gaming：4 → 6
- Fun：1

## 当前状态

截至 2026-06-17：

- 正式站 `https://baiyeyun.xyz/` 正常运行
- GitHub 仓库已推送，Cloudflare Pages 自动部署成功
- 30 个工具页全部上线
- 文档已补齐
- 尚未接入统计分析
- 尚未提交 Google Search Console
- 尚未申请广告

## 下一步

1. Google Search Console 验证 + 提交 sitemap
2. Cloudflare Web Analytics 接入
3. 写 SEO 博客文章（为 AdSense 审核做准备）
4. 继续扩展工具页
5. 域名满 6 个月后申请 AdSense

## 风险记录

### 1. 广告申请

AdSense 审核要求至少 20-30 篇原创文章（600+ 字），当前只有工具页没有博客内容，需要先补。

### 2. 域名年龄

建议域名满 6 个月后再申请 AdSense，新域名通过率较低。

### 3. 内容质量

工具页功能完整，但缺少长文本 SEO 内容，后续需要为每个工具页补充引导文章。

## 当前结论

项目已完成第一阶段上线，工具页从 20 扩展到 30。

下一步重点是 SEO 内容建设和流量获取，不急着申请广告。
