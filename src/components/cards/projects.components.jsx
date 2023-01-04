import Button from "../Button";
import "./project.components.scss";
import { motion } from "framer-motion";

const cardAnimation = {
  opacity: 1,
  y: [-50, 25, 0]
}
const cardViewport = {
  once: true,
  amount: "all"
}

const Project = ({project, value}) => {
  return (
    <>
      <motion.div className="component__card"
        initial={{ opacity: 0 }}
        whileInView={cardAnimation}
        viewport={cardViewport}
        transition={{
          type: "spring",
          duration: 0.6,
          delay: value
        }}
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KfnymzaK4rOAK8GT3uC9V1P4PYQvsg5FVw&usqp=CAU" alt="" className="card__image"/>
        <div className="card__button">
          <Button btnName="See project"/>
        </div>
        <div className="card__text">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </motion.div>
    </>
  );
}

export default Project;