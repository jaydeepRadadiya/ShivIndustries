import React from 'react';
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products"; // Import product data
import { Link } from 'react-router-dom'; // Import Link

const ProductRange: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-black text-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-4">
          Discover Your Ideal Packaging Solution.
        </h2>
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Explore our comprehensive range of high-quality packaging options, meticulously crafted to protect your products, enhance your brand identity, and meet diverse industry requirements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              benefit={product.benefit}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products"> {/* Updated link */}
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-gray-400 text-black hover:bg-gray-800 hover:text-white shadow-md hover:shadow-lg transition-shadow">
              View Our Full Product Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;