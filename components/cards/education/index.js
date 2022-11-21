import React from "react";
import styles from "./styles.module.sass";
import styled from "styled-components";
import { TextComponent } from "components/texts";
import { useLanguage } from "hooks";
const Container = styled.div`
  background-color: ${(props) => props.theme.card.background};
`;
export const EducationCard = ({ data }) => {
  const { language } = useLanguage({ es: {}, en: {} });
  const { title, description, time_data } = data;
  const handleGetTime = () => {
    const { date } = time_data;
    const { year, month } = date;

    // return with language
    const startDate = `${new Date(year, month).toLocaleString(language, {
      month: "long",
    })} ${year}`;
    return `${startDate}`;
  };
  return (
    <Container className={styles.education__card}>
      <div className={styles.education__card__title}>
        <TextComponent
          text={title}
          type="h3"
          modifiers={["tertiaryColor"]}
          disableLocales
        />
        <TextComponent
          text={handleGetTime()}
          type="p"
          disableLocales
          className={styles.education__card__title__time}
        />
      </div>
      <div className={styles.education__card__description}>
        <TextComponent text={description} type="p" disableLocales />
      </div>
    </Container>
  );
};
