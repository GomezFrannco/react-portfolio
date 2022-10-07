import "./button.components.scss";

const Button = ({ btnName }) => {
  return (
    <a href='#' className='button'>
      <button>{btnName}</button>
    </a>
  );
};

export default Button;
