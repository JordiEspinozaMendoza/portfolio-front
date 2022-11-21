import { useContext } from "react";
// import global context from _app.js
import { GlobalContext } from "pages/_app";
export const useLanguage = ({ es = {}, en = {} }) => {
  // get the language from the context
  const { language } = useContext(GlobalContext);
  // return the correct language
  const t = language === "es" ? es : en;
  return {
    t,
    language,
  };
};
