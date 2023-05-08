/* eslint-disable @next/next/no-img-element */
import { Button } from "components/buttons";
import { formatLanguageText, TextComponent } from "components/texts";
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
export const HeaderComponent = ({ data, error }) => {
  const { attributes } = data.data || {};
  const { t, language } = useLanguage({ en, es });
  return (
    <Container className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <div className={styles.header__left__content}>
            <div className={styles.header__text}>
              <TextComponent
                type="p"
                locales={
                  attributes &&
                  attributes?.header_subtitle &&
                  attributes?.header_subtitle_en &&
                  !error
                    ? formatLanguageText({
                        language,
                        en: attributes?.header_subtitle_en,
                        es: attributes?.header_subtitle,
                      })
                    : t.subtitle
                }
                modifiers={["secondaryColor"]}
              />
              <TextComponent
                type="h1"
                locales={
                  attributes && attributes?.name && !error
                    ? attributes?.name
                    : t.title
                }
              />
            </div>
            <div className={styles.header__buttons}>
              {attributes && attributes?.cv_url && !error && (
                <Button
                  type="secondary"
                  locales={t.button_1}
                  onClick={() => window.open(attributes?.cv_url, "_blank")}
                />
              )}
              {attributes && attributes?.email_contact && !error && (
                <Button
                  type="tertiary"
                  locales={t.button_2}
                  onClick={() =>
                    window.open(
                      `mailto:${attributes?.email_contact}?subject=Hello%20Jordi%20Espinoza`,
                      "_blank"
                    )
                  }
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.header__right}>
          {/* mobile devices */}
          <div className={styles.header__avatar}>
            <img
              src="https://portfolio-jordi.s3.amazonaws.com/_DSC6537.JPG"
              alt="Jordi Espinoza"
              className={styles.header__avatar__image}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
