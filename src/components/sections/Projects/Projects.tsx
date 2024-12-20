import type { Lang } from "@/types/lang.type";
import dictionary from '@/assets/dictionary/dictionary.json'; 
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import ProjectCardV2 from "./components/ ProjectCardV2/ ProjectCardV2";
import { LuBlocks } from "react-icons/lu";
import { motion } from "framer-motion";

type ProjectsProps = {
  lang: Lang;
}

const Projects = ({ lang }: ProjectsProps) => {
  const dictionaryData = dictionary.Projects;
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="transition-transform my-20 justify-start duration-1000 bg-white dark:bg-dark-secondary-perzonalized shadow-sm ease-[cubic-bezier(0.17, 0.55, 0.55, 1)] delay-500 text-gray-800 w-full lg:rounded-3xl lg:p-10  max-w-7xl h-fit lg:min-h-[600px] lg:h-auto flex flex-col items-start overflow-hidden justify-start gap-6 px-4 lg:px-10 py-10">
      <div className="w-full flex flex-wrap flex-row gap-4 justify-start items-center h-fit">
        {/* <div className="w-10 h-10 lg:w-16 lg:h-16 flex justify-center items-center border dark:border-none rounded-lg bg-white">
          <LuBlocks className="text-xl lg:text-3xl text-blue-500  dark:text-primary-perzonalized-1" />
        </div> */}
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl lg:text-7xl text-blue-500 dark:text-dark-primary-perzonalized uppercase font-bold font-poppinsExtraBold" 
          >
            {dictionaryData.title[lang]}
          </motion.h2>
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
          active: true,
          startIndex: 1,
        }}
        className="w-full flex items-center h-fit lg:flex-1"
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