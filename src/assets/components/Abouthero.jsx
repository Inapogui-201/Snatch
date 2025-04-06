import React, { useEffect, useMemo } from 'react';
import { Globe, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion'; // Added for better animations

// Define stat data as a constant
const STATS_DATA = [
  { icon: Globe, title: "+120", description: "Pays connectés" },
  { icon: ShoppingBag, title: "+10,000", description: "Livraisons réussies" },
  { icon: Users, title: "+5,000", description: "Voyageurs actifs" },
  { icon: TrendingUp, title: "98%", description: "Taux de satisfaction" },
];

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Abouthero = () => {
  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = '/world-dotted-map.png';
  }, []);

  // Memoize particle generation
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      size: Math.random() * 12 + 4,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
    }));
  }, []);

  return (
    <section 
      className="relative bg-cover bg-center py-20 min-h-[600px] overflow-hidden"
      style={{ backgroundImage: "url('/world-dotted-map.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95" />
      
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#13a8ba] opacity-20"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-white space-y-6"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-8">
              À Propos de <span className="text-[#13a8ba] text-4xl">SNATCH</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-[#13a8ba] to-[#1cd6ce] rounded" />
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              SNATCH connecte voyageurs et acheteurs passionnés dans une communauté mondiale 
              qui rend le commerce international accessible, sécurisé et économique.
            </p>
            <p className="text-base text-gray-400 leading-relaxed max-w-xl">
              Notre plateforme transforme la façon dont les produits traversent les frontières, 
              en créant des opportunités pour les voyageurs et en donnant accès à des articles 
              uniques pour les acheteurs du monde entier.
            </p>
            <motion.button
              className="bg-[#13a8ba] text-white font-semibold px-8 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1cd6ce] focus:ring-offset-2 focus:ring-offset-gray-900"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Rejoindre la communauté
            </motion.button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {STATS_DATA.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: 'rgba(19, 168, 186, 0.3)',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="mb-4">
                  <stat.icon className="w-10 h-10 text-[#13a8ba]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.title}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-[#13a8ba]/10 animate-pulse pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-[#13a8ba]/10 animate-pulse pointer-events-none" />
    </section>
  );
};

export default Abouthero;