"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useState } from "react";
import Close from "@/assets/close.svg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />

            <div className="md:hidden">
              {menuOpen ? (
                ""
              ) : (
                <MenuIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleOnClick}
                />
              )}
            </div>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-[60%] bg-white shadow-lg z-30 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6">
          {menuOpen ? (
            <Close className="h-5 w-5 cursor-pointer" onClick={handleOnClick} />
          ) : (
            ""
          )}
          <div className="flex flex-col justify-center text-center">
            <a href="#">About</a>
            <div className="w-full bg-black h-[1px] my-5" />
            <a href="#">Features</a>
            <div className="w-full bg-black h-[1px] my-5" />
            <a href="#">Customers</a>
            <div className="w-full bg-black h-[1px] my-5" />
            <a href="#">Updates</a>
            <div className="w-full bg-black h-[1px] my-5" />
            <a href="#">Help</a>
            <div className="w-full bg-black h-[1px] my-5" />
          </div>

          <button className="bg-black text-white mt-4 px-4 py-2 rounded-lg font-medium">
            Get for free
          </button>
          <div className="flex justify-center mt-3">
            <Image
              src={Logo}
              alt="Saas Logo"
              height={40}
              width={40}
              className=""
            />
          </div>
        </nav>
      </div>

      <div
        className={`fixed h-screen inset-0 z-20 bg-black/30 backdrop-blur-lg transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleOnClick}
      ></div>
    </header>
  );
};
