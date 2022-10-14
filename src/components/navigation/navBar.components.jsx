import Button from "../buttons/button.components";
import NavMenu from "./menu/menu.components";
import "./navBar.components.scss";
import logo from "../../assets/nav-logo.svg";

const NavBar = () => {
  return (
    <nav className='navigation__bar'>
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
      <Button btnName="Let's talk" />
    </nav>
  );
};

export default NavBar;
