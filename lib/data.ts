// Central content data for Charleston Decorative Arts
// Drives templated, SEO/AI-SEO-optimized pages: brand installation pages & service-area pages.

export const SITE = {
  name: "Charleston Decorative Arts",
  shortName: "CDA",
  domain: "charlestondecorativearts.com",
  url: "https://charlestondecorativearts.com",
  tagline: "Preserving Charleston's Historic Beauty. Elevating Luxury Interiors.",
  description:
    "The Southeast's premier decorative arts studio specializing in luxury wallcoverings, historic restoration, bespoke murals, and the education of master craftsmen.",
  phone: "(843) 555-0142",
  email: "studio@charlestondecorativearts.com",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Luxury Wallcoverings", href: "/luxury-wallcoverings" },
  { label: "Historic Restoration", href: "/historic-restoration" },
  { label: "Murals", href: "/murals" },
  { label: "Decorative Finishes", href: "/decorative-finishes" },
  { label: "Designers & Architects", href: "/designers-architects" },
  { label: "Historic Properties", href: "/historic-properties" },
  { label: "Education", href: "/education" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface Brand {
  slug: string;
  name: string;
  blurb: string;
  specialty: string;
}

export const BRANDS: Brand[] = [
  { slug: "de-gournay", name: "de Gournay", blurb: "Hand-painted silk and paper murals rooted in centuries-old chinoiserie and scenic traditions.", specialty: "hand-painted scenic murals on silk and paper" },
  { slug: "gracie", name: "Gracie", blurb: "The gold standard of American hand-painted wallpaper since 1898, prized for museum-quality chinoiserie panels.", specialty: "hand-painted chinoiserie wallpaper panels" },
  { slug: "schumacher", name: "Schumacher", blurb: "An American design house since 1889, blending archival pattern with modern luxury textiles and wallcoverings.", specialty: "archival-inspired luxury wallcoverings and textiles" },
  { slug: "phillip-jeffries", name: "Phillip Jeffries", blurb: "The world's leading purveyor of natural fiber wallcoverings, grasscloths, and specialty textures.", specialty: "natural fiber wallcoverings and grasscloth" },
  { slug: "arte", name: "Arte", blurb: "Belgian design house known for sculptural, textural wallcoverings that behave like art installations.", specialty: "sculptural textured wallcoverings" },
  { slug: "elitis", name: "Élitis", blurb: "French luxury wallcoverings defined by bold texture, metallics, and couture-level finishing.", specialty: "textured metallic French wallcoverings" },
  { slug: "cole-and-son", name: "Cole & Son", blurb: "British heritage wallpaper house since 1875, home to iconic archival and couture-collaboration prints.", specialty: "British heritage pattern wallpaper" },
  { slug: "morris-and-co", name: "Morris & Co.", blurb: "The original Arts & Crafts wallpaper house, rooted in William Morris's timeless botanical patterns.", specialty: "Arts & Crafts botanical wallpaper" },
  { slug: "zuber", name: "Zuber", blurb: "French manufacturer producing hand-block-printed scenic wallpaper since 1797 using original woodblocks.", specialty: "hand-block-printed scenic wallpaper" },
  { slug: "pierre-frey", name: "Pierre Frey", blurb: "Parisian fabric and wallcovering house synonymous with French decorative heritage.", specialty: "French heritage textiles and wallcoverings" },
  { slug: "kravet", name: "Kravet", blurb: "A trade-favorite American house delivering breadth across designer fabric and wallcovering collections.", specialty: "designer fabric and wallcovering collections" },
  { slug: "york", name: "York Wallcoverings", blurb: "A trusted American wallcovering manufacturer known for accessible luxury and dependable performance.", specialty: "accessible luxury wallcovering collections" },
  { slug: "thibaut", name: "Thibaut", blurb: "America's oldest wallpaper company, blending historic pattern archives with fresh seasonal collections.", specialty: "historic-archive wallpaper collections" },
  { slug: "farrow-and-ball", name: "Farrow & Ball", blurb: "British paint and paper house celebrated for depth of color and heritage-grade pigments.", specialty: "heritage color wallpaper and paint" },
  { slug: "zoffany", name: "Zoffany", blurb: "British luxury house pairing historic archives with richly layered, tactile wallcoverings.", specialty: "richly layered heritage wallcoverings" },
];

export interface LocationArea {
  slug: string;
  name: string;
  region: string;
  blurb: string;
}

export const LOCATIONS: LocationArea[] = [
  { slug: "charleston", name: "Charleston", region: "South Carolina", blurb: "our home base and the heart of the Lowcountry's historic district" },
  { slug: "south-of-broad", name: "South of Broad", region: "Charleston, SC", blurb: "Charleston's most storied historic district of antebellum single houses" },
  { slug: "the-battery", name: "The Battery", region: "Charleston, SC", blurb: "the iconic waterfront promenade lined with Charleston's grandest historic mansions" },
  { slug: "french-quarter", name: "French Quarter", region: "Charleston, SC", blurb: "Charleston's original walled city, dense with 18th-century architecture" },
  { slug: "ansonborough", name: "Ansonborough", region: "Charleston, SC", blurb: "a beautifully preserved historic residential neighborhood downtown" },
  { slug: "harleston-village", name: "Harleston Village", region: "Charleston, SC", blurb: "a historic downtown neighborhood of grand homes near the College of Charleston" },
  { slug: "mount-pleasant", name: "Mount Pleasant", region: "South Carolina", blurb: "a fast-growing luxury market across the Cooper River from downtown Charleston" },
  { slug: "old-village", name: "Old Village", region: "Mount Pleasant, SC", blurb: "Mount Pleasant's historic waterfront enclave of classic Lowcountry homes" },
  { slug: "sullivans-island", name: "Sullivan's Island", region: "South Carolina", blurb: "a barrier island prized for luxury beach residences and historic cottages" },
  { slug: "isle-of-palms", name: "Isle of Palms", region: "South Carolina", blurb: "a premier coastal community of luxury oceanfront homes" },
  { slug: "daniel-island", name: "Daniel Island", region: "South Carolina", blurb: "a master-planned luxury community of estate homes near Charleston" },
  { slug: "kiawah-island", name: "Kiawah Island", region: "South Carolina", blurb: "one of the Southeast's most exclusive oceanfront resort communities" },
  { slug: "seabrook-island", name: "Seabrook Island", region: "South Carolina", blurb: "a private oceanfront community known for understated luxury estates" },
  { slug: "johns-island", name: "Johns Island", region: "South Carolina", blurb: "a rapidly developing area of large private luxury estates" },
  { slug: "folly-beach", name: "Folly Beach", region: "South Carolina", blurb: "a laid-back barrier island with a growing portfolio of luxury renovations" },
  { slug: "hilton-head", name: "Hilton Head", region: "South Carolina", blurb: "a premier golf and resort destination with significant luxury home stock" },
  { slug: "bluffton", name: "Bluffton", region: "South Carolina", blurb: "a historic Lowcountry town experiencing rapid luxury growth" },
  { slug: "savannah", name: "Savannah", region: "Georgia", blurb: "a historic city renowned for its own rich stock of antebellum architecture" },
  { slug: "beaufort", name: "Beaufort", region: "South Carolina", blurb: "one of the South's oldest and best-preserved historic waterfront towns" },
  { slug: "greenville", name: "Greenville", region: "South Carolina", blurb: "an Upstate South Carolina city with a fast-growing luxury design market" },
  { slug: "charlotte", name: "Charlotte", region: "North Carolina", blurb: "a major Southeast metro with a thriving luxury residential design scene" },
  { slug: "palm-beach", name: "Palm Beach", region: "Florida", blurb: "one of America's foremost luxury residential markets" },
];

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "how-much-does-luxury-wallpaper-installation-cost",
    title: "How Much Does Luxury Wallpaper Installation Cost?",
    category: "Luxury Wallcoverings",
    excerpt: "A transparent breakdown of what drives pricing for museum-grade wallcovering installation, from hand-painted murals to natural fiber grasscloth.",
    body: [
      "Luxury wallpaper installation pricing varies widely because the category spans everything from machine-printed paper to hand-painted silk murals produced by artisans overseas. As a general guide, expect material costs alone to range from $200 to $1,200+ per yard for collections from houses like de Gournay, Gracie, Fromental, and Zuber, with installation labor adding $8 to $25+ per square foot depending on substrate condition, pattern complexity, and whether the work requires historic-preservation methods.",
      "The single biggest cost driver is surface preparation. Historic plaster walls in Charleston homes often require skim-coating, moisture remediation, and lining paper before a single strip of luxury wallcovering is hung — this preparatory work can equal or exceed the cost of the material itself.",
      "Pattern matching is the second major factor. Large-scale scenic murals and botanical repeats demand meticulous seam alignment; a single mismatched panel on a $40,000 silk mural is not a mistake a client can absorb. Guild-trained installers charge accordingly for the precision this requires.",
      "At Charleston Decorative Arts, every estimate includes a documented site assessment, moisture analysis, and laser layout before a number is quoted — because in luxury installation, the estimate is only as good as the wall it's based on.",
    ],
  },
  {
    slug: "best-wallpaper-for-historic-charleston-homes",
    title: "Best Wallpaper for Historic Charleston Homes",
    category: "Historic Preservation",
    excerpt: "Choosing wallcoverings that honor a historic home's bones while performing against Lowcountry humidity.",
    body: [
      "Historic Charleston homes present a unique challenge: walls built in the 1700s and 1800s were never engineered for modern humidity control, vapor barriers, or synthetic adhesives. The best wallcovering choice starts with breathability — natural fiber options like grasscloth from Phillip Jeffries and paper-backed hand-blocked patterns from Zuber allow the wall assembly to manage moisture rather than trap it.",
      "For formal rooms — parlors, dining rooms, entry halls — period-appropriate scenic papers from Zuber or hand-painted chinoiserie from Gracie honor the architectural intent of pre-Civil-War interiors without looking like a museum reproduction.",
      "Powder rooms and smaller spaces tolerate more saturated pattern and color, which is where houses like Cole & Son and Farrow & Ball's archival prints perform beautifully.",
      "Whatever the pattern, the installation method matters as much as the product: proper lining paper, breathable adhesives, and humidity-conscious acclimation of the material before hanging are non-negotiable in a historic Charleston structure.",
    ],
  },
  {
    slug: "battery-charleston-historic-interior-design-guide",
    title: "Battery Charleston Historic Interior Design Guide",
    category: "Regional Expertise",
    excerpt: "What makes interiors along the Battery distinct, and how designers and homeowners approach wallcovering and mural decisions there.",
    body: [
      "Homes along the Battery represent some of the most architecturally significant residential real estate in the American South — grand antebellum single houses and mansions with soaring ceilings, deep piazzas, and original plasterwork that has survived hurricanes, earthquakes, and two centuries of Charleston humidity.",
      "Interior design decisions here are inseparable from preservation considerations. Any wallcovering project typically begins with a historic documentation review, since many Battery properties carry National Register status or local Board of Architectural Review oversight.",
      "Scenic murals are especially well suited to the Battery's grand foyers and dining rooms, where 12-14 foot ceilings give a hand-painted panorama room to breathe. We frequently pair museum-quality hand-painted murals with Venetian plaster and gold leaf accents to match the gravity of these interiors.",
      "Charleston Decorative Arts has completed multiple installations along the Battery, coordinating directly with interior designers, architects, and preservation consultants to ensure every wallcovering choice is both stunning and structurally appropriate.",
    ],
  },
  {
    slug: "kiawah-island-luxury-interior-trends",
    title: "Kiawah Island Luxury Interior Trends",
    category: "Regional Expertise",
    excerpt: "How coastal luxury homeowners on Kiawah Island are using wallcoverings and murals to elevate oceanfront interiors.",
    body: [
      "Kiawah Island's design language leans coastal-luxury: soft neutral palettes, natural materials, and a restrained hand that lets ocean views take center stage. Within that context, wallcoverings function less as loud statements and more as tonal enrichment.",
      "Natural fiber wallcoverings from Phillip Jeffries remain the most requested category on the island, prized for their texture and humidity tolerance in oceanfront construction. Grasscloth in sandy, driftwood, and soft sage tones complements Kiawah's coastal-meets-Lowcountry aesthetic.",
      "We're also seeing increased demand for large-scale murals in powder rooms and primary suites — a single feature wall depicting marsh grass, egrets, or abstracted wave patterns gives a home a bespoke, gallery-quality moment without overwhelming the rest of an otherwise quiet interior.",
      "Because oceanfront construction means near-constant humidity exposure, every Kiawah Island installation we complete includes a full moisture analysis and vapor-appropriate adhesive selection before any material is hung.",
    ],
  },
  {
    slug: "de-gournay-installation-guide",
    title: "de Gournay Installation Guide",
    category: "Brand Installation",
    excerpt: "What homeowners and designers should know before installing de Gournay's hand-painted silk and paper murals.",
    body: [
      "de Gournay murals are painted by hand in specialist ateliers, arrive as sequenced panels, and are irreplaceable if damaged during installation — which makes installer selection the single most important decision in the project.",
      "Because each panel is hand-painted to a specific wall's dimensions, installation begins long before the mural arrives: a precise laser-measured layout is sent to de Gournay's studio to ensure panel breaks land in inconspicuous locations (behind furniture, in corners) rather than across a key motif.",
      "On site, silk-backed panels require dry-hanging techniques and specialized adhesives that won't bleed through or discolor the silk — a mistake here cannot be corrected with a patch. Paper-backed de Gournay panels are more forgiving but still demand seamless pattern continuity across every seam.",
      "Charleston Decorative Arts is guild-trained in museum-quality mural installation and has handled de Gournay commissions in both historic and new-construction luxury settings across the Southeast.",
    ],
  },
  {
    slug: "phillip-jeffries-installation-standards",
    title: "Phillip Jeffries Installation Standards",
    category: "Brand Installation",
    excerpt: "The correct approach to hanging natural fiber wallcoverings and grasscloth without visible seams or discoloration.",
    body: [
      "Phillip Jeffries' natural fiber wallcoverings — grasscloth, sisal, and specialty textures — behave very differently from printed paper. Because the material is woven from organic fibers, no two bolts match perfectly in color, which means bolt sequencing is critical before a single strip goes up.",
      "Proper installation requires clear (not tinted) adhesive applied at controlled thickness, since excess adhesive will bleed through the porous fiber backing and cause permanent staining — one of the most common and costly mistakes in DIY or inexperienced installation.",
      "Butt-seam installation (rather than overlap) is standard for natural fibers, requiring a steady hand and sharp blade technique to avoid visible gaps as the material expands and contracts with humidity.",
      "Our installers acclimate every roll to the room's humidity for 24-48 hours before hanging, a step Phillip Jeffries specifically recommends and one that is frequently skipped by less experienced crews.",
    ],
  },
  {
    slug: "museum-quality-wallpaper-installation",
    title: "Museum Quality Wallpaper Installation",
    category: "Historic Preservation",
    excerpt: "What separates museum-standard installation from standard residential wallpapering.",
    body: [
      "Museum-quality installation treats every wallcovering as a conservation object, not just a decorative surface. That means archival-grade, reversible adhesives that won't damage historic plaster if the covering is ever removed, full moisture and substrate documentation before work begins, and climate-conscious acclimation of materials.",
      "It also means meticulous photographic documentation at every stage — a practice borrowed directly from museum conservation labs — so that the original condition of a historic wall is preserved as a record regardless of what happens above it.",
      "This standard is what institutions, historic preservation organizations, and discerning private clients require, and it's the baseline Charleston Decorative Arts applies to every historic project, not only museum commissions.",
    ],
  },
  {
    slug: "historic-wallpaper-restoration",
    title: "Historic Wallpaper Restoration",
    category: "Historic Preservation",
    excerpt: "How original historic wallpaper is stabilized, repaired, and preserved rather than replaced.",
    body: [
      "When a historic wallpaper survives in a home or institution, replacement should always be the last resort. Restoration begins with careful surface cleaning and stabilization of any lifting or flaking material, often using conservation-grade consolidants applied by hand.",
      "Tears and losses are repaired with archival Japanese tissue and reversible wheat-starch paste — the same materials used in paper conservation labs — rather than modern tapes or adhesives that can cause long-term damage.",
      "Color-matching for infill areas is done by hand, mixing pigments to match faded, light-exposed original material rather than the paper's original saturated color, so repairs read as sympathetic rather than jarring.",
      "Charleston Decorative Arts partners with historic preservation organizations across the Southeast to assess, document, and restore original wallpaper in landmark properties.",
    ],
  },
  {
    slug: "wallpaper-vs-grasscloth",
    title: "Wallpaper vs Grasscloth",
    category: "Luxury Wallcoverings",
    excerpt: "Understanding the practical and aesthetic tradeoffs between printed wallpaper and natural fiber grasscloth.",
    body: [
      "Printed wallpaper offers unlimited pattern, color, and scale — from hand-painted murals to archival prints — with a smooth, uniform surface that reads as more formal. Grasscloth offers texture, natural variation, and a more relaxed, tactile feel, but comes with tradeoffs.",
      "Grasscloth is more humidity-tolerant and forgiving of imperfect walls (its texture hides minor substrate flaws), but it also stains more easily, cannot be spot-cleaned like vinyl-coated paper, and shows seams more visibly since bolts vary in color.",
      "Printed paper is generally easier to maintain and better suited to high-pattern, formal rooms, while natural fiber suits transitional and coastal-luxury interiors where texture matters more than pattern precision.",
      "Many of our Lowcountry clients use both: grasscloth in bedrooms and living spaces, and printed or hand-painted murals as a formal statement in entries and dining rooms.",
    ],
  },
  {
    slug: "luxury-powder-room-design",
    title: "Luxury Powder Room Design",
    category: "Design Resources",
    excerpt: "Why the powder room is the best room in the house for bold wallcovering decisions.",
    body: [
      "A powder room is the one space in a home where designers and homeowners alike are encouraged to take real risk — it's small, infrequently occupied for long periods, and disconnected enough from the home's main sightlines to support a mural or pattern that would feel overwhelming elsewhere.",
      "Hand-painted murals, richly saturated Cole & Son prints, and metallic Élitis wallcoverings all perform beautifully in powder rooms, where a single feature wall or fully wrapped room creates an immersive, jewel-box moment for guests.",
      "Because powder rooms see heavy moisture from handwashing, proper ventilation and vapor-appropriate adhesive selection matter even in a small space — a detail worth confirming with your installer regardless of how modest the square footage.",
    ],
  },
  {
    slug: "historic-charleston-paint-colors",
    title: "Historic Charleston Paint Colors",
    category: "Regional Expertise",
    excerpt: "The color traditions that inform how wallcoverings and murals are chosen for historic Charleston interiors.",
    body: [
      "Charleston's historic color palette — soft haint blues, warm ochres, deep tobacco browns, and muted plaster whites — developed from a mix of available period pigments and the Lowcountry's particular quality of light. These tones remain the backbone against which most wallcovering and mural decisions are made in historic homes today.",
      "When selecting a wallcovering for a historic interior, we typically pull accent tones directly from documented period paint colors already present in the home's trim, plaster, or millwork, ensuring pattern and color feel original to the house rather than imposed on it.",
      "Farrow & Ball's heritage palette is a frequent reference point for Charleston projects specifically because so many of its pigments were developed from historic English and colonial American color research.",
    ],
  },
  {
    slug: "how-to-select-designer-wallpaper",
    title: "How to Select Designer Wallpaper",
    category: "Design Resources",
    excerpt: "A practical framework interior designers and homeowners can use to narrow luxury wallcovering choices.",
    body: [
      "Start with the room's function and light exposure, not the pattern itself. A north-facing dining room can support darker, more saturated pattern than a sun-drenched sitting room where the same color may read as overwhelming by 2pm.",
      "Next, consider scale relative to the room: large-scale scenic murals need at least 9-10 feet of uninterrupted wall to read properly, while smaller repeats and grasscloth suit rooms with more windows, doors, and built-ins breaking up the wall plane.",
      "Finally, think about longevity. A hand-painted mural is a decades-long investment and should be chosen independent of short-term trend cycles, while smaller-format printed patterns can be updated more affordably as tastes evolve.",
      "Our design consultation process walks every client and designer partner through exactly this framework before a single sample book is opened.",
    ],
  },
  {
    slug: "humidity-and-wallpaper",
    title: "Humidity and Wallpaper",
    category: "Historic Preservation",
    excerpt: "Why Lowcountry humidity is the single biggest technical factor in any Charleston-area wallcovering project.",
    body: [
      "Charleston's subtropical humidity is unforgiving to wallcovering installations that aren't specified correctly. Moisture trapped behind non-breathable vinyl coverings on historic plaster is one of the most common causes of mold, bubbling, and adhesive failure we're called in to correct.",
      "A proper moisture analysis — checking both ambient humidity and moisture content within the wall assembly itself — should precede every installation, historic or new construction. This determines adhesive selection, whether lining paper is required, and whether a given wallcovering is even appropriate for the space.",
      "Natural fiber and paper-backed materials generally outperform vinyl in humid Lowcountry environments precisely because they allow some vapor transmission rather than sealing moisture in.",
    ],
  },
  {
    slug: "wallpaper-in-coastal-homes",
    title: "Wallpaper in Coastal Homes",
    category: "Regional Expertise",
    excerpt: "Special considerations for wallcovering and mural installation in oceanfront and coastal Lowcountry properties.",
    body: [
      "Coastal homes face compounded challenges: salt air, higher ambient humidity, and larger daily temperature swings from air conditioning cycling against exterior heat. All three accelerate adhesive breakdown and material expansion if the wrong products are specified.",
      "We favor natural fiber wallcoverings and vapor-permeable adhesives in oceanfront applications, paired with a longer acclimation period for materials before installation begins.",
      "Feature walls and murals remain popular in coastal luxury homes, particularly in primary suites and powder rooms, where a single striking installation can anchor an otherwise neutral, view-forward interior.",
    ],
  },
  {
    slug: "how-murals-increase-home-value",
    title: "How Murals Increase Home Value",
    category: "Design Resources",
    excerpt: "The case for hand-painted and custom murals as a genuine investment in a luxury property.",
    body: [
      "A well-executed custom mural is one of the few decorative investments that can meaningfully differentiate a luxury listing. Buyers and appraisers increasingly recognize museum-quality murals from recognized ateliers as a value-adding feature comparable to high-end millwork or a chef's kitchen.",
      "Unlike trend-driven paint colors or furnishings, a well-chosen scenic or botanical mural in a foyer, dining room, or primary suite tends to read as timeless rather than dated, particularly when installed to museum standards with proper documentation.",
      "For historic properties specifically, a documented, reversible mural installation can enhance value without compromising the property's preservation status — an important distinction for owners of National Register homes.",
    ],
  },
  {
    slug: "interior-designer-resource-center",
    title: "Interior Designer Resource Center",
    category: "Designers & Architects",
    excerpt: "What Charleston Decorative Arts offers trade partners: specification support, sampling, and project management.",
    body: [
      "Interior designers working with Charleston Decorative Arts get a single point of contact for specification assistance across every luxury wallcovering house we install — from initial yardage estimates to installer scheduling around a broader renovation timeline.",
      "We maintain current sample libraries from de Gournay, Gracie, Schumacher, Phillip Jeffries, Arte, Élitis, Cole & Son, Morris & Co., Zuber, Pierre Frey, Kravet, York, Thibaut, Farrow & Ball, and Zoffany, available to trade partners for client presentations.",
      "Project photography, installation documentation, and moisture/substrate reporting are provided as standard deliverables on every trade project, supporting designers' own portfolio and client documentation needs.",
    ],
  },
  {
    slug: "architect-specification-guide",
    title: "Architect Specification Guide",
    category: "Designers & Architects",
    excerpt: "Guidance for architects specifying wallcovering and decorative finish scopes on luxury and historic projects.",
    body: [
      "For architects working on historic renovation or luxury new construction, wallcovering and decorative finish scopes are best specified early — substrate preparation requirements (skim coating, moisture barriers, lining paper) can affect framing, HVAC, and vapor barrier decisions upstream.",
      "We work directly with architecture firms to review substrate specifications before drywall or plaster finishing is complete, avoiding costly rework when a specified wallcovering requires a different wall assembly than what was drawn.",
      "For National Register or Board of Architectural Review projects, we provide historic documentation and material specification letters suitable for submission to preservation review boards.",
    ],
  },
  {
    slug: "wallpaper-maintenance-guide",
    title: "Wallpaper Maintenance Guide",
    category: "Design Resources",
    excerpt: "How to properly care for luxury wallcoverings and murals to protect a significant design investment.",
    body: [
      "Most luxury wallcoverings should never be scrubbed or cleaned with standard household products. Dust regularly with a soft, dry brush or vacuum attachment, and address any spill immediately by blotting (never rubbing) with a dry cloth.",
      "Hand-painted silk murals in particular should never be cleaned with water or solvents — professional conservation cleaning is the only safe option once a silk panel is soiled.",
      "Direct sunlight is the leading cause of fading in luxury wallcoverings; UV-filtering window treatments meaningfully extend the life of a mural or printed pattern in sun-exposed rooms.",
      "We recommend a professional condition assessment every few years for significant mural investments, particularly in humid Lowcountry environments.",
    ],
  },
  {
    slug: "historic-home-restoration-checklist",
    title: "Historic Home Restoration Checklist",
    category: "Historic Preservation",
    excerpt: "A starting checklist for homeowners planning a historic interior restoration involving wallcoverings.",
    body: [
      "Begin with documentation: photograph and catalog existing wallcoverings, plaster condition, and any visible moisture issues before any work begins. This record protects both the homeowner and the preservation history of the property.",
      "Commission a moisture and substrate analysis before selecting any wallcovering — this single step prevents the majority of installation failures we're called in to repair.",
      "Confirm whether the property carries National Register status or falls under local Board of Architectural Review jurisdiction, as this may affect which materials and methods are permissible.",
      "Finally, budget for surface preparation as its own line item, separate from material and installation costs — in historic homes, it is frequently the largest expense in the project.",
    ],
  },
];

export const SERVICES = [
  {
    slug: "luxury-wallcoverings",
    title: "Luxury Wallcoverings",
    description:
      "Installation of Schumacher, de Gournay, Gracie, Fromental, Zuber, Phillip Jeffries, Élitis, Arte, Cole & Son, and other luxury collections.",
    image: "wallcoverings",
    points: ["Trade specification support", "Precision pattern matching", "Natural fiber & grasscloth expertise", "Full-service sourcing"],
  },
  {
    slug: "historic-restoration",
    title: "Historic Restoration",
    description: "Historic wallpaper preservation, surface preparation, repair, museum-quality installation, and historic consultation.",
    image: "restoration",
    points: ["Historic wallpaper preservation", "Surface preparation", "Conservation-grade repair", "Historic consultation"],
  },
  {
    slug: "murals",
    title: "Custom Murals",
    description: "Hand-painted murals, digital murals, commercial feature walls, hospitality installations, and historic reproductions.",
    image: "murals",
    points: ["Hand-painted murals", "Digital murals", "Commercial feature walls", "Historic reproductions"],
  },
  {
    slug: "decorative-finishes",
    title: "Decorative Finishes",
    description: "Venetian plaster, gold leaf, decorative painting, architectural finishes, and textiles.",
    image: "finishes",
    points: ["Venetian plaster", "Gold leaf", "Decorative painting", "Architectural finishes"],
  },
];
