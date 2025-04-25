"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, social } from "./dataNav";
import logo from "../public/logo.svg";
import type { LinkItem, SocialItem } from "./types";
import Image from "next/image";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar for desktop */}
      <nav className="relative z-50 shadow-md">
        <div className="max-w-[1170px] mx-auto p-4 md:flex md:justify-between items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="logo" width={50} height={50} />
              <span className="text-green-700 font-bold">SE1A</span>
            </div>
            <button
              className="text-2xl text-red-600 md:hidden"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          </div>

          {/* Links for desktop */}
          <ul className="hidden md:flex gap-6 items-center">
            {links.map(({ id, url, text }: LinkItem) => (
              <li key={id}>
                <a
                  href={url}
                  className="text-gray-700 font-bold hover:text-green-800"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons for desktop */}
          <ul className="hidden md:flex gap-2 items-center">
            {social.map(({ id, url, icon }: SocialItem) => (
              <li key={id}>
                <a href={url} className="text-green-600 hover:text-green-800">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <aside
        className={`fixed top-0 left-0 h-full w-[250px] bg-white z-50 p-6 transition-transform duration-300 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <Image src={logo} alt="logo" width={40} height={40} />
          <button className="text-2xl text-red-600" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {links.map(({ id, url, text }: LinkItem) => (
            <li key={id}>
              <a
                href={url}
                onClick={closeSidebar}
                className="text-gray-700 font-bold hover:text-green-800"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4 mt-6">
          {social.map(({ id, url, icon }: SocialItem) => (
            <li key={id}>
              <a href={url} className="text-green-600 hover:text-green-800">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
