/* eslint-disable @next/next/no-img-element */
import { TextComponent } from "components/texts";
import React from "react";
import styles from "./styles.module.sass";
import styled from "styled-components";
const Container = styled.div`
  p,
  h3 {
    color: ${(props) => props.theme.textColorInverted};
  }
`;
export const ProjectCard = ({ data }) => {
  const { name, name_en, description, description_en, image_url, urls } = data;
  return (
    <Container className={styles.project__card}>
      <div className={styles.project__card__content}>
        <div className={styles.project__card__image}>
          <img src={image_url} alt={name_en} />
        </div>
        <div className={styles.project__card__text}>
          <TextComponent
            type="h3"
            text={{
              en: name_en,
              es: name,
            }}
          />
        </div>
      </div>
    </Container>
  );
};
