import { forwardRef } from "react";
import { motion } from "framer-motion";
import "./subtitles.components.scss";

export const Subtitles = forwardRef(({text},ref) => {
  return (
    <div className="subtitles" ref={ref}>
      <h2>{text}</h2>
    </div>
  );
});

export const MotionSubtitle = motion(Subtitles);