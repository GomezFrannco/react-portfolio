import Button from "../buttons/button.components";
import "./project.components.scss";

const Project = ({project}) => {
  return (
    <>
      <div className="component__card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KfnymzaK4rOAK8GT3uC9V1P4PYQvsg5FVw&usqp=CAU" alt="" className="card__image"/>
        <div className="card__button">
          <Button btnName="See project"/>
        </div>
        <div className="card__text">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </>
  );
}
export default Project;