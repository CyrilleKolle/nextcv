import { AnimatePresence } from "framer-motion";
import router from "next/router";
import "tailwindcss/tailwind.css";
import { GlobalStyles } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
