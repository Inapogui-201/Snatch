import React, { useRef, useState } from "react";
import { Users, Network, Briefcase, Maximize2, Play, Pause } from "lucide-react";
import video from "../../../public/Matjari.mp4"; // Assurez-vous que le chemin est correct

const AboutUs = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <section id="a-propos" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 -mt-16 md:-mt-20 lg:-mt-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Titre et sous-titre en haut et centrés */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-4">
            À Propos de Nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#13a8ba] to-[#1cd6ce] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Une plateforme qui réinvente le commerce international en connectant voyageurs et acheteurs du monde entier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vidéo à gauche sur 6 colonnes (réduite) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-80 lg:h-[400px]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/livraison1.webp"
                controls={false}
              >
                <source src={video} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Contrôles personnalisés */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                {/* Bouton Play/Pause */}
                <button
                  onClick={togglePlayPause}
                  className="bg-[#13a8ba] hover:bg-[#1cd6ce] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Play or pause video"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-0.5" />
                  )}
                </button>

                {/* Bouton Plein écran */}
                <button
                  onClick={toggleFullScreen}
                  className="bg-[#13a8ba] hover:bg-[#1cd6ce] text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Toggle full screen"
                >
                  <Maximize2 className="w-6 h-6" />
                </button>
              </div>

              {/* Bouton Play central */}
              {!isPlaying && (
                <button
                  onClick={togglePlayPause}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#13a8ba] hover:bg-[#1cd6ce] text-white rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 ml-0.5" />
                </button>
              )}
            </div>
          </div>

          {/* Partie texte à droite sur 6 colonnes */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              SNATCH est une plateforme qui connecte voyageurs et acheteurs
              pour des achats internationaux simplifiés. Nous éliminons les
              barrières géographiques et réduisons les coûts de livraison,
              rendant le commerce mondial accessible à tous.
            </p>

            {/* Points forts avec icônes */}
            <div className="space-y-6 mt-6">
              {[
                {
                  icon: <Users className="h-10 w-10 text-[#13a8ba]" />,
                  title: "Communauté mondiale",
                  description: "Un réseau reliant voyageurs et acheteurs à travers le monde pour des achats internationaux sans frontières."
                },
                {
                  icon: <Network className="h-10 w-10 text-[#13a8ba]" />,
                  title: "Plateforme intelligente",
                  description: "Une IA qui optimise la mise en relation, estime délais et coûts, et suggère des produits selon les destinations."
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-[#13a8ba]" />,
                  title: "Transactions sécurisées",
                  description: "Un système sécurisé garantissant le paiement après confirmation de la réception de votre produit."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#13a8ba] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;