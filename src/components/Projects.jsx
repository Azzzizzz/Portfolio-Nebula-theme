import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
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

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative w-full cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-white/5 border border-white/10">
                {/* Image/Video Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                {project.video ? (
                    <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                            {project.category}
                        </span>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                            className="flex gap-2"
                        >
                            <a href={project.links.github} className="p-2 rounded-full bg-white text-black hover:bg-primary transition-colors">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href={project.links.demo} className="p-2 rounded-full bg-white text-black hover:bg-primary transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-syne font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                        </h3>
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                                className="text-gray-300 mb-4"
                            >
                                {project.description}
                            </motion.p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-xs text-gray-400 font-mono">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-syne font-bold mb-6">
                            Selected <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Works
                            </span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-lg pb-2">
                        A collection of digital experiences crafted with precision and passion.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.id} className={cn(index === 2 ? "md:col-span-2" : "")}>
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
