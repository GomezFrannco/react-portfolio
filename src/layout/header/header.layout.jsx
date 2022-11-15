import Button from "../../components/buttons/button.components";
import NavBar from "../../components/navigation/navBar.components";
import logo from "../../assets/main-logo.svg";
import { langs } from "./langs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./header.layout.scss";

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
          <motion.div className="content__text"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration:0.6,
            }}
          >
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
            <Button btnName="Download CV" href="/Franco-resume.pdf" target="_BLANK"/>
          </motion.div>
          <motion.div className="content__logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 1.5,
            }}
          >
            <img src={logo} alt="logo" />
          </motion.div>
        </div>
      </header>
    </>
  )
};
