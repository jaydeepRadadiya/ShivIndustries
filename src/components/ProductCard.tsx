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
    <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 bg-black border-gray-700"> {/* Changed bg-gray-800 to bg-black */}
      <img src={imageSrc} alt={title} className="w-full h-48 object-contain" />
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle> {/* Changed text-gray-200 to text-white */}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-200 text-sm mb-2">{description}</p> {/* Changed text-gray-300 to text-gray-200 */}
        <p className="text-gray-200 font-medium text-sm">{benefit}</p> {/* Changed text-gray-300 to text-gray-200 */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;