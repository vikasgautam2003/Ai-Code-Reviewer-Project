import React from 'react';
import { Bot, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-black/90 border-t border-white/10 relative z-10 w-full">
    <div className="w-full px-6 lg:px-12 py-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <Bot className="w-8 h-8 text-[#00f2ea]" />
          <span className="text-2xl font-bold tracking-tight text-white">
            Syntaxly<span className="text-[#00f2ea]">.ai</span>
          </span>
        </div>
       
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center border-t border-white/10 pt-6">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Syntaxly.ai Corporation. All rights reserved.
        </p>
        <div className="flex justify-center md:justify-end gap-4">
          <a href="#" className="text-gray-400 hover:text-[#00f2ea] transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#00f2ea] transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#00f2ea] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
