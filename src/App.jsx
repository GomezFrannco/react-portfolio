import Header from "./layout/header/header.layout";
import Main from "./layout/main/main.layout";
import Footer from "./layout/footer/footer.layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <Main/>
            <Footer/>
          </>
        }/>
        <Route path="/projects" element={
          <ProjectsPage/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
