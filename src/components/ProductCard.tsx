import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  benefit: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, description, benefit }) => {
  return (
    <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 bg-gray-800 border-gray-700">
      <img src={imageSrc} alt={title} className="w-full h-64 object-contain" /> {/* Increased height from h-48 to h-64 */}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-gray-200">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-300 text-sm mb-2">{description}</p>
        <p className="text-300 font-medium text-sm">{benefit}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;