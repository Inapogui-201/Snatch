import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./assets/Layout/Layout";
import ErrorPage from "./assets/pages/ErrorPage";
import HomePages from "./assets/pages/HomePages";
import About from "./assets/pages/About";
import ContactPage from "./assets/pages/ContactPage";
import NewsletterPopup from "./assets/components/NewsletterPopup";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative">
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePages />} />
            <Route path="/à-propos" element={<About />} />
            <Route path="/contacter" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <NewsletterPopup />
      </div>
    </BrowserRouter>
  );
};

export default App;