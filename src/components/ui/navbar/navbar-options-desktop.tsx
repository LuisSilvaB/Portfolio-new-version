import type { Lang } from '@/types/lang.type';
import { Button } from '../button';
import dictionary from '@/assets/dictionary.json';

type NavbarDesktopOptionsProps = {
  lang: Lang;
}

const NavbarDesktopOptions = ({ lang }: NavbarDesktopOptionsProps) => {
  const dictionaryData = dictionary.navbar;
  return (
    <ul className="hidden lg:flex items-center">
      <li>
        <Button variant="link">{dictionaryData.aboutMe[lang]}</Button>
      </li>
      <li>
        <Button variant="link">{dictionaryData.workExperience[lang]}</Button>
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
  );
};

export default NavbarDesktopOptions