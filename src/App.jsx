import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";

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
