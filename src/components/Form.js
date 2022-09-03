import React,{ useState } from "react";
import "./Form.css";
const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState(""); 

  const nameChangeHandler = (event) =>{
   setEnteredName(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label>Name</label>
      <input onChange={nameChangeHandler}
        type="text"
        placeholder="Your name.."
      />

      <label>Age</label>
      <input type="text" onChange={ageChangeHandler} placeholder="Age" />

      <input type="submit" value="Submit" />
    </form>
  );
};
export default Form;
