
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { useState } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const shouldHideNavbar =
  pathname === "/login" ||
  pathname === "/print" ||
  pathname.startsWith("/preview/")||
  pathname.startsWith("/generate"); 

  return (
    <>
      {!shouldHideNavbar && <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />}
      {children}
    </>
  );
}
