import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="#home" className="text-xl font-bold text-white">
        SH<span className="text-cyan-400">.</span>
      </a>

      <nav
        aria-label="Main navigation"
        className="flex gap-5 text-sm text-slate-300"
      >
        <Link to="/" className="text-slate-300 hover:text-cyan-400">
          Home
        </Link>

        <Link to="/projects" className="text-slate-300 hover:text-cyan-400">
          Projects
        </Link>

        <Link to="/about" className="text-slate-300 hover:text-cyan-400">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
