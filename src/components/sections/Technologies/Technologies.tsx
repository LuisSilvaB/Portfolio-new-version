import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import dictionary from '@/assets/dictionary/dictionary.json';
import TechnologiesCard from './components/technologiesCard';
import { getIconByName } from '@/utils/getIconByName';
import type { iconType } from '@/types/icon.type';

const Technologies = () => {
  const dictionaryData = dictionary.aboutMe;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const content = scrollContainer.firstElementChild;
    if (!content) return;
    
    scrollContainer.appendChild(content.cloneNode(true));

    const scroll = () => {
      if (scrollContainer.scrollLeft >= content.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div className="text-2xl lg:text-5xl mb-10 lg:mb-32 w-full max-w-6xl gap-10 flex flex-col">
      {/* Desktop view */}
      <div className="hidden lg:flex w-full flex-wrap gap-10 justify-start items-center">
        {dictionaryData.technologies.map((icon: string, index: number) => (
          <TechnologiesCard 
            key={index} 
            id={index + 1} 
            icon={getIconByName(icon as iconType)} 
            name={icon} 
          />
        ))}
      </div>

      {/* Mobile view with infinite scroll */}
      <div className="lg:hidden w-full overflow-hidden">
        <div 
          ref={scrollRef} 
          className="flex whitespace-nowrap overflow-x-hidden"
        >
          <div className="flex animate-scroll">
            {dictionaryData.technologies.map((icon: string, index: number) => (
              <div
                key={index}
                className="inline-flex items-center gap-4 py-3 px-6 text-2xl text-gray-600 dark:text-white"
              >
                {getIconByName(icon as iconType)}
                <p className="font-semibold whitespace-nowrap">{icon}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;