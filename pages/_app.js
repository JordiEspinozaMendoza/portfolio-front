import { Footer } from "components/footer";
import { Navbar } from "components/navbar";
import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Jordi Espinoza"
        description="Jordi Espinoza's portfolio"
        openGraph={{
          images: [
            {
              url: "https://portfolio-jordi.s3.amazonaws.com/hackmty.jpeg",
              width: 800,
              height: 600,
              alt: "Jordi Espinoza",
            },
          ],
        }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
