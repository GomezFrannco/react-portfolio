import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/Projects";
import HomePage from "./pages/Home";

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
