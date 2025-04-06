import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Assuming you're using React Router; adjust if not

const ErrorPage = () => {
  // Animation variants
  const planeVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
   <section 
      className="relative bg-cover bg-center py-20 min-h-[600px] overflow-hidden"
      style={{ backgroundImage: "url('/world-dotted-map.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95" />
       <div className="text-center absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Animated Plane Icon */}
        <motion.div
          variants={planeVariants}
          animate="animate"
          className="mb-8"
        >
          <svg
            className="w-32 h-32 mx-auto text-[#13a8ba]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </motion.div>

        {/* Error Message */}
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl font-bold text-gray-100 mb-4"
        >
          404
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-100 mb-6"
        >
          Oops ! On dirait que ce voyageur s'est perdu...
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-100 mb-8 max-w-md mx-auto"
        >
          La page que vous cherchez n'existe pas ou a été déplacée. Retournons à la base !
        </motion.p>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block bg-[#13a8ba] hover:bg-[#1cd6ce] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Retour à l'Accueil
          </Link>
        </motion.div>

        {/* Decorative Dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#13a8ba] rounded-full opacity-20"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;