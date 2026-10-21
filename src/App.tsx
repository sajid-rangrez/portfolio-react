import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sajid Hussain
      </footer>
    </div>
  );
}

export default App;