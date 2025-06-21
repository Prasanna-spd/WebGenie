// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const shouldHideNavbar =
  pathname === "/login" ||
  pathname === "/print" ||
  pathname.startsWith("/preview/")||
  pathname.startsWith("/generate"); 

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
    </>
  );
}
