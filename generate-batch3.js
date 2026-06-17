#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const TOOLS_DIR = path.join(__dirname, 'tools');
const DOMAIN = 'https://baiyeyun.xyz';

const newTools = [
  {
    slug: 'superhero-name-generator', title: 'Superhero Name Generator', category: 'Gaming',
    desc: 'Generate superhero names for comics, stories, roleplay, and creative projects. Find names for heroes, anti-heroes, and vigilantes.',
    chips: ['classic', 'dark', 'funny', 'female', 'male'],
    quickIdeas: ['Night Sentinel', 'Volt Strike', 'Iron Veil', 'Solaris Prime', 'Phantom Surge'],
    seed: ['Night Sentinel','Volt Strike','Iron Veil','Solaris Prime','Phantom Surge','Crimson Bolt','Shadow Wraith','Titan Spark','Nova Shield','Storm Herald','Aegis Prime','Blaze Guardian'],
    prompts: [{label:'Classic',keyword:'classic'},{label:'Dark',keyword:'dark'},{label:'Funny',keyword:'funny'},{label:'Female Hero',keyword:'female'},{label:'Anti-Hero',keyword:'anti-hero'}],
    faqs: [{q:'What makes a good superhero name?',a:'It should sound powerful, memorable, and hint at the hero\'s power or origin. Two-word names work best.'},{q:'Should the name reveal the power?',a:'Not always. "Spider-Man" does, but "Batman" is more mysterious. Both approaches work.'}],
    tips: 'Superhero names should sound like they belong on a comic book cover. Test them by imagining a dramatic announcement: "It\'s [name]!"',
    checklist: ['Say it dramatically — does it sound heroic?','Check Marvel and DC for existing characters.','Make sure it works as a domain and social handle.','Consider how it looks as a logo.'],
    related: ['Fantasy Name Generator','Villain Name Generator','Anime Name Generator'],
    relatedSlugs: ['fantasy-name-generator','fantasy-name-generator','fantasy-name-generator'],
    nextStep: 'Design a simple logo or emblem. Even a rough sketch helps solidify the character identity.',
    browsePicks: [{cat:'Gaming',name:'Fantasy Name Generator',slug:'fantasy-name-generator'},{cat:'Gaming',name:'Dragon Name Generator',slug:'dragon-name-generator'},{cat:'Gaming',name:'DnD Name Generator',slug:'dnd-name-generator'},{cat:'Fun',name:'Nickname Generator',slug:'nickname-generator'},{cat:'Gaming',name:'Gamer Tag Generator',slug:'gamer-tag-generator'},{cat:'Gaming',name:'Clan Name Generator',slug:'clan-name-generator'}],
  },
  {
    slug: 'pirate-name-generator', title: 'Pirate Name Generator', category: 'Gaming',
    desc: 'Generate pirate names for stories, games, costumes, and roleplay. Find names for captains, crews, and ships.',
    chips: ['captain', 'crew', 'funny', 'dark', 'classic'],
    quickIdeas: ['Captain Blacktide', 'One-Eye Morgan', 'Ironjaw Sally', 'Red Storm Pete', 'Bloody Mae'],
    seed: ['Captain Blacktide','One-Eye Morgan','Ironjaw Sally','Red Storm Pete','Bloody Mae','Cutlass Jack','Dagger Rose','Thunderbeard','Sharkfin Lou','Plankwalker Dan','Cannonball Kate','Barnacle Bill'],
    prompts: [{label:'Captain',keyword:'captain'},{label:'Crew Member',keyword:'crew'},{label:'Funny',keyword:'funny'},{label:'Dark',keyword:'dark'},{label:'Female Pirate',keyword:'female'}],
    faqs: [{q:'How do pirate names work?',a:'Pirate names often combine a trait, scar, or weapon with a common name. "One-Eye Morgan" or "Cutlass Jack" follow this pattern.'},{q:'Were real pirate names this dramatic?',a:'Some were. Blackbeard (Edward Teach) and Calico Jack (John Rackham) were real pirates with memorable nicknames.'}],
    tips: 'Pirate names should sound like they were earned through adventure. Think weathered, rough, and slightly dangerous.',
    checklist: ['Make it sound rough and adventurous.','Check that it is not a famous existing pirate.','Consider the pirate\'s defining trait or weapon.','Test it as a ship name or crew name.'],
    related: ['Fantasy Name Generator','Boat Name Generator','DnD Name Generator'],
    relatedSlugs: ['fantasy-name-generator','boat-name-generator','dnd-name-generator'],
    nextStep: 'Write a short backstory for your pirate — their ship, their greatest raid, and how they got their name.',
    browsePicks: [{cat:'Gaming',name:'Fantasy Name Generator',slug:'fantasy-name-generator'},{cat:'Fun',name:'Boat Name Generator',slug:'boat-name-generator'},{cat:'Gaming',name:'DnD Name Generator',slug:'dnd-name-generator'},{cat:'Fun',name:'Nickname Generator',slug:'nickname-generator'},{cat:'Gaming',name:'Dragon Name Generator',slug:'dragon-name-generator'},{cat:'Gaming',name:'Superhero Name Generator',slug:'superhero-name-generator'}],
  },
  {
    slug: 'elf-name-generator', title: 'Elf Name Generator', category: 'Gaming',
    desc: 'Generate elf names for fantasy stories, D&D characters, Elder Scrolls, and worldbuilding projects.',
    chips: ['high elf', 'dark elf', 'wood elf', 'blood elf', 'half-elf'],
    quickIdeas: ['Aelindra', 'Thalion', 'Seraphiel', 'Caelum', 'Elowen'],
    seed: ['Aelindra','Thalion','Seraphiel','Caelum','Elowen','Galadros','Lirael','Fenwick','Sylvandis','Arannis','Mythrellas','Cirdan'],
    prompts: [{label:'High Elf',keyword:'high elf'},{label:'Dark Elf',keyword:'dark elf'},{label:'Wood Elf',keyword:'wood elf'},{label:'Blood Elf',keyword:'blood elf'},{label:'Half-Elf',keyword:'half-elf'}],
    faqs: [{q:'What do elf names sound like?',a:'Elf names typically use soft consonants (L, N, TH) and flowing vowels. They sound elegant, ancient, and slightly musical.'},{q:'Do different elf types have different naming styles?',a:'Yes. High elves have melodic names (Aelindra), dark elves have sharper names (Drizzt), and wood elves have nature-inspired names (Elowen).'}],
    tips: 'Elf names should feel like they belong to beings who live for centuries. They should sound timeless and graceful.',
    checklist: ['Make sure it sounds elegant and flowing.','Check that it does not match a famous elf character.','Consider the elf type — high, dark, wood, or blood.','Test the full name with a surname.'],
    related: ['Fantasy Name Generator','DnD Name Generator','Dragon Name Generator'],
    relatedSlugs: ['fantasy-name-generator','dnd-name-generator','dragon-name-generator'],
    nextStep: 'Create a character sheet with the name, age, homeland, and a brief backstory.',
    browsePicks: [{cat:'Gaming',name:'Fantasy Name Generator',slug:'fantasy-name-generator'},{cat:'Gaming',name:'DnD Name Generator',slug:'dnd-name-generator'},{cat:'Gaming',name:'Dragon Name Generator',slug:'dragon-name-generator'},{cat:'Gaming',name:'Guild Name Generator',slug:'guild-name-generator'},{cat:'Fun',name:'Baby Name Generator',slug:'baby-name-generator'},{cat:'Gaming',name:'Superhero Name Generator',slug:'superhero-name-generator'}],
  },
  {
    slug: 'witch-name-generator', title: 'Witch Name Generator', category: 'Gaming',
    desc: 'Generate witch names for Halloween costumes, fantasy stories, games, and creative projects.',
    chips: ['dark', 'cute', 'classic', 'potion', 'nature'],
    quickIdeas: ['Morgana Thornwick', 'Hazel Nightshade', 'Seraphina Dusk', 'Willow Blackroot', 'Luna Ashveil'],
    seed: ['Morgana Thornwick','Hazel Nightshade','Seraphina Dusk','Willow Blackroot','Luna Ashveil','Rowena Shadowmere','Ivy Grimtallow','Belladonna Frost','Thistle Moonbane','Sage Ravencroft','Opal Hexwell','Clover Stormwick'],
    prompts: [{label:'Dark Witch',keyword:'dark'},{label:'Cute Witch',keyword:'cute'},{label:'Classic',keyword:'classic'},{label:'Potion Master',keyword:'potion'},{label:'Nature Witch',keyword:'nature'}],
    faqs: [{q:'What makes a good witch name?',a:'Witch names often combine a first name (often botanical or celestial) with a surname that suggests magic, nature, or mystery.'},{q:'Are witch names only for women?',a:'No! Warlocks, wizards, and male witches also need names. The naming patterns work for any gender.'}],
    tips: 'Witch names work best when they feel grounded in nature but hint at something supernatural. Botanical names (Ivy, Hazel, Sage) are classic choices.',
    checklist: ['Make it sound magical but believable.','Check that it is not a famous fictional witch.','Consider the witch\'s specialty — potions, nature, dark magic.','Test it as a Halloween costume name.'],
    related: ['Fantasy Name Generator','DnD Name Generator','Pirate Name Generator'],
    relatedSlugs: ['fantasy-name-generator','dnd-name-generator','pirate-name-generator'],
    nextStep: 'Write down the witch\'s specialty, familiar animal, and signature spell. This brings the character to life.',
    browsePicks: [{cat:'Gaming',name:'Fantasy Name Generator',slug:'fantasy-name-generator'},{cat:'Gaming',name:'DnD Name Generator',slug:'dnd-name-generator'},{cat:'Gaming',name:'Elf Name Generator',slug:'elf-name-generator'},{cat:'Gaming',name:'Dragon Name Generator',slug:'dragon-name-generator'},{cat:'Fun',name:'Nickname Generator',slug:'nickname-generator'},{cat:'Gaming',name:'Superhero Name Generator',slug:'superhero-name-generator'}],
  },
  {
    slug: 'robot-name-generator', title: 'Robot Name Generator', category: 'Gaming',
    desc: 'Generate robot names for sci-fi stories, games, AI characters, and tech branding.',
    chips: ['ai', 'android', 'cyborg', 'sci-fi', 'friendly'],
    quickIdeas: ['Nexus-7', 'Axiom Prime', 'Circuit Vex', 'Zenith Unit', 'Nova Core'],
    seed: ['Nexus-7','Axiom Prime','Circuit Vex','Zenith Unit','Nova Core','Titan Mark','Synapse Alpha','Echo Drone','Pulse RX','Volt Sentinel','Orion Mech','Helix Zero'],
    prompts: [{label:'AI',keyword:'ai'},{label:'Android',keyword:'android'},{label:'Cyborg',keyword:'cyborg'},{label:'Sci-Fi',keyword:'sci-fi'},{label:'Friendly Robot',keyword:'friendly'}],
    faqs: [{q:'How do you name a robot?',a:'Robot names often use alphanumeric codes (R2-D2), model numbers (T-800), or human names with mechanical surnames. The style depends on the setting.'},{q:'Should robot names sound mechanical?',a:'For industrial robots, yes. For humanoid robots in stories, more human-sounding names create interesting contrast.'}],
    tips: 'Robot names work best when they suggest function or origin. "Sentinel" suggests a guard. "Nexus" suggests a connection point. "Volt" suggests power.',
    checklist: ['Make sure it sounds mechanical or futuristic.','Check that it does not match a famous robot character.','Consider the robot\'s function — worker, soldier, companion.','Test it as a product name or AI assistant name.'],
    related: ['Fantasy Name Generator','Gamer Tag Generator','Startup Name Generator'],
    relatedSlugs: ['fantasy-name-generator','gamer-tag-generator','startup-name-generator'],
    nextStep: 'Define the robot\'s purpose, model series, and manufacturer. This helps create a consistent naming convention.',
    browsePicks: [{cat:'Gaming',name:'Fantasy Name Generator',slug:'fantasy-name-generator'},{cat:'Gaming',name:'Gamer Tag Generator',slug:'gamer-tag-generator'},{cat:'Business',name:'Startup Name Generator',slug:'startup-name-generator'},{cat:'Gaming',name:'Superhero Name Generator',slug:'superhero-name-generator'},{cat:'Fun',name:'Nickname Generator',slug:'nickname-generator'},{cat:'Gaming',name:'Clan Name Generator',slug:'clan-name-generator'}],
  },
  {
    slug: 'law-firm-name-generator', title: 'Law Firm Name Generator', category: 'Business',
    desc: 'Generate law firm names for solo practices, partnerships, and legal groups. Find professional, trustworthy names.',
    chips: ['partnership', 'solo', 'corporate', 'family law', 'criminal defense'],
    quickIdeas: ['Sterling & Associates', 'Hale Legal Group', 'Keystone Law', 'ClearPath Legal', 'Ironclad Counsel'],
    seed: ['Sterling & Associates','Hale Legal Group','Keystone Law','ClearPath Counsel','Ironclad Legal','Summit Partners','Vanguard Law','Providence Legal','Cornerstone Counsel','Meridian Law','Atlas Legal Group','Bastion Law'],
    prompts: [{label:'Partnership',keyword:'partnership'},{label:'Solo Practice',keyword:'solo'},{label:'Corporate',keyword:'corporate'},{label:'Family Law',keyword:'family law'},{label:'Criminal Defense',keyword:'criminal defense'}],
    faqs: [{q:'How do law firms name themselves?',a:'Most use partner surnames (Smith & Jones), descriptive names (Metro Legal), or a combination. The trend is moving toward brand-style names.'},{q:'Can I use a creative name for my law firm?',a:'Depends on your jurisdiction. Some bar associations require partner names. Check your local rules before choosing a brand-style name.'}],
    tips: 'Law firm names must project trust and competence. Avoid anything too clever or casual. Clients are hiring you for serious matters.',
    checklist: ['Check your bar association naming rules.','Verify the .com domain is available.','Search for duplicate firm names in your jurisdiction.','Test how it looks on a letterhead.'],
    related: ['Business Name Generator','Brand Name Generator','Startup Name Generator'],
    relatedSlugs: ['business-name-generator','brand-name-generator','startup-name-generator'],
    nextStep: 'Register with your state bar, secure the domain, and create a professional website with attorney bios.',
    browsePicks: [{cat:'Business',name:'Business Name Generator',slug:'business-name-generator'},{cat:'Business',name:'Brand Name Generator',slug:'brand-name-generator'},{cat:'Business',name:'Startup Name Generator',slug:'startup-name-generator'},{cat:'Business',name:'Real Estate Business Name Generator',slug:'real-estate-business-name-generator'},{cat:'Business',name:'Photography Business Name Generator',slug:'photography-business-name-generator'},{cat:'Creator',name:'Blog Name Generator',slug:'blog-name-generator'}],
  },
  {
    slug: 'spa-name-generator', title: 'Spa Name Generator', category: 'Business',
    desc: 'Generate spa names for day spas, wellness centers, med spas, and relaxation retreats.',
    chips: ['day spa', 'wellness', 'med spa', 'retreat', 'luxury'],
    quickIdeas: ['Serenity Springs', 'The Calm Room', 'Bloom Wellness', 'Tranquil Touch', 'Golden Lotus Spa'],
    seed: ['Serenity Springs','The Calm Room','Bloom Wellness','Tranquil Touch','Golden Lotus Spa','Velvet Mist','Still Waters','Harmony House','Pure Bliss Spa','Zen Garden','Radiance Retreat','Oasis Day Spa'],
    prompts: [{label:'Day Spa',keyword:'day spa'},{label:'Wellness Center',keyword:'wellness'},{label:'Med Spa',keyword:'med spa'},{label:'Retreat',keyword:'retreat'},{label:'Luxury',keyword:'luxury'}],
    faqs: [{q:'What makes a good spa name?',a:'Spa names should evoke calm, luxury, and self-care. Words like "serenity," "bliss," "tranquil," and "harmony" are classic choices.'},{q:'Should I include "Spa" in the name?',a:'It helps with local SEO and clarity. But a strong brand name without it can work if the branding makes the purpose clear.'}],
    tips: 'Spa names should feel like a deep breath. When someone reads it, they should already feel more relaxed.',
    checklist: ['Check Google Maps for duplicate spa names.','Make sure it sounds calming and luxurious.','Verify Instagram and booking platform availability.','Test it on a gift card mockup.'],
    related: ['Hair Salon Name Generator','Brand Name Generator','Business Name Generator'],
    relatedSlugs: ['hair-salon-name-generator','brand-name-generator','business-name-generator'],
    nextStep: 'Set up Google Business, Instagram, and an online booking system. Most spa clients discover services through local search.',
    browsePicks: [{cat:'Business',name:'Hair Salon Name Generator',slug:'hair-salon-name-generator'},{cat:'Business',name:'Brand Name Generator',slug:'brand-name-generator'},{cat:'Business',name:'Coffee Shop Name Generator',slug:'coffee-shop-name-generator'},{cat:'Business',name:'Restaurant Name Generator',slug:'restaurant-name-generator'},{cat:'Business',name:'Business Name Generator',slug:'business-name-generator'},{cat:'Creator',name:'Instagram Username Generator',slug:'instagram-username-generator'}],
  },
  {
    slug: 'food-truck-name-generator', title: 'Food Truck Name Generator', category: 'Business',
    desc: 'Generate food truck names for mobile kitchens, street food brands, and pop-up food businesses.',
    chips: ['tacos', 'bbq', 'burgers', 'fusion', 'vegan'],
    quickIdeas: ['Rolling Flame', 'Street Feast', 'The Hungry Wheel', 'Spoke & Spice', 'Tire Fire Kitchen'],
    seed: ['Rolling Flame','Street Feast','The Hungry Wheel','Spoke & Spice','Tire Fire Kitchen','Asphalt Eats','Grill on Wheels','The Mobile Munch','Curb Side Cooks','Road Chef','Bumper Bites','Exhaust & Ember'],
    prompts: [{label:'Tacos',keyword:'tacos'},{label:'BBQ',keyword:'bbq'},{label:'Burgers',keyword:'burgers'},{label:'Fusion',keyword:'fusion'},{label:'Vegan',keyword:'vegan'}],
    faqs: [{q:'How do I name my food truck?',a:'Think about your signature dish, your cooking style, or a fun pun. Food truck names can be more playful than restaurant names.'},{q:'Should the name hint at the cuisine?',a:'Yes, ideally. When someone sees your truck from across a parking lot, they should have a rough idea of what you serve.'}],
    tips: 'Food truck names need to work on a vinyl wrap, a menu board, and a social media post. Bold, fun, and easy to read from a distance.',
    checklist: ['Check your city for duplicate food truck names.','Make sure it looks good on a truck wrap.','Verify Instagram and food app availability.','Test readability from 20 feet away.'],
    related: ['Restaurant Name Generator','Coffee Shop Name Generator','Brand Name Generator'],
    relatedSlugs: ['restaurant-name-generator','coffee-shop-name-generator','brand-name-generator'],
    nextStep: 'Register on food truck apps, create Instagram, and get a vinyl wrap designed. Social media drives food truck success.',
    browsePicks: [{cat:'Business',name:'Restaurant Name Generator',slug:'restaurant-name-generator'},{cat:'Business',name:'Coffee Shop Name Generator',slug:'coffee-shop-name-generator'},{cat:'Business',name:'Brand Name Generator',slug:'brand-name-generator'},{cat:'Business',name:'Bakery Name Generator',slug:'bakery-name-generator'},{cat:'Business',name:'Business Name Generator',slug:'business-name-generator'},{cat:'Creator',name:'Instagram Username Generator',slug:'instagram-username-generator'}],
  },
  {
    slug: 'fantasy-town-name-generator', title: 'Fantasy Town Name Generator', category: 'Gaming',
    desc: 'Generate fantasy town and city names for novels, D&D campaigns, game worlds, and maps.',
    chips: ['village', 'city', 'port', 'fortress', 'kingdom'],
    quickIdeas: ['Thornhaven', 'Silvercrest', 'Ashenmoor', 'Ironhold', 'Willowmere'],
    seed: ['Thornhaven','Silvercrest','Ashenmoor','Ironhold','Willowmere','Stormgate','Frosthollow','Ravenrest','Brightwater','Duskendale','Goldvale','Shadowfen'],
    prompts: [{label:'Village',keyword:'village'},{label:'City',keyword:'city'},{label:'Port Town',keyword:'port'},{label:'Fortress',keyword:'fortress'},{label:'Capital City',keyword:'capital'}],
    faqs: [{q:'How do you name a fantasy town?',a:'Combine a geographic feature or resource with a suffix like -haven, -vale, -crest, -moor, -gate, or -fen. This creates names that feel grounded and real.'},{q:'Should fantasy town names sound English?',a:'Not necessarily. Different cultures in your world should have different naming conventions. But for English-language readers, familiar patterns are easier to remember.'}],
    tips: 'Town names should hint at geography, history, or what makes the place special. "Frosthollow" suggests a cold valley. "Brightwater" suggests a clean river.',
    checklist: ['Make sure it sounds like a real place.','Check that it is not already used in a major franchise.','Consider the town\'s geography and history.','Test it on a hand-drawn map.'],
    related: ['Fantasy Name Generator','DnD Name Generator','Elf Name Generator'],
    relatedSlugs: ['fantasy-name-generator','dnd-name-generator','elf-name-generator'],
    nextStep: 'Draw a rough map of the town with the name. Even a simple sketch with landmarks helps bring the place to life.',
    browsePicks: [{cat:'Gaming',name:'Fantasy Name Generator',slug:'fantasy-name-generator'},{cat:'Gaming',name:'DnD Name Generator',slug:'dnd-name-generator'},{cat:'Gaming',name:'Elf Name Generator',slug:'elf-name-generator'},{cat:'Gaming',name:'Dragon Name Generator',slug:'dragon-name-generator'},{cat:'Gaming',name:'Guild Name Generator',slug:'guild-name-generator'},{cat:'Gaming',name:'Clan Name Generator',slug:'clan-name-generator'}],
  },
  {
    slug: 'wizard-name-generator', title: 'Wizard Name Generator', category: 'Gaming',
    desc: 'Generate wizard names for fantasy stories, RPG characters, and magical worldbuilding projects.',
    chips: ['classic', 'dark', 'elemental', 'ancient', 'apprentice'],
    quickIdeas: ['Aldric Stormweave', 'Meridia Thornveil', 'Valdris Ashborn', 'Sylvara Mooncrest', 'Grimshaw'],
    seed: ['Aldric Stormweave','Meridia Thornveil','Valdris Ashborn','Sylvara Mooncrest','Grimshaw','Fendrel Starfire','Isolde Frostbinder','Tharion Duskweaver','Corvus Nighthollow','Elara Sunforge','Balthazar','Celestine'],
    prompts: [{label:'Classic Wizard',keyword:'classic'},{label:'Dark Wizard',keyword:'dark'},{label:'Elemental',keyword:'elemental'},{label:'Ancient',keyword:'ancient'},{label:'Apprentice',keyword:'apprentice'}],
    faqs: [{q:'What makes a good wizard name?',a:'Wizard names should sound ancient and powerful. Long, flowing names with archaic elements (Aldric, Meridia, Tharion) work well.'},{q:'Should wizards have titles?',a:'Titles like "the Great," "the Wise," or "of the East Tower" add depth and make the character more memorable.'}],
    tips: 'Wizard names should feel like they have been spoken in candlelit towers for centuries. They should sound like incantations themselves.',
    checklist: ['Make it sound ancient and wise.','Check that it does not match a famous wizard.','Consider adding a title or epithet.','Test the full name: "[Name] the [Title]."'],
    related: ['Fantasy Name Generator','DnD Name Generator','Elf Name Generator'],
    relatedSlugs: ['fantasy-name-generator','dnd-name-generator','elf-name-generator'],
    nextStep: 'Create a spellbook entry for your wizard — their school of magic, greatest spell, and a brief history.',
    browsePicks: [{cat:'Gaming',name:'Fantasy Name Generator',slug:'fantasy-name-generator'},{cat:'Gaming',name:'DnD Name Generator',slug:'dnd-name-generator'},{cat:'Gaming',name:'Elf Name Generator',slug:'elf-name-generator'},{cat:'Gaming',name:'Witch Name Generator',slug:'witch-name-generator'},{cat:'Gaming',name:'Dragon Name Generator',slug:'dragon-name-generator'},{cat:'Gaming',name:'Superhero Name Generator',slug:'superhero-name-generator'}],
  },
];

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
<html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${tool.title} | AI Name Generator</title><meta name="description" content="${tool.desc}"/><link rel="canonical" href="${DOMAIN}/tools/${tool.slug}.html"/><link rel="icon" type="image/svg+xml" href="/favicon.svg"/><meta property="og:title" content="${tool.title} | AI Name Generator"/><meta property="og:description" content="${tool.desc}"/><meta property="og:type" content="website"/><meta property="og:url" content="${DOMAIN}/tools/${tool.slug}.html"/><meta name="twitter:card" content="summary_large_image"/><link rel="stylesheet" href="/assets/styles.css"/><script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":tool.title,"url":`${DOMAIN}/tools/${tool.slug}.html`,"description":tool.desc,"mainEntity":{"@type":"SoftwareApplication","name":tool.title,"applicationCategory":"UtilitiesApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}},null,2)}</script></head>
<body>
<header class="site-header"><div class="wrap header-inner"><a class="brand" href="/index.html">AI Name Generator</a><nav class="nav"><a class="nav-link" href="/index.html">Home</a><a class="nav-link" href="/tools/index.html">Tools</a><a class="nav-link" href="/blog/">Blog</a><a class="nav-link" href="/about.html">About</a><a class="nav-link" href="/contact.html">Contact</a></nav></div></header>
<main>
<section class="tool-hero"><div class="wrap tool-hero-grid"><div><div class="breadcrumbs"><a href="/index.html">Home</a><span>/</span><a href="/tools/index.html">Tools</a><span>/</span><span>${tool.title}</span></div><div class="pill">${tool.category}</div><h1>${tool.title}</h1><p class="hero-copy">${tool.desc}</p><div class="prompt-chip-row">${chipsHTML}</div></div><aside class="hero-panel hero-panel-small"><div class="panel-title">Quick ideas</div><ul class="clean-list compact-list">${quickIdeasHTML}</ul></aside></div></section>
<section class="section"><div class="wrap generator-grid"><div class="generator-card"><div class="section-head"><div><div class="pill">Generator</div><h2>Type a keyword and generate names</h2></div></div><form class="generator-form" data-tool="${tool.slug}"><label for="keyword-${tool.slug}">Keyword or style</label><input id="keyword-${tool.slug}" name="keyword" placeholder="Example: cozy bakery, dark mage, cute kitten"/><label for="tone-${tool.slug}">Tone</label><select id="tone-${tool.slug}" name="tone"><option value="clean">Clean</option><option value="cute">Cute</option><option value="cool">Cool</option><option value="funny">Funny</option><option value="premium">Premium</option></select><button class="button button-primary" type="submit">Generate ideas</button></form><div class="result-panel"><div class="result-head"><div class="panel-title">Generated ideas</div><div class="result-actions"><button class="button button-secondary shuffle-button" type="button" data-tool="${tool.slug}">Shuffle ideas</button><button class="button button-secondary copy-all-button" type="button" data-target="results-${tool.slug}">Copy all</button></div></div><ul class="results-list" id="results-${tool.slug}" data-seed='${seedJSON}'></ul></div><div class="shortlist-panel"><div class="result-head"><div><div class="panel-title">Your shortlist</div><p class="small-copy">Save your favorite ideas here before you copy or compare them.</p></div><div class="result-actions"><button class="button button-secondary copy-shortlist-button" type="button" data-target="shortlist-${tool.slug}">Copy shortlist</button><button class="button button-secondary clear-shortlist-button" type="button" data-target="shortlist-${tool.slug}">Clear</button></div></div><ul class="shortlist-list" id="shortlist-${tool.slug}"></ul></div></div><aside class="sidebar-card"><div class="pill">Starter list</div><h3>${tool.seed.length} ready-made ideas</h3><ul class="idea-list">${starterListHTML}</ul></aside></div></section>
<section class="section section-alt"><div class="wrap two-col"><div><div class="pill">Tips</div><h2>How to use this tool</h2><p>${tool.tips}</p></div><div><div class="pill">Checklist</div><h3>A quick naming checklist</h3><ul class="clean-list compact-list">${checklistHTML}</ul></div></div></section>
<section class="section"><div class="wrap"><div class="section-head"><div><div class="pill">Prompt ideas</div><h2>Fast ways to explore better name styles</h2></div></div><div class="mini-grid">${promptsHTML}</div></div></section>
<section class="section section-alt"><div class="wrap narrow"><div class="pill">FAQ</div><h2>${tool.title} FAQ</h2><div class="faq-list">${faqsHTML}</div></div></section>
<section class="section"><div class="wrap two-col"><div><div class="pill">Related tools</div><h2>More generators like this</h2><ul class="clean-list compact-list">${relatedHTML}</ul></div><div><div class="pill">Next step</div><h3>What to do after you find a good name</h3><p>${tool.nextStep}</p></div></div></section>
<section class="section"><div class="wrap"><div class="section-head"><div><div class="pill">Keep browsing</div><h2>More generators people usually open next</h2></div></div><div class="browse-grid">${browseHTML}</div></div></section>
</main>
<footer class="site-footer"><div class="wrap footer-grid"><div><div class="footer-title">AI Name Generator</div><p class="footer-text">Free name ideas for creators, businesses, pets, games, and fun side projects.</p></div><div><div class="footer-title">Pages</div><div class="footer-links"><a href="/tools/index.html">All Tools</a><a href="/blog/">Blog</a><a href="/about.html">About</a><a href="/contact.html">Contact</a><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms</a></div></div></div><div class="wrap footer-bottom">Local preview first. Publish after final checks.</div></footer>
<script src="/assets/app.js"></script></body></html>`;
}

fs.mkdirSync(TOOLS_DIR, { recursive: true });
for (const tool of newTools) {
  fs.writeFileSync(path.join(TOOLS_DIR, `${tool.slug}.html`), generateToolHTML(tool), 'utf8');
  console.log(`✓ ${tool.slug}.html`);
}
console.log(`\nDone: ${newTools.length} new tool pages generated.`);
