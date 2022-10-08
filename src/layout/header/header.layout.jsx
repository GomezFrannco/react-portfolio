import Button from "../../components/buttons/button.components";
import NavBar from "../../components/navigation/navBar.components";


export default function Header() {
  return (
    <>
      <header className="layout__header">
        <NavBar/>
        <div className="header__content">
          <div className="content__text">
            <h1>Backend Developer</h1>
            <span id="languages" className="text__languages">TypeScript.</span>
            <p>I create solutions by writing code as efficiently as possible.</p>
            <p>We can build amazing and innovative things.</p>
            <Button btnName="Download CV"/>
          </div>
          <div className="content__logo">
            <img src="" alt=""/>
          </div>
        </div>
      </header>
    </>
  )
};
