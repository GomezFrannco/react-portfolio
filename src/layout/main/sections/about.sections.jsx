import { MotionSubtitle } from "../../../components/text/titles.components";
import { MotionButton } from "../../../components/Button";
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
          Hello! My name is Franco. I design and develop software as best as possible writing clean code and implementing good practices. I'm passionate about technology and space.<br/>I'm currently studying Computer Programming at University and working with freelance projects for clients. Nice to meet you!
        </motion.p>
      </div>
      <img
        src='https://i.ytimg.com/vi/n6JyVpU89mo/maxresdefault.jpg'
        alt=''
        className='section__image'
      />
    </section>
  );
}
