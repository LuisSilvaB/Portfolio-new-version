import { Button } from '../button';


const NavbarDesktopOptions = () => {
  return (
    <ul className="hidden lg:flex items-center">
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
  );
}

export default NavbarDesktopOptions