import React, { useState } from "react";

import Modal from "./Modal";
import "./Form.css";
const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();

    if(enteredAge === '' || enteredName === '' ){
      setError({
        title:'Invalid Input',
        message:'Please Enter a valid name and age'  
        });  
      return;       
        
    }
    if(enteredAge < 0){
      setError({
        title:'Invalid Age',
        message:'Please Enter a valid age'  
        });
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

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
     {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler}></Modal> }
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
    </div>
  );
};
export default Form;
