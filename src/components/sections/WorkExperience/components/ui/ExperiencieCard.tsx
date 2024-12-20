import type { Lang } from "@/types/lang.type";
import type { ExperienceType } from "../../types/WorkExperience.type";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

type ExperiencieCardProps = {
  id: number;
  lang: Lang;
  experience: ExperienceType;
}

const ExperienceCard = ({ id, lang, experience }: ExperiencieCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-50px 0px -50px 0px",
  });


  return (
    <motion.div ref={ref} className="w-full min-h-[300px] lg:min-h-[350px] flex flex-row transition-all ease-in-out duration-200">
      {/** Number */}
      <div className="hidden w-[35%] duration-500 lg:flex items-start pt-8">
        <p className={`text-9xl  font-bold text-blue-600 dark:text-dark-primary-perzonalized transition-all ease-in-out duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-28"}`}>
          0{id}
        </p>
      </div>
      {/** Description */}
      <div 
         className={`w-full dark:text-white duration-300 ${isInView ? "opacity-100" : "opacity-0"}`}>
        <h3 className="text-xl font-bold text-blue-500 dark:text-dark-primary-perzonalized">{experience.title[lang]}</h3>
        <h4 className="text-md text-gray-600 dark:text-white font-bold ">{experience.date[lang]}</h4>
        <p className="mt-4">
          {experience.description?.[lang]}
        </p>
        <br/>
        <h2 className="text-md font-bold ">{experience.techStack?.title[lang]}</h2>
        <p className="mt-4">
          {experience.techStack?.description[lang]}
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;