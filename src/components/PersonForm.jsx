import React from "react";
import { useState } from "react";

function PersonForm({ persons, setPersons }) {
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  return (
    <form>
      <label>Name: </label>
      <input
        className="border-solid border-2 border-indigo-600"
        type="text"
        value={newPerson}
      />
      <label>Number:</label>
      <input type="text" value={newNumber} />
    </form>
  );
}

export default PersonForm;
