import { TextComponent } from "components/texts";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import styled from "styled-components";
import styles from "./styles.module.sass";
import Icon from "components/icon";
import { useRouter } from "next/router";
import { socialLinks } from "utils/seo/settings";
const Container = styled.div`
  background-color: ${(props) => props.theme.navbar.background};
  border: ${(props) => props.theme.navbar.border};
  p,
  select,
  option,
  a, svg {
    color: ${(props) => props.theme.navbar.color};
  }
  .navbar__theme__handler__circle {
    background-color: ${(props) => props.theme.navbar.color};
    svg {
      fill: ${(props) => props.theme.navbar.background};
    }
  }
`;
const languages = [
  {
    label: "en",
    value: "en",
  },
  {
    label: "es",
    value: "es",
  },
];
export const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(GlobalContext);
  const router = useRouter();
  const { locale } = router;
  const handleChangeLanguage = (value) => {
    router.push(router.pathname, router.pathname, { locale: value });
  };
  return (
    <Container className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__left}>
          <TextComponent
            text="{ Jordi Espinoza }"
            disableLocales
            onClick={() => router.push("/")}
          />
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
          <div className={styles.navbar__theme__handler}>
            <div
              className={`${styles.navbar__theme__handler__circle} navbar__theme__handler__circle`}
              onClick={() => {
                if (theme === "light") {
                  handleChangeTheme("main");
                } else {
                  handleChangeTheme("light");
                }
              }}
            >
              <Icon nameIcon={`${theme === "light" ? "BsMoon" : "BsSun"}`} />
            </div>
          </div>
          {/* language handler */}
          <div className={styles.navbar__language__handler}>
            <select
              value={locale}
              onChange={(e) => handleChangeLanguage(e.target.value)}
            >
              {languages.map((language) => (
                <option value={language.value}>{language.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Container>
  );
};
