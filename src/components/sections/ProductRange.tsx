import React from 'react';
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const ProductRange: React.FC = () => {
  const products = [
    {
      imageSrc: "/Corrugated-Boxes.png",
      title: "Corrugated Boxes",
      description: "The industry standard for durable and versatile shipping. Our corrugated boxes offer superior protection and are customizable for various weights and dimensions. Ideal for general shipping, storage, and e-commerce.",
      benefit: "Reliable protection for every shipment."
    },
    {
      imageSrc: "/Duplex.png",
      title: "Duplex Corrugated Boxes",
      description: "Combining strength with a refined finish. Duplex corrugated boxes feature a smoother outer layer, perfect for high-quality printing and enhanced branding, while maintaining structural integrity.",
      benefit: "Premium presentation, robust protection."
    },
    {
      imageSrc: "/E-Flute-Corrugated Boxes.jpeg",
      title: "E-Flute Corrugated Boxes",
      description: "Lightweight yet incredibly strong, E-Flute corrugated offers a sleek profile with excellent printability. Ideal for retail packaging, cosmetic boxes, and lightweight product packaging where aesthetics are key.",
      benefit: "Sleek design, strong performance for retail."
    },
    {
      imageSrc: "/Printed_Cartons.png",
      title: "Printed Cartons",
      description: "Transform your packaging into a powerful marketing tool. Our printed cartons offer vibrant, high-resolution graphics and branding opportunities, perfect for product display and consumer appeal.",
      benefit: "Make an impactful first impression."
    },
    {
      imageSrc: "/mono_cartoon.png",
      title: "Mono Cartons",
      description: "Elegant and cost-effective, mono cartons are single-layer paperboard boxes, extensively used for pharmaceutical, food, and consumer goods packaging. Fully customizable for shape, size, and print.",
      benefit: "Versatile and economical branding."
    },
    {
      imageSrc: "https://via.placeholder.com/400x300/ADD8E6/4682B4?text=Punching+Boxes",
      title: "Punching Boxes",
      description: "Precision-cut for unique shapes and designs. Punching boxes (die-cut boxes) offer custom fits and intricate details, providing a bespoke packaging solution for unique products or display needs.",
      benefit: "Custom fit, unique designs for specialized products."
    },
    {
      imageSrc: "/heavy-duty.png",
      title: "Heavy Duty Boxes",
      description: "Engineered for maximum strength and protection. Our heavy-duty boxes are designed to withstand extreme conditions and heavy loads, ensuring the safe transport of large or fragile items.",
      benefit: "Uncompromised strength for critical shipments."
    },
    {
      imageSrc: "/Fruit-packging.png",
      title: "Fruit Packing Boxes",
      description: "Specially designed for the safe and fresh transport of fruits. Our fruit packing boxes offer optimal ventilation, moisture resistance, and durable construction, ensuring your produce arrives in perfect condition. Available in various sizes and customizable with branding.",
      benefit: "Preserve freshness and quality from farm to table."
    }
  ];

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
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-gray-400 text-black hover:bg-gray-800 hover:text-white shadow-md hover:shadow-lg transition-shadow">
            View Our Full Product Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;