#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const DOMAIN = "https://baiyeyun.xyz";

const tools = [
  {
    slug: "anime-name-generator",
    title: "Anime Name Generator",
    category: "Gaming",
    desc: "Generate anime names for characters, stories, roleplay, manga ideas, and original worlds.",
    chips: ["hero", "villain", "cute", "school", "fantasy"],
    seed: ["Akira Hoshino", "Yumi Kazehara", "Ren Takamori", "Mika Aozora", "Sora Minazuki", "Kaito Arisawa", "Hana Tsukino", "Riku Hayate", "Emi Shirogane", "Daichi Moriyama", "Nori Amakusa", "Aiko Fujimori"],
    tips: "Anime names work best when the sound matches the character role. Soft names fit romance and slice-of-life characters, while sharper names fit rivals, fighters, and villains.",
    checklist: ["Match the name to the genre.", "Keep the spelling easy to read.", "Try a first name and surname together.", "Check that it is not identical to a famous character."],
    related: [["Fantasy Name Generator", "fantasy-name-generator"], ["DnD Name Generator", "dnd-name-generator"], ["Nickname Generator", "nickname-generator"]],
  },
  {
    slug: "valorant-name-generator",
    title: "Valorant Name Generator",
    category: "Gaming",
    desc: "Generate Valorant names, sweaty gamer tags, duo names, and clean usernames for competitive play.",
    chips: ["duelist", "sentinel", "sweaty", "clean", "duo"],
    seed: ["Vandal Nova", "Spike Warden", "Clutch Vector", "Astra Flick", "Phantom Drift", "Dash Core", "Eco Ghost", "Neon Angle", "Sage Pulse", "Recon Vex", "Orbit Aim", "Crosshair Kai"],
    tips: "Valorant names should be quick to read in a lobby and memorable after a match. Short names with one strong image usually work better than long inside jokes.",
    checklist: ["Keep it readable in-game.", "Avoid random numbers unless they matter.", "Make sure it fits your agent style.", "Check the handle on other platforms too."],
    related: [["Gamer Tag Generator", "gamer-tag-generator"], ["Clan Name Generator", "clan-name-generator"], ["Team Name Generator", "team-name-generator"]],
  },
  {
    slug: "agency-name-generator",
    title: "Agency Name Generator",
    category: "Business",
    desc: "Generate agency names for marketing, creative, design, consulting, SEO, and digital service businesses.",
    chips: ["marketing", "creative", "seo", "consulting", "design"],
    seed: ["Brightline Agency", "Northbound Studio", "Signal & Scale", "Cobalt Partners", "Launchcraft", "Framewise", "Peakform Digital", "Clearpath Creative", "Growth Harbor", "Metric House", "Brandwell Co", "Orbit Works"],
    tips: "Agency names need to sound credible before a prospect sees your work. Choose a name that can sit on a proposal, website header, and invoice without feeling too clever.",
    checklist: ["Say it out loud in a sales call.", "Check the domain before committing.", "Avoid names that limit future services.", "Make sure it feels professional on a proposal."],
    related: [["Business Name Generator", "business-name-generator"], ["Brand Name Generator", "brand-name-generator"], ["Startup Name Generator", "startup-name-generator"]],
  },
  {
    slug: "studio-name-generator",
    title: "Studio Name Generator",
    category: "Business",
    desc: "Generate studio names for design studios, photo studios, content studios, art spaces, and creative teams.",
    chips: ["design", "photo", "content", "art", "minimal"],
    seed: ["Northlight Studio", "Paperframe", "Good Form Studio", "Studio Vale", "Blue Room Works", "Arc & Bloom", "Canvas North", "Quiet Signal", "Lumen Loft", "Foundry Lane", "Frame Garden", "Bright Matter"],
    tips: "Studio names should feel flexible and visual. A good studio name can cover client work, creative experiments, and future services without sounding too narrow.",
    checklist: ["Pick a name that looks good in a logo.", "Avoid overly trendy spellings.", "Make sure it fits your creative niche.", "Test it on a portfolio homepage."],
    related: [["Brand Name Generator", "brand-name-generator"], ["Photography Business Name Generator", "photography-business-name-generator"], ["Agency Name Generator", "agency-name-generator"]],
  },
  {
    slug: "barbershop-name-generator",
    title: "Barbershop Name Generator",
    category: "Business",
    desc: "Generate barbershop names for modern barber studios, classic shops, grooming lounges, and local hair businesses.",
    chips: ["classic", "modern", "luxury", "local", "men"],
    seed: ["The Gentry Cut", "Oak & Razor", "Main Street Barber", "Blade House", "Crown & Comb", "Iron Chair", "Clean Fade Co", "The Trim Room", "Northside Grooming", "Sharp Line Barber", "Union Cut", "Brass Comb"],
    tips: "Barbershop names should be easy to remember from a sign, map listing, or referral. Strong words like blade, comb, chair, cut, and crown create instant context.",
    checklist: ["Make it easy to say over the phone.", "Check local competitors on Google Maps.", "Choose a name that fits your shop style.", "Avoid names that sound like a hair salon if you focus on barbering."],
    related: [["Hair Salon Name Generator", "hair-salon-name-generator"], ["Business Name Generator", "business-name-generator"], ["Spa Name Generator", "spa-name-generator"]],
  },
];

const blogs = [
  {
    slug: "anime-character-name-ideas",
    pill: "Gaming",
    title: "Anime Character Name Ideas for Original Stories",
    desc: "Learn how to create anime character names that fit your genre, personality, and story world.",
    excerpt: "A practical guide to anime character names for heroes, rivals, villains, and slice-of-life casts.",
    tool: ["Anime Name Generator", "anime-name-generator"],
    body: [
      ["Why anime names need a clear role", "A strong anime name should hint at the character before the reader knows the full backstory. A soft, bright name can fit a school romance lead. A sharper name can fit a rival, fighter, or mysterious transfer student. The best names do not explain everything, but they give the audience the right first feeling."],
      ["Start with genre and tone", "Before listing names, decide whether the story feels cozy, dramatic, supernatural, futuristic, or comedic. Slice-of-life names usually sound more grounded. Fantasy and action names can be more dramatic. If the name sounds too serious for a comedy, or too cute for a villain, the character will feel mismatched."],
      ["Use a first name and surname together", "Many anime-style names work because the full name has rhythm. Try short-long, long-short, and balanced pairs. Read each name aloud. If it feels awkward after three repeats, it may be hard for viewers or readers to remember."],
      ["Build a small cast system", "If you are naming a full cast, do not make every name equally dramatic. Give the main character the clearest name, the rival a sharper one, and side characters simpler names. This creates contrast and makes the main cast easier to follow."],
      ["Fast checklist", "Match the name to the genre. Keep spelling readable. Avoid copying famous characters. Test the full name in dialogue. Save five options before deciding."],
      ["Use the generator", "For faster brainstorming, open the <a href=\"/tools/anime-name-generator.html\">Anime Name Generator</a>. For broader fantasy names, try the <a href=\"/tools/fantasy-name-generator.html\">Fantasy Name Generator</a>."]
    ],
  },
  {
    slug: "valorant-name-ideas",
    pill: "Gaming",
    title: "Valorant Name Ideas: How to Pick a Clean Competitive Username",
    desc: "Find Valorant name ideas and learn how to choose a short, readable username for ranked games and streaming.",
    excerpt: "Tips for Valorant usernames that look clean in the lobby, kill feed, and social profiles.",
    tool: ["Valorant Name Generator", "valorant-name-generator"],
    body: [
      ["Keep it short enough for the lobby", "Valorant is fast, and your name appears in small spaces: the scoreboard, kill feed, party list, and chat. A short readable name is easier for teammates to call out and easier for opponents to remember."],
      ["Choose a style that matches your play", "Duelist names often sound fast and sharp. Sentinel names can sound controlled or tactical. Controller names can feel mysterious. You do not need to name yourself after an agent, but your username should match the energy you want to project."],
      ["Avoid clutter", "Too many underscores, random numbers, or unreadable letter swaps make a name weaker. If your first choice is taken, try a clean variation before adding a long number string."],
      ["Think beyond Valorant", "If you stream, post clips, or play other games, check whether the same name works on Twitch, YouTube, TikTok, and Discord. A consistent handle makes it easier for people to find you after a good match."],
      ["Name formulas that work", "Try power word plus image, short verb plus object, agent vibe plus clean noun, or one memorable invented word. Examples include Vandal Nova, Spike Warden, Phantom Drift, and Crosshair Kai."],
      ["Use the generator", "Open the <a href=\"/tools/valorant-name-generator.html\">Valorant Name Generator</a> for instant ideas. For broader usernames, use the <a href=\"/tools/gamer-tag-generator.html\">Gamer Tag Generator</a>."]
    ],
  },
  {
    slug: "how-to-name-your-agency",
    pill: "Business",
    title: "How to Name Your Agency: Practical Tips for Service Businesses",
    desc: "Naming a marketing, design, SEO, or consulting agency? Use this simple process to find a credible agency name.",
    excerpt: "A clear naming process for marketing agencies, creative studios, SEO firms, and consulting businesses.",
    tool: ["Agency Name Generator", "agency-name-generator"],
    body: [
      ["Your agency name has to sell trust", "An agency name appears on proposals, invoices, emails, case studies, and sales calls. It does not need to be flashy, but it needs to feel credible. The best agency names are easy to say, easy to spell, and broad enough to grow with your services."],
      ["Decide what clients should feel", "A performance marketing agency may need a name that sounds analytical and growth-focused. A creative agency may need something visual and memorable. A consulting agency may need a name that sounds calm, senior, and reliable."],
      ["Avoid names that trap the business", "If you start with SEO but may later offer paid ads, content, or strategy, avoid a name that only works for SEO. Pick a name that can expand with the business."],
      ["Test it in real sales situations", "Say the name in a cold email intro, a proposal title, and a phone greeting. If it feels awkward in any of those places, it may not be the right choice."],
      ["Check the boring things early", "Search Google, check domains, look for similar agencies, and check social handles. You do not need the perfect .com on day one, but you should avoid names that are already strongly owned by another agency."],
      ["Use the generator", "Try the <a href=\"/tools/agency-name-generator.html\">Agency Name Generator</a> for quick options. You can also compare ideas with the <a href=\"/tools/business-name-generator.html\">Business Name Generator</a>."]
    ],
  },
  {
    slug: "studio-name-ideas",
    pill: "Business",
    title: "Studio Name Ideas for Designers, Photographers, and Creators",
    desc: "Explore studio name ideas and learn how to choose a flexible name for a creative studio or visual business.",
    excerpt: "Naming tips for design studios, photography studios, content studios, and creative teams.",
    tool: ["Studio Name Generator", "studio-name-generator"],
    body: [
      ["A studio name should feel visual", "Studio names often work best when they create an image. Words connected to light, form, frame, room, paper, canvas, and direction can make the business feel creative before anyone sees the portfolio."],
      ["Leave room for the work to evolve", "A photography studio may later add video, content strategy, design, or workshops. A narrow name can become a problem. A flexible name gives you space to grow without rebranding."],
      ["Pick the right level of personality", "Some studios need a founder-led name. Others need a brand name that feels bigger than one person. If you plan to hire a team, sell products, or build a larger creative company, choose a name that can hold that future."],
      ["Look at the name on a portfolio page", "Before deciding, place the name in a fake website header, Instagram bio, and email signature. If it looks balanced and professional, it is a stronger candidate."],
      ["Common studio naming styles", "You can use place-based names, abstract names, founder names, visual-object names, or two-word names. Northlight Studio, Paperframe, and Bright Matter each create a different feel."],
      ["Use the generator", "Open the <a href=\"/tools/studio-name-generator.html\">Studio Name Generator</a> for quick ideas. If your studio is photography-focused, also try the <a href=\"/tools/photography-business-name-generator.html\">Photography Business Name Generator</a>."]
    ],
  },
  {
    slug: "barbershop-name-ideas",
    pill: "Business",
    title: "Barbershop Name Ideas That Work on Signs, Maps, and Referrals",
    desc: "Find barbershop name ideas and learn how to choose a name that fits your local market and shop style.",
    excerpt: "A practical guide to naming a modern barbershop, classic barber studio, or grooming lounge.",
    tool: ["Barbershop Name Generator", "barbershop-name-generator"],
    body: [
      ["Your barbershop name has to be local and memorable", "A barbershop name is often discovered on Google Maps, street signage, referrals, and social posts. It should be clear enough that people know what you do, but strong enough to feel like a brand."],
      ["Match the name to the shop style", "A classic shop can use words like chair, razor, comb, or main street. A premium grooming lounge may use words like crown, gentry, brass, or studio. A modern fade shop can use sharper words like blade, line, clean, or cut."],
      ["Check competitors nearby", "Search your city or neighborhood before deciding. If five nearby shops already use razor, fade, or gentleman in their names, you may want a more distinctive direction."],
      ["Think about signage", "The name should look good on a window, mirror, booking page, and business card. Short names usually work better than long phrases."],
      ["Avoid confusing positioning", "If you focus on barbering, do not choose a name that sounds too much like a beauty salon. If you offer both barbering and salon services, choose a broader grooming or studio name."],
      ["Use the generator", "Try the <a href=\"/tools/barbershop-name-generator.html\">Barbershop Name Generator</a> for local-ready ideas. For broader beauty names, use the <a href=\"/tools/hair-salon-name-generator.html\">Hair Salon Name Generator</a>."]
    ],
  },
];

const existingBlogCards = [
  ["Guide", "How to Choose a Business Name: A Complete Guide", "A step-by-step process for choosing a business name that works today and scales tomorrow.", "how-to-choose-a-business-name"],
  ["Ideas", "50 Best YouTube Channel Name Ideas for 2026", "50 creative YouTube channel name ideas organized by niche, plus tips on picking the perfect name.", "best-youtube-channel-name-ideas"],
  ["Guide", "Fantasy Name Ideas: Tips for Worldbuilding", "Learn the patterns behind great fantasy names for characters, kingdoms, and creatures.", "fantasy-name-ideas-worldbuilding-tips"],
  ["Guide", "How to Name Your Brand: A Step-by-Step Guide", "Brand naming strategies, trademark basics, and common mistakes to avoid.", "how-to-name-your-brand"],
  ["Pets", "Best Cat Names for Every Personality", "Cat names for playful kittens, elegant cats, lazy naps, and rescue pets.", "best-cat-names-every-personality"],
  ["Gaming", "Cool Gamer Tags: How to Stand Out", "How to create gamer tags that people remember, plus 30 ready-to-use ideas.", "cool-gamer-tags-how-to-stand-out"],
  ["Business", "Coffee Shop Name Ideas That Attract Customers", "Naming strategies for cafes, espresso bars, and roasteries.", "coffee-shop-name-ideas"],
  ["Business", "How to Pick a Restaurant Name That Works", "Restaurant naming strategies that work on signage, menus, and delivery apps.", "how-to-pick-restaurant-name"],
  ["Creator", "Twitch Username Tips for New Streamers", "How to pick a Twitch username that helps you grow from day one.", "twitch-username-tips-new-streamers"],
  ["Gaming", "Dragon Names for D&D and Fantasy Stories", "Naming patterns for dragons in D&D campaigns, fantasy fiction, and worldbuilding.", "dragon-names-dnd-fantasy"],
  ["Guide", "How to Pick a Twitch Username That Grows With You", "Branding, cross-platform consistency, and growth tips for Twitch usernames.", "how-to-pick-twitch-username"],
  ["Pets", "Best Dog Names for Every Breed and Personality", "Dog names for big breeds, small pups, goofy companions, and working dogs.", "best-dog-names-every-breed"],
  ["Creator", "How to Choose a Podcast Name", "A practical naming guide for podcasts, interview shows, and niche audio brands.", "how-to-choose-podcast-name"],
  ["Fun", "WiFi Name Ideas: Funny and Clever Options", "Clean, funny, and clever WiFi name ideas for home networks.", "wifi-name-ideas-funny-clever"],
  ["Business", "Etsy Shop Name Ideas", "Etsy shop name ideas for handmade products, printables, stickers, and gifts.", "etsy-shop-name-ideas"],
  ["Gaming", "DnD Character Names Guide", "How to name DnD characters by class, race, tone, and campaign style.", "dnd-character-names-guide"],
  ["Business", "How to Name Your Etsy Shop: A Step-by-Step Guide", "Choose an Etsy shop name that ranks in search and builds your brand.", "how-to-name-etsy-shop"],
];

function htmlEscape(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function layoutHeader(title, desc, canonical, ogType = "website", extraHead = "") {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${title}</title><meta name="description" content="${htmlEscape(desc)}"/><link rel="canonical" href="${canonical}"/><link rel="icon" type="image/svg+xml" href="/favicon.svg"/><meta property="og:title" content="${title.replace(" | AI Name Generator", "")}"/><meta property="og:description" content="${htmlEscape(desc)}"/><meta property="og:type" content="${ogType}"/><meta property="og:url" content="${canonical}"/><meta name="twitter:card" content="summary_large_image"/><link rel="stylesheet" href="/assets/styles.css"/>${extraHead}</head>
<body>
<header class="site-header"><div class="wrap header-inner"><a class="brand" href="/index.html">AI Name Generator</a><nav class="nav"><a class="nav-link" href="/index.html">Home</a><a class="nav-link" href="/tools/index.html">Tools</a><a class="nav-link" href="/blog/">Blog</a><a class="nav-link" href="/about.html">About</a><a class="nav-link" href="/contact.html">Contact</a></nav></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="wrap footer-grid"><div><div class="footer-title">AI Name Generator</div><p class="footer-text">Free name ideas for creators, businesses, pets, games, and fun side projects.</p></div><div><div class="footer-title">Pages</div><div class="footer-links"><a href="/tools/index.html">All Tools</a><a href="/blog/">Blog</a><a href="/about.html">About</a><a href="/contact.html">Contact</a><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms</a></div></div></div><div class="wrap footer-bottom">Local preview first. Publish after final checks.</div></footer>
<script src="/assets/app.js"></script></body></html>`;
}

function toolHtml(tool) {
  const seed = JSON.stringify(tool.seed).replace(/"/g, "&quot;");
  const chips = tool.chips.map((chip) => `<button class="prompt-chip" type="button">${chip}</button>`).join("");
  const ideas = tool.seed.slice(0, 5).map((idea) => `<li>${idea}</li>`).join("");
  const starter = tool.seed.map((idea) => `<li class="idea-item">${idea}</li>`).join("");
  const prompts = tool.chips.map((chip) => `<article class="mini-card"><div class="pill">Try this</div><h3>${chip[0].toUpperCase() + chip.slice(1)}</h3><p>Use this prompt to get a faster first batch of ideas.</p><button class="button button-secondary quick-fill" type="button" data-tool="${tool.slug}" data-keyword="${chip}">Use prompt</button></article>`).join("\n");
  const checklist = tool.checklist.map((item) => `<li>${item}</li>`).join("");
  const related = tool.related.map(([name, slug]) => `<li><a href="/tools/${slug}.html">${name}</a></li>`).join("");
  const browse = tool.related.concat([["Business Name Generator", "business-name-generator"], ["Brand Name Generator", "brand-name-generator"], ["Gamer Tag Generator", "gamer-tag-generator"]]).slice(0, 6).map(([name, slug]) => `<article class="browse-card"><div class="pill">${tool.category}</div><h3><a href="/tools/${slug}.html">${name}</a></h3><p>Open this generator to explore more name ideas.</p></article>`).join("\n");
  const schema = JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":tool.title,"url":`${DOMAIN}/tools/${tool.slug}.html`,"description":tool.desc,"mainEntity":{"@type":"SoftwareApplication","name":tool.title,"applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}}, null, 2);
  return `${layoutHeader(`${tool.title} | AI Name Generator`, tool.desc, `${DOMAIN}/tools/${tool.slug}.html`, "website", `<script type="application/ld+json">${schema}</script>`)}
<main>
<section class="tool-hero"><div class="wrap tool-hero-grid"><div><div class="breadcrumbs"><a href="/index.html">Home</a><span>/</span><a href="/tools/index.html">Tools</a><span>/</span><span>${tool.title}</span></div><div class="pill">${tool.category}</div><h1>${tool.title}</h1><p class="hero-copy">${tool.desc}</p><div class="prompt-chip-row">${chips}</div></div><aside class="hero-panel hero-panel-small"><div class="panel-title">Quick ideas</div><ul class="clean-list compact-list">${ideas}</ul></aside></div></section>
<section class="section"><div class="wrap generator-grid"><div class="generator-card"><div class="section-head"><div><div class="pill">Generator</div><h2>Type a keyword and generate names</h2></div></div><form class="generator-form" data-tool="${tool.slug}"><label for="keyword-${tool.slug}">Keyword or style</label><input id="keyword-${tool.slug}" name="keyword" placeholder="Example: modern, premium, funny"/><label for="tone-${tool.slug}">Tone</label><select id="tone-${tool.slug}" name="tone"><option value="clean">Clean</option><option value="cute">Cute</option><option value="cool">Cool</option><option value="funny">Funny</option><option value="premium">Premium</option></select><button class="button button-primary" type="submit">Generate ideas</button></form><div class="result-panel"><div class="result-head"><div class="panel-title">Generated ideas</div><div class="result-actions"><button class="button button-secondary shuffle-button" type="button" data-tool="${tool.slug}">Shuffle ideas</button><button class="button button-secondary copy-all-button" type="button" data-target="results-${tool.slug}">Copy all</button></div></div><ul class="results-list" id="results-${tool.slug}" data-seed='${seed}'></ul></div><div class="shortlist-panel"><div class="result-head"><div><div class="panel-title">Your shortlist</div><p class="small-copy">Save your favorite ideas here before you copy or compare them.</p></div><div class="result-actions"><button class="button button-secondary copy-shortlist-button" type="button" data-target="shortlist-${tool.slug}">Copy shortlist</button><button class="button button-secondary clear-shortlist-button" type="button" data-target="shortlist-${tool.slug}">Clear</button></div></div><ul class="shortlist-list" id="shortlist-${tool.slug}"></ul></div></div><aside class="sidebar-card"><div class="pill">Starter list</div><h3>12 ready-made ideas</h3><ul class="idea-list">${starter}</ul></aside></div></section>
<section class="section section-alt"><div class="wrap two-col"><div><div class="pill">Tips</div><h2>How to use this tool</h2><p>${tool.tips}</p></div><div><div class="pill">Checklist</div><h3>A quick naming checklist</h3><ul class="clean-list compact-list">${checklist}</ul></div></div></section>
<section class="section"><div class="wrap"><div class="section-head"><div><div class="pill">Prompt ideas</div><h2>Fast ways to explore better name styles</h2></div></div><div class="mini-grid">${prompts}</div></div></section>
<section class="section section-alt"><div class="wrap narrow"><div class="pill">FAQ</div><h2>${tool.title} FAQ</h2><div class="faq-list"><details class="faq-item"><summary>What makes a good ${tool.title.replace(" Generator", "").toLowerCase()}?</summary><p>A good name should match the audience, be easy to remember, and fit the style you want to communicate.</p></details><details class="faq-item"><summary>Can I use these names for real projects?</summary><p>Yes, but always check search results, domains, social handles, and trademarks before you publish or sell anything under a name.</p></details></div></div></section>
<section class="section"><div class="wrap two-col"><div><div class="pill">Related tools</div><h2>More generators like this</h2><ul class="clean-list compact-list">${related}</ul></div><div><div class="pill">Next step</div><h3>What to do after you find a good name</h3><p>Save your top five options, say each one out loud, then check availability before making the final pick.</p></div></div></section>
<section class="section"><div class="wrap"><div class="section-head"><div><div class="pill">Keep browsing</div><h2>More generators people usually open next</h2></div></div><div class="browse-grid">${browse}</div></div></section>
</main>${footer()}`;
}

function blogHtml(blog) {
  const body = blog.body.map(([heading, content]) => `<h2>${heading}</h2><p>${content}</p>`).join("\n");
  return `${layoutHeader(`${blog.title} | AI Name Generator`, blog.desc, `${DOMAIN}/blog/${blog.slug}.html`, "article")}<style>.article-body p{margin-bottom:16px}.article-body h2{margin-top:32px;margin-bottom:12px}.article-body ul,.article-body ol{margin-bottom:16px;padding-left:24px}.article-body li{margin-bottom:8px;color:var(--muted)}</style>
<main>
<section class="tool-hero"><div class="wrap narrow"><div class="breadcrumbs"><a href="/index.html">Home</a><span>/</span><a href="/blog/">Blog</a><span>/</span><span>${blog.title}</span></div><div class="pill">${blog.pill}</div><h1>${blog.title}</h1><p class="hero-copy">${blog.desc}</p></div></section>
<section class="section"><div class="wrap narrow article-body">${body}<div style="margin-top:32px;padding:20px;background:var(--surface-alt);border-radius:var(--radius);border:1px solid #c9d7ff"><p style="margin:0"><strong>Ready for ideas?</strong> Try the <a href="/tools/${blog.tool[1]}.html">${blog.tool[0]}</a>.</p></div></div></section>
</main>${footer()}`;
}

function toolCard(tool) {
  return `<article class="tool-card">
      <div class="pill">${tool.category}</div>
      <h3><a href="/tools/${tool.slug}.html">${tool.title}</a></h3>
      <p>${tool.desc}</p>
      <div class="hint-row">${tool.chips.slice(0, 3).map((chip) => `<span>${chip}</span>`).join("")}</div>
      <a class="text-link" href="/tools/${tool.slug}.html">Open tool</a>
    </article>`;
}

function blogCard([pill, title, excerpt, slug]) {
  return `<article class="tool-card">
              <div class="pill">${pill}</div>
              <h3><a href="/blog/${slug}.html">${title}</a></h3>
              <p>${excerpt}</p>
              <a class="text-link" href="/blog/${slug}.html">Read article</a>
            </article>`;
}

function insertIntoToolGrid(html, sectionId, addition) {
  const marker = `<section class="section" id="${sectionId}">`;
  const start = html.indexOf(marker);
  if (start === -1) throw new Error(`Missing section ${sectionId}`);
  const sectionClose = html.indexOf(`</section>`, start);
  const gridClose = html.lastIndexOf(`            </div>`, sectionClose);
  if (gridClose === -1 || gridClose < start) throw new Error(`Missing tool grid close for ${sectionId}`);
  return html.slice(0, gridClose) + addition + "\n" + html.slice(gridClose);
}

for (const tool of tools) {
  fs.writeFileSync(path.join(ROOT, "tools", `${tool.slug}.html`), toolHtml(tool), "utf8");
}

for (const blog of blogs) {
  fs.writeFileSync(path.join(ROOT, "blog", `${blog.slug}.html`), blogHtml(blog), "utf8");
}

let toolsIndex = fs.readFileSync(path.join(ROOT, "tools", "index.html"), "utf8");
for (const category of ["Business", "Gaming"]) {
  const items = tools.filter((tool) => tool.category === category).map(toolCard).join("\n");
  toolsIndex = insertIntoToolGrid(toolsIndex, category.toLowerCase(), "\n" + items);
}
fs.writeFileSync(path.join(ROOT, "tools", "index.html"), toolsIndex, "utf8");

const allBlogCards = existingBlogCards.concat(blogs.map((blog) => [blog.pill, blog.title, blog.excerpt, blog.slug]));
const blogIndex = `${layoutHeader("Blog | AI Name Generator", "Tips, guides, and ideas for naming your business, brand, pets, characters, and more. Practical naming advice for every project.", `${DOMAIN}/blog/`)}
<main>
<section class="subhero"><div class="wrap narrow"><div class="pill">Blog</div><h1>Naming tips, guides, and ideas</h1><p>Practical advice for naming your business, brand, pets, characters, and creative projects.</p></div></section>
<section class="section"><div class="wrap"><div class="tool-grid">
            ${allBlogCards.map(blogCard).join("\n\n            ")}
          </div></div></section>
</main>${footer()}`;
fs.writeFileSync(path.join(ROOT, "blog", "index.html"), blogIndex, "utf8");

let home = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
home = home.replace("50 ready-to-use generators", "55 ready-to-use generators");
home = home.replace('<li><a href="/tools/guild-name-generator.html">Guild Name Generator</a></li>', '<li><a href="/tools/guild-name-generator.html">Guild Name Generator</a></li><li><a href="/tools/anime-name-generator.html">Anime Name Generator</a></li><li><a href="/tools/valorant-name-generator.html">Valorant Name Generator</a></li>');
home = home.replace('<li><a href="/tools/bakery-name-generator.html">Bakery Name Generator</a></li>', '<li><a href="/tools/bakery-name-generator.html">Bakery Name Generator</a></li><li><a href="/tools/agency-name-generator.html">Agency Name Generator</a></li><li><a href="/tools/studio-name-generator.html">Studio Name Generator</a></li>');
fs.writeFileSync(path.join(ROOT, "index.html"), home, "utf8");

let sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
const urls = tools.map((tool) => `${DOMAIN}/tools/${tool.slug}.html`).concat(blogs.map((blog) => `${DOMAIN}/blog/${blog.slug}.html`));
const missing = urls.filter((url) => !sitemap.includes(`<loc>${url}</loc>`));
const additions = missing.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join("\n");
if (additions) sitemap = sitemap.replace("</urlset>", `${additions}\n</urlset>`);
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap, "utf8");

console.log(`Generated ${tools.length} tools and ${blogs.length} blog articles.`);
