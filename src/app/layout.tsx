import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import Provider from "~/app/provider";

import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Ali H.",
  description: "My Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/iransans/IRANSansWeb_UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansWeb.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansWeb_Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
});
const kabel = localFont({
  src: [
    {
      path: "../../public/fonts/kabel/kabel.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-kabel",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`bg-m-background font-iransans relative`}
    >
      <body className="bg-m-background relative">
        <Provider>
          {/* <Header /> */}

          {children}
          <div className="noise-overlay">
            <div className="noise-overlay-child" />
          </div>
          {/* <StickyCursor /> */}
        </Provider>
      </body>
    </html>
  );
}
