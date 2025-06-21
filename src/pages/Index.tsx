import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyShivIndustry from "@/components/sections/WhyShivIndustry";
import ProductRange from "@/components/sections/ProductRange";
import AboutUs from "@/components/sections/AboutUs";
import ContactInfoSection from "@/components/sections/ContactInfoSection";

const Index: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Use setTimeout to ensure the element is rendered before scrolling
        // and to allow for any layout shifts (e.g., fixed header)
        setTimeout(() => {
          const headerOffset = 100; // Adjust this value based on your header's height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100); // Small delay to ensure rendering and calculate offset
      }
    } else {
      // Optionally scroll to top if no hash is present (e.g., navigating to just '/')
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); // Re-run effect when location changes

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUs />
        <ProductRange />
        <WhyShivIndustry />
        <ContactInfoSection />
        {/* Other sections will be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;