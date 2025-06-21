import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Shiv Industries</h3>
          <p className="text-sm mb-4">Your Partner for Curated Packaging Solutions.</p>
          <p className="text-sm">
            [Your Address, Ahmedabad, Gujarat, India]
          </p>
          <p className="text-sm">Phone: [Your Phone Number]</p>
          <p className="text-sm">Email: [Your Email Address]</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#why-shiv-industry" className="hover:underline">Why Choose Us</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#get-started" className="hover:underline">Contact Us</a></li>
            {/* <li><a href="#" className="hover:underline">Blog</a></li> */}
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal & Social</h4>
          <ul className="space-y-2 mb-4">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={24} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter size={24} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
          </div>
        </div>
      </div>

      <Separator className="my-8 bg-primary-foreground/20" />

      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} Shiv Industries. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;