/* eslint-disable @next/next/no-img-element */
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { TextComponent } from "components/texts";
import styles from "./styles.module.sass";
const Container = styled.div`
  background-color: ${(props) =>
    !props.light
      ? props.theme[props.background]
      : props.theme.light.background};
  h1,
  h2,
  p,
  span,
  li {
    color: ${(props) =>
      !props.light ? props.theme.textColorInverted : props.theme.textColor};
  }
`;
export const Section = ({
  title,
  description,
  image,
  even,
  locales,
  children,
  background = "secondary",
  light = false,
}) => {
  return (
    <Container
      className={`${styles.section__component} ${
        even ? styles.section__component__even : styles.section__component__odd
      }`}
      background={background}
      light={light}
    >
      <section className={styles.info__section}>
        {/* info title */}
        {locales ? (
          <TextComponent type={"h2"} locales={title} parse={true} />
        ) : (
          <TextComponent type={"h2"} text={{ ...title }} parse={true} />
        )}
        {/* info section */}
        {!children ? (
          <>
            {/* info description */}
            {locales ? (
              <TextComponent type={"p"} locales={description} parse={true} />
            ) : (
              <TextComponent
                type={"p"}
                text={{ ...description }}
                locales={locales}
                parse={true}
              />
            )}
          </>
        ) : (
          children
        )}
      </section>

      {/* image section */}
      <div className={styles.image__section}>
        {/* image */}
        <img src={image || "https://via.placeholder.com/300"} alt={title} />
      </div>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  image: PropTypes.string,
  even: PropTypes.bool,
};

Section.defaultProps = {
  title: {
    en: "Title",
    es: "Título",
  },
  description: {
    en: "Description",
    es: "Descripción",
  },
  image: "https://via.placeholder.com/300",
  even: false,
};
