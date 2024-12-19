import type { Lang } from '@/types/lang.type';
import { Button } from '../button';
import dictionary from '@/assets/dictionary/dictionary.json'; 
import { useEffect, useState } from 'react';

type NavbarDesktopOptionsProps = {
  lang: Lang;
}

const NavbarDesktopOptions = ({ lang }: NavbarDesktopOptionsProps) => {
  const dictionaryData = dictionary.navbar;
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-scroll]');
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        root: null,
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <ul className="hidden lg:flex items-center">
      {Object.keys(dictionaryData).map((key: any, index: number) => (
        <li key={index}>
          <a href={`#${dictionaryData[key as keyof typeof dictionaryData].id}`}>
            <Button
              className={`nav-link transition-all ease-in-out duration-500 ${dictionaryData[key as keyof typeof dictionaryData].id === activeSection ? "underline underline-offset-4 decoration-2 decoration-blue-500 dark:decoration-dark-primary-perzonalized font-bold" : ""} `}
              variant="link"
            >
              {dictionaryData[key as keyof typeof dictionaryData].title[lang]}
            </Button>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarDesktopOptions