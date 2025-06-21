import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Award, Lightbulb, Truck, Handshake, Leaf } from 'lucide-react';

interface DifferentiatorProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const DifferentiatorCard: React.FC<DifferentiatorProps> = ({ icon: Icon, title, description }) => (
  <Card className="flex flex-col items-center text-center p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-blue-50 border border-blue-200">
    <CardHeader className="pb-4">
      <Icon size={48} className="text-blue-600 mb-4" />
      <CardTitle className="text-xl font-semibold text-blue-900">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-blue-700">{description}</p>
    </CardContent>
  </Card>
);

const WhyShivIndustry: React.FC = () => {
  const differentiators = [
    {
      icon: Package,
      title: "Curated Solutions",
      description: "We offer personalized consultations to understand your specific product, brand, and logistical needs, delivering truly custom-fit packaging that stands out."
    },
    {
      icon: Award,
      title: "Unrivaled Quality",
      description: "Utilizing premium materials and state-of-the-art manufacturing, we guarantee durable, aesthetically pleasing, and consistent quality across all orders."
    },
    {
      icon: Lightbulb,
      title: "Design & Innovation",
      description: "Our expert design team collaborates with you to create packaging that not only protects but also enhances your brand appeal and market presence, from concept to delivery."
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "We understand the importance of your timelines. Our streamlined processes ensure your orders are delivered efficiently and on schedule, every time."
    },
    {
      icon: Handshake,
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority. We offer dedicated support and flexibility to adapt to your evolving packaging requirements, ensuring a seamless experience."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Committed to a greener future, we offer a range of eco-friendly material options and responsible manufacturing processes."
    }
  ];

  return (
    <section id="why-shiv-industry" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Beyond Boxes: Crafting Packaging Excellence for Your Success.
        </h2>
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
          At Shiv Industries, we believe packaging is a critical extension of your brand and protection for your products. With deep industry experience, we specialize in delivering curated packaging solutions designed to meet the unique challenges and aspirations of businesses across various sectors. Our commitment is to precision, innovation, and unwavering quality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((differentiator, index) => (
            <DifferentiatorCard
              key={index}
              icon={differentiator.icon}
              title={differentiator.title}
              description={differentiator.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShivIndustry;