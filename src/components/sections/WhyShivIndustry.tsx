import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Award, Lightbulb, Truck, Handshake, Leaf } from 'lucide-react';
import { cn } from "@/lib/utils"; // Import cn utility

interface DifferentiatorProps {
  icon: React.ElementType;
  title: string;
  description: string;
  cardBgClass: string;
  iconColorClass: string;
  titleColorClass: string;
  descriptionColorClass: string;
  borderColorClass: string;
}

const DifferentiatorCard: React.FC<DifferentiatorProps> = ({
  icon: Icon,
  title,
  description,
  cardBgClass,
  iconColorClass,
  titleColorClass,
  descriptionColorClass,
  borderColorClass
}) => (
  <Card className={cn(
    "flex flex-col items-center text-center p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2",
    cardBgClass,
    borderColorClass
  )}>
    <CardHeader className="pb-4 flex flex-col items-center"> {/* Added flex flex-col items-center */}
      <Icon size={48} className={cn("mb-4", iconColorClass)} />
      <CardTitle className={cn("text-xl font-semibold", titleColorClass)}>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className={descriptionColorClass}>{description}</p>
    </CardContent>
  </Card>
);

const WhyShivIndustry: React.FC = () => {
  const differentiators = [
    {
      icon: Package,
      title: "Curated Solutions",
      description: "We offer personalized consultations to understand your specific product, brand, and logistical needs, delivering truly custom-fit packaging that stands out.",
      cardBgClass: "bg-blue-50",
      iconColorClass: "text-blue-600",
      titleColorClass: "text-blue-900",
      descriptionColorClass: "text-blue-700",
      borderColorClass: "border-blue-200"
    },
    {
      icon: Award,
      title: "Unrivaled Quality",
      description: "Utilizing premium materials and state-of-the-art manufacturing, we guarantee durable, aesthetically pleasing, and consistent quality across all orders.",
      cardBgClass: "bg-indigo-50",
      iconColorClass: "text-indigo-600",
      titleColorClass: "text-indigo-900",
      descriptionColorClass: "text-indigo-700",
      borderColorClass: "border-indigo-200"
    },
    {
      icon: Lightbulb,
      title: "Design & Innovation",
      description: "Our expert design team collaborates with you to create packaging that not only protects but also enhances your brand appeal and market presence, from concept to delivery.",
      cardBgClass: "bg-amber-50",
      iconColorClass: "text-amber-600",
      titleColorClass: "text-amber-900",
      descriptionColorClass: "text-amber-700",
      borderColorClass: "border-amber-200"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "We understand the importance of your timelines. Our streamlined processes ensure your orders are delivered efficiently and on schedule, every time.",
      cardBgClass: "bg-cyan-50",
      iconColorClass: "text-cyan-600",
      titleColorClass: "text-cyan-900",
      descriptionColorClass: "text-cyan-700",
      borderColorClass: "border-cyan-200"
    },
    {
      icon: Handshake,
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority. We offer dedicated support and flexibility to adapt to your evolving packaging requirements, ensuring a seamless experience.",
      cardBgClass: "bg-orange-50",
      iconColorClass: "text-orange-600",
      titleColorClass: "text-orange-900",
      descriptionColorClass: "text-orange-700",
      borderColorClass: "border-orange-200"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Committed to a greener future, we offer a range of eco-friendly material options and responsible manufacturing processes.",
      cardBgClass: "bg-emerald-50",
      iconColorClass: "text-emerald-600",
      titleColorClass: "text-emerald-900",
      descriptionColorClass: "text-emerald-700",
      borderColorClass: "border-emerald-200"
    }
  ];

  return (
    <section id="why-shiv-industry" className="py-16 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-4"> {/* Added a div to center logo and text */}
          <img src="/Shiv-Industries Dark-.png" alt="Shiv Industries Logo" className="h-20 mb-4" /> {/* Added logo */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
            Beyond Boxes: Crafting Packaging Excellence for Your Success.
          </h2>
        </div>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          At Shiv Industries, we believe packaging is a critical extension of your brand and protection for your products. With deep industry experience, we specialize in delivering curated packaging solutions designed to meet the unique challenges and aspirations of businesses across various sectors. Our commitment is to precision, innovation, and unwavering quality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((differentiator, index) => (
            <DifferentiatorCard
              key={index}
              icon={differentiator.icon}
              title={differentiator.title}
              description={differentiator.description}
              cardBgClass={differentiator.cardBgClass}
              iconColorClass={differentiator.iconColorClass}
              titleColorClass={differentiator.titleColorClass}
              descriptionColorClass={differentiator.descriptionColorClass}
              borderColorClass={differentiator.borderColorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShivIndustry;