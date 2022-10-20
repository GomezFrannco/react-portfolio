import Button from "../../components/buttons/button.components";
import Project from "../../components/cards/projects.components";
import { Subtitles } from "../../components/text/titles.components";

export default function Main() {
  return (
    <main className='layout__main'>
      <section className='main__section' id='mainProjects'>
        <div className='section__content'>
          <Subtitles text='Latest Projects' />
          <p>
            I've been involved in some interesting work. Let me show you three
            amazing projects and the kind of things I can build.
          </p>
        </div>
        <div className='section__cards'>
          <Project
            project={{ title: "E-learning app", description: "asdasdasdasd" }}
          />
          <Project
            project={{ title: "E-learning app", description: "asdasdasdasd" }}
          />
          <Project
            project={{ title: "E-learning app", description: "asdasdasdasd" }}
          />
        </div>
        <div className='section__content'>
          <Subtitles text='More Projects' />
          <Button btnName='View all projects' />
        </div>
      </section>
      <section className='main__section' id='mainExperience'>
        <div className='section__content'>
          <div className='content__title'>
            <Subtitles text='Experience' />
            <div className='title__introduction'>
              <p>
                I have worked in different projects and companies as a
                developer.
              </p>
              <p>You can see my professional background here.</p>
            </div>
          </div>
          <div className='content__timeline'>
            <div className='timeline__events'></div>
          </div>
          <div className='content__text'>
            <h3>Backend Developer</h3>
            <p>
              <i>Mercado Libre • 06/07/2020 - 07/01/2021</i>
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
              hic eligendi error minus asperiores voluptas
            </p>
          </div>
          <Button btnName='LinkedIn Profile' />
        </div>
      </section>
      <section className='main__section' id='mainSkills'>
        <div className='section__slider'>
          <div className='slider__title'>
            <Subtitles text='Tech skills' />
            <p>
              These are some technologies I'm using to build
              <span> incredible things</span>.
            </p>
          </div>
        </div>
      </section>
      <section className='main__section' id='mainAbout'>
      </section>
    </main>
  );
}
