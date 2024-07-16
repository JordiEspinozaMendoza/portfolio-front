import Link from "next/link";
import Icon from "components/icon";
import { socialLinks } from "../../constants";

export const Navbar = () => {
  return (
    <nav className="block sticky top-0 z-100 bg-[#001d3d] p-2.5">
      <div className="flex justify-between items-center">
        <div className="hover:cursor-pointer">
          <Link href="/">Jordi Espinoza</Link>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-4 text-sm sm:text-xs md:text-sm">
            <Link href="/#projects">Projects</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#education">Education</Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link href={socialLinks.github} className="text-xl">
              <Icon nameIcon="AiFillGithub" className="hover:cursor-pointer" />
            </Link>
            <Link href={socialLinks.linkedin} className="text-xl">
              <Icon
                nameIcon="AiFillLinkedin"
                className="hover:cursor-pointer"
              />
            </Link>
            <Link href={socialLinks.twitter} className="text-xl">
              <Icon
                nameIcon="AiFillTwitterCircle"
                className="hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
