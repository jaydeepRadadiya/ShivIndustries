import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhyShivIndustry from "@/components/sections/WhyShivIndustry";
import ProductRange from "@/components/sections/ProductRange";
import AboutUs from "@/components/sections/AboutUs";
import ContactInfoSection from "@/components/sections/ContactInfoSection"; // Import the new section

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUs />
        <ProductRange />
        <WhyShivIndustry />
        <ContactInfoSection /> {/* Add the new contact info section here */}
        {/* Other sections will be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;