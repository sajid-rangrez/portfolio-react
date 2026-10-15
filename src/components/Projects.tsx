
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
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

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
