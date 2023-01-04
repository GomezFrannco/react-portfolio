import { motion } from "framer-motion";
import { Subtitles, MotionSubtitle } from "../../../../components/text/titles.components";
import ProjectCard from "../../../../components/ProjectCard";
import { MotionButton } from "../../../../components/Button";
import "./index.scss";
import Experiences from "../../../../components/experience/experience.components";
import SkillsCarousel from "../../../../components/carousel/carousel.components";

const scrollAnimation = {
  opacity: 1,
  y: 0,
};

const initialValue = {
  opacity: 0,
};

const scrollViewport = {
  once: true,
  amount: "all",
};
const transitionTime = {
  duration: 0.6,
};

const projects = [
  {
    title: "E-learning app",
    description: "asdasdasdasd",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KfnymzaK4rOAK8GT3uC9V1P4PYQvsg5FVw&usqp=CAU",
  },
  {
    title: "E-learning app",
    description: "asdasdasdasd",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KfnymzaK4rOAK8GT3uC9V1P4PYQvsg5FVw&usqp=CAU",
  },
  {
    title: "E-learning app",
    description: "asdasdasdasd",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KfnymzaK4rOAK8GT3uC9V1P4PYQvsg5FVw&usqp=CAU",
  },
];

export default function Main() {
  return (
    <main className='layout__main'>
      <section className='main__section' id='projects'>
        <motion.div
          className='section__content'
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={transitionTime}
        >
          <Subtitles text='Latest Projects' />
          <p>
            I've been involved in some interesting work. Let me show you three
            amazing projects and the kind of things I can build.
          </p>
        </motion.div>
        <div className='section__cards'>
          {projects.map((p, index) => (
            <ProjectCard
              key={index}
              project={{
                title: p.title,
                description: p.description,
                thumbnail: p.thumbnail,
              }}
            />
          ))}
        </div>
        <div className='section__content'>
          <MotionSubtitle
            text='More Projects'
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 1],
              x: [-50, 0],
            }}
            viewport={scrollViewport}
            transition={transitionTime}
          />
          <MotionButton
            btnName='View all projects'
            href='/projects'
            whileInView={{
              rotate: [0, 2, -2, 2, -2, 2, -2, 2, -2, 0],
            }}
            viewport={scrollViewport}
            transition={{
              delay: 1,
            }}
          />
        </div>
      </section>
      <section className='main__section' id='experience'>
        <div className='section__content'>
          <motion.div
            className='content__title'
            initial={{ opacity: 0, y: -50 }}
            whileInView={scrollAnimation}
            viewport={scrollViewport}
            transition={transitionTime}
          >
            <Subtitles text='Experience' />
            <div className='title__introduction'>
              <p>
                I have worked in different projects and companies as a
                developer.
              </p>
              <p>You can see my professional background here.</p>
            </div>
          </motion.div>
          <Experiences />
          <MotionButton
            btnName='LinkedIn Profile'
            href='https://www.linkedin.com/in/gomezfranco/'
            target='_blank'
            initial={{ opacity: 0, y: 100 }}
            whileInView={scrollAnimation}
            viewport={scrollViewport}
            transition={transitionTime}
          />
        </div>
      </section>
      <section className='main__section' id='skills'>
        <div className='section__slider'>
          <motion.div
            className='slider__title'
            initial={initialValue}
            whileInView={{ y: [15, -15, 0], opacity: 1 }}
            viewport={scrollViewport}
            transition={transitionTime}
          >
            <Subtitles text='Tech skills' />
            <p>
              These are some technologies I'm using to build
              <span> incredible things</span>.
            </p>
          </motion.div>
          <SkillsCarousel />
        </div>
        <motion.div
          className='section__mantra'
          initial={initialValue}
          whileInView={{ y: [-20, 20, 0], opacity: 1 }}
          viewport={scrollViewport}
          transition={transitionTime}
        >
          <p>
            Ideas <span>don't come out fully formed</span>, they only become
            clearer as you <span>work on them</span>. You just have to{" "}
            <span>get started</span>.
          </p>
          <h3>Mark Zuckerberg.</h3>
        </motion.div>
      </section>
      <section className='main__section' id='about'>
        <div className='section__text'>
          <MotionSubtitle
            text='About me'
            initial={{ y: -50, opacity: 0 }}
            whileInView={scrollAnimation}
            viewport={scrollViewport}
            transition={transitionTime}
          />
          <motion.p
            initial={initialValue}
            whileInView={scrollAnimation}
            viewport={scrollViewport}
            transition={transitionTime}
          >
            Hello! My name is Franco. I design and develop software as best as
            possible writing clean code and implementing good practices. I'm
            passionate about technology and space.
            <br />
            I'm currently studying Computer Programming at University and
            working with freelance projects for clients. Nice to meet you!
          </motion.p>
        </div>
        <img
          src='https://i.ytimg.com/vi/n6JyVpU89mo/maxresdefault.jpg'
          alt=''
          className='section__image'
        />
      </section>
    </main>
  );
}