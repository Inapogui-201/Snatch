import React from "react";
import { ShoppingCart, Truck, Package } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-[#13a8ba]" />,
      title: "Besoin de quel article ?",
      description:
        "Avec SNATCH, vous pouvez obtenir n'importe quel produit du monde entier. Nous nous occupons de la livraison.",
    },
    {
      icon: <Truck className="w-10 h-10 text-[#13a8ba]" />,
      title: "Livraison par des voyageurs",
      description:
        "Connectez-vous avec des voyageurs qui se rendent à votre destination. Ils achètent votre produit et vous le livrent, réduisant les délais et frais de livraison internationaux.",
    },
    {
      icon: <Package className="w-10 h-10 text-[#13a8ba]" />,
      title: "Transactions sécurisées",
      description:
        "Notre plateforme joue le rôle d'intermédiaire sécurisé. Les fonds sont reversés au voyageur uniquement après confirmation de la réception du produit par l'acheteur.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 p-4 w-full"
            >
              {/* Icône à gauche */}
              <div className="flex-shrink-0 mt-1">{service.icon}</div>

              {/* Contenu à droite */}
              <div className="flex-1 min-w-0"> {/* min-w-0 pour éviter le débordement */}
                {/* Titre */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;