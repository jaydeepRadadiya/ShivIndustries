import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">About Shiv Industries</h2>
        
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">Our Manufacturing Process</h3>
        <p className="text-md text-center text-black max-w-4xl mx-auto mb-12">
          At Shiv Industries, we combine cutting-edge technology with skilled craftsmanship to ensure every piece of packaging meets the highest standards. Our streamlined process, from design to delivery, is meticulously managed to guarantee efficiency, precision, and quality. We invest in advanced machinery and continuous training to stay at the forefront of packaging innovation.
        </p>

        <div className="space-y-16">
          {/* Section 1: Photo | Details */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="/machine1.jpg" alt="Precision Cutting Machine" className="w-full h-auto rounded-lg shadow-lg object-cover" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h4 className="text-2xl font-bold mb-4 text-black">Precision Cutting & Shaping</h4>
              <p className="text-lg text-black">Our advanced cutting machines ensure every box is precisely cut to your specifications, minimizing waste and maximizing accuracy for perfect fit and finish.</p>
            </div>
          </div>

          {/* Section 2: Details | Photo */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <img src="/machine2.jpg" alt="Automated Folding Machine" className="w-full h-auto rounded-lg shadow-lg object-cover" />
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <h4 className="text-2xl font-bold mb-4 text-black">Automated Folding & Assembly</h4>
              <p className="text-lg text-black">State-of-the-art automated folding and assembly lines guarantee consistent quality and rapid production, allowing us to handle large orders with unmatched efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;