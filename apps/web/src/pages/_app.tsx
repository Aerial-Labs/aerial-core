import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aerial | Elevate Your Workflow</title>
      </Head>
      <main className={`${inter.variable} font-sans min-h-screen`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
