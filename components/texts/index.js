import { useLanguage } from "hooks";
import PropTypes from "prop-types";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { HEADERS_MODIFIERS } from "./modifiers";
export const formatLanguageText = ({ language, en, es }) => {
  if (language == "es") {
    return es;
  }
  return en;
};
export const TextComponent = ({
  text,
  type = "p",
  modifiers = [],
  locales,
  parse = false,
  disableLocales = false,
  ...props
}) => {
  const { language } = useLanguage({ es: {}, en: {} });
  const content = disableLocales
    ? text
    : locales
    ? locales
    : formatLanguageText({ language, en: text.en, es: text.es });
  const Container = styled(type)`
    color: ${(props) => props.theme.textColor};
    ${applyStyleModifiers(HEADERS_MODIFIERS)}
  `;
  if (parse) {
    return (
      <Container
        {...props}
        modifiers={[...modifiers]}
        dangerouslySetInnerHTML={{ __html: disableLocales ? text : content }}
      />
    );
  }
  return (
    <Container modifiers={[...modifiers]} {...props}>
      {disableLocales ? text : content}
    </Container>
  );
};
TextComponent.defaultProps = {
  type: "p",
  modifiers: [],
  locales: null,
  parse: false,
  disableLocales: false,
  text: {
    en: "",
    es: "",
  }
};
TextComponent.propTypes = {
  text: PropTypes.object.isRequired,
  type: PropTypes.string,
  modifiers: PropTypes.array,
  locales: PropTypes.string,
  parse: PropTypes.bool,
  disableLocales: PropTypes.bool,
};
