import { technologiesNodes } from "../constants/technologies.constant";
import type { TechnologiesType } from "../types/Project.type";

export const getIconTechnology = (technologies: TechnologiesType) => {
  return technologiesNodes[technologies];
};

