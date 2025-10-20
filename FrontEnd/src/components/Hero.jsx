// import React from 'react';
// import { MoveRight } from 'lucide-react';
// import AnimateOnScroll from './Animations';

// // Hero Section Component
// const HeroSection = () => {
//     return (
//         <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
//                 <AnimateOnScroll className="transform-gpu">
//                     <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 leading-none">
//                         Dominate.
//                     </h1>
//                     <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
//                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#00f2ea]">
//                             Your Codebase.
//                         </span>
//                     </h2>
//                 </AnimateOnScroll>
//                 <AnimateOnScroll className="delay-200" threshold={0.2}>
//                     <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mt-8 mb-12">
//                         Syntaxly.ai is the award-winning AI platform that provides instant, comprehensive code reviews. Eradicate bugs, crush vulnerabilities, and ship with god-level confidence.
//                     </p>
//                 </AnimateOnScroll>
//                 <AnimateOnScroll className="delay-400" threshold={0.3}>
//                     <div className="flex items-center justify-center gap-4">
//                         <button className="group relative flex items-center justify-center gap-2 px-8 py-4 text-md font-bold text-black bg-[#00f2ea] rounded-full shadow-lg shadow-[#00f2ea]/20 hover:bg-white hover:shadow-[#00f2ea]/40 transition-all duration-300 ease-in-out transform hover:scale-105">
//                             Start Instant Review
//                             <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//                         </button>
//                     </div>
//                 </AnimateOnScroll>
//             </div>
//             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-0"></div>
//         </section>
//     );
// };

// export default HeroSection;

















// import React, { useState, useEffect, useRef } from 'react';
// import { MoveRight } from 'lucide-react';

// const useOnScreen = (options) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) setIsVisible(true);
//     }, options);

//     const currentRef = ref.current;
//     if (currentRef) observer.observe(currentRef);

//     return () => {
//       if (currentRef) observer.unobserve(currentRef);
//     };
//   }, [ref, options]);

//   return [ref, isVisible];
// };

// const AnimateOnScroll = ({ children, className, threshold = 0.1, delay = 0 }) => {
//   const [ref, isVisible] = useOnScreen({ threshold });
//   const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

//   return (
//     <div
//       ref={ref}
//       className={`${className} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//       style={delayStyle}
//     >
//       {children}
//     </div>
//   );
// };

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden bg-black text-gray-200">
//       <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vh] bg-gradient-radial from-purple-500/20 to-transparent rounded-full animate-blob-pulse mix-blend-screen opacity-50 z-0"></div>
//       <div className="absolute bottom-[-20%] right-[-20%] w-[70vw] h-[70vh] bg-gradient-radial from-[#00f2ea]/20 to-transparent rounded-full animate-blob-pulse-reverse animation-delay-3000 mix-blend-screen opacity-50 z-0"></div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 max-w-7xl">
//         <AnimateOnScroll className="transform-gpu mb-8" delay={0}>
//           <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none mb-6 uppercase">
//             Supercharged
//           </h1>
//         </AnimateOnScroll>

//         <AnimateOnScroll className="mb-12" threshold={0.2} delay={200}>
//           <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#00f2ea] drop-shadow-[0_0_20px_rgba(0,242,234,0.4)]">
//               Code Reviews.
//             </span>
//           </h2>
//         </AnimateOnScroll>

//         <AnimateOnScroll className="mb-12" threshold={0.1} delay={400}>
//           <button className="mx-auto group relative flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-black bg-green-500 rounded-full shadow-xl shadow-green-500/30 hover:bg-green-400 hover:shadow-green-500/60 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
//             Start Your Free, Instant Review
//             <MoveRight className="w-5 sm:w-6 h-5 sm:h-6 transition-transform duration-300 group-hover:translate-x-2" />
//           </button>
//         </AnimateOnScroll>

//         <AnimateOnScroll className="my-16 md:my-24 relative" threshold={0.1} delay={600}>
//           <div className="relative w-full max-w-xl mx-auto p-4 md:p-8 bg-gradient-to-br from-purple-900/40 to-black/40 rounded-3xl shadow-2xl border border-purple-700/30 overflow-hidden">
//             <div className="absolute inset-0 rounded-3xl ring-2 ring-inset ring-[#00f2ea]/50 opacity-70 animate-pulse-light"></div>
//             <img
//               src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="AI Code Reviewer Interface"
//               className="w-full h-auto rounded-2xl shadow-lg transform scale-105 opacity-90 object-cover object-center"
//               style={{ filter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 25px rgba(0,242,234,0.6))' }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
//             <div className="absolute bottom-8 left-8 text-left">
//               <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">
//                 Instant, Intelligent Feedback.
//               </h3>
//               <p className="text-base sm:text-lg md:text-xl text-gray-300 drop-shadow">
//                 Spot anomalies, optimize performance, and secure your future.
//               </p>
//             </div>
//           </div>
//         </AnimateOnScroll>
//       </div>

//       <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-0"></div>
//     </section>
//   );
// };

// export default HeroSection;







import React, { useState, useEffect, useRef } from 'react';
import { MoveRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, options);

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [ref, options]);

    return [ref, isVisible];
};

const AnimateOnScroll = ({ children, className, threshold = 0.1, delay = 0 }) => {
    const [ref, isVisible] = useOnScreen({ threshold });
    const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={delayStyle}
        >
            {children}
        </div>
    );
};

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden bg-transparent text-gray-200">
            <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vh] bg-gradient-radial from-purple-500/15 to-transparent rounded-full animate-blob-pulse mix-blend-screen opacity-50 z-0"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[70vw] h-[70vh] bg-gradient-radial from-[#00f2ea]/15 to-transparent rounded-full animate-blob-pulse-reverse animation-delay-3000 mix-blend-screen opacity-50 z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 max-w-7xl mt-10">
                <AnimateOnScroll className="transform-gpu mb-8" delay={0}>
                    <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none mb-6 uppercase">
                        Revolutionary
                    </h1>
                </AnimateOnScroll>

                <AnimateOnScroll className="mb-12" threshold={0.2} delay={200}>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#00f2ea] drop-shadow-[0_0_20px_rgba(0,242,234,0.4)]">
                            Code Reviews.
                        </span>
                    </h2>
                </AnimateOnScroll>

                <AnimateOnScroll className="mb-12" threshold={0.1} delay={400}>
                    <button
                        onClick={() => navigate("/code-review")}
                        className="mx-auto group relative flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-black bg-green-500 rounded-full shadow-xl shadow-green-500/30 hover:bg-green-400 hover:shadow-green-500/60 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                    >
                        Start Your Free, Instant Review
                        <MoveRight className="w-5 sm:w-6 h-5 sm:h-6 transition-transform duration-300 group-hover:translate-x-2" />
                    </button>
                </AnimateOnScroll>

                <AnimateOnScroll className="my-16 md:my-24 relative" threshold={0.1} delay={600}>
                    <div className="relative w-full max-w-7xl  mx-auto">
                        <div className="absolute -inset-2.5 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="relative bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-4 overflow-hidden">
                            <img
                                src="/code.png"
                                alt="AI Code Reviewer Interface"
                                className="relative w-full h-auto rounded-2xl object-cover object-center"
                                style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                            />
                            <div className="absolute inset-4 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                            <div className="absolute bottom-8 left-8 text-left">
                                <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">
                                    Instant, Intelligent Feedback.
                                </h3>
                                <p className="text-base sm:text-lg md:text-xl text-gray-300 drop-shadow">
                                    Spot anomalies, optimize performance, and secure your future.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default HeroSection;
