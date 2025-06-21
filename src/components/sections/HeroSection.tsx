import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
      {/* Background Image with darker overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/hero-background.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      </div>
      {/* Content */}
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Shiv Industries: Your Partner for Curated Packaging Solutions.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6">
          From Precision Protection to Perfect Presentation: Custom Packaging Tailored to Every Business Need.
        </p>
        <p className="text-md md:text-lg text-white/70 mb-8">
          Elevate your brand, protect your products, and streamline your supply chain with our expertly designed and manufactured packaging for every industry.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="px-8 py-3 text-lg shadow-md hover:shadow-lg transition-shadow bg-black text-white hover:bg-gray-900">Get Your Custom Packaging Quote</Button>
          <Button size="lg" className="px-8 py-3 text-lg shadow-md hover:shadow-lg transition-shadow bg-white text-black hover:bg-gray-100">Explore Our Product Range</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;