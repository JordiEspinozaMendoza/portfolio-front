import React from "react";
import styles from "./styles.module.sass";
import styled from "styled-components";
import { TextComponent } from "components/texts";
import { useLanguage } from "hooks";
const Container = styled.div`
  background-color: ${(props) => props.theme.card.background};
`;
export const ExperienceCard = ({ data }) => {
  const { language } = useLanguage({ es: {}, en: {} });
  const { title, description, company, time_data, company_url } = data;
  const handleGetTime = () => {
    const { start, end } = time_data;
    const { year: startYear, month: startMonth } = start;
    const { year: endYear, month: endMonth } = end;
    // return with language
    const startDate = `${new Date(startYear, startMonth).toLocaleString(
      language,
      { month: "long" }
    )} ${startYear}`;
    const endDate = `${new Date(endYear, endMonth).toLocaleString(language, {
      month: "long",
    })} ${endYear}`;
    return `${startDate} - ${endDate}`;
  };
  return (
    <Container className={styles.experience__card}>
      <div className={styles.experience__card__title}>
        <TextComponent
          text={title}
          type="h3"
          modifiers={["tertiaryColor"]}
          disableLocales
        />
        <TextComponent
          text={company}
          type="p"
          disableLocales
          className={styles.experience__card__title__company}
          onClick={() => window.open(company_url, "_blank")}
        />
        <TextComponent
          text={handleGetTime()}
          type="p"
          disableLocales
          className={styles.experience__card__title__time}
        />
      </div>
      <div className={styles.experience__card__description}>
        <TextComponent text={description} type="p" disableLocales />
      </div>
    </Container>
  );
};
