# Execution Plan — Portfolio Revamp

> Operational companion to **REVAMP_PLAN.md**. The revamp doc is *what* and *why*. This doc is *how*, *in what order*, and *how do we know it's right*.

---

## 0. How to Use This Document

Every task below has the same shape:

```
  ID         — short tag for the task
  GOAL       — one sentence on what shipping this changes
  TOUCH      — exact files created / edited / deleted
  STEPS      — ordered actions (commands, edits)
  ACCEPTANCE — pass/fail conditions for "done"
  VERIFY     — how to confirm the acceptance is met (manual + automated)
  ROLLBACK   — how to undo if it goes sideways
  TIME       — rough effort estimate
```

**Sequencing rule**: complete `P1-T0` first, then work through Phase 1 in order. Phases 2 and 3 only start after the previous phase passes its **verification gate**. Don't skip the gates.

**Branching rule**: each task is a small commit on a single feature branch (`revamp/phase-1`, `revamp/phase-2`, `revamp/phase-3`). One PR per phase, not one PR for the whole revamp. Merging in phases means even a partial revamp ships value.

---

## 1. Pre-flight — Before Any Code

### P1-T0 — Lock Open Decisions

**GOAL**: kill ambiguity before edits begin. Every "decide later" multiplies rework cost.

**STEPS**:
1. Lock the six open decisions from REVAMP_PLAN.md §11. Write the answers in this file (replace the table below) before opening any other task.
2. Lock display + body fonts and acquire any licenses now (Phase 1 blocks on this).

**Decisions — LOCKED 2026-04-28**:

| # | Question | Locked answer |
| --- | --- | --- |
| 1 | Accent color | **`#FF5C28`** burnt orange |
| 2a | Display font | **Instrument Serif** (free, Google Fonts) |
| 2b | Body font | **Geist Sans** (free) — replaces Inter; fits since site deploys to Vercel |
| 3 | Headline variant | *"I take products from zero to ̶o̶n̶e̶ a hundred thousand."* |
| 3a | Headline loop behavior | Loop **2 cycles** after first paint, then settle on `a hundred thousand` and stop. No infinite loop. |
| 4 | Resume CTA in hero | No — moves to The Index |
| 4a | Resume filename | `Syed_Abdul_Aziz_Software_Engineer.pdf` |
| 5 | RAG demo in Phase 3 | **Draft / deferred.** Not in the current shipping scope. Revisit later if needed. |
| 6 | Custom domain | Defer — stays on `*.vercel.app` for Phase 1; revisit before Phase 3 |
| 7 | Testimonials | **Removed entirely.** No standalone Testimonials section. Inline case-study quotes also removed. |
| 8 | Blog / Field Notes | Section stays. **No fake dates, no fake URLs.** Each post tagged `[ DRAFTING ]`; section header reframed to *"Currently writing about"*. |
| 9 | Hosting | **Vercel.** Contact form uses **Vercel API route + Resend** (not Formspree). |
| 10 | Status pill copy | `● open to senior backend & full-stack roles · replies within 24h` |
| 11 | GitHub URL | `https://github.com/Azzzizzz` (was `StartDust`) |
| 12 | Twitter / X | Removed from `personalInfo.social`. |
| 13 | About + Testimonials as standalone sections | Dropped. About folds into Hero/Index. |

**ACCEPTANCE**: all six rows have a value. No "TBD."

**VERIFY**: `git diff Docs/EXECUTION_PLAN.md` shows answers committed.

**TIME**: 30 min.

---

### P1-T0a — Capture Baseline

**GOAL**: have a ground-truth "before" state to verify against later.

**STEPS**:
1. `mkdir -p Docs/screenshots/before`
2. Run dev server: `npm run dev`
3. Capture full-page screenshots at 1440×900 of every section: hero, about, experience, projects, skills, testimonials, blog, contact. Save as `Docs/screenshots/before/{section}.png`.
4. Run `npm run build` and capture the bundle stat:
   ```
   npm run build 2>&1 | tee Docs/baseline-build.txt
   ```
5. Run a Lighthouse pass on `npm run preview` (port 4173):
   ```
   npx lighthouse http://localhost:4173 --output=html --output-path=Docs/baseline-lighthouse.html --chrome-flags="--headless"
   ```

**ACCEPTANCE**: 8 baseline screenshots + `baseline-build.txt` + `baseline-lighthouse.html` all committed.

**VERIFY**: `ls Docs/screenshots/before/ | wc -l` returns ≥ 8.

**TIME**: 20 min.

---

### P1-T0c — Constants & Asset Cleanup (locked-decision content)

**GOAL**: land all the locked-decision content edits in `src/constants/index.js` and the public assets *before* component work, so every component task pulls correct data.

**TOUCH**: `src/constants/index.js`, `public/Syed_Abdul_Aziz_Software_Engineer.pdf` (new filename), wherever the resume URL is referenced.

**STEPS**:

1. **GitHub URL** — in `personalInfo.social`, change `https://github.com/StartDust` → `https://github.com/Azzzizzz`.
2. **Twitter** — remove the Twitter entry from `personalInfo.social` entirely. Also remove the `Twitter` import from `lucide-react` at the top of the file.
3. **Testimonials** — `export const testimonials = [];` (or delete the export entirely; check `Testimonials.jsx` import — it's being commented out in P1-T5 anyway).
4. **Blog reframe** — for each entry in `blogPosts`, remove `date` and `readTime` fields. Add `status: 'DRAFTING'`. Set `url: null` (or remove). Update the section header copy elsewhere to *"Currently writing about"* — the actual render change happens in Phase 2's P2-T4.
5. **Resume rename** — the file currently lives at `public/Syed Abdul Aziz - Software Engineer.pdf`. Rename it:
   ```bash
   mv "public/Syed Abdul Aziz - Software Engineer.pdf" "public/Syed_Abdul_Aziz_Software_Engineer.pdf"
   ```
6. **Resume URL references** — grep + replace:
   ```bash
   grep -rln "Syed Abdul Aziz - Software Engineer.pdf" src/
   ```
   For each match, update the URL to `/Syed_Abdul_Aziz_Software_Engineer.pdf`. Currently used in `Hero.jsx` line 67–69.

**ACCEPTANCE**:
- `npm run build` succeeds.
- `grep -rn "StartDust\|Twitter\|testimonials\|Syed Abdul Aziz - Software Engineer" src/ public/` returns no matches.
- Resume PDF still downloads at the new URL.

**VERIFY**:
```bash
ls public/ | grep -i resume\\\|Syed                             # confirm only the new filename exists
grep -rln "Azzzizzz" src/                                       # confirm new GitHub URL is in
grep -rln "github.com/StartDust" src/ && echo FAIL || echo PASS
```

**TIME**: 20 min.

---

### P1-T0b — Branch + Dependency Surgery

**GOAL**: clean dependency tree before adding features.

**STEPS**:
```bash
git checkout -b revamp/phase-1
npm uninstall react-parallax-tilt              # used in Experience.jsx — gone in revamp
npm install lenis                               # smooth scroll
npm install -D @vercel/analytics                # Phase 3 prep — install now to lock version
npm run build                                   # confirm clean build after deps change
```

**ACCEPTANCE**: `npm run build` succeeds. `react-parallax-tilt` no longer in `package.json`. `lenis` is in dependencies.

**VERIFY**: `grep -E '(react-parallax-tilt|lenis)' package.json` shows only `lenis`.

**ROLLBACK**: `git checkout main && git branch -D revamp/phase-1`.

**TIME**: 5 min.

---

## 2. Phase 1 — *The Bones* (target: 3–4 evenings, ~12 hours)

Goal of this phase: the portfolio is shippable to a recruiter today. The 0→1 + T-shape framing lands. Hero is rewritten. NativeX case study replaces the card grid. Contact form actually works.

### P1-T1 — Repaint the Design System

**GOAL**: replace cyan/violet with single accent. Replace HSL CSS vars where convenient. Update Tailwind tokens.

**TOUCH**: `src/index.css`, `tailwind.config.js`.

**STEPS**:

1. **Update `src/index.css`** — replace the `:root` block in `@layer base`:
   ```css
   :root {
     --surface-0: 240 7% 5%;     /* #0A0A0B */
     --surface-1: 240 7% 8%;     /* #111114 */
     --surface-2: 240 7% 11%;    /* #1A1A1F */
     --ink: 60 16% 95%;          /* #F5F4F0 — warm off-white */
     --ink-muted: 240 4% 56%;    /* #8B8B92 */
     --ink-faint: 240 5% 30%;    /* #4A4A52 */
     --edge: 0 0% 100% / 0.06;
     --accent: 14 100% 58%;      /* #FF5C28 burnt orange */
     --accent-ink: 240 7% 5%;    /* dark text on orange accent */
     --radius: 0.5rem;
   }
   ```
2. Replace `body` background — drop the radial-gradient blobs:
   ```css
   body {
     @apply bg-background text-foreground antialiased;
     font-family: 'Geist', 'Geist Sans', sans-serif;
     background-color: hsl(var(--surface-0));
   }
   ```
3. **Delete utility classes**: `.text-gradient-primary`, `.text-gradient-cyan`, `.text-gradient-violet`, `.glow-blob-cyan`, `.glow-blob-violet`, `.animate-gradient-x`.
4. **Add new utilities**:
   ```css
   .label-mono { @apply font-mono text-xs uppercase tracking-[0.2em] text-[hsl(var(--ink-muted))]; }
   .accent-text { color: hsl(var(--accent)); }
   .rule-faint { @apply h-px w-full bg-[hsl(var(--edge))]; }
   ```
5. **Update `tailwind.config.js`** — replace the `colors` block:
   ```js
   colors: {
     border: 'hsl(var(--edge))',
     surface: {
       0: 'hsl(var(--surface-0))',
       1: 'hsl(var(--surface-1))',
       2: 'hsl(var(--surface-2))',
     },
     ink: {
       DEFAULT: 'hsl(var(--ink))',
       muted: 'hsl(var(--ink-muted))',
       faint: 'hsl(var(--ink-faint))',
     },
     accent: {
       DEFAULT: 'hsl(var(--accent))',
       ink: 'hsl(var(--accent-ink))',
     },
     background: 'hsl(var(--surface-0))',
     foreground: 'hsl(var(--ink))',
   },
   ```
6. Delete the `obsidian`, `glass`, `neon`, `space` color groups. Delete `boxShadow.glow*` variants.
7. Delete keyframes: `blob`, `shimmer`, `gradient-x`, `glow-pulse`. Delete corresponding `animation` entries.
8. Update `fontFamily`:
   ```js
   fontFamily: {
     sans: ["'Geist'", "'Geist Sans'", "system-ui", "sans-serif"],
     display: ["'Instrument Serif'", "Georgia", "serif"],
     mono: ["'JetBrains Mono'", "monospace"],
   },
   ```
9. Replace the Google Fonts `@import` in `src/index.css` line 1 (Geist is on Google Fonts now):
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap');
   ```

**ACCEPTANCE**:
- `npm run build` succeeds.
- `npm run dev` shows the site rendering with Inter body + dark warm background. Headings still use old sizes — that's fine, fixed in next task.
- No console errors about missing CSS classes.

**VERIFY**:
```bash
grep -rn "neon-cyan\|neon-violet\|text-gradient\|animate-gradient-x\|glow-blob" src/  # should return no results
npm run build && npm run preview
```
Visual check: open `http://localhost:4173`, confirm body text renders in Inter.

**ROLLBACK**: `git restore src/index.css tailwind.config.js`.

**TIME**: 90 min.

---

### P1-T2 — Strip the Dead Decoration

**GOAL**: remove every component or line that signals "AI-generated dark mode template."

**TOUCH**: `src/components/Starfield.jsx` (delete), `src/App.jsx` (remove import), every component file (audit gradient-text, glow-blob, animate-pulse on decorative elements).

**STEPS**:
1. Delete `src/components/Starfield.jsx`.
2. In `src/App.jsx`, remove the Starfield import and the `<Starfield />` JSX node.
3. Search & remove offending classes/components:
   ```bash
   grep -rln "Starfield\|text-gradient-\|glow-blob-\|animate-gradient-x\|animate-pulse-slow\|neon-cyan\|neon-violet\|hover:scale-105\|react-parallax-tilt" src/
   ```
   For each match, edit the file and remove the class or replace per these substitutions:
   - `text-gradient-primary` → remove the wrapper `<span>`, render plain text.
   - `glow-blob-cyan|violet` → delete the `<div>`. (Background is now flat.)
   - `animate-gradient-x` → remove.
   - `hover:scale-105` → replace with `hover:-translate-y-0.5 transition-transform duration-300`.
   - `react-parallax-tilt` `<Tilt>` wrappers → remove the wrapper, keep its children.
4. In `src/components/Experience.jsx`, `Projects.jsx`, `About.jsx`: remove `animate-pulse` from any decorative `<div>` (keep on functional indicators only — there shouldn't be any).

**ACCEPTANCE**: the grep above returns zero matches.

**VERIFY**:
```bash
grep -rn "Starfield\|text-gradient\|glow-blob\|animate-gradient-x\|hover:scale-105\|react-parallax-tilt" src/ && echo FAIL || echo PASS
```

**TIME**: 45 min.

---

### P1-T3 — Rewrite the Hero

**GOAL**: ship the kinetic 0→1 headline. The portfolio's signature animation.

**TOUCH**: `src/components/Hero.jsx` (full rewrite).

**STEPS**:

1. Rewrite `Hero.jsx` from scratch. Reference structure:

```jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { personalInfo } from '@/constants';

// Loop sequence: one → a hundred thousand → one → a hundred thousand → SETTLE.
// Two full cycles, then stop on the final value. No infinite loop.
const HERO_SEQUENCE = ['one', 'a hundred thousand', 'one', 'a hundred thousand'];

export default function Hero() {
  const [step, setStep] = useState(0);
  const [time, setTime] = useState('');
  const settled = step >= HERO_SEQUENCE.length - 1;
  const value = HERO_SEQUENCE[Math.min(step, HERO_SEQUENCE.length - 1)];

  useEffect(() => {
    if (settled) return;
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 2000 : 2400);
    return () => clearTimeout(t);
  }, [step, settled]);

  useEffect(() => {
    const update = () => setTime(
      new Intl.DateTimeFormat('en-IN', {
        hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata'
      }).format(new Date()) + ' IST'
    );
    update();
    const t = setInterval(update, 30_000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Masthead rule */}
      <div className="border-b border-white/[0.06] px-6 py-4 flex justify-between items-center">
        <span className="label-mono">{personalInfo.name} — In Hyderabad</span>
        <span className="label-mono">{time}</span>
      </div>

      {/* Headline block — left aligned */}
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.95] tracking-tight"
        >
          I take products<br />
          from zero<br />
          to{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={value === 'a hundred thousand' ? 'accent-text italic' : 'line-through decoration-2'}
            >
              {value}
            </motion.span>
          </AnimatePresence>
          .
        </motion.h1>

        <div className="mt-12 flex items-center gap-4">
          <span className="rule-faint w-12" />
          <p className="label-mono">
            Full-stack engineer · backend-heavy · production AI<br />
            Hyderabad · 4+ yrs · open to senior / staff roles
          </p>
        </div>
      </div>

      {/* Status pill */}
      <div className="px-6 pb-8">
        <span className="label-mono inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          open to senior backend &amp; full-stack roles · replies within 24h
        </span>
      </div>
    </section>
  );
}
```

2. Confirm `personalInfo.name` exists in `src/constants/index.js` (it does).
3. Smoke test: dev server, watch the strikethrough swap every 6s.

**ACCEPTANCE**:
- Headline renders left-aligned in the display serif.
- Word swap animation (`one` → strikethrough → `a hundred thousand`) loops every 6s smoothly.
- Live IST time updates at least once on initial load.
- No buttons in the hero.
- Status pill visible at bottom.

**VERIFY** (manual):
- [ ] Visual matches §4.1 mockup in REVAMP_PLAN.md.
- [ ] Open DevTools → Performance → record 30s → confirm <60fps drops on the loop animation.
- [ ] `prefers-reduced-motion: reduce` (DevTools → Rendering → Emulate) freezes the loop on phase 0.
- [ ] Tab order: masthead text → headline → caption → status pill (all reachable, focus visible).
- [ ] Headline reflows correctly at 375px viewport (mobile) without horizontal scroll.

**ROLLBACK**: `git restore src/components/Hero.jsx`.

**TIME**: 2.5 hours (most of it iterating on the strikethrough timing until it feels right).

---

### P1-T4 — Build the Index Section

**GOAL**: ship the editorial table-of-contents. Highest-ROI new section in the entire revamp.

**TOUCH**: `src/components/Index.jsx` (new), `src/App.jsx` (add to layout), `src/constants/index.js` (add `indexEntries` data).

**STEPS**:

1. Append to `src/constants/index.js`:
   ```js
   export const indexEntries = [
     {
       num: '00',
       label: 'THE SHAPE',
       title: 'Backend-heavy full-stack. AI in production.',
       sub: 'Frontend roots. Three 0→1 builds shipped.',
       href: '#about',
     },
     {
       num: '01',
       label: 'NOW',
       title: 'Currently shipping: LLM evaluation engine',
       sub: 'Live → Esuahi / TikMe',
       href: '#now',
     },
     {
       num: '02',
       label: 'SELECTED WORK',
       title: 'Three systems, three 0→1 stories',
       sub: 'TikMe · NativeX · the AI layer',
       href: '#work',
     },
     {
       num: '03',
       label: 'THE STACK',
       title: "Where I'm deepest, where I'm broad",
       sub: 'Backend · AI · Infra · Data · Frontend',
       href: '#stack',
     },
     {
       num: '04',
       label: 'FIELD NOTES',
       title: 'Essays from the engine room',
       sub: 'Kafka · JWT · RAG',
       href: '#notes',
     },
     {
       num: '05',
       label: 'CONTACT',
       title: 'syedaziz9999@gmail.com',
       sub: '/resume.pdf ↓',
       href: '#contact',
     },
   ];
   ```

2. Create `src/components/Index.jsx`:
   ```jsx
   import { motion } from 'framer-motion';
   import { indexEntries } from '@/constants';

   export default function Index() {
     return (
       <section id="index" className="py-32 border-y border-white/[0.06]">
         <div className="container mx-auto px-6 max-w-5xl">
           <div className="flex justify-between mb-16">
             <span className="label-mono">Issue 01 / 2026</span>
             <span className="label-mono">Edition: Hiring</span>
           </div>
           <ol>
             {indexEntries.map((e, i) => (
               <motion.li
                 key={e.num}
                 initial={{ opacity: 0, y: 12 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: '-100px' }}
                 transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                 className="border-t border-white/[0.06] py-6 group"
               >
                 <a href={e.href} className="grid grid-cols-12 gap-6 items-baseline hover:[--accent-x:1] [--accent-x:0] transition-all">
                   <span className="col-span-1 label-mono">{e.num}</span>
                   <span className="col-span-3 label-mono accent-text">{e.label}</span>
                   <span className="col-span-6 font-display text-2xl md:text-3xl group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                     {e.title}
                   </span>
                   <span className="col-span-2 label-mono text-right opacity-0 group-hover:opacity-100 transition-opacity">
                     {e.sub}
                   </span>
                 </a>
               </motion.li>
             ))}
             <li className="border-t border-white/[0.06]" />
           </ol>
         </div>
       </section>
     );
   }
   ```

3. In `src/App.jsx`, add `<Index />` directly after `<Hero />`.

4. Smooth-scroll behavior: confirm anchor links work. (Lenis adds smooth scroll; native anchor jumps still work without JS.)

**ACCEPTANCE**:
- The Index section renders with masthead row + 6 entries + thin rules between rows.
- Hover on a row: title translates 8px right, sub-row fades in on the right.
- Click on a row: scrolls to the matching section anchor (some sections may not exist yet — that's fine, link can be `#contact` for now).
- Stagger animation: 80ms between row reveals on first scroll-into-view.

**VERIFY** (manual):
- [ ] Compare against §4.2 mockup in REVAMP_PLAN.md visually.
- [ ] All 6 rows appear; nothing wraps weirdly at 1280px.
- [ ] At 768px, layout collapses to single column (`md:grid-cols-12` — needs explicit mobile treatment, may require adjustment).

**TIME**: 90 min.

---

### P1-T5 — NativeX Case Study (the literal 0→1 story)

**GOAL**: replace the 3-card project grid with the strongest 0→1 case study. Single-section ship — the other two case studies come in Phase 2.

**TOUCH**: `src/components/Projects.jsx` (full rewrite), `src/constants/index.js` (extend).

**STEPS**:

1. In `src/constants/index.js`, add:
   ```js
   export const featuredCase = {
     id: 'nativex',
     num: '01',
     title: 'NativeX',
     period: '2023 — 2025',
     context: {
       startedFrom: 'Launch-day traffic. ~zero paid users.',
       endedAt: '100K+ trial users. 5K+ paid. Best Stand-alone Remote Contributor 2023.',
       myRole: 'Backend owner: Identity, Wallet, Scheduling, Notifications.',
     },
     problem: 'Brand-new EdTech platform shipping daily, on its way from launch to scale. The backend needed to grow from a working prototype into a system that survived 100x user growth without rewrites.',
     move: 'Owned four backend services end-to-end. Designed a high-throughput Kafka notification pipeline with idempotent delivery + Redis token-bucket rate limiting (500/min). Cut logging cost ~25% through targeted observability tuning.',
     numbers: [
       { value: '100K+', label: 'trial users' },
       { value: '5K+', label: 'paid users' },
       { value: '500/min', label: 'rate-limited notifs' },
       { value: '~25%', label: 'logging cost cut' },
     ],
     stack: ['NestJS', 'Kafka', 'Redis', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Next.js'],
   };
   ```
   (No `testimonial` field — testimonials removed per locked decision §7.)

2. Rewrite `src/components/Projects.jsx`:
   ```jsx
   import { motion } from 'framer-motion';
   import { featuredCase } from '@/constants';

   export default function Projects() {
     const c = featuredCase;
     return (
       <section id="work" className="py-32">
         <div className="container mx-auto px-6 max-w-6xl">
           <div className="mb-16">
             <span className="label-mono">02 / Selected Work</span>
             <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
               Three systems.<br />
               Three 0→1 stories.
             </h2>
           </div>

           <article className="border-t border-white/[0.06] pt-12">
             <header className="flex justify-between items-baseline mb-10">
               <h3 className="font-display text-4xl md:text-5xl">
                 <span className="label-mono accent-text mr-4">{c.num}</span>
                 {c.title}
               </h3>
               <span className="label-mono">{c.period}</span>
             </header>

             {/* Context block */}
             <dl className="grid md:grid-cols-3 gap-6 mb-12 font-mono text-sm">
               <div>
                 <dt className="label-mono mb-2">Started from</dt>
                 <dd className="text-ink-muted">{c.context.startedFrom}</dd>
               </div>
               <div>
                 <dt className="label-mono mb-2">Ended at</dt>
                 <dd className="text-ink-muted">{c.context.endedAt}</dd>
               </div>
               <div>
                 <dt className="label-mono mb-2">My role</dt>
                 <dd className="text-ink-muted">{c.context.myRole}</dd>
               </div>
             </dl>

             <div className="grid md:grid-cols-2 gap-12 mb-12">
               <div>
                 <p className="label-mono mb-4">The problem</p>
                 <p className="text-lg text-ink-muted leading-relaxed">{c.problem}</p>
                 <p className="label-mono mt-8 mb-4">The move</p>
                 <p className="text-lg text-ink-muted leading-relaxed">{c.move}</p>
               </div>

               <div className="grid grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] self-start">
                 {c.numbers.map((n) => (
                   <div key={n.label} className="bg-surface-0 p-6">
                     <div className="font-display text-4xl accent-text">{n.value}</div>
                     <div className="label-mono mt-2">{n.label}</div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="flex flex-wrap gap-2 label-mono">
               <span>Stack ·</span>
               {c.stack.map((s) => <span key={s} className="text-ink">{s}</span>)}
             </div>
           </article>
         </div>
       </section>
     );
   }
   ```

3. **Don't render the existing `Experience.jsx`, `Skills.jsx`, `Testimonials.jsx`, `Blog.jsx`, `About.jsx` yet** — comment them out in `App.jsx`. They get rebuilt in Phase 2.

**ACCEPTANCE**:
- Projects section shows ONE case study (NativeX) with: context block (3 cols), problem/move text (2 cols), numbers grid (2x2), stack chips at bottom.
- Numbers render in display font + accent color.
- No testimonial blockquote (removed per locked decision).
- No image. No card. No grid-of-cards.

**VERIFY** (manual):
- [ ] Open in browser. Compare layout to §4.3 mockup in REVAMP_PLAN.md.
- [ ] At 768px, columns stack correctly.
- [ ] Real metrics (`100K+`, `~25%`) render — these must match the actual values from PROFILE.md.

**TIME**: 2 hours.

---

### P1-T6 — Lenis Smooth Scroll

**GOAL**: ship the single biggest perceived-quality upgrade in the plan.

**TOUCH**: `src/main.jsx`, optionally a `src/lib/lenis.js` helper.

**STEPS**:

1. Create `src/lib/lenis.js`:
   ```js
   import Lenis from 'lenis';
   export function initLenis() {
     const lenis = new Lenis({
       duration: 1.2,
       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
     });
     function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
     requestAnimationFrame(raf);
     return lenis;
   }
   ```
2. In `src/main.jsx`, after the React root mount, call `initLenis()`. Only run if `!window.matchMedia('(prefers-reduced-motion: reduce)').matches`.
3. Add to `src/index.css`:
   ```css
   html.lenis,
   html.lenis body { height: auto; }
   .lenis.lenis-smooth { scroll-behavior: auto; }
   .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
   ```

**ACCEPTANCE**: scroll wheel + trackpad scroll feels weighted, with smooth easing into a stop. Anchor-link clicks (from the Index section) animate scroll smoothly.

**VERIFY**:
- [ ] Use the trackpad — feel the inertia.
- [ ] Click an Index row — page glides to target, doesn't jump.
- [ ] Toggle `prefers-reduced-motion: reduce` in DevTools — confirm Lenis disables, native scroll resumes.
- [ ] No layout shift; no scrollbar disappearance.

**TIME**: 30 min.

---

### P1-T7 — Wire Navbar + Kill Dead Links

**TOUCH**: `src/components/Navbar.jsx`.

**STEPS**:

1. Read current `Navbar.jsx`. Identify dead `href="#"` links and hard-coded social URLs.
2. Replace dead social URLs with values from `personalInfo.social` in constants.
3. Update navLinks rendered to match the **new** section IDs from The Index (`#now`, `#work`, `#stack`, `#notes`, `#contact`).
4. Mobile menu: identical wiring; no hard-coded `#`.
5. Logo / name: stays simple — no animation.

**ACCEPTANCE**: every interactive link in the navbar goes somewhere real (a section anchor on the page, or a real social URL).

**VERIFY**:
```bash
grep -E 'href="#"' src/components/Navbar.jsx && echo FAIL || echo PASS
```
Manual: click every nav link, confirm it scrolls or opens correctly.

**TIME**: 30 min.

---

### P1-T8 — Wire Contact Form (Vercel API + Resend)

**GOAL**: contact form delivers email to your inbox. Owned end-to-end via your own Vercel deployment + Resend's free tier (3K emails/mo, more than enough for a portfolio).

**TOUCH**: `api/contact.js` (new — Vercel serverless function), `src/components/Contact.jsx`, `package.json`.

**STEPS**:

1. Sign up at `resend.com`. Create an API key. Verify a sender domain or use Resend's `onboarding@resend.dev` test sender (fine for Phase 1).
2. Set Vercel env var `RESEND_API_KEY` via `vercel env add RESEND_API_KEY` (production + preview). **Never commit the key.**
3. `npm install resend`.
4. Create `api/contact.js` (Vercel auto-detects this as a serverless function — no `vercel.json` needed):
   ```js
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export default async function handler(req, res) {
     if (req.method !== 'POST') return res.status(405).end();
     const { name, email, message } = req.body ?? {};
     if (!name || !email || !message) return res.status(400).json({ error: 'missing fields' });
     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'bad email' });
     if (message.length > 4000) return res.status(400).json({ error: 'too long' });

     try {
       await resend.emails.send({
         from: 'Portfolio <onboarding@resend.dev>',
         to: 'syedaziz9999@gmail.com',
         replyTo: email,
         subject: `Portfolio · ${name}`,
         text: `From: ${name} <${email}>\n\n${message}`,
       });
       return res.status(200).json({ ok: true });
     } catch (e) {
       return res.status(500).json({ error: 'send failed' });
     }
   }
   ```
5. Rewrite `Contact.jsx` `onSubmit`:
   ```jsx
   async function onSubmit(e) {
     e.preventDefault();
     setStatus('sending');
     const fd = new FormData(e.currentTarget);
     const body = Object.fromEntries(fd);
     const r = await fetch('/api/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(body),
     });
     setStatus(r.ok ? 'sent' : 'error');
   }
   ```
6. After `sent`, smoothly transform the form into a *"Got it. I reply within 24h."* card. Don't redirect; mutate the same DOM node with `<AnimatePresence>`.
7. Remove the public-facing phone number from this section.

**ACCEPTANCE**: submit a test form on the Vercel preview → email arrives at `syedaziz9999@gmail.com`. Form transitions to success state without page reload.

**VERIFY**:
- [ ] On the deployed preview URL, submit a real test message. Email lands.
- [ ] Submit with bad email or empty fields — server returns 400, client shows error.
- [ ] `git log -p api/contact.js` does NOT contain the API key.
- [ ] `vercel env ls` shows `RESEND_API_KEY` in production + preview.

**ROLLBACK**: `git restore src/components/Contact.jsx && rm api/contact.js`.

**TIME**: 60 min (most of it is Resend + Vercel env setup, not code).

---

### P1-T9 — Hide Phone, Tighten Constants

**TOUCH**: `src/constants/index.js`, anywhere phone is rendered.

**STEPS**:
1. Remove `phone` from any rendered output. (Keep it in the constants for resume use, but don't render it on the public site.)
2. `grep -rn "phone" src/components/` — for each match, delete the JSX node that renders it.

**ACCEPTANCE**: phone number does not appear in the rendered HTML.

**VERIFY**:
```bash
npm run build && grep -r "8328082973" dist/ && echo FAIL || echo PASS
```

**TIME**: 10 min.

---

### P1-GATE — Phase 1 Verification Gate

**Don't proceed to Phase 2 until every box is ticked.**

#### Visual
- [ ] All 9 baseline screenshots have a corresponding "after" capture in `Docs/screenshots/after-phase-1/`.
- [ ] Hero matches REVAMP_PLAN.md §4.1 mockup at 1440×900.
- [ ] Index matches §4.2.
- [ ] NativeX case study matches §4.3 NativeX block.
- [ ] No cyan, no violet, no gradient text anywhere on the page.
- [ ] No starfield, no blob backgrounds, no animate-pulse on decoration.

#### Functional
- [ ] Every Index row link scrolls to a real section.
- [ ] Every Navbar link scrolls or opens correctly. No `href="#"`.
- [ ] Hero strikethrough loop runs ≥ 3 cycles without jank.
- [ ] Live IST time updates within 30s of page load.
- [ ] Contact form submits; email arrives at `syedaziz9999@gmail.com`.
- [ ] Resume PDF download still works (linked from Index, not hero).

#### Performance
- [ ] `npm run build` succeeds; bundle size delta vs baseline reported in `Docs/phase-1-build.txt`.
- [ ] Lighthouse desktop: Performance ≥ 95, Accessibility ≥ 95, Best Practices = 100, SEO ≥ 95. Save report as `Docs/phase-1-lighthouse.html`.
- [ ] No console errors or warnings on load.

#### Accessibility
- [ ] Keyboard tab order: masthead → headline → caption → status → Index rows (in order) → navbar.
- [ ] Every interactive element has visible `:focus-visible` ring.
- [ ] `prefers-reduced-motion: reduce` disables the hero loop and Lenis.
- [ ] Color contrast: ink on surface-0 ≥ 7:1. Verify with DevTools.

#### Sniff Test (REVAMP_PLAN.md §12)
- [ ] Each new section has at least one specific number, name, or quote nobody else has.
- [ ] Layouts vary — not all centered, not all 3-col grids.
- [ ] Vocabulary stays inside the "lean into" list; no banned phrases.
- [ ] A reviewer who didn't write the code couldn't immediately tell you used AI assistance.

#### Mobile
- [ ] At 375×812, no horizontal scroll on any section.
- [ ] Hero headline reflows; doesn't shrink.
- [ ] Navbar collapses to mobile menu and links work.

**If any box fails, fix it before opening the Phase 2 PR.**

---

## 3. Phase 2 — *The Proof* (target: 4–5 evenings, ~16 hours)

Goal of this phase: the portfolio gets you the interview. Two more case studies, the fused Stack section, animated diagrams.

### P2-T1 — TikMe Case Study + Animated Architecture Diagram

**GOAL**: ship the hardest visual on the site. The architecture diagram is the screenshot people share.

**TOUCH**: `src/components/cases/TikMe.jsx` (new), `src/constants/index.js` (extend), `src/components/Projects.jsx` (compose).

**STEPS**:
1. Refactor `Projects.jsx` to render multiple `<CaseStudy />` blocks. Extract the layout from P1-T5 into a shared `<CaseStudy />` component in `src/components/cases/CaseStudy.jsx`.
2. Add `tikmeCase` to `constants/index.js` mirroring `featuredCase` shape.
3. Build `src/components/cases/TikMe.jsx` — wraps `<CaseStudy />` and adds a custom `<TikMeArchDiagram />` SVG between the context block and the problem/move text.
4. The SVG: hand-author it. Nodes: `Apollo Federation Gateway`, `Auth`, `Chat`, `Media`, `Real-Time`, `Evaluation`, with `Kafka` as a horizontal bus and `Redis` + `Postgres` at the bottom. Use `<motion.path>` with `pathLength` animated 0 → 1 on `whileInView`. Stagger node fade-ins.
5. Use `useScroll` + `useTransform` to tie path drawing to scroll position (more polished than once-only `whileInView`).

**ACCEPTANCE**: scroll into the TikMe section → arrows draw progressively as the section enters view → nodes pop in. Reverse-scrolling does not re-trigger (use `once: true`).

**VERIFY**: visual + Performance tab confirms paint stays smooth (≥55fps).

**TIME**: 5 hours (the SVG alone is 2h).

---

### P2-T2 — LLM Eval + RAG Merged Case Study

**TOUCH**: `src/components/cases/AILayer.jsx` (new), constants.

**STEPS**:
1. Add `aiLayerCase` to constants — same shape as the others.
2. Build a two-column spread: left = mono code block with rubric prompt template + a synthetic "evaluation result" mini-card; right = the RAG flow mock with typewriter on the GPT-4o stream answer.
3. Typewriter: a small custom hook `useTypewriter(text, speed)` cycling characters with `setTimeout`. ~30ms per char.
4. The synthetic eval result: hard-coded values that *look* live: `Score: 7.2 · Cost: $0.0043 · Latency: 1.8s`. Refresh-on-scroll-back into view to feel alive.

**ACCEPTANCE**: both visuals render and animate. Typewriter completes in ≤4s, then halts.

**TIME**: 3.5 hours.

---

### P2-T3 — Build Fused Stack Section

**TOUCH**: `src/components/Stack.jsx` (new), constants, App.jsx.

**STEPS**:
1. Add `stackTimeline` and `stackDepth` arrays to `constants/index.js`. `stackDepth` shape:
   ```js
   { layer: 'AI / LLM', depth: 0.85, tech: ['OpenAI', 'Claude', 'RAG', 'MCP', 'Evals'] }
   ```
2. Build a horizontal timeline up top — three eras (`Topica · NativeX · Esuahi`), with the FE→BE transition labeled.
3. Below: render the stack-depth chart. Each row: layer name (mono), bar (width = `depth * 100%`), tech list (mono).
4. Bar: render with SVG `<rect>` + `motion.rect` `width: 0 → depth%` on scroll-into-view, 1.2s expo-out. Color: `accent` for `depth > 0.6`, `ink-muted` otherwise.
5. Below the chart, the closing line about the T-shape.

**ACCEPTANCE**: timeline draws horizontally on scroll-in. Bars fill bottom-up. Visual matches §4.4.

**TIME**: 3.5 hours.

---

### P2-T4 — Field Notes (single-column list)

**TOUCH**: `src/components/Blog.jsx` (full rewrite, rename component to `FieldNotes` if you want; not required).

**STEPS**:
1. Replace card grid with vertical list of entries.
2. No images. Each entry: date · readtime line, title, excerpt, READ → tag, mono category.
3. No entry animation (per §5: this section is intentionally still).
4. Hover: title underlines accent.

**ACCEPTANCE**: list renders, no images load, no card lifts.

**TIME**: 1 hour.

---

### P2-T5 — Custom Cursor

**TOUCH**: `src/components/Cursor.jsx` (new), `src/App.jsx`.

**STEPS**:
1. Build a 2-element cursor: a small dot + a larger ring, both with `mix-blend-mode: difference`.
2. Track mouse position with a `useEffect` listener; spring the ring with Framer Motion's `useSpring`.
3. Grow the ring on hover over `a, button, input, textarea, [role="button"]`.
4. Hide on touch devices: `@media (pointer: coarse) { .cursor { display: none; } }`.

**ACCEPTANCE**: cursor renders, lags slightly behind the real cursor, grows on interactive hover.

**VERIFY**:
- [ ] No janky stutter at 60Hz.
- [ ] On touch devices (DevTools toggle), the custom cursor is hidden.

**TIME**: 1.5 hours.

---

### P2-T6 — View-Source Easter Egg

**TOUCH**: `index.html`.

**STEPS**: add an HTML comment immediately after `<!doctype html>`:
```html
<!--
  Hello. If you're reading this, you're my kind of person.
  Resume: /resume.pdf
  Hire me: syedaziz9999@gmail.com
-->
```

**ACCEPTANCE**: comment ships in production (build) HTML.

**VERIFY**:
```bash
npm run build && grep -A4 "Hello\." dist/index.html && echo PASS || echo FAIL
```

**TIME**: 5 min.

---

### P2-T7 — Lighthouse Pass to 100/100/100/100

**STEPS** (in priority order, stop when targets met):
1. Tree-shake Framer Motion: replace `framer-motion` imports with `framer-motion/m` and use the `LazyMotion` wrapper.
2. Lazy-load `Stack` and case-study components: `const Stack = lazy(() => import('./Stack'))`. Wrap in `<Suspense>`.
3. Use `<picture>` with `loading="lazy"` for any decorative image; explicit `width`/`height` everywhere.
4. Remove unused Tailwind utilities — confirm content paths in `tailwind.config.js` are tight.
5. Add font preload for Instrument Serif:
   ```html
   <link rel="preload" href="..." as="font" type="font/woff2" crossorigin>
   ```
6. If LCP still > 1.8s on slow-3G simulation: split the Hero out of the main bundle and render it eagerly while suspending the rest.

**ACCEPTANCE**: Lighthouse desktop = 100/100/100/100. Mobile ≥ 95 across the board.

**VERIFY**: save the Lighthouse report as `Docs/phase-2-lighthouse.html`.

**TIME**: 2 hours of measure → fix → measure cycle.

---

### P2-GATE — Phase 2 Verification Gate

#### Visual
- [ ] All three case studies render with distinct alternating layouts (visual-left, visual-right, full-bleed).
- [ ] TikMe architecture diagram strokes draw on scroll-in.
- [ ] Stack section: timeline + depth chart, T-shape clearly visible.
- [ ] Field Notes: no images, no cards. Just a list.
- [ ] Custom cursor present on desktop, absent on touch.

#### Functional
- [ ] All animations respect `prefers-reduced-motion`.
- [ ] No animation re-triggers on every scroll-back.
- [ ] Typewriter in AI Layer case study halts cleanly (no infinite loop).
- [ ] View-source easter egg present in built HTML.

#### Performance
- [ ] Lighthouse desktop: 100/100/100/100. Report committed.
- [ ] First-paint JS bundle < 120KB gzipped.
- [ ] No element triggers CLS > 0.05.

#### Sniff Test
- [ ] Sniff test from REVAMP_PLAN.md §12 passes for every section.
- [ ] A reviewer can identify three specific, real metrics on the page within 10 seconds.

---

## 4. Phase 3 — *The Kill Shot* (target: 2–3 evenings, ~9 hours)

### P3-T1 — Embedded RAG "Ask My Portfolio" Demo *(Draft / Deferred)*

**GOAL**: the most differentiated feature on the site. A working RAG over Syed's career corpus.

**STATUS**: Draft only. Removed from the current build by request. Do not treat this as active scope for the current ship.

**TOUCH**: `api/ask.js` (new — Vercel Edge Function), `src/components/AskMe.jsx`, an embedded knowledge base.

**STEPS**:
1. Build the corpus: take `Docs/PROFILE.md`, chunk into ~500-token sections, embed via `text-embedding-3-small`, store as a JSON file `src/lib/rag-index.json` (committed to repo — small enough). One-time, runs locally:
   ```bash
   node scripts/build-rag-index.js
   ```
2. Build `api/ask.js` (Vercel Edge runtime):
   - POST `{ question: string }`.
   - Embed the question, cosine-similarity vs corpus, take top-3 chunks.
   - Stream a GPT-4o response with the chunks injected as context.
   - System prompt: "You answer questions about Syed Abdul Aziz's career strictly from the provided context. If unknown, say 'I don't know about that — email Syed directly.'"
3. Build `<AskMe />` component: input + streaming output area. Use `EventSource` or `fetch` + `ReadableStream`.
4. Rate limit: cookie-based, 5 questions per session. Server-side: IP-based 20/hour via Vercel KV.
5. Embed in Contact section above the form.

**ACCEPTANCE**:
- Asking "Why did you choose Cerbos over Casbin?" returns a streaming, contextually-grounded answer in <3s to first token.
- Asking "What's your favorite ice cream?" returns the polite "I don't know" fallback.
- 6th question in a session is blocked with a friendly message.

**VERIFY**:
- [ ] Manual: ask 5 real career questions, confirm answers cite the right context.
- [ ] Inspect network tab — confirm streaming chunks arrive progressively.
- [ ] Confirm OpenAI API key is in Vercel env vars, NOT in the repo.

**TIME**: 5 hours.

---

### P3-T2 — Reading-Mode Case-Study Routes

**GOAL**: clicking "READ FULL CASE STUDY →" opens a cream-paper deep-dive page.

**TOUCH**: install `react-router-dom`, restructure `App.jsx` into routes, add `src/routes/Case.jsx`.

**STEPS**:
1. `npm install react-router-dom`.
2. Add routes: `/` (current portfolio), `/case/:slug` (case study reading mode).
3. `Case.jsx` renders the case study on a cream `--surface-0: 60 22% 92%` (light theme override scoped to `<main data-theme="reading">`).
4. Add a "← back to portfolio" link top-left.
5. Reading content for each case lives in `src/cases/{slug}.mdx` — install `@mdx-js/rollup` to author in MDX.

**ACCEPTANCE**: navigating to `/case/nativex` loads the long-form spread on cream paper.

**TIME**: 3 hours.

---

### P3-T3 — `now.json` + NOW Row Wiring

**TOUCH**: `public/now.json`, `src/components/Index.jsx`.

**STEPS**:
1. Create `public/now.json`:
   ```json
   { "title": "Currently shipping: LLM evaluation engine", "url": "...", "updated": "2026-04-28" }
   ```
2. In `Index.jsx`, fetch `/now.json` on mount with a 1-day cache (browser default fine), render into the `01 NOW` row.
3. Stamp last-updated date next to the row.

**ACCEPTANCE**: NOW row content updates when `public/now.json` changes — no JSX edit needed.

**TIME**: 30 min.

---

### P3-T4 — `prefers-reduced-motion` Audit

**STEPS**:
1. Wrap every Framer Motion `motion.X` with reduced-motion fallback (Framer Motion supports this natively via `useReducedMotion`).
2. Lenis: already gated (P1-T6). Confirm it stays disabled.
3. Custom cursor: hide entirely under reduced motion.
4. Architecture diagram: skip path draw, render final state.

**ACCEPTANCE**: with `prefers-reduced-motion: reduce`, the page is fully usable, all content visible, no animation.

**TIME**: 1 hour.

---

### P3-T5 — Analytics + Domain

**STEPS**:
1. Add `@vercel/analytics` to `App.jsx`.
2. Deploy to Vercel. Set custom domain (locked decision from P1-T0).
3. Verify SSL, www → apex redirect, robots.txt, sitemap.xml (auto-generated by Vercel).

**ACCEPTANCE**: site lives at chosen domain, analytics events firing.

**TIME**: 1 hour.

---

### P3-GATE — Phase 3 Final Ship Gate

#### Functional
- [ ] RAG demo answers 5 different career questions accurately.
- [ ] RAG rate limit triggers at the 6th question.
- [ ] Case-study routes load in reading mode.
- [ ] NOW row updates from `now.json`.
- [ ] Reduced motion is bulletproof — no animation triggers.

#### Production
- [ ] Site deployed to custom domain over HTTPS.
- [ ] Analytics events visible in Vercel dashboard.
- [ ] OpenAI API key in env vars, NOT in commits (`git log -p | grep -i "sk-"` returns nothing).
- [ ] Resume PDF accessible at `/resume.pdf`.

#### Marketing readiness
- [ ] Open Graph meta tags set for the homepage and each case study.
- [ ] Twitter card preview tested via `cards-dev.twitter.com/validator`.
- [ ] LinkedIn share preview tested via `linkedin.com/post-inspector`.
- [ ] Resume PDF download works from at least three paths.

---

## 5. Cross-Cutting Verification Standards

These run at every phase gate, not just at the end.

### Browser / Device Matrix
| Browser | OS | Viewport | Required pass |
| --- | --- | --- | --- |
| Chrome latest | macOS | 1440×900 | All visuals match mockups |
| Safari latest | macOS | 1440×900 | All visuals match mockups |
| Firefox latest | macOS | 1440×900 | All visuals match mockups |
| Chrome | iOS | 390×844 | No horizontal scroll, mobile menu works |
| Safari | iOS | 390×844 | No horizontal scroll, font renders |
| Chrome | Android | 412×915 | No horizontal scroll, form submits |

If a layout breaks in Safari but not Chrome (Webkit lags on flexbox edge cases), fix it. Don't ship Safari-broken sites.

### Accessibility Verification (every gate)
1. Run axe-core against the deployed site:
   ```bash
   npx @axe-core/cli http://localhost:4173 --save Docs/axe-{phase}.json
   ```
   Target: zero "critical" or "serious" violations. Fix all of them.
2. Keyboard-only nav: tab from page top to bottom, confirm logical order, every interactive element visible focus.
3. Screen reader spot check: VoiceOver on macOS — read the hero, the index, one case study. Confirm:
   - Section headings announce in order.
   - The kinetic strikethrough does NOT announce repeatedly (apply `aria-live="off"` and `aria-hidden` to the rotating word).
   - Status pill announces availability once.

### Performance Verification (every gate)
1. Lighthouse desktop + mobile (use the Vercel preview URL, not localhost — closer to prod conditions).
2. Targets per phase:
   - **Phase 1**: ≥95/95/100/95 (perf/a11y/best/seo) desktop.
   - **Phase 2**: 100/100/100/100 desktop, ≥95 across all on mobile.
   - **Phase 3**: 100/100/100/100 desktop and mobile.
3. WebPageTest run for Phase 3: capture filmstrip, confirm LCP < 1.5s on a 4G profile.

### Visual Regression
- Save full-page screenshots at each gate to `Docs/screenshots/after-phase-{N}/`.
- Diff against the previous phase manually. Document intentional changes; reject unintentional ones.

---

## 6. Rollback Strategy

Each phase is a separate PR on a separate branch. Rollback options, in order of preference:

1. **Per-task rollback**: `git revert <task-commit>` if a single task broke something.
2. **Per-phase rollback**: revert the merge commit for the phase PR. Site reverts to previous phase.
3. **Full rollback**: `git checkout main && git push --force-with-lease origin main` to a known-good tag (created at the end of each phase gate). Use only as last resort.

After every passed gate, tag the commit:
```bash
git tag -a portfolio-phase-1-shipped -m "Phase 1 verified" && git push origin --tags
```

---

## 7. Pre-Ship Final Checklist

The day you announce the new portfolio:

- [ ] All three phase gates passed and documented.
- [ ] Custom domain live, HTTPS green, redirects clean.
- [ ] Resume PDF up to date at `/resume.pdf`.
- [ ] Email at `syedaziz9999@gmail.com` reachable; test via the contact form one more time.
- [ ] LinkedIn featured-post link updated to point at the new domain.
- [ ] GitHub profile pinned-repos: the portfolio repo at top.
- [ ] First post (LinkedIn or X) drafted: lead with one specific signature feature ("a portfolio you can ask questions to") not "I redesigned my portfolio."
- [ ] `Docs/screenshots/` has before + after for every phase, committed.
- [ ] Every box in REVAMP_PLAN.md §12 (sniff test) passes for every section.
- [ ] Read the homepage out loud, top to bottom. Cut anything that sounds like marketing copy.

---

## 8. Time Budget Summary

| Phase | Hours | Calendar |
| --- | --- | --- |
| Pre-flight | ~1 | Single sitting |
| Phase 1 | ~12 | 3–4 evenings |
| Phase 2 | ~16 | 4–5 evenings |
| Phase 3 | ~9 | 2–3 evenings |
| Slack / verification | ~6 | Ongoing |
| **Total** | **~44 hours** | **~3 weeks of evenings** |

If the calendar slips, ship Phase 1 alone and call it shipped. The job-search version of "perfect is the enemy of done" is "phase 2 is the enemy of phase 1 already deployed."

---

*Drafted 2026-04-28. Operational companion to REVAMP_PLAN.md. Update as tasks land.*
