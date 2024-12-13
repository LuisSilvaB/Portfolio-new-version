import type { Lang } from "@/types/lang.type";
import dictionary from '@/assets/dictionary.json';
import ProjectsCard from "./components/ProjectsCard/ProjectsCard";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AiFillBuild } from "react-icons/ai";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import ProjectCardV2 from "./components/ ProjectCardV2/ ProjectCardV2";

type ProjectsProps = {
  lang: Lang;
}

const Projects = ({ lang }: ProjectsProps) => {
  const dictionaryData = dictionary.Projects;
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="transition-transform my-20 justify-start duration-1000 ease-[cubic-bezier(0.17, 0.55, 0.55, 1)] delay-500 text-gray-800 w-full rounded-3xl bg-gray-800 p-4  max-w-7xl min-h-[500px] lg:min-h-[600px] h-full flex flex-col items-start overflow-hidden justify-start gap-6 px-10 lg:px-10 pt-10">
      <div className="w-full flex flex-wrap flex-row gap-4 justify-start items-center h-fit">
        <div className="w-16 h-16 flex justify-center items-center rounded-lg bg-white">
          <AiFillBuild className="text-3xl text-blue-500 dark:text-yellow-500" />
        </div>
        <div className="flex flex-col gap-4"> 
          <h2 className="text-5xl text-white uppercase font-bold font-satoshi">
            {dictionaryData.title[lang]}
          </h2>
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
          active: true,
          startIndex: 1,
        }}
        className="w-full flex items-center flex-1" 
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {dictionaryData.projects.map((project, index) => (
            <CarouselItem key={index}>
                <ProjectCardV2
                  key={index}
                  id={index + 1}
                  project={project}
                  lang={lang as Lang}
                />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Projects