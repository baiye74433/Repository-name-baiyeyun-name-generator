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

## 当前状态

截至当前：

- 本地网站可以运行
- 主要页面可以打开
- 核心工具功能已完成
- 文档已补齐
- 尚未推送 GitHub
- 尚未发布 Cloudflare Pages

## 当前目录

```text
C:\Users\胡雾屿\Documents\Codex\2026-06-17\ai\outputs\name-generator-site
```

## 下一步

1. 初始化 Git 仓库
2. 创建 GitHub 远程仓库
3. 推送代码
4. 创建 Cloudflare Pages 项目
5. 绑定 `baiyeyun.xyz`
6. 上线验收

## 风险记录

### 1. GitHub 登录验证

可能需要用户手动登录或点验证码。

### 2. Cloudflare 登录验证

可能需要用户确认登录状态。

### 3. DNS 生效时间

域名绑定后可能需要等待解析生效。

### 4. 广告申请

当前可以上线，但不建议马上申请广告。建议先补更多内容和收录。

## 当前结论

项目已经具备上线最小版本条件。

建议先发布到 Cloudflare Pages，再继续扩展页面和内容。
