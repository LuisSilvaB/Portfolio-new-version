import {
  SiAmazonec2,
  SiFlask,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiTypescript,
  SiVite,
  SiReacthookform,
  SiStyledcomponents,
  SiShadcnui,
  SiRedux,
  SiExpress,
  SiAmazons3,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws, FaReact, FaPython, FaGithub } from "react-icons/fa";
import { TbBrandOauth } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

export const technologiesNodes = {
  nextjs: <SiNextdotjs />,
  tailwind: <RiTailwindCssFill />,
  supabase: <SiSupabase />,
  react: <FaReact />,
  oauth: <TbBrandOauth />,
  chadcn: <SiShadcnui />,
  redux: <SiRedux />,
  typescript: <SiTypescript />,
  styled: <SiStyledcomponents />,
  aws: <FaAws />,
  vite: <SiVite />,
  mysql: <SiMysql />,
  postgres: <SiPostgresql />,
  express: <SiExpress />,
  s3: <SiAmazons3 />,
  world: <BiWorld />,
  github: <FaGithub />,
  python: <FaPython />,
  flask: <SiFlask />,
  ecs: <SiAmazonec2 />,
  reactForm: <SiReacthookform />,
};
