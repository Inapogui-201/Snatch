import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90">
      {/* Contenu principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Voyagez Utile, Achetez Sans Frontières
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-6 leading-relaxed">
            SNATCH connecte voyageurs et acheteurs pour des achats
            internationaux sécurisés et économiques.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/commander"
              className="inline-flex items-center justify-center px-6 py-2 bg-white text-[#13a8ba] hover:bg-gray-100 font-medium rounded-md transition-all duration-300 shadow-sm hover:shadow-md group text-sm"
            >
              Commander un Produit
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/voyager"
              className="inline-flex items-center justify-center px-6 py-2 bg-transparent border border-[#13a8ba] text-white hover:bg-white/10 font-medium rounded-md transition-all duration-300 shadow-sm hover:shadow-md group text-sm"
            >
              Devenir Voyageur
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mini-statistiques */}
          <div className="mt-6 flex justify-center flex-wrap gap-3 text-white text-xs">
            <div className="px-3 py-1 bg-white/10 rounded-full">500+ Utilisateurs</div>
            <div className="px-3 py-1 bg-white/10 rounded-full">1200+ Commandes</div>
            <div className="px-3 py-1 bg-white/10 rounded-full">50+ Pays</div>
          </div>
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
    </section>
  );
};

export default CallToAction;