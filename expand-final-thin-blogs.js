#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = __dirname;

const additions = {
  "how-to-name-etsy-shop.html": {
    before: "<h2>Use a Generator for Ideas</h2>",
    html: `<h2>Common Etsy Naming Mistakes</h2><p>Avoid names that are too narrow, too hard to spell, or too close to another active shop. A name that only fits one product can become a problem if your shop expands into bundles, gifts, templates, or seasonal collections. A name with unusual spelling may look cute, but it can make repeat buyers struggle to find you again.</p><h2>Think About Packaging and Repeat Buyers</h2><p>Your Etsy shop name appears on listing pages, order emails, packaging inserts, thank-you cards, and social media profiles. A strong name should make sense in all of those places. If a buyer receives a package and wants to recommend the shop later, the name should be easy to remember and type.</p><h2>Final Shortlist Test</h2><p>Before choosing, put your top names into a fake Etsy listing title, Instagram bio, and package sticker. Then ask whether the name still fits your products, style, and future plans. Keep the name that feels clear, ownable, and flexible after that test.</p>`,
  },
  "best-cat-names-every-personality.html": {
    before: "<h2>Use a Cat Name Generator</h2>",
    html: `<h2>Test the Name at Home</h2><p>Cat names often become nicknames, so try saying the name in different situations: calling them for dinner, greeting them in the morning, and talking to the vet. If the name feels too long or awkward, shorten it before it becomes permanent.</p><h2>Match Sound to Personality</h2><p>Soft names can fit gentle or elegant cats, while sharp names can fit bold, playful, or mischievous cats. You can also choose contrast on purpose, such as giving a tiny kitten a dramatic name or a serious cat a silly one.</p><h2>Avoid Confusing Household Names</h2><p>If you have multiple pets or family members with similar names, choose something distinct. Names that sound too close can make feeding, training, and vet visits more confusing than they need to be.</p>`,
  },
  "dnd-character-names-guide.html": {
    before: "<h2>Use a DnD Name Generator</h2>",
    html: `<h2>Match the Campaign Tone</h2><p>A grim political campaign, cozy tavern adventure, pirate one-shot, and high-magic epic all need different name styles. Ask your DM about the tone before choosing something extremely silly or extremely dramatic. A name that fits the campaign helps everyone stay immersed.</p><h2>Think About How Other Players Will Say It</h2><p>Your party will say the name many times during combat, roleplay, and planning. If the spelling is beautiful but nobody can pronounce it, the table may shorten it into something else. A strong D&D name should be flavorful and usable at the table.</p><h2>Add a Reason Behind the Name</h2><p>A title, clan name, nickname, or family history can make a simple name feel richer. Ask why your character has that name, who gave it to them, and whether they like it. That small detail can create roleplay hooks.</p>`,
  },
  "cool-gamer-tags-how-to-stand-out.html": {
    before: "<h2>Use a Generator for Ideas</h2>",
    html: `<h2>Make It Easy to Read in Fast Moments</h2><p>Gamer tags appear in kill feeds, lobbies, scoreboards, overlays, and chat. If the name uses too many symbols or strange letter swaps, it may look messy when the game is moving quickly. Clean names are easier to remember after a match.</p><h2>Match the Games You Actually Play</h2><p>A name for shooters can sound sharper and more competitive. A name for cozy games, RPGs, or streaming can be more relaxed. If you play many genres, choose something broad enough that it will not feel strange outside one game.</p><h2>Check Cross-Platform Consistency</h2><p>If you use the same identity on Discord, Twitch, YouTube, TikTok, Steam, Xbox, or PlayStation, check availability before committing. A consistent handle makes it easier for teammates and viewers to find you later.</p>`,
  },
  "how-to-pick-twitch-username.html": {
    before: "<h2>Use a Generator to Explore</h2>",
    html: `<h2>Think Beyond Your First Category</h2><p>Many streamers start in one game or niche and expand later. A username that only fits one title can become limiting when you move into variety streaming, just chatting, reactions, or a different community. Choose a name with enough room to grow.</p><h2>Make It Easy for Viewers to Repeat</h2><p>Viewers may recommend your channel in voice chat, comments, Discord, or social posts. If the username is hard to pronounce or spell, growth becomes harder. A good Twitch name should be easy to say after hearing it once.</p><h2>Test It on Stream Assets</h2><p>Put the name into a mock overlay, profile banner, offline screen, and clip title. If it looks too long or visually messy, simplify it before you build your brand assets around it.</p>`,
  },
  "studio-name-ideas.html": {
    before: "<h2>Use the generator</h2>",
    html: `<h2>Common Studio Naming Mistakes</h2><p>Many studio names fail because they are too vague, too trendy, or too tied to one service. A name that works for photography may not work for design, video, or content strategy later. Choose a name that can hold the kind of creative work you want to be known for.</p><h2>Test It With Real Client Touchpoints</h2><p>Place the name on a proposal cover, portfolio homepage, invoice, Instagram bio, and case study title. If it feels professional in all of those places, it is more likely to support the business long term.</p>`,
  },
  "speakeasy-bar-name-ideas.html": {
    before: "<h2>Use the generator</h2>",
    html: `<h2>Common Speakeasy Naming Mistakes</h2><p>A speakeasy name can be mysterious, but it should not be impossible to remember. If guests cannot search it, tag it, or recommend it, the name may hurt discovery. Mystery should create curiosity, not confusion.</p><h2>Test the Name in the Guest Journey</h2><p>Imagine the name on a reservation page, small door sign, cocktail menu, receipt, and social post. A strong speakeasy name should feel intriguing at every step, from discovery to the story guests tell afterward.</p>`,
  },
  "league-of-legends-name-ideas.html": {
    before: "<h2>Use the generator</h2>",
    html: `<h2>Common League Name Mistakes</h2><p>Names that rely too heavily on one champion, one meme, or one rank can age quickly. If your role or main changes, the username may stop fitting. A broader name can still feel League-inspired without trapping you in one identity.</p><h2>Test It in Content and Voice Chat</h2><p>Say the name in Discord, imagine it in champ select, and put it into a thumbnail or stream title. If it is readable, searchable, and easy to say, it has a better chance of sticking.</p>`,
  },
  "coffee-shop-name-ideas.html": {
    before: "<h2>Use a Generator for More Ideas</h2>",
    html: `<h2>Match the Name to the Customer Habit</h2><p>Coffee shops become part of daily routines. A name should feel comfortable enough for regular visits and distinctive enough for first-time discovery. Think about whether customers will say, "Let's meet at [name]" or "I grabbed coffee from [name]."</p><h2>Think About Menu and Atmosphere</h2><p>A specialty roaster, cozy neighborhood cafe, student study spot, and elegant espresso bar need different names. The name should match the menu, interior, music, price point, and pace of service.</p><h2>Avoid Generic Coffee Words Alone</h2><p>Bean, brew, roast, cup, and cafe can work, but they need a stronger partner word to feel ownable. Pair a coffee cue with a place, mood, material, or story so the shop does not blend into every other cafe listing.</p>`,
  },
  "fine-line-tattoo-studio-name-ideas.html": {
    before: "<h2>Use the generator</h2>",
    html: `<h2>Common Fine Line Naming Mistakes</h2><p>A fine line tattoo name should not feel too harsh, crowded, or generic. Names that sound like a traditional walk-in shop may not fit a delicate, appointment-based studio. Names that are too soft, however, may fail to communicate tattooing clearly.</p><h2>Test It on Social Profiles</h2><p>Fine line discovery often happens on Instagram, TikTok, and Pinterest. Put the name into a handle, bio, booking link, and watermark. If it looks refined and easy to read, it is stronger.</p>`,
  },
  "tattoo-shop-name-ideas.html": {
    before: "<h2>Use the generator</h2>",
    html: `<h2>Common Tattoo Shop Naming Mistakes</h2><p>A tattoo shop name can be bold, but it should still match the artists, style, and client experience. A name that is too aggressive may scare away first-time clients. A name that is too soft may not fit traditional or blackwork artists.</p><h2>Test It With Artist Growth</h2><p>If the shop may add guest artists, merch, events, or multiple styles, choose a name that gives the studio room to grow. The best tattoo shop names can hold a strong identity without limiting the artists inside it.</p>`,
  },
};

for (const [file, config] of Object.entries(additions)) {
  const fullPath = path.join(root, "blog", file);
  const html = fs.readFileSync(fullPath, "utf8");
  if (html.includes(config.html.slice(0, 80))) {
    console.log(`Already expanded ${file}`);
    continue;
  }
  const marker = config.before;
  const idx = html.indexOf(marker);
  if (idx === -1) throw new Error(`Marker not found in ${file}: ${marker}`);
  const next = html.slice(0, idx) + config.html + marker + html.slice(idx + marker.length);
  fs.writeFileSync(fullPath, next, "utf8");
  console.log(`Expanded ${file}`);
}
