#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = __dirname;

const articles = {
  "electrical-business-name-ideas.html": {
    tool: ["Electrical Business Name Generator", "electrical-business-name-generator"],
    related: ["HVAC Business Name Generator", "hvac-business-name-generator"],
    examples: ["Brightline Electric", "Safe Current Co", "Northside Electrical", "PanelPoint Power", "Circuit Works"],
    sections: [
      ["Trust and safety come first", "Electrical work is high-trust work. Customers are inviting a contractor into a home or business to handle wiring, panels, breakers, outlets, lighting, and safety-sensitive repairs. That means the name should feel professional before the customer reads a review or asks for an estimate. Names that sound too playful can work for casual businesses, but they often feel weak for a trade where safety, licensing, and reliability matter."],
      ["Choose words that suggest competence", "Strong electrical company names often use words connected to clarity, power, protection, speed, and precision. Current, circuit, volt, wire, spark, panel, bright, safe, and power can all work, but the best names usually use only one technical cue. A name like Brightline Electric feels cleaner than a name that tries to include every service at once."],
      ["Name for the jobs you want", "A solo electrician who focuses on small residential calls can use a friendly local name. A company that wants commercial contracts, panel upgrades, generator installs, or new construction work should choose something more scalable. Before deciding, imagine the name at the top of a bid, on a service van, and on a Google Business Profile."],
      ["Avoid sounding unlicensed or temporary", "Words like cheap, quick, budget, or handyman can reduce trust if the business wants serious electrical jobs. Customers may want fair pricing, but they also want the work done safely. A professional name can still feel approachable without sounding like a side gig."],
      ["Useful naming formulas", "Try location plus service, strength word plus Electric, founder name plus Electrical, clean adjective plus Power, or technical word plus Group. Examples of structures include Northside Electric, Bright Current, Miller Electrical, SafeLine Power, and Circuit Works. The formula matters less than whether the final name sounds clear, memorable, and credible."],
      ["Check the name in real places", "Put the name into a fake truck door layout, invoice header, phone greeting, and search result title. If it looks too long, sounds awkward, or is hard to spell after hearing it once, keep refining. Electrical businesses depend heavily on referrals, so a customer should be able to repeat the name easily."],
      ["Before you choose", "Search your local market, check the domain, look for similar contractors, and check business registration rules in your area. Also avoid names that could imply a license, certification, or service coverage you do not actually have."],
    ],
  },
  "pressure-washing-business-name-ideas.html": {
    tool: ["Pressure Washing Business Name Generator", "pressure-washing-business-name-generator"],
    related: ["Window Cleaning Business Name Generator", "window-cleaning-business-name-generator"],
    examples: ["Clear Curb Washing", "Summit Exterior Cleaning", "Bright Surface Co", "Blue Ridge Wash", "Prime Pressure Cleaning"],
    sections: [
      ["Make the result easy to picture", "Pressure washing is a visual service. Customers want dirty concrete, siding, fences, decks, and driveways to look clean again. A strong name should create that before-and-after feeling. Words like clean, bright, clear, curb, shine, surface, blast, wash, and renewal can help, but the name still needs to sound professional enough for homeowners and commercial accounts."],
      ["Do not overuse aggressive words", "Pressure washing names often lean too hard on blast, power, force, or extreme language. Those words can be memorable, but they can also make the service sound risky around paint, siding, windows, and landscaping. A balanced name suggests strength plus care."],
      ["Decide whether you want residential or commercial work", "A residential route business can use a friendly neighborhood name. A company aiming for storefronts, HOAs, apartment complexes, parking lots, or fleet washing may need something broader and more professional. The right name should match the type of customer you want more of next year."],
      ["Use local trust signals", "Local names can work well for exterior cleaning because customers often search by city, county, or region. A name with a regional cue can feel established, but avoid locking yourself into a tiny area if you plan to expand routes."],
      ["Naming formulas that work", "Try clean adjective plus Washing, local cue plus Exterior Cleaning, result word plus Services, surface word plus Wash, or premium word plus Pressure Cleaning. Examples of structures include Clear Curb Washing, Summit Exterior Cleaning, Bright Surface Co, Blue Ridge Wash, and Prime Pressure Cleaning."],
      ["Think beyond pressure washing", "Many companies later add soft washing, gutter cleaning, window cleaning, roof washing, or sealing. If you want that future, avoid a name that only fits driveways. A broader exterior cleaning name may be more valuable than a narrow pressure washing name."],
      ["Run the basic checks", "Search Google Maps, check domains and handles, and make sure the name does not look too similar to another local company. Then test it on a yard sign, quote form, and truck decal. If it reads quickly at a distance, it is probably stronger."],
    ],
  },
  "garage-door-business-name-ideas.html": {
    tool: ["Garage Door Business Name Generator", "garage-door-business-name-generator"],
    related: ["Business Name Generator", "business-name-generator"],
    examples: ["TrueLift Overhead", "Northgate Garage Door", "Springline Repair", "Prime Door Co", "Track & Panel Service"],
    sections: [
      ["Lead with reliability and response", "Garage door customers often need help because something is stuck, broken, noisy, or unsafe. A good name should suggest reliability, repair skill, and fast service without sounding frantic. The business may handle springs, openers, tracks, panels, maintenance, and full installs, so the name should feel practical and trustworthy."],
      ["Use clear service language", "Garage door names benefit from clarity. Door, lift, overhead, opener, track, spring, and repair can all make the service obvious. If the name is too abstract, people may not understand what the company does from a search result or truck."],
      ["Avoid names that sound too small if you want bigger jobs", "A one-person repair business can use a personal, local name. A company that wants builder relationships, commercial doors, warehouse doors, or multiple technicians should choose something scalable. The name should still work when the company has more vans and a larger service area."],
      ["Consider emergency and scheduled work", "Some customers need same-day repair, while others are shopping for a new door installation. A name that only sounds like emergency repair may miss installation leads. A name that only sounds like a showroom may feel too slow for urgent calls. Balance both if you offer both."],
      ["Naming formulas to try", "Use local cue plus Garage Door, reliability word plus Overhead Doors, founder name plus Door Service, mechanical word plus Repair, or premium word plus Door Co. Example structures include Northgate Garage Door, TrueLift Overhead, Miller Door Service, Springline Repair, and Prime Door Co."],
      ["Test it in local search", "Search the name idea with your city and service words. If results are crowded with similar names, make yours more distinctive. Garage door businesses compete heavily in local search, so a name that is clear but not identical to competitors is important."],
      ["Final checks before launch", "Check domain availability, Google Business Profile conflicts, phone greeting clarity, and whether the name can fit on a van. Also avoid implying 24/7 service, licensed coverage, or manufacturer authorization unless those claims are true."],
    ],
  },
  "concrete-business-name-ideas.html": {
    tool: ["Concrete Business Name Generator", "concrete-business-name-generator"],
    related: ["Roofing Business Name Generator", "roofing-business-name-generator"],
    examples: ["Solid Form Concrete", "Ridgeway Flatwork", "TrueBase Foundations", "Stonelevel Construction", "Carter Concrete Co"],
    sections: [
      ["Make the name feel strong and permanent", "Concrete work is about foundations, driveways, patios, slabs, sidewalks, flatwork, and structural confidence. Customers want a company that feels durable and capable. A name that suggests strength, precision, and reliability will usually fit better than something too cute or trendy."],
      ["Be clear about the kind of work you want", "Concrete businesses can specialize in residential driveways, decorative stamped concrete, commercial slabs, foundations, repair, polishing, or flatwork. A very specific name can help if you only want one niche. A broader name is better if you want room to expand."],
      ["Use material and strength words carefully", "Words like stone, slab, solid, form, base, foundation, mix, grade, and level can work well. The trick is to avoid making the name sound generic. Pair one industry word with a more distinctive brand word, location cue, or founder name."],
      ["Think about bids and jobsite signs", "Concrete company names show up on estimates, jobsite signs, trucks, shirts, and referrals from builders. A name should sound serious enough for contractors and property owners, while still being easy for homeowners to remember."],
      ["Naming formulas that work", "Try strength word plus Concrete, location plus Flatwork, founder name plus Concrete Co, result word plus Foundations, or material word plus Construction. Examples of structures include Solid Form Concrete, Ridgeway Flatwork, Carter Concrete Co, TrueBase Foundations, and Stonelevel Construction."],
      ["Avoid limiting yourself too early", "If you start with patios but may later do driveways, slabs, or commercial work, avoid a patio-only name. If you start as a concrete contractor but may add excavation or hardscaping, choose a name that still fits those services."],
      ["Check before choosing", "Look for similar local contractors, check domains, and make sure the name is readable on equipment and yard signs. Also consider whether customers can spell it correctly after hearing it over the phone."],
    ],
  },
  "roofing-business-name-ideas.html": {
    tool: ["Roofing Business Name Generator", "roofing-business-name-generator"],
    related: ["Business Name Generator", "business-name-generator"],
    examples: ["ShieldPeak Roofing", "Cedar Ridge Roofing Co", "TrueCover Restoration", "Summitline Exteriors", "Walker Roofing"],
    sections: [
      ["Lead with strength and protection", "Roofing names work best when they suggest durability, shelter, and trust. Customers are not looking for a playful name when they have storm damage, an active leak, missing shingles, or a major replacement decision. Strong language usually performs better because the service protects the home itself."],
      ["Think about trucks, yard signs, and invoices", "A roofing name appears in practical places: truck doors, yard signs, estimates, invoices, Google listings, and insurance-related conversations. If it looks weak on a truck or awkward on an estimate, it will not carry the brand well. Visual strength matters as much as wording."],
      ["Use local and structural cues", "Words connected to roofs, ridges, peaks, shields, cover, summit, cedar, slate, and shelter can work well. Local references can also help a roofing business feel established. The key is to avoid sounding like every other roofer in town."],
      ["Name for the services you may add", "Many roofing companies later expand into gutters, siding, windows, skylights, or exterior restoration. If that is possible, avoid a name that only fits one narrow service. A flexible name gives you more options when the business grows."],
      ["Naming formulas to test", "Try protection word plus Roofing, local landmark plus Roofing Co, material word plus Exteriors, founder name plus Roofing, or strength word plus Restoration. Example structures include ShieldPeak Roofing, Cedar Ridge Roofing Co, Slate & Summit Exteriors, Walker Roofing, and TrueCover Restoration."],
      ["Avoid risky or overpromising claims", "Words like best, guaranteed, cheapest, storm approved, or insurance expert can create trust problems if they are not backed by real proof. Keep the name confident but not exaggerated."],
      ["Final checks", "Search your local market, check the domain, look at Google Maps competitors, and say the name in a phone greeting. A roofing name should be easy to remember during a stressful repair situation."],
    ],
  },
  "junk-removal-business-name-ideas.html": {
    tool: ["Junk Removal Business Name Generator", "junk-removal-business-name-generator"],
    related: ["Moving Company Name Generator", "moving-company-name-generator"],
    examples: ["QuickClear Junk Removal", "OpenSpace Hauling", "Northside Cleanout", "FreshStart Removal", "Clear Load Co"],
    sections: [
      ["Make the service feel simple and fast", "Junk removal customers usually want relief. They have a garage, rental, office, yard, or storage space that needs to be cleared. A good name should communicate speed, simplicity, and trust. It should sound like the company can show up, remove the mess, and make the process easier."],
      ["Balance casual and professional", "Junk removal names can be fun, but they still need to feel dependable. A playful name may work for residential cleanouts, while commercial clients, property managers, and real estate agents may prefer something cleaner and more professional."],
      ["Use words that show the outcome", "Clear, haul, remove, cleanout, load, lift, space, pickup, clutter, and relief can all work. Outcome-based names often feel stronger than names that only describe trash. Customers are buying back space and time, not just hauling."],
      ["Plan for future services", "Some junk removal companies add moving labor, demolition, dumpster rental, estate cleanouts, donation pickup, or property cleanup. If you want that flexibility, avoid a name that only fits one service type."],
      ["Naming formulas to try", "Use speed word plus Junk Removal, outcome word plus Hauling, local cue plus Cleanout, founder name plus Removal Co, or broad word plus Property Services. Example structures include QuickClear Junk Removal, OpenSpace Hauling, Northside Cleanout, Parker Removal Co, and FreshStart Property Services."],
      ["Check tone in real customer situations", "Say the name in a voicemail, text message, estimate, and truck wrap. If it sounds too silly for an estate cleanout or too corporate for a quick garage job, adjust the tone."],
      ["Before you launch", "Check local competitors, domains, social handles, and whether the name could be confused with a trash company, moving company, or municipal service. Clear positioning will help your ads and local search listings later."],
    ],
  },
  "pool-cleaning-business-name-ideas.html": {
    tool: ["Pool Cleaning Business Name Generator", "pool-cleaning-business-name-generator"],
    related: ["Pressure Washing Business Name Generator", "pressure-washing-business-name-generator"],
    examples: ["ClearBlue Pool Service", "Prime Pool Care", "Crystal Route Maintenance", "Desert Wave Cleaning", "Bright Water Pools"],
    sections: [
      ["Clean and calm usually work best", "Pool cleaning brands often benefit from names that feel clear, fresh, and slightly premium. The goal is to suggest clean water, consistent care, and visual quality rather than urgency or heavy repair work. Customers want the pool to look safe, clear, and ready to use."],
      ["Use water language with a light touch", "Words like blue, wave, aqua, crystal, splash, clear, tide, and shore can help the name feel relevant. Too many water words can make the name generic, so pair one good cue with a stronger brand word, local cue, or service promise."],
      ["Think about weekly route customers", "Many pool cleaning companies grow through recurring residential service. A name that sounds polished and easy to recommend can help with word of mouth. It should also work for reminder texts, invoices, and yard signs in neighborhoods."],
      ["Leave room for repairs or spa service", "If the company may later add repairs, filter changes, chemical balancing, inspections, or spa maintenance, choose a name that can expand naturally. A name focused only on basic cleaning may feel too narrow later."],
      ["Naming formulas that work", "Try water word plus Pool Service, premium word plus Pool Care, local cue plus Pool Cleaning, clarity word plus Maintenance, or founder name plus Pools. Example structures include ClearBlue Pool Service, Prime Pool Care, Desert Wave Cleaning, Crystal Route Maintenance, and Bennett Pools."],
      ["Avoid names that sound careless", "Funny pool names can be memorable, but they may not inspire trust for ongoing home service. Customers are paying for consistency, chemical knowledge, and care around their property. Keep the tone friendly but competent."],
      ["Final checks", "Search local competitors, check the domain, look for similar pool companies, and test the name in a text reminder. If it is easy to read and easy to refer, it is likely a stronger choice."],
    ],
  },
  "pest-control-business-name-ideas.html": {
    tool: ["Pest Control Business Name Generator", "pest-control-business-name-generator"],
    related: ["Business Name Generator", "business-name-generator"],
    examples: ["HomeShield Pest Control", "SafeNest Pest Solutions", "BarrierPoint Services", "Carter Pest Management", "ClearGuard Exterminators"],
    sections: [
      ["Trust matters more than shock value", "Pest control names sometimes try to sound aggressive, but customers are usually looking for safety, reliability, and relief. A good name should make people feel that the problem will be handled carefully, especially around children, pets, restaurants, rentals, or offices."],
      ["Choose words that communicate protection", "Words like shield, guard, safe, clear, home, defense, control, barrier, and protect often work better than names focused only on bugs. Customers want prevention and peace of mind, not just extermination."],
      ["Decide how broad the service will be", "Some companies focus on general residential pest control. Others specialize in termites, bed bugs, mosquitoes, wildlife, commercial accounts, or recurring prevention plans. A broad name helps if the company may expand into multiple treatment categories."],
      ["Be careful with fear-based language", "Names that are too scary can get attention, but they may feel unprofessional. The best pest control names balance confidence with calm. A customer should feel comfortable calling the company, not embarrassed to say the name."],
      ["Naming formulas to try", "Use protection word plus Pest Control, local cue plus Exterminators, home word plus Pest Solutions, barrier word plus Services, or founder name plus Pest Management. Example structures include HomeShield Pest Control, Valley Exterminators, SafeNest Pest Solutions, BarrierPoint Services, and Carter Pest Management."],
      ["Think about uniforms and recurring plans", "Pest control businesses often rely on scheduled service plans. The name should look credible on uniforms, invoices, door hangers, and service reminders. A clean professional name helps the company feel dependable over time."],
      ["Check before choosing", "Search for similar names locally, check domain and handle availability, and avoid claims such as eco-safe, pet-safe, guaranteed, or certified unless they are accurate and supported."],
    ],
  },
  "window-cleaning-business-name-ideas.html": {
    tool: ["Window Cleaning Business Name Generator", "window-cleaning-business-name-generator"],
    related: ["Pressure Washing Business Name Generator", "pressure-washing-business-name-generator"],
    examples: ["ClearView Window Cleaning", "Northside Glass Care", "BrightPane Services", "Prime Exterior Cleaning", "Ellis Windows"],
    sections: [
      ["Make the name feel clear and polished", "Window cleaning is a visual service, so the name should feel bright, clear, and professional. Customers want streak-free glass, reliable appointments, and respectful service around homes or storefronts. A clean name can communicate that before the first quote."],
      ["Use clarity words without becoming generic", "Words like clear, shine, glass, pane, bright, view, sparkle, and light are natural fits. Because many competitors use the same words, combine them with a local cue, distinctive brand word, or service promise."],
      ["Decide between residential and commercial positioning", "Residential window cleaning names can feel friendly and neighborhood-focused. Commercial or storefront cleaning names may need to sound more polished and scalable. If you want both, choose a name that does not lean too far in one direction."],
      ["Plan for add-on services", "Many window cleaning companies add gutter cleaning, solar panel cleaning, pressure washing, screen repair, or holiday lights. If that future matters, a broader exterior cleaning name may be smarter than a window-only name."],
      ["Naming formulas that work", "Try clarity word plus Window Cleaning, local cue plus Glass Care, premium word plus Exterior Cleaning, view word plus Services, or founder name plus Windows. Example structures include ClearView Window Cleaning, Northside Glass Care, Prime Exterior Cleaning, BrightPane Services, and Ellis Windows."],
      ["Test it on real materials", "Put the name on a fake door hanger, van decal, quote form, and Google result. Window cleaning names often look best when they are short and easy to read from a driveway or storefront."],
      ["Final checks", "Look for similar companies in your service area, check domain availability, and make sure the name is easy to spell after hearing it once. Referrals are easier when customers can remember the name accurately."],
    ],
  },
  "painting-business-name-ideas.html": {
    tool: ["Painting Business Name Generator", "painting-business-name-generator"],
    related: ["Business Name Generator", "business-name-generator"],
    examples: ["TrueFinish Painting", "Northline Painters", "PrimeCoat Coatings", "FreshWall Interiors", "Bennett Painting Co"],
    sections: [
      ["Choose a name that feels careful and clean", "Painting businesses rely on trust. Customers care about neat edges, clean prep, good communication, and respect for the property. A name that feels polished and careful can be stronger than one that only sounds colorful."],
      ["Decide whether you want residential or commercial work", "Residential painting names can feel warm, local, and approachable. Commercial painting names may need to sound more professional and scalable. If you offer both, choose a name that works on homes, offices, apartments, and larger projects."],
      ["Use color language with restraint", "Words like brush, coat, color, finish, wall, hue, prime, and palette can work well. Too many paint words can make the name sound generic. Pair one industry cue with a stronger brand word or local angle."],
      ["Think about premium positioning", "If you want higher-end interiors, cabinet painting, fine finishes, or design-conscious clients, the name should feel more refined. If you focus on fast repaint jobs, rentals, or exterior work, clarity and speed may matter more."],
      ["Naming formulas that work", "Try finish word plus Painting, local cue plus Painters, premium word plus Coatings, founder name plus Painting Co, or result word plus Interiors. Example structures include TrueFinish Painting, Northline Painters, PrimeCoat Coatings, Bennett Painting Co, and FreshWall Interiors."],
      ["Check how it looks on estimates and signs", "Painting names appear on yard signs, uniforms, proposal PDFs, invoices, and local listings. A name that is easy to read and feels professional can help customers trust the estimate before they compare prices."],
      ["Before you choose", "Search competitors, check the domain, test the phone greeting, and avoid claims like best, cheapest, guaranteed, or eco-friendly unless you can support them. A simple credible name often ages better than a trendy one."],
    ],
  },
};

function renderBody(config) {
  const sections = config.sections.map(([heading, text]) => `<h2>${heading}</h2><p>${text}</p>`).join("");
  const examples = config.examples.map((name) => `<li>${name}</li>`).join("");
  return `${sections}<h2>Example name directions</h2><p>Use examples as direction, not as final answers. A strong naming session should create several styles: one local and practical, one premium, one founder-led, one service-led, and one broader brand name that can grow with the company.</p><ul>${examples}</ul><h2>How to narrow the shortlist</h2><p>After you collect ideas, remove any name that is hard to spell, too similar to a competitor, too narrow for future services, or too vague for a customer to understand. Keep three to five names and test them in a phone greeting, Google result, quote header, truck decal, and referral sentence.</p><h2>Availability checklist</h2><p>Before you commit, search the name in your city, check domain availability, look at social handles, scan Google Maps, and review local business registration rules. If the name will be used for a serious company, do a trademark search or ask a qualified professional before printing signs or launching ads.</p><h2>Use the generator</h2><p>Try the <a href="/tools/${config.tool[1]}.html">${config.tool[0]}</a> for quick options. You can also compare ideas with the <a href="/tools/${config.related[1]}.html">${config.related[0]}</a>.</p><div style="margin-top:32px;padding:20px;background:var(--surface-alt);border-radius:var(--radius);border:1px solid #c9d7ff"><p style="margin:0"><strong>Ready for ideas?</strong> Try the <a href="/tools/${config.tool[1]}.html">${config.tool[0]}</a>.</p></div>`;
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
