import Button from "../buttons/button.components";
import NavMenu from "./menu/menu.components";
import logo from "../../assets/nav-logo.svg";
import { motion } from "framer-motion";
import "./navBar.components.scss";

const NavBar = () => {
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
        <a href='#' className='logo__text'>
          Franco<span>Dev.</span>
        </a>
        <a href='#' className='logo__icon'>
          <img src={logo} alt="Franco's Logo" />
        </a>
      </div>
      <div className='bar__menu'>
        <NavMenu />
      </div>
      <Button btnName="Let's talk" href="#contact"/>
    </motion.nav>
  );
};

export default NavBar;
