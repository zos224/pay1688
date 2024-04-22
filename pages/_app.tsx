import type { AppProps } from "next/app";
import React from "react";
import ContextProvider from "../app/context";
import "../styles/globals.css";
import "../styles/styles.css";
import { middleware } from "../app/middleware";
import NextTopLoader from "nextjs-toploader";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layouts/footer"), {
  ssr: false,
  loading: () => <></>,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ContextProvider>
        <NextTopLoader />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
    </React.Fragment>
  );
}

export default middleware(MyApp);
