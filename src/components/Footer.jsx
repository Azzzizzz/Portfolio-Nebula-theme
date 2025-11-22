import React from 'react';
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo } from '@/constants';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/40 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind.
                    </p>
                </div>

                <div className="flex space-x-6">
                    {personalInfo.social.map((social) => (
                        <a key={social.name} href={social.url} className="text-gray-500 hover:text-neon-cyan transition-colors">
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
