# 部署日志

## 2026-06-17 当前记录

### 已执行

- 创建交付目录：`outputs/name-generator-site`
- 创建资源目录：`assets`
- 创建工具页目录：`tools`
- 编写站点生成脚本：`work/site-build/generate-site.js`
- 将真实域名设置为：`baiyeyun.xyz`
- 运行生成脚本
- 成功生成首页、工具页、基础信息页、SEO 文件
- 完成一轮页面结构升级：
  - 工具总页新增分类跳转
  - 工具页新增 prompt 推荐区
  - 工具页新增继续浏览区
  - 整体站内浏览路径更完整
- 完成一轮单页可用性升级：
  - 工具页新增面包屑
  - 结果区新增 `Shuffle ideas`
  - 工具页新增命名清单
  - 工具页新增“找到名字后下一步做什么”
- 完成一轮站点完成度升级：
  - 首页新增快速入口区
  - 首页新增“何时适合使用这个站”
  - 工具总页新增分类说明文案
  - 工具页结果区新增 `Copy all`
- 完成一轮工具功能升级：
  - 结果项新增 `Save`
  - 工具页新增 `Your shortlist`
  - 候选名单支持 `Copy shortlist`
  - 候选名单支持 `Clear`

### 已确认生成的文件

- 根目录页面：
  - `index.html`
  - `about.html`
  - `contact.html`
  - `privacy.html`
  - `terms.html`
- SEO 文件：
  - `robots.txt`
  - `sitemap.xml`
- 资源文件：
  - `assets/styles.css`
  - `assets/app.js`
- 工具页面：
  - 共 20 个

### 当前未完成

- GitHub 仓库未创建或未上传
- Cloudflare Pages 未连接仓库
- 域名未完成 Pages 发布验证

### 当前建议执行顺序

1. 本地预览
2. GitHub 上传
3. Cloudflare Pages 发布
4. 绑定域名
5. 上线后补广告与统计

### 备注

当前这套站已经可以作为“部署源文件”使用，不需要重新生成。
