import React, { useCallback, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi, // Import CarouselApi type
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
  autoPlayDelay?: number; // Optional prop for delay, default to 3000ms
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, autoPlayDelay = 3000 }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const play = useCallback(() => {
    if (!api) return;
    timerRef.current = setTimeout(() => {
      if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
        api.scrollTo(0); // Go back to the first slide if at the end
      } else {
        api.scrollNext();
      }
    }, autoPlayDelay);
  }, [api, autoPlayDelay]);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on("pointerDown", stop); // Stop on user interaction
    api.on("settle", play); // Resume after settling

    play(); // Start auto-play when component mounts or api changes

    return () => {
      stop(); // Clear timeout on unmount
      api.off("pointerDown", stop);
      api.off("settle", play);
    };
  }, [api, play, stop]);

  return (
    <Carousel
      className="w-full mx-auto"
      setApi={setApi} // Set the API instance
      onMouseEnter={stop} // Pause on hover
      onMouseLeave={play} // Resume on mouse leave
    >
      <CarouselContent>
        {images.map((imageSrc, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={imageSrc}
                alt={`Carousel Image ${index + 1}`}
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
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