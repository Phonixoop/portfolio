import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Header from "~/app/header";
import Provider from "~/app/provider";

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
      className={`${geist.variable} font-iransans`}
    >
      <body className="bg-m-background">
        <Provider>
          <Header />

          <TRPCReactProvider>{children}</TRPCReactProvider>
          <div className="noise-overlay">
            <div className="noise-overlay-child" />
          </div>
        </Provider>
      </body>
    </html>
  );
}
