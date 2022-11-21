import styled from "styled-components";

import { TextComponent } from "../texts";
import styles from "./styles.module.sass";
import Icon from "components/icon";
import { socialLinks } from "utils/seo/settings";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.footer.background};
  svg,
  p {
    color: ${(props) => props.theme.footer.color};
  }
`;

export const Footer = () => {
  return (
    <FooterContainer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.reach__out__me}>
          <TextComponent text={{ en: "Reach out to me", es: "Contactame" }} />
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
        <TextComponent
          text={{
            en: `Made with ❤️ by Jordi Espinoza Mendoza © ${new Date().getFullYear()}`,
            es: `Hecho con ❤️ por Jordi Espinoza Mendoza © ${new Date().getFullYear()}`,
          }}
        />
      </div>
    </FooterContainer>
  );
};
