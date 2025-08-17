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
      path: "../../public/fonts/iransans/IRANSansXFaNum-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansXFaNum-UltraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansXFaNum-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansXFaNum-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansXFaNum-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansXFaNum-DemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansXFaNum-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansXFaNum-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/iransans/IRANSansXFaNum-Black.woff",
      weight: "900",
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
