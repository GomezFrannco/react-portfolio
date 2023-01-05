import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/projects";
import HomePage from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <HomePage/>
        }/>
        <Route path="/projects" element={
          <ProjectsPage/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
