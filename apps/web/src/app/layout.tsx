import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aerial | Elevate Your Workflow",
  description: "Experience the next generation of SaaS. Defy limits with weightless efficiency and advanced cloud optimization.",
  keywords: ["SaaS", "Aerial", "Workflow", "Next.js", "Cloudflare", "D1"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-white/10`}
      >
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        {children}
      </body>
    </html>
  );
}
