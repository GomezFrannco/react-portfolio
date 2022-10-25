import SkillImage, { skills } from "../../../components/skill/skill.components";
import { Subtitles } from "../../../components/text/titles.components";
import { motion } from "framer-motion";
import "../main.layout.scss";

const initialValue = {
  opacity: 0,
};
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
          transition={transitionTime}
        >
          <Subtitles text='Tech skills' />
          <p>
            These are some technologies I'm using to build
            <span> incredible things</span>.
          </p>
        </motion.div>
        <div className='slider__carousel'>
          <SkillImage skill={skills.docker} skillName='Docker' />
          <SkillImage skill={skills.python} skillName='Python' />
          <SkillImage skill={skills.node} skillName='Node.js' />
          <SkillImage skill={skills.graphql} skillName='GraphQL' />
          <SkillImage skill={skills.postgresql} skillName='PostgreSQL' />
          <SkillImage skill={skills.php} skillName='PHP' />
          <SkillImage skill={skills.mongo} skillName='MongoDB' />
        </div>
      </div>
      <motion.div
        className='section__mantra'
        initial={initialValue}
        whileInView={{ y: [-20, 20, 0], opacity: 1 }}
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
