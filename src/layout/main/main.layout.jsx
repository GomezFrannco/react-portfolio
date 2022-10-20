import Button from "../../components/buttons/button.components";
import Project from "../../components/cards/projects.components";
import { Subtitles } from "../../components/text/titles.components";
import "./main.layout.scss";

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
        <div className='section__mantra'>
          <p>
            Ideas <span>don't come out fully formed</span>, they only become
            clearer as you <span>work on them</span>. You just have to{" "}
            <span>get started</span>.
          </p>
          <h3>Mark Zuckerberg.</h3>
        </div>
      </section>
      <section className='main__section' id='mainAbout'>
        <div className='section__text'>
          <Subtitles text='About me' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua odio.
            Morbi.
          </p>
          <Button btnName='See more'/>
        </div>
          <img src="https://i.ytimg.com/vi/n6JyVpU89mo/maxresdefault.jpg" alt="" className="section__image" />
      </section>
    </main>
  );
}
