import { EmailInput, TextAreaInput, TextInput } from "../../components/fields/fields.components";
import { Subtitles } from "../../components/text/titles.components";
import "./footer.layout.scss";

export default function Footer() {
  return (
    <>
      <footer className="layout__footer">
        <div className="footer__text">
          <Subtitles text="Let's work together"/>
          <p>
            I'm willing to <span>work with you</span> so if you think <span>I fit</span> your <span>projects requirements</span> feel free to <span>contact me</span> through my social networks or email.
          </p>
        </div>
        <div className="footer__form">
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
        </div>
      </footer>
    </>
  )
}