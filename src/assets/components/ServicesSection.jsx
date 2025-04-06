import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plane, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Services data
const services = [
  {
    icon: <ShoppingCart size={40} className="text-[#13a8ba]" />,
    title: "Achats internationaux",
    description: "Accédez à des produits du monde entier grâce à notre réseau de voyageurs prêts à rapporter vos articles préférés. Commandez facilement depuis n'importe quelle plateforme e-commerce.",
    link: "/commande",
  },
  {
    icon: <Plane size={40} className="text-[#13a8ba]" />,
    title: "Livraison par voyageurs",
    description: "Connectez-vous avec des voyageurs qui se rendent à votre destination. Ils achètent votre produit et vous le livrent, réduisant les délais et frais de livraison internationaux.",
    link: "/voyage",
  },
  {
    icon: <Shield size={40} className="text-[#13a8ba]" />,
    title: "Transactions sécurisées",
    description: "Notre plateforme joue le rôle d'intermédiaire sécurisé. Les fonds sont reversés au voyageur uniquement après confirmation de la réception du produit par l'acheteur.",
    link: "/produits-et-services",
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-4">
          Nos Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#13a8ba] to-[#1cd6ce] mx-auto mb-6 rounded" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SNATCH connecte acheteurs et voyageurs pour faciliter l'achat et la livraison de produits à l'international. Découvrez comment notre plateforme peut vous aider.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full border border-gray-100 hover:border-[#13a8ba]/50 group"
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#13a8ba]/10 to-[#1cd6ce]/10 rounded-full mb-6 group-hover:bg-[#13a8ba]/20 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#13a8ba] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to={service.link}
                className="inline-flex items-center text-[#13a8ba] font-medium hover:text-[#1cd6ce] transition-colors duration-300 group-hover:translate-x-1"
              >
                En savoir plus
                <svg
                  className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;