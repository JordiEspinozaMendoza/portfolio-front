// Styled components
import styled from "styled-components";
// Modifiers
import { applyStyleModifiers } from "styled-components-modifiers";
// utils
import { formatLanguageText } from "components/texts";
import { useLanguage } from "hooks";
import { primaryFont, typeScale } from "utils/typo";
import { BUTTON_MODIFIERS } from "./modifiers";
// icons
// Loader icon
import { BiLoaderAlt } from "react-icons/bi";
// Error icon
import { BiError } from "react-icons/bi";

// styles
import styles from "./styles.module.sass";
// PropTypes
import PropTypes from "prop-types";
const ButtonBase = styled.button`
  // Set font
  font-family: ${primaryFont};
`;
const PrimaryButton = styled(ButtonBase)`
  // Change background color between themes
  background-color: ${(props) => props.theme.buttons.primary.background};
  // Change text color between themes
  color: ${(props) => props.theme.buttons.primary.color};
  i,
  svg {
    color: ${(props) => props.theme.buttons.primary.color};
  }
  // Add border
  border: 2px solid ${(props) => props.theme.buttons.primary.background};
  // Hover
  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.primary.hover.background};
    color: ${(props) => props.theme.buttons.primary.hover.color};
  }
  // Disabled
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.buttons.primary.background};
      color: ${(props) => props.theme.buttons.primary.color};
    }
  }
  // Apply modifiers
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
const PrimaryButtonAlt = styled(PrimaryButton)`
  // Hover
  &:hover {
    color: ${(props) => props.theme.buttons.primary.hover.alt};
  }
`;
const SecondaryButton = styled(ButtonBase)`
  // Change background color between themes
  background-color: ${(props) => props.theme.buttons.secondary.background};
  // Change text color between themes
  color: ${(props) => props.theme.buttons.secondary.color};
  // Add border
  border: 2px solid transparent;
  i,
  svg {
    color: ${(props) => props.theme.buttons.secondary.color};
  }
  // Hover
  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.secondary.hover.background};
    color: ${(props) => props.theme.buttons.secondary.hover.color};
    i,
    svg {
      color: ${(props) => props.theme.buttons.secondary.hover.color};
    }
  }
  // Disabled
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.buttons.secondary.background};
      color: ${(props) => props.theme.buttons.secondary.color};
    }
  }
  // Apply modifiers
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
const TertiaryButton = styled(ButtonBase)`
  // Change background color between themes
  background-color: ${(props) => props.theme.buttons.tertiary.background};
  // Change text color between themes
  color: ${(props) => props.theme.buttons.tertiary.color};
  text-shadow: 0 0 1px "rgba(0, 0, 0, 0.5)";
  // Hover
  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.tertiary.hover.background};
    color: ${(props) => props.theme.buttons.tertiary.hover.color};
  }
  // Disabled
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.buttons.tertiary.background};
      color: ${(props) => props.theme.buttons.tertiary.color};
    }
  }
  // apply modifiers
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
const FooterButton = styled(ButtonBase)`
  // Change background color between themes
  background: ${(props) => props.theme.buttons.secondary.background};
  color: ${(props) => props.theme.buttons.secondary.color};
  // Add border
  border: none;
  // Border radius
  border-radius: 0;
  // Font size
  font-size: ${typeScale.helperText};
`;

export const Button = ({
  type,
  disabled,
  onClick,
  modifiers,
  text,
  loading,
  error,
  locales,
  ...props
}) => {
  const { language } = useLanguage({ en: {}, es: {} });
  // Get button type
  const getButtonType = () => {
    switch (type) {
      case "primary":
        return PrimaryButton;
      case "primary-alt":
        return PrimaryButtonAlt;
      case "secondary":
        return SecondaryButton;
      case "tertiary":
        return TertiaryButton;
      case "footer":
        return FooterButton;
      default:
        return PrimaryButton;
    }
  };
  // Set button type
  const ButtonType = getButtonType();
  // Get button text
  const content = locales
    ? locales
    : formatLanguageText({ language, en: text.en, es: text.es });
  // Render
  return (
    <ButtonType
      disabled={disabled}
      onClick={onClick}
      modifiers={modifiers}
      {...props}
      className={styles.button}
    >
      {loading ? (
        <>
          <BiLoaderAlt className={styles.loader} />
          {language == "en" ? "Loading" : "Cargando"}
        </>
      ) : error && error.isError ? (
        <>
          <BiError className={styles.error} />{" "}
          {formatLanguageText({ language, en: error.en, es: error.es })}
        </>
      ) : (
        content
      )}
    </ButtonType>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "primary-alt", "secondary", "tertiary"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  modifiers: PropTypes.array,
  text: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  locales: PropTypes.string,
};
Button.defaultProps = {
  type: "primary",
  disabled: false,
  onClick: () => {},
  modifiers: [],
  text: { en: "Button", es: "Botón" },
  loading: false,
  error: { isError: false, en: "", es: "" },
  locales: "",
};
