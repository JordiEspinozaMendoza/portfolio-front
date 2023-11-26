import Link from "next/link";
import styles from "./styles.module.sass";
import Icon from "components/icon";
import { useRouter } from "next/router";
import { socialLinks } from "utils/seo/settings";

export const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__left}>
          <Link href="/">Jordi Espinoza</Link>
        </div>
        <div className={styles.navbar__right}>
          <div className={styles.navbar__links}>
            <Icon
              nameIcon="AiFillGithub"
              onClick={() => window.open(socialLinks.github, "_blank")}
            />
            <Icon
              nameIcon="AiFillLinkedin"
              onClick={() => window.open(socialLinks.linkedin, "_blank")}
            />
            <Icon
              nameIcon="AiFillTwitterCircle"
              onClick={() => window.open(socialLinks.twitter, "_blank")}
            />
          </div>
        </div>
      </div>
    </navbar>
  );
};
