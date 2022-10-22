import Button from "../../components/buttons/button.components";
import NavBar from "../../components/navigation/navBar.components";
import "./header.layout.scss";
import logo from "../../assets/main-logo.svg";
import { langs } from "./langs";
import { useEffect, useState } from "react";

export default function Header() {
  const [lang, setLang] = useState(langs[0]);
  const [index, setIndex] = useState(1);
  useEffect(()=> {
    const interval = setInterval(()=>{
      setLang(langs[index])
      index != langs.length - 1
        ? setIndex(prevIndex => prevIndex + 1)
        : setIndex(0);
    }, 1100)
    return () => clearInterval(interval);
  })
  return (
    <>
      <header className="layout__header">
        <NavBar/>
        <div className="header__content">
          <div className="content__text">
            <h1>
              Backend Developer
              <span id="languages">{lang}.</span>
            </h1>
            <div>
              <p>
                I create solutions by writing code as efficiently as possible.
              </p>
              <p>We can build amazing and innovative things.</p>
            </div>
            <Button btnName="Download CV"/>
          </div>
          <div className="content__logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
    </>
  )
};
