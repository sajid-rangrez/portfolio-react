
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

      {(project.githubUrl || project.liveDemoUrl) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400"
            >
              GitHub
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
