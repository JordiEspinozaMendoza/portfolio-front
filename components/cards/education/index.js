import React from "react";
import styles from "./styles.module.sass";
import styled from "styled-components";
import { TextComponent } from "components/texts";
import { useLanguage } from "hooks";
const Container = styled.div`
  background-color: ${(props) => props.theme.card.background};
  border: ${(props) => props.theme.card.border};
`;
export const EducationCard = ({ data }) => {
  const { language } = useLanguage({ es: {}, en: {} });
  const { title, description, time_data, item_url, present } = data;
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
    if (present) {
      let text = language === "es" ? "Actualidad" : "Present";
      return `${startDate} - ${text}`;
    }
    return `${startDate} - ${endDate}`;
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
        {item_url && (
          <TextComponent
            text={{
              en: "View",
              es: "Ver",
            }}
            type="p"
            className={styles.education__card__title__link}
            onClick={() => window.open(item_url, "_blank")}
          />
        )}
      </div>
      <div className={styles.education__card__description}>
        <TextComponent text={description} type="p" disableLocales />
      </div>
    </Container>
  );
};
