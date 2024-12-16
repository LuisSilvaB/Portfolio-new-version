import type { Lang } from '@/types/lang.type';
import { Button } from '../button';
import dictionary from '@/assets/dictionary/dictionary.json'; 

type NavbarDesktopOptionsProps = {
  lang: Lang;
}

const NavbarDesktopOptions = ({ lang }: NavbarDesktopOptionsProps) => {
  const dictionaryData = dictionary.navbar;
  return (
    <ul className="hidden lg:flex items-center">
      <li>
        <a href="#about-me">
          <Button className='nav-link uppercase transition-all ease-in-out duration-500 font-semibold' variant="link">{dictionaryData.aboutMe[lang]}</Button>
        </a>
      </li>
      <li>
        <a href="#work-experience">
          <Button className='nav-link uppercase transition-all ease-in-out duration-500 font-semibold' variant="link">{dictionaryData.workExperience[lang]}</Button>
        </a>
      </li>
      <li>
        <a href="#projects">
          <Button className='nav-link uppercase transition-all ease-in-out duration-500 font-semibold' variant="link">{dictionaryData.projects[lang]}</Button>
        </a>
      </li>
      <li>
        <a href="#education">
          <Button className='nav-link uppercase transition-all ease-in-out duration-500 font-semibold' variant="link">{dictionaryData.education[lang]}</Button>
        </a>
      </li>
      <li>
        <a href="#get-in-touch">
          <Button className='nav-link uppercase transition-all ease-in-out duration-500 font-semibold' variant="link">{dictionaryData.getInTouch[lang]}</Button>
        </a>
      </li>
    </ul>
  );
};

export default NavbarDesktopOptions