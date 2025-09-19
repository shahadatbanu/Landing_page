import React from "react";
import BackgroundBubbles from "./BackgroundBubbles";

import { motion } from "framer-motion";

// Example image URLs (replace with your own icons/images)
const techStacks = [
  { name: "Business Analytics", img: "https://assets.everspringpartners.com/dims4/default/42ae770/2147483647/strip/true/crop/1166x612+211+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2F6b%2Fd9%2F5b16d28147f993457fa487d31e54%2Fscu-msfa-financial-analyst-vs-business-analyst.jpg" },
  { name: "SQL", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrYhbFoBU1pqmaiduKkVpoiVaj3s5e5NnFA&s" },
  { name: "Power BI", img: "https://www.softwebsolutions.com/wp-content/uploads/2022/01/Power-BI-as-solution.jpg" },
  { name: ".NET Developer", img: "https://www.keenesystems.com/hubfs/Pillar/asp.net-development/asp-net-3.jpg" },
  { name: "Informatica Developer", img: "https://ncube.com/wp-content/uploads/2020/11/shutterstock_369423437.jpg" },
];

const TechStackSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
       <div className="absolute inset-0 overflow-hidden -z-10">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full"
                  style={{
                    width: `${Math.random() * 40 + 20}px`,
                    height: `${Math.random() * 40 + 20}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.3,
                  }}
                  animate={{ y: [0, -60, 0], opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: Math.random() * 6 + 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {techStacks.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }} // Ensure all cards animate
            transition={{
              delay: i * 0.1, // Staggered animation for all cards
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }} // Zoom and shadow on hover
            className="relative bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center 
                       transition-all duration-300 group cursor-pointer"
          >
            {/* Wipe effect for the border */}
            {/* <span
              className="absolute -inset-2 rounded-2xl border-2 border-black opacity-0 
                         group-hover:opacity-100 group-hover:scale-y-100 scale-y-0 origin-bottom
                         transition-transform duration-500 ease-in-out pointer-events-none"
            ></span> */}
           <BackgroundBubbles />

            {/* Hover border effect */}
            <span
              className="absolute inset-0 rounded-2xl border-2 border-black opacity-0 
                         group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2
                         transition-all duration-500 pointer-events-none"
            ></span>

            {/* Image */}
            <img src={tech.img} alt={tech.name} className=" mb-6 object-contain" />

            {/* Text */}
            <span className="text-xl font-semibold text-gray-800">{tech.name}</span>
            <button
  className="mt-4 px-4 py-2 bg-black text-white rounded-md text-sm font-medium
             opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2
             transition-all duration-300"
>
  Enroll Now
</button>


          </motion.div>
          
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
