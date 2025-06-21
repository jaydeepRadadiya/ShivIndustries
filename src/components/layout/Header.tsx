import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-card text-card-foreground shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-col items-start">
        <div className="text-2xl font-bold text-primary">
          Shiv Industries
        </div>
        <div className="text-sm text-muted-foreground">
          you ask we innovate
        </div>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#hero" className="text-foreground hover:text-primary transition-colors">Home</a>
        <a href="#why-shiv-industry" className="text-foreground hover:text-primary transition-colors">Why Us</a>
        <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
        <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
        <a href="#get-started" className="text-foreground hover:text-primary transition-colors">Contact</a>
      </nav>
      <Button className="hidden md:block transition-all duration-300 hover:scale-105">Get a Quote</Button>
      {/* Mobile menu icon could go here */}
    </header>
  );
};

export default Header;