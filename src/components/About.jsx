import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Sparkles } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '5+' },
        { label: 'Projects Completed', value: '50+' },
        { label: 'Clients Worldwide', value: '30+' },
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/30 rounded-full blur-[128px] opacity-40 animate-pulse" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/30 rounded-full blur-[128px] opacity-40 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Title & Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm font-mono text-yellow-100/80 tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-syne font-bold mb-8 leading-tight">
                            Crafting <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
                                Digital Reality
                            </span>
                        </h2>
                        <p className="text-xl text-gray-200 font-light leading-relaxed mb-8 max-w-lg">
                            I bridge the gap between <span className="text-white font-medium">robust engineering</span> and <span className="text-white font-medium">artistic design</span>. My mission is to build immersive web experiences that leave a lasting impression.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: Code2, label: "Clean Code", color: "text-primary" },
                                { icon: Palette, label: "Modern Design", color: "text-secondary" },
                                { icon: Globe, label: "Global Reach", color: "text-neon-cyan" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                    <span className="text-sm font-medium text-gray-200">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Stats & Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group"
                    >
                        {/* Glow Effect behind card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Glass Card */}
                        <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
                            {/* Inner Shine */}
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-loose font-light">
                                With a background in both <span className="text-white font-semibold">Computer Science</span> and <span className="text-white font-semibold">Fine Arts</span>, I approach every project with a dual mindset. I don't just write code; I compose experiences. From the first pixel to the final deploy, I ensure every detail serves a purpose.
                            </p>

                            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center group/stat">
                                        <h4 className="text-4xl md:text-5xl font-syne font-bold text-white mb-2 group-hover/stat:text-primary transition-colors duration-300">
                                            {stat.value}
                                        </h4>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
