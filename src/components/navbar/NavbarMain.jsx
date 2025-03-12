import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="px-4 lg:px-80  w-full flex items-center justify-between ">
      {/* Logo Section */}
      <div className=" cursor-pointer">
        <a href="./">
          <NavbarLogo />
        </a>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex bg-white/15 backdrop-blur-sm px-10 py-3 rounded-xl border border-lightGreen shadow-lg">
        <NavbarLinks direction="row" />
      </div>
      <div className="hidden sm:flex">
        <NavbarBtn />
      </div>

      {/* Mobile Menu Button */}
      <div
        className="sm:hidden p-2 sm:p-4 bg-black items-center justify-center rounded-full border border-lightGreen text-white cursor-pointer hover:bg-gray-800 transition-all duration-500 hover:shadow-cyanShadow"
        onClick={toggleMenu}
      >
        {menuOpen ? <IoCloseSharp size={20} /> : <CiMenuBurger size={20} />}
      </div>

      {/* Mobile Menu Container */}
      <div
        className={`absolute top-20 right-7  bg-white/10 backdrop-blur-md py-2 px-4 rounded-lg  flex-col gap-2 items-center transition-all duration-500  ${
          menuOpen ? "flex sm:hidden" : "hidden"
        }`}
      >
        <NavbarLinks direction="col" />
        <NavbarBtn />
      </div>
    </nav>
  );
};

export default NavbarMain;
