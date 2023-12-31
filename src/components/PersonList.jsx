import React from "react";
import { useEffect } from "react";
import personService from "../services/personService";

function PersonList({ persons, setPersons }) {
  useEffect(() => {
    personService
      .getPersons()
      .then((res) => {
        setPersons(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <ul className="hidden">
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}

export default PersonList;
