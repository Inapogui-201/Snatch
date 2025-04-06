import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, Smile, TrendingUp } from 'lucide-react';

const ValueCard = ({ Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-teal-50"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#13a8ba]" />
        </div>
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Aboutvalues = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2 * i
      }
    })
  };

  const values = [
    {
      icon: Globe,
      title: "Accessibilité",
      description: "Rendre le shopping international accessible à tous en connectant voyageurs et acheteurs, supprimant les barrières géographiques qui limitent l'accès aux produits du monde entier."
    },
    {
      icon: ShieldCheck,
      title: "Sécurité",
      description: "Garantir des transactions sécurisées entre acheteurs et voyageurs grâce à notre système d'escrow et nos protocoles de vérification des utilisateurs."
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Optimiser le processus d'achat international avec une plateforme intuitive qui simplifie la mise en relation et le suivi des commandes en temps réel."
    },
    {
      icon: Smile,
      title: "Communauté",
      description: "Créer un réseau de confiance entre voyageurs et acheteurs qui partagent leurs expériences et contribuent à l'amélioration continue de la plateforme."
    }
  ];

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-teal-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* En-tête de section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center justify-center gap-2 bg-teal-100 px-3 py-1.5 rounded-full shadow-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#13a8ba]" />
            <span className="text-xs sm:text-sm text-[#13a8ba] font-medium">Nos Valeurs</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 md:mb-6 lg:mb-9 text-gray-900">
            Les principes qui <span className="text-[#13a8ba]">guident SNATCH</span>
          </h2>
        </motion.div>

        {/* Grille des valeurs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              Icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutvalues;