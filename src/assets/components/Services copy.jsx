import React from "react";
import { Link } from "react-router-dom";

// Icônes SVG (vous pouvez les remplacer par des icônes réelles ou une bibliothèque comme react-icons)
const CartIcon = () => (
  <svg
    className="w-12 h-12 text-[#13a8ba]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const TruckIcon = () => (
  <svg
    className="w-12 h-12 text-[#13a8ba]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v1h4a1 1 0 001-1V6a1 1 0 00-1-1h-2m-5 0h5m-5 0h-1m-1 0H9m5 11h2"
    />
  </svg>
);

const BoxIcon = () => (
  <svg
    className="w-12 h-12 text-[#13a8ba]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4m0 0v10"
    />
  </svg>
);

const Services= () => {
  const services = [
    {
      icon: <CartIcon />,
      title: "Achetez Facilement",
      description:
        "Commandez des produits de n'importe où dans le monde grâce à notre réseau de voyageurs. Simple, rapide et sécurisé.",
      link: "/services",
    },
    {
      icon: <TruckIcon />,
      title: "Livraison Internationale",
      description:
        "Recevez vos achats où que vous soyez. Nos voyageurs assurent une livraison fiable et économique.",
      link: "/services",
    },
    {
      icon: <BoxIcon />,
      title: "Service Sécurisé",
      description:
        "Chaque transaction est protégée. Suivez votre commande en temps réel et profitez d'une expérience sans stress.",
      link: "/services",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Titre de la section (optionnel) */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12">
          Nos Services
        </h2>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icône */}
              <div className="mb-6">{service.icon}</div>

              {/* Titre */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Lien Learn More */}
              <Link
                to={service.link}
                className="flex items-center text-[#13a8ba] font-semibold hover:text-[#1cd6ce] transition-colors duration-300"
              >
                En savoir plus
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
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

export default Services;