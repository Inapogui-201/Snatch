import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Send, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

// Animation variants
const dialogVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const NewsletterDialog = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Newsletter subscription:', email);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setSubmitted(false);
        onClose(); // Close dialog after success
      }, 2000); // Show success for 2s before closing
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={dialogVariants}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 md:p-8 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Fermer"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Content */}
        <div className="relative z-10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="bg-teal-100 p-3 rounded-full inline-flex mb-4">
                <Send className="h-6 w-6 text-[#13a8ba]" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Inscription réussie !</h2>
              <p className="text-gray-600">
                Merci de vous être abonné(e) à notre newsletter. Vous recevrez bientôt nos dernières nouvelles !
              </p>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Rejoignez SNATCH
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Abonnez-vous à notre newsletter pour recevoir des offres exclusives, des mises à jour et des astuces pour vos achats internationaux.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#13a8ba]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#13a8ba] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                    placeholder="Entrez votre email"
                    disabled={isSubmitting}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full flex items-center justify-center bg-gradient-to-r from-[#13a8ba] to-[#1cd6ce] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Inscription...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      S'abonner
                    </>
                  )}
                </motion.button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-4">
                Pas intéressé(e) ?{' '}
                <button
                  onClick={onClose}
                  className="text-[#13a8ba] hover:text-[#1cd6ce] font-medium transition-colors duration-200"
                >
                  Continuer sans s'abonner
                </button>
              </p>
            </>
          )}
        </div>

        {/* Colored Blur at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#13a8ba]/30 to-transparent pointer-events-none"
          style={{ filter: 'blur(10px)' }}
        />
      </div>
    </motion.div>
  );
};

// Wrapper component to manage dialog visibility
const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Flag to check if this is a page reload rather than navigation
    const isPageReload = window.performance
      .getEntriesByType('navigation')
      .map((nav) => nav.type)
      .includes('reload');
    
    // Flag to check if this is a first visit (using sessionStorage)
    const isFirstVisit = !sessionStorage.getItem('hasVisited');
    
    // Show popup if either it's a page reload OR first visit
    if (isPageReload || isFirstVisit) {
      setIsOpen(true);
      // Mark as visited in this session
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && <NewsletterDialog onClose={handleClose} />}
    </AnimatePresence>
  );
};

export default NewsletterPopup;