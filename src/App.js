import React, { useState } from "react";
import "./App.css";
import Center from "./components/Center";

const DUMMY_DATA = [

];
function App() {
  const [data, setData] = useState(DUMMY_DATA);
  const formData = (enteredData) => {
    setData((prevData) => {
      return [enteredData, ...prevData];
    });
  };
  return (
    <div className="background">
      <Center enteredFormData={formData} items={data} />
    </div>
  );
}

export default App;
