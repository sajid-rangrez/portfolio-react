
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <Header />

      <Hero />

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        <p className="font-medium text-cyan-400">
          ABOUT ME
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Engineering beyond the code.
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-400">
          I work across backend services, frontend interfaces,
          integrations, and deployment infrastructure. My
          interests include distributed systems, observability,
          artificial intelligence, and maintainable applications.
        </p>
      </section>

      <Projects />

      <footer
        id="contact"
        className="border-t border-slate-800 px-6 py-10 text-center text-sm text-slate-400"
      >
        <p>Let's build something meaningful.</p>

        <a
          href="https://www.linkedin.com/in/sajid-hussain3327"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-cyan-400 hover:text-cyan-300"
        >
          Connect on LinkedIn
        </a>

        <p className="mt-5">
          © {new Date().getFullYear()} Sajid Hussain
        </p>
      </footer>
    </main>
  );
}

export default App;
