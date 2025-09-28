import { navbarConfig } from "@/config/Navbar";
import { Link } from "next-view-transitions"
import Image from "next/image";
import Container from "./Container";
import React from "react";
import { ThemeToggleButton } from "./ThemeSwitch";


export default function Navbar() {
  return(
  <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6">
            <div className="flex items-baseline gap-5">
                <Link href="/">
                  <Image
                    src={navbarConfig.logo.src}
                    alt={navbarConfig.logo.alt}
                    width={navbarConfig.logo.width}
                    height={navbarConfig.logo.height}
                    className="h-25 w-28 rounded-full   transition-all duration-300 ease-in-out hover:scale-90 dark:bg-white-300"
                  />
                </Link>
                </div>
                <div className="flex items-center justify-center gap-10">
                  {navbarConfig.navItems.map((item)=>(
                    <Link
                    className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                    key={item.label}
                    href={item.href}
                    >
                    {item.label}
                    </Link>
                  ))

                  }
                </div>
            <div className="flex items-center gap-10">
              <ThemeToggleButton  variant="circle" start="top-right" blur />
            </div>
        {/* Here the theme button goes */}
        </div>
  </Container>
  );
}