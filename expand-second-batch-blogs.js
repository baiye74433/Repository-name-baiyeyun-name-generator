#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = __dirname;

const articles = {
  "moving-company-name-ideas.html": {
    tool: ["Moving Company Name Generator", "moving-company-name-generator"],
    related: ["Business Name Generator", "business-name-generator"],
    examples: ["TrueRoute Movers", "SafeLift Moving Co", "Northline Relocation", "BrightBox Moving", "PrimePath Movers"],
    sections: [
      ["Trust comes before personality", "People hire movers when something important is happening in their lives. They may be changing homes, moving offices, downsizing, or relocating across a long distance. The company name should make the move feel organized, safe, and manageable. A silly or unclear name can make the business harder to trust."],
      ["Use movement language that feels clean", "Words like move, route, mile, pack, haul, home, lift, box, and path can work well when they are paired with a stronger brand element. Keep the phrasing simple so it still sounds natural in referrals and phone calls."],
      ["Think about trucks and local search", "Moving company names often need to perform on the side of a truck, in apartment referrals, and in Google Maps listings. If the name looks cluttered or confusing there, it will slow the brand down. Shorter names are usually stronger for vehicle graphics."],
      ["Leave room for premium and commercial work", "If you may later add white-glove moves, office relocations, storage, packing, junk removal, or long-distance service, avoid a name that feels too small or too casual. A broader name creates better long-term flexibility."],
      ["Avoid names that create anxiety", "Words that sound rough, rushed, cheap, or careless can hurt trust. Customers want movers who handle furniture, boxes, and fragile items with care. A dependable name is often better than a loud one."],
      ["Naming formulas that work", "Try reliability word plus Movers, local cue plus Moving Co, route word plus Relocation, founder name plus Moving, or premium word plus Logistics. The formula gives structure, but the final name should still sound easy to say and easy to remember."],
      ["Check before you commit", "Search local competitors, check domains and social handles, and test the name in a quote email, truck design, and referral sentence. If someone can remember and spell it after hearing it once, the name is doing its job."],
    ],
  },
  "hvac-business-name-ideas.html": {
    tool: ["HVAC Business Name Generator", "hvac-business-name-generator"],
    related: ["Electrical Business Name Generator", "electrical-business-name-generator"],
    examples: ["ClimatePoint HVAC", "TrueTemp Heating & Cooling", "NorthStar Air", "ComfortLine Services", "PrimeFlow HVAC"],
    sections: [
      ["Lead with comfort and reliability", "HVAC names should make customers feel that their heating, cooling, ventilation, and indoor comfort problems will be handled professionally. The service can be urgent, expensive, and technical, so the name needs to feel trustworthy before a customer asks for an estimate."],
      ["Use climate words with purpose", "Words like comfort, climate, air, flow, heat, cool, temp, indoor, and system can work well. Avoid stacking too many technical terms into one name. One clear HVAC cue plus one strong brand word is usually enough."],
      ["Think about emergency calls and maintenance plans", "HVAC companies often handle both urgent repairs and scheduled maintenance. A name that only sounds like emergency service may miss replacement and maintenance customers. A name that only sounds premium may feel too slow for urgent calls. Balance both sides if you offer both."],
      ["Plan for residential and commercial growth", "If you might serve commercial accounts, property managers, or new construction, choose a name that can scale. A small neighborhood name can work, but it should not limit larger contracts later."],
      ["Avoid unsupported claims", "Words like certified, guaranteed, eco-safe, or 24-hour can create problems if they are not accurate. Keep the name confident, but do not build claims into the brand unless you can support them everywhere you advertise."],
      ["Naming formulas that work", "Try comfort word plus HVAC, climate word plus Services, local cue plus Heating & Cooling, founder name plus Air, or system word plus Mechanical. Test each formula in a phone greeting and Google listing."],
      ["Final checks", "Search nearby competitors, check domain availability, and see how the name looks on a truck and service agreement. HVAC customers often compare several companies, so the name should feel established and calm."],
    ],
  },
  "bar-name-ideas.html": {
    tool: ["Bar Name Generator", "bar-name-generator"],
    related: ["Restaurant Name Generator", "restaurant-name-generator"],
    examples: ["The Copper Room", "Juniper & Stone", "Lowlight Tavern", "Northside Social", "The Velvet Rail"],
    sections: [
      ["Start with the kind of night you want to create", "A bar name is not just a label. It sets expectations for the room, the drinks, the music, the crowd, and the price point. A neighborhood pub, cocktail lounge, rooftop bar, sports bar, and wine bar should not all sound the same."],
      ["Use atmosphere words carefully", "Words like room, cellar, social, tavern, rail, lounge, bar, garden, and house can create an instant setting. Pair them with a sensory word, material, location, or mood so the name feels specific rather than generic."],
      ["Think about signage and word of mouth", "Bar names need to work on signs, menus, receipts, event posters, social bios, and casual recommendations. If the name is too long or hard to pronounce, people may shorten it in a way you do not control."],
      ["Match the name to the drink program", "A craft cocktail lounge can use a more refined name. A dive bar can use something direct and local. A beer hall can use communal language. A rooftop bar may benefit from view, sky, or height cues."],
      ["Avoid names that box you in", "If you start with cocktails but may add food, events, brunch, or live music, choose a name that can hold more than one offer. A flexible bar name gives you room to evolve as the concept finds its audience."],
      ["Naming formulas that work", "Try material plus room, botanical word plus bar, local cue plus tavern, mood word plus lounge, or object plus social. The best formula is the one that sounds natural when someone says, 'Meet me at [name].'"],
      ["Before opening", "Check local competitors, domains, social handles, business registration, and trademark conflicts. Also test the name in a menu header and outdoor sign. A bar name should feel good both online and on the street."],
    ],
  },
  "tree-service-name-ideas.html": {
    tool: ["Tree Service Name Generator", "tree-service-name-generator"],
    related: ["Business Name Generator", "business-name-generator"],
    examples: ["CanopyCare Tree Service", "Summit Arbor Co", "Oakline Tree Works", "TrueBranch Removal", "Northwood Tree Care"],
    sections: [
      ["Balance nature and safety", "Tree service names need to sound connected to nature, but also serious about safety. Customers may need pruning, trimming, removals, storm cleanup, stump grinding, or arborist advice. A name should suggest skill, care, and control around property and power lines."],
      ["Use tree and canopy language clearly", "Words like oak, cedar, canopy, branch, arbor, stump, timber, root, and wood can work well. Pair one natural word with a professional service word so the name does not sound like a campground or furniture brand."],
      ["Decide whether arborist positioning matters", "If the business has certified arborists or wants higher-end tree health work, the name should feel more expert and less like basic hauling. If the focus is removals and storm cleanup, stronger action words may fit better."],
      ["Think about storm work and local trust", "Tree service calls often happen after damage or during urgent property concerns. A dependable name can reassure customers that the crew will work safely and clean up properly."],
      ["Avoid vague landscaping confusion", "If the business focuses on tree work, make that clear. Names that sound too much like general landscaping can attract the wrong leads. If you also offer landscaping, then a broader outdoor services name may be useful."],
      ["Naming formulas that work", "Try tree word plus Service, arbor word plus Co, local cue plus Tree Care, safety word plus Removal, or founder name plus Tree Works. Test whether the name still sounds credible on a quote for a difficult removal."],
      ["Check before choosing", "Search local competitors, check domains, verify licensing language, and make sure the name fits on trucks and yard signs. A clear, professional name matters in a trade where risk is visible."],
    ],
  },
  "fortnite-name-ideas.html": {
    tool: ["Fortnite Name Generator", "fortnite-name-generator"],
    related: ["Gamer Tag Generator", "gamer-tag-generator"],
    examples: ["VortexKai", "EditPulse", "NovaCrank", "ZoneDrift", "ClutchMilo"],
    sections: [
      ["Short beats complicated", "Fortnite names are strongest when they are short enough to read instantly. Long usernames usually lose impact in highlights, kill feeds, party lists, and thumbnails. If you want your name to feel sharp, compact names almost always win over overloaded tags."],
      ["Match the way you actually play", "A sweaty build player, funny squad creator, zero-build grinder, casual streamer, and creative map maker do not need the same style of name. Match the name to the vibe you want people to expect when they queue with you or land on your channel."],
      ["Think about stream and clip overlays", "If you stream or post clips, your name needs to look good in thumbnails, overlays, captions, and social bios. Test the name in a small space before you commit so it still feels clean when compressed."],
      ["Skip random numbers if possible", "Random number strings usually make a username feel weaker. Use numbers only if they add meaning, rhythm, or brand consistency. Clean names tend to age better and look more confident."],
      ["Use Fortnite energy without copying", "Words connected to zones, edits, builds, drops, storms, clutch plays, and movement can work. Avoid copying pro players or famous creators too closely. The name should feel inspired by the game, not borrowed from someone else."],
      ["Naming formulas that work", "Try action word plus short name, game cue plus clean noun, movement word plus handle, one invented word, or duo-friendly paired names. The best Fortnite usernames are easy to say in voice chat and easy to search after a clip."],
      ["Before you switch", "Check whether the same handle is available on Epic, Twitch, YouTube, TikTok, Discord, and X. If you post clips, consistency matters. Also make sure the name still feels good if your content expands beyond Fortnite."],
    ],
  },
  "speakeasy-bar-name-ideas.html": {
    tool: ["Bar Name Generator", "bar-name-generator"],
    related: ["Restaurant Name Generator", "restaurant-name-generator"],
    examples: ["The Hidden Key", "Velvet Ledger", "Room 27", "The Low Lantern", "Juniper Door"],
    sections: [
      ["Create a sense of discovery", "A speakeasy name should feel like a secret worth finding. It can suggest a hidden room, old door, password, low light, back alley, private club, or vintage cocktail ritual. The name should make the guest curious before they see the entrance."],
      ["Use mystery without becoming confusing", "Mystery works, but the name still needs to be searchable and pronounceable. If guests cannot remember it, tag it, or tell friends where they went, the concept loses marketing power."],
      ["Match the era and menu", "Some speakeasy concepts lean 1920s and classic. Others are modern, Japanese-inspired, tropical, or hotel-lounge style. The name should match the drinks, music, interior design, and level of formality."],
      ["Think about the entrance experience", "If the bar is behind a bookcase, below a restaurant, through an unmarked door, or inside another venue, the name can hint at that detail. A good speakeasy name often becomes part of the story guests tell later."],
      ["Avoid overused secret words", "Hidden, secret, blind, and password can work, but they are common. Pair them with a distinctive noun, number, material, or local reference to make the name more ownable."],
      ["Naming formulas that work", "Try object plus room, number plus door, mood word plus lounge, vintage word plus bar, or material plus cellar. Read the name as if it were printed on a small brass plaque."],
      ["Final checks", "Check local nightlife competitors, domain and handle availability, and whether the name works for reservations, menus, and map listings. A speakeasy name can be mysterious, but it still needs practical usability."],
    ],
  },
  "tattoo-shop-name-ideas.html": {
    tool: ["Tattoo Shop Name Generator", "tattoo-shop-name-generator"],
    related: ["Studio Name Generator", "studio-name-generator"],
    examples: ["Black Lantern Tattoo", "Needle & North", "True Line Studio", "Iron Bloom Tattoo", "Old Signal Ink"],
    sections: [
      ["Match the name to the shop style", "A tattoo shop name should tell people what kind of experience to expect. Traditional, fine line, blackwork, realism, flash, illustrative, luxury, and walk-in shops can all use different naming styles. The name should fit the artists and the clientele."],
      ["Use ink language with restraint", "Words like ink, needle, line, flash, black, skin, mark, and studio are familiar, but they can become generic quickly. Pair one industry cue with a stronger image, place, or mood."],
      ["Think about artist growth", "If the shop may host multiple artists, guest spots, merch, events, or appointment-only work, avoid a name that feels too tied to one tiny niche. The name should give artists room to bring their own styles."],
      ["Consider the client journey", "Tattoo clients look at social feeds, portfolios, booking forms, reviews, and studio photos before they book. A strong name should feel good in an Instagram handle, storefront sign, aftercare sheet, and deposit invoice."],
      ["Avoid names that feel intimidating by accident", "A dark or intense name can work for some shops, but it should match the actual brand. If the studio focuses on fine line, florals, small tattoos, or first-time clients, a softer name may convert better."],
      ["Naming formulas that work", "Try image word plus Tattoo, object plus Studio, line word plus Ink, local cue plus Tattoo Co, or founder concept plus Atelier. Test whether the name looks strong under a portfolio grid."],
      ["Before choosing", "Search local tattoo studios, check domains and handles, and make sure the name does not conflict with a known artist or shop. Tattoo branding travels through social media, so distinctiveness matters."],
    ],
  },
  "fine-line-tattoo-studio-name-ideas.html": {
    tool: ["Tattoo Shop Name Generator", "tattoo-shop-name-generator"],
    related: ["Studio Name Generator", "studio-name-generator"],
    examples: ["Softline Studio", "Needle & Pearl", "Quiet Ink", "Luna Line Tattoo", "Fine Form Studio"],
    sections: [
      ["Make the name feel precise and calm", "Fine line tattoo studios often attract clients who care about subtlety, detail, and design. The name should feel refined, delicate, and trustworthy. Loud or aggressive names may not match the experience these clients expect."],
      ["Use visual words that suggest detail", "Words like line, fine, form, tiny, soft, pearl, bloom, script, detail, and studio can work well. Pair them with a calm brand word so the name feels polished rather than generic."],
      ["Think about Instagram first", "Fine line tattoo discovery often happens on Instagram, TikTok, and Pinterest. The name should look clean in a handle, watermark, profile bio, and booking link. Short, elegant names tend to perform well visually."],
      ["Leave room for more than one style", "A studio may start with fine line and later add ornamental, floral, micro realism, script, cosmetic tattooing, or delicate color work. Avoid a name that becomes too narrow if the artist roster grows."],
      ["Match the booking experience", "If the studio is appointment-only, private, luxury, or design-led, the name should support that positioning. A refined name can help clients feel they are booking a careful creative service, not a rushed walk-in shop."],
      ["Naming formulas that work", "Try soft word plus Studio, line word plus Tattoo, material word plus Ink, botanical word plus Atelier, or simple invented brand plus Studio. Read the name under a small logo mark to see if it feels balanced."],
      ["Final checks", "Search tattoo shops and artists in your region, check social handles, and make sure the name is distinct enough for referrals. A fine line studio name should be easy to remember without being too plain."],
    ],
  },
  "league-of-legends-name-ideas.html": {
    tool: ["League of Legends Name Generator", "league-of-legends-name-generator"],
    related: ["Gamer Tag Generator", "gamer-tag-generator"],
    examples: ["BaronVex", "LaneGhost", "NexusKai", "TiltProof", "RuneDrift"],
    sections: [
      ["Choose a name that fits your role", "League of Legends names can reflect lane, champion pool, playstyle, or attitude. A top laner, jungle main, support player, one-trick, ARAM regular, and ranked grinder may all want different name styles."],
      ["Keep it readable in champ select", "Your name appears in lobbies, post-game screens, match history, overlays, and social profiles. If it is hard to read quickly, it loses impact. Short names usually feel cleaner than long joke names."],
      ["Use game references lightly", "Words connected to Baron, Nexus, Rift, rune, lane, ward, smite, flash, and tilt can work, but too many references can sound forced. One clear League cue is usually enough."],
      ["Think about ranked and content", "If you stream, post clips, coach, or build a social account around League, choose a name that works outside the client. A username that is funny in a lobby may not look strong on a YouTube thumbnail."],
      ["Avoid copying champion names too closely", "Champion-inspired names can be fun, but direct copies or tiny variations may feel unoriginal and may be unavailable. Build a name around the feeling of your champion pool rather than copying the champion exactly."],
      ["Naming formulas that work", "Try role cue plus short name, game word plus clean noun, champion vibe plus handle, tilt-proof phrase, or one invented word. The best names are easy for teammates to say and easy for viewers to search."],
      ["Before changing your handle", "Check Riot availability, Discord, Twitch, YouTube, TikTok, and other accounts if you care about consistency. Also consider whether the name still works if your main role or champion pool changes."],
    ],
  },
  "studio-name-ideas.html": {
    tool: ["Studio Name Generator", "studio-name-generator"],
    related: ["Photography Business Name Generator", "photography-business-name-generator"],
    examples: ["Northlight Studio", "Paperframe", "Bright Matter", "Studio Vale", "Quiet Signal"],
    sections: [
      ["A studio name should feel visual", "Studio names often work best when they create an image. Words connected to light, form, frame, room, paper, canvas, signal, and direction can make the business feel creative before anyone sees the portfolio."],
      ["Leave room for the work to evolve", "A photography studio may later add video, content strategy, design, workshops, products, or consulting. A narrow name can become a problem. A flexible name gives you space to grow without rebranding."],
      ["Pick the right level of personality", "Some studios need a founder-led name. Others need a brand name that feels bigger than one person. If you plan to hire a team, sell products, or build a larger creative company, choose a name that can hold that future."],
      ["Look at the name on a portfolio page", "Before deciding, place the name in a fake website header, Instagram bio, proposal cover, and email signature. If it looks balanced and professional, it is a stronger candidate."],
      ["Choose a naming style", "You can use place-based names, abstract names, founder names, visual-object names, or two-word names. Northlight Studio, Paperframe, and Bright Matter each create a different feel. Pick the style that matches your work and audience."],
      ["Naming formulas that work", "Try light word plus Studio, object word plus Works, abstract word plus Creative, place word plus Studio, or founder concept plus Co. The name should sound natural when attached to a portfolio, invoice, and case study."],
      ["Final checks", "Search similar studios, check domains and social handles, and test the name as a logo. A studio name should be distinctive without needing a long explanation."],
    ],
  },
};

function renderBody(config) {
  const sections = config.sections.map(([heading, text]) => `<h2>${heading}</h2><p>${text}</p>`).join("");
  const examples = config.examples.map((name) => `<li>${name}</li>`).join("");
  return `${sections}<h2>Example name directions</h2><p>Use examples as direction, not as final answers. A strong naming session should create multiple styles so you can compare practical, premium, local, playful, and brandable options before choosing.</p><ul>${examples}</ul><h2>How to narrow the shortlist</h2><p>Remove names that are hard to spell, too close to competitors, too narrow for future plans, or too vague for the audience to understand. Keep three to five names and test them in real places where the name will appear.</p><h2>Use the generator</h2><p>Try the <a href="/tools/${config.tool[1]}.html">${config.tool[0]}</a> for quick options. You can also compare ideas with the <a href="/tools/${config.related[1]}.html">${config.related[0]}</a>.</p><div style="margin-top:32px;padding:20px;background:var(--surface-alt);border-radius:var(--radius);border:1px solid #c9d7ff"><p style="margin:0"><strong>Ready for ideas?</strong> Try the <a href="/tools/${config.tool[1]}.html">${config.tool[0]}</a>.</p></div>`;
}

for (const [file, config] of Object.entries(articles)) {
  const fullPath = path.join(root, "blog", file);
  const html = fs.readFileSync(fullPath, "utf8");
  const startTag = '<div class="wrap narrow article-body">';
  const start = html.indexOf(startTag);
  if (start === -1) throw new Error(`Could not find article body start: ${file}`);
  const bodyStart = start + startTag.length;
  const end = html.indexOf("</div></section>", bodyStart);
  if (end === -1) throw new Error(`Could not find article body end: ${file}`);
  const next = html.slice(0, bodyStart) + renderBody(config) + html.slice(end);
  fs.writeFileSync(fullPath, next, "utf8");
  console.log(`Expanded ${file}`);
}
