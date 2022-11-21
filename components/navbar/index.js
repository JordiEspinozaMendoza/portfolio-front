import { TextComponent } from "components/texts";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "pages/_app";
import styled from "styled-components";
import styles from "./styles.module.sass";
import Icon from "components/icon";
const Container = styled.div`
  background-color: ${(props) => props.theme.navbar.background};
  p {
    color: ${(props) => props.theme.navbar.color};
  }
  .navbar__theme__handler__circle{
    background-color: ${(props) => props.theme.navbar.color};
    svg {
      fill: ${(props) => props.theme.navbar.background};
    }
  }
`;
export const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(GlobalContext);
  return (
    <Container className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__left}>
          <TextComponent text="{ Jordi Espinoza }" disableLocales />
        </div>
        <div className={styles.navbar__right}>
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
        </div>
      </div>
    </Container>
  );
};
