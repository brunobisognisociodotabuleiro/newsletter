import React from "react";
import Logo from "./logo";
import Link from "next/link"; 

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-between h-[80px] bg-white text-black">
          <div>
            <link href={"/"}>
              <Logo />
            </link>
          </div>
    </header>
    
  )
}