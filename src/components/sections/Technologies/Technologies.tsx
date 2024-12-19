import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { motion } from "framer-motion";
import dictionary from '@/assets/dictionary/dictionary.json';
import TechnologiesCard from "./components/technologiesCard";
import { getIconByName } from "@/utils/getIconByName";
import type { iconType } from "@/types/icon.type";

const Technologies = () => {
  const dictionaryData = dictionary.aboutMe;
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true, 
      containScroll: "keepSnaps",
    },
    [Autoplay()]
  );

  const plugin = useRef(
    Autoplay({
      active: true,
      delay: 2000, 
    })
  );

  return (
    <motion.div className=" text-2xl lg:text-5xl mb-10 lg:mb-32 w-full max-w-6xl gap-10 flex flex-col">
      <div className="hidden lg:flex w-full flex-wrap gap-10 justify-start items-center">
        {dictionaryData.technologies.map((icon:string, index:number) => <TechnologiesCard key={index} id={index + 1} icon={getIconByName(icon as iconType)} name={icon} />)}
      </div>
      <Carousel
        opts={{
          loop: true,
          active: true,
          startIndex: 1,
        }}
        ref={emblaRef}
        plugins={[plugin.current]}
        className="w-full flex lg:hidden"
      >
        <CarouselContent className="px-10">
          {dictionaryData.technologies.map((icon:string, index:number) => (
            <CarouselItem
              key={index}
              className={`w-full text-2xl md:basis-1/2 lg:basis-[15%] gap-4 py-3 text-white flex items-center`}
            >
              {getIconByName(icon as iconType)}
              <p className="font-semibold">{icon}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};

export default Technologies;
