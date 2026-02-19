import { useState } from "react";
import "../styles/App.css";
import { CVForm } from "./CVForm";
import { CVResult } from "./CVResult";

const Information = {
  name: "",
  email: "",
  phone: "",
  school: "",
  title: "",
  studyDate: "",
  studyEndDate: "",
  company: "",
  position: "",
  responsibilities: '',
  workDate: "",
  workEndDate: "",
};

function App() {
  const [information, setInformation] = useState({ ...Information });

  function updateInformation(e) {
    const { id, value } = e.target;

    setInformation((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  return (
    <div className="app">
      <CVForm info={information} handler={updateInformation} />
      <CVResult info={information}/>
    </div>
  );
}

export default App;
