import React from "react";

import GraduatedPerson from "../assets/graduatedperson.png";

const About = () => {
  return (
    <div className="px-35 flex flex-col justify-center items-center gap-10 bg-gray-100 py-30">
      <h2 className="text-4xl font-bold">About Me</h2>
      <div className="grid grid-cols-3">
        <div className="flex flex-col">
          <h3>Experiences</h3>
          <p></p>
        </div>
        <div>
          <img src={GraduatedPerson} alt="Graduated Photo" />
        </div>
        <div className="flex flex-col">
          <h3>Educations</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
