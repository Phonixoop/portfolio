import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import Header from "~/app/header";
import Provider from "~/app/provider";
import Preloader from "~/app/components/me/preloader";
import UniversalPreloader from "~/app/components/me/preloader/universal";

export const metadata: Metadata = {
  title: "Ali H.",
  description: "My Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geist.variable} bg-m-background font-iransans relative`}
    >
      <body className="bg-m-background hide-scrollbar-firefox relative">
        <Provider>
          {/* <Header /> */}

          {children}
          <div className="noise-overlay">
            <div className="noise-overlay-child" />
          </div>
        </Provider>
      </body>
    </html>
  );
}
