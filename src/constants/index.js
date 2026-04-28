import { Github, Linkedin, Mail } from 'lucide-react';

export const personalInfo = {
  name: 'Syed Abdul Aziz',
  role: 'Senior Software Engineer',
  email: 'syedaziz9999@gmail.com',
  phone: '+91 8328082973',
  location: 'Hyderabad, India',
  timezone: 'Asia/Kolkata',
  bio: {
    title: 'Backend-heavy full-stack engineer shipping production AI systems.',
    description:
      'I build products from line one of the repo through the scaling pain that follows. Frontend roots, backend depth, and real production AI in the loop.',
    longDescription:
      'Across Topica, NativeX, and Esuahi, I moved from UI delivery into owning backend systems end to end: identity, notifications, real-time infrastructure, evaluation pipelines, and retrieval-backed AI tooling. The through-line is greenfield work that has to survive real users, not portfolio theater.',
  },
  social: [
    { name: 'Github', icon: Github, url: 'https://github.com/Azzzizzz' },
    { name: 'Linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/syed-abdul-aziz/' },
    { name: 'Email', icon: Mail, url: 'mailto:syedaziz9999@gmail.com' },
  ],
  availability:
    'open to senior backend & full-stack roles · replies within 24h',
};

export const navLinks = [
  { name: 'Now', href: '#now' },
  { name: 'Work', href: '#work' },
  { name: 'Stack', href: '#stack' },
  { name: 'Notes', href: '#notes' },
  { name: 'Contact', href: '#contact' },
];

export const indexEntries = [
  {
    num: '00',
    label: 'THE SHAPE',
    title: 'Backend-heavy full-stack. AI in production.',
    sub: 'Frontend roots. Three 0→1 builds shipped.',
    href: '#now',
  },
  {
    num: '01',
    label: 'NOW',
    title: 'Currently shipping: LLM evaluation engine',
    sub: 'Live inside Esuahi / TikMe',
    href: '#now',
  },
  {
    num: '02',
    label: 'SELECTED WORK',
    title: 'Three systems, three 0→1 stories',
    sub: 'NativeX first. TikMe + AI layer next.',
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
    sub: '/Syed_Abdul_Aziz_Software_Engineer.pdf',
    href: '#contact',
  },
];

export const nowCard = {
  eyebrow: '01 / Now',
  headline: 'From launch-day systems to production AI.',
  paragraphs: [
    'Right now I am shipping an evaluation engine that lets non-engineers adjust rubric logic without a deploy. Prompt templates live in MongoDB, provider routing spans Claude and OpenAI, and every call records token usage, cost, and latency.',
    'That work sits on top of the same backend instincts that scaled NativeX from launch to 100K+ trial users: event pipelines, failure tolerance, observability discipline, and systems that keep standing after the demo is over.',
  ],
  bullets: [
    'Greenfield backend architecture on Azure AKS',
    'Provider-abstracted LLM evaluation workflows',
    'RAG search over Jira and Confluence with streaming answers',
  ],
};

export const featuredCase = {
  id: 'nativex',
  num: '01',
  title: 'NativeX',
  period: '2023 — 2025',
  context: {
    startedFrom: 'Launch-day traffic. Near-zero paid users.',
    endedAt:
      '100K+ trial users. 5K+ paid. Best Stand-alone Remote Contributor 2023.',
    myRole: 'Backend owner for Identity, Wallet, Scheduling, and Notifications.',
  },
  problem:
    'Brand-new EdTech product, shipping daily, heading into growth before the backend had fully hardened. The system needed to absorb a 100x change in traffic without a rewrite cycle every quarter.',
  move:
    'I took end-to-end ownership of four backend services, designed a Kafka notification pipeline with idempotent delivery, enforced a Redis token-bucket limiter at 500 notifications per minute, and tightened observability enough to cut logging spend by roughly a quarter.',
  numbers: [
    { value: '100K+', label: 'trial users' },
    { value: '5K+', label: 'paid users' },
    { value: '500/min', label: 'rate-limited notifs' },
    { value: '~25%', label: 'logging cost cut' },
  ],
  stack: ['NestJS', 'Kafka', 'Redis', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Next.js'],
};

export const stackTimeline = [
  {
    company: 'Topica',
    period: '2021 — 2023',
    focus: 'Frontend roots in React, Next.js, and product delivery.',
  },
  {
    company: 'NativeX',
    period: '2023 — 2025',
    focus: 'Transitioned into backend ownership and scale work.',
  },
  {
    company: 'Esuahi / TikMe',
    period: '2025 — 2026',
    focus: 'Greenfield microservices, real-time systems, and production AI.',
  },
];

export const stackDepth = [
  { layer: 'Backend Architecture', depth: 0.95, tech: ['NestJS', 'Node.js', 'GraphQL', 'Microservices'] },
  { layer: 'AI / LLM', depth: 0.84, tech: ['OpenAI', 'Claude', 'RAG', 'Evals', 'Prompt systems'] },
  { layer: 'Infra / Delivery', depth: 0.73, tech: ['Azure AKS', 'Docker', 'Kafka', 'Redis', 'CI/CD'] },
  { layer: 'Data', depth: 0.76, tech: ['PostgreSQL', 'MongoDB', 'Vector Search', 'Observability'] },
  { layer: 'Frontend', depth: 0.62, tech: ['React', 'Next.js', 'MUI', 'Product UI'] },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Building a Kafka Notification Pipeline at Scale',
    excerpt:
      'How we designed idempotent, rate-limited notifications for 5K+ paid users across four services, with a Redis token bucket and failure handling built for production rather than happy-path demos.',
    status: 'DRAFTING',
    url: null,
    category: 'Systems',
  },
  {
    id: 2,
    title: 'JWT RS256 in Microservices: Why Asymmetric Signing Matters',
    excerpt:
      'Why RS256 beat HS256 for distributed token verification, how it removed auth-service coupling, and how Redis-backed sessions helped cut database load by 90 percent.',
    status: 'DRAFTING',
    url: null,
    category: 'Security',
  },
  {
    id: 3,
    title: 'RAG Pipelines in Production: From Embeddings to GPT-4o Streaming',
    excerpt:
      'Lessons from building enterprise retrieval over Jira and Confluence: chunking strategy, Atlas Vector Search, streaming answers, and the MCP architecture behind multi-source querying.',
    status: 'DRAFTING',
    url: null,
    category: 'AI',
  },
];
