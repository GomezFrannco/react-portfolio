import SkillsCarousel from "../../../components/carousel/carousel.components";
import { Subtitles } from "../../../components/text/titles.components";
import { motion } from "framer-motion";
import "../main.layout.scss";

const initialValue = {
  opacity: 0,
};
const scrollViewport = {
  once: true,
  amount: "all"
}
const transitionTime = {
  duration: 0.8,
};

export default function Skills() {
  return (
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
        <SkillsCarousel/>
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
  );
}
