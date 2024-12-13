import NavbarDesktopOptions from "./navbar-options-desktop";
import NavbarMobileOptions from "./navbar-options-mobile";

import SwitchTheme from "../switch-theme/switch-theme";
import SelectLang from "../select-lang/select-lang";
import type { Lang } from "@/types/lang.type";
import { motion } from "framer-motion";


type NavbarProps = {
  lang: Lang;
}

const Navbar = ({ lang }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`font-satoshi font-bold w-full h-14 flex items-center sticky top-0 backdrop-blur-sm bg-white/20 dark:backdrop-blur-sm dark:bg-[url('')] flex-row p-4 z-20 dark:bg-[#060c14] justify-center transition-all ease-in-out duration-100`} 
    >
      <div className="w-full flex justify-between items-center max-w-6xl">
        <section className="flex items-center gap-2">
          <NavbarMobileOptions lang={lang} />
          {/* <TbBeach size={24} className="text-blue-500 dark:text-yellow-500" /> */}
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