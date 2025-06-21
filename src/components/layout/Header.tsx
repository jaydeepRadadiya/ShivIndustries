import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'; // Import Link

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black text-white shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center"> {/* Changed to flex items-center for horizontal alignment */}
        <img src="/Shiv-Industries Dark-.png" alt="Shiv Industries Logo" className="h-10 mr-3" /> {/* Added logo */}
        <div className="flex flex-col items-start"> {/* Adjusted for text alignment */}
          <div className="text-2xl font-bold text-white">
            SHIV INDUSTRIES
          </div>
          <div className="text-sm text-white uppercase text-center">
            you ask we innovate
          </div>
        </div>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link to="/#hero" className="text-white hover:text-gray-300 transition-colors text-lg font-bold">Home</Link>
        <Link to="/#why-shiv-industry" className="text-white hover:text-gray-300 transition-colors text-lg font-bold">Why Us</Link>
        <Link to="/#products" className="text-white hover:text-gray-300 transition-colors text-lg font-bold">Products</Link>
        <Link to="/#testimonials" className="text-white hover:text-gray-300 transition-colors text-lg font-bold">Contact</Link>
      </nav>
      <Link to="/get-quote">
        <Button className="hidden md:block shadow-md hover:shadow-lg transition-shadow bg-white text-black hover:bg-gray-100">Get a Quote</Button>
      </Link>
      {/* Mobile menu icon could go here */}
    </header>
  );
};

export default Header;