// Everything on the home page is driven by this list.
// To add or change an experience, edit a tile here; the board and the timeline both update.
// t = category, k = number on the tile, l = short label, sl = what the number means.
const TYPES = {
  product:   { name: "Product",   c: "var(--product)",   dark: false },
  finance:   { name: "Finance",   c: "var(--finance)",   dark: true  },
  strategy:  { name: "Strategy",  c: "var(--strategy)",  dark: false },
  build:     { name: "Build",     c: "var(--build)",     dark: false },
  community: { name: "Community", c: "var(--community)", dark: true  },
  desert:    { name: "About",     c: "var(--desert)",    dark: true  }
};

// Board order: rows of 3, 4, 5, 4, 3.
const TILES = [
  { id: "hone", t: "product", k: "1st", l: "Hone", title: "Hone", role: "Product Space Fellow", meta: "Davis, CA · Apr – Jun 2025", when: "Apr – Jun 2025", win: "1st place",
    d: "A housing platform that matches students with local housing. I interviewed students, found where the search breaks down, and let that drive the features: student reviews, direct contact, tours. Prototype in Figma and a full pitch deck.",
    sl: "place, judged by industry PMs", chips: ["Figma", "User research", "Pitch"], link: ["honedavis.com", "https://www.honedavis.com/"] },
  { id: "capital-one", t: "finance", k: "15%", l: "Capital One", title: "Capital One", role: "Product Management & Analytics Intern", meta: "Plano, TX · Jun – Aug 2026", when: "Jun – Aug 2026",
    d: "Rebuilt the commission structure for the reps who sell Pre-Approval to car dealerships. Sourced revenue, compensation and usage data, found the loopholes and misaligned incentives, then built a calculator to find optimal rates. Presented to the VP of Auto Finance.",
    sl: "estimated savings on commission paid out", chips: ["SQL", "Python", "Tableau", "Google Sheets"] },
  { id: "neural-net", t: "build", k: "85%", l: "Neural Net", title: "Neural network from scratch", role: "Davis Consulting Group project", meta: "Davis, CA · Jun 2025", when: "Jun 2025",
    d: "A four-layer network in NumPy with no ML libraries: ReLU activations, softmax output, cross-entropy loss. It classifies clothing images, including photos you upload yourself.",
    sl: "accuracy on clothing classification", chips: ["Python", "NumPy", "Deep learning"], link: ["GitHub", "https://github.com/zaydmusa/Neural-Net"] },

  { id: "dcg", t: "community", k: "200", l: "DCG · VP", title: "Davis Consulting Group", role: "VP of Professional Development", meta: "Davis, CA · Jun 2026 – Present", when: "Jun 2026 – now",
    d: "On the board. I run twice-weekly sessions on interviewing, résumés, decks and data analysis, and built a new program to get new members client-ready faster. After it launched, two of three clients paid for our work.",
    sl: "people at the casing workshop I designed and led", chips: ["Teaching", "Program design", "Board"] },
  { id: "ask", t: "strategy", k: "8", l: "Ask Solutions", title: "Ask Solutions", role: "Engagement Manager, Davis Consulting Group", meta: "Sep – Dec 2025", when: "Sep – Dec 2025",
    d: "Market research for a B2B intranet product aimed at retail. We benchmarked competitors on size, features and how they find customers, set up discovery calls with prospects, and delivered feature recommendations. I set the direction and managed the client.",
    sl: "student consultants on my team", chips: ["Market research", "Client management", "B2B"] },
  { id: "dorsal", t: "product", k: "40%", l: "Dorsal.fyi", title: "Dorsal.fyi", role: "Product Management Intern", meta: "Palo Alto, CA · Jun – Aug 2025", when: "Jun – Aug 2025",
    d: "A medtech startup that negotiates medical bills for you. I ran user interviews, market and competitor research, scoped the key features, and built out the pivot to a B2B platform for insurers and clinics. Later acquired by Promise.",
    sl: "less friction in the AI-assisted flows I prototyped", chips: ["Figma", "HTML/CSS/JS", "User interviews"], link: ["dorsal.fyi", "https://www.dorsal.fyi"] },
  { id: "asucd", t: "finance", k: "$22M", l: "ASUCD", title: "ASUCD", role: "Vice Controller", meta: "Davis, CA · Apr – Jun 2025, Oct 2025 – Apr 2026", when: "Apr 2025 – Apr 2026",
    d: "Student government budget. Worked with 30+ campus units to find $250K in cuts, and replaced a manual form-to-ledger process with linked sheets that fill in the budget system on their own.",
    sl: "budget under management", chips: ["Budgeting", "Sheets automation", "30+ units"] },

  { id: "formula", t: "build", k: "CAN", l: "Formula Racing", title: "Formula Racing at UC Davis", role: "Firmware Engineering", meta: "Davis, CA · Sep – Dec 2025", when: "Sep – Dec 2025",
    d: "Python dashboards that turn CAN bus telemetry from the car into something the electrical, mechanical and driving teams can act on after a test day.",
    sl: "bus telemetry, made readable", chips: ["Python", "Telemetry", "Dashboards"] },
  { id: "sofi", t: "product", k: "1st", l: "SoFi pitch", title: "SoFi Externship", role: "Team lead", meta: "San Francisco, CA · Jun 2025", when: "Jun 2025", win: "1st place",
    d: "Asked to improve SoFi's product lineup, we studied their customers, goals and regulators and landed on crypto. Built the product concept and a Figma mockup, talked to employees, and pitched a roughly $225M revenue opportunity.",
    sl: "place, and shown to SoFi's CEO", chips: ["Strategy", "Figma", "Fintech"] },
  { id: "about", t: "desert", k: "Hi", l: "About me", title: "About me", role: "Third-year at UC Davis, graduating June 2028", meta: "Davis, CA",
    d: "Economics and Middle East/South Asia Studies, with minors in Computer Science and Psychology. Looking for part-time work and internships in product, analytics and strategy.",
    sl: "", chips: ["Economics", "MESA", "CS", "Psychology"], link: ["More about me", "about.html"], internal: true },
  { id: "aws", t: "strategy", k: "5+", l: "AWS", title: "Amazon Web Services", role: "Consultant, Davis Consulting Group", meta: "Jun – Sep 2025", when: "Jun – Sep 2025",
    d: "Contracted to help AWS sell Just Walk Out technology across the Bay Area and Davis–Sacramento. Ran outreach to potential clients and connected the interested ones to AWS.",
    sl: "discovery meetings set up", chips: ["Outreach", "Sales", "Retail tech"] },
  { id: "bsa", t: "community", k: "VP", l: "BSA", title: "Bengali Student Association", role: "Social Media Manager → Secretary → Vice President", meta: "Davis, CA · Oct 2024 – Present", when: "Oct 2024 – now",
    d: "Marketing, planning and running cultural events, and growing attendance through campaigns and partnerships with other campus organizations.",
    sl: "after Social Media Manager and Secretary", chips: ["Marketing", "Events", "Culture"], link: ["Instagram", "https://www.instagram.com/bsaatdavis/"] },

  { id: "fenwick", t: "finance", k: "200+", l: "Fenwick & West", title: "Fenwick & West", role: "Finance Intern", meta: "Mountain View, CA · Jul – Sep 2025", when: "Jul – Sep 2025",
    d: "Vendor payments for a large tech law firm. When a new office didn't fit the old system, I built an expense-tracking workaround in Excel to keep its accounts straight, and audited expense data along the way.",
    sl: "invoices a month, 100% accuracy", chips: ["Excel", "Audit", "Accounts payable"] },
  { id: "product-space", t: "product", k: "Pres.", l: "Product Space", title: "Product Space at UC Davis", role: "Fellow → Director of Strategic Partnerships → President", meta: "Davis, CA · Apr 2025 – Present", when: "Jun 2025 – now",
    d: "As Director I launched the client program: fellowship alumni doing real projects for 10+ startups, local businesses and international companies. As President I run the board and general body, with relationships at Stripe, LinkedIn, Workday, Microsoft and Oracle.",
    sl: "since January 2026", chips: ["Leadership", "Partnerships", "Product"] },
  { id: "lci", t: "community", k: "25%", l: "Governor's Office", title: "Governor's Office of Land Use & Climate Innovation", role: "Project & Operations Assistant", meta: "Sacramento, CA · Sep – Nov 2025", when: "Sep – Nov 2025",
    d: "Built a unified intranet so anyone could see progress on every ongoing project. Then worked through the CEQAnet submission form the way an applicant would, and wrote guidance notes at each friction point.",
    sl: "of help-desk inquiries answered by my notes", chips: ["SharePoint", "Asana", "Public sector"] },
  { id: "id-fresh", t: "strategy", k: "US", l: "iD Fresh Foods", title: "iD Fresh Foods", role: "Consultant, Davis Consulting Group", meta: "Jan – Jun 2025", when: "Jan – Jun 2025",
    d: "U.S. market entry for a multinational Indian food brand: competitors, distributors, pricing benchmarks, and whether to contract locally, acquire, or import.",
    sl: "market entry study", chips: ["Market entry", "Excel", "Pricing"] },

  { id: "buzzit", t: "community", k: "300+", l: "BuzzIt", title: "BuzzIt", role: "Consultant, Davis Consulting Group", meta: "Apr – Jun 2026", when: "Apr – Jun 2026",
    d: "A Davis startup building a student-only marketplace for services. Shaped launch features and go-to-market, modeled on student campaigns that had already worked.",
    sl: "first users", chips: ["Go-to-market", "Growth", "Startup"] },
  { id: "prodcon", t: "build", k: "2 days", l: "ProdCon", title: "ProdCon", role: "Lead organizer for 2027, Product Space", meta: "Davis, CA · Feb 2026, next in Feb 2027", when: "Feb 2026 – now",
    d: "Product Space's two-day hackathon. The February 2026 edition brought in 200+ people, with cash prizes and judges and workshops from OpenAI and industry speakers. I helped out on that one, which ran with two other student organizations. As President I'm now leading the planning for February 2027 and have grown it to five partner organizations.",
    sl: "200+ attendees in 2026; partner orgs up from 2 to 5 for 2027", chips: ["Hackathon", "Logistics", "Partnerships"] },
  { id: "prizmich", t: "finance", k: "M&A", l: "Lori Prizmich", title: "Lori Prizmich & Associates", role: "Consultant, Davis Consulting Group", meta: "Jan – Mar 2026", when: "Jan – Mar 2026",
    d: "Supported an M&A transaction for a real estate firm: valued the business from comparable transactions and its own financials, modeled a deal structure, and managed competing interests between the parties.",
    sl: "valuation and deal modeling", chips: ["Valuation", "Comps", "Deal structure"] }
];

// Timeline: oldest first. Each stage lists tile ids in order.
const STAGES = [
  { name: "First year", sub: "2024 – 25 · finding my footing in consulting, product and student government", ids: ["bsa", "id-fresh", "asucd", "hone"] },
  { name: "Summer 2025", sub: "Bay Area · a startup, a law firm, AWS and a pitch competition", ids: ["sofi", "neural-net", "dorsal", "aws", "fenwick"] },
  { name: "Second year", sub: "2025 – 26 · leading teams", ids: ["lci", "ask", "formula", "product-space", "prizmich", "prodcon", "buzzit"] },
  { name: "Summer 2026", sub: "Plano, Texas", ids: ["capital-one"] },
  { name: "Now", sub: "Third year · graduating June 2028", ids: ["dcg"] }
];

const NS = "http://www.w3.org/2000/svg";
const svgEl = (n, a = {}, txt) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); if (txt != null) e.textContent = txt; return e; };
const board = document.getElementById("board"), card = document.getElementById("card"), legend = document.getElementById("legend"), timeline = document.getElementById("timeline");
const byId = Object.fromEntries(TILES.map((t, i) => [t.id, i]));
let selected = byId["capital-one"], filter = null;

function drawBoard() {
  const R = 58, W = Math.sqrt(3) * R, rows = [3, 4, 5, 4, 3], cx = 330, cy = 295;
  const hexPts = (x, y, r, rot, sy = 1) => [...Array(6)].map((_, k) => { const a = Math.PI / 180 * (60 * k + rot); return (x + r * Math.cos(a)).toFixed(1) + "," + (y + r * Math.sin(a) * sy).toFixed(1); }).join(" ");
  board.append(svgEl("polygon", { points: hexPts(cx, cy, 310, 0, .92), fill: "var(--sea)", stroke: "var(--ink)", "stroke-width": 2, "stroke-linejoin": "round" }));
  for (let i = 0; i < 14; i++) { const x = 70 + (i * 97) % 520, y = 40 + (i * 61) % 520; board.append(svgEl("path", { d: `M${x} ${y}q8 -6 16 0t16 0`, fill: "none", stroke: "#fff", "stroke-opacity": .25, "stroke-width": 2, "stroke-linecap": "round" })); }
  let i = 0;
  rows.forEach((n, r) => {
    for (let c = 0; c < n; c++, i++) {
      const tile = TILES[i], idx = i, x = cx - (n - 1) * W / 2 + c * W, y = cy + (r - 2) * 1.5 * R, ty = TYPES[tile.t];
      const g = svgEl("g", { class: "hex", tabindex: 0, role: "button", "aria-label": tile.title });
      g.append(svgEl("polygon", { points: hexPts(x, y, R, -30), fill: ty.c }));
      const tw = Math.max(34, tile.k.length * 10 + 16);
      g.append(svgEl("rect", { class: "tok", x: x - tw / 2, y: y - 27, width: tw, height: 30, rx: 15 }));
      g.append(svgEl("text", { class: "tokt", x, y: y - 6.5, "text-anchor": "middle" }, tile.k));
      g.append(svgEl("text", { class: "lbl" + (ty.dark ? " dark" : ""), x, y: y + 24, "text-anchor": "middle" }, tile.l));
      g.addEventListener("click", () => show(idx));
      g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(idx); } });
      tile.g = g; board.append(g);
    }
  });
}

function show(n) {
  selected = n;
  const t = TILES[n], ty = TYPES[t.t];
  TILES.forEach((x, k) => x.g.classList.toggle("sel", k === n));
  card.innerHTML = `<div class="tag"><i style="background:${ty.c}"></i>${ty.name}</div>
    <h2>${t.title}</h2><div class="role">${t.role}</div><div class="meta">${t.meta}</div>
    <p>${t.d}</p>
    ${t.sl ? `<div class="stat"><b>${t.k}</b><span>${t.sl}</span></div>` : ""}
    <div class="chips">${t.chips.map(c => `<span>${c}</span>`).join("")}</div>
    ${t.link ? `<a class="more" href="${t.link[1]}"${t.internal ? "" : ' target="_blank" rel="noopener"'}>${t.link[0]} →</a>` : ""}
    ${t.when ? `<a class="more" href="#${t.id}">See it in the timeline ↓</a>` : ""}`;
}

function drawLegend() {
  Object.entries(TYPES).filter(([k]) => k !== "desert").forEach(([k, v]) => {
    const b = document.createElement("button");
    b.innerHTML = `<i style="background:${v.c}"></i>${v.name}`;
    b.setAttribute("aria-pressed", "false");
    b.onclick = () => {
      filter = filter === k ? null : k;
      [...legend.children].forEach(x => { const on = x === b && !!filter; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on); });
      TILES.forEach(t => t.g.classList.toggle("dim", !!filter && t.t !== filter));
      if (filter && TILES[selected].t !== filter) show(TILES.findIndex(t => t.t === filter));
    };
    legend.append(b);
  });
}

function drawTimeline() {
  STAGES.forEach(s => {
    const h = document.createElement("h3");
    h.innerHTML = `${s.name}<small>${s.sub}</small>`;
    timeline.append(h);
    s.ids.forEach(id => {
      const t = TILES[byId[id]], a = document.createElement("article");
      a.className = "ev" + (t.win ? " win" : ""); a.id = id; a.style.setProperty("--c", TYPES[t.t].c);
      a.innerHTML = `<time>${t.when}</time><div class="body" tabindex="0" role="button" aria-label="Show ${t.title} on the board">
        <h4>${t.title}${t.win ? `<span class="badge">${t.win}</span>` : ""}</h4>
        <div class="role">${t.role}</div><p><b>${t.k}</b> ${t.sl}</p></div>`;
      const go = () => { show(byId[id]); document.getElementById("work").scrollIntoView({ behavior: "smooth" }); };
      const body = a.querySelector(".body");
      body.addEventListener("click", go);
      body.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
      timeline.append(a);
    });
  });
}

drawBoard(); drawLegend(); drawTimeline(); show(selected);
