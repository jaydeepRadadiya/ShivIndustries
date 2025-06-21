import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <Carousel className="w-full max-w-2xl mx-auto">
      <CarouselContent>
        {images.map((imageSrc, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={imageSrc}
                alt={`Carousel Image ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;