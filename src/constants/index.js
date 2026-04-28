import {
    Server,
    Terminal,
    Database,
    Cpu,
    Bot,
    Send,
    Mail,
    MapPin,
    Phone,
    Github,
    Linkedin
} from 'lucide-react';

export const personalInfo = {
    name: "Syed Abdul Aziz",
    role: "Senior Software Engineer",
    email: "syedaziz9999@gmail.com",
    phone: "+91 8328082973",
    location: "Hyderabad, India",
    bio: {
        title: "Distributed Systems & AI Backend Engineer",
        description: "Senior Software Engineer with 4+ years building distributed, event-driven backend systems for learning platforms serving 100K+ users — now bridging backend architecture with production AI/LLM integration.",
        longDescription: "I specialize in designing and owning microservices end-to-end — from authentication and real-time WebSocket infrastructure to Kafka-based event pipelines and AI evaluation engines. At Esuahi, I led the greenfield backend architecture for a 25-year-old education company's digital transformation. At NativeX, I scaled the platform from zero to 100K+ users. I now integrate LLMs (OpenAI, Claude) into production systems — building RAG pipelines, provider-abstracted evaluation engines with cost tracking, and semantic search over enterprise knowledge bases."
    },
    social: [
        { name: "Github", icon: Github, url: "https://github.com/Azzzizzz" },
        { name: "Linkedin", icon: Linkedin, url: "https://www.linkedin.com/in/syed-abdul-aziz/" },
        { name: "Email", icon: Mail, url: "mailto:syedaziz9999@gmail.com" }
    ]
};

export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
];

export const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Services Owned E2E', value: '6+' },
    { label: 'Users Served', value: '100K+' },
];

export const aboutHighlights = [
    { icon: Server, label: "Distributed Systems", color: "text-primary" },
    { icon: Database, label: "Event-Driven Arch", color: "text-secondary" },
    { icon: Bot, label: "AI / LLM Systems", color: "text-neon-cyan" }
];

export const experiences = [
    {
        id: 1,
        role: "Senior Software Engineer",
        company: "Esuahi Co., Ltd. (via GoEnglishX)",
        period: "Jul 2025 – Mar 2026",
        description: "Led backend architecture for TikMe — a greenfield NestJS microservices platform to digitize Esuahi's 25-year-old education and workforce operations onto Azure AKS. Owned end-to-end development of Auth, Media, Chat, and Real-Time services. Built a WebSocket service handling 10K concurrent connections per pod. Reduced DB load 90% via hybrid Redis/PostgreSQL session storage. Implemented a provider-abstracted LLM evaluation engine (Claude + OpenAI) with dynamic prompt templates and per-call cost tracking, and a RAG search system over Jira/Confluence using GPT-4o streaming.",
        skills: ["NestJS", "Azure AKS", "Kafka", "Redis", "WebSockets", "Apollo Federation", "Cerbos", "Claude API", "OpenAI", "RAG Pipelines", "Kubernetes"]
    },
    {
        id: 2,
        role: "Software Engineer → Software Engineer II",
        company: "NativeX Edtech (via GoEnglishX)",
        period: "Apr 2023 – Jun 2025",
        description: "Joined during the product's launch phase and grew into full backend ownership of Identity, Wallet, Scheduling, and Notification services. Designed a high-throughput Kafka notification pipeline for 5K+ paid users with a Redis token bucket rate limiter (500 notifications/min) and idempotent delivery. Helped scale the platform from zero to 100K+ trial users. Reduced logging costs by ~25% through targeted observability improvements. Awarded Best Stand-alone Remote Contributor, 2023.",
        skills: ["NestJS", "Node.js", "Kafka", "Redis", "PostgreSQL", "MongoDB", "GraphQL", "Next.js", "Docker", "Jest"]
    },
    {
        id: 3,
        role: "Software Engineer",
        company: "Topica Edtech Group (via Skuad)",
        period: "Nov 2021 – Mar 2023",
        description: "Joined as a frontend intern and converted to full-time within three months based on performance. Built responsive, reusable frontend components for Edumall (an Udemy-like platform) and early NativeX learning flows — interactive question types, live session interfaces, and progress dashboards. Collaborated with cross-functional remote teams across India and Vietnam in Agile sprints and code reviews.",
        skills: ["React.js", "Next.js", "TypeScript", "Apollo GraphQL", "MUI", "CSS3"]
    }
];

export const projects = [
    {
        id: 1,
        title: "TikMe — Microservices Platform",
        category: "EdTech / Enterprise",
        description: "Greenfield NestJS microservices backend built on Azure AKS to digitize Esuahi's 25-year-old education and workforce operations. Architected Auth, Chat, Media, Evaluation, and Real-Time services connected via Apollo Federation Gateway, Kafka event bus, and Cerbos policy-based RBAC. WebSocket service supports 10K connections per pod.",
        tags: ["NestJS", "Azure AKS", "Kafka", "Apollo Federation", "Cerbos", "Redis", "WebSockets"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
        links: { demo: "#", github: "#" }
    },
    {
        id: 2,
        title: "LLM Evaluation Engine",
        category: "AI / EdTech",
        description: "Provider-abstracted evaluation engine powering oral assessment scoring at Esuahi. Integrates Azure Speech SDK for STT transcription and Claude/OpenAI for rubric-based qualitative feedback. Dynamic prompt templates stored in MongoDB — non-engineers update rubrics without code deployment. Tracks per-call token counts and dollar cost to MongoDB.",
        tags: ["Claude API", "OpenAI", "Azure Speech SDK", "NestJS", "MongoDB", "Kafka"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
        links: { demo: "#", github: "#" }
    },
    {
        id: 3,
        title: "RAG Internal Search System",
        category: "AI / Internal Tooling",
        description: "Enterprise-grade semantic search over Jira and Confluence for engineering teams. Documents are chunked, embedded via OpenAI, and stored in MongoDB Atlas Vector Search. Queries return GPT-4o streaming answers with source attribution. Built on a MCP-based multi-source architecture in Python.",
        tags: ["Python", "OpenAI", "MongoDB Atlas", "Vector Search", "GPT-4o Streaming", "MCP"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
        links: { demo: "#", github: "#" }
    }
];

export const skillCategories = [
    {
        title: "Backend & Architecture",
        icon: Server,
        description: "Designing scalable distributed systems, event-driven microservices, and secure real-time infrastructure.",
        skills: ["NestJS", "Node.js", "TypeScript", "GraphQL (Apollo Federation)", "Kafka", "Redis", "WebSockets", "MongoDB", "PostgreSQL", "Microservices", "System Design", "Cerbos RBAC"]
    },
    {
        title: "Cloud & DevOps",
        icon: Terminal,
        description: "Cloud-native deployment, container orchestration, and automated CI/CD pipelines.",
        skills: ["Azure AKS", "Docker", "Kubernetes (Helm)", "Azure DevOps", "Azure Blob Storage", "Azure Key Vault", "CI/CD", "Nginx", "AWS", "ACR"]
    },
    {
        title: "AI / LLM Systems",
        icon: Bot,
        description: "Building production-grade AI pipelines — RAG, evaluation engines, and LLM-integrated backends.",
        skills: ["OpenAI (GPT-4o, Embeddings, Whisper)", "Claude (Anthropic)", "RAG Pipelines", "Vector Search", "Azure Speech SDK", "LLM Streaming", "Prompt Engineering", "Structured Outputs", "MCP", "Python"]
    }
];

// Testimonials removed per locked decision §7 — removed entirely.
export const testimonials = [];

// Field Notes — section header to read "Currently writing about" (render change in P2-T4).
// No fake dates, no fake URLs. Each post tagged DRAFTING.
export const blogPosts = [
    {
        id: 1,
        title: "Building a Kafka Notification Pipeline at Scale",
        excerpt: "How we designed idempotent, rate-limited notifications for 5K+ paid users — aggregating across 4 microservices with a Redis token bucket and partial-failure tolerance via Promise.allSettled.",
        status: 'DRAFTING',
        url: null
    },
    {
        id: 2,
        title: "JWT RS256 in Microservices: Why Asymmetric Signing Matters",
        excerpt: "A deep dive into why we chose RS256 over HS256 — distributed token verification, eliminating auth-service as a single point of failure, and how we paired it with Redis for 90% DB load reduction.",
        status: 'DRAFTING',
        url: null
    },
    {
        id: 3,
        title: "RAG Pipelines in Production: From Embeddings to GPT-4o Streaming",
        excerpt: "Lessons from building an enterprise RAG system over Jira and Confluence — chunking strategy, MongoDB Atlas Vector Search, streaming responses, and the MCP architecture that makes it multi-source.",
        status: 'DRAFTING',
        url: null
    }
];
