import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/constants';

const Blog = () => {
    return (
        <section id="blog" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-syne font-bold mb-6">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</span>
                        </h2>
                    </div>
                    <a href="#" className="text-white hover:text-primary transition-colors flex items-center gap-2 pb-2 group">
                        View all posts <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-white/10">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                            </div>

                            <h3 className="text-2xl font-syne font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-400 line-clamp-2 mb-4">
                                {post.excerpt}
                            </p>

                            <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Article <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
