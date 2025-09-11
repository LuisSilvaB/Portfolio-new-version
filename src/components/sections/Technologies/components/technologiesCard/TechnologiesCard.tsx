import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react"

type TechnologiesCardProps = {
  id: number;
  icon: ReactNode; 
  name: string;
}

const TechnologiesCard = ({id, icon, name }: TechnologiesCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    margin: "-50px 0px -50px 0px",
  });

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${id * 100}ms`,
      }}
      className={`basis-1/6 text-lg transition-all ease-in-out bg-[1px] border-dashed rounded-lg text-gray-500 dark:text-white border border-gray-700 dark:border-dark-primary-perzonalized flex justify-center items-center w-fit gap-4 py-3 ${isInView ? `opacity-100` : "opacity-0"}`}
    >
      {icon}
      <p className="font-semibold">{name[0].toUpperCase() + name.slice(1)}</p>
    </div>
  );
}

export default TechnologiesCard