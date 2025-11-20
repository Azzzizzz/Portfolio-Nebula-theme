import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Glows */}
            {/* Animated Background Glows - Removed as per user request */}
            {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/40 rounded-full blur-[100px] -z-10 animate-blob mix-blend-screen opacity-70" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-violet/40 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-screen opacity-70" />
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-neon-blue/40 rounded-full blur-[100px] -z-10 animate-blob animation-delay-4000 mix-blend-screen opacity-70" /> */}

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-neon-cyan mb-6 backdrop-blur-md">
                        Senior Software Engineer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Building the <span className="inline-flex animate-text-gradient bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan bg-[200%_auto] bg-clip-text text-transparent">Future</span>
                    <br />
                    One Line at a Time.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    I craft high-performance web applications and scalable systems with a focus on elegant code and exceptional user experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="bg-neon-cyan text-obsidian hover:bg-neon-cyan/80 font-semibold px-8 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center">View Projects <ArrowRight className="ml-2 w-4 h-4" /></span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8">
                        Download Resume <Download className="ml-2 w-4 h-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
