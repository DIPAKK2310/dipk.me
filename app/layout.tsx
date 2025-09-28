
import Navbar from "@/components/common/Navbar";
import { generateMetadata as getMetadata } from "@/config/Meta";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/common/ThemeProviders";
export const metadata = getMetadata('/')
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>

      <html lang="en" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider
              attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                >
              <ReactLenis>
                  <Navbar/>
                    {children}
              </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
