import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/constants';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-syne font-bold mb-6">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Stories</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        Feedback from those who have experienced the difference.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col">
                                <Quote className="w-10 h-10 text-primary/20 mb-6" />

                                <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border border-white/10"
                                    />
                                    <div>
                                        <h4 className="text-white font-bold font-syne">{testimonial.name}</h4>
                                        <p className="text-sm text-primary">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
