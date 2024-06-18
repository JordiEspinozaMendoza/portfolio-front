import Link from "next/link";
import styles from "./styles.module.sass";
import Icon from "components/icon";
import { socialLinks } from "../../constants";

export const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__left}>
          <Link href="/">Jordi Espinoza</Link>
        </div>
        <div className={styles.navbar__right}>
          <div className={styles.navbar__sections}>
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#education">Education</Link>
          </div>
          <div className={styles.navbar__links}>
            <Link href={socialLinks.github}>
              <Icon nameIcon="AiFillGithub" />
            </Link>
            <Link href={socialLinks.linkedin}>
              <Icon nameIcon="AiFillLinkedin" />
            </Link>

            <Link href={socialLinks.twitter}>
              <Icon nameIcon="AiFillTwitterCircle" />
            </Link>
          </div>
        </div>
      </div>
    </navbar>
  );
};
