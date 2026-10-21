
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetailsPage() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold">
          Project not found
        </h1>
        <Link
          to="/projects"
          className="mt-6 inline-block text-cyan-400 hover:underline"
        >
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Link
        to="/projects"
        className="text-cyan-400 hover:underline"
      >
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-4xl font-bold">
        {project.title}
      </h1>

      <p className="mt-4 text-slate-300">
        {project.description}
      </p>

      <h2 className="mt-8 text-xl font-semibold">
        Technologies
      </h2>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          View on GitHub
        </a>
      )}
    </section>
  );
}

export default ProjectDetailsPage;
