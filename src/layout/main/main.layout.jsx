import Button from "../../components/buttons/button.components";
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
        <div className='section__content'>
          <Subtitles text='More Projects' />
          <Button btnName='View all projects' />
        </div>
      </section>
      <section className='main__section' id='mainExperience'>
      </section>
      <section className='main__section' id='mainSkills'>
      </section>
      <section className='main__section' id='mainAbout'>
      </section>
    </main>
  );
}
