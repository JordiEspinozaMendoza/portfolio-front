import { socialLinks } from "constants";
import styles from "./styles.module.sass";
import Icon from "components/icon";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.reach__out__me}>
          <p>Reach out to me</p>
          <div className={styles.social__icons}>
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
            <Icon
              nameIcon="AiOutlineMail"
              onClick={() =>
                window.open(
                  `mailto:${socialLinks.email}?subject=Hello%20Jordi%20Espinoza`,
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <p>
          Made with ❤️ by Jordi Espinoza Mendoza © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
