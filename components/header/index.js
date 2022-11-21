/* eslint-disable @next/next/no-img-element */
import { Button } from "components/buttons";
import { TextComponent } from "components/texts";
import { useLanguage } from "hooks";
import React from "react";
import styled from "styled-components";
import en from "./locales/en.json";
import es from "./locales/es.json";
import styles from "./styles.module.sass";
const Container = styled.div`
  background-color: ${(props) => props.theme.header.background};
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.header.color};
  }
`;
export const HeaderComponent = () => {
  const { t } = useLanguage({ en, es });
  return (
    <Container className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <div className={styles.header__left__content}>
            <div className={styles.header__text}>
              <TextComponent
                type="p"
                locales={t.subtitle}
                modifiers={["secondaryColor"]}
              />
              <TextComponent type="h1" locales={t.title} />
            </div>
            <div className={styles.header__buttons}>
              <Button type="secondary" locales={t.button_1} />
              <Button type="tertiary" locales={t.button_2} />
            </div>
          </div>
        </div>
        <div className={styles.header__right}>
          {/* mobile devices */}
          <div className={styles.header__avatar}>
            <img
              src="https://res.cloudinary.com/jordiespinoza/image/upload/v1668936837/portfolio/photo_1_msyjya.jpg"
              alt="Jordi Espinoza"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
