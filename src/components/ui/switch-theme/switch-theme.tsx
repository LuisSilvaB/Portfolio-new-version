import { CiBrightnessUp } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

const SwitchTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    isDark
      ? document.querySelector("html")?.classList.remove("dark")
      : document.querySelector("html")?.classList.add("dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  useEffect(() => {
    if(!localStorage.getItem("theme")){
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else if (localStorage.getItem("theme") === "dark") {
      setIsDark(true);
      document.querySelector("html")?.classList.add("dark");
    }else{
      setIsDark(false);
      document.querySelector("html")?.classList.remove("dark");
    }
  }, []);
  return (
    <div className="flex items-center gap-2">
      <Switch onCheckedChange={toggleTheme} checked={isDark} />
      <span>{isDark ? <CiCloudMoon className="text-white" /> : <CiBrightnessUp />}</span>
    </div>

  );
}

export default SwitchTheme