import { Subtitles, MotionSubtitle } from "../../../components/text/titles.components";
import Project from "../../../components/cards/projects.components";
import { MotionButton } from "../../../components/buttons/button.components";
import { motion } from "framer-motion";
import "../main.layout.scss";

const scrollViewport = {
  once: true,
  amount: "all"
}
const transitionTime = {
  duration: 0.6
}

export default function Projects() {
  return (
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
        <Project
          project={{ title: "E-learning app", description: "asdasdasdasd" }}
          value={0.2}
        />
        <Project
          project={{ title: "E-learning app", description: "asdasdasdasd" }}
          value={0.3}
        />
        <Project
          project={{ title: "E-learning app", description: "asdasdasdasd" }}
          value={0.4}
        />
      </div>
      <div className='section__content'>
        <MotionSubtitle
          text='More Projects'
          whileInView={{
            opacity: [0, 1],
            x: [-50, 0],
          }}
          viewport={scrollViewport}
          transition={transitionTime}
        />
        <MotionButton
          btnName='View all projects'
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
  );
}
