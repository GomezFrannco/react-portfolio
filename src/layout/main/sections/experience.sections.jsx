import { Subtitles } from "../../../components/text/titles.components";
import { MotionButton } from "../../../components/Button";
import { motion } from "framer-motion";
import Experiences from "../../../components/experience/experience.components";
import "../main.layout.scss";

const scrollAnimation = {
  opacity: 1,
  y: 0,
};
const scrollViewport = {
  once: true,
  amount: "all",
};
const transitionTime = {
  duration: 0.6,
};

export default function Experience() {
  return (
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
              I have worked in different projects and companies as a developer.
            </p>
            <p>You can see my professional background here.</p>
          </div>
        </motion.div>
        <Experiences/>
        <MotionButton
          btnName='LinkedIn Profile'
          href="https://www.linkedin.com/in/gomezfranco/"
          target="_blank"
          initial={{ opacity: 0, y: 100 }}
          whileInView={scrollAnimation}
          viewport={scrollViewport}
          transition={transitionTime}
        />
      </div>
    </section>
  );
}
