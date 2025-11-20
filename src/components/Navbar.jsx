import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-obsidian/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold tracking-tighter text-white">
                    <span className="text-neon-cyan">&lt;</span>
                    Dev
                    <span className="text-neon-violet">/&gt;</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 ml-4">
                        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                            <Github className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                            <Linkedin className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:text-neon-cyan">
                            Contact Me
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-obsidian/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-neon-cyan"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                        <Button variant="ghost" size="icon" className="text-gray-300">
                            <Github className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-300">
                            <Linkedin className="w-5 h-5" />
                        </Button>
                        <Button className="w-full bg-neon-cyan text-obsidian hover:bg-neon-cyan/80">
                            Contact Me
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
