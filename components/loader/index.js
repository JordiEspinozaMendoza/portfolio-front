import Icon from "components/icon";
import React from "react";
import styled from "styled-components";
import styles from "./styles.module.sass";
const Container = styled.div`
  svg {
    fill: ${(props) => props.theme.loader.background};
  }
`;
export const Loader = () => {
  return (
    <Container className={styles.loader}>
      <Icon nameIcon="BiLoaderAlt" />
    </Container>
  );
};
