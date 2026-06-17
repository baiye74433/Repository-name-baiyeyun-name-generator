# AI Name Generator

Static English name generator tool site.

**Live:** https://baiyeyun.xyz/

## Stats

- 50 tool pages
- 17 SEO blog articles
- 75+ indexable pages

## Tech Stack

- HTML / CSS / JavaScript
- GitHub → Cloudflare Pages (auto-deploy)
- Zero backend, zero database, zero cost

## Tool Categories

| Category | Count |
|----------|-------|
| Creator | 10 |
| Business | 14 |
| Pets | 3 |
| Gaming | 13 |
| Fun | 5 |
| **Total** | **50** |

## Deploy

Push to `main` branch → Cloudflare Pages auto-deploys in 1-2 minutes.

```bash
git add -A
git commit -m "Description"
git push origin main
```

## Adding Tools

1. Create HTML in `tools/` (copy existing template)
2. Update `tools/index.html` (add to category)
3. Update `sitemap.xml`
4. Update `index.html` (tool count)
5. Push to GitHub

## Adding Blog Posts

1. Create HTML in `blog/` (copy existing template)
2. Update `sitemap.xml`
3. Push to GitHub

## Docs

- `RETURN_LATER.md` — Quick resume guide
- `PROJECT_DEV_LOG.md` — Full development history
- `AI_HANDOFF.md` — Complete handoff documentation
- `DEPLOY_LOG.md` — Deployment records
- `PAUSE_REVIEW_STATUS.md` — Current status
