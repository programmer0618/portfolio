import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselSize() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const carouselContents = [
    "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F35ca3db9-fb43-4f12-bd48-8b08a503db09-kilwwj.png&w=1920&q=75",
    "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
    "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbddfc919-2260-46dd-a078-b956bd9a377c-kilwcq.png&w=1920&q=75",
    "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F0e386b44-1f7d-4331-a1d9-6ba2cf04a5e8-kilwbv.png&w=1920&q=75",
    "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F9bc23e02-4912-4db2-9022-c265a1c4eb43-kilwb0.png&w=1920&q=75",
    "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fb74304fd-3b49-43b5-b005-0a786dc405dd-kilwa5.png&w=1920&q=75",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1,
        speed: 500,
      }}
      className="w-full mt-[40px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselContents.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <img
              src={item}
              alt={item}
              className="w-full h-full border border-gray-700 rounded-sm"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
