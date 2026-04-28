# Portfolio Revamp Plan — Syed Abdul Aziz

> **Intent**: Move from "good dark portfolio" to **a portfolio that gets you the interview before you finish saying hello**. Editorial, opinionated, undeniably human-crafted. Built like a product, not a template.

---

## 0. The Brutal Honesty Audit

Before we redesign, name what's wrong. The current portfolio is *competent* but *forgettable* — it has every cliché of a 2024 dev portfolio:

| Symptom | Why it screams "AI-generated" |
| --- | --- |
| Hero says **"Building the Future"** | Every dev portfolio says this. It's noise. |
| Three identical project cards in a 3-col grid | Looks like every Vercel template clone. |
| Stat row: `4+ Years`, `6+ Services`, `100K+ Users` | Generic stat-counter pattern. |
| Skills as 3 columns of chips | Bento-grid-of-chips is a meme at this point. |
| Testimonials with stock-photo avatars | Reads as fabricated. |
| Glow blobs + glassmorphism + gradient text | Same recipe as 10,000 other dev sites. |
| Animations: every section fades-up identically | One easing curve, one direction = AI signature. |
| Contact form that `console.log`s | Zero conversion intent. |

A backend engineer's portfolio has a unique problem: **the work is invisible**. Most "backend portfolios" overcompensate with neon-cyan, terminal mockups, and Matrix-style code rain. We're going to do the opposite — **make the invisible visible through editorial restraint, not gimmicks**.

---

## 1. The North Star

### Positioning Statement
> "A full-stack engineer who takes products from zero to one — frontend through backend through AI — with the backend depth to keep them standing at a hundred thousand users."

### The Real Story (in your own resume)
- **Topica/Edumall (2021–2023)** — started in the frontend (React, Next.js, MUI). The roots.
- **NativeX (2023–2025)** — moved into backend ownership and **scaled the platform from zero to 100K+ users**. The literal 0→1 case study.
- **Esuahi/TikMe (2025–2026)** — greenfield NestJS microservices from a blank repo, plus production AI integration. The second 0→1, this time with you owning the architecture.

This is not a "frontend dev who learned a bit of backend." It's a T-shape: **broad across the stack, deep in the backend and AI layers, with a track record of being there from line one of the codebase.** The portfolio must say that without ever using the word "passionate."

### Three Words
**Editorial. Specific. Inevitable.**

- **Editorial** — feels like *Mono Magazine* or *The Verge's* feature pages, not a SaaS landing page.
- **Specific** — every metric, every quote, every screenshot is grounded in a real shipped system. No "lorem-shaped" generalities.
- **Inevitable** — once you scroll, you can't imagine hiring anyone else.

### The Vocabulary We Lean Into
Specific terms-of-art that recur across the site, deliberately. They become the keywords a hiring manager remembers.

- **"Zero to one"** / **"0 → 100K"** — the founding-engineer signal
- **"End-to-end ownership"** — single-throat-to-choke, not ticket-shopping
- **"Greenfield"** — unprompted, from-scratch architecture
- **"Backend-heavy full-stack"** — the T-shape, named honestly
- **"Production AI"** — not "playing with LLMs," shipping evaluation engines that bill customers
- **"Distributed by default"** — the lens you bring to every system

### The Vocabulary We Refuse
- ❌ "Passionate developer"
- ❌ "Crafted with care"
- ❌ "Innovative solutions"
- ❌ "Full-stack ninja / rockstar / wizard"
- ❌ "Building the future"
- ❌ "Cutting-edge tech"
- ❌ Any sentence that would also fit on a bootcamp graduate's LinkedIn

### Reference Vocabulary (steal the *spirit*, not the pixels)
- **rauno.me** — interaction craft, micro-physics on hover
- **linear.app** — typography hierarchy, restraint, pacing
- **vercel.com/design** — case-study density, real data
- **brittanychiang.com** — quiet confidence, no decoration
- **paco.me** — personal voice, not corporate
- **maxibanderas.com** — fearless typography
- **igorbedesqui.com** — kinetic type as the design

### Anti-References
Anything that looks like: a Framer template, a Webflow showcase, ThreeJS particles for the sake of it, "developer portfolio template 2024" YouTube tutorials, sites with both a dark mode toggle AND a hand-wave emoji.

---

## 2. The Theme Question — Answered

**Decision: Dark is the home. Light is a moment.**

A senior IC's portfolio reads as dark + restrained — not because dark is trendy, but because:
1. The reader is likely on dark-mode IDEs all day; a dark site reads as *of their world*.
2. Light/cream surfaces are deployed *intentionally* for case-study deep-dives — like a printed magazine spread inside a digital site. **Contrast = emphasis**.
3. We add a third "mode" — not light/dark, but a **"reading mode"** for case studies that drops the noise and renders like Medium-but-tasteful.

### Palette (refined)
```
Surface 0   #0A0A0B   — body (slightly warmer than #050505, less "corporate dark")
Surface 1   #111114   — elevated cards
Surface 2   #1A1A1F   — modals, top of stack
Ink         #F5F4F0   — primary text (warm off-white, NOT pure white — pure white is a tell)
Ink-muted   #8B8B92   — body
Ink-faint   #4A4A52   — captions, metadata
Edge        rgba(255,255,255,0.06)  — borders
Accent      #FF5C28   — burnt orange (LOCKED 2026-04-28)
Reading BG  #F2EFE8   — cream paper for case studies
Reading Ink #1A1A1F   — near-black for cream spreads
```

**Why drop cyan + violet?** Because every dev portfolio uses cyan + violet. The single-accent approach (burnt orange `#FF5C28`) is what magazines and design studios do. It's a *signature*. Cyan + violet is a uniform.

> **Decision locked**: burnt orange `#FF5C28`. Reads warm, editorial, human — the kind of color that says "this person has taste" rather than "this person bought the AI-template-2024 pack." Pairs unusually well with the serif display font.

### Typography (LOCKED 2026-04-28)
| Role | Font | Why |
| --- | --- | --- |
| Display | **Instrument Serif** (free, Google Fonts) | Editorial Bodoni-influenced serif. High-contrast strokes pair sharply with burnt orange. The italic is gorgeous (matters for the kinetic strikethrough). *Nobody* in dev does serif display. |
| Body / UI | **Geist Sans** (free, Vercel's font) | Replaces Space Grotesk — modern, sharp, ships natively on Vercel which is where the site lives. |
| Mono | **JetBrains Mono** (current, free) | For metadata, code, labels, system-status. |

**Critical rule**: A serif display headline against burnt orange + warm-dark grounds = a portfolio that does not look generated. This single pairing is the most important design decision in this plan.

---

## 3. Section Architecture — Rethought

The current site has 8 sections in the standard order. We're cutting to **6 deliberately-paced beats**, each with its own purpose.

| # | Beat | Old name | What it now is |
| --- | --- | --- | --- |
| 1 | **Cold Open** | Hero | Name + one-line manifesto. No CTAs above the fold. |
| 2 | **The Index** | — | A single editorial table-of-contents. New. |
| 3 | **Selected Work** | Projects | 3 long-form case studies with metrics. Not cards. |
| 4 | **The Stack** | Skills + Experience merged | An interactive timeline + system layer view. |
| 5 | **Field Notes** | Blog | Essays, not "blog posts." |
| 6 | **Make Contact** | Contact | One-line invitation + functional form. RAG demo is draft/deferred. |

About + Testimonials are folded **inside** other sections, not standalone. Standalone About is a portfolio cliché; testimonials between projects are evidence in context.

---

## 4. Section-by-Section Detailed Plan

### 4.1 Cold Open (Hero) — *Kill "Building the Future"*

**Replace with**:

```
   ┌─────────────────────────────────────────────────────────────┐
   │  SYED ABDUL AZIZ — IN HYDERABAD               14:32 IST     │  ← mono, top, full-bleed rule
   ├─────────────────────────────────────────────────────────────┤
   │                                                              │
   │                                                              │
   │   I take products                                            │  ← serif display, left-aligned
   │   from zero                                                  │
   │   to ̶o̶n̶e̶ a hundred thousand.                              │  ← kinetic strikethrough on "one"
   │                                                              │
   │   ─────────                                                  │  ← thin accent rule
   │                                                              │
   │   Full-stack engineer · backend-heavy · production AI        │  ← mono caption, ink-muted
   │   Hyderabad · 4+ yrs · open to senior / staff roles          │
   │                                                              │
   │                                                              │
   │   ● available for senior backend / full-stack roles          │  ← bottom-left status pill
   │                                                              │
   └─────────────────────────────────────────────────────────────┘
                                                       ↓ scroll
```

**Why this headline works**:
- *"I take products from zero to one a hundred thousand"* tells the actual NativeX story (literal 0→100K) AND the TikMe story (greenfield zero) in seven words.
- The kinetic strikethrough on **"one"** → **"a hundred thousand"** is the portfolio's signature animation: it shows range and stakes simultaneously. The reader watches the number escalate before their eyes — that's the elevator pitch in 1.4 seconds.
- Acid lime accent renders **only** on `a hundred thousand` after the strikethrough lands — the moment of emphasis is a designed thing, not a decoration.

**Specific changes**:
- Remove gradient text on display — serif + acid lime accent ONLY on the post-strikethrough number.
- Headline is **left-aligned**, not centered. Centered hero = SaaS. Left-aligned hero = editorial.
- No button row above the fold. The hero earns attention by *being good*, not by begging clicks. (Resume CTA moves down to The Index.)
- **The kinetic type moment**: `<AnimatePresence mode="wait">` swaps `one` for `a hundred thousand`. The strikethrough draws left-to-right (300ms), pause (200ms), the new word reveals from a clip-path mask (400ms). Loops every 6s — slow enough not to be annoying, frequent enough that returning visitors notice it.
- The sub-caption explicitly names the T-shape: *"Full-stack engineer · backend-heavy · production AI."* No subtlety. State the position.
- Bottom-left: persistent "system status" pill — `● available for senior backend / full-stack roles`. Green dot, mono, tiny. CTA disguised as ambient UI.
- Top-right of the masthead rule: live local time in Hyderabad (`14:32 IST`). Tiny human signal.

**What's gone**: gradient text, "Building the Future," button stack, glassmorphic role pill, animate-pulse blobs, centered alignment.

> **Open call**: alternative headline if "zero to a hundred thousand" reads too brag-y for you: *"From line one of the repo / to ̶o̶n̶e̶ a hundred thousand users."* — frames the same story through the lens of being there from commit zero.

---

### 4.2 The Index — *new section, the most important addition*

A literal **table of contents** styled like a magazine masthead. This is the section that proves taste before any project is shown — and where you state the T-shape on record.

```
   ─────────────────────────────────────────────────────────────────
    ISSUE 01 / 2026                                  EDITION: HIRING
   ─────────────────────────────────────────────────────────────────

    00    THE SHAPE        Backend-heavy full-stack. AI in production.
                           Frontend roots. Three 0→1 builds shipped.
    01    NOW              Currently shipping: LLM evaluation engine ↗
    02    SELECTED WORK    Three systems, three 0→1 stories
    03    THE STACK        Where I'm deepest, where I'm broad, what I reach for
    04    FIELD NOTES      Essays from the engine room
    05    CONTACT          syedaziz9999@gmail.com   ·   /resume.pdf ↓

   ─────────────────────────────────────────────────────────────────
```

The new `00 THE SHAPE` row is the manifesto — two short lines that tell a hiring manager exactly what they're looking at without making them scroll. It also names the T-shape (broad + deep) explicitly, so the recruiter who only reads two sections still gets the story.

- Functions as an in-page nav.
- Each row hovers → micro-translate-x + accent underline.
- Each row click smooth-scrolls.
- Mono font, generous tracking, hairline rules above and below.
- "ISSUE 01 / 2026" auto-updates from `currentDate` — small detail that makes it feel alive.
- The `NOW` row pulls from a `now.json` file you can update without touching JSX. (Like Derek Sivers' `/now` page, but inline.)

This section costs ~2 hours to build and is the single biggest signal of design seniority on the entire site.

---

### 4.3 Selected Work — *three 0→1 case studies, not cards*

This is where the portfolio earns the offer letter. **Three projects, full-bleed, alternating layouts, each ~600px tall.** Each one is explicitly framed as a zero-to-one story, with the starting state stated upfront.

Each case study opens with a **mono "context block"** above the title:

```
   STARTED FROM     EMPTY REPO. ZERO USERS. NO ARCHITECTURE.
   ENDED AT         6 SERVICES IN PROD · 10K WS/POD · LIVE
   MY ROLE          BACKEND ARCHITECT, END-TO-END OWNER
```

This single block does more for a hiring manager than three paragraphs of prose. It also makes the 0→1 framing impossible to miss.

Each case study is a **long-form spread** — not a card. Layout pattern:

```
┌──────────────────────────────────────────────────────────────────┐
│  01 / TIKME                                              2025–26 │  ← mono header
│                                                                  │
│  ┌────────────────────────┐    ┌──────────────────────────────┐  │
│  │                        │    │                              │  │
│  │   [HERO VISUAL —       │    │   THE PROBLEM                │  │
│  │    architecture        │    │                              │  │
│  │    diagram or          │    │   A 25-year-old education... │  │
│  │    annotated           │    │                              │  │
│  │    screenshot]         │    │   THE MOVE                   │  │
│  │                        │    │                              │  │
│  │                        │    │   I architected a NestJS...  │  │
│  └────────────────────────┘    │                              │  │
│                                │   THE NUMBERS                │  │
│                                │   ┌──────┬──────┬──────┐    │  │
│                                │   │ 10K  │ 90%  │ 6    │    │  │
│                                │   │ ws/  │ db   │ svcs │    │  │
│                                │   │ pod  │ load │ owned│    │  │
│                                │   └──────┴──────┴──────┘    │  │
│                                │                              │  │
│                                │   [READ FULL CASE STUDY →]   │  │
│                                └──────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

**Per-project visuals (the hard part — but the ROI is enormous)**:

#### 01 / TikMe — *greenfield zero. Architecture as the hero.*
**Context block**: `EMPTY REPO → 6 SVCS IN PROD · END-TO-END OWNER`.
A custom-drawn SVG showing: `Apollo Federation Gateway → Auth · Chat · Media · Real-Time · Evaluation`, with Kafka as the bus and Redis/Postgres at the data layer. **It animates on scroll** — the data flow lights up node by node. Built with Framer Motion's `<motion.path>` strokeDashoffset. The visual equivalent of "I can architect distributed systems from a blank page."

#### 02 / NativeX — *the literal 0→100K case study*
**Context block**: `LAUNCH-DAY TRAFFIC → 100K+ USERS · BACKEND-OWNER FROM DAY ONE`.
This is the one that names the framing on the tin. Visual: a sparse line chart showing user-growth over 24 months — first 6 months flat, then the inflection, then 100K. Annotated with the moments that mattered: *"Kafka pipeline ships,"* *"Redis token bucket lands,"* *"~25% logging cost reduction,"* *"Best Stand-alone Remote Contributor 2023."* This is the chart a recruiter screenshots and pastes into Slack.

#### 03 / LLM Evaluation Engine + RAG — *the AI layer that pays rent*
**Context block**: `OPENAI EXPERIMENT → BILLABLE PROD FEATURE · COST + LATENCY TRACKED`.
Two-column spread:
- *Left*: an actual rubric-style prompt template in a mono code block, with `{{variables}}` highlighted. Below it: a live-feel "evaluation result" card — `Score: 7.2 · Cost: $0.0043 · Latency: 1.8s`. Proof you ship.
- *Right*: a tiny animated mock of the RAG flow — query → embedding → vector search → GPT-4o streaming response. `motion.span` typewriter on the streaming answer. **The only "demo-y" element on the site, and it's earned because shipping production AI is your differentiator from every other backend engineer applying for the same role.**

> **Why merge LLM Eval and RAG into one case study?** Three case studies is the editorial sweet spot. Splitting AI into two cards reads as padding; combining them into one "the AI layer" spread reads as range *plus* depth. It also leaves room for NativeX, which is your strongest 0→1 story.

**Layout rhythm**: Project 1 = visual-left/text-right. Project 2 = visual-right/text-left. Project 3 = full-bleed, visual on top, text below. **Never repeat the same layout** — that's what makes a card grid feel templated.

**Each project includes**:
- A "stack used" row at the bottom in mono caption style.
- An optional `[READ FULL CASE STUDY →]` link going to a dedicated `/case/tikme` route on a cream "reading mode" background. (Phase 2.)
- ~~Inline testimonial~~ — *removed (locked decision: no testimonials site-wide). Real quotes can be sourced later from former colleagues and reintroduced if/when verified.*

---

### 4.4 The Stack — *experience + skills, fused, T-shape made visible*

Currently Experience and Skills are two separate sections. They're **the same story told twice**. Fuse them — and use the layout itself to make the T-shape obvious.

**Layout: a horizontal timeline up top, a vertical stack-depth chart below. Together they say "I move through time AND through layers."**

```
   ─── 2021 ────────── 2023 ─────────────── 2025 ──────────── 2026 ───
        Topica/            NativeX                Esuahi/TikMe
        Edumall            ──────────────         ─────────────────
        FE intern →        BE owner               Backend architect
        FE engineer        Identity · Wallet      Greenfield NestJS
        (React, Next,      Notification           Auth · Chat · Media
        TS, MUI)           Scheduling             Real-Time · Eval
                                                  
                           0 → 100K USERS         GREENFIELD ZERO
                           Best Remote            LLM eval + RAG
                           Contributor 2023       ship to prod
```

- Each year-block is interactive: hover → expand to show the 3-bullet "what I did / what I learned" version.
- The transition from `2021–2023 (frontend)` → `2023+ (backend)` is **labeled**, not hidden. The line literally annotates: *"shifted into backend ownership"* between the two eras. This is the part that says "full-stack with backend gravity" without saying it.
- Each era ends in a **0→1 milestone tag** in accent lime — so the timeline doubles as a kill-list of zero-to-one wins.

**Below the timeline: the T-shape, drawn to scale.**

Replace the 3-column skills grid with a single **stack-depth chart** — Tufte-style, custom SVG, no skill bars (those are gross). Each row is a layer; the *width* of each bar represents your depth in that layer:

```
                  ┌─ broad ─────────────── deep ──┐
   AI / LLM       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░    OpenAI · Claude · RAG · MCP · Evals
   BACKEND        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    NestJS · Kafka · Apollo Fed · Redis · Postgres
   INFRA / CLOUD  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░    Azure AKS · Docker · K8s · CI/CD · Cerbos
   DATA           ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░    Postgres · Mongo · Redis · Vector Search
   FRONTEND       ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░    React · Next · TypeScript · Apollo · MUI
```

- The visual immediately reads as **a T**: backend + AI bars are the deepest, frontend is broad-but-shallower-than-backend. **That's the honest T-shape, drawn.**
- Each bar has the actual tech listed to the right in mono.
- A small mono label next to each tech: `★ daily` / `· monthly` / `· occasional`. Replaces the chip-cloud with *actual usage signal*.
- Below the chart, one short sentence: *"Backend and AI is where I'm deepest. Frontend is where I started, and where I still ship — most recently this very portfolio."* — the line that makes the T-shape explicit, with the portfolio itself as the artifact-of-proof. (Subtle flex.)

**What we gain**: one unified narrative — "here's where I've been, what I built, and how deep I go in each layer." The T-shape is no longer a claim; it's drawn.

---

### 4.5 Field Notes — *blog, repositioned*

Rename **"Blog"** → **"Field Notes from the Engine Room"** (or just "Field Notes"). The framing matters: a blog implies content marketing; field notes imply firsthand engineering reportage.

**Layout**: a single-column reading list. Not a 3-card grid. Each entry:

```
   2026 · MAR · 10                                          7 MIN READ
   Building a Kafka Notification Pipeline at Scale          
   ───────────────────────────────────────────────────────────────────
   How we designed idempotent, rate-limited notifications for 5K+ paid
   users — aggregating across 4 microservices with a Redis token bucket
   and partial-failure tolerance via Promise.allSettled.
   
   READ →                                  KAFKA · REDIS · NESTJS
```

- Listed in reverse chronological order, no images.
- Hover: title underlines in accent color, no card lift.
- Why no images: editorial restraint. Three full-width photo-cards is the *exact* pattern of every dev blog. Removing images is a flex.
- Below the list, a small `[ archive →]` link. Even if the archive isn't built yet, the link signals depth.

---

### 4.6 Make Contact — *with the RAG hook*

Standard contact section is wasted real estate. Two upgrades:

**(a) The signature interaction — "Ask me anything"**

A small embedded text input at the top of the contact section:

```
   ASK MY PORTFOLIO
   ┌────────────────────────────────────────────────────────────┐
   │  Why did you use Cerbos over Casbin?                  ↵    │
   └────────────────────────────────────────────────────────────┘
   
   The portfolio answers, streaming GPT-4o style, drawing from a
   small embedded knowledge base of Syed's experience.
```

- Wired to your own backend (Vercel Edge Function) → OpenAI streaming → typewriter effect.
- Knowledge base is a single markdown file (your PROFILE.md, chunked + embedded once at build time).
- **This is the kill shot**. A backend/AI engineer's portfolio that has a working RAG system embedded in it = the hiring manager forwards your link to the team before the interview.
- Cost: ~$5/month at portfolio traffic levels. Worth it.

**(b) The form — actually functional**

- Wire to Resend or Plunk (5-minute integration) → email lands in your inbox.
- After submit: the form smoothly transforms into a "thanks, I'll reply within 24h — meanwhile, here's the calendar link" state. Don't redirect, don't toast. Transform the form itself. This kind of detail is what people screenshot.

**(c) Trim the contact info**
Remove phone for the public-facing site (or gate it behind the form). Phone numbers on portfolios are spam magnets.

---

## 5. Animation Strategy — *the part most portfolios get wrong*

Current state: every section has the same `y: 40 → 0, opacity: 0 → 1, duration: 0.8` animation. That uniformity is what *signals* AI/template generation.

### The new principle: each section animates differently, and each animation says something.

| Section | Animation | What it says |
| --- | --- | --- |
| Cold Open | Strikethrough → reveal kinetic type. No fade-in. Type renders directly. | "I have something to say." |
| The Index | Each row underlines from left to right on scroll into view (300ms apart). | "This is intentional." |
| Selected Work | Diagrams animate on scroll — strokes draw, nodes pulse. Text fades up. | "I think in systems." |
| The Stack | Timeline draws horizontally on scroll. Bar chart fills bottom-up. | "Time and depth." |
| Field Notes | NO entry animation. Static. | "These are facts. Read them." |
| Make Contact | Form input has a subtle "breathing" border-glow — slow, 4s loop. | "I'm waiting." |

### The custom cursor — *a controversial recommendation*

A subtle custom cursor: 8px circle, mix-blend-difference, lags behind the real cursor by ~80ms with a smooth spring. Grows to 32px on hover over interactive elements. **Don't make it cheesy** — no stars, no trails, no follow-text. Just a single sophisticated dot.

Reference: linear.app, vercel.com. **Anti-reference**: any portfolio where the cursor has a particle trail.

### Page micro-physics
- Smooth scroll via Lenis (replaces browser native — single biggest perceived-quality upgrade for ~3KB).
- All scroll-tied animations use `useScroll` with `offset: ["start end", "end start"]` instead of `whileInView`. This makes them feel *attached to scroll position* rather than triggering once.
- Page-level: every link click does a 200ms fade-to-black-fade-up transition. (Use Framer Motion's `LayoutGroup` + `AnimatePresence` at the route level.)

### Strict bans
- ❌ Particle backgrounds (the current `Starfield.jsx` — kill it)
- ❌ Animated gradient text ("animate-gradient-x" must die)
- ❌ `animate-bounce`, `animate-pulse` on anything decorative
- ❌ `hover:scale-105` on buttons (currently in Hero — kill it)
- ❌ Text typewriter effects for hero headlines (cliché)
- ❌ ThreeJS, react-three-fiber, anything 3D — out of scope, dilutes signal
- ❌ Tilt cards (`react-parallax-tilt` is in Experience — kill it)

---

## 6. The Signature Details — *what people screenshot*

These are the 5 things that make a portfolio go "this person *cares*":

1. **Live time-in-Hyderabad** in the hero corner. (10 lines of code.)
2. **The "ASK MY PORTFOLIO" RAG input** in contact. (Half a day's work.)
3. **The animated TikMe architecture diagram** scrolls into life. (Day's work, but it's a screenshot machine.)
4. **The reading-mode case-study spreads** on cream paper. (Phase 2 — separate routes.)
5. **A `view-source` easter egg**: an HTML comment at the top of every page that reads:
   ```html
   <!-- 
     Hello. If you're reading this, you're my kind of person.
     Resume: /resume.pdf
     Hire me: syedaziz9999@gmail.com
   -->
   ```
   Engineers DO check view-source. This is free hire-able-by-engineers signal.

---

## 7. What Gets Deleted

Be ruthless. Deletion is design.

| File / element | Verdict |
| --- | --- |
| `Starfield.jsx` | Delete. Particle backgrounds are noise. |
| Gradient blobs (`glow-blob-cyan`, `glow-blob-violet`) | Delete. Too 2023. Replace with single low-opacity texture or nothing. |
| `text-gradient-primary`, `text-gradient-violet`, `text-gradient-cyan` | Delete. Solid acid lime accent only. |
| Cyan + violet color tokens | Replace with single accent. |
| Avatars in testimonials | Delete. Inline quotes only. |
| About section as standalone | Fold into hero + index. |
| 3-column projects grid | Replace with alternating long-form spreads. |
| `hover:scale-105` everywhere | Replace with `y: -2` or border/opacity changes. |
| Stat counters with `+` signs | Replace with editorial inline numbers. |
| Skills 3-column chip cloud | Replace with stack-depth visualization + usage frequency labels. |
| Contact phone number on public site | Hide. Gate behind form. |
| `animate-gradient-x` keyframe | Delete. |
| Glassmorphic everything | Use sparingly — once or twice on the page, not every card. |

---

## 8. New Tech Additions (small, justified)

| Library | Size | Why |
| --- | --- | --- |
| `lenis` | ~3KB | Smooth scroll. Single biggest perceived-quality lift. |
| `tailwind-merge` (already in) | — | Keep. |
| `@vercel/analytics` | ~1KB | Know what people read. |
| `vaul` (drawer) | ~5KB | For the case-study reading-mode overlay. |
| `next-themes` | — | NOT needed. We're not adding a theme toggle. |

**Removing**: `react-parallax-tilt` (used in Experience.jsx — gone).

---

## 9. Performance & Accessibility Targets

These are not optional. A portfolio that lags is a portfolio that lies.

- **Lighthouse**: 100/100/100/100 on desktop, 95+ mobile.
- **LCP**: <1.5s. The hero serif headline must render via `font-display: swap` with a fallback that approximates the metric.
- **CLS**: <0.05. Every image has explicit width/height.
- **JS bundle**: <120KB gzipped on first paint. Lazy-load Framer Motion route-by-route (it's currently shipped in full).
- **Reduced motion**: respect `prefers-reduced-motion: reduce`. All scroll animations disable; cursor effect disables; only opacity transitions remain.
- **Keyboard nav**: every interactive element has visible focus ring (`focus-visible:ring-accent`). Tab order tested manually.
- **Color contrast**: ink on surface ≥ 7:1; ink-muted ≥ 4.5:1. Acid lime on dark = ≥ 7:1 (verified).
- **Screen reader**: every decorative SVG `aria-hidden`; every section has a real `<h2>`; the kinetic-type strikethrough is announced once, not on every loop.

---

## 10. Phased Implementation Roadmap

Don't try to ship this in one PR. Three phases, each independently shippable.

### Phase 1 — *the bones* (3–4 evenings)
The portfolio you'd be willing to send to someone *today*. Lands the 0→1 + T-shape framing.
- [ ] Replace fonts (PP Editorial New OR Tobias for display; Inter for body)
- [ ] Repaint with new palette (single accent: lime or orange — DECIDE FIRST)
- [ ] Rewrite Hero with the *"zero to one a hundred thousand"* kinetic strikethrough headline
- [ ] Add status pill, live Hyderabad time, full-stack/backend-heavy/AI sub-caption
- [ ] Build The Index section with the new `00 THE SHAPE` manifesto row
- [ ] Delete Starfield, gradient blobs, all gradient text, all `animate-gradient-x`
- [ ] Replace 3-card Projects with first long-form case study — **NativeX** (the literal 0→100K story, sparse line chart, annotations)
- [ ] Add the "STARTED FROM / ENDED AT / MY ROLE" mono context block above each case study
- [ ] Add Lenis smooth scroll
- [ ] Wire navbar social links (currently dead)
- [ ] Wire contact form to Resend
- [ ] Delete the phone number from public view

**Ship checkpoint**: this version is already 10x better than current. Stop here if time is short.

### Phase 2 — *the proof* (4–5 evenings)
The portfolio that gets you the interview. Doubles down on backend depth + AI shipping.
- [ ] Build the TikMe greenfield case study (animated architecture diagram)
- [ ] Build the merged LLM Eval + RAG case study (the "AI layer that pays rent" spread)
- [ ] Build the fused Stack section — timeline with frontend → backend transition labeled, plus the T-shape stack-depth chart
- [ ] Replace Field Notes with single-column editorial list
- [ ] Add custom cursor (subtle, mix-blend-difference)
- [ ] Add per-section signature animations (architecture diagram strokes, timeline draw, sparse line chart annotations)
- [ ] Add view-source easter egg
- [ ] Lighthouse pass — get to 100/100/100/100

**Ship checkpoint**: this is the version most senior engineers would call "exceptional."

### Phase 3 — *the kill shot* (2–3 evenings)
The portfolio nobody else has.
- [ ] Build the embedded RAG "Ask my portfolio" demo (Vercel Edge + OpenAI streaming) — draft/deferred, not current scope
- [ ] Add `/case/[slug]` reading-mode routes for full case studies on cream paper
- [ ] Add `now.json`-driven NOW row that you maintain weekly
- [ ] Add `prefers-reduced-motion` paths
- [ ] Add `@vercel/analytics`

**Ship checkpoint**: this is the version recruiters share in their team Slack.

---

## 11. Open Decisions — *I need your call before Phase 1 starts*

1. **Single accent color**: acid lime `#C8FF00` (AI-forward, current) **or** burnt orange `#FF5C28` (warm, editorial)? My vote: **lime**. Decide.
2. **Display font**: licensed *PP Editorial New* (~$50, but it's the look) **or** free *Tobias* (similar feel, free) **or** keep *Syne* (already loaded, weakest of the three)? My vote: **Tobias** as the pragmatic balance.
3. **Theme**: stick with dark-only (recommended) or add a `/case/[slug]` cream-paper reading mode in Phase 2 (recommended)?
4. **Keep the resume PDF download CTA in the hero**, or move it to The Index / Contact only? My vote: move it down. The hero earns trust before asking.
5. **The RAG demo in Phase 3**: ambitious but high-ROI. Confirm you're willing to spin up a small backend for it (Vercel Edge Function + OpenAI key, ~$5/mo).
6. **Domain**: are we deploying to a real domain (e.g. `syedabdulaziz.com`)? A custom domain on the resume is a stronger signal than `vercel.app`.

---

## 12. The "Does This Look AI-Generated" Sniff Test

Before merging anything, run each section against this checklist. If it fails any, redo it.

- [ ] Does this section have **one specific number, name, or detail** that nobody else in the world would have? (Real metric, real quote, real timestamp.)
- [ ] Is the **layout asymmetric**? Or did I default to a centered/3-col grid?
- [ ] Did I use a **gradient text** anywhere? (If yes, kill it.)
- [ ] Did I use **cyan or violet**? (If yes, kill it.)
- [ ] Did I use the words **"crafted with passion," "innovative solutions," "cutting-edge,"** or **"building the future"**? (If yes, kill it with fire.)
- [ ] Could a **template generator** have produced this exact layout? (If yes, redo it.)
- [ ] Does the **typography hierarchy** have at least 3 distinct sizes within ±50% of each other (so the eye has rhythm, not just big/medium/small)?
- [ ] Is there a **single piece of "personality"** in this section — a turn of phrase, a tiny easter egg, a specific reference — that proves a human chose it?

If every section passes, you have a portfolio that doesn't look AI-generated. Because it isn't.

---

## 13. The North Star, Restated

When the recruiter or hiring manager closes the tab, they should think — in this order:

1. *"Backend depth, real AI shipping, knows the frontend too."*
2. *"This person has taken something from zero before."*
3. *"I want to talk to them before someone else does."*

Not "nice portfolio." Not "good design." Not "clean code." Those three thoughts, in that order. **That's the brief.**

Everything in this plan exists to produce those three thoughts.

---

*Drafted 2026-04-28. Repositioned 2026-04-28 around full-stack/backend-heavy/0→1. Living document — update as decisions land.*
