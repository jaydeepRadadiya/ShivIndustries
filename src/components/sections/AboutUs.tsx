import React from 'react';
import ImageCarousel from "@/components/ImageCarousel"; // Import the new ImageCarousel component

const AboutUs: React.FC = () => {
  const carouselImages = [
    "/Carousel1.png",
    "/Carousel2.jpeg", // Changed to .jpeg
    "/Carousel3.jpeg", // Changed to .jpeg
    "/Carousel4.png",
  ];

  return (
    <section id="about-us" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">About Shiv Industries</h2>
        
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">Our Manufacturing Process</h3>
        <p className="text-md text-center text-black max-w-4xl mx-auto mb-12">
          At Shiv Industries, we combine cutting-edge technology with skilled craftsmanship to ensure every piece of packaging meets the highest standards. Our streamlined process, from design to delivery, is meticulously managed to guarantee efficiency, precision, and quality. We invest in advanced machinery and continuous training to stay at the forefront of packaging innovation.
        </p>

        {/* Replace static images with ImageCarousel */}
        <div className="mb-16">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* Removed the "Precision Cutting & Shaping" and "Automated Folding & Assembly" sections */}
      </div>
    </section>
  );
};

export default AboutUs;