import type { Lang } from "@/types/lang.type";
import dictionary from '@/assets/dictionary.json';
import ProjectsCard from "./components/ProjectsCard/ProjectsCard";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
type ProjectsProps = {
  lang: Lang;
}

const Projects = ({ lang }: ProjectsProps) => {
  const dictionaryData = dictionary.Projects;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px 0px 0px" });
  return (
    <div className="transition-transform mb-40 justify-center duration-1000 ease-[cubic-bezier(0.17, 0.55, 0.55, 1)] delay-500 text-gray-800 w-full max-w-7xl min-h-[500px] lg:min-h-[600px] h-auto flex flex-col items-center justify-start  gap-6 px-4 lg:px-0 pt-20">
      <div className="relative flex flex-col items-center justify-center">
        <h2 className={`text-lg  lg:text-xl font-bold text-gray-600 dark:text-yellow-500 w-fit`}> 
          {dictionaryData.title[lang]}
        </h2>
        <h2 className="mt-1 text-3xl text-center  font-semibold text-blue-600 dark:text-white">
          {dictionaryData.secondaryTitle[lang]}
        </h2>
        <p className="text-center max-w-[300px] my-2 text-gray-800 dark:text-white">{dictionaryData.secondaryDescription[lang]}</p> 
        <motion.div ref={ref} className={`h-[3px] -bottom-1 absolute bg-blue-500 dark:bg-yellow-500 transition-all ease-in-out duration-1000  rounded-full ${isInView ? "w-[100px]" : "w-[30px]"}`} /> 
      </div>
      <div className="w-full flex mt-10 flex-wrap flex-row gap-10 justify-center items-center flex-1">  
        {
          dictionaryData.projects.map((project, index) => (
            <ProjectsCard key={index} id={index + 1} lang={lang as Lang} project={project} />
          ))
        }
      </div>
    </div>
  );
}

export default Projects