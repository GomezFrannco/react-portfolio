import { useState } from "react";
import "./fields.components.scss";

export const TextInput = ({placeholder}) => {
  return (
    <input className="input__text" type='text' placeholder={placeholder} required/>
  );
};
export const EmailInput = ({placeholder}) => {
  return (
    <input type='email' placeholder={placeholder} required/>
  );
};
export const TextAreaInput = () => {
  return (
    <textarea name='' id='' cols='30' rows='10' placeholder='Write a short message'></textarea>
  );
};

export const Input = ({ type, id, name, ph }) => {
  const [placeholder, setPlaceholder] = useState(ph);

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onFocus={() => setPlaceholder("")}
      onBlur={() => setPlaceholder(ph)}
    />
  );
};