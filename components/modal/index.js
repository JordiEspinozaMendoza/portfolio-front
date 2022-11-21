import { Button } from "components/buttons";
import Icon from "components/icon";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styled from "styled-components";
import styles from "./styles.module.sass";
const Container = styled.div`
  .modal__content {
    background: ${(props) => props.theme.modal.background};
    p,
    h3,
    h4,
    h5 {
      color: ${(props) => props.theme.modal.color};
    }
  }
`;
export const Modal = (props) => {
  const {
    title,
    show,
    onClose,
    children,
    size = "small",
    removeCloseButton,
  } = props;
  useEffect(() => {
    let body = document.querySelector("body");
    if (show) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [show]);
  return (
    <Container className={styles.modal__container} hidden={!show} size={size}>
      <div className={`${styles.modal__content} modal__content`}>
        <div className={styles.modal__header}>
          <h4>{title ? title : "Modal"}</h4>
          <div className={styles.modal__close} onClick={onClose}>
            <Icon nameIcon="FaTimes" />
          </div>
        </div>
        <div className={styles.modal__body} id="modal__body">
          {children}
        </div>
        <div className={styles.modal__footer}>
          {!removeCloseButton && (
            <Button
              type="tertiary"
              modifiers={["small", "autoWidth"]}
              onClick={onClose}
              text={{
                en: "Close",
                es: "Cerrar",
              }}
            />
          )}
        </div>
      </div>
    </Container>
  );
};
Modal.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.string,
};
Modal.defaultProps = {
  title: "Modal",
  show: false,
  onClose: () => {},
  children: null,
  size: "small",
};
