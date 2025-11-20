import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";
import Tilt from 'react-parallax-tilt';

const projects = [
    {
        id: 1,
        title: "Nebula Dashboard",
        description: "A real-time crypto analytics dashboard featuring interactive charts, live price updates, and portfolio tracking.",
        tags: ["React", "D3.js", "WebSocket", "Tailwind"],
        links: { demo: "#", github: "#" }
    },
    {
        id: 2,
        title: "Aether Chat",
        description: "Secure, end-to-end encrypted messaging application with a focus on privacy and minimalist design.",
        tags: ["Next.js", "Socket.io", "Redis", "Prisma"],
        links: { demo: "#", github: "#" }
    },
    {
        id: 3,
        title: "Void Commerce",
        description: "Headless e-commerce starter kit built for high performance and SEO optimization.",
        tags: ["Gatsby", "Shopify API", "GraphQL", "Stripe"],
        links: { demo: "#", github: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    <span className="text-neon-violet">#</span> Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Tilt
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                glareEnable={true}
                                glareMaxOpacity={0.1}
                                className="h-full"
                            >
                                <Card className="h-full bg-glass border-white/10 backdrop-blur-md hover:border-neon-violet/50 transition-all duration-300 group">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 bg-neon-violet/10 rounded-lg text-neon-violet group-hover:text-white group-hover:bg-neon-violet transition-colors">
                                                <Folder className="w-6 h-6" />
                                            </div>
                                            <div className="flex space-x-2">
                                                <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                                <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl font-bold text-white group-hover:text-neon-violet transition-colors">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300 mb-6">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="bg-white/5 text-gray-400 border-transparent">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
