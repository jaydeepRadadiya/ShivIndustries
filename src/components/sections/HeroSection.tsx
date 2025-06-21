import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-800 overflow-hidden pt-16">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/F3F4F6/1F2937?text=Packaging+Solutions')" }}></div>
      {/* Content */}
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          Shiv Industry: Your Partner for Curated Packaging Solutions.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6">
          From Precision Protection to Perfect Presentation: Custom Packaging Tailored to Every Business Need.
        </p>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 mb-8">
          Elevate your brand, protect your products, and streamline your supply chain with our expertly designed and manufactured packaging for every industry.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="px-8 py-3 text-lg">Get Your Custom Packaging Quote</Button>
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-gray-400 text-gray-800 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">Explore Our Product Range</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;