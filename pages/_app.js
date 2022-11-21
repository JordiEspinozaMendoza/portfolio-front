import { createContext, useEffect, useState } from "react";
import { Footer } from "components/footer";
import { Navbar } from "components/navbar";
import { useRouter } from "next/router";
import styled, { ThemeProvider } from "styled-components";
import { GeneralSEO } from "utils/seo";
import { lightTheme, mainTheme } from "utils/themes";
import "../styles/globals.css";
export const GlobalContext = createContext({
  language: "en",
});
const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
`;
function MyApp({ Component, pageProps }) {
  // router is used to get the current language
  const router = useRouter();
  // get the current language from the router
  const { locale } = router;
  // set the language in the context
  const language = locale === "es" ? "es" : "en";
  const themes = {
    main: mainTheme,
    light: lightTheme,
  };
  const [theme, setTheme] = useState("main");
  const handleChangeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  useEffect(() => {
    const themeFromStorage = localStorage.getItem("theme");
    if (themeFromStorage) {
      setTheme(themeFromStorage);
    } else {
      setTheme("main");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlobalContext.Provider value={{ language, theme, handleChangeTheme }}>
      <ThemeProvider theme={themes[theme] || themes["main"]}>
        <GeneralSEO />
        <Navbar />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
