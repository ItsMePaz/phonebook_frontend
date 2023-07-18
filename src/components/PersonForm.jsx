import React from "react";
import { useState } from "react";

function PersonForm({ persons, setPersons }) {
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  return (
    <section>
      <form className="flex flex-col border-solid border-2 px-[5vh] py-[10vh] font-sans">
        <h1 className="flex justify-center mb-[6vh] mt-[-5vh] font-['Alegreya'] text-3xl">
          Sign In
        </h1>
        <div>
          {" "}
          <label className="hidden">Name: </label>
          <input
            className="border-solid border-2 border-indigo-600 rounded-md p-1"
            type="text"
            value={newPerson}
            placeholder="Username"
            required
          />
        </div>
        <div>
          {" "}
          <label className="hidden">Number:</label>
          <input
            className="border-solid border-2 border-indigo-600 rounded-md p-1 mt-[3vh]"
            type="text"
            value={newNumber}
            placeholder="Password"
            required
          />
        </div>
        <button className="mt-[3vh] border-solid border-2">Log In</button>
        <p className="flex justify-center mt-[1vh] text-xs">Or</p>
        <button className=" border-solid border-2 mt-[1vh]">Sign Up</button>
      </form>
    </section>
  );
}

export default PersonForm;
