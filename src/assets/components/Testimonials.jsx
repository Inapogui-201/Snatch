import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Émilie T.",
    role: "Acheteuse de produits USA",
    content: "J'ai reçu mes sneakers limited edition en parfait état avant même la date estimée. Le voyageur m'a envoyé des photos à chaque étape !",
    rating: 5,
    location: "Lyon, France",
    type: "buyer",
    avatarColor: "bg-blue-500"
  },
  {
    id: 2,
    name: "Karim B.",
    role: "Voyageur Dubaï-France",
    content: "3 voyages, 12 commandes livrées. L'escrow sécurisé me permet de voyager l'esprit tranquille. Excellente communauté.",
    rating: 5,
    location: "Marseille, France",
    type: "traveler",
    avatarColor: "bg-[#13a8ba]"
  },
  {
    id: 3,
    name: "Léa S.",
    role: "Acheteuse cosmétiques Corée",
    content: "Plus rapide qu'un shipping international et moins cher. La livraison en main propre change tout pour les produits fragiles.",
    rating: 4,
    location: "Bruxelles, Belgique",
    type: "buyer",
    avatarColor: "bg-purple-500"
  },
  {
    id: 4,
    name: "Alexandre P.",
    role: "Voyageur France-Japon",
    content: "Je voyage souvent pour le travail. SNATCH me permet de rentabiliser mes déplacements tout en aidant des passionnés.",
    rating: 5,
    location: "Tokyo, Japon",
    type: "traveler",
    avatarColor: "bg-[#13a8ba]"
  },
  {
    id: 5,
    name: "Sarah K.",
    role: "Acheteuse de thé rare",
    content: "Enfin un moyen fiable d'obtenir des thés authentiques directement des petites exploitations chinoises !",
    rating: 5,
    location: "Montréal, Canada",
    type: "buyer",
    avatarColor: "bg-rose-500"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(() => {
    if (typeof window === 'undefined') return 1;
    return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  });

  // Memoized functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  // Handle resize with debouncing
  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };

    const debouncedResize = debounce(handleResize, 200);
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Get displayed testimonials
  const displayedTestimonials = testimonials
    .slice(currentIndex, currentIndex + visibleSlides)
    .concat(testimonials.slice(0, Math.max(0, (currentIndex + visibleSlides) - testimonials.length)));

  // Debounce utility
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return (
    <section 
      id="temoignages" 
      className="py-12 px-4 bg-gray-50 relative overflow-hidden scroll-mt-20" // Ajout de scroll-mt pour tenir compte de la navbar fixe
      aria-label="Témoignages des utilisateurs"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#13a8ba]/10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#13a8ba]/10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 mt-16">
            Ils partagent leur expérience SNATCH
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez ce que notre communauté pense du service
          </p>
        </div>

        <div className="relative group" role="region" aria-roledescription="carousel">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 transition-opacity duration-300`}
                  style={{ opacity: displayedTestimonials.includes(testimonial) ? 1 : 0 }}
                >
                  <div 
                    className={`h-full p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                      testimonial.type === 'buyer' ? 'bg-white' : 'bg-[#13a8ba]/10'
                    }`}
                    role="group"
                    aria-roledescription="slide"
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 mb-6 italic relative">
                      <span className="absolute -left-3 -top-3 text-4xl text-[#13a8ba] opacity-20">"</span>
                      {testimonial.content}
                    </blockquote>

                    <div className="flex items-center">
                      <div 
                        className={`${testimonial.avatarColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4`}
                        aria-hidden="true"
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500 mt-1">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#13a8ba]"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5 text-[#13a8ba]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#13a8ba]"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5 text-[#13a8ba]" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2" role="tablist">
          {Array.from({ length: Math.ceil(testimonials.length / visibleSlides) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * visibleSlides)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#13a8ba] ${
                Math.floor(currentIndex / visibleSlides) === index ? 'bg-[#13a8ba] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Aller au groupe de témoignages ${index + 1}`}
              aria-selected={Math.floor(currentIndex / visibleSlides) === index}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;