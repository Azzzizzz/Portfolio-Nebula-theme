import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { navLinks } from '@/constants';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-6 left-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full border",
                    isScrolled
                        ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl shadow-primary/5 py-3 px-6"
                        : "bg-transparent border-transparent py-4 px-6"
                )}
            >
                <div className="flex items-center justify-between">
                    <a href="#" className="text-xl font-bold tracking-tighter text-white group">
                        <span className="font-syne group-hover:text-primary transition-colors duration-300">Aziz</span>
                        <span className="text-primary group-hover:text-white transition-colors duration-300">Dev</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group overflow-hidden rounded-full"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <span className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-3">
                        <div className="flex items-center space-x-1 border-r border-white/10 pr-3 mr-1">
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5 rounded-full w-9 h-9">
                                <Github className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5 rounded-full w-9 h-9">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                        </div>
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-medium text-sm transition-all duration-300 hover:scale-105">
                            Let's Talk
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white focus:outline-none p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                href={link.href}
                                className="text-3xl font-syne font-bold text-white hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex space-x-6 mt-8"
                        >
                            <a href="#" className="text-gray-400 hover:text-white"><Github className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Mail className="w-6 h-6" /></a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
