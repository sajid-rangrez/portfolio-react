
function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a
        href="#home"
        className="text-xl font-bold text-white"
      >
        SH<span className="text-cyan-400">.</span>
      </a>

      <nav
        aria-label="Main navigation"
        className="flex gap-5 text-sm text-slate-300"
      >
        <a href="#about" className="hover:text-cyan-400">
          About
        </a>

        <a href="#projects" className="hover:text-cyan-400">
          Projects
        </a>

        <a href="#contact" className="hover:text-cyan-400">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
