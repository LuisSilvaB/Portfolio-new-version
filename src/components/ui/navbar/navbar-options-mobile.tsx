import { VscListSelection } from "react-icons/vsc";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../button";

const NavbarMobileOptions = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center lg:hidden">
        <VscListSelection />
      </SheetTrigger>
      <SheetContent side={"left"} className="flex flex-col justify-start items-start">
        <ul className="flex w-full items-start flex-col mt-10">
          <li>
            <Button variant="link">About me</Button>
          </li>
          <li>
            <Button variant="link">Work experience</Button>
          </li>
          <li>
            <Button variant="link">Projects</Button>
          </li>
          <li>
            <Button variant="link">Education</Button>
          </li>
          <li>
            <Button variant="link">Get in touch</Button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarMobileOptions