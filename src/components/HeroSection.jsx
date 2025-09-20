// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, Menu, X } from "lucide-react";

// const HeroSection = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   const headingWords = ["Connecting", "Talent", "with", "Opportunity"];

//   return (
//     <div className="relative bg-gradient-to-br from-purple-50 overflow-hidden">
//       {/* Floating Background Bubbles */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full"
//             style={{
//               width: `${Math.random() * 40 + 20}px`,
//               height: `${Math.random() * 40 + 20}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: 0.3,
//             }}
//             animate={{ y: [0, -60, 0], opacity: [0.3, 0.6, 0.3] }}
//             transition={{
//               duration: Math.random() * 6 + 4,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       {/* Navigation Bar */}
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm z-10"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo */}
//             <motion.div
//               whileHover={{ scale: 1.05, rotate: -3 }}
//               className="flex items-center space-x-3 cursor-pointer"
//             >
//               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
//                 <span className="text-white font-bold text-lg">M</span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="font-bold text-xl text-gray-900">Mortar</span>
//                 <span className="text-xs text-gray-600">Global Business</span>
//               </div>
//             </motion.div>

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex items-center space-x-8">
//               {["Home", "Solution", "Company", "Portfolio", "Resources"].map(
//                 (item, i) => (
//                   <motion.a
//                     key={i}
//                     href={`#${item.toLowerCase()}`}
//                     whileHover={{ y: -3 }}
//                     className="relative font-medium text-gray-700 hover:text-indigo-700 transition-all duration-300 px-5 py-2 group overflow-hidden"
//                   >
//                     {/* Circle background */}
//                     <span className="absolute inset-0 rounded-full bg-indigo-100 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out -z-10"></span>

//                     {item}
//                     <ChevronDown size={16} className="ml-1 text-indigo-500 inline-block" />

//                     {/* Underline effect */}
//                     <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>

//                     {/* Bubble effect */}
//                     <span className="absolute -top-2 left-1/2 w-2 h-2 bg-indigo-300 rounded-full opacity-0 group-hover:animate-bubble"></span>
//                     <span className="absolute top-1/2 right-0 w-3 h-3 bg-indigo-400 rounded-full opacity-0 group-hover:animate-bubble delay-100"></span>
//                     <span className="absolute -bottom-2 left-1/3 w-2.5 h-2.5 bg-purple-300 rounded-full opacity-0 group-hover:animate-bubble delay-200"></span>
//                   </motion.a>
//                 )
//               )}

//               {/* 🔥 Special Animated Button */}
//               <motion.a
//                 href="#strategy"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative px-6 py-3 rounded-full bg-indigo-500 text-white font-semibold shadow-lg overflow-hidden group animate-pulse"
//               >
//                 Login
//                 {/* Hover overlay */}
//                 <span className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full -z-10"></span>
//                 {/* Hover bubbles */}
//                 <span className="absolute -top-3 left-1/2 w-3 h-3 bg-indigo-300 rounded-full opacity-0 group-hover:animate-bubble"></span>
//                 <span className="absolute top-1/2 -left-2 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:animate-bubble delay-150"></span>
//                 <span className="absolute -bottom-3 right-1/3 w-3 h-3 bg-indigo-200 rounded-full opacity-0 group-hover:animate-bubble delay-300"></span>
//               </motion.a>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={toggleMobileMenu}
//               className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="lg:hidden border-t border-gray-200 py-4"
//             >
//               <div className="flex flex-col space-y-4">
//                 {["Home", "Solution", "Company", "Portfolio", "Resources"].map(
//                   (item, i) => (
//                     <motion.a
//                       key={i}
//                       href={`#${item.toLowerCase()}`}
//                       whileHover={{ x: 5 }}
//                       className="text-gray-700 font-medium"
//                     >
//                       {item}
//                     </motion.a>
//                   )
//                 )}
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </motion.nav>

//      {/* Hero Text Section */}
     
// <section className="w-full py-20 flex flex-col items-center justify-center text-center relative">
//      {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full"
//             style={{
//               width: `${Math.random() * 40 + 20}px`,
//               height: `${Math.random() * 40 + 20}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: 0.3,
//             }}
//             animate={{ y: [0, -60, 0], opacity: [0.3, 0.6, 0.3] }}
//             transition={{
//               duration: Math.random() * 6 + 4,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//   {/* Heading Animation */}
//   <div className="flex flex-wrap justify-center gap-3">
//     {headingWords.map((word, i) => (
//       <motion.span
//         key={i}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: i * 0.1, type: "spring", stiffness: 160, damping: 12 }}
//         whileHover={{ scale: 1.08, rotate: -2 }}
//         className="relative text-4xl md:text-6xl font-bold text-gray-800 cursor-pointer
//                    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600
//                    transition-all duration-500"
//       >
//         {word}

//         {/* 🌿 Vine wraps around "Opportunity" */}
//         {word === "Opportunity" && (
//           <motion.svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 200 100"
//             className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-20 text-green-500"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, delay: 1.5 }}
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <motion.path d="M10 80 Q100 0 190 80" />
//             <motion.circle cx="50" cy="40" r="4" fill="currentColor" />
//             <motion.circle cx="120" cy="30" r="5" fill="currentColor" />
//             <motion.circle cx="160" cy="60" r="3.5" fill="currentColor" />
//           </motion.svg>
//         )}
//       </motion.span>
//     ))}
//   </div>

//   {/* Paragraph Animation */}
//   <motion.p
//     initial={{ x: -100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ delay: 2, duration: 1 }}
//     className="mt-6 max-w-2xl text-lg text-gray-600 hover:text-indigo-600 transition-colors duration-500"
//   >
//     Your career journey deserves more than just job listings — it needs expert
//     guidance, skill development, and the right opportunities.
//   </motion.p>
// </section>
//     </div>
//   );
// };

// export default HeroSection;

// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const techs = [
  { name: "Business Analytics" },
  { name: "SQL" },
  { name: "Power BI" },
  { name: ".NET Developer" },
  { name: "Informatica Developer" },
  { name: "Data Science" },
];

const Hero = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // Start animation once on mount
  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-100%"],
        transition: { ease: "linear", duration: 25, repeat: Infinity },
      });
    }
  }, [controls, isPaused]);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bgimage.jpeg')" }}
    >
      {/* White overlay (full height, 90% width, centered) */}
      <div className="absolute inset-0 flex justify-center">
        <div className="h-full w-[90%] bg-white/80"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8 text-center space-y-10">
        {/* Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Connecting Talent with Opportunity
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl text-lg text-gray-700"
        >
          Your career journey deserves more than just job listings — it needs
          expert guidance, skill development, and the right opportunities.
        </motion.p>

        {/* Carousel */}
        <div className="relative overflow-hidden w-[90%] mx-auto">
          <motion.div
            className="flex space-x-8"
            animate={controls}
            initial={{ x: "0%" }}
            onMouseEnter={() => {
              setIsPaused(true);
              controls.stop();
            }}
            onMouseLeave={() => {
              setIsPaused(false);
              controls.start({
                x: ["0%", "-100%"],
                transition: { ease: "linear", duration: 25, repeat: Infinity },
              });
            }}
          >
            {[...techs, ...techs].map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="px-6 py-3 rounded-full shadow-md cursor-pointer text-white font-medium whitespace-nowrap
                           bg-gradient-to-r from-indigo-500 to-black hover:shadow-xl"
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
