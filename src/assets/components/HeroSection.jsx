import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden min-h-screen flex items-center bg-gray-50"
    >
      {/* Image de fond optimisée */}
      <div className="absolute inset-0 z-0">
        <div
          style={{
            backgroundImage: `url(/livraison1.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            transition: "transform 0.5s ease-out",
          }}
          className="absolute inset-0 scale-105 hover:scale-100"
        ></div>
           <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90"></div>

      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16 flex flex-col md:flex-row justify-between items-center">
        {/* Contenu aligné au début à gauche */}
        <div className="space-y-4 sm:space-y-6 animate-fade-in-up md:w-3/5 lg:w-1/2">
          {/* Titre avec police ajustée */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-extrabold text-white leading-tight tracking-tight">
            Achetez à l'international
            <br />
            <span className="text-[#13a8ba] drop-shadow-md">Sans Limites</span>
          </h1>

          {/* Sous-titre avec texte réduit */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed">
            SNATCH est une plateforme web qui connecte des voyageurs et des acheteurs pour faciliter l’achat et la livraison de produits à l’international. Un acheteur souhaitant obtenir un article d’un autre 
            pays peut trouver un voyageur se rendant à cette destination pour le lui rapporter. 
          </p>

          {/* Boutons alignés à gauche */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-[#13a8ba] hover:bg-[#1cd6ce] text-white font-semibold px-5 sm:px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contactez-nous
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-transparent border-2 border-[#13a8ba] hover:bg-[#13a8ba]/10 text-white font-semibold px-5 sm:px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Commandez Maintenant
              </button>
            </Link>
          </div>
        </div>

        {/* Image optionnelle sur le côté droit pour les écrans plus grands */}
        <div className="hidden lg:block md:w-2/5 animate-fade-in-right">
          <img 
            src="/hero-img.svg" 
            alt="Illustration commerce international" 
            className="w-full h-auto max-w-md mx-auto" 
          />
        </div>
      </div>

      {/* Animation CSS personnalisée */}
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
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;