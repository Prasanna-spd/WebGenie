"use client"
import { useState } from "react";
import Navbar from "./Navbar";

export default function HamburgerMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      
      <button
        onClick={() => setMenuOpen(true)}
        className={`fixed top-6 right-6 z-50 text-white text-3xl md:hidden ${menuOpen ? "hidden" :""}`}
      >
        &#9776;
      </button>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      
    </>
  );
}
