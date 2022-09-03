import React from "react";
import "./Center.css";
import Card from "./Card";
import Form from "./Form";
import Output from "./OutPut.js";
const Center = (props) => {
  return (
    <div className="center">
      <Card>
        <Form></Form>
      </Card>
      <br />
      <Card>
        {props.items.map((data) => (
          <Output key={data.id} name={data.name} age={data.Age} />
        ))}
      </Card>
    </div>
  );
};
export default Center;
