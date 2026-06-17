# Deploy Guide

Project: AI Name Generator

Domain: baiyeyun.xyz

Local source folder:

```text
C:\Users\胡雾屿\Documents\Codex\2026-06-17\ai\outputs\name-generator-site
```

Git branch:

```text
main
```

Recommended GitHub repository name:

```text
baiyeyun-name-generator
```

Current local Git status:

- Git repository initialized
- First commit completed
- Commit message: `Initial name generator site`

## GitHub setup

Create a new GitHub repository:

```text
baiyeyun-name-generator
```

Use these settings:

```text
Owner: your GitHub account
Repository name: baiyeyun-name-generator
Visibility: Public
Do not add README
Do not add .gitignore
Do not add license
```

After the repository is created, push with:

```powershell
cd "C:\Users\胡雾屿\Documents\Codex\2026-06-17\ai\outputs\name-generator-site"
git remote add origin https://github.com/YOUR_USERNAME/baiyeyun-name-generator.git
git push -u origin main
```

Replace `YOUR_USERNAME` with the actual GitHub username.

## Cloudflare Pages setup

Cloudflare Pages settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: /
Root directory: leave empty
```

Then bind custom domain:

```text
baiyeyun.xyz
```

## Expected launch time

If GitHub and Cloudflare are already logged in:

```text
30-60 minutes
```

If extra verification is required:

```text
60-90 minutes
```

If DNS propagation is slow:

```text
1-24 hours for full stability
```
