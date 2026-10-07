/* ===== BEP2O Study Hub — app logic ===== */
"use strict";

const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
const LETTERS = ["A", "B", "C", "D", "E", "F"];
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ---------- juice: count-up + confetti ---------- */
function animateCount(el, target, dur = 950) {
  if (!el) return;
  const dec = Number.isInteger(target) ? 0 : 1;
  const t0 = performance.now();
  (function frame(t) {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(dec);
    if (p < 1) requestAnimationFrame(frame);
  })(t0);
}
function confetti() {
  const c = document.createElement("canvas");
  c.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:9999";
  document.body.appendChild(c);
  c.width = innerWidth; c.height = innerHeight;
  const ctx = c.getContext("2d");
  const colors = ["#5b5be6", "#8b5cf6", "#d946ef", "#f59e0b", "#10b981", "#38bdf8"];
  const P = Array.from({ length: 130 }, () => ({
    x: Math.random() * c.width, y: -30 - Math.random() * c.height * .4,
    w: 5 + Math.random() * 7, h: 8 + Math.random() * 9,
    vy: 2.2 + Math.random() * 3.6, vx: -1.6 + Math.random() * 3.2,
    rot: Math.random() * Math.PI, vr: -.16 + Math.random() * .32,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  const t0 = performance.now();
  (function frame(t) {
    ctx.clearRect(0, 0, c.width, c.height);
    P.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    });
    if (t - t0 < 2800 && P.some(p => p.y < c.height + 40)) requestAnimationFrame(frame);
    else c.remove();
  })(t0);
}
/* keyboard handler slots (removed on every route render) */
let quizKb = null, fcKb = null;

/* ---------- persistence ---------- */
const KEY = "bep2o_study_v1";
function loadStore() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
}
function saveStore(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
let store = loadStore();
store.attempts = store.attempts || [];
store.quizStats = store.quizStats || {};

/* ---------- theme ---------- */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", store.theme || "light");
  $("#themeToggle").textContent = (store.theme === "dark") ? "☀️" : "🌙";
}
$("#themeToggle").addEventListener("click", () => {
  store.theme = (store.theme === "dark") ? "light" : "dark";
  saveStore(store); applyTheme();
});

/* ---------- router ---------- */
const routes = {
  home: viewHome,
  notes: viewNotes,
  flashcards: viewFlashcards,
  quizzes: viewQuizList,
  quiz: viewQuiz,
  mock: viewMockList,
  exam: viewExam
};
window.addEventListener("hashchange", render);

function render() {
  if (quizKb) { document.removeEventListener("keydown", quizKb); quizKb = null; }
  if (fcKb) { document.removeEventListener("keydown", fcKb); fcKb = null; }
  const hash = location.hash.replace(/^#\//, "") || "home";
  const parts = hash.split("/");
  const page = parts[0] || "home";
  window.scrollTo(0, 0);
  const fn = routes[page] || viewHome;
  fn(parts.slice(1));
  const titles = { home: "BEP2O Unit 1 — Study Hub", notes: "Study Notes — BEP2O Unit 1", flashcards: "Flashcards — BEP2O Unit 1", quizzes: "Topic Quizzes — BEP2O Unit 1", quiz: "Quiz — BEP2O Unit 1", mock: "Mock Tests — BEP2O Unit 1", exam: "Mock Test — BEP2O Unit 1" };
  document.title = titles[page] || titles.home;
  $$("#mainnav a").forEach(a => {
    const nav = a.getAttribute("data-nav");
    a.classList.toggle("active", nav === page || (page === "quiz" && nav === "quizzes") || (page === "exam" && nav === "mock"));
  });
}

/* ================= HOME ================= */
function viewHome() {
  const attempts = store.attempts.slice(-6).reverse();
  const best = attempts.length ? Math.max(...store.attempts.map(a => a.score / a.max)) : 0;
  const quizDone = Object.keys(store.quizStats).length;
  const app = $("#app");
  app.innerHTML = `
  <section class="hero">
    <span class="hero-float">📚</span>
    <h1>Unit 1 Study Hub</h1>
    <p>Everything from Lessons 2–10 (Types of Business → Supply &amp; Demand), rebuilt to match your test format: 40 marks — multiple choice, matching, profit calculations, short answers, and the CSR long answer.</p>
    <div class="hero-actions">
      <a class="btn primary" href="#/mock">Start a Mock Test →</a>
      <a class="btn ghost" href="#/notes/types-of-business">Read the Notes</a>
      <a class="btn ghost" href="#/flashcards">Flashcards</a>
    </div>
  </section>

  <div class="stat-row">
    <div class="stat"><div class="num">${store.attempts.length}</div><div class="lbl">Mock tests written</div></div>
    <div class="stat"><div class="num">${Math.round(best * 100)}%</div><div class="lbl">Best mock score</div></div>
    <div class="stat"><div class="num">${quizDone}/6</div><div class="lbl">Topic quizzes tried</div></div>
    <div class="stat"><div class="num">40</div><div class="lbl">Marks on the real test</div></div>
  </div>

  <div class="grid cols-2">
    <div class="card">
      <h2 class="mt0">📋 The test format <span class="pill">from your study guide</span></h2>
      <table class="marktable">
        <tr><th>Section</th><th>What's on it</th><th>Marks</th></tr>
        <tr><td><b>Knowledge &amp; Understanding</b></td><td>12 multiple choice + 9 matching</td><td><b>21</b></td></tr>
        <tr><td><b>Thinking</b></td><td>Calculating revenue, expenses, and profit/loss</td><td><b>5</b></td></tr>
        <tr><td><b>Communication</b></td><td>Short answers — choose 2 of 4. Topics: <i>Partnerships · Maslow · Trends vs Fads · Opportunity Cost</i></td><td><b>8</b></td></tr>
        <tr><td><b>Application</b></td><td>Long answer: <b>CSR</b> — the 5 CSR principles applied to a business scenario</td><td><b>6</b></td></tr>
      </table>
    </div>
    <div class="card">
      <h2 class="mt0">✅ Study checklist</h2>
      <ul class="checklist">
        <li>Profit formula: <b>Profit = Revenue − Expenses − Costs</b> — practice with both profit AND loss</li>
        <li>The 5 forms of ownership + <b>unlimited vs limited liability</b></li>
        <li>Maslow's 5 levels <b>in order</b> + products vs. advertising levels</li>
        <li><b>Trends vs fads</b> — definitions, examples, why it matters to businesses</li>
        <li><b>Opportunity cost</b> + scarcity — be ready with an example</li>
        <li><b>5 CSR principles</b> with a specific example for each</li>
        <li>Supply &amp; demand laws, equilibrium, surplus vs shortage</li>
      </ul>
    </div>
  </div>

  <div class="grid cols-2">
    <div class="card">
      <h2 class="mt0">📝 Your mock test history</h2>
      ${attempts.length ? attempts.map(a => `
        <div class="attempt-row">
          <span class="score">${a.score}/${a.max}</span>
          <span>${esc(a.test)}<br><small style="color:var(--muted)">${esc(a.date)}</small></span>
          <div class="bar-wrap"><div class="bar" style="width:${Math.round(a.score / a.max * 100)}%"></div></div>
          <a class="btn small ghost" href="#/exam/${a.id}-review">Review</a>
        </div>`).join("")
      : `<div class="empty-state"><span class="big-icon">🎯</span>No mock tests yet — write Mock Test A and your results will appear here.</div>`}
      ${store.attempts.length ? `<p style="margin-top:12px"><button class="btn small" id="resetProg">Reset all progress</button></p>` : ""}
    </div>
    <div class="card">
      <h2 class="mt0">🧠 How to use this site</h2>
      <table class="marktable">
        <tr><td><b>1. Read</b></td><td>Skim the <a href="#/notes/types-of-business">study notes</a> for each topic (15 min each). Focus on the formula boxes and 🎯 callouts — they flag exactly what your test format rewards.</td></tr>
        <tr><td><b>2. Drill</b></td><td>Do the <a href="#/quizzes">topic quizzes</a> — instant feedback on every question. Repeat any topic below 80%.</td></tr>
        <tr><td><b>3. Memorize</b></td><td>Run the <a href="#/flashcards">flashcards</a> the night before — matching questions are pure vocabulary.</td></tr>
        <tr><td><b>4. Simulate</b></td><td>Write <a href="#/mock">Mock Test A</a> under time pressure, review every miss, then try Mock Test B.</td></tr>
      </table>
      <div class="callout">✍️ <b>Written answers:</b> complete sentences, name the concept, then give a specific example. For CSR, walk through all 5 principles — that's where the 6 marks live.</div>
    </div>
  </div>`;

  const r = $("#resetProg");
  if (r) r.addEventListener("click", () => {
    if (confirm("Delete all mock test attempts and quiz scores?")) {
      store.attempts = []; store.quizStats = {}; saveStore(store); viewHome();
    }
  });
}

/* ================= NOTES ================= */
function viewNotes(args) {
  const id = args[0] || NOTES[0].id;
  const idx = Math.max(0, NOTES.findIndex(n => n.id === id));
  const topic = NOTES[idx];
  const prev = NOTES[idx - 1], next = NOTES[idx + 1];
  $("#app").innerHTML = `
  <div class="notes-layout">
    <aside class="notes-sidebar">
      <div class="side-head">Unit 1 · Lessons 2–10</div>
      ${NOTES.map(n => `<a href="#/notes/${n.id}" class="${n.id === topic.id ? "active" : ""}">${n.icon} ${esc(n.title)}</a>`).join("")}
    </aside>
    <article class="card">
      <span class="pill">${esc(topic.source)}</span>
      <h1>${topic.icon} ${esc(topic.title)}</h1>
      ${topic.html}
      <div class="topic-nav-bottom">
        ${prev ? `<a class="btn" href="#/notes/${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}
        <a class="btn ghost" href="#/quiz/${topic.quizId || quizForTopic(topic.id)}">Practice this topic →</a>
        ${next ? `<a class="btn primary" href="#/notes/${next.id}">${esc(next.title)} →</a>` : "<span></span>"}
      </div>
    </article>
  </div>`;
}
function quizForTopic(topicId) {
  const q = TOPIC_QUIZZES.find(t => t.topicId === topicId);
  return q ? q.id : TOPIC_QUIZZES[0].id;
}

/* ================= FLASHCARDS ================= */
let fcState = null;
function viewFlashcards() {
  const app = $("#app");
  if (!fcState) fcState = { deck: FLASHCARD_DECKS[0].id, i: 0, flipped: false, known: {}, order: null };
  const deck = FLASHCARD_DECKS.find(d => d.id === fcState.deck);
  if (fcState.i >= deck.cards.length) fcState.i = 0;
  const order = fcState.order || deck.cards.map((_, i) => i);
  const cardIdx = order[fcState.i];
  const card = deck.cards[cardIdx];
  app.innerHTML = `
  <h1>Flashcards ⚡</h1>
  <p class="subtitle">Click the card to flip. Use “Got it” / “Still learning” to cycle through the deck — great prep for the 9 matching questions.</p>
  <div class="fc-controls">
    ${FLASHCARD_DECKS.map(d => `<button class="btn small ${d.id === fcState.deck ? "primary" : ""}" data-deck="${d.id}">${d.icon} ${esc(d.title)} (${d.cards.length})</button>`).join("")}
  </div>
  <div class="fc-controls" style="margin-top:0">
    <button class="btn small" id="fcShuffle">🔀 Shuffle</button>
    <button class="btn small" id="fcReset">↺ Start over</button>
    <span class="fc-progress">Card ${fcState.i + 1} of ${deck.cards.length} · <span id="fcKnown">✔ ${fcState.known[deck.id] || 0} marked known</span></span>
  </div>
  <div class="fc-stage">
    <div class="fc-card ${fcState.flipped ? "flipped" : ""}" id="fcCard">
      <div class="fc-face">
        <span class="fc-label">Term</span>
        <div class="fc-text">${esc(card.f)}</div>
        <span class="fc-hint">click to reveal definition</span>
      </div>
      <div class="fc-face back">
        <span class="fc-label">Definition</span>
        <div class="fc-text">${esc(card.b)}</div>
        <span class="fc-hint">click to flip back</span>
      </div>
    </div>
  </div>
  <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:18px">
    <button class="btn" id="fcPrev">← Back</button>
    <button class="btn" id="fcAgain" style="border-color:var(--red);color:var(--red)">✗ Still learning</button>
    <button class="btn" id="fcKnow" style="border-color:var(--green);color:var(--green)">✓ Got it</button>
    <button class="btn" id="fcNext">Next →</button>
  </div>`;

  $$("[data-deck]").forEach(b => b.addEventListener("click", () => {
    fcState = { deck: b.dataset.deck, i: 0, flipped: false, known: fcState.known, order: null };
    viewFlashcards();
  }));
  $("#fcCard").addEventListener("click", () => { fcState.flipped = !fcState.flipped; viewFlashcards(); });
  $("#fcPrev").addEventListener("click", () => { fcState.i = Math.max(0, fcState.i - 1); fcState.flipped = false; viewFlashcards(); });
  $("#fcNext").addEventListener("click", () => { fcState.i = (fcState.i + 1) % deck.cards.length; fcState.flipped = false; viewFlashcards(); });
  $("#fcShuffle").addEventListener("click", () => {
    const arr = deck.cards.map((_, i) => i);
    for (let j = arr.length - 1; j > 0; j--) { const k = Math.floor(Math.random() * (j + 1)); [arr[j], arr[k]] = [arr[k], arr[j]]; }
    fcState.order = arr; fcState.i = 0; fcState.flipped = false; viewFlashcards();
  });
  $("#fcReset").addEventListener("click", () => { fcState.order = null; fcState.i = 0; fcState.flipped = false; fcState.known[deck.id] = 0; viewFlashcards(); });
  $("#fcKnow").addEventListener("click", () => {
    fcState.known[deck.id] = (fcState.known[deck.id] || 0) + 1;
    fcState.i = (fcState.i + 1) % deck.cards.length; fcState.flipped = false; viewFlashcards();
  });
  $("#fcAgain").addEventListener("click", () => {
    // push this card to the end so it comes back around
    const o = (fcState.order || deck.cards.map((_, i) => i)).slice();
    const cur = o.splice(fcState.i, 1)[0];
    if (fcState.i >= o.length) fcState.i = 0;
    o.push(cur);
    fcState.order = o; fcState.flipped = false; viewFlashcards();
  });

  /* keyboard: ← → to move, Space/Enter to flip */
  fcKb = (ev) => {
    if (ev.key === "ArrowRight") { ev.preventDefault(); $("#fcNext").click(); }
    else if (ev.key === "ArrowLeft") { ev.preventDefault(); $("#fcPrev").click(); }
    else if (ev.key === " " || ev.key === "Enter") { ev.preventDefault(); $("#fcCard").click(); }
  };
  document.addEventListener("keydown", fcKb);
}

/* ================= TOPIC QUIZZES ================= */
function viewQuizList() {
  $("#app").innerHTML = `
  <h1>Topic Quizzes 🎯</h1>
  <p class="subtitle">Short drills with instant feedback and explanations. Aim for 80%+ on each before writing a mock test.</p>
  <div class="grid cols-2">
    ${TOPIC_QUIZZES.map(q => {
      const st = store.quizStats[q.id];
      return `
      <div class="card topic-card">
        <div class="t-icon">${q.icon}</div>
        <div style="flex:1">
          <h3>${esc(q.title)}</h3>
          <p>${esc(q.blurb)}</p>
          <div class="badge-row">
            <span class="pill">${q.questions.length} questions</span>
            ${st ? `<span class="pill ${st.best / q.questions.length >= 0.8 ? "green" : "amber"}">best: ${st.best}/${q.questions.length}</span>
                    <span class="pill">last: ${st.last}/${q.questions.length}</span>` : `<span class="pill amber">not tried yet</span>`}
          </div>
          <p style="margin-top:10px"><a class="btn primary small" href="#/quiz/${q.id}">${st ? "Retry quiz" : "Start quiz"} →</a></p>
        </div>
      </div>`;
    }).join("")}
  </div>`;
}

let quizState = null;
function viewQuiz(args) {
  const quiz = TOPIC_QUIZZES.find(t => t.id === args[0]) || TOPIC_QUIZZES[0];
  if (!quizState || quizState.quizId !== quiz.id) {
    quizState = { quizId: quiz.id, i: 0, score: 0, answers: [], picked: null, locked: false };
  }
  const q = quiz.questions[quizState.i];
  const total = quiz.questions.length;
  const st = quizState;
  const app = $("#app");

  if (st.i >= total) {
    const pct = Math.round(st.score / total * 100);
    const msg = pct >= 80 ? "Excellent — you're ready on this topic! 🎉" : pct >= 60 ? "Good — review the explanations, then retry. 💪" : "Keep working — reread the notes for this topic, then retry. 📖";
    const stats = store.quizStats[quiz.id] || { best: 0, last: 0 };
    stats.last = st.score;
    stats.best = Math.max(stats.best || 0, st.score);
    store.quizStats[quiz.id] = stats; saveStore(store);
    app.innerHTML = `
      <div class="card score-hero">
        <h1 class="mt0">${quiz.icon} ${esc(quiz.title)} — results</h1>
        <div class="big"><span id="qCount">0</span><span class="unit">/${total}</span></div>
        <div class="progress-track" style="max-width:340px;margin:10px auto 18px"><div class="fill" style="width:${pct}%"></div></div>
        <p style="font-weight:700">${msg}</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:14px">
          <button class="btn primary" id="qRetry">↺ Retry quiz</button>
          <a class="btn" href="#/notes/${quiz.topicId}">Review notes</a>
          <a class="btn ghost" href="#/quizzes">All quizzes</a>
        </div>
      </div>
      <h2>Review every question</h2>
      ${quiz.questions.map((qq, i) => {
        const picked = st.answers[i];
        const ok = picked === qq.a;
        return `<div class="review-item">
          <span class="verdict ${ok ? "ok" : "no"}">${ok ? "✔ CORRECT" : "✘ REVIEW THIS"}</span>
          <p style="margin:6px 0"><b>Q${i + 1}. ${qq.q}</b></p>
          <p class="yourans">Correct answer: <b>${LETTERS[qq.a]}. ${esc(qq.choices[qq.a])}</b>${!ok && picked != null ? ` · you picked: ${esc(qq.choices[picked])}` : ""}</p>
          <p style="margin:4px 0">${esc(qq.explain)}</p>
        </div>`;
      }).join("")}`;
    animateCount($("#qCount"), st.score);
    if (pct >= 80) confetti();
    $("#qRetry").addEventListener("click", () => { quizState = null; viewQuiz(args); });
    return;
  }

  app.innerHTML = `
  <div class="card">
    <div class="sec-tag">${quiz.icon} ${esc(quiz.title)} <span class="marks">Question ${st.i + 1} of ${total} · score ${st.score}</span></div>
    <div class="progress-track"><div class="fill" style="width:${Math.round(st.i / total * 100)}%"></div></div>
    <p class="quiz-q">${q.q}</p>
    <div id="choices">
      ${q.choices.map((c, i) => `<div class="choice ${st.locked && i === q.a ? "correct" : ""} ${st.locked && i === st.picked && i !== q.a ? "wrong" : ""}" data-i="${i}">
        <span class="letter">${LETTERS[i]}</span><span>${esc(c)}</span></div>`).join("")}
    </div>
    <div class="feedback ${st.locked ? (st.picked === q.a ? "good show" : "bad show") : ""}" id="fb">
      ${st.locked ? `<b>${st.picked === q.a ? "✔ Correct!" : "✘ Not quite — the answer is " + LETTERS[q.a] + "."}</b> ${esc(q.explain)}` : ""}
    </div>
    <div style="display:flex;justify-content:space-between;margin-top:16px">
      <a class="btn ghost" href="#/quizzes">Exit</a>
      ${st.locked ? `<button class="btn primary" id="qNext">${st.i + 1 === total ? "See results →" : "Next question →"}</button>` : `<span class="btn" style="visibility:hidden">Next</span>`}
    </div>
  </div>`;

  if (!st.locked) {
    $$("#choices .choice").forEach(el => el.addEventListener("click", () => {
      const s = quizState;                 /* live state — robust to re-renders */
      if (!s || s.locked) return;
      const cur = quiz.questions[s.i];
      s.picked = +el.dataset.i;
      s.answers[s.i] = s.picked;
      if (s.picked === cur.a) s.score++;
      s.locked = true;
      viewQuiz(args);
    }));
  } else {
    $("#qNext").addEventListener("click", () => {
      st.i++; st.picked = null; st.locked = false;
      viewQuiz(args);
    });
  }

  /* keyboard: 1-4 to answer, Enter/→ for next */
  quizKb = (ev) => {
    if (ev.key >= "1" && ev.key <= "4" && !st.locked) {
      const el = $(`.choice[data-i="${+ev.key - 1}"]`);
      if (el) el.click();
    } else if ((ev.key === "Enter" || ev.key === "ArrowRight") && st.locked) {
      const n = $("#qNext");
      if (n) n.click();
    }
  };
  document.addEventListener("keydown", quizKb);
}

/* ================= MOCK TESTS ================= */
function viewMockList() {
  $("#app").innerHTML = `
  <h1>Mock Tests 📝</h1>
  <p class="subtitle">Each mock test mirrors the real 40-mark format exactly: 12 MC (12) · 9 matching (9) · profit calculations (5) · short answers, choose 2 of 4 (8) · CSR long answer (6). Written parts include a marking rubric and a model answer for self-scoring.</p>
  <div class="grid cols-2">
    ${MOCK_TESTS.map(t => {
      const last = store.attempts.filter(a => a.id.startsWith(t.id)).slice(-1)[0];
      return `<div class="card topic-card">
        <div class="t-icon">🧪</div>
        <div style="flex:1">
          <h3>${esc(t.title)}</h3>
          <p>${esc(t.intro)}</p>
          ${last ? `<div class="badge-row"><span class="pill">last attempt: ${last.score}/${last.max}</span> <a class="btn small ghost" href="#/exam/${last.id}">Review answers</a></div>` : ""}
          <p style="margin-top:10px"><a class="btn primary" href="#/exam/${t.id}">Start ${esc(t.title)} →</a></p>
        </div>
      </div>`;
    }).join("")}
  </div>
  <div class="callout">⏱️ A 50-minute timer starts when you begin — the real test gives you about that long. The timer won't cut you off; it's there to build your pacing.</div>`;
}

let exam = null;
let examTimerInt = null;

function viewExam(args) {
  if (examTimerInt) { clearInterval(examTimerInt); examTimerInt = null; }
  const key = args[0] || "";
  const testId = key.replace(/-review$/, "");
  const isReview = key.endsWith("-review");
  const test = MOCK_TESTS.find(t => t.id === testId);

  if (!test) { location.hash = "#/mock"; return; }

  /* restore a saved attempt for review */
  if (isReview) {
    const saved = store.attempts.find(a => a.id === key);
    if (!saved) { location.hash = "#/mock"; return; }
    renderExamReview(test, saved);
    return;
  }

  if (!exam || exam.testId !== testId || exam.finished) {
    const termOrder = shuffle(test.matching.terms.map((_, i) => i));
    exam = {
      testId, sec: 0, finished: false, startTs: Date.now(),
      mc: {}, match: {}, calc: {}, calcType: {},
      saPicked: [], saText: {}, saScore: {},
      csrText: "", csrScore: null,
      termOrder
    };
  }
  const e = exam;
  const secs = ["Knowledge & Understanding — Multiple Choice (12 marks)", "Knowledge & Understanding — Matching (9 marks)", "Thinking — Profit Calculations (5 marks)", "Communication — Short Answers · choose 2 of 4 (8 marks)", "Application — CSR Long Answer (6 marks)"];

  const timer = `<div class="exam-header">
    <div><b>🧪 ${esc(test.title)}</b> <span class="marks" style="color:var(--muted)">· Section ${e.sec + 1} of 5: ${secs[e.sec]}</span></div>
    <div style="display:flex;gap:8px;align-items:center">
      <span class="timer" id="examTimer">⏱ 50:00</span>
      ${e.sec === 4 ? `<button class="btn primary" id="examSubmit">Submit test ✔</button>` : `<button class="btn primary" id="examNext">Next section →</button>`}
    </div>
  </div>`;

  let body = "";
  if (e.sec === 0) {
    body = test.mc.map((q, i) => `
      <div class="q-block">
        <div class="q-head"><span class="q-num">${i + 1}.</span><span style="flex:1">${q.q}</span></div>
        ${q.choices.map((c, j) => `<div class="choice ${e.mc[i] === j ? "selected" : ""}" data-mc-q="${i}" data-mc-c="${j}">
          <span class="letter">${LETTERS[j]}</span><span>${esc(c)}</span></div>`).join("")}
      </div>`).join("");
  } else if (e.sec === 1) {
    const opts = e.termOrder.map(ti => `<option value="${ti}" ${e.match[ti] !== undefined && false ? "" : ""}></option>`);
    body = `<p>${test.matching.instructions}</p>` + test.matching.items.map((item, i) => `
      <div class="match-row">
        <span class="q-num">${i + 1}.</span>
        <span class="m-def">${item.def}</span>
        <select data-match="${i}">
          <option value="">— choose a term —</option>
          ${e.termOrder.map(ti => `<option value="${ti}" ${e.match[i] === ti ? "selected" : ""}>${esc(test.matching.terms[ti])}</option>`).join("")}
        </select>
      </div>`).join("");
    body += `<div class="callout">💡 Each term is used <b>at most once</b> — cross out the ones you've placed.</div>`;
  } else if (e.sec === 2) {
    body = test.calc.map((c, i) => `
      <div class="q-block">
        <div class="sec-tag">Question ${i + 1} <span class="marks">(${c.marks} marks)</span></div>
        <p>${c.prompt}</p>
        <div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-top:8px">
          <label style="font-weight:700">This is a:
            <select data-calctype="${i}" style="padding:8px 10px;border-radius:9px;border:1.5px solid var(--border);background:var(--surface);color:var(--text);font-family:inherit;margin-left:6px">
              <option value="" ${!e.calcType[i] ? "selected" : ""}>— profit or loss? —</option>
              <option value="profit" ${e.calcType[i] === "profit" ? "selected" : ""}>Profit</option>
              <option value="loss" ${e.calcType[i] === "loss" ? "selected" : ""}>Loss</option>
            </select>
          </label>
          <label style="font-weight:700">Amount: $ <input class="numinput" type="number" step="0.01" data-calc="${i}" value="${e.calc[i] != null ? e.calc[i] : ""}" placeholder="0.00"></label>
        </div>
      </div>`).join("");
    body += `<div class="callout">✍️ On the real test, <b>write the formula</b> (Profit = Revenue − Expenses − Costs) before your answer — the 5 marks include showing your work.</div>`;
  } else if (e.sec === 3) {
    body = `<p>${test.short.instructions}</p>
    <p style="font-weight:700">Step 1 — pick your 2 questions <span class="marks" style="color:var(--muted)">(click to select)</span>:</p>
    ${test.short.questions.map((sq, i) => `
      <div class="sa-pick ${e.saPicked.includes(i) ? "picked" : ""} ${e.saPicked.length >= 2 && !e.saPicked.includes(i) ? "disabled" : ""}" data-sa="${i}">
        <b>${LETTERS[i]}. ${sq.title}</b> <span class="marks" style="color:var(--muted)">(4 marks)</span>
        <p style="margin:6px 0 0">${sq.prompt}</p>
      </div>`).join("")}`;
    body += e.saPicked.map(i => {
      const sq = test.short.questions[i];
      return `<div class="q-block" style="border-color:var(--primary)">
      <div class="sec-tag">${LETTERS[i]}. ${sq.title} <span class="marks">(4 marks)</span></div>
      <p>${sq.prompt}</p>
      <textarea class="answer" data-satext="${i}" placeholder="Write your answer in complete sentences…">${esc(e.saText[i] || "")}</textarea>
      <p><b>Marking guide:</b></p>
      <ul class="rubric">${sq.rubric.map(r => `<li>${r}</li>`).join("")}</ul>
      <button class="btn small" data-model="${i}">👁 Show model answer</button>
      <div class="model-answer" id="model-${i}"><b>Model answer:</b><br>${sq.model}</div>
      <div class="selfscore">Self-score: 
        <select data-sascore="${i}">
          <option value="" ${e.saScore[i] == null ? "selected" : ""}>— score yourself /4 —</option>
          ${[0, 1, 2, 3, 4].map(n => `<option value="${n}" ${e.saScore[i] === n ? "selected" : ""}>${n} / 4</option>`).join("")}
        </select>
        <span style="color:var(--muted);font-weight:400">compare your answer to the model &amp; rubric — be honest, this trains you for the real thing</span>
      </div>
    </div>`;
    }).join("");
  } else if (e.sec === 4) {
    body = `
      <div class="example"><div class="ex-title">The scenario</div>${test.csr.scenario}</div>
      <p><b>${test.csr.prompt}</b></p>
      <textarea class="answer" id="csrText" style="min-height:220px" placeholder="Name each of the 5 CSR principles, then give a specific action for each…">${esc(e.csrText)}</textarea>
      <p><b>Marking guide (6 marks):</b></p>
      <ul class="rubric">${test.csr.rubric.map(r => `<li>${r}</li>`).join("")}</ul>
      <button class="btn small" id="csrModelBtn">👁 Show model answer</button>
      <div class="model-answer" id="csrModel"><b>Model answer:</b><br>${test.csr.model}</div>
      <div class="selfscore">Self-score:
        <select id="csrScore">
          <option value="" ${e.csrScore == null ? "selected" : ""}>— score yourself /6 —</option>
          ${[0, 1, 2, 3, 4, 5, 6].map(n => `<option value="${n}" ${e.csrScore === n ? "selected" : ""}>${n} / 6</option>`).join("")}
        </select>
      </div>`;
  }

  $("#app").innerHTML = timer + `<div class="card">${body}</div>
    <div style="display:flex;justify-content:space-between;margin-top:6px">
      ${e.sec > 0 ? `<button class="btn" id="examPrev">← Previous section</button>` : `<a class="btn ghost" href="#/mock">Exit test</a>`}
      <span></span>
    </div>`;

  /* timer */
  const limit = 50 * 60 * 1000;
  const tick = () => {
    const el = $("#examTimer");
    if (!el) return;
    const left = limit - (Date.now() - e.startTs);
    if (left <= 0) { el.textContent = "⏰ Time! Finish up & submit"; el.classList.add("warn"); clearInterval(examTimerInt); examTimerInt = null; return; }
    const m = Math.floor(left / 60000), s = Math.floor(left % 60000 / 1000);
    el.textContent = `⏱ ${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    if (m < 8) el.classList.add("warn");
  };
  tick(); examTimerInt = setInterval(tick, 1000);

  /* wire events */
  $$("[data-mc-q]").forEach(el => el.addEventListener("click", () => {
    e.mc[el.dataset.mcQ] = +el.dataset.mcC;
    const q = el.dataset.mcQ;
    $$(`[data-mc-q="${q}"]`).forEach(x => x.classList.toggle("selected", x === el));
  }));
  $$("[data-match]").forEach(el => el.addEventListener("change", () => {
    const idx = +el.dataset.match;
    e.match[idx] = el.value === "" ? undefined : +el.value;
  }));
  $$("[data-calc]").forEach(el => el.addEventListener("input", () => { e.calc[el.dataset.calc] = el.value === "" ? undefined : +el.value; }));
  $$("[data-calctype]").forEach(el => el.addEventListener("change", () => { e.calcType[el.dataset.calctype] = el.value || undefined; }));
  $$("[data-sa]").forEach(el => el.addEventListener("click", () => {
    const i = +el.dataset.sa;
    if (e.saPicked.includes(i)) { e.saPicked = e.saPicked.filter(x => x !== i); }
    else if (e.saPicked.length < 2) { e.saPicked.push(i); }
    viewExam(args);
  }));
  $$("[data-satext]").forEach(el => el.addEventListener("input", () => { e.saText[el.dataset.satext] = el.value; }));
  $$("[data-sascore]").forEach(el => el.addEventListener("change", () => { e.saScore[el.dataset.sascore] = el.value === "" ? null : +el.value; }));
  $$("[data-model]").forEach(el => el.addEventListener("click", () => $("#model-" + el.dataset.model).classList.toggle("show")));
  const csrT = $("#csrText");
  if (csrT) {
    csrT.addEventListener("input", () => { e.csrText = csrT.value; });
    $("#csrModelBtn").addEventListener("click", () => $("#csrModel").classList.toggle("show"));
    $("#csrScore").addEventListener("change", ev => { e.csrScore = ev.target.value === "" ? null : +ev.target.value; });
  }
  const nx = $("#examNext");
  if (nx) nx.addEventListener("click", () => {
    if (e.sec === 3 && e.saPicked.length !== 2) { alert("Pick exactly 2 short-answer questions before moving on."); return; }
    if (e.sec === 4) { submitExam(test); return; }
    e.sec++; viewExam(args);
  });
  const pv = $("#examPrev");
  if (pv) pv.addEventListener("click", () => { e.sec--; viewExam(args); });
  const sub = $("#examSubmit");
  if (sub) sub.addEventListener("click", () => submitExam(test));
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function submitExam(test) {
  const e = exam;
  if (e.sec === 3 && e.saPicked.length !== 2) { alert("Pick exactly 2 short-answer questions first."); e.sec = 3; viewExam([test.id]); return; }
  /* grade auto sections */
  let ku = 0;
  const mcDetail = test.mc.map((q, i) => {
    const ok = e.mc[i] === q.a; if (ok) ku++;
    return { q: q.q, choices: q.choices, a: q.a, picked: e.mc[i], ok, explain: q.explain };
  });
  const matchDetail = test.matching.items.map((item, i) => {
    const ok = e.match[i] === item.a; if (ok) ku++;
    return { def: item.def, a: test.matching.terms[item.a], picked: e.match[i] != null ? test.matching.terms[e.match[i]] : null, ok };
  });
  let think = 0;
  const calcDetail = test.calc.map((c, i) => {
    const num = e.calc[i];
    const type = e.calcType[i] || (num != null ? c.type : "");
    let earned = 0;
    if (num != null && Math.abs(num - c.answer) < 0.01) earned = (type === c.type) ? c.marks : c.marks / 2;
    think += earned;
    return { prompt: c.prompt, solution: c.solution, answer: c.answer, type: c.type, earned, marks: c.marks, pickedNum: num != null ? num : null, pickedType: type };
  });

  const sa1 = e.saPicked[0], sa2 = e.saPicked[1];
  const comm = (e.saScore[sa1] || 0) + (e.saScore[sa2] || 0);
  const appl = e.csrScore || 0;
  const total = Math.round((ku + think + comm + appl) * 2) / 2;

  const attempt = {
    id: test.id + "-" + Date.now(),
    test: test.title, date: new Date().toLocaleString(),
    score: total, max: 40,
    cats: { ku: Math.round(ku), think, comm, appl },
    mcDetail, matchDetail, calcDetail,
    sa: { picked: [sa1, sa2], scores: [e.saScore[sa1] || 0, e.saScore[sa2] || 0] },
    csrScore: appl
  };
  store.attempts.push(attempt);
  saveStore(store);
  exam.finished = true;
  if (examTimerInt) { clearInterval(examTimerInt); examTimerInt = null; }
  renderExamReview(test, attempt);
}

function renderExamReview(test, a) {
  const c = a.cats;
  $("#app").innerHTML = `
  <div class="card score-hero">
    <h1 class="mt0">🧪 ${esc(a.test)} — Result</h1>
    <div class="big"><span id="rCount">0</span><span class="unit">/40</span></div>
    <div class="progress-track" style="max-width:380px;margin:10px auto 20px"><div class="fill" style="width:${Math.round(a.score / 40 * 100)}%"></div></div>
    <div style="max-width:520px;margin:0 auto;text-align:left">
      <div class="result-cat"><span class="cname">Knowledge &amp; Understanding (MC + matching)</span><span class="cscore">${c.ku}/21</span></div>
      <div class="result-cat"><span class="cname">Thinking — profit calculations</span><span class="cscore">${c.think}/5</span></div>
      <div class="result-cat"><span class="cname">Communication — short answers (self-scored)</span><span class="cscore">${c.comm}/8</span></div>
      <div class="result-cat"><span class="cname">Application — CSR (self-scored)</span><span class="cscore">${c.appl}/6</span></div>
    </div>
    <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <a class="btn primary" href="#/mock">Try the other mock test →</a>
      <a class="btn" href="#/quizzes">Drill weak topics</a>
      <a class="btn ghost" href="#/home">Home</a>
    </div>
  </div>

  <div class="callout">📖 <b>What to do now:</b> read every ✘ below and the explanation. For the written sections, compare honestly with the model answers — the real test grades the same rubrics.</div>

  <h2>Multiple choice (auto-graded)</h2>
  ${a.mcDetail.map((d, i) => `
    <div class="review-item">
      <span class="verdict ${d.ok ? "ok" : "no"}">${d.ok ? "✔ 1/1" : "✘ 0/1"}</span>
      <p style="margin:6px 0"><b>Q${i + 1}. ${d.q}</b></p>
      <p class="yourans">Correct: <b>${LETTERS[d.a]}. ${esc(d.choices[d.a])}</b>${!d.ok ? ` · you picked: ${d.picked != null ? esc(d.choices[d.picked]) : "—"}` : ""}</p>
      <p style="margin:4px 0">${esc(d.explain)}</p>
    </div>`).join("")}

  <h2>Matching (auto-graded)</h2>
  ${a.matchDetail.map((d, i) => `
    <div class="review-item">
      <span class="verdict ${d.ok ? "ok" : "no"}">${d.ok ? "✔ 1/1" : "✘ 0/1"}</span>
      <p style="margin:6px 0"><b>${i + 1}. ${d.def}</b></p>
      <p class="yourans">Correct term: <b>${esc(d.a)}</b>${!d.ok ? ` · you wrote: ${esc(d.picked || "—")}` : ""}</p>
    </div>`).join("")}

  <h2>Thinking — calculations (auto-graded)</h2>
  ${a.calcDetail.map((d, i) => `
    <div class="review-item">
      <span class="verdict ${d.earned === d.marks ? "ok" : (d.earned > 0 ? "" : "no")}">${d.earned}/${d.marks} marks</span>
      <p style="margin:6px 0"><b>Q${i + 1}. ${d.prompt}</b></p>
      ${d.pickedNum != null ? `<p class="yourans">You entered: $${d.pickedNum} (${esc(d.pickedType || "type not chosen")})</p>` : `<p class="yourans">You left this blank.</p>`}
      <div class="model-answer show"><b>Solution:</b><br>${d.solution}</div>
    </div>`).join("")}

  <h2>Communication — short answers (self-scored)</h2>
  ${a.sa.picked.filter(x => x != null).map((pi, k) => {
    const sq = test.short.questions[pi];
    return `<div class="review-item">
      <span class="verdict ${a.sa.scores[k] >= 3 ? "ok" : "no"}">${a.sa.scores[k]}/4 (self-scored)</span>
      <p style="margin:6px 0"><b>${sq.title}:</b> ${sq.prompt}</p>
      <div class="model-answer show"><b>Model answer:</b><br>${sq.model}</div>
    </div>`;
  }).join("")}

  <h2>Application — CSR (self-scored)</h2>
  <div class="review-item">
    <span class="verdict ${a.csrScore >= 5 ? "ok" : "no"}">${a.csrScore}/6 (self-scored)</span>
    <p style="margin:6px 0"><b>${test.csr.prompt}</b></p>
    <div class="model-answer show"><b>Model answer:</b><br>${test.csr.model}</div>
  </div>`;

  animateCount($("#rCount"), a.score, 1100);
  if (a.score / 40 >= 0.8) confetti();
}

/* ---------- boot ---------- */
applyTheme();
render();

/* scroll effects: glass bar shadow + back-to-top */
const topbar = $("#topbar"), toTop = $("#toTop");
window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", scrollY > 8);
  toTop.classList.toggle("show", scrollY > 480);
}, { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
