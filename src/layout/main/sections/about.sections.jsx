import { MotionSubtitle } from "../../../components/text/titles.components";
import { MotionButton } from "../../../components/buttons/button.components";
import { motion } from "framer-motion";
import "../main.layout.scss";

const initialValue = {
  opacity: 0,
  y: 50,
};
const scrollAnimation = {
  opacity: 1,
  y: 0,
};
const scrollViewport = {
  once: true,
  amount: "all"
}
const transitionTime = {
  duration: 0.6,
};

export default function About() {
  return (
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua odio.
          Morbi.
        </motion.p>
        <MotionButton
          btnName='See more'
          initial={initialValue}
          whileInView={scrollAnimation}
          viewport={scrollViewport}
          transition={transitionTime}
        />
      </div>
      <img
        src='https://i.ytimg.com/vi/n6JyVpU89mo/maxresdefault.jpg'
        alt=''
        className='section__image'
      />
    </section>
  );
}
