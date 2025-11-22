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
    name: "Dev.io",
    role: "Senior Software Engineer",
    email: "hello@dev.io",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: {
        title: "Crafting Digital Reality",
        description: "I bridge the gap between robust engineering and artistic design. My mission is to build immersive web experiences that leave a lasting impression.",
        longDescription: "With a background in both Computer Science and Fine Arts, I approach every project with a dual mindset. I don't just write code; I compose experiences. From the first pixel to the final deploy, I ensure every detail serves a purpose."
    },
    social: [
        { name: "Github", icon: Github, url: "#" },
        { name: "Linkedin", icon: Linkedin, url: "#" },
        { name: "Twitter", icon: Twitter, url: "#" },
        { name: "Email", icon: Mail, url: "mailto:hello@dev.io" }
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
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Clients Worldwide', value: '30+' },
];

export const aboutHighlights = [
    { icon: Code2, label: "Clean Code", color: "text-primary" },
    { icon: Palette, label: "Modern Design", color: "text-secondary" },
    { icon: Globe, label: "Global Reach", color: "text-neon-cyan" }
];

export const experiences = [
    {
        id: 1,
        role: "Senior Software Engineer",
        company: "TechNova Solutions",
        period: "2022 - Present",
        description: "Leading the frontend architecture migration to React/Next.js. Improved site performance by 40% and mentored junior developers.",
        skills: ["React", "Next.js", "TypeScript", "GraphQL"]
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Quantum Systems",
        period: "2019 - 2022",
        description: "Developed scalable microservices using Node.js and Go. Implemented real-time data visualization dashboards for fintech clients.",
        skills: ["Node.js", "Go", "PostgreSQL", "Docker"]
    },
    {
        id: 3,
        role: "Frontend Developer",
        company: "Creative Pulse",
        period: "2017 - 2019",
        description: "Built responsive web applications for various clients. Collaborated closely with designers to implement pixel-perfect UIs.",
        skills: ["JavaScript", "Vue.js", "SASS", "Firebase"]
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
        title: "Frontend Engineering",
        icon: Layout,
        description: "Building immersive, responsive, and performant user interfaces.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "WebGL"]
    },
    {
        title: "Backend Architecture",
        icon: Server,
        description: "Designing robust, scalable, and secure server-side systems.",
        skills: ["Node.js", "Go", "PostgreSQL", "Redis", "GraphQL", "Docker", "Kubernetes"]
    },
    {
        title: "DevOps & Tools",
        icon: Terminal,
        description: "Streamlining deployment pipelines and ensuring reliability.",
        skills: ["AWS", "CI/CD", "Git", "Linux", "Terraform", "Jest", "Cypress"]
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
