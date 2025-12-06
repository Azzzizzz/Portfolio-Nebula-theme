import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from '@/constants';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-8 backdrop-blur-md tracking-wide">
                            {personalInfo.role}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 font-syne"
                    >
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
                            Future
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        {personalInfo.bio.description}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View Projects <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <a href="/resume.pdf" download>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg backdrop-blur-sm hover:scale-105 transition-all duration-300  ">
                                Download Resume <Download className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        </section>
    );
};

export default Hero;
