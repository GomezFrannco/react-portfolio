import Button from "../../components/Button";
import NavBar from "../../components/navigation/navBar.components";
import { Subtitles } from "../../components/text/titles.components";
import "./index.scss";

export default function ProjectsPage() {
  return (
    <>
      <header className="layout__header layout__projects">
        <NavBar/>
        <div className="header__content">
          <div className="content__text">
            <h1>Every project I've done.</h1>
            <p>
              Here's all my work as developer since I started some time ago. You
              can also find this on my Github profile and more info through my
              LinkedIn page.
            </p>
          </div>
          <div className="content__buttons">
            <Button btnName='Github' href="https://github.com/GomezFrannco" target="__BLANK"/>
            <Button btnName='LinkedIn' href="https://www.linkedin.com/in/gomezfranco/" target="__BLANK"/>
          </div>
        </div>
      </header>
      <main className="layout__main layout__projects">
        <div className="main__projects">
          <div className="projects__table">
            <h3>Year</h3>
            <h3>Project</h3>
            <h3 className="project__tech">Built with</h3>
            <h3>Links</h3>
          </div>
          <div className="projects__list">
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
            <div className="list__info">
              <p>2022</p>
              <h4>Auth API</h4>
              <p className="project__tech"><i>Node.js, Express, TypeScript, MongoDB, JWT, ZOD</i></p>
              <a href="#">Gh</a>
            </div>
          </div>
        </div>
      </main>
      <footer className="layout__footer layout__projects">
        <div className="footer__content">
          <Subtitles text='Did you like any project?' />
          <p>
            You can give me your feedback to improve my skills and keep learning!
          </p>
          <div className="content__buttons">
            <Button btnName='Get in touch' />
          </div>
        </div>
      </footer>
    </>
  );
}
