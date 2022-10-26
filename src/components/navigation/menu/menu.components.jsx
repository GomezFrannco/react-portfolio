import "./menu.components.scss";

const NavMenu = () => {
  return (
    <ul className="menu__list">
      <li className="list__option">
        <a href='#projects' className="option__text">Projects</a>
      </li>
      <li className="list__option">
        <a href='#experience'className="option__text">Experience</a>
      </li>
      <li className="list__option">
        <a href='#skills' className="option__text">Skills</a>
      </li>
      <li className="list__option">
        <a href='#about' className="option__text">About me</a>
      </li>
    </ul>
  )
};

export default NavMenu;
