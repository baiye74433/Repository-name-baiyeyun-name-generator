# 搭建与部署说明书

## 项目状态

已完成上线，无需重新搭建。

- 正式站：`https://baiyeyun.xyz/`
- GitHub：`https://github.com/baiye74433/Repository-name-baiyeyun-name-generator`
- Cloudflare Pages 自动部署

## 技术方案

- 类型：纯静态网站
- 语言：HTML + CSS + JavaScript
- 后端：无
- 数据库：无
- 构建命令：无
- 部署平台：Cloudflare Pages

## 本地开发

克隆仓库：

```bash
git clone https://github.com/baiye74433/Repository-name-baiyeyun-name-generator.git
cd Repository-name-baiyeyun-name-generator
```

本地预览：

```bash
python -m http.server 4173
```

浏览器打开：`http://127.0.0.1:4173/index.html`

## 部署流程

代码推送到 GitHub main 分支后，Cloudflare Pages 自动部署。

```bash
git add -A
git commit -m "描述你的改动"
git push origin main
```

部署通常在 1-2 分钟内完成。

## 新增工具页流程

1. 在 `tools/` 目录创建新的 HTML 文件
2. 复制已有工具页的完整模板结构
3. 修改标题、描述、分类、种子数据、FAQ 等内容
4. 更新 `tools/index.html`（加入新工具到对应分类）
5. 更新 `sitemap.xml`（新增 URL）
6. 更新 `index.html`（如有需要更新工具数量）
7. 推送到 GitHub，自动部署

## 发布后检查

- 首页能打开
- `/tools/index.html` 能打开
- 新工具页能打开
- 生成器功能正常
- robots.txt 能打开
- sitemap.xml 能打开
