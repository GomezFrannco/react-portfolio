import { Input, TextAreaInput } from "../../../../components/Input";
import { Subtitles } from "../../../../components/text/titles.components";
import { motion } from "framer-motion";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const scrollAnimation = {
  x: 0,
  opacity: 1
}
const scrollViewport = {
  once: true,
  amount: "some"
}
const transitionTime = {
  duration: 0.6
}

export default function Footer() {
  return (
    <>
      <footer className="layout__footer" id="contact">
        <motion.div className="footer__text"
          initial={{
            x: -50,
            opacity: 0
          }}
          whileInView={scrollAnimation}
          viewport={scrollViewport}
          transition={transitionTime}
        >
          <Subtitles text="Let's work together"/>
          <p>
            I'm willing to <span>work with you</span> so if you think <span>I fit</span> your <span>projects requirements</span> feel free to <span>contact me</span> through my social networks or email.
          </p>
        </motion.div>
        <motion.div className="footer__form"
          initial={{
            x: 50,
            opacity: 0
          }}
          whileInView={scrollAnimation}
          viewport={scrollViewport}
          transition={transitionTime}
        >
          <form action="">
            <div>
              <div>
                <Input type="text" id="name" name="name" ph="Hideo Kojima"/>
              </div>
              <div>
                <Input type="email" id="email" name="email" ph="hideo@kojima.com"/>
              </div>
            </div>
            <Input type="text" id="subject" name="subject" ph="API Project"/>
            <TextAreaInput id="message" name="message"/>
            <button>Send message</button>
          </form>
          <div className="form__social">
            <p>Follow me on social media:</p>
            <ul className="social__icons">
              <li>
                <a href="https://github.com/GomezFrannco">
                  <FontAwesomeIcon icon={faGithub} size="2xl" color="#F6F5F1"/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gomezfranco/">
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" color="#F6F5F1" />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </footer>
    </>
  )
}