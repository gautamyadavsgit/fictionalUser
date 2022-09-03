import React from "react";
import Card from "./Card.js";

const Output = (props) => {
  return(
    
        <input type="text"   value={props.name+" Age: = {"+props.age+"} Year Old"} readOnly />
    
  );
}
export default Output;