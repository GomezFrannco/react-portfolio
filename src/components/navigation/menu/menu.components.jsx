import "./menu.components.scss";

const NavMenu = ({toggle}) => {
  return (
    <ul className="menu__list">
      <li className="list__option">
        <a href='#projects' className="option__text" onClick={toggle}>Projects</a>
      </li>
      <li className="list__option">
        <a href='#experience'className="option__text" onClick={toggle}>Experience</a>
      </li>
      <li className="list__option">
        <a href='#skills' className="option__text" onClick={toggle}>Skills</a>
      </li>
      <li className="list__option">
        <a href='#about' className="option__text" onClick={toggle}>About me</a>
      </li>
      <li className="list__option">
        <a href='#contact' className="option__text contact" onClick={toggle}>Let's talk</a>
      </li>
    </ul>
  )
};

export default NavMenu;
