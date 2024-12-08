
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';

const MeInformation = () => {
  
  return (
    <section  className="relative transition-all ease-in-out text-gray-800  w-full max-w-7xl h-full min-h-[500px] lg:min-h-[700px] flex flex-col items-start justify-center gap-6 p-4 lg:p-0 ">
      <h1 className="text-2xl dark:text-white lg:text-5xl font-extrabold tracking-tight leading-tight">
        Hi! I'm <span className="text-blue-500 dark:text-yellow-500">Luis Silva Balladares</span>
      </h1>
      <TypeAnimation
        className="text-lg dark:text-white lg:text-2xl font-medium"
        sequence={[
          "I'm a Web Developer 🚀",
          1500,
          "I'm a Bachelor of Science in Computer Science 🎓",
          1500,
        ]}
        wrapper="span"
        speed={60}
        deletionSpeed={20}
        repeat={Infinity}
      />
      <p className="text-sm dark:text-white mt-4 leading-relaxed max-w-2xl">
        With a passion for creating intuitive and scalable web applications, I
        specialize in crafting solutions that make an impact. Let's build
        something amazing together!
      </p>
      <section className="flex flex-row gap-2">
        <Button>Linkedin</Button>
        <Button>Github</Button>
        <Button>Cv</Button>
      </section>
    </section>
  );
}

export default MeInformation