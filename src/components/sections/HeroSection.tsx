import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-muted overflow-hidden pt-16"> {/* Changed bg-background to bg-muted */}
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/F3F4F6/1F2937?text=Packaging+Solutions')" }}></div>
      {/* Content */}
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-4">
          Shiv Industries: Your Partner for Curated Packaging Solutions.
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 mb-6">
          From Precision Protection to Perfect Presentation: Custom Packaging Tailored to Every Business Need.
        </p>
        <p className="text-md md:text-lg text-foreground/70 mb-8">
          Elevate your brand, protect your products, and streamline your supply chain with our expertly designed and manufactured packaging for every industry.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="px-8 py-3 text-lg shadow-md hover:shadow-lg transition-shadow">Get Your Custom Packaging Quote</Button>
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground shadow-md hover:shadow-lg transition-shadow">Explore Our Product Range</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;