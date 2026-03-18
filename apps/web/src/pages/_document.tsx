import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja" className="dark">
      <Head>
        <meta name="description" content="Experience the next generation of SaaS. Defy limits with weightless efficiency and advanced cloud optimization." />
        <meta name="keywords" content="SaaS, Aerial, Workflow, Next.js, Cloudflare, D1" />
      </Head>
      <body className="antialiased selection:bg-white/10">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
