import { forwardRef } from "react";
import { motion } from "framer-motion";
import "./index.scss";

const Button = forwardRef(({ btnName, href, target }, ref) => {
  return (
    <a href={href} className='button' target={target} ref={ref}>
      <motion.button
        whileHover={{
          scale:[null, 1.06],
          background: ["#7000FF", "#4D00AF"],
          fontWeight: 500
        }}
        whileTap={{
          scale: 1,
          background: "#2D0066"
        }}
        transition={{
          duration:0.05
        }}
      >
        {btnName}
      </motion.button>
    </a>
  );
});

export const MotionButton = motion(Button);

export default Button;
