import React from "react";

import Person from "../assets/person.png";

const Header = () => {
  return (
    <section id="hero" className="bg-blue-200 px-35 grid grid-cols-2 py-40">
      <div className="flex flex-col gap-10 pr-60">
        <p className="text-xl">
          Say hello to{" "}
          <span className="text-orange-500 font-bold text-2xl">Stackine</span>
        </p>
        <h2 className="font-bold text-8xl">Full Stack Developer</h2>
        <p className="text-xl">
          Solving real-world application problems through structured analysis,
          scalable system design, and reliable implementation.
        </p>
        <a
          href=""
          className="rounded-full bg-black p-3 text-white w-30 text-center transition-all duration-300 ease-out hover:-translate-y-1"
        >
          Hire me
        </a>
        <div className="flex gap-15 mt-15">
          <div className="flex flex-col">
            <p className="text-5xl font-bold mb-3">
              10<span className="text-orange-500">+</span>
            </p>
            <p className="text-gray-600 text-sm">Projects done</p>
          </div>
          <div className="flex flex-col">
            <p className="text-5xl font-bold mb-3">
              1<span className="text-orange-500">+</span>
            </p>
            <p className="text-gray-600 text-sm">Year Exp.</p>
          </div>
          <div className="flex flex-col">
            <p className="text-5xl font-bold mb-3">
              99<span className="text-orange-500">%</span>
            </p>
            <p className="text-gray-600 text-sm">Great reviews</p>
          </div>
        </div>
      </div>
      <div className="place-items-center mt-25">
        <div className="relative bg-linear-to-r from-orange-300 to-red-400 rounded-t-full rounded-b-none size-115">
          <img
            src={Person}
            alt="Photo"
            className="absolute object-cover bottom-0 size-125"
          />
        </div>
        <p className="mt-5 italic text-xl">Stackine</p>
      </div>
    </section>
  );
};

export default Header;
