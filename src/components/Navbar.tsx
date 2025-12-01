'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "Help", href: "/help" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`h-[70px] px-6 md:px-10 flex items-center justify-between fixed 
        backdrop-blur-md z-50 transition-all duration-300 
        ${
          scrolled
            ? "w-[85%] md:w-[70%] left-1/2 -translate-x-1/2 top-4 rounded-full ring ring-gray-300"
            : "w-full left-0 top-0"
        }`}
      >
        {/* LOGO */}
        <h1 className="font-extrabold text-2xl md:text-3xl">ShopVerse</h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* SEARCH + ICONS (Desktop) */}
        <div className="hidden md:flex gap-5 items-center">
          <div
            className="px-3 bg-gray-200 dark:bg-gray-800 py-2 rounded-full
           flex items-center gap-2"
          >
            <CiSearch size={22} />
            <input
              type="text"
              placeholder='search for "Phones"'
              className="bg-transparent outline-none text-sm"
            />
          </div>

          <div className="relative">
            <CiHeart size={30} />
            <div className="bg-red-700 h-4 w-4 rounded-full absolute -top-1 -right-1 flex items-center justify-center text-white text-[10px]">
              1
            </div>
          </div>

          <div className="relative">
            <FiShoppingBag size={25} />
            <div className="bg-red-700 h-4 w-4 rounded-full absolute -top-1 -right-1 flex items-center justify-center text-white text-[10px]">
              1
            </div>
          </div>
        </div>

        {/* MOBILE ICONS + MENU BUTTON */}
        <div className="flex md:hidden items-center gap-5">
          <CiHeart size={28} />
          <FiShoppingBag size={24} />

          {/* Hamburger menu */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RxCross2 size={28} /> : <RxHamburgerMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden fixed top-[70px] w-full bg-white shadow-lg 
        transition-all duration-300 overflow-hidden
        ${menuOpen ? "h-[200px] opacity-100" : "h-0 opacity-0"}
      `}
      >
        <div className="flex flex-col gap-5 px-8 py-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};