import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const machineImages = [
  { src: "/machine1.jpg", alt: "Precision Cutting Machine" },
  { src: "/machine2.jpg", alt: "Automated Folding Machine" },
  { src: "/machine3.jpg", alt: "High-Speed Printing Press" },
  { src: "/machine4.jpg", alt: "Quality Control Station" },
  { src: "/machine5.jpg", alt: "Corrugation Line" },
  { src: "/machine6.jpg", alt: "Packaging and Dispatch Area" },
];

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">About Shiv Industries</h2>
        {/* The requested paragraph has been removed */}

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">Our Manufacturing Process</h3>
        <p className="text-md text-center text-black max-w-4xl mx-auto mb-12">
          At Shiv Industries, we combine cutting-edge technology with skilled craftsmanship to ensure every piece of packaging meets the highest standards. Our streamlined process, from design to delivery, is meticulously managed to guarantee efficiency, precision, and quality. We invest in advanced machinery and continuous training to stay at the forefront of packaging innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineImages.map((machine, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border">
              <img src={machine.src} alt={machine.alt} className="w-full h-64 object-cover" />
              <CardContent className="p-4 text-center">
                <p className="text-lg font-semibold text-black">{machine.alt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;