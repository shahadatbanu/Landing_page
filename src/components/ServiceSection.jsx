import React from "react";
import { motion } from "framer-motion";
import BackgroundBubbles from "./BackgroundBubbles";
import { Users, ClipboardList, Briefcase, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Permanent Staffing Solutions",
    desc: "Secure top-tier IT talent for long-term success, connecting you with professionals aligned with your company culture.",
    icon: <Users className="w-10 h-10 text-pink-500" />,
    color: "from-pink-100 to-pink-200",
  },
  {
    title: "End-To-End Recruitment Outsourcing",
    desc: "Leave the hiring process to us. From sourcing to onboarding, we ensure you get the right candidates efficiently.",
    icon: <ClipboardList className="w-10 h-10 text-teal-500" />,
    color: "from-teal-100 to-teal-200",
  },
  {
    title: "Flexible & Project-Based Staffing",
    desc: "Access IT experts for short-term assignments or specialized projects, helping your business stay agile.",
    icon: <Briefcase className="w-10 h-10 text-orange-500" />,
    color: "from-orange-100 to-orange-200",
  },
  {
    title: "Career Development & Profile Promotion",
    desc: "We help talent grow. From sourcing to onboarding, we ensure professionals get the right opportunities.",
    icon: <TrendingUp className="w-10 h-10 text-purple-500" />,
    color: "from-purple-100 to-purple-200",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between cards
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const ServiceSection = () => {
  return (
    <section className="relative py-20 from-white via-gray-50 to-white overflow-hidden">
  <BackgroundBubbles />
      {/* Title */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        Our <span>Recruitment Services</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-4 text-center max-w-2xl mx-auto text-gray-600"
      >
        We provide end-to-end staffing solutions designed to connect top IT talent with the right opportunities.
      </motion.p>

      {/* Service Cards */}
      <motion.div
  variants={containerVariants} 
   initial="hidden" 
   whileInView="show" 
  viewport={{ once: true }} 
   className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6" >
        {services.map((service, i) => (
          <motion.div
 key={i} 
  variants={cardVariants}    whileHover={{ scale: 1.05, rotate: -1 }} 
   className={`relative group bg-gradient-to-br ${service.color} rounded-3xl shadow-lg overflow-hidden p-8 backdrop-blur-lg bg-opacity-60 border border-white/40 cursor-pointer`} 
>
            {/* Hover glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-20 transition duration-500"></div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.2 }}
              className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-md mb-6"
            >
              {service.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 group-hover:text-gray-900 transition duration-300">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceSection;
