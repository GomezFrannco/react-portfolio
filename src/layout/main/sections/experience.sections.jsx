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
          <motion.a href="#experience" className="text__prev"
            whileHover={{
              scale:[null, 1.5, 1.3]
            }}
            transition={{
              duration: 0.3
            }}
          >
              <svg width="30" height="30" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8545 37.8181L32.1454 26.1721L19.8545 14.1819" stroke="#C2C1C2" stroke-width="4"/>
                  <path d="M-1.54171e-06 26C-2.86366e-07 11.6406 11.6406 2.86366e-07 26 1.5417e-06C40.3594 2.79704e-06 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 -2.79704e-06 40.3594 -1.54171e-06 26ZM48.2385 26C48.2385 13.718 38.282 3.7615 26 3.7615C13.718 3.7615 3.7615 13.718 3.7615 26C3.7615 38.282 13.718 48.2385 26 48.2385C38.282 48.2385 48.2385 38.282 48.2385 26Z" fill="#C2C1C2"/>
              </svg>
          </motion.a>
          <motion.a href="#experience" className="text__next"
            whileHover={{
              scale:[null, 1.5, 1.3]
            }}
            transition={{
              duration: 0.3
            }}
          >
            <svg width="30" height="30" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8545 37.8181L32.1454 26.1721L19.8545 14.1819" stroke="#C2C1C2" stroke-width="4"/>
                <path d="M-1.54171e-06 26C-2.86366e-07 11.6406 11.6406 2.86366e-07 26 1.5417e-06C40.3594 2.79704e-06 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 -2.79704e-06 40.3594 -1.54171e-06 26ZM48.2385 26C48.2385 13.718 38.282 3.7615 26 3.7615C13.718 3.7615 3.7615 13.718 3.7615 26C3.7615 38.282 13.718 48.2385 26 48.2385C38.282 48.2385 48.2385 38.282 48.2385 26Z" fill="#C2C1C2"/>
            </svg>
          </motion.a>
        </motion.div>
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
