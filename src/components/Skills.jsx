import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Redux", "GraphQL"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "Go", "PostgreSQL", "Redis", "MongoDB", "Firebase", "Supabase"]
    },
    {
        title: "DevOps & Tools",
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Jest", "Cypress", "Linux"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    <span className="text-neon-blue">#</span> Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Badge className="bg-white/5 hover:bg-neon-blue/20 text-gray-300 hover:text-neon-blue border-transparent hover:border-neon-blue/50 transition-all duration-300 py-2 px-4 text-sm cursor-default">
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
