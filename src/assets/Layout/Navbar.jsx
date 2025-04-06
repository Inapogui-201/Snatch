import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle internal section navigation
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu

    if (location.pathname === "/") {
      // If already on homepage, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Section with ID "${sectionId}" not found`);
      }
    } else {
      // Navigate to homepage and then scroll to section
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(`Section with ID "${sectionId}" not found after navigation`);
        }
      }, 100); // Delay to ensure page loads
    }
  };

  // Navigation links configuration
  const navLinks = [
    { name: "Accueil", path: "/", isSection: true, sectionId: "home" },
    { name: "À propos", path: "/à-propos", isSection: false },
    { name: "Services", path: "/#services", isSection: true, sectionId: "services" }, // Points to Services section
    { name: "Témoignages", path: "/#temoignages", isSection: true, sectionId: "temoignages" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-gradient-to-b from-gray-900/95 to-gray-900/70 shadow-lg backdrop-blur-sm"
          : "py-3 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src="/Logo-snatch.png"
            alt="SNATCH Logo"
            className={`transition-all duration-300 ${
              scrolled ? "h-12 sm:h-14 md:h-16" : "h-14 sm:h-16 md:h-20"
            } w-auto`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((item) =>
            item.isSection ? (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleSectionClick(e, item.sectionId)}
                className={`text-base lg:text-lg font-medium ${
                  scrolled ? "text-gray-100" : "text-white"
                } hover:text-[#13a8ba] transition-all duration-300 relative group`}
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#13a8ba] transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base lg:text-lg font-medium ${
                  scrolled ? "text-gray-100" : "text-white"
                } hover:text-[#13a8ba] transition-all duration-300 relative group`}
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#13a8ba] transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
          <Link to="/contacter" onClick={() => setIsOpen(false)}>
            <button className="bg-[#13a8ba] hover:bg-[#1cd6ce] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Contactez-nous
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-8 h-8 transition-colors duration-300 ${
              scrolled ? "text-white" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl mt-2 py-6 px-6 rounded-b-xl"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((item) =>
              item.isSection ? (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleSectionClick(e, item.sectionId)}
                  className="text-lg font-semibold text-gray-800 hover:text-[#13a8ba] py-2 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-gray-800 hover:text-[#13a8ba] py-2 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link to="/contacter" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#13a8ba] hover:bg-[#1cd6ce] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md">
                Contactez-nous
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;