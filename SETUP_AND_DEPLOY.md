# 搭建与部署说明书

## 项目目标

把 `outputs/name-generator-site` 这个静态网站部署到：

- GitHub 仓库
- Cloudflare Pages
- 自定义域名 `baiyeyun.xyz`

## 技术方案

- 类型：纯静态网站
- 语言：HTML + CSS + JavaScript
- 后端：无
- 数据库：无
- 构建命令：无
- 部署平台：Cloudflare Pages

## 本地目录

网站源文件目录：

```text
C:\Users\胡雾屿\Documents\Codex\2026-06-17\ai\outputs\name-generator-site
```

生成脚本：

```text
C:\Users\胡雾屿\Documents\Codex\2026-06-17\ai\work\site-build\generate-site.js
```

## 本地预览方法

进入网站目录：

```powershell
cd "C:\Users\胡雾屿\Documents\Codex\2026-06-17\ai\outputs\name-generator-site"
```

启动本地服务：

```powershell
python -m http.server 4173
```

浏览器打开：

```text
http://127.0.0.1:4173/index.html
```

## 重新生成网站

如果改了生成脚本，执行：

```powershell
node "C:\Users\胡雾屿\Documents\Codex\2026-06-17\ai\work\site-build\generate-site.js"
```

## GitHub 仓库建议

推荐仓库名：

```text
baiyeyun-name-generator
```

推荐仓库类型：

```text
Public
```

如果用户不想公开代码，也可以先用：

```text
Private
```

但 Cloudflare Pages 连接 GitHub 时需要授权访问该仓库。

## Git 初始化命令

在网站目录运行：

```powershell
git init
git add .
git commit -m "Initial name generator site"
```

## GitHub 推送命令

仓库创建后，按 GitHub 提供的地址替换下面的 `<GITHUB_REPO_URL>`：

```powershell
git branch -M main
git remote add origin <GITHUB_REPO_URL>
git push -u origin main
```

## Cloudflare Pages 部署步骤

1. 打开 Cloudflare Dashboard
2. 进入 `Workers & Pages`
3. 点 `Create application`
4. 选择 `Pages`
5. 选择 `Connect to Git`
6. 连接 GitHub
7. 选择仓库 `baiyeyun-name-generator`
8. 构建设置如下：

```text
Framework preset: None
Build command: 留空
Build output directory: /
Root directory: 留空
```

9. 点击部署

## 绑定域名

Cloudflare Pages 项目部署成功后：

1. 打开 Pages 项目
2. 进入 `Custom domains`
3. 点 `Set up a custom domain`
4. 输入：

```text
baiyeyun.xyz
```

5. 按 Cloudflare 提示确认 DNS

## 发布后检查

发布后打开：

```text
https://baiyeyun.xyz
```

检查：

- 首页能打开
- `/tools/index.html` 能打开
- `/tools/business-name-generator.html` 能打开
- 生成器能用
- Copy 按钮能用
- Save 候选名单能用
- `robots.txt` 能打开
- `sitemap.xml` 能打开

## 预计上线时间

如果 GitHub 和 Cloudflare 不弹验证码：

- 30 到 60 分钟可以上线

如果需要登录验证、邮箱确认、验证码：

- 约 60 到 90 分钟

如果域名 DNS 还没完全生效：

- 可能需要 1 到 24 小时完全稳定

## 当前最推荐节奏

1. 先创建 GitHub 仓库
2. 推送当前代码
3. Cloudflare Pages 发布
4. 绑定 `baiyeyun.xyz`
5. 先上线最小版本
6. 后续继续扩内容和广告准备
