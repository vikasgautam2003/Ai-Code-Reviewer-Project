import React, { useState } from "react";
import { Bot } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-xl px-6 lg:px-12">
      <div className="flex items-center justify-between h-20 max-w-[100%] mx-auto px-4">
        <div className="flex items-center space-x-3">
          <Bot className="w-8 h-8 text-[#00f2ea]" />
          <span className="text-2xl font-bold tracking-tighter text-white">
            Syntaxly<span className="text-[#00f2ea]">.ai</span>
          </span>
        </div>

       
      </div>
    </header>
  );
};

export default Header;
