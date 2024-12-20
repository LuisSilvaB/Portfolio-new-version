import { VscListSelection } from "react-icons/vsc";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { Button } from "../button";
import dictionary from "@/assets/dictionary/dictionary.json";
import type { Lang } from "@/types/lang.type";
import { useEffect, useState } from "react";
import useToggle from "@/hooks/useToggle";

type NavbarMobileOptionsProps = {
  lang: Lang;
}

const NavbarMobileOptions = ( {lang} : NavbarMobileOptionsProps) => {
  const dictionaryData = dictionary.navbar;
  const [activeSection, setActiveSection] = useState<string>('');
  const toggle = useToggle(); 
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
        threshold: 0.2,
        root: null,
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <Sheet
      open={toggle.isOpen}
      onOpenChange={toggle.onToggle}
    >
      <SheetTrigger className="flex items-center text-white justify-center lg:hidden">
        <VscListSelection className="text-blue-600 dark:text-white" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex flex-col text-blue-800 dark:text-white  justify-start items-start"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <ul className="flex w-full uppercase items-start flex-col mt-10">
          {Object.keys(dictionaryData).map((key: any, index: number) => (
            <li key={index}>
              <a
                href={`#${dictionaryData[key as keyof typeof dictionaryData].id}`}
                onClick={toggle.onClose}
              >
                <Button
                  className={`transition-all ease-in-out duration-500 ${dictionaryData[key as keyof typeof dictionaryData].id === activeSection ? "underline underline-offset-4 decoration-2 decoration-blue-500 dark:decoration-yellow-500 font-bold" : ""} `}
                  variant="link"
                >
                  {
                    dictionaryData[key as keyof typeof dictionaryData].title[
                      lang
                    ]
                  }
                </Button>
              </a>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarMobileOptions