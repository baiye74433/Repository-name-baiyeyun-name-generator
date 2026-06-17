# 搭建与部署说明书

## 项目状态

已完成上线，无需重新搭建。

- 正式站：https://baiyeyun.xyz/
- GitHub：https://github.com/baiye74433/Repository-name-baiyeyun-name-generator
- Cloudflare Pages 自动部署

## 技术方案

- 纯静态网站：HTML + CSS + JavaScript
- 无后端、无数据库、无构建命令
- 部署平台：Cloudflare Pages

## 本地开发

```bash
git clone https://github.com/baiye74433/Repository-name-baiyeyun-name-generator.git
cd Repository-name-baiyeyun-name-generator
python -m http.server 4173
# 打开 http://127.0.0.1:4173/
```

## 部署流程

推送到 GitHub main 分支即可，Cloudflare Pages 自动部署（1-2 分钟）。

```bash
git add -A
git commit -m "描述改动"
git push origin main
```

## GitHub 认证

需要 Personal Access Token（Classic，repo 权限）。
生成地址：https://github.com/settings/tokens
建议设置 No expiration。

## 新增工具页流程

1. 在 `tools/` 创建 HTML 文件
2. 复制已有工具页模板（如 `tools/business-name-generator.html`）
3. 修改内容：标题、描述、分类、关键词、种子数据、FAQ
4. 更新 `tools/index.html`（加入对应分类区域）
5. 更新 `sitemap.xml`（新增 URL）
6. 更新 `index.html`（首页工具数量）
7. 推送到 GitHub

## 新增博客文章流程

1. 在 `blog/` 创建 HTML 文件
2. 复制已有博客模板
3. 修改内容：标题、描述、canonical URL、正文
4. 更新 `sitemap.xml`（新增 URL）
5. 推送到 GitHub

## 验证部署

```bash
# 检查新页面是否上线
curl -sL -o /dev/null -w "%{http_code}" "https://baiyeyun.xyz/tools/新页面.html"
# 应返回 200
```
