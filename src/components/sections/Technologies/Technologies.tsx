import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { SiAmazonec2, SiMysql, SiNextdotjs, SiPostgresql, SiSupabase, SiTypescript, SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiAmazons3 } from "react-icons/si";
import { FaAws, FaReact } from "react-icons/fa";
import TechnologiesCard from "./components/technologiesCard";
import { motion } from "framer-motion";

const Technologies = () => {
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

  const FrontTechnologies = [
    {
      name: "TypeScript",
      icon: <SiTypescript/>,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Vite",
      icon: <SiVite />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Styled",
      icon: <SiStyledcomponents />,
    },
    {
      name: "Lightsail",
      icon: <FaAws />,
    },
    {
      name: "S3",
      icon: <SiAmazons3 />,
    },
    {
      name: "EC2", 
      icon: <SiAmazonec2 />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "Mysql", 
      icon: <SiMysql />, 
    },
    {
      name: "Postgres",
      icon: <SiPostgresql />,
    },
    {
      name: "Supabase",
      icon: <SiSupabase />,
    },
  ];

  return (
    <motion.div className=" text-gray-500 text-2xl lg:text-5xl mb-10 lg:mb-32 w-full max-w-7xl gap-10 flex flex-col">
      <div className="hidden lg:flex w-full flex-wrap gap-10 justify-start items-center">
        {FrontTechnologies.map((tech, index) => <TechnologiesCard key={index} id={index + 1} icon={tech.icon} name={tech.name} />)}
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
          {FrontTechnologies.map((tech, index) => (
            <CarouselItem
              key={index}
              className={`w-full text-2xl md:basis-1/2 lg:basis-[15%] gap-4 py-3 flex items-center`}
            >
              {tech.icon}
              <p className="font-semibold">{tech.name}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};

export default Technologies;
