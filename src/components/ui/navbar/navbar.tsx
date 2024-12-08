import { useState } from "react";

import NavbarDesktopOptions from "./navbar-options-desktop";
import NavbarMobileOptions from "./navbar-options-mobile";


import { TbBeach } from "react-icons/tb";
import SwitchTheme from "../switch-theme/switch-theme";


const Navbar = () => {

  return (
    <nav className="w-full h-14 flex items-center flex-row p-4 bg-white dark:bg-[#060c14] justify-center transition-all  ease-in-out">
      <div className="w-full flex justify-between items-center max-w-7xl">
        <section className="flex items-center gap-2">
          <NavbarMobileOptions />
          <TbBeach size={24} className="text-blue-500 dark:text-yellow-500" />
          <p className="text-xl intersect:opacity-100 transition-opacity">Luis Silva</p>
        </section>
        <NavbarDesktopOptions />
        <SwitchTheme />
      </div>
    </nav>
  );
}

export default Navbar