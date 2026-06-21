#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = __dirname;
const domain = "https://baiyeyun.xyz";

function listHtml(dir) {
  return fs.readdirSync(path.join(root, dir)).filter((file) => file.endsWith(".html")).sort();
}

function canonicalPath(file) {
  if (file === "index.html") return "/";
  if (file === "tools/index.html") return "/tools/";
  if (file === "blog/index.html") return "/blog/";
  return `/${file.replace(/\.html$/, "")}`;
}

function normalizePathUrl(url) {
  if (url === "/index.html") return "/";
  if (url === "/tools/index.html") return "/tools/";
  if (url === "/blog/index.html") return "/blog/";
  if (url.endsWith(".html")) return url.replace(/\.html$/, "");
  return url;
}

function normalizeAbsoluteUrl(url) {
  if (!url.startsWith(domain)) return url;
  const rest = url.slice(domain.length);
  return domain + normalizePathUrl(rest || "/");
}

const htmlFiles = ["index.html", "about.html", "contact.html", "privacy.html", "terms.html", "404.html", "tools/index.html", "blog/index.html"]
  .concat(listHtml("tools").filter((file) => file !== "index.html").map((file) => `tools/${file}`))
  .concat(listHtml("blog").filter((file) => file !== "index.html").map((file) => `blog/${file}`));

for (const file of htmlFiles) {
  const fullPath = path.join(root, file);
  let html = fs.readFileSync(fullPath, "utf8");
  html = html.replace(/href="(\/[^"#?]*?\.html)([#?][^"]*)?"/g, (_match, url, suffix = "") => `href="${normalizePathUrl(url)}${suffix}"`);
  html = html.replace(/href="https:\/\/baiyeyun\.xyz\/([^"#?]*?\.html)([#?][^"]*)?"/g, (_match, url, suffix = "") => `href="${normalizeAbsoluteUrl(`${domain}/${url}`)}${suffix}"`);
  html = html.replace(/https:\/\/baiyeyun\.xyz\/[^"' <>\n]*?\.html/g, (url) => normalizeAbsoluteUrl(url));
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${domain}${canonicalPath(file)}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${domain}${canonicalPath(file)}"`);
  fs.writeFileSync(fullPath, html, "utf8");
}

let sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
sitemap = sitemap.replace(/<loc>(https:\/\/baiyeyun\.xyz\/[^<]*?\.html)<\/loc>/g, (_match, url) => `<loc>${normalizeAbsoluteUrl(url)}</loc>`);
sitemap = sitemap.replace(/<loc>https:\/\/baiyeyun\.xyz\/tools\/index<\/loc>/g, "<loc>https://baiyeyun.xyz/tools/</loc>");
sitemap = sitemap.replace(/<loc>https:\/\/baiyeyun\.xyz\/blog\/index<\/loc>/g, "<loc>https://baiyeyun.xyz/blog/</loc>");
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");

console.log(`Normalized extensionless URLs in ${htmlFiles.length} HTML files and sitemap.xml.`);
