import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#01020A] z-0">
      <div className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,255,200,0.35)_0%,transparent_80%)] blur-3xl animate-orb1"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,0,150,0.3)_0%,transparent_80%)] blur-3xl animate-orb2"></div>
      <div className="absolute top-[30%] right-[25%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,120,255,0.4)_0%,transparent_80%)] blur-2xl animate-orb3"></div>

      <div className="absolute top-1/2 left-1/2 w-[120vw] h-[120vw] border border-[rgba(0,255,200,0.1)] rounded-full animate-ring1 origin-center"></div>
      <div className="absolute top-1/2 left-1/2 w-[90vw] h-[90vw] border border-[rgba(255,0,150,0.08)] rounded-full animate-ring2 origin-center"></div>
      <div className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] border border-[rgba(255,255,255,0.03)] rounded-full animate-ring3 origin-center"></div>

      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,200,0.08)_0%,transparent_80%)] animate-scan"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,200,0.05)_0%,rgba(0,0,0,0.95)_100%)] mix-blend-screen"></div>
    </div>
  );
};

export default Background;
