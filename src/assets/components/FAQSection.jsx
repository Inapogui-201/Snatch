import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// FAQ data
const faqData = [
  {
    question: "Comment fonctionne SNATCH ?",
    answer: "SNATCH connecte des acheteurs avec des voyageurs. Vous choisissez un produit, un voyageur l’achète à l’étranger et vous le livre, réduisant ainsi les coûts et délais d’expédition.",
  },
  {
    question: "Est-ce sécurisé de commander via SNATCH ?",
    answer: "Oui ! Nous agissons comme intermédiaire sécurisé. Les fonds sont bloqués jusqu’à ce que vous confirmiez la réception du produit en bon état.",
  },
  {
    question: "Quels types de produits puis-je commander ?",
    answer: "Vous pouvez commander presque tout ce qui est légal et transportable par un voyageur, des vêtements aux gadgets, en passant par des spécialités locales.",
  },
  {
    question: "Combien ça coûte ?",
    answer: "Les frais varient selon le produit et la distance. Les voyageurs fixent leurs propres tarifs, mais SNATCH garantit des coûts souvent inférieurs aux expéditions traditionnelles.",
  },
  {
    question: "Comment devenir voyageur sur SNATCH ?",
    answer: "Inscrivez-vous, indiquez vos prochaines destinations, et proposez vos services. Une fois un acheteur intéressé, vous convenez des détails via notre plateforme.",
  },
];

// Animation variants
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

const answerVariants = {
  closed: { opacity: 0, height: 0 },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#13a8ba] to-[#1cd6ce] mx-auto mb-6 rounded" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Vous avez des questions ? Nous avons les réponses. Voici les interrogations les plus courantes sur SNATCH.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus size={24} className="text-[#13a8ba]" />
                  ) : (
                    <Plus size={24} className="text-[#13a8ba]" />
                  )}
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="px-5 pb-5 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;