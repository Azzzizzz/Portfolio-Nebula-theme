import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/constants';

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-syne font-bold mb-6">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        A curated set of technologies I use to bring digital visions to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card Content */}
                            <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <category.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl font-syne font-bold text-white mb-3">
                                    {category.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    {category.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-xs font-mono text-gray-300 bg-white/5 border border-white/10 rounded-lg group-hover:border-primary/30 group-hover:text-white transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
