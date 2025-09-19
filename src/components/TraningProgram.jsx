import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    type: "hero",
    title: "Build Skills that",
    highlight: "Stand Out",
    desc: "Learn in-demand skills through structured programs, expert mentorship, and practical hands-on projects designed to make you industry-ready.",
    button: false,
  },
  {
    title: "Project Management Training",
    desc: "Gain in-depth knowledge of project planning, execution, and delivery. Prepare for leadership roles with practical project management tools and frameworks.",
    button: true,
    bg: "bg-indigo-100 text-gray-900",
  },
  {
    title: "SQL Developer Training",
    desc: "Gain expertise in database design, queries, and optimization. Work with SQL to manage and retrieve data efficiently.",
    button: true,
    bg: "bg-emerald-100 text-gray-900",
  },
  {
    title: ".NET Developer Training",
    desc: "Learn to build robust web and desktop applications using the .NET framework, covering C#, ASP.NET, and MVC architecture.",
    button: true,
    bg: "bg-sky-100 text-gray-900",
  },
];


export default function TrainingCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative w-full flex items-center justify-center text-center py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: `url('/ourprogram.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute top-10 left-10 w-40 h-40 bg-[radial-gradient(circle,white_2px,transparent_2px)] bg-[length:20px_20px] opacity-20" />
        <div className="absolute bottom-10 right-10 w-52 h-52 border border-white/20 rotate-12" />
        {/* Extra triangle */}
        <div className="absolute top-1/4 left-1/2 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[140px] border-l-transparent border-r-transparent border-b-white/10 rotate-6"></div>
      </div>

      {/* Slides */}
      <div className="relative z-10 w-[90%] max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className={`rounded-2xl shadow-2xl p-10 ${
              slides[current].type === "hero"
                ? "bg-white/90"
                : slides[current].bg
            }`}
          >
            {slides[current].type === "hero" ? (
              <>
                <motion.p
                  className="text-green-400 font-serif text-xl mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Our Training Programs
                </motion.p>
                <motion.h1
                  className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight font-sans"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                >
                  {slides[current].title}{" "}
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {slides[current].highlight}
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-6 text-gray-700 max-w-2xl mx-auto font-light leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {slides[current].desc}
                </motion.p>
              </>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  {slides[current].title}
                </h2>
                <p className="mt-4 text-black/80 leading-relaxed max-w-2xl mx-auto">
                  {slides[current].desc}
                </p>
                {slides[current].button && (
                  <motion.button
                    className="mt-6 px-8 py-3 rounded-full bg-black text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition"
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Us
                  </motion.button>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
}
