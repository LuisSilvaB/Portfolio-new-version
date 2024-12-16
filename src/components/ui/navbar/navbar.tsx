import NavbarDesktopOptions from "./navbar-options-desktop";
import NavbarMobileOptions from "./navbar-options-mobile";

import SwitchTheme from "../switch-theme/switch-theme";
import SelectLang from "../select-lang/select-lang";
import type { Lang } from "@/types/lang.type";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";


type NavbarProps = {
  lang: Lang;
}

const Navbar = ({ lang }: NavbarProps) => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsDown(true); 
      } else {
        setIsDown(false); 
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`${isDown? "backdrop-blur-sm dark:backdrop-blur-sm bg-white/20": "bg-white backdrop-blur-0"} font-satoshi font-bold w-full h-14 flex items-center sticky top-0    dark:bg-[url('')] flex-row p-4 z-20 dark:bg-[#060c14] justify-center transition-all ease-in-out duration-200`} 
    >
      <div className="w-full flex justify-between items-center max-w-6xl">
        <section className="flex items-center gap-2">
          <NavbarMobileOptions lang={lang} />
          <p className="text-2xl intersect:opacity-100 transition-opacity dark:text-yellow-500">
            lsilvaball.
          </p>
        </section>
        <NavbarDesktopOptions lang={lang} />
        <div className="flex items-center gap-2">
          <SelectLang lang={lang} />
          <SwitchTheme />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar