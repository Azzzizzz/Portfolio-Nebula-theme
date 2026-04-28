# My Profile — Syed Abdul Aziz

> Synthesized from resume, professional experience notes, and microservice handover docs (Esuahi-Docs/).
> Use this as the authoritative source for generating interview content.

---

## Career Timeline

| Period | Company / Payroll | Role | Focus |
|--------|------------------|------|-------|
| Nov 2021 – Mar 2023 (~1.5 yrs) | Topica / Squad (under Mr. Sandeep) | Intern → SDE | Frontend-heavy; worked on NativeX products |
| Apr 2023 – Jun 2025 (~2.25 yrs) | NativeX (payroll: GoEnglishX) | SDE → SDE II | Full NativeX lifecycle: product launch → feature development → production maintenance |
| Jul 2025 – Mar 2026 (~9 months) | Esuahi (payroll: GoEnglishX) | Senior SDE | Transitioned Esuahi's offline LMS to online (TikMe); product on dev/staging, not publicly launched |
| Mar 31, 2026 | — | Resigned | Company requested part-time due to no product roadmap (management focused on offline business); resigned rather than accept part-time. |

**Total experience: 4+ years** (Nov 2021 – Mar 2026)

> **Note for interviews:** GoEnglishX is the payroll/holding company opened by my manager — not a separate product or employer. NativeX and Esuahi were the actual products I worked on across those phases.

---

## Background Context — Interview Narrative

### NativeX — Startup from Scratch
NativeX was a **greenfield ed-tech startup** focused on **English learning for Vietnamese working professionals** — helping them improve communication skills for career growth. There was no existing codebase or product history. I joined early (via Squad/Topica) and helped build the platform from the ground up — from zero to a platform serving 100K+ users with ~5K paid subscribers.

This means I have hands-on experience with:
- Making early architecture decisions that go into **production** and have to scale
- Working with **no blueprint** — figuring out patterns, tooling, and design as you go
- Owning features end-to-end: design → build → deploy → fix production bugs → iterate

**Interview angle:** *"I've worked in a startup where I had to make decisions with incomplete information, move fast, and own the outcome — not just implement tickets."*

---

### Esuahi / TikMe — Digital Transformation
Esuahi is an **established organization headquartered in Ho Chi Minh City, Vietnam**, operating at the intersection of Vietnamese and Japanese markets. Their core business:
- **Education & training**: Japanese language, business manners, professional mindset
- **Labour dispatch**: sending Vietnamese technical intern trainees to Japan (3-year programs)
- **Advanced engineer placement**: long-term work placements in Japan
- **HR services in Vietnam**: career development and human resource introduction
- **Vietnam market entry support**: helping Japanese companies expand into Vietnam

They had years of these **offline operations** — coaches, students, dispatch programs — but **no digital platform**. TikMe was the initiative to bring all of this online. I joined to architect and build the entire backend infrastructure from scratch.

This is a different challenge from a pure startup:
- **Translating complex offline workflows into software**: dispatch programs, class structures, coach-student relationships, HR pipelines — all had to become data models and business logic
- **Multi-market product**: Vietnamese and Japanese users, with different expectations and content needs
- **Greenfield tech on top of a mature org**: the engineering was new, but the business rules were battle-tested over years of offline delivery

**Interview angle:** *"At Esuahi I wasn't just building features — I was digitising an entire business. That meant understanding their offline model deeply — how they run classes, manage students, dispatch trainees — before writing a single line of code."*

---

## Identity & Strengths

- Backend-heavy full-stack engineer
- **End-to-end ownership**: designed, built, deployed, and handed over production microservices
- Strong in: distributed systems, event-driven architecture, real-time systems, API design, AI/LLM integration
- Cloud-native: Azure AKS, Azure DevOps CI/CD, Azure Key Vault, Azure Blob Storage

---

## Core Stack

| Layer | Technologies |
|-------|-------------|
| Backend | NestJS, Node.js, TypeScript, Express |
| Frontend | React, TypeScript |
| API | GraphQL (Apollo Federation v2), REST |
| Databases | MongoDB, PostgreSQL (TypeORM), Redis |
| Messaging | Apache Kafka |
| Real-time | WebSockets, Redis Pub/Sub |
| Auth | JWT (RS256), Argon2, OTP flows |
| Cloud | Azure AKS, Azure Blob Storage, Azure DevOps, Azure Key Vault, VNCDN |
| AI/LLM | OpenAI, Claude (Anthropic), Whisper, Azure Speech, Deepgram |
| Authorization | Cerbos (policy-based RBAC) |
| DevOps | Docker, Kubernetes (Helm), Azure Pipelines, Azure Container Registry |

---

## ESUHAI / TikMe LMS — Architecture Overview

**Product:** TikMe — a brand new online platform for the Vietnamese and Japanese market, planned to cover skills learning, job training, HR services, and more. Previously the company operated mostly offline; TikMe was the greenfield move to bring everything online.
**Status:** Development/staging only — product was **not publicly launched**. Infrastructure and all microservices were built and running on a dev/staging environment, but the platform had not gone live to end users as of my last working day (March 31, 2026).
**Platform:** NestJS microservices on Azure AKS, connected via Apollo Federation Gateway

### System Components

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
        ├─── Auth Service (subgraph)
        ├─── Chat Service (subgraph)
        ├─── Media Service (subgraph)
        ├─── Evaluation Service (subgraph)
        ├─── [User / Curriculum / Class Services]
        │
        └─── Real-Time Service (WebSocket only, not GraphQL)

Event Bus: Kafka (domain events)
Cache / Pub-Sub: Redis
Secrets: Azure Key Vault (CSI driver → Kubernetes)
CI/CD: Azure Pipelines → Docker → ACR → Helm → AKS
```

---

## Microservice Deep-Dives

### 1. API Gateway

**What it is:** Unified entry point for all clients — acts as GraphQL Federation Gateway + secure REST reverse proxy.

**Built with:** NestJS, Apollo Federation Gateway, Redis, Cerbos, express-rate-limit

**Key design decisions:**
- Apollo Federation chosen so each domain service owns its own schema (subgraph); gateway composes them
- Cerbos for policy-based RBAC — decoupled from app logic; evaluates principal + resource + action
- GraphQL protection: depth limiting, query complexity limits, introspection disabled in prod, malicious query detection
- REST proxy for non-GraphQL flows: Zoom OAuth callbacks, media streaming, webhook ingestion
- Rate limiting via `express-rate-limit` + Redis; IP whitelisting for trusted systems; HTTP 429 on breach

**Request flow:**
1. Client sends GraphQL request
2. IP blocking + rate limiting
3. Query depth/complexity validation
4. JWT extraction → user context injected into headers
5. Cerbos authorization check (operation-level + subgraph-level)
6. Route to correct subgraph
7. Response returned

**Auth model:** Gateway extracts JWT, injects user context headers into all subgraph calls. Services trust the gateway — no re-validation needed.

**Deployment:** AKS, ingress via Azure Application Gateway / NGINX. Internal services never exposed publicly.

---

### 2. Auth Service

**What it is:** Standalone NestJS GraphQL microservice (Apollo Federation subgraph) for all authentication and session management.

**Built with:** NestJS, GraphQL (schema-first, Federation v2), PostgreSQL (TypeORM), Redis (ioredis), Kafka, JWT RS256, Argon2

**Responsibilities:**
- Login / Logout
- OTP-based registration and forgot-password
- Refresh token rotation with session tracking
- Create password / Reset password / Change password
- Admin password reset
- Session persistence and revocation
- Rate limiting + audit logging per operation
- Publishes Kafka events on user lifecycle

**Key design decisions:**
- **JWT RS256** (asymmetric): private key signs tokens, public key distributed to all services for verification — services can verify without calling auth-service
- **Argon2** for password hashing (memory-hard, resistant to GPU attacks)
- **Redis** for: session store, rate limit counters, single-use reset tokens
- **PostgreSQL** (not MongoDB) — auth data is relational and requires ACID guarantees (users, sessions, OTPs, login attempts)
- Rate limiting is per-operation and configurable: separate limits for login, forgot-password, OTP request, OTP verify
- Refresh token rotation: old session revoked on each refresh; full session invalidation on logout

**Kafka events published:**
- `Auth.created` — OTP registration complete
- `Auth.password.created` — first password set
- `Auth.user.created` — admin user creation

**Security details:**
- Reset tokens: single-use, stored in Redis with TTL
- Secrets managed via Azure Key Vault (CSI driver)
- Rate limit responses: standard error codes with clear messaging

**Rate limit config (example):**
- Login: configurable max attempts per window
- OTP request/verify: separate limits to prevent OTP brute force
- Forgot password: separate limit

---

### 3. Chat Service

**What it is:** Core messaging backend. NestJS Apollo Federation subgraph that wraps Rocket.Chat for message persistence while owning all business logic, access control, and real-time event publishing.

**Built with:** NestJS, Apollo Federation v2, MongoDB, Redis (cache + Pub/Sub), Rocket.Chat (REST), Kafka (consumer), Cerbos

**Responsibilities:**
- User sync (TikMe ↔ Rocket.Chat identity mapping)
- Room management: DM, Group, CLASS_GROUP
- Message send/delete with idempotency
- Paginated message history
- Unread count tracking
- RBAC via gateway (Cerbos)
- Kafka consumer for user and class lifecycle events
- Redis Pub/Sub for real-time event delivery to real-time-service

**Key architecture decisions:**
- **Rocket.Chat as black-box persistence engine** — all message storage delegated to RC via its REST API; chat-service owns business logic + access control on top. RC is never exposed to frontend.
- **Redis Pub/Sub for real-time** (not Kafka) — latency is critical for chat; Redis gives sub-millisecond pub/sub vs Kafka's higher latency
- **Kafka for domain events** — durable, replayable events for user sync and class group provisioning
- **HTTP (not WebSocket) for sending messages** — enables idempotency, retry, rate limiting, per-request auth validation. WebSocket used only for receiving events.
- **Idempotency via Redis** — dedup key prevents duplicate messages; `idempotency:<key>` with configurable TTL

**DM access rules (business logic example):**
- Student ↔ Student: NOT allowed
- Coach ↔ Coach: NOT allowed
- Coach ↔ Student: allowed only if in the same class

**Real-time flow:**
1. Client sends message via GraphQL mutation
2. chat-service validates idempotency
3. Gets RC user token (cached in Redis)
4. Sends to Rocket.Chat REST API
5. Updates unread counts in MongoDB
6. Publishes to Redis channel (`chat.message.created`)
7. real-time-service picks up from Redis and pushes to WebSocket clients

**Kafka events consumed:**
- `Auth.user.created` → sync user to Rocket.Chat
- `User.profile.updated` → update RC profile
- `Class.batch.created` → create CLASS_GROUP room
- `Class.batch.students_enrolled` / `removed` → add/remove room members

**Redis keys:**
- `rc:token:<rcUserId>` — cached RC impersonation token
- `room:<id>` — room metadata cache
- `idempotency:<key>` — message dedup
- `chat.message.created`, `chat.typing.indicator`, `chat.unread.updated` — Pub/Sub channels

**Rate limits:**
- sendMessage: 30/min
- createRoom: 5/min
- Default: 100/min

---

### 4. Real-Time Service

**What it is:** Platform-wide WebSocket gateway. Pure delivery engine — no REST, no GraphQL, no business logic, no data storage. Subscribes to Redis Pub/Sub and pushes events to connected clients via WebSocket.

**Built with:** NestJS, WebSocket (WSS), Redis Pub/Sub, JWT RS256

**Key design principle — NOT chat-only.** It is a generic event delivery platform:

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

**Limits:**
- Max 5 connections per user (multi-device)
- Max 10,000 total connections per pod
- Rate limit: 60 messages/min per connection
- Heartbeat: ping every 30s, timeout after 60s

**Scaling strategy:**
- Stateless — no sticky sessions needed
- Redis acts as shared event bus across all pods
- Scale horizontally: each pod subscribes to same Redis channels
- Guidelines: 1 pod up to 2k connections, 2–3 pods for 8k–20k, 5 pods for 50k

**Why separate service (not inside chat-service):**
- Independent scaling: WebSocket connections scale differently from request/response
- Reusable: other services (notifications, live class) can publish events without coupling to chat
- Isolation: a crash in the WS layer doesn't take down chat business logic

**Redis vs Kafka choice for real-time:**
- Redis chosen for sub-millisecond latency, no persistence overhead
- Future path: Kafka → bridge service → Redis → WS (for durability when needed)

---

### 5. Media Service

**What it is:** System of record for all media assets on the platform — manages upload lifecycle, secure access URLs, CDN integration, and streaming.

**Built with:** NestJS, Apollo Federation v2, MongoDB (Mongoose), Azure Blob Storage, VNCDN, JWT RS256

**Upload flow:**
1. `initUpload` mutation → returns SAS (Shared Access Signature) URL
2. Client uploads directly to Azure Blob (bypasses service, reduces bandwidth)
3. `completeUpload` mutation → marks asset as `READY` in MongoDB

**Asset status lifecycle:** `INITIATED` → `READY` → `DELETED` (soft delete)

**Access model:**
- Private assets: SAS URL (time-limited, user/org scoped)
- Public assets: unsigned CDN URL
- CDN optional: env-flag controlled; falls back to SAS if disabled

**Streaming:**
- Range-header supported streaming via `/api/edge/media/` and `/api/public/media/` endpoints
- Private streams: `Cache-Control: no-store`
- Public streams: `Cache-Control: max-age`

**Storage containers (Azure Blob):**
- `media-ugc` — user-generated content (assignments, voice recordings)
- `media-content` — curated curriculum + class recordings
- `publiccontainer` — public assets

**Key design decisions:**
- **Metadata + Blob separation**: MongoDB owns metadata (ownership, status, variants), Azure Blob owns raw bytes — independently scalable
- **SAS URLs**: no file proxying through service = better performance, lower cost
- **CDN integration (VNCDN)**: signed CDN tokens for private content, unsigned for public
- **Variant support**: `metadata.variants.*` stores transcoded/resized versions without schema changes
- **DataLoader** used for batching GraphQL queries to prevent N+1

**Validation policies:**
- Content type validation (whitelist of allowed mediaTypes)
- Size limits per type: images 10MB, audio 50MB, video 500MB, documents 25MB
- TTL bounds enforced (min 60s, max 3600s)
- Ownership validation: user/org scoped access

**Contacts:** Service owner — Syed Abdul Aziz

---

### 6. Evaluation Service

**What it is:** Hybrid AI grading engine for TikMe — handles speech evaluation, AI rubric feedback, and manual teacher grading.

**Built with:** NestJS 11, GraphQL (Apollo Federation), MongoDB, Azure Speech SDK, Claude (Anthropic), OpenAI, Kafka

**Three evaluation engines:**

| Engine | Description |
|--------|-------------|
| STT (Azure Speech) | Batch audio evaluation — transcription + pronunciation/fluency/prosody/accuracy scores, word-level phoneme analysis |
| AI (Claude) | Rubric-based qualitative feedback from dynamic prompt templates stored in MongoDB |
| Manual | Teacher grading via GraphQL mutations; optionally emits Kafka event to update student progress |

**Key design decisions:**

- **Vendor Factory Pattern** — `VendorProcessorFactory` abstracts STT and AI providers. Azure Speech is active; Deepgram and Google are scaffolded. Claude is active; OpenAI is scaffolded. Swapping vendors is a config change, not a code change.
- **Batch STT, not real-time** — Students record and submit; audio downloaded as a buffer, converted to WAV via FFmpeg if needed, then sent to Azure Speech REST API in one call. Gives full audit trail + retry capability.
- **Dynamic Prompt Templates** — Claude prompts stored in MongoDB `PromptTemplate` collection, keyed by string. Educators can update rubrics from an admin UI without any code deployment.
- **Async AI trigger** — After STT completes, if score is below threshold, Claude evaluation fires as a non-blocking async task. Client doesn't wait.
- **Retry with exponential backoff** — `withRetry()` wraps all external calls: 1s → 2s → 4s.
- **Cost tracking** — Every Claude call logs input/output token counts and dollar cost to MongoDB. Aggregatable per student, course, or month.
- **MongoDB over PostgreSQL** — Evaluation schemas differ per subject type (pronunciation has phoneme scores, essays have rubric scores). Flexible document model avoids constant migrations.

**Combined oral assessment flow:**
```
Student submits audio → Media Service (Azure Blob)
  → Evaluation Service: download + WAV convert + Azure Speech
  → MongoDB (STT record, COMPLETED)
  → [async] Claude: load prompt template → rubric feedback → MongoDB (linked AI record)
  → [optional] Teacher manual review
  → Frontend: Azure scores + Claude feedback + teacher comments
```

**Security:** JWT RS256, SAS tokens for audio access, API keys in Azure Key Vault

---

## Rocket.Chat Integration

**Role in system:** Black-box message persistence engine, internal only. Never user-facing.

**Why Rocket.Chat:**
- Self-hosted (data control, no SaaS costs)
- Battle-tested message persistence and room management
- Can be replaced without changing the GraphQL contract exposed to clients

**Integration pattern:**
- chat-service communicates via RC REST API only
- Admin PAT stored in Azure Key Vault
- **User impersonation**: chat-service generates per-user tokens via RC's `users.createToken` endpoint — allows messages to be sent as the actual user, not as admin
- Tokens cached in Redis (`rc:token:<rcUserId>`) with configurable TTL
- RC MongoDB is completely isolated — chat-service never queries it directly

---

## AI / RAG System

**What it is:** Enterprise-grade internal search tool for engineers to query across Jira and Confluence using natural language.

**Built with:** OpenAI embeddings, MongoDB Atlas Vector Search, GPT-4o streaming, MCP (Model Context Protocol)

**Flow:**
1. Documents ingested from Jira / Confluence
2. Chunked and embedded via OpenAI embeddings
3. Stored in MongoDB Atlas Vector Search
4. User query → embed query → vector similarity search → retrieve top-k chunks
5. GPT-4o generates streaming answer with source attribution

**Key capabilities:**
- Semantic search (not keyword-based)
- Source attribution in every answer
- Streaming responses for low perceived latency
- MCP-based architecture for connecting to multiple data sources

---

## NativeX — Earlier Work

**Role:** SDE → SDE II (~3 years)
**Products:** NativeX (ed-tech product), later LMS platform

**Key contribution:**
- **Kafka notification pipeline** — weekly pacing notifications for ~5K paid users (100K+ total users on platform)
  - Aggregated data from 4 upstream microservices using `Promise.allSettled` (partial failure tolerance)
  - Redis token bucket rate limiter: 500 notifications/min
  - Idempotent delivery: dedup key stored in Redis
  - Result: reliable delivery + 25% reduction in logging costs (removed noisy log patterns)

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
| Apollo Federation for GraphQL | Each service owns its schema; gateway composes — avoids a single monolithic schema to maintain |
| Cerbos for RBAC | Policy-based authorization decoupled from application code; policies versioned separately; testable without app |
| Redis Pub/Sub for real-time (not Kafka) | Sub-millisecond latency critical for chat; Kafka latency too high for live events |
| Kafka for domain events | Durability, replay capability, consumer groups — right tool for user/class lifecycle events |
| Separate real-time-service | Independent scaling, reusability across services, isolation from business logic services |
| Rocket.Chat as black-box | Self-hosted message persistence; abstracted behind chat-service GraphQL contract — replaceable |
| PostgreSQL for Auth | Auth data is relational (users ↔ sessions ↔ OTPs); ACID guarantees required |
| MongoDB for Chat/Media | Flexible document schema suits message metadata and media variants |
| SAS URLs for media | Clients upload/download directly to/from Azure Blob — service stays stateless, no bandwidth bottleneck |
| HTTP for sending messages (not WS) | Enables idempotency, retry, per-request rate limiting, and auth validation |
| Argon2 for passwords | Memory-hard hash — resistant to GPU/ASIC brute force attacks; better than bcrypt |
| JWT RS256 (asymmetric) | Services verify tokens with public key without calling auth-service — distributed verification, no SPOF |

---

## Interview-Ready Metrics & Facts

| Fact | Detail |
|------|--------|
| Platform users (NativeX) | 100K+ total, ~5K paid |
| Esuahi / TikMe status | Dev/staging only — not launched to production users |
| Services built end-to-end | API Gateway, Auth, Chat, Real-Time, Media, Evaluation |
| WebSocket capacity per pod | 10,000 connections |
| Presence TTL | 90 seconds (auto-cleanup) |
| Chat message rate limit | 30/min per user |
| NativeX notification rate limit | 500/min (Redis token bucket) |
| Media size limits | Images 10MB, Audio 50MB, Video 500MB |
| JWT algorithm | RS256 (asymmetric) |
| Password hashing | Argon2 |
| Notification cost reduction | 25% logging cost reduction |
| Last working day | March 31, 2026 |
| Interview date | April 10, 2026 |
