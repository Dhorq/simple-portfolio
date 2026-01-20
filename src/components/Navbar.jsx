import React from "react";

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white py-4 px-35 flex justify-between items-center z-100">
      <h1 className="font-black text-xl underline">Stackine</h1>
      <nav>
        <ul className="flex justify-between gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <a href="" className="rounded-3xl border p-2">
        Contact Me
      </a>
    </header>
  );
};

export default Navbar;
