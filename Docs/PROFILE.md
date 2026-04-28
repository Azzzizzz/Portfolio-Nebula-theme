# My Profile — Syed Abdul Aziz

> **Source of truth** for generating interview content, portfolio copy, and any AI-assisted career tools.
> Synthesized from: resume (Apr 2026), LinkedIn data, and microservice handover docs (Esuahi-Docs/).

---

## Contact & Links

| Field | Value |
|-------|-------|
| Location | Hyderabad, India |
| Phone | +91 8328082973 |
| Email | syedaziz9999@gmail.com |
| LinkedIn | [linkedin.com/in/syed-abdul-aziz](https://linkedin.com/in/syed-abdul-aziz/) |

---

## Professional Summary

Senior Software Engineer with **4+ years of experience** building distributed, event-driven backend systems for learning platforms serving **100K+ users**. Specialized in real-time services, authentication, media delivery, and Kafka-based architectures deployed on **Azure AKS**. Recently focused on AI systems — including **RAG-based search**, **LLM evaluation pipelines**, and **vector search** using OpenAI and Claude.

Started as a frontend intern, progressively took ownership of full-stack and backend microservices, and ultimately led backend architecture for a greenfield digital transformation project (TikMe / Esuahi).

---

## Career Timeline

| Period | Company / Payroll | Role | Focus |
|--------|------------------|------|-------|
| Nov 2021 – Mar 2023 (~1.5 yrs) | Topica / Skuad | Intern → SDE | Frontend-heavy; Edumall & early NativeX |
| Apr 2023 – Apr 2024 (~1 yr) | NativeX (payroll: GoEnglishX) | SDE | Full-stack feature development; product launch phase |
| Apr 2024 – Jun 2025 (~1.25 yrs) | NativeX (payroll: GoEnglishX) | SDE II | Backend ownership: Identity, Wallet, Scheduling, Notification services |
| Jul 2025 – Mar 2026 (~9 months) | Esuahi (payroll: GoEnglishX) | Senior SDE | Greenfield TikMe backend; dev/staging — not publicly launched |
| Mar 31, 2026 | — | Resigned | Company requested part-time (no product roadmap); resigned rather than accept part-time |

**Total experience: 4+ years** (Nov 2021 – Mar 2026)

> **Note for interviews:** GoEnglishX is the payroll/holding company opened by my manager — not a separate product. NativeX and Esuahi were the actual products I worked on across those phases. The SDE → SDE II promotion at NativeX reflects the shift from feature development to full backend service ownership.

---

## Identity & Strengths

- **Backend-heavy full-stack engineer** with a solid frontend foundation
- **End-to-end ownership**: designed, built, deployed, and handed over production microservices
- Strong in: distributed systems, event-driven architecture, real-time systems, API design, AI/LLM integration
- **Cloud-native**: Azure AKS, Azure DevOps CI/CD, Azure Key Vault, Azure Blob Storage
- Experienced in taking **greenfield projects from 0 → production** at scale (NativeX: 100K+ users)
- **Award**: Best Stand-alone Remote Contributor — NativeX, 2023

---

## Education

**B.Tech in Computer Science Engineering**
JNTUH, Hyderabad | *Aug 2016 – Feb 2021*

---

## Core Technical Stack

| Layer | Technologies |
|-------|-------------|
| Backend | NestJS, Node.js, TypeScript, Python, Express.js |
| Frontend | React.js, Next.js, MUI, Tailwind, Shadcn |
| API | GraphQL (Apollo Federation v2), REST APIs |
| Databases | MongoDB, PostgreSQL (TypeORM), Redis |
| Messaging | Apache Kafka, BullMQ |
| Real-time | WebSockets (WSS), Redis Pub/Sub |
| Auth | JWT (RS256), Argon2, OAuth, OTP flows |
| Cloud | Azure AKS, Azure Blob Storage, Azure DevOps, Azure Key Vault, VNCDN, AWS |
| AI/LLM | OpenAI (GPT-4o, Embeddings, Whisper), Claude (Anthropic), Azure Speech SDK, Deepgram, RAG Pipelines, Vector Search (MongoDB Atlas), LLM Streaming, Prompt Engineering, Structured Outputs, MCP |
| Authorization | Cerbos (policy-based RBAC) |
| Architecture | Distributed Systems, Event-Driven Architecture, Scalable System Design, Fault Tolerance, Idempotency, Rate Limiting, Retry Strategies |
| DevOps | Docker, Kubernetes (Helm), Azure Pipelines, Azure Container Registry (ACR), CI/CD, Nginx |
| Testing | Jest, Playwright, Unit & Integration Testing |
| Data | Data Modeling, Indexing, ACID Transactions, Query Optimization |

---

## Experience Deep-Dives

---

### Esuhai Co., Ltd. — Senior Software Engineer
**Jul 2025 – Mar 2026 (9 mos) | Remote**

Leading Vietnamese-Japanese workforce and education company. Their core business spans language training, labour dispatch (Vietnam → Japan), HR services, and market entry support. **TikMe** was the initiative to digitize their entire offline operation into a scalable online platform.

**Context:** Greenfield tech on top of a mature org — engineering was new, but business rules were battle-tested over years of offline delivery. Product reached dev/staging; not publicly launched as of my last working day (Mar 31, 2026).

**Key Contributions:**
- **TikMe Architecture**: Architected the full NestJS microservices backend on Azure AKS, modernizing a 25-year-old education platform.
- **Core Services**: Owned end-to-end development of Auth, Media, and Chat services using Kafka/Redis event-driven workflows.
- **Real-time WebSocket Service**: Built a platform-wide WebSocket service for chat, notifications, and live updates with low-latency delivery (10,000 connections/pod).
- **Rocket.Chat Integration**: Integrated Rocket.Chat with a custom GraphQL wrapper and fine-grained RBAC using Cerbos.
- **Infrastructure**: Deployed microservices to Azure AKS with gateway-level WSS routing; managed secrets via Key Vault; ensured reliable CI/CD rollouts.
- **Auth & Security**: Designed JWT/Redis auth with rate limiting and auditing; **reduced DB load by 90%** via hybrid session storage.
- **LLM Evaluation Service**: Implemented a provider-abstracted evaluation engine over OpenAI and Claude, enabling AI-based assessment scoring and automated summaries via GraphQL.
- **RAG Search System**: Built a RAG-based internal search over Jira and Confluence using Python, MCP, and OpenAI embeddings with MongoDB Atlas Vector Search and GPT-4o streaming.

**Interview angle:** *"At Esuhai I wasn't just building features — I was digitising an entire business. That meant understanding their offline model deeply before writing a single line of code."*

---

### NativeX Edtech — Software Engineer → Software Engineer II
**Apr 2023 – Jun 2025 (~2.25 yrs) | Remote**

English learning platform for Vietnamese working professionals. Greenfield startup from scratch; I joined early and helped build the platform from zero to serving **100K+ trial users** with **~5K paid subscribers**.

**Phase 1 — SDE (Apr 2023 – Apr 2024):** Full-stack feature development. Worked on frontend learning features (question types, progress views, calendar-based scheduling) and began contributing to backend services.

**Phase 2 — SDE II (Apr 2024 – Jun 2025):** Transitioned to full backend ownership of core platform services.

**Key Contributions:**
- **Full Backend Ownership**: Led Identity, Wallet, Scheduling, and Notification services end-to-end.
- **Notification Pipeline**: Designed a high-throughput weekly pacing notification system for paid subscribers — aggregated data across **4 upstream microservices** using `Promise.allSettled` (partial failure tolerance), delivered via Kafka, with a **500 notifications/min** Redis token bucket rate limiter and idempotent delivery.
- **Logging Optimization**: Improved backend logging quality — reduced noise while preserving diagnostics, **cutting logging costs by ~25%**.
- **Business Logic**: Built backend workflows for paid users enforcing eligibility rules, purchase limits, credit allocation, and package constraints via internal admin APIs.
- **Production Ops**: Actively monitored cloud logs and debugged critical registration and mobile number validation flows in production.
- **Frontend (Next.js)**: Contributed to core learning features — interactive question types, progress dashboards, test workflows, and calendar-based scheduling — as part of a major UI revamp.
- **Tech Stack**: React.js, Next.js, Node.js, NestJS, TypeScript, GraphQL (Apollo), MongoDB, PostgreSQL, Kafka, Redis, Docker, Jest.

**Interview angle:** *"I've worked in a startup where I had to make decisions with incomplete information, move fast, and own the outcome — not just implement tickets. We went from zero to 100K+ users, and I owned the infrastructure that made that scale possible."*

---

### Topica Edtech Group — Software Engineer
**Nov 2021 – Mar 2023 (~1.5 yrs) | Remote**

Leading online education provider in Southeast Asia.

- **Rapid Growth**: Joined as an intern; converted to full-time within **three months** based on performance.
- **Edumall**: Built responsive, reusable frontend components for production releases on Edumall (an Udemy-like platform).
- **NativeX (early stage)**: Contributed to the early development of NativeX — frontend learning flows, testing modules, and live session interfaces.
- **Global Collaboration**: Worked with cross-functional, remote teams across India and Vietnam in Agile sprints and code reviews.
- **Tech**: Next.js, React.js, JavaScript, TypeScript, Apollo GraphQL, MUI, CSS3.

---

## ESUHAI / TikMe — Architecture Overview

**Product:** TikMe — greenfield online platform for Vietnamese and Japanese market, covering skills learning, job training, HR services, and dispatch management.
**Status:** Development/staging only — **not publicly launched** as of March 31, 2026.
**Platform:** NestJS microservices on Azure AKS, composed via Apollo Federation Gateway.

```
Clients (Web / Mobile)
        │
        ▼
  API Gateway (NestJS + Apollo Federation)
  - GraphQL federation across all subgraphs
  - Cerbos RBAC authorization
  - JWT extraction + context injection
  - Rate limiting, IP filtering
  - REST reverse proxy (Zoom OAuth, Media, Webhooks)
  - Deployed on AKS
        │
        ├─── Auth Service (subgraph)         → PostgreSQL, Redis, Kafka
        ├─── Chat Service (subgraph)         → MongoDB, Redis Pub/Sub, Kafka, Rocket.Chat
        ├─── Media Service (subgraph)        → MongoDB, Azure Blob, VNCDN
        ├─── Evaluation Service (subgraph)   → MongoDB, Azure Speech, Claude, OpenAI, Kafka
        ├─── [User / Curriculum / Class Services]
        │
        └─── Real-Time Service (WebSocket)   → Redis Pub/Sub, JWT RS256

Event Bus:  Kafka (domain events, durable & replayable)
Cache/RT:   Redis (sessions, rate limits, Pub/Sub, idempotency)
Secrets:    Azure Key Vault (CSI driver → Kubernetes)
CI/CD:      Azure Pipelines → Docker → ACR → Helm → AKS
```

---

## Microservice Deep-Dives

### 1. API Gateway

**Role:** Unified entry point — GraphQL Federation Gateway + secure REST reverse proxy.
**Stack:** NestJS, Apollo Federation Gateway, Redis, Cerbos, express-rate-limit

**Key decisions:**
- Apollo Federation: each domain service owns its schema (subgraph); gateway composes them.
- Cerbos for RBAC: policy-based, decoupled from app logic; evaluates principal + resource + action.
- GraphQL protection: depth limiting, query complexity limits, introspection disabled in prod.
- REST proxy for Zoom OAuth callbacks, media streaming, webhook ingestion.
- Rate limiting: `express-rate-limit` + Redis; IP whitelisting; HTTP 429 on breach.

**Request flow:** IP filter → rate limit → query depth/complexity → JWT extract → Cerbos auth → subgraph route

---

### 2. Auth Service

**Stack:** NestJS, GraphQL (Apollo Federation v2), PostgreSQL (TypeORM), Redis (ioredis), Kafka, JWT RS256, Argon2

**Responsibilities:** Login/Logout, OTP registration, refresh token rotation, session tracking, admin password reset, rate limiting, audit logging, Kafka user lifecycle events.

**Key decisions:**
- **JWT RS256**: private key signs tokens; public key distributed to all services — distributed verification, no SPOF.
- **Argon2**: memory-hard hashing (resistant to GPU/ASIC attacks).
- **PostgreSQL (not MongoDB)**: auth data is relational (users ↔ sessions ↔ OTPs); ACID guarantees required.
- **Redis**: session store, rate limit counters, single-use reset tokens with TTL.
- **90% DB load reduction**: hybrid session storage — hot sessions in Redis, cold in PostgreSQL.
- Rate limits are per-operation: separate limits for login, OTP request/verify, forgot-password.

**Kafka events published:**
- `Auth.created` — OTP registration complete
- `Auth.password.created` — first password set
- `Auth.user.created` — admin user creation

---

### 3. Chat Service

**Stack:** NestJS, Apollo Federation v2, MongoDB, Redis (cache + Pub/Sub), Rocket.Chat (REST), Kafka, Cerbos

**Key architecture decisions:**
- **Rocket.Chat as black-box persistence**: all message storage delegated to RC via REST API; chat-service owns business logic + access control. RC never exposed to frontend.
- **Redis Pub/Sub for real-time** (not Kafka): sub-millisecond latency vs. Kafka's higher latency.
- **Kafka for domain events**: durable/replayable for user sync and class group provisioning.
- **HTTP for sending messages** (not WebSocket): enables idempotency, retry, rate limiting, per-request auth.
- **Idempotency via Redis**: dedup key (`idempotency:<key>`) with configurable TTL.

**DM access rules (business logic):**
- Student ↔ Student: NOT allowed
- Coach ↔ Coach: NOT allowed
- Coach ↔ Student: allowed only if in the same class

**Real-time flow:**
1. Client → GraphQL mutation → chat-service
2. Idempotency check (Redis)
3. Get RC user token (cached in Redis)
4. Send to Rocket.Chat REST API
5. Update unread counts (MongoDB)
6. Publish to Redis channel (`chat.message.created`)
7. Real-time service picks up → pushes to WebSocket clients

**Kafka events consumed:** `Auth.user.created`, `User.profile.updated`, `Class.batch.created`, `Class.batch.students_enrolled/removed`

**Redis key map:**
| Key | Purpose |
|-----|----------|
| `rc:token:<rcUserId>` | Cached RC impersonation token |
| `room:<id>` | Room metadata cache |
| `idempotency:<key>` | Message dedup |
| `chat.message.created` | Pub/Sub channel |
| `chat.typing.indicator` | Pub/Sub channel |
| `chat.unread.updated` | Pub/Sub channel |

**Rate limits:** sendMessage: 30/min | createRoom: 5/min | Default: 100/min

---

### 4. Real-Time Service

**Stack:** NestJS, WebSocket (WSS), Redis Pub/Sub, JWT RS256

**Design principle:** NOT chat-only. Generic event delivery platform — no business logic, no data storage.

| Current use cases | Future use cases |
|-------------------|-----------------|
| Chat messages | Push notifications |
| Typing indicators | Live class events |
| Unread updates | Payment confirmations |
| User presence | Participant events |

**Connection lifecycle:**
1. Client connects with JWT token in query param
2. JWT validated (RS256, public key)
3. Connection registered in in-memory map
4. Presence set to `online` in Redis (TTL 90s)
5. Service subscribes to Redis channels
6. Events delivered to user's connections
7. On disconnect: cleanup connection, set presence `offline`

**Capacity:** Max 5 connections/user (multi-device) | Max 10,000 connections/pod | Heartbeat: 30s ping, 60s timeout

**Horizontal scaling guidelines:**
- 1 pod → up to 2K connections
- 2–3 pods → 8K–20K connections
- 5 pods → ~50K connections
- Stateless — no sticky sessions needed; Redis acts as shared event bus across all pods

**Why separate from chat-service:** Independent scaling, reusable across services (notifications, live class), fault isolation — a crash in the WS layer doesn't take down chat business logic.

---

### 5. Media Service

**Stack:** NestJS, Apollo Federation v2, MongoDB (Mongoose), Azure Blob Storage, VNCDN, JWT RS256

**Upload flow:**
1. `initUpload` mutation → returns SAS (Shared Access Signature) URL
2. Client uploads directly to Azure Blob (bypasses service, reduces bandwidth)
3. `completeUpload` mutation → marks asset as `READY` in MongoDB

**Asset lifecycle:** `INITIATED` → `READY` → `DELETED` (soft delete)

**Key decisions:**
- **Metadata + Blob separation**: MongoDB owns metadata; Azure Blob owns raw bytes — independently scalable.
- **SAS URLs**: no file proxying = better performance, lower cost.
- **CDN (VNCDN)**: signed tokens for private content, unsigned for public.
- **DataLoader**: batching GraphQL queries to prevent N+1.

**Size limits:** Images 10MB | Audio 50MB | Video 500MB | Documents 25MB

**Azure Blob containers:** `media-ugc` (user content), `media-content` (curriculum), `publiccontainer`

---

### 6. Evaluation Service

**Stack:** NestJS 11, GraphQL (Apollo Federation), MongoDB, Azure Speech SDK, Claude (Anthropic), OpenAI, Kafka

**Three evaluation engines:**

| Engine | Description |
|--------|-------------|
| STT (Azure Speech) | Batch audio — transcription + pronunciation/fluency/prosody/accuracy scores, phoneme analysis |
| AI (Claude) | Rubric-based qualitative feedback from dynamic prompt templates stored in MongoDB |
| Manual | Teacher grading via GraphQL mutations; optionally emits Kafka event to update student progress |

**Key decisions:**
- **Vendor Factory Pattern**: `VendorProcessorFactory` abstracts STT and AI providers. Swapping vendors is a config change, not a code change.
- **Dynamic Prompt Templates**: Claude prompts stored in MongoDB, keyed by string. Educators update rubrics from admin UI without code deployment.
- **Async AI trigger**: After STT completes, if score below threshold, Claude evaluation fires as a non-blocking async task.
- **Retry with exponential backoff**: `withRetry()` wraps all external calls (1s → 2s → 4s).
- **Cost tracking**: Every Claude call logs input/output token counts and dollar cost to MongoDB.
- **MongoDB over PostgreSQL**: evaluation schemas differ per subject type; flexible document model avoids migrations.

**Combined oral assessment flow:**
```
Student submits audio → Media Service (Azure Blob)
  → Evaluation Service: download + WAV convert (FFmpeg) + Azure Speech
  → MongoDB (STT record, COMPLETED)
  → [async] Claude: load prompt template → rubric feedback → MongoDB (linked AI record)
  → [optional] Teacher manual review
  → Frontend: Azure scores + Claude feedback + teacher comments
```

---

## AI / RAG System

**What it is:** Enterprise-grade internal search for engineers to query across Jira and Confluence using natural language.

**Stack:** Python, OpenAI embeddings, MongoDB Atlas Vector Search, GPT-4o streaming, MCP (Model Context Protocol)

**Flow:**
1. Documents ingested from Jira / Confluence
2. Chunked and embedded via OpenAI embeddings
3. Stored in MongoDB Atlas Vector Search
4. User query → embed query → vector similarity search → retrieve top-k chunks
5. GPT-4o generates streaming answer with source attribution

**Capabilities:** Semantic search (not keyword), source attribution, streaming responses, MCP-based multi-source architecture.

---

## Rocket.Chat Integration

**Role:** Black-box message persistence engine, internal-only. Never user-facing.

**Integration pattern:**
- chat-service communicates via RC REST API only
- Admin PAT stored in Azure Key Vault
- **User impersonation**: chat-service generates per-user tokens via RC's `users.createToken` — messages sent as actual user, not admin
- Tokens cached in Redis (`rc:token:<rcUserId>`) with configurable TTL
- RC MongoDB is completely isolated — chat-service never queries it directly

**Why Rocket.Chat:** Self-hosted (data control, no SaaS costs), battle-tested persistence, replaceable without changing the GraphQL contract exposed to clients.

---

## NativeX — Notification Pipeline (Key Contribution)

**Kafka notification pipeline** — weekly pacing notifications for ~5K paid users (100K+ total on platform):
- Aggregated data from **4 upstream microservices** using `Promise.allSettled` (partial failure tolerance)
- **Redis token bucket rate limiter**: 500 notifications/min
- **Idempotent delivery**: dedup key stored in Redis (prevents double-sends on retries)
- **Result**: reliable delivery + **~25% reduction in logging costs** (removed noisy log patterns)

---

## Cloud & DevOps

| Area | Details |
|------|---------|
| Kubernetes | Azure AKS, Helm charts for all services |
| CI/CD | Azure Pipelines: build → Docker → push to ACR → Helm deploy |
| Secrets | Azure Key Vault + Kubernetes CSI driver (no secrets in env files in prod) |
| Container registry | Azure Container Registry (ACR) |
| Ingress | Azure Application Gateway / NGINX |
| WebSocket routing | API Gateway configured for WebSocket protocol upgrade |
| Rollback | `helm rollback` to previous release |
| Health probes | Startup, readiness, liveness probes configured per service |

---

## Key Architectural Decisions (with Reasoning)

| Decision | Why |
|----------|-----|
| Apollo Federation for GraphQL | Each service owns its schema; gateway composes — avoids a single monolithic schema |
| Cerbos for RBAC | Policy-based auth decoupled from app code; policies versioned separately; testable without app |
| Redis Pub/Sub for real-time (not Kafka) | Sub-millisecond latency critical for chat; Kafka latency too high for live events |
| Kafka for domain events | Durability, replay capability, consumer groups — right tool for user/class lifecycle events |
| Separate real-time-service | Independent scaling, reusability across services, isolation from business logic |
| Rocket.Chat as black-box | Self-hosted message persistence; abstracted behind chat-service GraphQL contract — replaceable |
| PostgreSQL for Auth | Auth data is relational (users ↔ sessions ↔ OTPs); ACID guarantees required |
| MongoDB for Chat/Media/Eval | Flexible document schema suits message metadata, media variants, and evaluation schemas |
| SAS URLs for media | Clients upload/download directly to Azure Blob — service stays stateless, no bandwidth bottleneck |
| HTTP for sending messages (not WS) | Enables idempotency, retry, per-request rate limiting, and auth validation |
| Argon2 for passwords | Memory-hard hash — resistant to GPU/ASIC brute force; better than bcrypt |
| JWT RS256 (asymmetric) | Services verify tokens with public key without calling auth-service — no SPOF |
| Vendor Factory Pattern (Eval) | Swap AI/STT providers via config change, not code change — future-proof |
| Async AI trigger (Eval) | Client doesn't wait for LLM — STT is sync, Claude is fire-and-forget |

---

## Awards & Recognition

| Award | Year |
|-------|------|
| Best Stand-alone Remote Contributor — NativeX | 2023 |

Recognized for independently delivering key features and improving workflows in a fully remote setup.

---

## Interview-Ready Metrics & Facts

| Fact | Detail |
|------|--------|
| Total experience | 4+ years (Nov 2021 – Mar 2026) |
| Platform users (NativeX) | 100K+ total, ~5K paid |
| Esuahi / TikMe status | Dev/staging only — not launched to production users |
| Services built end-to-end | API Gateway, Auth, Chat, Real-Time, Media, Evaluation |
| DB load reduction (Auth) | 90% via hybrid session storage (Redis + PostgreSQL) |
| Logging cost reduction (NativeX) | ~25% |
| WebSocket capacity per pod | 10,000 connections |
| Presence TTL | 90 seconds (auto-cleanup) |
| Chat message rate limit | 30/min per user |
| NativeX notification rate limit | 500/min (Redis token bucket) |
| Media size limits | Images 10MB, Audio 50MB, Video 500MB, Documents 25MB |
| JWT algorithm | RS256 (asymmetric) |
| Password hashing | Argon2 |
| Notification aggregation | 4 upstream microservices via `Promise.allSettled` |
| AI cost tracking | Per-call token count + dollar cost logged to MongoDB |
| Last working day | March 31, 2026 |

---

## Interview Narrative Angles

### NativeX — Startup from Scratch
*"I've worked in a startup where I had to make decisions with incomplete information, move fast, and own the outcome — not just implement tickets. We went from zero to 100K+ users, and I owned key parts of the infrastructure that made that scale possible."*

### Esuahi / TikMe — Digital Transformation
*"At Esuahi I wasn't just building features — I was digitising an entire business. That meant understanding their offline model deeply — how they run classes, manage students, dispatch trainees — before writing a single line of code."*

### On Career Growth
*"I joined as a frontend intern and progressively took on backend ownership, then senior-level architecture. Every step was driven by team need and my own initiative to solve harder problems."*

### On AI/LLM Work
*"I've gone beyond just calling OpenAI APIs. I built evaluation pipelines with provider abstraction, cost tracking per call, dynamic prompt templates updatable by non-engineers, and a full RAG system with vector search and GPT-4o streaming over internal company knowledge."*
