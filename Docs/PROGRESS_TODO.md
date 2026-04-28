# Portfolio Revamp Progress Tracker

Last updated: 2026-04-28  
Source of truth for scope: [EXECUTION_PLAN.md](./EXECUTION_PLAN.md)

## Legend

| Emoji | Status | Meaning |
| --- | --- | --- |
| 🟩 | Done | Acceptance criteria met |
| 🟨 | In Progress | Started, but not complete |
| 🟥 | Not Started / Blocked | Not done yet |

## Current Snapshot

| Item | Status |
| --- | --- |
| Current phase | Phase 2 started |
| Overall state | 🟨 Phase 1 code is in place and Phase 2 content work is underway. Remaining Phase 1 gaps are deployment/manual verification items. |
| Active modified files | Phase 2 work currently touches case studies, stack storytelling, notes, and `index.html` |
| Current branch | `revamp-v1` |

## Phase 1

### Pre-flight

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| `P1-T0` | Lock Open Decisions | 🟩 Done | Locked in `Docs/EXECUTION_PLAN.md`. |
| `P1-T0a` | Capture Baseline | 🟥 Not Done | `Docs/baseline-build.txt` exists. Screenshots in `Docs/screenshots/before/` and `Docs/baseline-lighthouse.html` are missing. |
| `P1-T0c` | Constants & Asset Cleanup | 🟩 Done | GitHub URL updated, Twitter removed, testimonials emptied, blog posts reframed to `DRAFTING`, resume renamed in `public/`. |
| `P1-T0b` | Branch + Dependency Surgery | 🟩 Done | `lenis` and `@vercel/analytics` are installed, and the build baseline exists. Branch name differs from the plan, but the task intent is complete. |

### The Bones

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| `P1-T1` | Repaint the Design System | 🟩 Done | Warm dark palette, new font stack, simplified utilities, and updated Tailwind tokens are in place. |
| `P1-T2` | Strip the Dead Decoration | 🟩 Done | Starfield and old decorative template sections were removed. Dead gradient/neon/template references are gone from `src/`. |
| `P1-T3` | Rewrite Hero | 🟩 Done | New left-aligned editorial hero, looping 0→100K copy, live IST clock, and status pill are implemented. |
| `P1-T4` | Build the Index Section | 🟩 Done | Editorial index section added, including resume link and anchor navigation. |
| `P1-T5` | NativeX Case Study | 🟩 Done | Old project card grid replaced with a single NativeX case-study layout. |
| `P1-T6` | Lenis Smooth Scroll | 🟩 Done | Lenis is initialized in `src/main.jsx` and disabled when reduced motion is enabled. |
| `P1-T7` | Wire Navbar + Kill Dead Links | 🟩 Done | Navbar now points only to real section anchors and real social URLs. |
| `P1-T8` | Wire Contact Form (Vercel API + Resend) | 🟨 In Progress | Client and `api/contact.js` are implemented, but live email delivery still requires `RESEND_API_KEY` in Vercel and a deployed end-to-end test. |
| `P1-T9` | Hide Phone, Tighten Constants | 🟩 Done | Phone is no longer rendered publicly. |
| `P1-GATE` | Phase 1 verification gate | 🟨 In Progress | Local build/lint pass. Manual screenshots, Lighthouse, and deployed contact-form verification are still pending. |

## Phase 2

| ID | Task Group | Status | Notes |
| --- | --- | --- | --- |
| `P2-T1` | TikMe Case Study + Animated Architecture Diagram | 🟩 Done | Added TikMe case-study content and a scroll-driven architecture SVG in `src/components/cases/`. |
| `P2-T2` | LLM Eval + RAG Merged Case Study | 🟩 Done | Added AI Layer case study with rubric prompt block, metrics strip, and grounded-answer typewriter. |
| `P2-T3` | Build Fused Stack Section | 🟩 Done | Stack section now carries timeline markers and clearer T-shape framing. |
| `P2-T4` | Field Notes (single-column list) | 🟩 Done | Notes section stays image-free and card-free, with simple editorial metadata rows. |
| `P2-T5` | Custom Cursor | 🟥 Not Started | Not implemented yet. |
| `P2-T6` | View-Source Easter Egg | 🟩 Done | Comment added to `index.html` and confirmed in built `dist/index.html`. |
| `P2-T7` | Lighthouse Pass to 100/100/100/100 | 🟥 Not Started | No Phase 2 Lighthouse optimization pass yet. Current JS bundle is still above the target. |
| `P2-GATE` | Phase 2 verification gate | 🟥 Not Done | Manual visual/perf checks and remaining tasks are still open. |

## Phase 3

| ID | Task Group | Status | Notes |
| --- | --- | --- | --- |
| `P3` | Phase 3 tasks | 🟥 Not Started | No Phase 3 execution has started yet. |

## Follow-up Notes

| Area | Issue |
| --- | --- |
| Deploy | Add `RESEND_API_KEY` to Vercel preview + production before testing the contact form live. |
| Manual QA | `Docs/screenshots/after-phase-1/` and `Docs/phase-1-lighthouse.html` still need browser-based capture. |
| Build artifact | `Docs/phase-1-build.txt` has been generated from the current local build. |
| Phase 2 perf | Current built JS is about `126.99 kB` gzipped, so the later Phase 2 performance pass is still required. |
