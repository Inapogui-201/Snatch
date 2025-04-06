import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-16 overflow-hidden">
      {/* Fond avec dégradé et effet de parallaxe */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/world-dotted-map.png')", // Chemin direct
          backgroundAttachment: "fixed", // Effet de parallaxe
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
          {/* Colonne 1 : Logo et Description */}
          <div className="space-y-4">
            <Link to="/">
              <img
                src="/Logo-snatch.png"
                alt="SNATCH Logo"
                className="h-14 sm:h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              SNATCH connecte voyageurs et acheteurs pour des achats
              internationaux simplifiés. Rejoignez notre communauté pour un
              commerce mondial accessible et économique.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com" },
                { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com" },
                { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com" },
                { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#13a8ba] transform hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {["Accueil", "À propos", "Services", "Témoignages", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === "accueil" ? "" : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#13a8ba] transition-colors duration-300 relative group text-sm sm:text-base"
                  >
                    {item}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#13a8ba] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contactez-nous
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm sm:text-base">
                Email:{" "}
                <a
                  href="mailto:contact@snatch.com"
                  className="hover:text-[#13a8ba] transition-colors duration-300"
                >
                  contact@snatch.com
                </a>
              </li>
              <li className="text-gray-400 text-sm sm:text-base">
                Téléphone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-[#13a8ba] transition-colors duration-300"
                >
                  +1 234 567 890
                </a>
              </li>
              <li className="text-gray-400 text-sm sm:text-base">
                Adresse: 123 Rue de l'Innovation, Paris, France
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Restez informé de nos dernières offres et actualités.
            </p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-300 border border-gray-700 focus:outline-none focus:border-[#13a8ba] transition-all duration-300 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-[#13a8ba] hover:bg-[#1cd6ce] text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Ligne de séparation et Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SNATCH. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;