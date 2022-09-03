import React from "react";
import "./Center.css";
import Card from "./Card";
import Form from "./Form";
import Output from "./OutPut.js";
const Center = (props) => {
    const saveFormDataHandler = (enteredFormData) => {
        
        const formDataWithId =  {
            ...enteredFormData,
            id:Math.random().toString(),
        }
        props.enteredFormData(formDataWithId);
     
    } 
    
  return (
    <div className="center">
      <Card>
        <Form onSaveFormData={saveFormDataHandler}></Form>
      </Card>
      <br/>
      {props.items.length > 0 &&  <Card>
        {props.items.map((data) => (
          <Output key={data.id} name={data.name} age={data.Age} />
        ))}
      </Card>
      }
   
      
    </div>
  );
};
export default Center;
