import { navbarConfig } from "@/config/Navbar";
import { Link } from "next-view-transitions"
import Image from "next/image";
import Container from "./container";
import React from "react";


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
                    className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
                  />
                </Link>
                <div className="flex items-center justify-center gap-4">
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
            </div>
        {/* Here the theme button goes */}
        </div>
  </Container>
  );
}