import { VscListSelection } from "react-icons/vsc";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../button";
import dictionary from "@/assets/dictionary/dictionary.json";
import type { Lang } from "@/types/lang.type";

type NavbarMobileOptionsProps = {
  lang: Lang;
}

const NavbarMobileOptions = ( {lang} : NavbarMobileOptionsProps) => {
  const dictionaryData = dictionary.navbar;
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
          <li>
            <Button variant="link">{dictionaryData.aboutMe[lang]}</Button>
          </li>
          <li>
            <Button variant="link">
              {dictionaryData.workExperience[lang]}
            </Button>
          </li>
          <li>
            <Button variant="link">{dictionaryData.projects[lang]}</Button>
          </li>
          <li>
            <Button variant="link">{dictionaryData.education[lang]}</Button>
          </li>
          <li>
            <Button variant="link">{dictionaryData.getInTouch[lang]}</Button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarMobileOptions