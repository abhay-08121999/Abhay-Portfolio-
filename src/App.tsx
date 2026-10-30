import { Routes, Route } from "react-router-dom";
import { HomePage, ProjectPage, findProject } from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectRoute />} />
    </Routes>
  );
}

function ProjectRoute() {
  const id = window.location.pathname.split("/").pop() || "";
  const project = findProject(id);
  if (!project) return <main className="detail-page"><h1>Project not found.</h1><a href="/">Return home</a></main>;
  return <ProjectPage project={project} />;
}
