import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } => "@/components/ui/card";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  benefit: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, description, benefit }) => {
  return (
    <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 bg-black border-gray-700">
      <img src={imageSrc} alt={title} className="w-full h-48 object-contain p-4" /> {/* Added p-4 for padding */}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-200 text-sm mb-2">{description}</p>
        <p className="text-gray-200 font-medium text-sm">{benefit}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;