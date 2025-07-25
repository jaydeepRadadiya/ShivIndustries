import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'; // Import Link

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
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-relaxed mb-6">
          Shiv Industries: Your Partner for Curated Packaging Solutions.
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12">
          Elevate your brand, protect your products, and streamline your supply chain with our expertly designed and manufactured packaging for every industry, available for both domestic and international export.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/get-quote"> {/* Use Link for navigation */}
            <Button size="lg" className="px-8 py-3 text-lg shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground hover:bg-primary/90">Get Your Custom Packaging Quote</Button>
          </Link>
          <Link to="/products"> {/* Added Link for navigation to product catalog */}
            <Button size="lg" className="px-8 py-3 text-lg shadow-md hover:shadow-lg transition-shadow bg-white text-black hover:bg-gray-100">Explore Our Product Range</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;