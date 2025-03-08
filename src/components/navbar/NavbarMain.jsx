import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";

const NavbarMain = () => {
  return (
    <nav className="max-w-[1330px] mx-auto px-4 w-full fixed left-1/2 -translate-x-1/2 top-4 z-20 flex items-center gap-4">
      {/* Logo Section */}
      <div className="flex items-center justify-center  px-4 py-2  ">
        <NavbarLogo />
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-lightBlack items-center px-6 py-3 rounded-full border border-lightGreen shadow-lg">
        <NavbarLinks />
        <NavbarBtn />
      </div>
    </nav>
  );
};

export default NavbarMain;
