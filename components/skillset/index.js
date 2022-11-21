import Icon from "components/icon";
import React from "react";
import styles from "./styles.module.sass";
import styled from "styled-components";
const Container = styled.div`
  p,
  svg,
  a {
    color: ${(props) => props.theme.textColorInverted};
  }
`;
export const SkillSet = ({ data }) => {
  return (
    <Container className={styles.skillset}>
      {data.map((item, index) => (
        <div className={styles.skill__item} key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Icon nameIcon={item.icon} />
          </a>
          <p>{item.name}</p>
        </div>
      ))}
    </Container>
  );
};
