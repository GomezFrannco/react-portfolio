import { EmailInput, TextAreaInput, TextInput } from "../../components/fields/fields.components";
import { Subtitles } from "../../components/text/titles.components";
import {motion} from "framer-motion";
import "./footer.layout.scss";

const scrollAnimation = {
  x: 0,
  opacity: 1
}
const transitionTime = {
  duration: 0.6
}

export default function Footer() {
  return (
    <>
      <footer className="layout__footer">
        <motion.div className="footer__text"
          initial={{
            x: -150,
            opacity: 0
          }}
          whileInView={scrollAnimation}
          transition={transitionTime}
        >
          <Subtitles text="Let's work together"/>
          <p>
            I'm willing to <span>work with you</span> so if you think <span>I fit</span> your <span>projects requirements</span> feel free to <span>contact me</span> through my social networks or email.
          </p>
        </motion.div>
        <motion.div className="footer__form"
          initial={{
            x: 150,
            opacity: 0
          }}
          whileInView={scrollAnimation}
          transition={transitionTime}
        >
          <form action="">
            <div>
              <TextInput placeholder="Type your name"/>
              <EmailInput placeholder="Type your email"/>
            </div>
            <TextInput placeholder="Topic of your message"/>
            <TextAreaInput/>
            <button>Send message</button>
          </form>
          <div className="form__social">
            <p>Follow me on social media:</p>
          </div>
        </motion.div>
      </footer>
    </>
  )
}