import { useState, useEffect } from "react";
import Button from "../Button";
import NavMenu from "./menu/menu.components";
import logo from "../../assets/nav-logo.svg";
import { motion } from "framer-motion";
import "./navBar.components.scss";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = (e) => {
    const toggle = activeMenu == true ? false : true;
    setActiveMenu(toggle);
  }

  useEffect(() => {
    const menuButton = document.querySelector("#menuItems");
    menuButton.classList.toggle("active");
    menuButton.classList.toggle("hidden");
  }, [activeMenu])

  return (
    <motion.nav className='navigation__bar'
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.6,
      }}
    >
      <div className='bar__logo'>
        <a href='/#' className='logo__text'>
          Franco<span>Dev.</span>
        </a>
        <a href='/#' className='logo__icon'>
          <img src={logo} alt="Franco's Logo" />
        </a>
      </div>
      <div className='bar__menu hidden' id='menuItems'>
        <NavMenu toggle={toggleMenu}/>
      </div>
      <Button btnName="Let's talk" href="#contact"/>
      <div className="bar__mb_icon" onClick={toggleMenu}>
        <svg width="33" height="25" viewBox="0 0 69 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="69" height="8" rx="4" fill="#F6F5F1"/>
          <rect y="22" width="69" height="8" rx="4" fill="#F6F5F1"/>
          <rect y="44" width="69" height="8" rx="4" fill="#F6F5F1"/>
        </svg>
      </div>

    </motion.nav>
  );
};

export default NavBar;
