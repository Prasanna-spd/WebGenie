import React from "react";
import Link from "next/link";

const Navbar = () => {
  //   const user = false;
  return (
    // <div className="h-12 text-blue-600 p-4 flex items-center justify-between   uppercase md:h-24 lg:px-20 xl:px-40">
    //   {/* LEFT LINKS */}
    //   <div className="hidden md:flex gap-4 flex-1">
    //     <Link className="p-4 border border-amber-50 border-solid" href="/">Homepage</Link>
    //     <Link className="p-4 border border-amber-50 border-solid" href="/menu">Menu</Link>
    //     <Link className="p-4 border border-amber-50 border-solid" href="/">Contact</Link>
    //   </div>
    //   {/* LOGO */}
    //   <div className="text-xl md:font-bold flex-1 md:text-center">
    //     <Link href="/">Dominoza</Link>
    //   </div>
    //   {/* MOBILE MENU */}
    //   <div className="md:hidden">
    //     {/* <Menu /> */}
    //   </div>
    //   {/* RIGHT LINKS */}
    //   <div className="hidden md:flex gap-4 items-center justify-end flex-1">
    //     <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
    //       {/* <Image src="/phone.png" alt="" width={20} height={20} /> */}
    //       <span>123 456 78</span>
    //     </div>
    //     {/* <UserLinks/> */}
    //     {/* <CartIcon /> */}
    //   </div>
    // </div>
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-2 rounded-full bg-black/60 backdrop-blur-md border border-zinc-700 text-white shadow-lg">
        <Link className="hover:text-gray-300 transition-colors" href="#features" scroll={true}>
          Features
        </Link>
        <Link className="hover:text-gray-300 transition-colors" href="/templateStore">
          Store
        </Link>
        <Link className="hover:text-gray-300 transition-colors" href="/">
          Solutions
        </Link>
        <Link className="hover:text-gray-300 transition-colors" href="#contact-us">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
