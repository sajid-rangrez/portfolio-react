
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [selectedTechnology, setSelectedTechnology] =
    useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const technologies = [
    "All",
    ...new Set(
      projects.flatMap((project) => project.technologies)
    ),
  ];

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProjects = projects.filter((project) => {
    const matchesTechnology =
      selectedTechnology === "All" ||
      project.technologies.includes(selectedTechnology);

    const matchesSearch =
      project.title.toLowerCase().includes(normalizedSearch) ||
      project.description.toLowerCase().includes(normalizedSearch);

    return matchesTechnology && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-16"
    >
      <p className="font-medium text-cyan-400">
        SELECTED WORK
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Projects I've built
      </h2>

      <p className="mt-3 text-slate-400">
        Search my work or filter by technology.
      </p>

      <div className="mt-6">
        <label
          htmlFor="project-search"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Search projects
        </label>

        <div className="flex max-w-xl items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 focus-within:border-cyan-400">
          <span aria-hidden="true" className="text-slate-400">
            ⌕
          </span>

          <input
            id="project-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Try Java, chatbot, XML..."
            className="min-w-0 flex-1 bg-transparent py-3 text-white outline-none placeholder:text-slate-500"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="text-sm text-cyan-400 hover:text-cyan-300"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <button
            key={technology}
            type="button"
            aria-pressed={selectedTechnology === technology}
            onClick={() => setSelectedTechnology(technology)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              selectedTechnology === technology
                ? "border-cyan-400 bg-cyan-400 text-slate-950"
                : "border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
            }`}
          >
            {technology}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-400" aria-live="polite">
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "project" : "projects"} found
      </p>

      {filteredProjects.length > 0 ? (
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-slate-800 p-8 text-center">
          <h3 className="text-lg font-semibold text-white">
            No matching projects
          </h3>

          <p className="mt-2 text-slate-400">
            Try another search term or select a different technology.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedTechnology("All");
            }}
            className="mt-4 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
