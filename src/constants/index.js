import {
    Code2,
    Palette,
    Globe,
    Layout,
    Server,
    Terminal,
    Database,
    Cpu,
    Send,
    Mail,
    MapPin,
    Phone,
    Github,
    Linkedin,
    Twitter
} from 'lucide-react';

export const personalInfo = {
    name: "Syed Abdul Aziz",
    role: "Software Engineer",
    email: "syedaziz9999@gmail.com",
    phone: "+91 8328082973",
    location: "Hyderabad, India",
    bio: {
        title: "Building Scalable Backend Systems",
        description: "Software Engineer with 4+ years of experience designing and building scalable backend systems for learning platforms.",
        longDescription: "I specialize in backend architecture and service development. From transforming offline LMS into production-ready online platforms to supporting high-traffic production systems, I focus on scalability, reliability, and performance. My expertise includes distributed systems, event-driven architecture, and secure authentication."
    },
    social: [
        { name: "Github", icon: Github, url: "https://github.com/StartDust" },
        { name: "Linkedin", icon: Linkedin, url: "https://www.linkedin.com/in/syed-abdul-aziz/" },
        { name: "Twitter", icon: Twitter, url: "#" },
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
    { label: 'Projects Completed', value: '20+' },
    { label: 'Users Served', value: '100K+' },
];

export const aboutHighlights = [
    { icon: Server, label: "Backend Systems", color: "text-primary" },
    { icon: Database, label: "Scalable Arch", color: "text-secondary" },
    { icon: Globe, label: "Distributed Teams", color: "text-neon-cyan" }
];

export const experiences = [
    {
        id: 1,
        role: "Senior Software Engineer",
        company: "ESUHAI (via GoEnglishX - Payroll)",
        period: "Jul 2025 – Present",
        description: "Leading backend architecture to transform an offline LMS into a scalable online platform. Architected services from scratch, owning Authentication and Media services. Designed secure auth systems and scalable media services using Azure Blob Storage.",
        skills: ["Backend Architecture", "Authentication", "Azure Blob Storage", "Kafka", "Redis"]
    },
    {
        id: 2,
        role: "Software Engineer II",
        company: "NativeX (via GoEnglishX - Payroll)",
        period: "Apr 2023 – Jun 2025",
        description: "Contributed to production systems for an English learning platform serving 100K+ users. Progressed from frontend to backend ownership. Designed notification systems and workflow engines for paid users.",
        skills: ["Node.js", "Kafka", "Redis", "System Design", "Microservices"]
    },
    {
        id: 3,
        role: "Software Engineer",
        company: "Topica (via Skuad - Payroll)",
        period: "Nov 2021 – Mar 2023",
        description: "Built responsive frontend components for Edumall and NativeX. Collaborated with cross-functional remote teams across India and Vietnam.",
        skills: ["React.js", "Frontend", "Agile", "Remote Collaboration"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Nebula Dashboard",
        category: "FinTech",
        description: "Real-time crypto analytics with interactive D3.js visualizations.",
        tags: ["React", "D3.js", "WebSocket"],
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2532&auto=format&fit=crop",
        links: { demo: "#", github: "#" }
    },
    {
        id: 2,
        title: "Aether Chat",
        category: "Communication",
        description: "End-to-end encrypted messaging with a focus on privacy.",
        tags: ["Next.js", "Socket.io", "Redis"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
        links: { demo: "#", github: "#" }
    },
    {
        id: 3,
        title: "Void Commerce",
        category: "E-Commerce",
        description: "Headless e-commerce starter kit for high-performance stores.",
        tags: ["Gatsby", "Shopify API", "GraphQL"],
        image: "https://plus.unsplash.com/premium_photo-1720503965220-10ea698bf0aa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        links: { demo: "#", github: "#" }
    }
];

export const skillCategories = [
    {
        title: "Backend & Architecture",
        icon: Server,
        description: "Designing scalable, distributed, and secure server-side systems.",
        skills: ["Node.js", "NestJS", "Microservices", "Kafka", "Redis", "PostgreSQL", "MongoDB", "System Design"]
    },
    {
        title: "Frontend Engineering",
        icon: Layout,
        description: "Building immersive, responsive, and performant user interfaces.",
        skills: ["React.js", "Next.js", "TypeScript", "Material UI", "Tailwind CSS"]
    },
    {
        title: "Cloud & DevOps",
        icon: Terminal,
        description: "Streamlining deployment pipelines and ensuring reliability.",
        skills: ["AWS", "Azure", "Docker", "Nginx", "Git", "Jest", "CI/CD"]
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CTO at TechFlow",
        content: "One of the most talented engineers I've worked with. The attention to detail and ability to solve complex problems is unmatched.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager",
        content: "Delivered the project ahead of schedule and exceeded all expectations. A true professional who cares about the end product.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Lead Designer",
        content: "It's rare to find a developer with such a strong eye for design. The implementation was pixel-perfect and the animations were smooth.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
];

export const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development with AI",
        excerpt: "exploring how artificial intelligence is reshaping the way we build and interact with the web.",
        date: "Nov 15, 2023",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        url: "#"
    },
    {
        id: 2,
        title: "Mastering React Server Components",
        excerpt: "A deep dive into the benefits and implementation strategies of RSC in Next.js applications.",
        date: "Oct 28, 2023",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        url: "#"
    },
    {
        id: 3,
        title: "Optimizing WebGL Performance",
        excerpt: "Tips and tricks for creating smooth, high-performance 3D experiences in the browser.",
        date: "Sep 10, 2023",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        url: "#"
    }
];
