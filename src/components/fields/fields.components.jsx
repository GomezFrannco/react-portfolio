export const TextInput = ({placeholder}) => {
  return (
    <input type='text' placeholder={placeholder} required/>
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
