import React from "react";

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white py-4 px-35 flex justify-between items-center z-100">
      <h1 className="font-black text-xl underline cursor-default">Stackine</h1>
      <nav>
        <ul className="flex justify-between gap-10">
          <li>
            <a href="#hero" className="hover:text-black/50">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black/50">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black/50">
              Projects
            </a>
          </li>
          <li>
            <a href="#contacts" className="hover:text-black/50">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="https://www.whatsapp.com/"
        className="rounded-3xl border p-2 hover:bg-black transition-all ease-in-out duration-300 hover:text-white"
      >
        Contact Me
      </a>
    </header>
  );
};

export default Navbar;
