import { useInView } from "framer-motion";
import { useRef } from "react";
import type { ProjectType, TechnologiesType } from "../../types/Project.type";
import type { Lang } from "@/types/lang.type";
import { getIconTechnology } from "../../utils/get-technologies";
import { Button } from "@/components/ui/button";

type ProjectsCardProps = {
  id: number;
  project: ProjectType;
  lang: Lang;
};

const ProjectsCard = ({ id, project, lang }: ProjectsCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    margin: "-50px 0px -50px 0px",
  });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? `translateY(0px)` : `translateY(${id * 50}px)`,
      }}
      className={`relative group min-w-[50px] max-w-[400px] h-auto items-center bg-blue-500  rounded-lg  transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}
    >
      <div className="w-full rounded-md h-full max-h-[300px] overflow-hidden  z-10 group-hover:scale-105 transition-all ease-in-out duration-300">
        <img
          src={project.img_url}
          alt="Placeholder"
          className="z-10 bg-contain max-h-[300px]"
        />
      </div>
      <div className="-right-3 -top-3 group-hover:right-0 group-hover:top-0 rounded-md transition-all ease-in-out duration-300 -z-10 absolute w-full h-full  bg-blue-400 dark:bg-yellow-500" />
      <div className="absolute top-0 w-full h-full left-0 flex group-hover:scale-105 flex-col justify-start items-start overflow-hidden">
        <div className="w-full h-full flex flex-col justify-start items-start translate-y-[120%] group-hover:translate-y-28 transition-all ease-in-out duration-300">
          <div className=" h-full lg:h-full w-full  ease-in-out duration-300 bottom-0 absolute bg-blue-600 dark:bg-yellow-500 rounded-md opacity-80 dark:opacity-100 " />
          <div className=" border  w-full ease-in-out duration-300 bg-transparent py-2 px-4 rounded-md">
            <div className="relative flex flex-col h-full items-start justify-start">
              <div className="absolute -top-8  right-0 w-fit h-fit flex flex-row gap-2 items-center justify-center">
                {project.git_url ? (
                  <a
                    href={project.git_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-9 rounded-full flex justify-center items-center">
                      {getIconTechnology("github" as TechnologiesType)}
                    </Button>
                  </a>
                ) : null}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-9 rounded-full flex justify-center items-center">
                    {getIconTechnology("world" as TechnologiesType)}
                  </Button>
                </a>
              </div>
              <p className="text-white font-bold text-lg">
                {project.title[lang]}
              </p>
              <p className="text-white text-xs font-semibold h-full">
                {project.description[lang]}
              </p>
              <div className="flex flex-row gap-2 items-center mt-4 text-white">
                {project.technologies.map((technology, index) => (
                  <div key={index} className="flex flex-row gap-2 items-center">
                    {getIconTechnology(technology as TechnologiesType)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
