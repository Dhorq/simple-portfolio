import React, { useState } from "react";
import projects from "./../data/projects";

const Project = () => {
  const [activeField, setActiveField] = useState("all");

  const filteredProjects =
    activeField === "all"
      ? projects
      : projects.filter((p) => p.field === activeField);

  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentData = filteredProjects.slice(start, end);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const handleField = (field) => {
    setActiveField(field);
  };

  return (
    <div
      id="projects"
      className="px-35 flex flex-col justify-center items-center gap-10 bg-blue-100 py-30 min-h-screen text"
    >
      <h2 className="font-bold text-4xl">Projects</h2>
      <div className="flex gap-10 items-center">
        <button
          className={`rounded-2xl py-2 px-3 text-sm ${activeField === "all" ? "bg-white/75 cursor-default" : "cursor-pointer bg-orange-100 hover:bg-orange-200"}`}
          onClick={() => handleField("all")}
        >
          All
        </button>
        <button
          className={`rounded-2xl py-2 px-3 text-sm ${activeField === "frontend" ? "bg-white/75 cursor-default" : "cursor-pointer bg-orange-100 hover:bg-orange-200"}`}
          onClick={() => handleField("frontend")}
        >
          Frontend
        </button>
        <button
          className={`rounded-2xl py-2 px-3 text-sm ${activeField === "backend" ? "bg-white/75 cursor-default" : "cursor-pointer bg-orange-100 hover:bg-orange-200"}`}
          onClick={() => handleField("backend")}
        >
          Backend
        </button>
        <button
          className={`rounded-2xl py-2 px-3 text-sm ${activeField === "fullstack" ? "bg-white/75 cursor-default" : "cursor-pointer bg-orange-100 hover:bg-orange-200"}`}
          onClick={() => handleField("fullstack")}
        >
          Full Stack
        </button>
      </div>
      <div className="grid grid-cols-3 gap-15 h-215">
        {currentData.map((project) => (
          <a
            key={project.name}
            className="size-100 bg-orange-200 hover:bg-orange-300 p-2 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer"
            href={project.link}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-45"
            />
            <div className="justify-between flex flex-col mx-2 mt-2">
              <p className="font-bold">{project.title}</p>
              <p className="h-38 text-sm">{project.description}</p>
              <p className="flex gap-1">
                {project.tech.map((t) => (
                  <p className="bg-orange-200 rounded-2xl text-xs px-2">{t}</p>
                ))}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex gap-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`${page === 1 ? "text-black/50 cursor-default" : "cursor-pointer"} hover:text-black/75`}
        >
          Prev
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className={`${page === totalPages ? "text-black/50 cursor-default" : "cursor-pointer"} hover:text-black/75`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Project;
