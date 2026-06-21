#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = __dirname;
const domain = "https://baiyeyun.xyz";
const requiredFiles = ["index.html", "tools/index.html", "blog/index.html", "about.html", "contact.html", "privacy.html", "terms.html", "404.html", "robots.txt", "sitemap.xml"];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function listHtml(dir) {
  return fs.readdirSync(path.join(root, dir)).filter((file) => file.endsWith(".html")).sort();
}

function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function localPathFromHref(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || clean.startsWith("http") || clean.startsWith("mailto:") || clean.startsWith("tel:")) return null;
  if (clean === "/") return "index.html";
  if (clean.endsWith("/")) return clean.replace(/^\//, "") + "index.html";
  const local = clean.replace(/^\//, "");
  if (path.extname(local)) return local;
  return `${local}.html`;
}

function publicPathFromFile(file) {
  if (file === "index.html") return "/";
  if (file === "tools/index.html") return "/tools/";
  if (file === "blog/index.html") return "/blog/";
  return `/${file.replace(/\.html$/, "")}`;
}

const tools = listHtml("tools").filter((file) => file !== "index.html");
const blogs = listHtml("blog").filter((file) => file !== "index.html");
const allHtml = ["index.html", "tools/index.html", "blog/index.html", "about.html", "contact.html", "privacy.html", "terms.html", "404.html"]
  .concat(tools.map((file) => `tools/${file}`), blogs.map((file) => `blog/${file}`));

const issues = [];
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) issues.push(`Missing required file: ${file}`);
}

const home = read("index.html");
const homeCount = Number((home.match(/<h2>(\d+) ready-to-use generators<\/h2>/) || [])[1]);
if (homeCount !== tools.length) issues.push(`Homepage count ${homeCount} does not match tools ${tools.length}`);

const sitemap = read("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const sitemapSet = new Set(sitemapUrls);
if (sitemapUrls.length !== sitemapSet.size) issues.push("Sitemap has duplicate URLs");
for (const url of sitemapUrls) {
  if (url.endsWith(".html")) issues.push(`Sitemap URL still has .html: ${url}`);
}

for (const file of tools) {
  const publicPath = publicPathFromFile(`tools/${file}`);
  const url = `${domain}${publicPath}`;
  if (!sitemapSet.has(url)) issues.push(`Tool missing from sitemap: ${file}`);
  if (!read("tools/index.html").includes(publicPath)) issues.push(`Tool missing from tools index: ${file}`);
}
for (const file of blogs) {
  const publicPath = publicPathFromFile(`blog/${file}`);
  const url = `${domain}${publicPath}`;
  if (!sitemapSet.has(url)) issues.push(`Blog missing from sitemap: ${file}`);
  if (!read("blog/index.html").includes(publicPath)) issues.push(`Blog missing from blog index: ${file}`);
}

for (const file of allHtml) {
  const html = read(file);
  const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || "";
  const expectedUrl = `${domain}${publicPathFromFile(file)}`;
  const canonical = (html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)/i) || [])[1] || "";
  const ogUrl = (html.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']*)/i) || [])[1] || "";
  const h1Count = [...html.matchAll(/<h1[\s>]/gi)].length;
  const text = stripTags(html);
  if (!title) issues.push(`Missing title: ${file}`);
  if (!desc) issues.push(`Missing meta description: ${file}`);
  if (canonical !== expectedUrl) issues.push(`Canonical mismatch in ${file}: ${canonical}`);
  if (ogUrl !== expectedUrl) issues.push(`OG URL mismatch in ${file}: ${ogUrl}`);
  if (h1Count !== 1) issues.push(`H1 count ${h1Count}: ${file}`);
  if (/<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html) && file !== "404.html") issues.push(`Unexpected noindex: ${file}`);
  if (text.length < 900 && !["404.html"].includes(file)) issues.push(`Thin page text: ${file} (${text.length} chars)`);
  if (/lorem ipsum|coming soon|under construction|todo|placeholder/i.test(text)) issues.push(`Placeholder-like text: ${file}`);
  const absoluteHtmlUrls = [...html.matchAll(/https:\/\/baiyeyun\.xyz\/[^"'<\s]*?\.html/g)].map((match) => match[0]);
  if (absoluteHtmlUrls.length) issues.push(`Absolute .html URL in ${file}: ${absoluteHtmlUrls[0]}`);

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    const local = localPathFromHref(href);
    if (!local) continue;
    if (!fs.existsSync(path.join(root, local))) issues.push(`Broken local link in ${file}: ${href}`);
  }
}

const titleMap = new Map();
const descMap = new Map();
for (const file of allHtml) {
  const html = read(file);
  const title = (html.match(/<title>(.*?)<\/title>/i) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || "";
  if (title) titleMap.set(title, (titleMap.get(title) || []).concat(file));
  if (desc) descMap.set(desc, (descMap.get(desc) || []).concat(file));
}
for (const [title, files] of titleMap) {
  if (files.length > 1) issues.push(`Duplicate title "${title}": ${files.join(", ")}`);
}
for (const [desc, files] of descMap) {
  if (files.length > 1) issues.push(`Duplicate description "${desc}": ${files.join(", ")}`);
}

console.log(JSON.stringify({
  tools: tools.length,
  blogs: blogs.length,
  htmlPages: allHtml.length,
  sitemapUrls: sitemapUrls.length,
  issues,
}, null, 2));
