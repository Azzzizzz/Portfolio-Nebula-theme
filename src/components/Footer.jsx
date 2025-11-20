import React from 'react';
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/40 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Dev Portfolio. Built with React & Tailwind.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-500 hover:text-neon-cyan transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-neon-violet transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-neon-blue transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="mailto:hello@example.com" className="text-gray-500 hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
