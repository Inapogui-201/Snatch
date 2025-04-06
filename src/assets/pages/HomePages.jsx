import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";

const HomePages = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
      <ServicesSection />
      <CallToAction />
      <Testimonials />
    </>
  );
};

export default HomePages;