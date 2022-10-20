import Button from "../../components/buttons/button.components";
import NavBar from "../../components/navigation/navBar.components";
import "./header.layout.scss";
import logo from "../../assets/main-logo.svg";

export default function Header() {
  return (
    <>
      <header className="layout__header">
        <NavBar/>
        <div className="header__content">
          <div className="content__text">
            <h1>
              Backend Developer
              <span id="languages"> TypeScript.</span>
            </h1>
              <p>
                I create solutions by writing code as efficiently as possible.
              </p>
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
