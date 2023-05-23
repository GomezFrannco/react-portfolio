import Button from "../Button";
import "./index.scss";
import { motion } from "framer-motion";

const cardAnimation = {
  opacity: 1,
  y: [-50, 25, 0]
}
const cardViewport = {
  once: true,
  amount: "all"
}

const ProjectCard = ({project}) => {
  return (
    <>
      <motion.div className="component__card"
        initial={{ opacity: 0 }}
        whileInView={cardAnimation}
        viewport={cardViewport}
        transition={{
          type: "spring",
          duration: 0.6,
          delay: 0.3
        }}
      >
        <img src={project.thumbnail} alt={project.title} className="card__image"/>
        <div className="card__button">
          <Button btnName="See project" href={project.url} target="_BLANK"/>
        </div>
        <div className="card__text">
          <h3>{project.title}</h3>
          <div>{project.technologies.join(', ')}</div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectCard;