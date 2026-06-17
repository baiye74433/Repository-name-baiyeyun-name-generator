# 网站搭建过程

## 项目目标

- 项目类型：英文 `Name Generator` 工具站
- 域名：`baiyeyun.xyz`
- 目标：先上线 1 个可收录、可扩展、后续可接广告的小型工具站
- 技术路线：纯静态站，后续部署到 `Cloudflare Pages`

## 已完成的内容

### 1. 定方向

- 放弃“采集站 / 站群 / 洗稿”
- 改成“工具站 + 程序化内容页”
- 题材定为 `Name Generator`

### 2. 定结构

网站当前已经生成这些页面：

- 首页：`index.html`
- 工具总页：`tools/index.html`
- 20 个工具页：
  - `youtube-name-generator.html`
  - `tiktok-username-generator.html`
  - `instagram-username-generator.html`
  - `business-name-generator.html`
  - `brand-name-generator.html`
  - `shop-name-generator.html`
  - `bakery-name-generator.html`
  - `clothing-brand-name-generator.html`
  - `pet-name-generator.html`
  - `cat-name-generator.html`
  - `dog-name-generator.html`
  - `gamer-tag-generator.html`
  - `fantasy-name-generator.html`
  - `dnd-name-generator.html`
  - `guild-name-generator.html`
  - `wifi-name-generator.html`
  - `discord-name-generator.html`
  - `podcast-name-generator.html`
  - `blog-name-generator.html`
  - `etsy-shop-name-generator.html`

### 3. 定技术方案

- 不用数据库
- 不用服务器
- 不接付费 API
- 前端纯静态
- 交互用原生 JavaScript
- 样式用原生 CSS

### 4. 实际生成了网站文件

核心文件如下：

- `index.html`
- `about.html`
- `contact.html`
- `privacy.html`
- `terms.html`
- `robots.txt`
- `sitemap.xml`
- `assets/styles.css`
- `assets/app.js`
- `tools/*.html`

### 5. 域名已写入页面

当前生成文件里已经使用：

- 主域名：`baiyeyun.xyz`

所以这套站点不是示例域名，已经按你的真实域名生成。

## 网站是怎么做出来的

### 页面生成方式

不是手写 20 个页面，而是先写了一个生成脚本：

- 脚本文件：`work/site-build/generate-site.js`

这个脚本做了 5 件事：

1. 定义 20 个工具页面的数据
2. 按统一模板生成首页、工具页、关于页、隐私页、条款页
3. 自动写入 `meta title`、`description`、`canonical`
4. 自动生成 `robots.txt` 和 `sitemap.xml`
5. 生成前端交互脚本和样式文件

### 工具页逻辑

每个工具页都包含：

- 页面标题
- 简介
- 关键词提示按钮
- 输入框
- 风格选择框
- 自动生成结果列表
- 一键复制按钮
- FAQ
- 相关工具链接

### 生成逻辑

每个页面预先带一组种子名称，然后前端脚本会：

1. 读取用户输入关键词
2. 组合关键词和种子词
3. 输出一批新的名字建议
4. 支持一键复制

这属于“轻交互静态站”，优点是：

- 免费部署
- 打开快
- 不依赖后端
- 后续容易批量扩页

## 当前状态

当前状态不是“空计划”，而是：

- 网站代码已经生成
- 页面已经落到交付目录
- 还没完成 GitHub 上传
- 还没完成 Cloudflare Pages 发布
- 还没完成正式上线验证

## 下一步应该做什么

下一步接手的 AI 或人，直接继续做这 3 件事：

1. 本地预览站点，确认页面显示正常
2. 创建 GitHub 仓库并上传 `outputs/name-generator-site`
3. 在 Cloudflare Pages 连接仓库并绑定 `baiyeyun.xyz`

## 交付目录

当前交付目录：

- `C:\Users\胡雾屿\Documents\Codex\2026-06-17\ai\outputs\name-generator-site`

这个目录就是后续部署的源文件目录。
