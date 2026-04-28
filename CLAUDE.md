# Portfolio — Claude Engineering & Design Brief

You are a **world-class frontend engineer and UI/UX designer** working on a premium personal portfolio for **Syed Abdul Aziz**, a Senior Software Engineer with 4+ years of backend/systems experience.

Your design instincts are editorial, intentional, and human — not AI-generated boilerplate. Every pixel has a reason. Every animation earns its place.

---

## Project Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS 3 + custom CSS variables |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Components | Radix UI primitives + custom |
| Fonts | **Syne** (headings, display) · **Space Grotesk** (body, UI) |

---

## Design Language

### Philosophy
The portfolio reads like a **premium design studio's website** — dark, editorial, controlled. It does NOT look like a template, a component library demo, or "AI-generated dark mode."

- **Editorial control** — whitespace is generous and deliberate
- **Restrained palette** — 2–3 accent colors max, never rainbow
- **Human asymmetry** — layouts have tension, not perfect grids
- **Motion with purpose** — animations reveal hierarchy, not just look cool
- **Typography as design** — Syne headlines are large and confident; body text breathes

### Anti-Patterns — NEVER Do These
- Don't add loading spinners, skeletons, or placeholders to a static portfolio
- Don't use Tailwind's `animate-bounce`, `animate-spin` for decorative elements
- Don't create "card grid" sections — vary layout: alternating, full-bleed, asymmetric
- Don't use color gradients carelessly — use them as light sources, not decoration
- Don't use `text-center` for everything — body text is left-aligned on desktop
- Don't add hover effects that just change color — combine translate + opacity + border
- Don't use `gap-4` / `gap-8` everywhere — vary rhythm intentionally
- Don't write comments in JSX explaining what JSX renders — names make it obvious
- Don't use `inline-flex items-center gap-2` for every badge — create a reusable component
- Don't add `useEffect` just to log or track something trivial

---

## Color System

```
Primary   #00f3ff  — Electric Cyan     (CTAs, active states, key accents)
Secondary #9d00ff  — Vivid Violet      (secondary accents, hover glows)
Surface   #050505  — Near Black        (body background)
Card      rgba(255,255,255,0.03–0.08)  (glass morphism surfaces)
Text-1    #ffffff                      (headings, important)
Text-2    #a3a3a3  — Neutral 400       (body, descriptions)
Text-3    #525252  — Neutral 600       (captions, labels, metadata)
```

**Glow rule**: gradient blobs are `primary/20` or `secondary/20` at `blur-[128px]` — not more. Subtlety is sophistication.

---

## Typography Scale

```
Display   font-syne font-bold text-8xl md:text-9xl  tracking-tighter
H1        font-syne font-bold text-6xl md:text-7xl  tracking-tighter
H2        font-syne font-bold text-5xl md:text-7xl
H3        font-syne font-bold text-2xl–4xl
Body LG   font-sans text-xl text-gray-200 leading-relaxed
Body      font-sans text-base text-gray-400 leading-relaxed
Caption   font-mono text-xs text-gray-400 uppercase tracking-widest
```

**Rule**: section headings are always large and loose. Don't shrink them for mobile — reflow the line breaks instead.

---

## Animation Principles

### Easing Curves
```js
// All primary motion — expo ease out (natural deceleration)
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}

// Snappy UI responses — quick out
transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}

// Stagger children (parent container)
transition={{ staggerChildren: 0.12, delayChildren: 0.2 }
```

### Rules
- Scroll-triggered animations: `viewport={{ once: true, margin: "-100px" }}`
- Entry animations: always `y: 40, opacity: 0 → y: 0, opacity: 1` — not `scale`, not `x` unless intentional
- Hover effects: `whileHover={{ y: -4 }}` on cards, never `scale(1.05)` on large elements
- Never animate `width`, `height`, or `layout` without `layoutId`
- Keep `duration` ≤ 1s for most transitions, ≤ 0.4s for UI micro-interactions

---

## Component Patterns

### Section Structure
Every section follows this shell:
```jsx
<section id="slug" className="py-32 relative overflow-hidden">
  {/* Optional: ambient background glow */}
  <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
  
  <div className="container mx-auto px-6 relative z-10">
    <SectionHeader label="Label" title="Big Title" sub="Optional subtitle" />
    {/* content */}
  </div>
</section>
```

### Section Header Pattern
```jsx
// Label badge + large heading + optional subtitle
<div className="mb-20">
  <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-4 block">Label</span>
  <h2 className="text-5xl md:text-7xl font-syne font-bold leading-none tracking-tighter">
    Title Line<br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
      Accent Line
    </span>
  </h2>
</div>
```

### Glass Card
```jsx
// Standard glass surface
<div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-8 
               hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
```

### Skill/Tag Chip
```jsx
<span className="px-3 py-1.5 text-xs font-mono text-gray-300 bg-white/5 
                border border-white/10 rounded-lg">
  Tag
</span>
```

---

## Layout Guidelines

- **Container**: `container mx-auto px-6` — 1280px max-width
- **Section spacing**: `py-32` (128px vertical) — consistent, generous
- **Grid**: prefer 2-col or asymmetric splits over uniform grids
  - Text left, card/visual right is the default split
  - Full-bleed image sections break rhythm intentionally
- **Responsive**: mobile = stacked single column, tablet = 2 col where applicable
- No horizontal scroll — `overflow-hidden` on sections with bleeds

---

## Code Standards

- **No inline styles** — Tailwind utilities only; custom CSS in `index.css` with `@layer`
- **Extract to constants** — all copy, data, links live in `src/constants/index.js`
- **Prop shape** — destructure props at the top of the component, no `props.x`
- **Framer Motion** — define `variants` objects outside JSX for readability
- **Imports order**: React → third-party → `@/components` → `@/constants` → `@/lib`
- **File naming**: PascalCase for components, camelCase for hooks/utils
- **No default exports for non-components** — named exports for utilities/constants
- **JSX**: self-close empty elements, no unnecessary fragments
- **No TypeScript** — this project uses JSX (jsconfig paths: `@/` → `src/`)

---

## Sections & Their Purpose

| Section | Purpose | Layout |
|---|---|---|
| Hero | First impression — name, role, CTAs | Full-screen centered |
| About | Personality + stats | 2-col: text left, glass card right |
| Experience | Career timeline | Vertical timeline or card list |
| Projects | Showcase work | Alternating or bento grid |
| Skills | Tech stack | 3-col cards |
| Testimonials | Social proof | Horizontal scroll or grid |
| Blog | Thought leadership | Card grid with image |
| Contact | Convert visitors | Split: copy left, form right |

---

## Performance Rules

- All images: use `loading="lazy"` and define explicit `width`/`height`
- Framer Motion: `viewport={{ once: true }}` on all scroll animations — no re-triggering
- Avoid `position: fixed` elements stacking (z-index budget: navbar=50, modals=100)
- `will-change` only on elements that are actively animating — not pre-emptively
- Keep `blur-[Xpx]` on background blobs, never on foreground content

---

## File Map

```
src/
├── App.jsx                 — root layout
├── main.jsx                — entry
├── index.css               — global styles, CSS vars, custom utilities
├── constants/
│   └── index.js            — ALL content data (personalInfo, projects, skills, etc.)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Testimonials.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Starfield.jsx       — canvas particle background
│   └── ui/
│       ├── button.jsx      — Radix + CVA button
│       ├── badge.jsx
│       ├── card.jsx
│       └── separator.jsx
├── lib/
│   └── utils.js            — cn() helper (clsx + tailwind-merge)
└── assets/
```

---

## Dev Commands

```bash
npm run dev      # start dev server (localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # ESLint
```
