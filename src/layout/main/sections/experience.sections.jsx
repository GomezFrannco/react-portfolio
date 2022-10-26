import { Subtitles } from "../../../components/text/titles.components";
import { MotionButton } from "../../../components/buttons/button.components";
import { motion } from "framer-motion";
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
        <motion.div
          className='content__experience'
          initial={{ opacity: 0, y: 50 }}
          whileInView={scrollAnimation}
          viewport={scrollViewport}
          transition={{ duration: 0.6 }}
        >
          <div className='experience__timeline'>
            <div className='timeline__events'></div>
          </div>
          <div className='experience__text'>
            <h3>Backend Developer</h3>
            <p>
              <i>Mercado Libre • 06/07/2020 - 07/01/2021</i>
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
              hic eligendi error minus asperiores voluptas
            </p>
          </div>
        </motion.div>
        <MotionButton
          btnName='LinkedIn Profile'
          initial={{ opacity: 0, y: 100 }}
          whileInView={scrollAnimation}
          viewport={scrollViewport}
          transition={transitionTime}
        />
      </div>
    </section>
  );
}
