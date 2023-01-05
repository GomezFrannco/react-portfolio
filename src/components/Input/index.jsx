import { useState } from "react";
import "./index.scss";

export const TextAreaInput = ({ id, name }) => {
  return (
    <textarea
      id={id}
      name={name}
      cols='30'
      rows='10'
      placeholder='Hi, I really like what you do and I was thinking to work with together...'
    ></textarea>
  );
};

export const Input = ({ type, id, name, ph }) => {
  const [placeholder, setPlaceholder] = useState(ph);

  return (
    <input
      type={type}
      id={id}
      name={name}
      required
      placeholder={placeholder}
      onFocus={() => setPlaceholder("")}
      onBlur={() => setPlaceholder(ph)}
    />
  );
};