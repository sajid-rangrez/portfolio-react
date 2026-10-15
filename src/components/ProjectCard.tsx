import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50">
      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-300"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
