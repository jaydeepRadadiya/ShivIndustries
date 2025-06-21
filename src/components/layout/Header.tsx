import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'; // Import Link

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black text-white shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-white">
          SHIV INDUSTRIES
        </div>
        <div className="text-sm text-white uppercase text-center">
          you ask we innovate
        </div>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#hero" className="text-white hover:text-gray-300 transition-colors text-lg font-bold">Home</a>
        <a href="#why-shiv-industry" className="text-white hover:text-gray-300 transition-colors text-lg font-bold">Why Us</a>
        <a href="#products" className="text-white hover:text-gray-300 transition-colors text-lg font-bold">Products</a>
        <a href="#testimonials" className="text-white hover:text-gray-300 transition-colors text-lg font-bold">Contact</a>
      </nav>
      <Link to="/get-quote"> {/* Use Link for navigation */}
        <Button className="hidden md:block shadow-md hover:shadow-lg transition-shadow bg-white text-black hover:bg-gray-100">Get a Quote</Button>
      </Link>
      {/* Mobile menu icon could go here */}
    </header>
  );
};

export default Header;