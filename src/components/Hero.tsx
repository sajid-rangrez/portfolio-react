
function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-6 py-20"
    >
      <div className="max-w-3xl">
        <p className="mb-5 font-medium tracking-[0.25em] text-cyan-400">
          SOFTWARE ENGINEER
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I'm Sajid Hussain.
        </h1>

        <h2 className="mt-5 text-2xl font-medium text-slate-400 sm:text-3xl">
          I build scalable software and intelligent systems.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          Full Stack Software Developer experienced in Java,
          microservices, cloud infrastructure, and AI-powered
          applications. I enjoy turning complex problems into
          reliable software.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore my work
          </a>

          <a
            href="mailto:sajidhussain3327@gmail.com"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
