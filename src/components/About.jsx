import React from "react";

import GraduatedPerson from "../assets/graduatedperson.png";

const About = () => {
  return (
    <div
      id="about"
      className="px-35 flex flex-col justify-center items-center gap-10 bg-gray-100 py-30 h-screen"
    >
      <h2 className="text-4xl font-bold">About Me</h2>
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center w-60 justify-center mx-auto gap-5">
          <h3 className="text-xl font-semibold">Experiences</h3>
          <p className="text-sm text-gray-600 text-center">
            Building web applications, collaborating in teams, and solving
            real-world problems using modern technologies.
          </p>
        </div>

        <div className="relative bg-linear-to-r from-red-300 to-orange-200 w-100 h-75 mt-20">
          <img
            src={GraduatedPerson}
            alt="Graduated Photo"
            className="absolute size-100 bottom-0"
          />
        </div>

        <div className="flex flex-col items-center w-60 justify-center mx-auto gap-5">
          <h3 className="text-xl font-semibold">Educations</h3>
          <p className="text-sm text-gray-600 text-center">
            Computer Science background with strong fundamentals in programming,
            data structures, and software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
