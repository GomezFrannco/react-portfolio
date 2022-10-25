import { forwardRef } from "react";
import { motion } from "framer-motion";
import "./button.components.scss";

const Button = forwardRef(({ btnName }, ref) => {
  return (
    <a href='#' className='button' ref={ref}>
      <button>{btnName}</button>
    </a>
  );
});

export const MotionButton = motion(Button);

export default Button;
