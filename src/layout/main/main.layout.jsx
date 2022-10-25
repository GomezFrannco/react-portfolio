import Projects from "./sections/projects.sections";
import Experience from "./sections/experience.sections";
import Skills from "./sections/skills.sections";
import About from "./sections/about.sections";
import "./main.layout.scss";

export default function Main() {
  return (
    <main className='layout__main'>
      <Projects/>
      <Experience/>
      <Skills/>
      <About/>
    </main>
  );
}
