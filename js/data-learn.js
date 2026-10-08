/* ===== Concept map + guided Learn Mode deck ===== */

/* concept id -> display name + topic it belongs to */
const CONCEPTS = {
  "purpose":          { name: "For-profit vs non-profit", topic: "types-of-business" },
  "profit-math":      { name: "Revenue, expenses & profit", topic: "types-of-business" },
  "profit-uses":      { name: "What businesses do with profit", topic: "types-of-business" },
  "service-area":     { name: "Service area (local→global)", topic: "types-of-business" },
  "size":             { name: "Business size", topic: "types-of-business" },
  "goods-services":   { name: "Goods vs services", topic: "types-of-business" },
  "needs-wants":      { name: "Needs vs wants", topic: "wants-needs-maslow" },
  "maslow-factors":   { name: "What shapes needs & wants", topic: "wants-needs-maslow" },
  "maslow-low":       { name: "Maslow: physiological & safety", topic: "wants-needs-maslow" },
  "maslow-high":      { name: "Maslow: belonging, ego, self-actualization", topic: "wants-needs-maslow" },
  "maslow-ads":       { name: "Products vs advertising levels", topic: "wants-needs-maslow" },
  "obsolete":         { name: "Obsolete products", topic: "wants-needs-maslow" },
  "trends-fads":      { name: "Trends vs fads", topic: "wants-needs-maslow" },
  "lifestyle-trends": { name: "Lifestyle trends", topic: "wants-needs-maslow" },
  "five-forms":       { name: "The 5 forms of ownership", topic: "forms-of-ownership" },
  "sole-prop":        { name: "Sole proprietorship", topic: "forms-of-ownership" },
  "partnership":      { name: "Partnerships", topic: "forms-of-ownership" },
  "corp":             { name: "Corporations & liability", topic: "forms-of-ownership" },
  "corp-vocab":       { name: "Shares, shareholders, dividends & the board", topic: "forms-of-ownership" },
  "corp-types":       { name: "Types of corporations", topic: "forms-of-ownership" },
  "coop":             { name: "Co-operatives", topic: "forms-of-ownership" },
  "franchise":        { name: "Franchises", topic: "forms-of-ownership" },
  "ethics-vocab":     { name: "Ethics, values & morals", topic: "ethics-csr" },
  "fairtrade":        { name: "Fair trade & codes of ethics", topic: "ethics-csr" },
  "fraud":            { name: "Fraud & whistle-blowing", topic: "ethics-csr" },
  "accounting":       { name: "Accounting scandals & auditors", topic: "ethics-csr" },
  "insider":          { name: "Insider trading", topic: "ethics-csr" },
  "csr-def":          { name: "What CSR is", topic: "ethics-csr" },
  "csr-principles":   { name: "The 5 CSR principles", topic: "ethics-csr" },
  "csr-extras":       { name: "Duty to accommodate, glass ceiling & B Corps", topic: "ethics-csr" },
  "scarcity":         { name: "Economics & scarcity", topic: "intro-economics" },
  "econ-questions":   { name: "The 3 economic questions", topic: "intro-economics" },
  "command":          { name: "Command economy", topic: "intro-economics" },
  "market":           { name: "Market economy", topic: "intro-economics" },
  "mixed":            { name: "Mixed economy", topic: "intro-economics" },
  "opp-cost":         { name: "Opportunity cost", topic: "intro-economics" },
  "resources":        { name: "Economic resources", topic: "intro-economics" },
  "interdep":         { name: "Specialization & interdependence", topic: "intro-economics" },
  "demand":           { name: "Demand & the law of demand", topic: "supply-demand" },
  "supply":           { name: "Supply & the law of supply", topic: "supply-demand" },
  "equilibrium":      { name: "Equilibrium", topic: "supply-demand" },
  "surplus-shortage": { name: "Surplus & shortage", topic: "supply-demand" }
};

/* which concept each existing question tests (aligned to question order) */
const CONCEPT_MAP = {
  "q-types":    ["profit-math","profit-math","profit-math","purpose","purpose","service-area","size","size","goods-services","profit-uses"],
  "q-maslow":   ["needs-wants","needs-wants","maslow-low","maslow-high","maslow-low","maslow-high","maslow-ads","trends-fads","trends-fads","obsolete","obsolete"],
  "q-ownership":["sole-prop","sole-prop","sole-prop","partnership","partnership","partnership","partnership","corp","corp-vocab","corp-vocab","corp-types","corp-types","coop","franchise","franchise"],
  "q-ethics":   ["ethics-vocab","ethics-vocab","fairtrade","fraud","accounting","accounting","insider","fraud","csr-principles","csr-principles","csr-extras","csr-extras"],
  "q-econ":     ["scarcity","scarcity","econ-questions","command","market","mixed","opp-cost","resources","resources","resources","interdep","interdep"],
  "q-sd":       ["demand","demand","supply","equilibrium","surplus-shortage","surplus-shortage","surplus-shortage","supply"],
  "mock-a": {
    mc:   ["profit-math","purpose","service-area","size","maslow-low","maslow-high","trends-fads","partnership","corp","corp-vocab","corp-types","insider"],
    match:["profit-math","profit-math","sole-prop","corp-vocab","equilibrium","scarcity","fraud","coop","franchise"]
  },
  "mock-b": {
    mc:   ["profit-math","goods-services","sole-prop","partnership","corp-vocab","corp-types","franchise","coop","opp-cost","mixed","surplus-shortage","demand"],
    match:["profit-math","purpose","sole-prop","corp","corp","opp-cost","demand","supply","trends-fads"]
  }
};

/* ===== The guided walkthrough — every concept, in order, with a check after each ===== */
const LEARN = [
{ id: "types-of-business", title: "Types of Business", icon: "🏪", chunks: [
  { t: "Why we classify businesses — and the two purposes",
    concept: "purpose",
    html: `<p>There are many ways to classify a business — by <b>purpose</b>, <b>service area</b>, <b>size</b>, and <b>what they sell</b>. Start with purpose:</p>
    <div class="defgrid"><div class="term">For-profit</div><div class="def">Goal is to <b>make a profit</b> by supplying goods or services to meet consumer demand.</div>
    <div class="term">Non-profit</div><div class="def">Serves a <b>social, charitable, or community purpose</b>. It CAN earn revenue, but any profit must be <b>reinvested into the mission</b> — never paid to owners. <i>Examples: charities, Amnesty International.</i></div></div>`,
    q: { q: "A charity earns $5,000 more than it spent at a fundraiser. What happens to that money?", choices: ["It is paid to the director as a dividend", "It must be reinvested into the organization's mission", "It is given to volunteers", "It is taxed as corporate income"], a: 1, explain: "Non-profits can earn revenue, but profits go back into the mission — never distributed as personal gain." } },
  { t: "The four money words",
    concept: "profit-math",
    html: `<div class="defgrid"><div class="term">Revenue</div><div class="def">Money made by <b>selling</b> goods or services</div>
    <div class="term">Expenses</div><div class="def">Payments to <b>run</b> the business + assets used up operating it (e.g., renting equipment for the day)</div>
    <div class="term">Cost</div><div class="def">Money to <b>produce</b> the goods/services (e.g., buying materials)</div>
    <div class="term">Profit</div><div class="def">What's <b>left after</b> all costs and expenses are paid</div></div>
    <div class="formula">Profit (or Loss) = Revenue − Expenses − Costs</div>`,
    q: { q: "You earn $200 selling backpacks. Materials cost $100, renting the heat press costs $40. Result?", choices: ["$240 profit", "$160 profit", "$60 profit", "$60 loss"], a: 2, explain: "Profit = 200 − 100 − 40 = $60 profit. This exact example is from class." } },
  { t: "Profit AND loss — both directions",
    concept: "profit-math",
    html: `<p>If Revenue is <b>smaller</b> than Expenses + Costs, the answer is negative — that's a <b>loss</b>, and you write it as "a loss of $X".</p>
    <div class="callout">✍️ On the test (5 marks, Thinking): <b>write the formula first</b>, then substitute, then answer with the word "profit" or "loss".</div>`,
    q: { q: "Revenue is $80. Costs are $55 and expenses are $40. What happened?", choices: ["$15 profit", "$115 profit", "A loss of $15", "A loss of $95"], a: 2, explain: "80 − 40 − 55 = −15 → a loss of $15. Watch the sign!" } },
  { t: "What can a business do with a profit?",
    concept: "profit-uses",
    html: `<p>Three uses from class:</p><ul><li><b>Reinvest</b> it for expansion</li><li>Provide <b>improved goods and services</b></li><li>Give the owner(s) funds for <b>personal needs or wants</b></li></ul>`,
    q: { q: "Which is NOT something the lesson says businesses can do with profit?", choices: ["Reinvest it for expansion", "Improve goods and services", "Give owners funds for personal wants", "Pay it all to the government as charity tax"], a: 3, explain: "The three uses: reinvest, improve, or personal funds for owners." } },
  { t: "Service area: local → global",
    concept: "service-area",
    html: `<div class="defgrid"><div class="term">Local</div><div class="def">A town or neighbourhood</div><div class="term">Regional</div><div class="def">A city, group of municipalities, or larger part of a country</div><div class="term">National</div><div class="def">Within <b>one</b> country</div><div class="term">Global</div><div class="def">Operates in <b>multiple countries</b></div></div>`,
    q: { q: "A brand has stores in Canada, the US, and Japan. By service area it is…", choices: ["Local", "Regional", "National", "Global"], a: 3, explain: "Multiple countries = global." } },
  { t: "Business size — and the Canada facts",
    concept: "size",
    html: `<table class="data"><tr><th>Size</th><th>Employees</th></tr><tr><td><b>Small</b></td><td>1–99</td></tr><tr><td><b>Medium</b></td><td>100–500</td></tr><tr><td><b>Large</b></td><td>More than 500</td></tr></table>
    <div class="callout">🇨🇦 Memorize: over <b>1 million</b> small-medium businesses in Canada, providing <b>60% of the workforce</b> with jobs.</div>`,
    q: { q: "A business has 85 employees. It is…", choices: ["Small", "Medium", "Large", "Regional"], a: 0, explain: "Small = 1–99 employees." } },
  { t: "Goods vs services",
    concept: "goods-services",
    html: `<div class="defgrid"><div class="term">Good</div><div class="def">An item that can be <b>seen or touched</b> — backpacks, phones, food</div><div class="term">Service</div><div class="def"><b>Assistance</b> provided — haircuts, plumbing, teaching</div></div>`,
    q: { q: "Which one is a SERVICE?", choices: ["A water bottle", "A dentist cleaning your teeth", "A backpack", "A bag of chips"], a: 1, explain: "A service is assistance provided — you can't touch a dental cleaning." } }
]},
{ id: "wants-needs-maslow", title: "Wants, Needs & Maslow", icon: "🧠", chunks: [
  { t: "Why businesses exist: needs vs wants",
    concept: "needs-wants",
    html: `<p>Businesses provide goods and services to <b>satisfy needs and wants</b> — that's how they know what to make.</p>
    <div class="defgrid"><div class="term">Need</div><div class="def"><b>Necessary</b> to live, stay healthy, and work: groceries, clean water, rent, medication, basic clothing</div><div class="term">Want</div><div class="def">Not necessary for survival — adds <b>comfort and pleasure</b>: restaurants, designer clothes, concerts</div></div>`,
    q: { q: "Which is a NEED?", choices: ["Concert tickets", "Basic groceries", "Designer jeans", "A movie subscription"], a: 1, explain: "Needs are required to live, stay healthy and work." } },
  { t: "What shapes consumer needs & wants",
    concept: "maslow-factors",
    html: `<ul><li>Personality and personal interests</li><li>Individual abilities</li><li>Priorities and values</li><li><b>Stage of life</b></li><li>Family responsibilities</li><li><b>Trends and fads</b> (driven by technology, media, businesses, the environment)</li></ul>`,
    q: { q: "A new parent suddenly needs a stroller and baby food. Which factor changed?", choices: ["Their personality", "Their stage of life", "A fad", "Their abilities"], a: 1, explain: "Stage of life — along with family responsibilities — changes what consumers need." } },
  { t: "Maslow's ladder, bottom rungs: physiological & safety",
    concept: "maslow-low",
    html: `<p><b>Abraham Maslow</b>, a social psychologist, grouped human needs into <b>five levels in hierarchical order</b>.</p>
    <div class="defgrid"><div class="term">1. Physiological</div><div class="def"><b>Water, sleep, food</b> — the base of the pyramid</div><div class="term">2. Safety</div><div class="def"><b>Shelter, security, protection</b> (think: home security system)</div></div>`,
    q: { q: "Food, water and sleep belong to which Maslow level?", choices: ["Safety", "Physiological", "Belongingness", "Ego"], a: 1, explain: "Physiological needs are the base: water, sleep, food." } },
  { t: "Maslow's top rungs: belonging, ego, self-actualization",
    concept: "maslow-high",
    html: `<div class="defgrid"><div class="term">3. Belongingness</div><div class="def"><b>Love, friendship, acceptance</b></div><div class="term">4. Ego</div><div class="def"><b>Self-esteem, achievement, uniqueness, independence</b></div><div class="term">5. Self-actualization</div><div class="def">Striving to <b>realize your full potential</b> — the top</div></div>
    <p class="subtitle">Full order: physiological → safety → belongingness → ego → self-actualization.</p>`,
    q: { q: "Which need comes DIRECTLY above safety?", choices: ["Physiological", "Belongingness", "Ego", "Self-actualization"], a: 1, explain: "Order: physiological, safety, belongingness, ego, self-actualization." } },
  { t: "The product vs. the advertisement (test favourite!)",
    concept: "maslow-ads",
    html: `<p>A product might meet a need on <b>one level</b>, but the <b>advertisement</b> often appeals to a <b>different level</b> to motivate you.</p>
    <div class="example"><div class="ex-title">From class</div><p>A <b>security system</b> = safety need — but the ad shows a family hugging: <b>love of family</b> (belongingness). A <b>burger</b> = food (physiological) — but ads show friends sharing it (belonging).</p></div>`,
    q: { q: "A burger ad shows friends laughing together over fries. The burger is physiological, but the ad appeals to…", choices: ["Safety needs", "Ego needs", "Belongingness needs", "Self-actualization"], a: 2, explain: "Friends, love and belonging = belongingness level. Ads often target a different level than the product's real purpose." } },
  { t: "Obsolete products",
    concept: "obsolete",
    html: `<p>A product is <b>obsolete</b> when it's <b>no longer a want or need</b> — consumers stop buying, producers stop making. <i>Tape players, VCRs.</i></p>
    <div class="example"><div class="ex-title">Case: Wheaties Dunk-A-Balls</div><p>The cereal failed because <b>parents</b> (the buyers!) disliked that it encouraged kids to play with their food — a <b>target-market</b> misread.</p></div>`,
    q: { q: "VCRs and tape players disappearing is an example of products becoming…", choices: ["A fad", "Obsolete", "A surplus", "A trend"], a: 1, explain: "Obsolete = no longer a want or need; people stopped buying so production stopped." } },
  { t: "Trends vs fads — know the difference cold",
    concept: "trends-fads",
    html: `<table class="data"><tr><th></th><th>Trend</th><th>Fad</th></tr><tr><td><b>Lasts</b></td><td>A LONG time (years)</td><td>Short-term — likely <b>under a year</b></td></tr><tr><td><b>Examples</b></td><td>Online shopping, AI in business</td><td>Fidget spinners, squishies</td></tr></table>
    <div class="example"><div class="ex-title">The 1970s trend</div><p>More women entering the workforce → lasting demand for <b>convenience food, extended shopping/banking hours, household appliances, hotel hair dryers and ironing boards</b>.</p></div>`,
    q: { q: "Fidget spinners were everywhere for a few months, then gone. They were a…", choices: ["Trend", "Fad", "Need", "Shortage"], a: 1, explain: "Under a year = fad. Trends (online shopping) last years." } },
  { t: "Lifestyle trends right now",
    concept: "lifestyle-trends",
    html: `<ul><li>Eco-friendly — <b>reusable</b> anything</li><li>Eating <b>local / organic</b></li><li><b>Chemical-free</b> products (BPA-free)</li></ul><p>Trends like these change what whole groups of consumers buy — for years.</p>`,
    q: { q: "Which of these is a current LIFESTYLE trend from the lesson?", choices: ["Buying BPA-free, chemical-free products", "Using a tape player", "Buying fidget spinners", "Renting VHS movies"], a: 0, explain: "Eco-friendly/reusable, local/organic, and chemical-free are the lesson's lifestyle trends." } }
]},
{ id: "forms-of-ownership", title: "Forms of Business Ownership", icon: "🏢", chunks: [
  { t: "The map: 5 forms of ownership",
    concept: "five-forms",
    html: `<div class="badge-row"><span class="pill">1. Sole Proprietorship</span><span class="pill">2. Partnership</span><span class="pill">3. Corporation</span><span class="pill">4. Co-operative</span><span class="pill">5. Franchise</span></div>
    <p>Know each one's <b>owner</b>, <b>liability</b>, and <b>pros/cons</b> — matching questions love these.</p>`,
    q: { q: "Which list has all 5 forms?", choices: ["Sole prop, partnership, corporation, co-operative, franchise", "Local, regional, national, global", "Small, medium, large", "Private, public, crown, municipal"], a: 0, explain: "The 5 ownership forms: sole proprietorship, partnership, corporation, co-operative, franchise." } },
  { t: "Sole proprietorship — one owner, full risk",
    concept: "sole-prop",
    html: `<p>Owned by <b>1 person</b> — the <b>proprietor</b>. Funds come from <b>savings, friends, family, or a bank loan</b>.</p>
    <ul><li>Prosper → owner keeps <b>ALL profits</li><li>Does poorly → owner responsible for <b>ALL losses</b> = <b>unlimited liability</b></li></ul>
    <div class="callout red">⚠️ <b>Unlimited liability</b> = owner and business are the <b>same legal entity</b>. <i>Examples: housekeeping, plumber, electrician.</i></div>`,
    q: { q: "'Unlimited liability' means…", choices: ["The business can borrow unlimited money", "The owner is personally responsible for all business losses", "The company has unlimited shareholders", "Liability is shared between partners"], a: 1, explain: "Owner and business are one legal entity — personal assets can cover business debts." } },
  { t: "Partnerships: general vs limited",
    concept: "partnership",
    html: `<p><b>Two or more people</b> share costs and responsibilities; terms live in the <b>partnership agreement</b>.</p>
    <table class="data"><tr><th></th><th>General</th><th>Limited</th></tr><tr><td><b>Who runs it</b></td><td>All partners</td><td>The <b>general partner</b></td></tr><tr><td><b>Liability</b></td><td>All share <b>unlimited</b> liability</td><td>Limited partners only risk <b>funds invested</b> = <b>limited liability</b></td></tr></table>`,
    q: { q: "In a LIMITED partnership, limited partners…", choices: ["Run the business daily", "Are only responsible for the funds they invested", "Have unlimited liability", "Must be family"], a: 1, explain: "General partner runs it (unlimited); limited partners only risk what they invested." } },
  { t: "Partnership pros & cons + the agreement",
    concept: "partnership",
    html: `<table class="data"><tr><th>Pros</th><th>Cons</th></tr><tr><td>✔ Easy to start<br>✔ Shared financial burden<br>✔ Combined skills &amp; expertise<br>✔ Profits taxed as <b>personal income</b></td><td>✘ Profit sharing<br>✘ Unlimited liability (general)<br>✘ Personal conflicts<br>✘ Hard if a partner leaves — <b>unless there's an agreement</b></td></tr></table>
    <p><b>Negotiate before signing:</b> responsibilities, decision-making, ownership %, scheduling, investment, profit splits, goals, values, exit scenarios.</p>`,
    q: { q: "Which is an ADVANTAGE of a partnership?", choices: ["Profit sharing", "Combined skills and expertise", "Unlimited liability", "Partners always agree"], a: 1, explain: "Combined skills is a pro. Profit sharing and unlimited liability are cons." } },
  { t: "Corporations: a separate legal person",
    concept: "corp",
    html: `<p>A corporation has <b>legal status distinct from the people who own/work for it</b> — the <b>owner is separate from the business</b>. Can be tiny (one person) or multinational.</p>
    <div class="example"><div class="ex-title">The café case</div><p>Sick from a <b>sole proprietor's</b> food → you sue the <b>owner</b> (same entity). Sick from a <b>corporation's</b> food → the owner is <b>protected</b>; business and owner are separate entities.</p></div>`,
    q: { q: "Why doesn't a corporation's owner get personally sued?", choices: ["Corporations never get sued", "The owner and business are separate legal entities", "Owners buy special insurance", "The board takes the blame"], a: 1, explain: "Distinct legal status — the owner is protected (that's the big advantage of incorporating)." } },
  { t: "Corporate vocabulary: shares → dividends → board",
    concept: "corp-vocab",
    html: `<div class="defgrid"><div class="term">Stocks / shares</div><div class="def">Small portions of corporate ownership owned publicly</div><div class="term">Shareholders</div><div class="def">Hold shares = <b>owners</b> of the business, with <b>limited liability</b></div><div class="term">Dividends</div><div class="def"><b>Regular payments of profit</b> to investors who own the stock</div><div class="term">Board of directors</div><div class="def"><b>Elected by shareholders</b>; sets strategy, hires/fires the CEO, keeps the company legal &amp; ethical</div></div>`,
    q: { q: "Regular payments of profit to investors who own a company's stock are…", choices: ["Wages", "Dividends", "Revenue", "Grants"], a: 1, explain: "Dividends go to shareholders — who are owners with limited liability." } },
  { t: "4 types of corporations",
    concept: "corp-types",
    html: `<table class="data"><tr><th>Type</th><th>Owned by</th><th>On stock market?</th><th>Examples</th></tr><tr><td><b>Private</b></td><td>Small group</td><td>No</td><td>IKEA, Lego, family business</td></tr><tr><td><b>Public</b></td><td>Public shareholders</td><td><b>Yes</b> — financials disclosed</td><td>Apple, Microsoft, Starbucks, Tesla</td></tr><tr><td><b>Crown</b></td><td><b>Government</b></td><td>No</td><td><b>Canada Post, CBC</b></td></tr><tr><td><b>Municipal</b></td><td>Local government</td><td>No</td><td><b>Toronto Hydro, TTC, Viva</b></td></tr></table>`,
    q: { q: "Canada Post and CBC are examples of…", choices: ["Public corporations", "Crown corporations", "Municipal corporations", "Co-operatives"], a: 1, explain: "Crown corporations: government-owned, provide public service, keep financial independence." } },
  { t: "Co-operatives: service, not profit",
    concept: "coop",
    html: `<p>Owned by the <b>workers or members who use it</b>. Motivated by <b>service, not profit</b>.</p>
    <ul><li><b>One member = one vote</b> — democratic</li><li>Profits and decision-making shared by members</li><li>Matters because: community-oriented, ethical practices (fair wages, sustainability), workplace democracy</li></ul>`,
    q: { q: "A co-operative makes decisions…", choices: ["By founder decree", "Democratically — one member, one vote", "By share count", "By government order"], a: 1, explain: "Co-ops are democratic: one member = one vote, focused on members' needs." } },
  { t: "Franchises: buying a proven system",
    concept: "franchise",
    html: `<div class="defgrid"><div class="term">Franchisor</div><div class="def">Owns the name, products, and system (the original Cocos)</div><div class="term">Franchisee</div><div class="def">Pays an <b>initial fee + % of sales</b> to open a location using the brand</div></div>
    <p>Most common = <b>business-format franchise</b>: logo, uniforms, menu, training, marketing — all set up for you.</p>
    <div class="callout">⚠️ <b>Franchisee challenges:</b> limited freedom · strict rules · competition with other franchises · brand-reputation risk · high investment fees.</div>`,
    q: { q: "What does a franchisee pay the franchisor?", choices: ["Nothing — it's free", "An initial fee plus a % of sales ongoing", "Only yearly taxes", "A share of the company"], a: 1, explain: "Initial fee + % of sales, in exchange for brand, products, marketing, and a proven system." } }
]},
{ id: "ethics-csr", title: "Business Ethics & CSR", icon: "🌍", chunks: [
  { t: "Ethics, values, morals",
    concept: "ethics-vocab",
    html: `<div class="defgrid"><div class="term">Ethics</div><div class="def">Rules that help us tell <b>right from wrong</b></div><div class="term">Values</div><div class="def">What we think is <b>important</b> (respect)</div><div class="term">Morals</div><div class="def">Rules for deciding <b>good or bad</b> (stealing is bad)</div></div>`,
    q: { q: "'What we think is important' describes our ___, and rules for good/bad are our ___.", choices: ["morals; values", "values; morals", "ethics; profits", "duties; rights"], a: 1, explain: "Values = important things. Morals = good/bad rules." } },
  { t: "Fair trade, codes of ethics, dilemmas",
    concept: "fairtrade",
    html: `<div class="defgrid"><div class="term">Fair trade</div><div class="def">Trade that respects <b>basic labour rights</b> of workers in other countries — fair to producers while businesses still profit</div><div class="term">Code of ethics</div><div class="def">Document on <b>how employees should respond</b> in situations (laws can be legal yet still unethical)</div><div class="term">Ethical dilemma</div><div class="def">Two difficult choices, <b>neither clearly right</b>. Ask: who's helped? hurt? will it survive time?</div></div>`,
    q: { q: "Fair trade means…", choices: ["Half-price selling", "Respecting basic labour rights of workers in other countries", "Trading only in Canada", "Bartering without money"], a: 1, explain: "Fair treatment for producers and workers abroad, while businesses still make a profit." } },
  { t: "Whistle-blowing & the 6 frauds",
    concept: "fraud",
    html: `<div class="defgrid"><div class="term">Whistle-blowing</div><div class="def">An <b>employee informs officials or the public</b> about an illegal/ethical violation (referee's whistle)</div><div class="term">Fraud</div><div class="def">A <b>crime of lying or pretending</b></div></div>
    <p><b>Six types:</b> bank (loans to fake businesses) · consumer (tricking buyers) · insurance (false claims) · mail (scams by post) · pyramid scheme (recruiting ever-more "investors") · telemarketer (pressure calls to bogus charities).</p>`,
    q: { q: "Tricking consumers into buying things that don't work as promised is…", choices: ["Bank fraud", "Consumer fraud", "Insurance fraud", "Mail fraud"], a: 1, explain: "Consumer fraud. Pyramid schemes recruit investors; bank fraud = loans to fake businesses." } },
  { t: "Cooking the books: accounting scandals",
    concept: "accounting",
    html: `<div class="defgrid"><div class="term">Accounting scandal</div><div class="def">Accountants/executives <b>alter records for personal benefit</b></div><div class="term">Embezzlement</div><div class="def">Creating <b>false accounts</b> and redirecting money into them</div><div class="term">Auditors</div><div class="def"><b>External accountants</b> checking the validity of financial records</div></div>
    <p><b>Why alter info?</b> inflate profits · attract investors · get loans · keep their job · hide losses · avoid taxes.</p>`,
    q: { q: "Creating false accounts and redirecting money into them for personal gain is…", choices: ["Insider trading", "Embezzlement", "A pyramid scheme", "Mail fraud"], a: 1, explain: "Embezzlement — a type of accounting fraud." } },
  { t: "Insider trading — know the punishments",
    concept: "insider",
    html: `<p>Buying or selling shares based on <b>confidential information</b>. <b>Illegal.</b></p>
    <div class="callout red">Punishment: fines up to <b>$1 million</b> · surrender all profits · up to <b>2 years</b> in prison · banned from future trading.</div>
    <div class="example"><div class="ex-title">From class</div><p>Secretly selling your pharma stock after learning (privately) that the drug trial failed = insider trading.</p></div>`,
    q: { q: "Selling your company's shares because you privately know bad news before the public does is…", choices: ["Smart investing — legal", "Insider trading — illegal", "Whistle-blowing", "Diversifying"], a: 1, explain: "Trading on confidential information = insider trading. Up to $1M fines and 2 years prison." } },
  { t: "What CSR actually is",
    concept: "csr-def",
    html: `<p>Businesses used to care about one thing: <b>money</b>. Today they balance three:</p>
    <div class="badge-row"><span class="pill green">Economic — make money, improve the economy</span><span class="pill">Social — benefit stakeholders</span><span class="pill green">Environmental — do no harm</span></div>
    <div class="formula" style="font-size:.95rem;text-align:left;font-weight:600">CSR = organizations have obligations to serve their OWN interests AND society's, considering the economic, environmental, and social impact of decisions.</div>`,
    q: { q: "CSR is the idea that organizations should consider which three impacts of their decisions?", choices: ["Economic, environmental, social", "Profit, profit, profit", "Legal, illegal, ethical", "Local, regional, global"], a: 0, explain: "Economic + environmental + social — that trio defines CSR." } },
  { t: "THE 5 CSR PRINCIPLES (memorize all five!)",
    concept: "csr-principles",
    html: `<table class="data"><tr><th>#</th><th>Principle</th></tr>
    <tr><td><b>1</b></td><td><b>Safe and healthy work environment</b> — training, equipment, wellness programs</td></tr>
    <tr><td><b>2</b></td><td><b>Fair labour policies</b> — no discrimination; follow pay &amp; hours laws</td></tr>
    <tr><td><b>3</b></td><td><b>Protecting the environment</b> — IKEA circular by 2030 + Buy Back; Dove recyclable packaging</td></tr>
    <tr><td><b>4</b></td><td><b>Truthful advertising</b> (avoid price discrimination) — Dove's no-airbrushing pledge</td></tr>
    <tr><td><b>5</b></td><td><b>Donating to charity</b> — Microsoft Philanthropies; Google matches $10k/employee</td></tr></table>`,
    q: { q: "Which is NOT one of the 5 CSR principles?", choices: ["Protecting the environment", "Truthful advertising", "Maximizing shareholder dividends", "Donating to charity"], a: 2, explain: "The five: safe workplace · fair labour · environment · truthful ads · charity. Dividend-maximizing isn't a CSR principle." } },
  { t: "Duty to accommodate, glass ceiling, B Corps",
    concept: "csr-extras",
    html: `<div class="defgrid"><div class="term">Duty to accommodate</div><div class="def">Employer's obligation to ensure <b>accessibility for all employees</b></div><div class="term">Glass ceiling</div><div class="def">Invisible barrier blocking <b>women and minorities</b> from top jobs</div><div class="term">Employee safety rights</div><div class="def"><b>Refuse unsafe work</b> · join health &amp; safety activities · <b>know the hazards</b></div><div class="term">B Corporation</div><div class="def">For-profit meeting high <b>verified social/environmental standards</b> — regulated by <b>B Lab</b>; balances profit and purpose</div></div>`,
    q: { q: "A for-profit business meeting verified social/environmental standards, regulated by B Lab, is a…", choices: ["Crown corporation", "B Corporation", "Franchise", "Co-operative"], a: 1, explain: "B Corp — profit AND purpose, verified by B Lab." } }
]},
{ id: "intro-economics", title: "Intro to Economics", icon: "📈", chunks: [
  { t: "Economics & scarcity",
    concept: "scarcity",
    html: `<div class="defgrid"><div class="term">Economics</div><div class="def">Study of <b>human decisions using limited resources to satisfy unlimited needs and wants</b></div><div class="term">Scarcity</div><div class="def"><b>Limited resources</b> → limited goods, but <b>unlimited wants</b> — forces choices</div></div>
    <p>Those choices shape consumer behaviour and how businesses operate.</p>`,
    q: { q: "'Limited resources can't meet unlimited wants' defines…", choices: ["Equilibrium", "Scarcity", "Surplus", "Interdependence"], a: 1, explain: "Scarcity — the reason every economic decision is a choice." } },
  { t: "The 3 questions every economy must answer",
    concept: "econ-questions",
    html: `<div class="formula" style="font-size:1rem;">1. WHAT to produce? &nbsp; 2. HOW to produce it? &nbsp; 3. For WHOM?</div>
    <p>How a country answers these = its <b>economic system</b> (selection, production, distribution, consumption).</p>`,
    q: { q: "The three key economic questions are…", choices: ["Why? When? Where?", "WHAT, HOW, and for WHOM to produce", "Buy? Sell? Trade?", "Who? What? When?"], a: 1, explain: "What / how / for whom — memorize the trio." } },
  { t: "Command economy",
    concept: "command",
    html: `<p>The <b>government owns and controls everything</b>: resources, production, prices.</p><ul><li>Limited consumer choice; goods standardized</li><li>Examples: <b>North Korea, Cuba</b></li></ul>`,
    q: { q: "In a command economy, prices are set by…", choices: ["Supply and demand", "The government", "Tradition", "The UN"], a: 1, explain: "Government decides what, how, for whom — and the price." } },
  { t: "Market economy",
    concept: "market",
    html: `<p><b>Individuals and businesses</b> decide based on <b>supply and demand</b>. Resources privately owned; distribution follows <b>purchasing power</b>.</p><ul><li>Examples: <b>USA, Taiwan, New Zealand</b></li></ul>`,
    q: { q: "In a market economy, prices come from…", choices: ["The government", "Supply and demand", "A committee", "Historical tradition"], a: 1, explain: "Markets set prices through supply and demand." } },
  { t: "Mixed economy — where Canada lives",
    concept: "mixed",
    html: `<p><b>Government + business share decisions</b>. Prices mostly market-driven, but government regulates some products and guarantees <b>essential services</b>.</p><ul><li>Examples: <b>Canada, UK, France</b> — most countries today</li></ul>`,
    q: { q: "Canada, the UK, and France are…", choices: ["Command economies", "Pure market economies", "Mixed economies", "Traditional economies"], a: 2, explain: "Mixed — market freedom plus government-provided essential services." } },
  { t: "Opportunity cost — the value of what you gave up",
    concept: "opp-cost",
    html: `<div class="formula" style="font-size:.98rem;">Opportunity cost = the value you could have received but passed up by choosing another option</div>
    <div class="example"><div class="ex-title">The $50 dilemma</div><p>Choose gaming accessories with $50 → the dinner, clothes, or concert you gave up = your opportunity cost.</p></div>`,
    q: { q: "Jordan has $30 and buys a pizza instead of going to a movie. The movie is his…", choices: ["Expense", "Revenue", "Opportunity cost", "Surplus"], a: 2, explain: "The value of the next-best option given up = opportunity cost." } },
  { t: "Economic resources: natural, human, capital",
    concept: "resources",
    html: `<table class="data"><tr><th>Type</th><th>Meaning</th><th>Examples</th></tr><tr><td><b>Natural</b></td><td>From earth, water, air</td><td>Soil, iron ore, gold, oil, trees, fish, oxygen</td></tr><tr><td><b>Human</b></td><td>People who work (labour)</td><td>Farmers, teachers, nurses, factory workers</td></tr><tr><td><b>Capital</b></td><td><b>Human-made</b> + money</td><td>Buildings, machinery, tools, vehicles — <b>and money</b></td></tr></table>
    <div class="callout">💡 Trap: <b>money is CAPITAL</b>. A nurse is HUMAN. Trees are NATURAL.</div>`,
    q: { q: "Which is a CAPITAL resource?", choices: ["Iron ore", "A factory's machinery — and money", "A nurse", "Sunlight"], a: 1, explain: "Capital = human-made tools of production; money counts as capital." } },
  { t: "Specialization → interdependence",
    concept: "interdep",
    html: `<p><b>Specialization</b>: each business focuses on what it does best → efficiency. But that means <b>relying on others</b> = a <b>network of interdependence</b>.</p>
    <div class="example"><div class="ex-title">Fast-food example</div><p>Beef/potatoes from a wholesaler (natural) · grills and fridges from equipment companies (capital) · cooks and servers via an agency (human).</p></div>`,
    q: { q: "A phone maker relies on other companies for chips, screens, and batteries. This is…", choices: ["A command economy", "Interdependence through specialization", "Unlimited liability", "A fad"], a: 1, explain: "Specializing makes firms efficient — and dependent on each other." } }
]},
{ id: "supply-demand", title: "Supply & Demand", icon: "⚖️", chunks: [
  { t: "Demand & the law of demand",
    concept: "demand",
    html: `<div class="defgrid"><div class="term">Demand</div><div class="def">Quantity <b>buyers are willing and able to buy</b> at possible prices, over a period</div><div class="term">Law of Demand</div><div class="def">Price ↑ → demand <b>↓</b> (higher price, fewer buyers)</div></div>`,
    q: { q: "The law of demand says: when price rises…", choices: ["Consumers demand more", "Consumers demand less", "Producers supply less", "Demand is unchanged"], a: 1, explain: "Higher price → less demand. Consumers buy less when it's expensive." } },
  { t: "Supply & the law of supply",
    concept: "supply",
    html: `<div class="defgrid"><div class="term">Supply</div><div class="def">Amount <b>producers are willing and able to offer for sale</b> at each price</div><div class="term">Law of Supply</div><div class="def">Price ↑ → supply <b>↑</b> (higher price, more production)</div></div>
    <div class="callout">🧭 Demand and supply move in <b>opposite</b> directions as price changes.</div>`,
    q: { q: "The law of supply says: when price rises…", choices: ["Producers supply more", "Producers supply less", "Consumers buy more", "Equilibrium falls"], a: 0, explain: "Higher prices make producing more worthwhile." } },
  { t: "Equilibrium — the market-clearing price",
    concept: "equilibrium",
    html: `<p><b>Equilibrium</b>: the price where <b>market supply = market demand</b>.</p>
    <p>Also called the <b>market-clearing price</b>: buyers get all they want, sellers sell all they want — everyone satisfied.</p>`,
    q: { q: "At equilibrium…", choices: ["Supply exceeds demand", "Demand exceeds supply", "Market supply equals market demand", "The government sets the price"], a: 2, explain: "Supply = demand at the equilibrium (market-clearing) price." } },
  { t: "Surplus vs shortage",
    concept: "surplus-shortage",
    html: `<table class="data"><tr><th></th><th>Surplus</th><th>Shortage</th></tr><tr><td><b>Meaning</b></td><td>Too much <b>supply</b></td><td>Too much <b>demand</b></td></tr><tr><td><b>Example</b></td><td>Winter coats in spring</td><td>Sold-out concert</td></tr><tr><td><b>Price</b></td><td>Sellers <b>lower</b> prices</td><td>Prices <b>rise</b></td></tr></table>
    <p>Both push the market <b>back toward equilibrium</b>.</p>`,
    q: { q: "A store is stuck with winter coats in spring and cuts prices. This is a…", choices: ["Shortage", "Surplus", "Equilibrium", "Fad"], a: 1, explain: "Too much supply = surplus; prices fall to attract buyers." } },
  { t: "Coffee Shop Game — why we played it",
    concept: "supply",
    html: `<p>You made real owner decisions: <b>how much stock to buy</b>, <b>what price to charge</b>, <b>the recipe</b> — while facing weather, running out of supplies, competition, and picky customers.</p>
    <div class="callout">🌍 Real-world lessons: match supply to demand · factors that shift supply/demand · <b>inventory management</b>.</div>`,
    q: { q: "Running out of cups on a busy day in the game teaches…", choices: ["Corporate tax", "Inventory management", "Insider trading", "Dividends"], a: 1, explain: "Inventory management — buying the right supplies to meet demand." } }
]}
];
