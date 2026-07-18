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
  phone: "843-600-0303",
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

export interface ArticleImage {
  src: string;
  alt: string;
  caption: string;
  /** Render this image immediately after body[afterParagraph]. */
  afterParagraph: number;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
  images?: ArticleImage[];
  dateline?: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "fine-and-dandy-mural-king-street-charleston",
    title: "Fine & Dandy Mural Brings Historic King Street Property to Life in Charleston's Regency Revival",
    category: "Featured Projects",
    dateline: "CHARLESTON, S.C.",
    excerpt:
      "A 15-foot custom Fine & Dandy mural, hand-installed by father-son craftsmen George and Constantine Kazameas, anchors a King Street restoration in a residence once owned by Darius Rucker.",
    images: [
      {
        src: "https://galaxy-prod.tlcdn.com/gen/user_33t8y88T1htQ2Ohh0A0DVFfvIXu/1ccae5e9-4fd5-4e8c-96dd-90c1907528c8.jpg",
        alt: "Finished room with a 15-foot Fine & Dandy mural, Farrow & Ball paneling, and a crystal chandelier on King Street in Charleston",
        caption:
          "The finished room pairs the 15-foot Fine & Dandy mural — reminiscent of ships anchored in Charleston Harbor at dusk — with Farrow & Ball paneling, a crystal chandelier and antique leather seating.",
        afterParagraph: 0,
      },
      {
        src: "https://galaxy-prod.tlcdn.com/gen/user_33t8y88T1htQ2Ohh0A0DVFfvIXu/6e43af48-2ca8-4bce-846a-e8e02669ff75.jpg",
        alt: "Constantine Kazameas finishing a mural seam near an exposed brick wall",
        caption:
          "Constantine Kazameas smooths a final seam where the mural meets an exposed brick wall, working carefully to keep the ship rigging in the scene continuous.",
        afterParagraph: 3,
      },
      {
        src: "https://galaxy-prod.tlcdn.com/gen/user_33t8y88T1htQ2Ohh0A0DVFfvIXu/28708853-d7a6-403a-93f6-132485e4879d.jpg",
        alt: "George Kazameas smoothing a mural panel near the ceiling line",
        caption:
          "George Kazameas smooths a mural panel into place along the ceiling line, checking the seam against the room's crown molding.",
        afterParagraph: 4,
      },
      {
        src: "https://galaxy-prod.tlcdn.com/gen/user_33t8y88T1htQ2Ohh0A0DVFfvIXu/476a6d29-62cf-42e3-bf93-2b78f2aab9c4.jpg",
        alt: "Constantine Kazameas on a scaffold and George Kazameas below positioning the mural",
        caption:
          "Constantine Kazameas, on the scaffold, and George Kazameas, holding the ladder below, position the room's mural to maximize focal integration.",
        afterParagraph: 8,
      },
      {
        src: "https://galaxy-prod.tlcdn.com/gen/user_33t8y88T1htQ2Ohh0A0DVFfvIXu/edb75127-fbf6-46fd-a436-acb92f5340de.jpg",
        alt: "Tools and materials staged mid-installation beneath a crystal chandelier",
        caption:
          "Tools and materials staged mid-installation, with the mural already hung and the chandelier not yet fitted with its shade and finials.",
        afterParagraph: 9,
      },
    ],
    body: [
      "Along one of the most storied blocks of King Street, in a residence once owned by Grammy-winning musician Darius Rucker, a newly installed custom mural is drawing attention not just for its scale, but for what it represents: a return to the hand-craft traditions that built Charleston's historic district in the first place.",
      "Master installers George Kazameas and his son, Constantine Kazameas, oversaw the large-scale, custom-printed canvas installation — a moody maritime scene reminiscent of ships riding at anchor in Charleston Harbor, rendered across a 15-foot custom mural from Fine & Dandy, the decorative arts house known for hand-painted, scenic wallcoverings, created specifically for the space.",
      "The finished room pairs the mural with deep navy wainscoting painted in a Farrow & Ball hue, sourced locally through Michael Mitchell, the King Street interior design showroom, alongside an ornate plaster ceiling medallion and a multi-tier crystal chandelier — a combination the Kazameases describe as classic Charleston Regency: dramatic scale, rich color and old-world detail balanced against clean architectural lines.",
      "\"You don't get a room like this by rushing it,\" George Kazameas said. \"I've been hanging paper for over 40 years, and the jobs that last are the ones where you respect the material and respect the wall. This mural had to feel like it had always been there.\"",
      "For Constantine Kazameas, who trained under his father, the King Street project was as much about craft continuity as it was about the finished wall. \"My father taught me that a mural isn't wallpaper — it's a single image that has to survive being cut into panels and put back together seamlessly,\" Constantine Kazameas said. \"On a piece this size, at 15 feet, there's no room for a seam to catch your eye. You either did it right, or everyone who walks into that room will see exactly where you didn't.\"",
      "George Kazameas, who has spent more than four decades installing traditional wallcoverings in historic and luxury interiors, said the appeal of working in a Regency-influenced room like this one is the license it gives an installer to think in terms of full walls rather than isolated strips. \"Forty years ago, when I started in this trade, a mural job like this was rare — most of the work was pattern-matching repeats,\" he said. \"Now the demand is for a single, unrepeated scene that wraps a whole room. It's a return to how the great historic houses actually did it before repeat-pattern wallpaper became the standard.\"",
      "The property sits at 377 King Street, in a stretch of Charleston's King Street corridor whose building stock dates largely to two major eras of development, the late 1800s and the 1940s, according to a historic building survey conducted for the South Carolina State Historic Preservation Office. King Street itself traces its name to King Charles II and has functioned as Charleston's principal commercial spine for more than two centuries, evolving through cycles of decline and reinvestment — most notably after the street was converted from one-way to two-way traffic in 1994, a change credited with accelerating the corridor's modern revitalization.",
      "Charleston County property records show Rucker purchased the unit in November 2016 and sold it in March 2021, part of the address's broader chain of ownership on a block increasingly defined by exactly this kind of high-end residential restoration.",
      "Designers describe the Charleston Regency aesthetic — deep jewel-toned walls, formal symmetry, gilded accents and dramatic lighting set against restrained architectural millwork — as a style that lives or dies on the quality of its wallcovering installation and the paint it's set against. The room's Farrow & Ball palette, selected through Michael Mitchell's King Street showroom, was chosen specifically to let the mural's tonal range — deep grays, dull gold lamplight, blackened harbor water — carry the room without competing with it. A mural rendered at this scale requires more than adhesive and a steady hand: substrate assessment, humidity control appropriate to a peninsula city prone to high ambient moisture, and a laser-measured layout to make sure the image's horizon line and focal points land exactly where the room's sightlines demand.",
      "\"In a city like Charleston, you're fighting humidity every single day of the install,\" Constantine Kazameas said. \"The wall is never really finished moving. You have to build in for that, or the mural you're proud of on day one won't be the mural still on that wall in fifteen years.\"",
      "For George Kazameas, the project is one more entry in a career built on the belief that a wallcovering installation is judged in decades, not days. \"Forty-some years in, the compliment I still want to hear isn't 'that looks nice,'\" he said. \"It's somebody walking in ten years from now and asking who installed that wall — because they assume it's always been part of the house.\"",
    ],
  },
  {
    slug: "chit-chat-diner-fine-dandy-wallcovering-installation",
    title: "Behind the Booths: A Landmark Diner's New Feature Wall Reflects a Craftsman's Eye for Detail",
    category: "Featured Projects",
    dateline: "WEST ORANGE, N.J.",
    excerpt:
      "Master installer George Kazameas brought a museum-grade approach — and a MacKenzie-Childs wallcovering — to one of New Jersey's most theatrical dining rooms.",
    images: [
      {
        src: "https://www.chitchatdiner.com/images/galleries/west-orange/big7.jpg",
        alt: "Interior booths at the Chit Chat Diner in West Orange, New Jersey",
        caption: "Inside the Chit Chat Diner's dining room in West Orange, N.J.",
        afterParagraph: 0,
      },
      {
        src: "https://www.chitchatdiner.com/images/galleries/west-orange/big8.jpg",
        alt: "Ornate decor detail inside the Chit Chat Diner",
        caption:
          "Ornate detailing throughout the Chit Chat Diner reflects its reputation as one of New Jersey's most theatrical dining rooms.",
        afterParagraph: 3,
      },
      {
        src: "https://www.chitchatdiner.com/images/galleries/west-orange/big12.jpg",
        alt: "Black-and-gold chandeliers at the Chit Chat Diner",
        caption: "Black-and-gold chandeliers are part of the diner's signature look.",
        afterParagraph: 6,
      },
      {
        src: "https://www.chitchatdiner.com/images/galleries/west-orange/big6.jpg",
        alt: "Dining room at the Chit Chat Diner",
        caption: "The dining room at Chit Chat Diner, West Orange.",
        afterParagraph: 7,
      },
    ],
    body: [
      "At the Chit Chat Diner, a 24-hour landmark known for its whimsical, castle-like architecture and sweeping views of the Manhattan skyline, the latest addition isn't on the menu — it's on the wall.",
      "Master installer George Kazameas spent the better part of two weeks inside the diner's dining room, hand-applying a large-scale scenic wallcovering mural across one of its signature feature walls. The project, completed for the diner's ownership, adds a new layer of old-world craftsmanship to a restaurant already known for its theatrical, larger-than-life interior.",
      "\"This is a room that doesn't do anything halfway,\" Kazameas said. \"The architecture already tells you a story before you sit down. The mural just had to earn its place in that story.\"",
      "Central to the room's identity is MacKenzie-Childs, the Aurora, New York-based decorative arts house whose hand-painted, theatrically maximalist aesthetic has become one of the most recognizable design languages in American interiors. Founded in 1983 by artists Victoria and Richard MacKenzie-Childs, the brand grew out of the couple's backgrounds in theater and ceramics — a lineage that shows in wallcoverings like its signature Courtly Check, a bold, off-kilter checkerboard motif that reads as playful up close and architectural from across a room.",
      "\"MacKenzie-Childs doesn't do anything quietly, and neither does this diner,\" Kazameas said. \"That's exactly why it works here. You're not trying to calm the room down — you're trying to give it a pattern that can hold its own against chandeliers, checkerboard floors and a dining room that already looks like a stage set.\"",
      "Unlike a subdued neutral pattern meant to recede into the background, Courtly Check and its companion motifs are designed to be a focal point — hand-finished, richly colored, and unapologetically decorative. That quality, designers say, is what separates a MacKenzie-Childs installation from a conventional commercial wallcovering: it doesn't soften a maximalist room, it completes it.",
      "\"A lot of clients come to us wanting a wall that calms a space down,\" Kazameas said. \"This wasn't that kind of job. This was a wall that had to raise its hand and say, 'I belong in this room, too.'\"",
      "The diner, which draws steady crowds for its all-day menu and its reputation as an only-in-New-Jersey landmark, has long been recognized for décor as memorable as its food. Its ownership has cultivated that identity since the current building opened, embracing an eclectic, maximalist style that regulars have compared to dinner theater as much as a diner.",
      "Kazameas, whose installation work spans historic homes, luxury residences and hospitality spaces across the country, approached the commission the same way he would a museum-grade restoration: with a full site assessment, moisture and substrate analysis, and a laser-measured layout before a single panel went up. \"A diner wall takes a different kind of abuse than a dining room in a private home,\" he said. \"Steam, grease, constant traffic — you have to build the installation to survive all of it, not just look good on installation day.\"",
      "The finished installation now anchors the dining room alongside the diner's chandeliers, patterned ceiling work and colorful booths. Kazameas said the goal was never to compete with the space's existing character, but to give it one more reason to stop guests mid-conversation. \"You want people to notice it, then forget they noticed it — because they're back in their conversation, in their coffee, in their booth,\" he said. \"That's the test of whether an installation belongs in a room like this.\"",
      "The project is among a growing number of commercial and hospitality commissions Kazameas has taken on in recent months, reflecting a broader trend of restaurants and diners investing in statement interiors as a point of differentiation. \"Nobody's driving across three towns for a diner without a story,\" Kazameas said. \"The wall is part of how you tell it.\"",
    ],
  },
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
