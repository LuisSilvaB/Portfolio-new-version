import { VscListSelection } from "react-icons/vsc";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../button";
import dictionary from "@/assets/dictionary/dictionary.json";
import type { Lang } from "@/types/lang.type";
import { useEffect, useState } from "react";

type NavbarMobileOptionsProps = {
  lang: Lang;
}

const NavbarMobileOptions = ( {lang} : NavbarMobileOptionsProps) => {
  const dictionaryData = dictionary.navbar;
  const [activeSection, setActiveSection] = useState<number>(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry, index) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.1, root: null },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  console.log(activeSection);

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center dark:text-white lg:hidden">
        <VscListSelection className="dark:text-white" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex flex-col dark:text-white justify-start items-start"
      >
        <ul className="flex w-full uppercase items-start flex-col mt-10">
          {
            Object.keys(dictionaryData).map((key: any, index: number) => (
              <li key={index}>
                <a href={`#${index}`}>
                  <Button className={`nav-link ${index === activeSection ? "border border-black": ''} `} variant="link">{dictionaryData[key as keyof typeof dictionaryData][lang]}</Button>
                </a>
              </li>
            ))
          }
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarMobileOptions