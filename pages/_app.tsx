import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { jsx } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
