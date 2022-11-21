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
export const ProjectCard = ({ data, onClick }) => {
  const { name, name_en, image_url, tags } = data;
  return (
    <Container className={styles.project__card}>
      <div className={styles.project__card__content}>
        <div className={styles.project__card__image}>
          <img src={image_url} alt={name_en} onClick={() => onClick(data)} />
        </div>
        <div className={styles.project__card__text}>
          <TextComponent
            type="h3"
            text={{
              en: name_en,
              es: name,
            }}
          />
          {tags?.data?.length > 0 && (
            <div className={styles.project__card__text__tags}>
              <TextComponent type="p" text="Tags:" disableLocales />{" "}
              <div className={styles.project__card__text__tags__list}>
                {tags.data.map((tag, index) => (
                  <TextComponent
                    type="p"
                    text={`${tag}${index !== tags.data.length - 1 ? "," : " "}`}
                    disableLocales
                    key={tag}
                    className={styles.project__card__text__tags__tag}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
