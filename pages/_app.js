import { Footer } from "components/footer";
import { Navbar } from "components/navbar";
import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Jordi Espinoza's portfolio"
        description="Software Engineer with over 3 years of experience in software development, focusing on full stack development . Member of GitHub Campus Experts and founder of Tribal Devs, a community organization dedicated to help software engineer students."
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
