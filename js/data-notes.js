/* ===== Study notes content (from BEP2O lessons 2–10) ===== */
const NOTES = [
{
  id: "types-of-business",
  icon: "🏪",
  title: "Types of Business",
  source: "U1L2 — Types of Businesses",
  blurb: "For-profit vs non-profit, profit math, service areas, business size, goods vs services.",
  html: `
  <h2 class="mt0">Why classify businesses?</h2>
  <p><b>Classify</b> means arranging people or things into categories according to shared qualities. There are many ways to classify a business: by <b>purpose</b>, by <b>service area</b>, by <b>size</b>, and by <b>what they sell</b>.</p>

  <h2>1. Classifying by Purpose</h2>
  <p>Every business is either <b>for-profit</b> or <b>non-profit</b>.</p>
  <div class="defgrid">
    <div class="term">For-Profit</div><div class="def">Goal is to <b>make a profit</b> by supplying goods or services to meet consumer demands.</div>
    <div class="term">Non-Profit</div><div class="def">Serves a <b>social, charitable, or community purpose</b> rather than generating profit for members or directors. It <u>can</u> earn revenue, but any profit must be <b>reinvested into the organization's mission</b> — never distributed as dividends or personal gain. <i>Examples: charities, Amnesty International.</i></div>
  </div>

  <h3>The money words you MUST know</h3>
  <div class="defgrid">
    <div class="term">Revenue</div><div class="def">The money made by <b>selling</b> goods or services.</div>
    <div class="term">Expenses</div><div class="def">Payments involved in <b>running</b> the business and assets that get "used up" operating it (e.g., renting equipment for the day).</div>
    <div class="term">Cost</div><div class="def">The money required to <b>produce</b> or provide the goods and services (e.g., buying materials).</div>
    <div class="term">Profit</div><div class="def">The income <b>left after all costs and expenses are paid</b>.</div>
  </div>

  <div class="formula">Profit (or Loss) = Revenue − Expenses − Costs</div>

  <div class="example">
    <div class="ex-title">Worked example 1 (from class)</div>
    <p>You sell customizable backpacks. Revenue = <b>$200</b>. Materials (backpacks + iron-on paper) = <b>$100</b>. Renting the heat press for the day = <b>$40</b>.</p>
    <p>Profit = 200 − 100 − 40 = <b>$60 profit</b> ✔</p>
  </div>
  <div class="example">
    <div class="ex-title">Worked example 2 (from class)</div>
    <p>You sell customized water bottles. Revenue = <b>$250</b>. Materials = <b>$120</b>. Equipment rental = <b>$50</b>.</p>
    <p>Profit = 250 − 120 − 50 = <b>$80 profit</b> ✔</p>
  </div>

  <div class="callout">💡 <b>If the answer is negative</b> (Revenue &lt; Expenses + Costs), the business has a <b>loss</b>. Write it as "a loss of $X" — show your formula on the test for full marks!</div>

  <h3>What can a business do with a profit?</h3>
  <ul>
    <li><b>Reinvest</b> it for expansion</li>
    <li>Provide <b>improved goods and services</b></li>
    <li>Give the owner(s) funds for <b>personal needs or wants</b></li>
  </ul>

  <h2>2. Classifying by Service Area</h2>
  <div class="defgrid">
    <div class="term">Local</div><div class="def">Serves a specific geographic area — a town or neighbourhood (e.g., a corner bakery).</div>
    <div class="term">Regional</div><div class="def">Operates in a defined area — a city, a group of municipalities, or a larger part of a country.</div>
    <div class="term">National</div><div class="def">Operates <b>within one country</b>.</div>
    <div class="term">Global</div><div class="def">Operates in <b>multiple countries</b>.</div>
  </div>

  <h2>3. Classifying by Size</h2>
  <table class="data">
    <tr><th>Size</th><th>Employees</th></tr>
    <tr><td><b>Small</b></td><td>1 – 99</td></tr>
    <tr><td><b>Medium</b></td><td>100 – 500</td></tr>
    <tr><td><b>Large</b></td><td>More than 500</td></tr>
  </table>
  <div class="callout">🇨🇦 <b>Numbers to memorize:</b> most businesses are small-to-medium (fewer than 500 employees). Canada has <b>over 1 million</b> small &amp; medium businesses, and they provide jobs for <b>60% of the Canadian workforce</b>. These are classic multiple-choice facts.</div>

  <h2>4. Classifying by What They Sell</h2>
  <div class="defgrid">
    <div class="term">Good</div><div class="def">An item that can be <b>seen or touched</b> (tangible). <i>Examples: backpacks, water bottles, phones, food.</i></div>
    <div class="term">Service</div><div class="def"><b>Assistance</b> provided to customers. <i>Examples: haircuts, plumbing, housekeeping, teaching.</i></div>
  </div>

  <div class="callout">🎯 <b>Exam connection:</b> The "Thinking" section (5 marks) asks you to calculate revenue, expenses and profit/loss — memorize the formula box above. "Goods vs services" and "non-profit" are common multiple-choice and matching questions.</div>
  `
},
{
  id: "wants-needs-maslow",
  icon: "🧠",
  title: "Wants, Needs & Maslow",
  source: "U1L6 — Wants & Needs",
  blurb: "Needs vs wants, Maslow's 5 levels, obsolete products, trends vs fads.",
  html: `
  <h2 class="mt0">Why do businesses exist?</h2>
  <p>Businesses provide goods and services to <b>satisfy needs and wants</b> — that's how they know what to make.</p>
  <div class="defgrid">
    <div class="term">Need</div><div class="def">Things <b>necessary</b> for living our current lifestyles — required to live, stay healthy and work. <i>Examples: basic groceries, clean water, rent/mortgage and utilities, basic healthcare and medications, essential clothing and shelter.</i></div>
    <div class="term">Want</div><div class="def">Things <b>not necessary for survival</b> but that add comfort and pleasure — desires that improve quality of life. <i>Examples: eating at restaurants, designer clothes, entertainment, movies, concerts.</i></div>
  </div>

  <h3>What impacts consumer needs and wants?</h3>
  <ul>
    <li>Personality and personal interests</li>
    <li>Individual abilities</li>
    <li>Individual priorities and values</li>
    <li>Individual's <b>stage of life</b></li>
    <li>Family responsibilities</li>
    <li><b>Trends and fads</b> (impacted by technology, media, businesses, the environment)</li>
  </ul>

  <h2>Maslow's Hierarchy of Needs</h2>
  <p>Created by <b>Abraham Maslow</b>, a social psychologist interested in the broad spectrum of human psychological needs. Human needs fall into <b>five groups in hierarchical order</b> — lower levels must generally be met before higher ones:</p>

  <div class="pyramid">
    <div class="level lv5">5. Self-Actualization<small>striving to realize your full potential</small></div>
    <div class="level lv4">4. Ego Needs<small>self-esteem, achievement, uniqueness, independence</small></div>
    <div class="level lv3">3. Belongingness Needs<small>love, friendship, acceptance</small></div>
    <div class="level lv2">2. Safety Needs<small>shelter, security, protection</small></div>
    <div class="level lv1">1. Physiological Needs<small>water, sleep, food</small></div>
  </div>

  <div class="callout">⭐ <b>Guaranteed short-answer topic.</b> Practice: pick a product → name the level it <i>actually</i> satisfies → explain how the <i>advertisement</i> appeals to a different level.</div>
  <div class="example">
    <div class="ex-title">Products vs. advertising levels (from class)</div>
    <p>A home <b>security system</b> meets a <b>safety</b> need — but the ad might use <b>love of family</b> (belongingness) to motivate buyers.</p>
    <p>A <b>burger</b> is <b>physiological</b> (food) — but advertisers often use <b>social/belonging</b> appeals (friends sharing food) to attract attention.</p>
  </div>
  <p>Understanding Maslow helps businesses understand their <b>target market</b> — who they are actually trying to sell to.</p>

  <h3>Obsolete products</h3>
  <p>A product becomes <b>obsolete</b> when it is <b>no longer a want or need</b> — when consumers stop buying it, producers stop making it. <i>Examples: tape players, VCRs.</i></p>
  <div class="example">
    <div class="ex-title">Case: General Mills' "Wheaties Dunk-A-Balls"</div>
    <p>A cereal shaped like basketballs. Parents bought it, disliked that it encouraged kids to <b>play with their food</b>, and the cereal failed. It could have been avoided by better <b>understanding the target market (parents)</b> before launch.</p>
  </div>

  <h2>Trends vs. Fads <span class="pill amber">Short-answer topic</span></h2>
  <table class="data">
    <tr><th></th><th>Trend</th><th>Fad</th></tr>
    <tr><td><b>Definition</b></td><td>A general direction or change in society that <b>lasts a long time</b></td><td>A change that leads to a <b>temporary, short-term</b> adjustment</td></tr>
    <tr><td><b>Duration</b></td><td>Years</td><td>Likely <b>less than a year</b></td></tr>
    <tr><td><b>Examples</b></td><td>Online shopping, AI in business</td><td>Fidget spinners, squishies</td></tr>
  </table>
  <div class="example">
    <div class="ex-title">Case: the 1970s women-in-the-workforce trend</div>
    <p>More women entering the workforce created new consumer needs: demand for <b>convenience food</b>, <b>extended shopping and banking hours</b>, <b>convenient household appliances</b>, and hotels including <b>hair dryers and ironing boards</b>. A trend changes what whole groups of consumers need — for years.</p>
  </div>
  <h3>Lifestyle trends today</h3>
  <ul>
    <li>Eco-friendly — reusable anything</li>
    <li>Eating local / organic products</li>
    <li>Chemical-free products (e.g., BPA-free)</li>
  </ul>
  `
},
{
  id: "forms-of-ownership",
  icon: "🏢",
  title: "Forms of Business Ownership",
  source: "U1L3_4 — Forms of Business Ownership",
  blurb: "Sole proprietorship, partnership, corporation, co-operative, franchise — plus liability, shareholders, dividends.",
  html: `
  <h2 class="mt0">The 5 Main Forms of Business Ownership</h2>
  <div class="badge-row">
    <span class="pill">1. Sole Proprietorship</span><span class="pill">2. Partnership</span><span class="pill">3. Corporation</span><span class="pill">4. Co-operatives</span><span class="pill">5. Franchise</span>
  </div>

  <h2>1. Sole Proprietorship</h2>
  <p>A business <b>owned by 1 person</b>, known as the <b>proprietor</b>.</p>
  <ul>
    <li>The proprietor has a <b>wide range of responsibilities</b> — arranging displays, selling to customers, everything.</li>
    <li>Funds usually come from the <b>owner's savings, friends, family, or a bank loan</b>.</li>
    <li>If the business prospers, the owner receives <b>all of the profits</b>.</li>
    <li>If the business does poorly, the owner is responsible for its losses — this is <b>unlimited liability</b>.</li>
  </ul>
  <div class="callout red">⚠️ <b>Unlimited liability</b> = the owner and the business are the <b>same legal entity</b>. Personal assets can be taken to pay business debts. <i>Examples: housekeeping service, plumber, electrician.</i></div>

  <h2>2. Partnership</h2>
  <p>A type of business in which <b>two or more individuals share the costs and responsibilities</b> of owning and operating it. The terms are recorded in a <b>partnership agreement</b>.</p>
  <table class="data">
    <tr><th></th><th>General Partnership</th><th>Limited Partnership</th></tr>
    <tr><td><b>Structure</b></td><td>Most common form — "what's yours is mine and what's mine is yours"</td><td>Has a <b>general partner</b> AND <b>limited partners</b></td></tr>
    <tr><td><b>Who runs it</b></td><td>All partners share</td><td>The <b>general partner</b> oversees and runs the business</td></tr>
    <tr><td><b>Liability</b></td><td>All partners share gains, losses and <b>unlimited liability</b></td><td>General partner: <b>unlimited</b>. Limited partners: only responsible for the <b>funds they invested</b> = <b>limited liability</b></td></tr>
  </table>
  <table class="data">
    <tr><th>Partnership Pros</th><th>Partnership Cons</th></tr>
    <tr><td>
      ✔ Easy to start<br>
      ✔ Shared financial burden<br>
      ✔ Combined skills &amp; expertise<br>
      ✔ Profits taxed as <b>personal income</b> — not through corporate tax
    </td><td>
      ✘ Profit sharing<br>
      ✘ Unlimited liability (in a <i>general</i> partnership)<br>
      ✘ Personal issues, values, operations conflicts<br>
      ✘ If a partner wants to leave it may be difficult — unless an agreement is in place
    </td></tr>
  </table>
  <div class="example">
    <div class="ex-title">Things partners should negotiate BEFORE agreeing</div>
    <p>Responsibilities · Decision making · Ownership (50/50? 40/60?) · Scheduling · Financial investment · Profit splits · Goals · Values · Scenarios (what if a partner wants to leave)</p>
  </div>

  <h2>3. Corporation</h2>
  <p>A business granted <b>legal status with rights, privileges, and liabilities that are distinct from the people who work for it</b>. The <b>owner is separate from the business</b>. A corporation can be small (one person) or large (multinational).</p>
  <div class="example">
    <div class="ex-title">Case: the Hong Kong Café vs. a corporation</div>
    <p>You get sick from café food. <b>Sole proprietorship:</b> you sue the <b>owner</b> — they're responsible for operations, owner and business are the same entity (unlimited liability). <b>Corporation:</b> the owner does <b>not</b> get sued personally — the business and owner are <b>separate entities</b>, so the owner is protected.</p>
  </div>

  <h3>Corporate ownership words</h3>
  <div class="defgrid">
    <div class="term">Stocks / Shares</div><div class="def">Small portions of corporate ownership that are owned publicly.</div>
    <div class="term">Shareholders</div><div class="def">Individuals who hold shares — they become <b>owners</b> of the business. They have <b>limited liability</b>.</div>
    <div class="term">Dividends</div><div class="def"><b>Regular payments of profit</b> made to investors who own a company's stock.</div>
    <div class="term">Board of Directors</div><div class="def">The <b>governing body</b> of a company, <b>elected by shareholders</b>, to set strategy and oversee management. They hire, evaluate — even <b>fire the CEO</b> — and ensure the company acts legally, ethically and responsibly.</div>
  </div>

  <h3>4 Types of Corporations</h3>
  <table class="data">
    <tr><th></th><th>Private</th><th>Public</th><th>Crown</th><th>Municipal</th></tr>
    <tr><td><b>Ownership</b></td><td>Small group of individuals</td><td>Public shareholders</td><td>Government</td><td>Local government</td></tr>
    <tr><td><b>On stock exchange?</b></td><td>No</td><td><b>Yes</b> — shares publicly traded, financials disclosed</td><td>No</td><td>No</td></tr>
    <tr><td><b>Purpose</b></td><td>Profit-driven</td><td>Profit-driven</td><td><b>Public service</b> (while keeping financial independence)</td><td><b>Public service</b> (essential services: water, transit, utilities)</td></tr>
    <tr><td><b>Examples</b></td><td>Family business, IKEA, Lego</td><td>Apple, Microsoft, Starbucks, Tesla</td><td><b>Canada Post, CBC</b></td><td><b>Toronto Hydro, TTC, Viva</b></td></tr>
  </table>

  <h2>4. Co-operative</h2>
  <p>A business <b>owned by the workers or members who buy the products or use the services</b> it offers. Motivated by <b>service, not profit</b>.</p>
  <ul>
    <li>Owned and operated by its <b>members</b></li>
    <li>Members share profits and decision-making</li>
    <li>Operates <b>democratically — one member = one vote</b></li>
    <li>Focuses on <b>members' needs</b> rather than maximizing profits</li>
  </ul>
  <div class="example">
    <div class="ex-title">Class example</div>
    <p>You and friends love video games but they're expensive. You pool money to buy games everyone shares; everyone gets an equal say; if the group makes money lending games out, it's split equally among everyone.</p>
  </div>
  <div class="callout green">💚 <b>Why co-operatives matter:</b> ① <b>Community oriented</b> — profits reinvested to make products more affordable &amp; ethical · ② <b>Ethical business practices</b> — sustainability and fair wages · ③ <b>Democracy</b> — workers control their workplace.</div>

  <h2>5. Franchise</h2>
  <p>A business model where the <b>franchisor</b> (the original company) allows other people or companies — <b>franchisees</b> — to open and operate a business using its <b>name, products, and branding</b>.</p>
  <div class="defgrid">
    <div class="term">Franchisor</div><div class="def">Owns the rights to the name, recipes/products, and how the business operates (e.g., the original Cocos).</div>
    <div class="term">Franchisee</div><div class="def">Pays an <b>initial fee</b> to open a location and agrees to pay a <b>% of sales</b> as an ongoing fee. In return: brand, recipes/products, marketing, and a proven system.</div>
  </div>
  <p>The most common type is the <b>business-format franchise</b> — everything is set up for you: logo, uniforms, menu, training, operations, marketing. You replicate a system the franchisor has <b>already proven works</b>.</p>
  <h3>Challenges a franchisee faces <span class="pill amber">Likely question</span></h3>
  <ol>
    <li><b>Limited freedom</b> — little flexibility for new ideas or local changes; frustrating for entrepreneurs</li>
    <li><b>Strict rules</b> — consistency across all franchises: staffing, inventory, customer service, product quality, store layout</li>
    <li><b>Competition with other franchises</b> — multiple franchisees may be allowed in the same area</li>
    <li><b>Brand reputation</b> — if the franchisor gets negative backlash, your business is directly affected</li>
    <li><b>High investment fees</b></li>
  </ol>

  <h2>Summary table — memorize this!</h2>
  <table class="data">
    <tr><th>Form</th><th>Owned by</th><th>Key idea</th><th>Example</th></tr>
    <tr><td>Sole Proprietorship</td><td>1 person</td><td>Owner keeps all profit, <b>unlimited liability</b></td><td>Plumber, electrician</td></tr>
    <tr><td>Partnership</td><td>2+ people</td><td>Shared costs/responsibilities; <b>partnership agreement</b></td><td>Law firms, two friends' startup</td></tr>
    <tr><td>Corporation</td><td>Shareholders</td><td><b>Separate legal entity</b>; limited liability; dividends</td><td>Apple (public), IKEA (private)</td></tr>
    <tr><td>Co-operative</td><td>Members/workers</td><td><b>One member = one vote</b>; service over profit</td><td>Game-sharing co-op, credit unions</td></tr>
    <tr><td>Franchise</td><td>Franchisee buys rights</td><td>Pays fees to use an <b>established brand &amp; system</b></td><td>Cocos bubble tea, McDonald's</td></tr>
  </table>
  `
},
{
  id: "ethics-csr",
  icon: "🌍",
  title: "Business Ethics & CSR",
  source: "Ethics & CSR lessons (Days 1–3)",
  blurb: "Ethics, fraud, insider trading, whistleblowing — and the 5 CSR Principles for the 6-mark long answer.",
  html: `
  <h2 class="mt0">The ethics vocabulary</h2>
  <div class="defgrid">
    <div class="term">Ethics</div><div class="def">Rules that help us tell the difference between <b>right and wrong</b> — they encourage us to do the right thing.</div>
    <div class="term">Values</div><div class="def">What we think is <b>important</b>. <i>Example: respect.</i></div>
    <div class="term">Morals</div><div class="def">Rules we use to decide what is <b>good or bad</b>. <i>Example: stealing is bad.</i></div>
    <div class="term">Fair Trade</div><div class="def">Using trade to ensure <b>basic labour rights</b> of employees in other countries are respected — treating producers and workers fairly while businesses still profit.</div>
    <div class="term">Code of Ethics</div><div class="def">A document explaining specifically <b>how employees should respond</b> in certain situations. (Laws cover acceptable behaviour, but a business can still act unethically without breaking laws.)</div>
    <div class="term">Ethical Dilemma</div><div class="def">Choosing between two difficult choices, <b>neither clearly more right or wrong</b>. Ask: Who is helped? Who is hurt? What are the benefits/problems? Will it survive the test of time?</div>
  </div>

  <h2>Unethical business practices</h2>
  <div class="defgrid">
    <div class="term">Whistle-blowing</div><div class="def">When an <b>employee informs officials or the public</b> about an illegal or ethical violation (named after a referee's whistle for foul play).</div>
    <div class="term">Fraud</div><div class="def">A <b>crime of lying or pretending</b>.</div>
    <div class="term">Accounting scandal</div><div class="def">When accountants or senior executives <b>alter accounting records for personal benefit</b>.</div>
    <div class="term">Embezzlement</div><div class="def">A type of accounting fraud — creating <b>false accounts</b> and redirecting money into them for personal gain.</div>
    <div class="term">Auditors</div><div class="def"><b>External accountants</b> who check and report on the validity of financial records. (Forensic accountants examine legal and financial documents.)</div>
    <div class="term">Insider Trading</div><div class="def">Buying or selling shares based on <b>confidential information</b> — <b>illegal</b>. Punishment: fines up to <b>$1 million</b>, turning over all profits, up to <b>2 years in prison</b>, and being banned from future trading.</div>
  </div>
  <h3>6 types of business fraud</h3>
  <table class="data">
    <tr><th>Type</th><th>What it is</th></tr>
    <tr><td>Bank fraud</td><td>Loans to non-existent businesses</td></tr>
    <tr><td>Consumer fraud</td><td>Tricking consumers into buying stuff they don't need or that doesn't perform as promised</td></tr>
    <tr><td>Insurance fraud</td><td>False insurance claims</td></tr>
    <tr><td>Mail fraud</td><td>Using mail to deliver scams or steal data</td></tr>
    <tr><td>Pyramid scheme fraud</td><td>A fraudulent system of making money based on recruiting an ever-increasing number of "investors"</td></tr>
    <tr><td>Telemarketer fraud</td><td>High-pressure phone calls to buy or donate to bogus charities</td></tr>
  </table>
  <h3>Why might a company alter its information?</h3>
  <p>① Increase profits on paper · ② Attract investors · ③ Obtain loans (banks lend more to "profitable" firms) · ④ Protect their position (meet expectations, avoid being fired) · ⑤ Hide losses or financial problems · ⑥ Avoid taxes (less reported income = less tax).</p>

  <h2>Corporate Social Responsibility (CSR) <span class="pill red">6-mark long answer</span></h2>
  <p>Historically, businesses cared about one thing: <b>making money</b>. Today businesses focus on three things:</p>
  <div class="badge-row"><span class="pill green">Economic — make money &amp; improve the economy</span><span class="pill">Social — benefits for stakeholders</span><span class="pill green">Environmental — not doing harm to the environment</span></div>
  <div class="formula" style="font-size:.98rem; letter-spacing:0; font-weight:600; text-align:left;">CSR = the idea that organizations have obligations to act in ways that serve both their own interests AND the interests of society at large, by considering the <b>economic, environmental, and social</b> impact of their decisions.</div>

  <h3>THE 5 CSR PRINCIPLES — memorize all five</h3>
  <table class="data">
    <tr><th>#</th><th>Principle</th><th>Examples from class</th></tr>
    <tr><td><b>1</b></td><td><b>Providing a safe and healthy work environment</b></td><td>Properly trained and equipped workers; employee wellness programs (on-site daycare, fitness facilities)</td></tr>
    <tr><td><b>2</b></td><td><b>Adopting fair labour policies</b></td><td>No discrimination in hiring (race, religion, sex, age, physical ability); comply with laws on pay and work hours</td></tr>
    <tr><td><b>3</b></td><td><b>Protecting the environment</b></td><td>IKEA: fully circular business by 2030 (renewable/recycled materials) + "Buy Back" program for used furniture; Unilever (Dove): 100% recyclable packaging by 2025, cutting carbon footprint across the supply chain</td></tr>
    <tr><td><b>4</b></td><td><b>Truthful advertising</b> (and avoiding price discrimination)</td><td>Dove: no airbrushing or digital alteration of women in ads; educational programs on body confidence and media literacy</td></tr>
    <tr><td><b>5</b></td><td><b>Donating to charity</b></td><td>Microsoft Philanthropies donates tech and cloud services to nonprofits; employee matching gift programs; Google matches up to $10,000 per employee per year</td></tr>
  </table>

  <h3>Extra terms that appear in this unit</h3>
  <div class="defgrid">
    <div class="term">Duty to Accommodate</div><div class="def">An employer's obligation to ensure <b>accessibility for all employees</b>.</div>
    <div class="term">Glass Ceiling</div><div class="def">An invisible, unofficial barrier that stops women and minority groups from being promoted to high-level leadership jobs — "glass" because you can see the top jobs but can't break through.</div>
    <div class="term">Employee safety rights</div><div class="def">Workers can: <b>refuse unsafe work</b> · participate in workplace health &amp; safety activities · <b>know about actual hazards</b> in the workplace.</div>
    <div class="term">B Corporation</div><div class="def">A <b>for-profit</b> business that meets high standards of verified <b>social and environmental performance</b>, public transparency, and legal accountability — balancing <b>profit and purpose</b>. Regulated by <b>B Lab</b>.</div>
  </div>

  <div class="callout">✍️ <b>How to write the 6-mark CSR answer:</b> For EACH of the 5 principles write 2–3 sentences: ① name the principle ("SnackCo should adopt fair labour policies…") → ② give a <b>specific action</b> for the business in the scenario → ③ explain <b>why/how</b> it helps workers, society, or the company's reputation. Five principles × 1 mark + 1 mark for clear explanation = 6/6.</div>
  `
},
{
  id: "intro-economics",
  icon: "📈",
  title: "Intro to Economics",
  source: "Lesson 9 — Intro to Economics",
  blurb: "Economics, scarcity, economic systems, opportunity cost, economic resources, interdependence.",
  html: `
  <h2 class="mt0">Economics &amp; scarcity</h2>
  <div class="defgrid">
    <div class="term">Economics</div><div class="def">The study of <b>human decisions in using limited resources to satisfy unlimited needs and wants</b> for goods and services.</div>
    <div class="term">Scarcity</div><div class="def">There is a <b>limited number of resources</b> to produce a limited amount of goods and services, to meet <b>unlimited human wants</b>. Because of scarcity we must <b>make choices</b> — and those choices shape consumer behaviour and affect how businesses operate.</div>
  </div>

  <h2>Economic systems</h2>
  <p>An <b>economic system</b> is a way of dealing with the <b>selection, production, distribution, and consumption</b> of goods and services. Every system must answer <b>three key questions</b>:</p>
  <div class="formula" style="font-size:1rem;">1. WHAT to produce? &nbsp; 2. HOW to produce it? &nbsp; 3. For WHOM?</div>
  <table class="data">
    <tr><th></th><th>Command Economy</th><th>Market Economy</th><th>Mixed Economy</th></tr>
    <tr><td><b>Who decides</b></td><td>The <b>government</b> makes ALL economic decisions and owns/controls resources</td><td><b>Individuals and businesses</b>, based on supply and demand</td><td>Government <b>and</b> business share decision-making</td></tr>
    <tr><td><b>Prices</b></td><td>Set by the government</td><td>Determined by <b>supply and demand</b></td><td>Mostly market-driven, but may be regulated</td></tr>
    <tr><td><b>Consumers</b></td><td>Limited choice; goods often standardized</td><td>Distribution by purchasing power — those who can afford it buy</td><td>Freedom of choice, but government regulates some products; gov ensures access to <b>essential services</b></td></tr>
    <tr><td><b>Examples</b></td><td>North Korea, Cuba</td><td>USA, Taiwan, New Zealand</td><td><b>Canada</b>, UK, France — most countries today</td></tr>
  </table>

  <h2>Opportunity Cost <span class="pill amber">Short-answer topic</span></h2>
  <div class="formula" style="font-size:.98rem;">Opportunity cost = the value a person could have received but passed up in pursuit of another option (the value of what's given up)</div>
  <div class="example">
    <div class="ex-title">The $50 dilemma (from class)</div>
    <p>You have $50 and can choose ONE: gaming accessories, dinner out with friends, trendy clothing, or a concert. If you choose <b>gaming accessories</b>, what you give up — the restaurant meal, the clothes, the concert experience — is your <b>opportunity cost</b>.</p>
  </div>

  <h2>Economic resources (factors of production)</h2>
  <p>The things goods are made of — or the things that allow businesses to provide a service. Most products need a <b>combination</b> of all three:</p>
  <table class="data">
    <tr><th>Type</th><th>Definition</th><th>Examples</th></tr>
    <tr><td><b>Natural resources</b></td><td>Resources that come from the <b>earth, water, and air</b></td><td>Soil, iron ore, gold, oil, trees, wildlife, agricultural goods, fish, oxygen</td></tr>
    <tr><td><b>Human resources</b></td><td>The <b>people who work</b> to create goods and services (a.k.a. labour)</td><td>Farmers, teachers, factory workers, construction workers, nurses, social workers</td></tr>
    <tr><td><b>Capital resources</b></td><td><b>Human-made</b> resources used by a business to create goods and services (long-lasting, big investment)</td><td>Buildings, equipment &amp; machinery, tools, vehicles, factories — and <b>money</b> (needed to buy raw materials and pay workers)</td></tr>
  </table>
  <div class="callout">💡 <b>Trap to avoid:</b> money is a <b>capital</b> resource. Oil/trees/fish are <b>natural</b> resources. A nurse or a teacher is a <b>human</b> resource.</div>

  <h2>Specialization &amp; interdependence</h2>
  <ul>
    <li><b>Specialization:</b> each business focuses on what it does best, producing goods/services more <b>efficiently</b>. (A smartphone maker assembles phones; other companies specialize in chips, screens, batteries.)</li>
    <li>By specializing, businesses give up producing other things — so they must <b>rely on others</b>, creating a <b>network of interdependence</b>.</li>
  </ul>
  <div class="example">
    <div class="ex-title">Fast-food restaurant example</div>
    <p>Relies on a <b>wholesaler</b> for beef, tomatoes, potatoes (natural resources) · buys the building, grills and refrigerators (capital resources) from restaurant-equipment companies · hires cooks, managers, servers (human resources), perhaps through an employment agency.</p>
  </div>
  `
},
{
  id: "supply-demand",
  icon: "⚖️",
  title: "Supply & Demand",
  source: "Lesson 10 — Supply & Demand (+ Coffee Shop Game)",
  blurb: "Law of demand, law of supply, equilibrium, surplus, shortage.",
  html: `
  <h2 class="mt0">The two laws</h2>
  <div class="defgrid">
    <div class="term">Demand</div><div class="def">The <b>quantity of a good or service that buyers are willing and able to buy</b> at all possible prices during a period of time.</div>
    <div class="term">Law of Demand</div><div class="def">The <b>higher</b> the price, the <b>less</b> consumers will demand. (price ↑ → demand ↓)</div>
    <div class="term">Supply</div><div class="def">The amount of a good or service that <b>producers are willing and able to offer for sale</b> at each possible price during a given period of time.</div>
    <div class="term">Law of Supply</div><div class="def">The <b>higher</b> the price, the <b>more</b> producers will supply. (price ↑ → supply ↑)</div>
  </div>
  <div class="callout">🧭 <b>Memory trick:</b> Demand and supply move in <b>opposite</b> directions when price changes. Consumers buy less when it's expensive; producers make more when it's expensive.</div>

  <h2>Equilibrium</h2>
  <p><b>Equilibrium</b>: the situation where the price has reached the level where <b>market supply = market demand</b>.</p>
  <p>At the <b>equilibrium price</b>, the quantity buyers are willing to buy <b>exactly balances</b> the quantity sellers are willing to sell. It's also called the <b>market-clearing price</b> — everyone is satisfied: buyers can buy all they want, sellers can sell all they want.</p>

  <h2>When the market is out of balance</h2>
  <table class="data">
    <tr><th></th><th>Surplus (too much supply)</th><th>Shortage (too much demand)</th></tr>
    <tr><td><b>What's happening</b></td><td>Sellers have <b>more</b> products than buyers want</td><td>Buyers want <b>more</b> than sellers have available</td></tr>
    <tr><td><b>Class example</b></td><td>A store has too many <b>winter coats in spring</b></td><td>A popular <b>concert</b> — more people want tickets than tickets available</td></tr>
    <tr><td><b>Price does…</b></td><td>Sellers may <b>lower prices</b> to attract buyers</td><td>Prices may <b>rise</b>; some buyers miss out</td></tr>
    <tr><td><b>Result</b></td><td colspan="2" style="text-align:center;">Both push the market <b>back toward equilibrium</b></td></tr>
  </table>

  <h2>Coffee Shop Game takeaways</h2>
  <p>In the 14-day coffee shop simulation you made the same decisions real business owners make:</p>
  <ul>
    <li><b>Decisions:</b> how much of each supply item to buy · how much to charge per cup · the recipe for the perfect cup</li>
    <li><b>Challenges:</b> the weather · running out of supplies · competition · customers not liking your recipe</li>
    <li><b>Real-world connections:</b> producing the right supply to meet customer demand · factors that affect supply and demand · <b>inventory management</b></li>
  </ul>
  `
}
];
