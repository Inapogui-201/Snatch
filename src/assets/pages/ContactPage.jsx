import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, Loader2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import FAQSection from '../components/FAQSection';

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

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/snatch' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/snatch' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/snatch' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/snatch' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section  className="relative bg-gray-900 text-gray-300 py-30 overflow-hidden" >
            {/* Fond avec dégradé et effet de parallaxe */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/city.jpg')", // Chemin direct
          backgroundAttachment: "fixed", // Effet de parallaxe
        }}
      ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            Contactez-nous
          </motion.h1>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="w-24 h-1 bg-gradient-to-r from-[#13a8ba] to-[#1cd6ce] mx-auto mb-6 rounded"
          />
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Besoin d’aide ou d’informations ? Notre équipe est prête à vous accompagner dans votre expérience SNATCH.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 md:col-span-2 h-fit"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Nous joindre</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "contact@snatch.com", href: "mailto:contact@snatch.com" },
                { icon: Phone, title: "Téléphone", value: "+33 1 23 45 67 89" },
                { icon: MapPin, title: "Adresse", value: "25 Rue du Commerce, 75015 Paris, France" },
                { icon: MessageSquare, title: "Support", value: "Lundi - Vendredi, 9h00 - 18h00" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-teal-50 rounded-lg flex-shrink-0">
                    <item.icon className="h-5 w-5 text-[#13a8ba]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-gray-600 hover:text-[#13a8ba] transition-colors duration-200">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-teal-50 rounded-full hover:bg-[#13a8ba]/20 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5 text-[#13a8ba]" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 md:col-span-3"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Votre message</h2>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-teal-50 border border-teal-100 text-teal-800 p-6 rounded-lg flex flex-col items-center text-center"
              >
                <div className="bg-teal-100 p-2 rounded-full mb-4">
                  <Send className="h-6 w-6 text-[#13a8ba]" />
                </div>
                <h3 className="text-lg font-medium mb-2">Message envoyé !</h3>
                <p className="text-teal-700">
                  Merci de nous avoir contactés. Nous vous répondrons sous peu.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#13a8ba] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#13a8ba] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#13a8ba] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                    placeholder="Objet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#13a8ba] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Décrivez votre demande..."
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
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <FAQSection />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;