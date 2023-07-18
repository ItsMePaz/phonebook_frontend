import "./app.css";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([]);
  return (
    <div className="grid h-screen place-items-center">
      <PersonList persons={persons} setPersons={setPersons} />
      <PersonForm persons={persons} setPersons={setPersons} />
    </div>
  );
}
export default App;
