import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Define mission data
const MISSION_DATA = [
  {
    title: "Notre Mission",
    description: "Connecter le monde en transformant chaque voyage en opportunité commerciale et culturelle.",
  },
  {
    title: "Notre Vision",
    description: "Devenir la première plateforme mondiale de commerce collaboratif international.",
  },
  {
    title: "Nos Valeurs",
    description: "Confiance, transparence, durabilité et accessibilité pour tous.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AboutMission = () => {
  const controls = useAnimation();

  // Trigger animation on mount instead of using intersection observer
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
            Notre Histoire
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#13a8ba] to-[#1cd6ce] mx-auto mt-2 rounded mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SNATCH est née d'une vision simple : transformer le commerce international en le rendant accessible à tous.
            Notre plateforme met en relation des voyageurs et des acheteurs pour créer une communauté mondiale dynamique.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-8"
        >
          {MISSION_DATA.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 20px rgba(19, 168, 186, 0.1)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#13a8ba]">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMission;