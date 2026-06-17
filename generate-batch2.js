#!/usr/bin/env node
/**
 * Batch 2: Generate more tool pages
 */
const fs = require('fs');
const path = require('path');
const TOOLS_DIR = path.join(__dirname, 'tools');
const DOMAIN = 'https://baiyeyun.xyz';

const newTools = [
  {
    slug: 'gym-name-generator',
    title: 'Gym Name Generator',
    category: 'Business',
    desc: 'Generate gym names for fitness studios, CrossFit boxes, yoga studios, and personal training brands.',
    chips: ['crossfit', 'yoga', 'personal training', 'fitness studio'],
    quickIdeas: ['Iron Republic', 'Peak Performance', 'The Fit Collective', 'SweatBox', 'Apex Athletics'],
    seed: ['Iron Republic','Peak Performance','The Fit Collective','SweatBox','Apex Athletics','Barbell Club','Flex Factory','Grind House Gym','Muscle Lab','Core Culture','Rep Station','Lift Society'],
    prompts: [{ label: 'CrossFit', keyword: 'crossfit' }, { label: 'Yoga Studio', keyword: 'yoga' }, { label: 'Personal Training', keyword: 'personal training' }, { label: 'MMA', keyword: 'mma' }, { label: 'Pilates', keyword: 'pilates' }],
    faqs: [{ q: 'What makes a good gym name?', a: 'A good gym name sounds strong, motivating, and easy to remember. It should work on signage, merchandise, and social media.' }, { q: 'Should I include my city in the gym name?', a: 'Only if you plan to stay local. If you want to expand or build an online brand, keep it location-independent.' }],
    tips: 'Gym names need to look good on a T-shirt, a water bottle, and a billboard. If it does not work as a logo, keep searching.',
    checklist: ['Check local gym listings for duplicate names.','Test the name on merchandise mockups.','Verify Instagram and domain availability.','Make sure it sounds motivating when spoken aloud.'],
    related: ['Brand Name Generator', 'Business Name Generator', 'Yoga Studio Name Generator'],
    relatedSlugs: ['brand-name-generator', 'business-name-generator', 'brand-name-generator'],
    nextStep: 'Secure Instagram and a simple website. Fitness brands rely heavily on social media for client acquisition.',
    browsePicks: [{ cat: 'Business', name: 'Brand Name Generator', slug: 'brand-name-generator' }, { cat: 'Business', name: 'Business Name Generator', slug: 'business-name-generator' }, { cat: 'Business', name: 'Hair Salon Name Generator', slug: 'hair-salon-name-generator' }, { cat: 'Creator', name: 'Instagram Username Generator', slug: 'instagram-username-generator' }, { cat: 'Business', name: 'Restaurant Name Generator', slug: 'restaurant-name-generator' }, { cat: 'Business', name: 'Coffee Shop Name Generator', slug: 'coffee-shop-name-generator' }],
  },
  {
    slug: 'baby-name-generator',
    title: 'Baby Name Generator',
    category: 'Fun',
    desc: 'Generate baby names by style, origin, and meaning. Find unique, classic, modern, and timeless names for boys and girls.',
    chips: ['classic', 'modern', 'unique', 'nature', 'biblical'],
    quickIdeas: ['Aurora', 'Elias', 'Ivy', 'Leo', 'Stella'],
    seed: ['Aurora','Elias','Ivy','Leo','Stella','Jasper','Willow','Felix','Hazel','Miles','Nova','Rowan'],
    prompts: [{ label: 'Classic', keyword: 'classic' }, { label: 'Modern', keyword: 'modern' }, { label: 'Nature-Inspired', keyword: 'nature' }, { label: 'Short and Sweet', keyword: 'short' }, { label: 'Strong', keyword: 'strong' }],
    faqs: [{ q: 'How do I choose a baby name?', a: 'Consider how it sounds with your last name, check the meaning, and make sure you both love it. Say it out loud 10 times before deciding.' }, { q: 'Should I tell people the name before the baby is born?', a: 'That is personal preference. Sharing early invites opinions. Waiting until birth avoids outside pressure.' }],
    tips: 'The best baby names survive the "full name test" — say the first, middle, and last name together. Does it flow? Does it sound like a real person?',
    checklist: ['Say the full name out loud with your last name.','Check the initials — do they spell anything awkward?','Google the name to make sure there are no negative associations.','Consider how it will look on a resume in 25 years.'],
    related: ['Pet Name Generator', 'Fantasy Name Generator', 'Nickname Generator'],
    relatedSlugs: ['pet-name-generator', 'fantasy-name-generator', 'nickname-generator'],
    nextStep: 'Once you have a shortlist, live with the names for a few weeks. See which one sticks.',
    browsePicks: [{ cat: 'Fun', name: 'Pet Name Generator', slug: 'pet-name-generator' }, { cat: 'Gaming', name: 'Fantasy Name Generator', slug: 'fantasy-name-generator' }, { cat: 'Fun', name: 'Nickname Generator', slug: 'nickname-generator' }, { cat: 'Pets', name: 'Cat Name Generator', slug: 'cat-name-generator' }, { cat: 'Pets', name: 'Dog Name Generator', slug: 'dog-name-generator' }, { cat: 'Gaming', name: 'Dragon Name Generator', slug: 'dragon-name-generator' }],
  },
  {
    slug: 'minecraft-name-generator',
    title: 'Minecraft Name Generator',
    category: 'Gaming',
    desc: 'Generate Minecraft usernames for survival worlds, creative servers, modded gameplay, and multiplayer communities.',
    chips: ['survival', 'creative', 'modded', 'multiplayer', 'pvp'],
    quickIdeas: ['BlockStorm', 'CraftVoid', 'RedstoneFox', 'EnderPulse', 'CreeperVolt'],
    seed: ['BlockStorm','CraftVoid','RedstoneFox','EnderPulse','CreeperVolt','PixelMiner','NetherSpark','ObsidianEdge','DiamondRush','BiomeWalker','ChunkMaster','LavaFlowGG'],
    prompts: [{ label: 'Survival', keyword: 'survival' }, { label: 'Creative', keyword: 'creative' }, { label: 'Modded', keyword: 'modded' }, { label: 'PvP', keyword: 'pvp' }, { label: 'SkyBlock', keyword: 'skyblock' }],
    faqs: [{ q: 'What makes a good Minecraft name?', a: 'Short, unique, and easy to type in chat. Minecraft names are global and must be unique across all players.' }, { q: 'Can I change my Minecraft name?', a: 'Yes, you can change your Java Edition username every 30 days. Bedrock Edition names can be changed through your Microsoft account.' }],
    tips: 'Minecraft names appear in chat, on signs, and in server leaderboards. Keep it short enough that other players can type it quickly.',
    checklist: ['Check name availability on Minecraft.','Make sure it is easy to type in chat.','Avoid names too similar to famous YouTubers.','Test it as a server tag or clan prefix.'],
    related: ['Gamer Tag Generator', 'Fantasy Name Generator', 'Guild Name Generator'],
    relatedSlugs: ['gamer-tag-generator', 'fantasy-name-generator', 'guild-name-generator'],
    nextStep: 'Register the name on Minecraft and secure matching Discord and YouTube handles if you plan to create content.',
    browsePicks: [{ cat: 'Gaming', name: 'Gamer Tag Generator', slug: 'gamer-tag-generator' }, { cat: 'Gaming', name: 'Fantasy Name Generator', slug: 'fantasy-name-generator' }, { cat: 'Gaming', name: 'Guild Name Generator', slug: 'guild-name-generator' }, { cat: 'Gaming', name: 'Team Name Generator', slug: 'team-name-generator' }, { cat: 'Gaming', name: 'Dragon Name Generator', slug: 'dragon-name-generator' }, { cat: 'Creator', name: 'YouTube Name Generator', slug: 'youtube-name-generator' }],
  },
  {
    slug: 'clan-name-generator',
    title: 'Clan Name Generator',
    category: 'Gaming',
    desc: 'Generate clan names for FPS squads, MMO guilds, mobile gaming teams, and competitive esports groups.',
    chips: ['fps', 'mmo', 'mobile', 'esports', 'competitive'],
    quickIdeas: ['Shadow Wolves', 'Iron Fist', 'Phantom Legion', 'Dark Horizon', 'Storm Riders'],
    seed: ['Shadow Wolves','Iron Fist','Phantom Legion','Dark Horizon','Storm Riders','Silent Venom','Frozen Throne','Crimson Guard','Night Raiders','Alpha Squad','Omega Force','Zero Mercy'],
    prompts: [{ label: 'FPS', keyword: 'fps' }, { label: 'MMO', keyword: 'mmo' }, { label: 'Mobile Gaming', keyword: 'mobile' }, { label: 'Esports', keyword: 'esports' }, { label: 'Casual', keyword: 'casual' }],
    faqs: [{ q: 'What is a good clan name?', a: 'A good clan name is intimidating, easy to remember, and works as a tag (e.g., [SW] Shadow Wolves). Short names with strong consonants work best.' }, { q: 'How long should a clan tag be?', a: '2-5 characters is standard. It appears before every member name in games, so keep it compact.' }],
    tips: 'Clan names work best when they sound like a unit. Words like "squad," "legion," "pack," and "guard" create a sense of group identity.',
    checklist: ['Check if the name is taken in your main game.','Make sure the clan tag (abbreviation) is clean.','Test how it looks in a kill feed.','Verify Discord server name availability.'],
    related: ['Team Name Generator', 'Guild Name Generator', 'Gamer Tag Generator'],
    relatedSlugs: ['team-name-generator', 'guild-name-generator', 'gamer-tag-generator'],
    nextStep: 'Create a Discord server with the clan name and set up roles. Most competitive clans organize through Discord.',
    browsePicks: [{ cat: 'Gaming', name: 'Team Name Generator', slug: 'team-name-generator' }, { cat: 'Gaming', name: 'Guild Name Generator', slug: 'guild-name-generator' }, { cat: 'Gaming', name: 'Gamer Tag Generator', slug: 'gamer-tag-generator' }, { cat: 'Gaming', name: 'Fantasy Name Generator', slug: 'fantasy-name-generator' }, { cat: 'Creator', name: 'Discord Name Generator', slug: 'discord-name-generator' }, { cat: 'Gaming', name: 'Dragon Name Generator', slug: 'dragon-name-generator' }],
  },
  {
    slug: 'boat-name-generator',
    title: 'Boat Name Generator',
    category: 'Fun',
    desc: 'Generate boat names for sailboats, fishing boats, yachts, pontoons, and personal watercraft.',
    chips: ['sailboat', 'fishing', 'yacht', 'pontoon', 'speedboat'],
    quickIdeas: ['Sea Breeze', 'Wave Runner', 'The Salty Dog', 'Blue Horizon', 'Wind Chaser'],
    seed: ['Sea Breeze','Wave Runner','The Salty Dog','Blue Horizon','Wind Chaser','Anchor Management','Knot Working','Fishin Mission','Liquid Asset','Reel Deal','Sail La Vie','Boaty McBoatface'],
    prompts: [{ label: 'Sailboat', keyword: 'sailboat' }, { label: 'Fishing Boat', keyword: 'fishing' }, { label: 'Yacht', keyword: 'yacht' }, { label: 'Pontoon', keyword: 'pontoon' }, { label: 'Funny', keyword: 'funny' }],
    faqs: [{ q: 'What are popular boat name styles?', a: 'Puns are extremely popular (Knot Working, Anchor Management). Other styles include nature names, nautical terms, and personal references.' }, { q: 'Are there rules for boat names?', a: 'No universal rules, but keep it clean and readable. Some marinas have guidelines. The name must be registered with your country coast guard.' }],
    tips: 'Boat names are a tradition. They should make other boaters smile at the dock. Puns, wordplay, and clever references are not just allowed — they are expected.',
    checklist: ['Check your marina for duplicate names.','Make sure it looks good on the hull.','Keep it under 33 characters (USCG limit).','Consider how it sounds on a VHF radio call.'],
    related: ['WiFi Name Generator', 'Brand Name Generator', 'Pet Name Generator'],
    relatedSlugs: ['wifi-name-generator', 'brand-name-generator', 'pet-name-generator'],
    nextStep: 'Register the name with your coast guard or maritime authority. Then get a custom decal made for the hull.',
    browsePicks: [{ cat: 'Fun', name: 'WiFi Name Generator', slug: 'wifi-name-generator' }, { cat: 'Business', name: 'Brand Name Generator', slug: 'brand-name-generator' }, { cat: 'Pets', name: 'Pet Name Generator', slug: 'pet-name-generator' }, { cat: 'Business', name: 'Business Name Generator', slug: 'business-name-generator' }, { cat: 'Gaming', name: 'Fantasy Name Generator', slug: 'fantasy-name-generator' }, { cat: 'Fun', name: 'Baby Name Generator', slug: 'baby-name-generator' }],
  },
  {
    slug: 'real-estate-business-name-generator',
    title: 'Real Estate Business Name Generator',
    category: 'Business',
    desc: 'Generate real estate business names for agencies, brokerages, property management firms, and investor brands.',
    chips: ['agency', 'brokerage', 'property management', 'investor'],
    quickIdeas: ['Keystone Realty', 'Summit Properties', 'Harbor & Home', 'Pinnacle Group', 'ClearView Estates'],
    seed: ['Keystone Realty','Summit Properties','Harbor & Home','Pinnacle Group','ClearView Estates','Cornerstone Realty','Golden Gate Properties','Atlas Homes','Meridian Realty','Blue Key Properties','True North Realty','Horizon Estates'],
    prompts: [{ label: 'Luxury', keyword: 'luxury' }, { label: 'Investment', keyword: 'investment' }, { label: 'Property Management', keyword: 'property management' }, { label: 'Commercial', keyword: 'commercial' }, { label: 'Residential', keyword: 'residential' }],
    faqs: [{ q: 'How do I name my real estate business?', a: 'Use words that evoke trust, stability, and growth. Location-based names work well for local agencies. Abstract names work better for national brands.' }, { q: 'Do I need "Realty" or "Real Estate" in the name?', a: 'It helps with clarity and SEO, but is not legally required in most states. Check your local licensing requirements.' }],
    tips: 'Real estate names need to project trust. People are making the biggest purchase of their lives — your name should feel solid and established.',
    checklist: ['Check your state licensing board for naming rules.','Verify the .com domain is available.','Search for duplicate names in your MLS area.','Test how it looks on a yard sign.'],
    related: ['Business Name Generator', 'Brand Name Generator', 'Property Management Name Generator'],
    relatedSlugs: ['business-name-generator', 'brand-name-generator', 'business-name-generator'],
    nextStep: 'Register with your state real estate commission, secure the domain, and set up Google Business with accurate contact info.',
    browsePicks: [{ cat: 'Business', name: 'Business Name Generator', slug: 'business-name-generator' }, { cat: 'Business', name: 'Brand Name Generator', slug: 'brand-name-generator' }, { cat: 'Business', name: 'Startup Name Generator', slug: 'startup-name-generator' }, { cat: 'Business', name: 'Shop Name Generator', slug: 'shop-name-generator' }, { cat: 'Business', name: 'Photography Business Name Generator', slug: 'photography-business-name-generator' }, { cat: 'Creator', name: 'Blog Name Generator', slug: 'blog-name-generator' }],
  },
  {
    slug: 'cleaning-business-name-generator',
    title: 'Cleaning Business Name Generator',
    category: 'Business',
    desc: 'Generate cleaning business names for house cleaning, commercial cleaning, carpet cleaning, and janitorial services.',
    chips: ['house cleaning', 'commercial', 'carpet cleaning', 'janitorial'],
    quickIdeas: ['Sparkle & Co', 'Clean Slate Services', 'Fresh Start Cleaning', 'Pristine Touch', 'BrightDay Cleaning'],
    seed: ['Sparkle & Co','Clean Slate Services','Fresh Start Cleaning','Pristine Touch','BrightDay Cleaning','PureSpace','Neat Freaks','Shine Time','TidyUp Pro','ClearView Cleaning','Mint Clean','Spotless Solutions'],
    prompts: [{ label: 'House Cleaning', keyword: 'house cleaning' }, { label: 'Commercial', keyword: 'commercial' }, { label: 'Carpet Cleaning', keyword: 'carpet cleaning' }, { label: 'Eco-Friendly', keyword: 'eco-friendly' }, { label: 'Luxury', keyword: 'luxury' }],
    faqs: [{ q: 'What makes a good cleaning business name?', a: 'It should sound trustworthy and thorough. Words like "clean," "fresh," "sparkle," and "pristine" immediately communicate what you do.' }, { q: 'Should I use my name for my cleaning business?', a: 'If you are a solo cleaner building a local reputation, yes. If you plan to hire teams and scale, use a brand name.' }],
    tips: 'Cleaning businesses rely on trust. Your name should make people feel comfortable letting you into their home or office.',
    checklist: ['Check Google Business for duplicate names in your area.','Verify the domain and social handles.','Test how it looks on a business card and vehicle wrap.','Make sure it works for both residential and commercial clients.'],
    related: ['Business Name Generator', 'Brand Name Generator', 'Shop Name Generator'],
    relatedSlugs: ['business-name-generator', 'brand-name-generator', 'shop-name-generator'],
    nextStep: 'Register on Google Business, Yelp, and Thumbtack. Cleaning businesses get most of their leads from local search.',
    browsePicks: [{ cat: 'Business', name: 'Business Name Generator', slug: 'business-name-generator' }, { cat: 'Business', name: 'Brand Name Generator', slug: 'brand-name-generator' }, { cat: 'Business', name: 'Hair Salon Name Generator', slug: 'hair-salon-name-generator' }, { cat: 'Business', name: 'Restaurant Name Generator', slug: 'restaurant-name-generator' }, { cat: 'Business', name: 'Coffee Shop Name Generator', slug: 'coffee-shop-name-generator' }, { cat: 'Business', name: 'Startup Name Generator', slug: 'startup-name-generator' }],
  },
  {
    slug: 'nickname-generator',
    title: 'Nickname Generator',
    category: 'Fun',
    desc: 'Generate nicknames for friends, online profiles, gaming, social media, and personal branding.',
    chips: ['cool', 'funny', 'cute', 'gaming', 'online'],
    quickIdeas: ['Shadow', 'Blaze', 'Nova', 'Ace', 'Frost'],
    seed: ['Shadow','Blaze','Nova','Ace','Frost','Raven','Storm','Phoenix','Viper','Echo','Zephyr','Onyx'],
    prompts: [{ label: 'Cool', keyword: 'cool' }, { label: 'Funny', keyword: 'funny' }, { label: 'Cute', keyword: 'cute' }, { label: 'Gaming', keyword: 'gaming' }, { label: 'Online Persona', keyword: 'online' }],
    faqs: [{ q: 'How do I pick a good nickname?', a: 'A good nickname should feel natural and reflect something about you — your personality, appearance, interests, or an inside joke.' }, { q: 'Can I use a nickname as my online name?', a: 'Absolutely. Many successful creators and gamers use nicknames. Just make sure it is consistent across platforms.' }],
    tips: 'The best nicknames are given by others, not self-chosen. But if you are picking your own, choose something that feels authentic to who you are.',
    checklist: ['Make sure it is easy to pronounce.','Check availability on social media.','Avoid anything that could be embarrassing in professional settings.','Test it with friends — do they like it?'],
    related: ['Gamer Tag Generator', 'Discord Name Generator', 'Baby Name Generator'],
    relatedSlugs: ['gamer-tag-generator', 'discord-name-generator', 'baby-name-generator'],
    nextStep: 'Use the nickname consistently across all your online profiles. Consistency builds recognition.',
    browsePicks: [{ cat: 'Gaming', name: 'Gamer Tag Generator', slug: 'gamer-tag-generator' }, { cat: 'Creator', name: 'Discord Name Generator', slug: 'discord-name-generator' }, { cat: 'Fun', name: 'Baby Name Generator', slug: 'baby-name-generator' }, { cat: 'Gaming', name: 'Fantasy Name Generator', slug: 'fantasy-name-generator' }, { cat: 'Creator', name: 'Twitch Username Generator', slug: 'twitch-username-generator' }, { cat: 'Gaming', name: 'Team Name Generator', slug: 'team-name-generator' }],
  },
  {
    slug: 'couple-name-generator',
    title: 'Couple Name Generator',
    category: 'Fun',
    desc: 'Generate couple names by combining two names. Find ship names, portmanteau names, and blended couple names.',
    chips: ['romantic', 'funny', 'ship name', 'portmanteau'],
    quickIdeas: ['Brangelina', 'Bennifer', 'Tomkat', 'Kimye', 'Speidi'],
    seed: ['Brangelina','Bennifer','Tomkat','Kimye','Speidi','Hiddleswift','Zaylia','Robsten','Charliangel','JaMilena','BopTina','DemiLovato'],
    prompts: [{ label: 'Romantic', keyword: 'romantic' }, { label: 'Funny', keyword: 'funny' }, { label: 'Ship Name', keyword: 'ship' }, { label: 'Celebrity Style', keyword: 'celebrity' }, { label: 'Cute', keyword: 'cute' }],
    faqs: [{ q: 'How do you make a couple name?', a: 'Take parts of each name and blend them. Common methods: first half of one name + second half of the other, or first syllable of each name.' }, { q: 'What is a ship name?', a: 'A ship name (from "relationship") is a blended name for a couple, often used in fandoms for fictional or celebrity couples.' }],
    tips: 'The best couple names flow naturally and sound like a real name. If it is hard to say, try a different combination.',
    checklist: ['Try multiple combinations before settling on one.','Make sure both people like the name.','Check that it does not sound like an existing word with a bad meaning.','Test it out loud — does it sound natural?'],
    related: ['Nickname Generator', 'Baby Name Generator', 'WiFi Name Generator'],
    relatedSlugs: ['nickname-generator', 'baby-name-generator', 'wifi-name-generator'],
    nextStep: 'Use the couple name as a shared social media handle, a joint playlist name, or just as a fun inside joke.',
    browsePicks: [{ cat: 'Fun', name: 'Nickname Generator', slug: 'nickname-generator' }, { cat: 'Fun', name: 'Baby Name Generator', slug: 'baby-name-generator' }, { cat: 'Fun', name: 'WiFi Name Generator', slug: 'wifi-name-generator' }, { cat: 'Creator', name: 'Instagram Username Generator', slug: 'instagram-username-generator' }, { cat: 'Gaming', name: 'Fantasy Name Generator', slug: 'fantasy-name-generator' }, { cat: 'Pets', name: 'Pet Name Generator', slug: 'pet-name-generator' }],
  },
  {
    slug: 'email-newsletter-name-generator',
    title: 'Email Newsletter Name Generator',
    category: 'Creator',
    desc: 'Generate email newsletter names for Substack, Beehiiv, ConvertKit, and independent email brands.',
    chips: ['substack', 'beehiiv', 'business', 'personal', 'niche'],
    quickIdeas: ['The Daily Pulse', 'Inbox Insider', 'The Brief', 'Signal & Noise', 'The Weekly Signal'],
    seed: ['The Daily Pulse','Inbox Insider','The Brief','Signal & Noise','The Weekly Signal','The Morning Drop','Curated Bytes','The Readout','Dispatch','The Intel','Hot Take','The Digest'],
    prompts: [{ label: 'Substack', keyword: 'substack' }, { label: 'Business', keyword: 'business' }, { label: 'Personal Brand', keyword: 'personal' }, { label: 'Tech', keyword: 'tech' }, { label: 'Finance', keyword: 'finance' }],
    faqs: [{ q: 'What makes a good newsletter name?', a: 'Short, clear, and hinting at the content. The best newsletter names tell readers exactly what they will get in their inbox.' }, { q: 'Should I use my name or a brand name?', a: 'Use your name if you are the main draw. Use a brand name if you plan to expand beyond yourself or cover a broad topic.' }],
    tips: 'Newsletter names appear in crowded inboxes. It needs to stand out between 50 other emails and make someone want to click open.',
    checklist: ['Check if the name is taken on Substack/Beehiiv.','Make sure it looks good in an email subject line.','Verify the .com domain for a potential landing page.','Test it: would you open an email with this sender name?'],
    related: ['Blog Name Generator', 'Podcast Name Generator', 'Brand Name Generator'],
    relatedSlugs: ['blog-name-generator', 'podcast-name-generator', 'brand-name-generator'],
    nextStep: 'Register on your newsletter platform immediately. Good names get taken fast on Substack and Beehiiv.',
    browsePicks: [{ cat: 'Creator', name: 'Blog Name Generator', slug: 'blog-name-generator' }, { cat: 'Creator', name: 'Podcast Name Generator', slug: 'podcast-name-generator' }, { cat: 'Business', name: 'Brand Name Generator', slug: 'brand-name-generator' }, { cat: 'Creator', name: 'Twitter Username Generator', slug: 'twitter-username-generator' }, { cat: 'Business', name: 'Startup Name Generator', slug: 'startup-name-generator' }, { cat: 'Creator', name: 'YouTube Name Generator', slug: 'youtube-name-generator' }],
  },
];

// ─── Template (same as batch 1) ──────────────────────────────
function generateToolHTML(tool) {
  const seedJSON = JSON.stringify(tool.seed).replace(/"/g, '&quot;');
  const chipsHTML = tool.chips.map(c => `<button class="prompt-chip" type="button">${c}</button>`).join('');
  const quickIdeasHTML = tool.quickIdeas.map(i => `<li>${i}</li>`).join('');
  const starterListHTML = tool.seed.map(i => `<li class="idea-item">${i}</li>`).join('');
  const promptsHTML = tool.prompts.map(p => `<article class="mini-card"><div class="pill">Try this</div><h3>${p.label}</h3><p>Use this prompt to get a faster first batch of ideas.</p><button class="button button-secondary quick-fill" type="button" data-tool="${tool.slug}" data-keyword="${p.keyword}">Use prompt</button></article>`).join('\n');
  const faqsHTML = tool.faqs.map(f => `<details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('\n');
  const relatedHTML = tool.related.map((r, i) => `<li><a href="/tools/${tool.relatedSlugs[i]}.html">${r}</a></li>`).join('');
  const browseHTML = tool.browsePicks.map(bp => `<article class="browse-card"><div class="pill">${bp.cat}</div><h3><a href="/tools/${bp.slug}.html">${bp.name}</a></h3><p>Open this generator to explore more name ideas.</p></article>`).join('\n');
  const checklistHTML = tool.checklist.map(c => `<li>${c}</li>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${tool.title} | AI Name Generator</title>
    <meta name="description" content="${tool.desc}" />
    <link rel="canonical" href="${DOMAIN}/tools/${tool.slug}.html" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta property="og:title" content="${tool.title} | AI Name Generator" />
    <meta property="og:description" content="${tool.desc}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${DOMAIN}/tools/${tool.slug}.html" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" href="/assets/styles.css" />
    <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":tool.title,"url":`${DOMAIN}/tools/${tool.slug}.html`,"description":tool.desc,"mainEntity":{"@type":"SoftwareApplication","name":tool.title,"applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}},null,2)}</script>
  </head>
  <body>
    <header class="site-header"><div class="wrap header-inner"><a class="brand" href="/index.html">AI Name Generator</a><nav class="nav"><a class="nav-link" href="/index.html">Home</a><a class="nav-link" href="/tools/index.html">Tools</a><a class="nav-link" href="/blog/">Blog</a><a class="nav-link" href="/about.html">About</a><a class="nav-link" href="/contact.html">Contact</a></nav></div></header>
    <main>
      <section class="tool-hero"><div class="wrap tool-hero-grid"><div><div class="breadcrumbs"><a href="/index.html">Home</a><span>/</span><a href="/tools/index.html">Tools</a><span>/</span><span>${tool.title}</span></div><div class="pill">${tool.category}</div><h1>${tool.title}</h1><p class="hero-copy">${tool.desc}</p><div class="prompt-chip-row">${chipsHTML}</div></div><aside class="hero-panel hero-panel-small"><div class="panel-title">Quick ideas</div><ul class="clean-list compact-list">${quickIdeasHTML}</ul></aside></div></section>
      <section class="section"><div class="wrap generator-grid"><div class="generator-card"><div class="section-head"><div><div class="pill">Generator</div><h2>Type a keyword and generate names</h2></div></div><form class="generator-form" data-tool="${tool.slug}"><label for="keyword-${tool.slug}">Keyword or style</label><input id="keyword-${tool.slug}" name="keyword" placeholder="Example: cozy bakery, dark mage, cute kitten" /><label for="tone-${tool.slug}">Tone</label><select id="tone-${tool.slug}" name="tone"><option value="clean">Clean</option><option value="cute">Cute</option><option value="cool">Cool</option><option value="funny">Funny</option><option value="premium">Premium</option></select><button class="button button-primary" type="submit">Generate ideas</button></form><div class="result-panel"><div class="result-head"><div class="panel-title">Generated ideas</div><div class="result-actions"><button class="button button-secondary shuffle-button" type="button" data-tool="${tool.slug}">Shuffle ideas</button><button class="button button-secondary copy-all-button" type="button" data-target="results-${tool.slug}">Copy all</button></div></div><ul class="results-list" id="results-${tool.slug}" data-seed='${seedJSON}'></ul></div><div class="shortlist-panel"><div class="result-head"><div><div class="panel-title">Your shortlist</div><p class="small-copy">Save your favorite ideas here before you copy or compare them.</p></div><div class="result-actions"><button class="button button-secondary copy-shortlist-button" type="button" data-target="shortlist-${tool.slug}">Copy shortlist</button><button class="button button-secondary clear-shortlist-button" type="button" data-target="shortlist-${tool.slug}">Clear</button></div></div><ul class="shortlist-list" id="shortlist-${tool.slug}"></ul></div></div><aside class="sidebar-card"><div class="pill">Starter list</div><h3>${tool.seed.length} ready-made ideas</h3><ul class="idea-list">${starterListHTML}</ul></aside></div></section>
      <section class="section section-alt"><div class="wrap two-col"><div><div class="pill">Tips</div><h2>How to use this tool</h2><p>${tool.tips}</p></div><div><div class="pill">Checklist</div><h3>A quick naming checklist</h3><ul class="clean-list compact-list">${checklistHTML}</ul></div></div></section>
      <section class="section"><div class="wrap"><div class="section-head"><div><div class="pill">Prompt ideas</div><h2>Fast ways to explore better name styles</h2></div></div><div class="mini-grid">${promptsHTML}</div></div></section>
      <section class="section section-alt"><div class="wrap narrow"><div class="pill">FAQ</div><h2>${tool.title} FAQ</h2><div class="faq-list">${faqsHTML}</div></div></section>
      <section class="section"><div class="wrap two-col"><div><div class="pill">Related tools</div><h2>More generators like this</h2><ul class="clean-list compact-list">${relatedHTML}</ul></div><div><div class="pill">Next step</div><h3>What to do after you find a good name</h3><p>${tool.nextStep}</p></div></div></section>
      <section class="section"><div class="wrap"><div class="section-head"><div><div class="pill">Keep browsing</div><h2>More generators people usually open next</h2></div></div><div class="browse-grid">${browseHTML}</div></div></section>
    </main>
    <footer class="site-footer"><div class="wrap footer-grid"><div><div class="footer-title">AI Name Generator</div><p class="footer-text">Free name ideas for creators, businesses, pets, games, and fun side projects.</p></div><div><div class="footer-title">Pages</div><div class="footer-links"><a href="/tools/index.html">All Tools</a><a href="/blog/">Blog</a><a href="/about.html">About</a><a href="/contact.html">Contact</a><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms</a></div></div></div><div class="wrap footer-bottom">Local preview first. Publish after final checks.</div></footer>
    <script src="/assets/app.js"></script>
  </body>
</html>`;
}

fs.mkdirSync(TOOLS_DIR, { recursive: true });
for (const tool of newTools) {
  fs.writeFileSync(path.join(TOOLS_DIR, `${tool.slug}.html`), generateToolHTML(tool), 'utf8');
  console.log(`✓ ${tool.slug}.html`);
}
console.log(`\nDone: ${newTools.length} new tool pages generated.`);
