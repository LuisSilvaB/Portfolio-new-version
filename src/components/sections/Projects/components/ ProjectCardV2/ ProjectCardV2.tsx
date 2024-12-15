import type { Lang } from "@/types/lang.type";
import type { ProjectType, TechnologiesType } from "../../types/Project.type";
import { motion } from "framer-motion";
import { getIconTechnology } from "../../utils/get-technologies";
import { Button } from "@/components/ui/button";

type ProjectsCardV2Props = {
  id: number;
  project: ProjectType;
  lang: Lang;
};

const ProjectCardV2 = ({ id, project, lang } : ProjectsCardV2Props) => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-2 ">
      <div className="flex-1 flex px-2 h-full flex-col min-h-full gap-2 lg:gap-4 ">
        <h3 className="text-white text-lg lg:text-4xl font-bold font-satoshi">
          {id}. {project.title[lang]}
        </h3>
        <p className="text-white text-base lg:text-lg font-satoshi h-full max-w-[80%]">
          {project.description[lang]}
        </p>
        <div className="flex flex-row flex-wrap gap-4 items-center mt-4 text-white">
          {project.technologies.map((technology, index) => (
            <div
              key={index}
              className="flex flex-row border px-2 py-1 border-dashed rounded-lg gap-2 text-sm md:text-lg items-center text-white"
            >
              {getIconTechnology(technology as TechnologiesType)}
              <p>{technology}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 h-full">
        <motion.img
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            style: { transform: "scale(1.1)" },
          }}
          transition={{ duration: 0.5 }}
          src={project.img_url}
          alt="Placeholder"
          className="w-full h-full object-cover rounded-xl transition-all ease-in-out duration-300"
        />
        <div className="absolute bottom-4 right-4 w-fit h-fit flex flex-row gap-2 items-center justify-center">
          {project.git_url ? (
            <a href={project.git_url} target="_blank" rel="noopener noreferrer">
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
      </div>
    </div>
  );
}

export default ProjectCardV2