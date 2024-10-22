import * as React from "react";
import Autoplay from "embla-carousel-autoplay"; // Autoplay pluginini import qilish

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSelector } from "react-redux";

export function CarouselOrientation() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 2000, // Har 2 soniyada slayd almashadi
      stopOnInteraction: true, // Foydalanuvchi o'zaro aloqaga kirishsa to'xtaydi
      reverse: true, // Borib kelish animatsiyasi
    })
  );

  const data = [
    {
      id: 1,
      title: "Startup loyiha",
      description: "Bitta praktikum kursda eng top NextJS dasturchi bo'ling.",
    },
    {
      id: 2,
      title: "Mukammal Backend kurs",
      description: "Ushbu kursda murakkab mavzularni to'liq o'rganasiz.",
    },
    {
      id: 3,
      title: "Twitter Clone",
      description: "Twitter X dasturni to'liq clone versiyasi.",
    },
  ];

  const { mode } = useSelector((state) => state.mode);

  return (
    <Carousel
      plugins={[autoplay.current]} // Autoplay pluginini qo'shamiz
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-full"
      onMouseEnter={autoplay.current.stop} // Hover qilinganda to'xtaydi
      onMouseLeave={autoplay.current.reset} // Hoverdan chiqqanda davom etadi
    >
      <CarouselContent className="-mt-1 lg:h-[200px] h-[300px]">
        {data.map((item, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card
                className={`bg-[none] ${
                  mode
                    ? "text-gray-800 border-gray-200"
                    : "text-white border-gray-700"
                } min-h-[120px] w-full rounded-none cursor-pointer`}
              >
                <CardContent className="flex flex-col items-start justify-center lg:p-4 p-2">
                  <span className="lg:text-2xl text-xl lg:font-bold font-semibold font-spaceGrotesk ">
                    {item.title}
                  </span>
                  <p className="text-start mt-2 font-montserrat text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={`${
          mode
            ? "bg-white hover:bg-light  hover:text-black"
            : "bg-gray-800 hover:bg-gray-900 hover:text-white"
        } z-20`}
      />
      <CarouselNext
        className={`${
          mode
            ? "bg-white hover:bg-light hover:text-black"
            : "bg-gray-800 hover:bg-gray-900 hover:text-white"
        } z-20`}
      />
    </Carousel>
  );
}
