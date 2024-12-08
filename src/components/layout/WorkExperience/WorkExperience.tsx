
import {
  Timeline,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineTitle,
	TimelineIcon,
	TimelineDescription,
	TimelineContent,
	TimelineTime,
} from '@/components/ui/time-line/time-line';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
const WorkExperience = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: "0px 0px 0px 0px" });

	return (
    <div
      ref={ref}
      className={`relative  transition-transform duration-1000 ease-[cubic-bezier(0.17, 0.55, 0.55, 1)] delay-500 text-gray-800 w-full max-w-7xl h-full min-h-[500px] lg:min-h-[600px] flex flex-col items-start justify-start gap-6   ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
        Work Experience
      </h2>
    </div>
  );
}

export default WorkExperience