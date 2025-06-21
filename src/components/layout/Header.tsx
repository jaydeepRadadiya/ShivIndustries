import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="text-2xl font-bold text-primary dark:text-primary-foreground">
        Shiv Industry
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#hero" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors">Home</a>
        <a href="#why-shiv-industry" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors">Why Us</a>
        <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors">Products</a>
        <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors">Testimonials</a>
        <a href="#get-started" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors">Contact</a>
      </nav>
      <Button className="hidden md:block">Get a Quote</Button>
      {/* Mobile menu icon could go here */}
    </header>
  );
};

export default Header;