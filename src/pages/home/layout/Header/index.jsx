import Button from "../../../../components/Button";
import NavBar from "../../../../components/navigation/navBar.components";
import logo from "../../../../assets/main-logo.svg";
import { langs } from "./langs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.scss";

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
            <motion.h1
              initial={{opacity: 0, x: -200}}
              animate={{opacity: 1, x: 0}}
              transition={{
                delay: 0.3,
                duration: 1.5
              }}
            >
              Backend Developer
              <span id="languages">{lang}</span>
            </motion.h1>
            <motion.div
              initial={{opacity: 0, x: 200}}
              animate={{opacity: 1, x: 0}}
              transition={{
                delay: 0.3,
                duration: 1.5
              }}
            >
              <p>
                I create solutions by writing code as efficiently as possible.
              </p>
              <p>We can build amazing and innovative things.</p>
            </motion.div>
            <motion.div 
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{
                delay: 0.3,
                duration: 1.5
              }}>
              <Button btnName="Download CV" href="/Franco-resume.pdf" target="_BLANK"/>
            </motion.div>
          </div>
          <motion.div className="content__logo"
            initial={{ opacity: 0, y: -200}}
            animate={{ opacity: 1, y: 0}}
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
