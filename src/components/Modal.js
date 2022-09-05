import React from "react";
import Card from "./Card";
import "./Modal.css";
const Modal = (props) => {
  return (
    <div>
    <div className="backdrop" onClick={props.onCofirm}>
    <Card className={"Modal"}>
      <header>
        <h2 className="header">{props.title}</h2>
      </header> 
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button onClick={props.onConfirm} >
            Okay
        </button>
      </footer>
    </Card>
    </div>
    </div>
  );
};

export default Modal;
