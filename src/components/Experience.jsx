import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import Tilt from 'react-parallax-tilt';
import { experiences } from '@/constants';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    <span className="text-neon-cyan">#</span> Experience
                </motion.h2>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-transparent opacity-30" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_10px_#00f3ff] z-10 mt-6" />

                                {/* Content Card */}
                                <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                                    <Tilt
                                        tiltMaxAngleX={3}
                                        tiltMaxAngleY={3}
                                        glareEnable={true}
                                        glareMaxOpacity={0.05}
                                    >
                                        <Card className="bg-glass border-white/10 backdrop-blur-md hover:border-neon-cyan/50 transition-colors duration-300">
                                            <CardHeader>
                                                <div className="flex justify-between items-start mb-2">
                                                    <CardTitle className="text-xl font-bold text-white">{exp.role}</CardTitle>
                                                    <Badge variant="outline" className="text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5">
                                                        {exp.period}
                                                    </Badge>
                                                </div>
                                                <div className="flex items-center text-gray-400 text-sm mb-4">
                                                    <Briefcase className="w-4 h-4 mr-2" />
                                                    {exp.company}
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-gray-300 mb-4">{exp.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill) => (
                                                        <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-300">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Tilt>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
