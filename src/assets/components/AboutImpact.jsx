import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Journey milestones
const JOURNEY_DATA = [
  {
    year: "2024",
    title: "L'Idée",
    description: "SNATCH naît d'une vision : rendre le commerce international accessible en connectant voyageurs et acheteurs.",
  },
  {
    year: "2025",
    title: "Lancement",
    description: "Première version de la plateforme, reliant 10 pays et 500 utilisateurs.",
  },
  {
    year: "2025",
    title: "Expansion",
    description: "Extension à 20 pays, ajout de nouvelles fonctionnalités et amélioration de l'expérience utilisateur.",
  },
  {
    year: "2025",
    title: "Innovation",
    description: "Introduction de nouvelles fonctionnalités pour une expérience encore plus fluide et durable.",
  },
];

// Animation variants
const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const milestoneVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutJourney = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notre Parcours
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment SNATCH a évolué pour devenir une plateforme mondiale qui redéfinit le commerce international.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#13a8ba] to-[#1cd6ce] h-full opacity-50" />

          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {JOURNEY_DATA.map((milestone, index) => (
              <motion.div
                key={index}
                variants={milestoneVariants}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} relative`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-right' : 'pr-8 text-left'}`}>
                  <h3 className="text-2xl font-semibold text-[#13a8ba] mb-2">
                    {milestone.year} - {milestone.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Circle Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#13a8ba] rounded-full border-4 border-gray-900 z-10">
                  <motion.div
                    className="w-full h-full bg-[#1cd6ce] rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
        </section>
  );
};

export default AboutJourney;