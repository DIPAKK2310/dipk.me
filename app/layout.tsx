import type { Metadata } from "next";

import "./globals.css";
import ReactLenis from "lenis/react";
import Navbar from "@/components/common/Navbar";
import { generateMetadata as getMetadata } from "@/config/Meta";

export const metadata = getMetadata('/')
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        
      >
        <ReactLenis>

        <Navbar/>
        {children}
        </ReactLenis>
      </body>
    </html>
  );
}
