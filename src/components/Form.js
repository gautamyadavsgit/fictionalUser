import React, { useState } from "react";
import Modal from "./Modal.js";
import "./Form.css";
const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();

    if(enteredAge == '' || enteredName == '' ){
       return;
    }

    const formData = {
      name: enteredName,
      Age: enteredAge,
    };
    props.onSaveFormData(formData);

    setEnteredAge("");
    setEnteredName("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label>Name</label>
      <input
        onChange={nameChangeHandler}
        type="text"
        placeholder="Your name.."
        value={enteredName}
      />

      <label>Age</label>
      <input
        type="text"
        value={enteredAge}
        onChange={ageChangeHandler}
        placeholder="Age"
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
export default Form;
