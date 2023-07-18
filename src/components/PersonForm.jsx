import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function PersonForm({ persons, setPersons }) {
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  return (
    <motion.section
      initial={{ y: "1000px" }}
      animate={{ y: "0" }}
      /*     transition={{ duration: 0.3 }} */
    >
      <form className="flex flex-col border-solid border-2 px-[5vh] rounded-xl border-[#6A8D92] py-[10vh] font-sans bg-[#4B4E6D]">
        <h1 className="flex justify-center mb-[6vh] mt-[-5vh] font-['Alegreya'] text-3xl bg-[#4B4E6D] text-[#D5E2D0]">
          Log In
        </h1>
        <div className="bg-[#4B4E6D]">
          {" "}
          <label className="hidden">Name: </label>
          <input
            className="border-solid border-2 border-[#6A8D92] rounded-md p-1 bg-[#4B4E6D]"
            type="text"
            value={newPerson}
            placeholder="Username"
            required
          />
        </div>
        <div className="bg-[#4B4E6D]">
          {" "}
          <label className="hidden">Number:</label>
          <input
            className="border-solid border-2 border-[#6A8D92] rounded-md p-1 mt-[3vh] bg-[#4B4E6D] "
            type="text"
            value={newNumber}
            placeholder="Password"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: [null, 1.2, 1] }}
          transition={{ duration: 0.3 }}
          className="mt-[3vh] border-solid border-2 border-[#6A8D92] bg-[#221B22] rounded-md font-medium text-[#D5E2D0]"
        >
          Log In
        </motion.button>
        <p className="flex justify-center mt-[1vh] text-xs bg-[#4B4E6D]">Or</p>
        <motion.div
          whileHover={{ scale: [null, 1.2, 1] }}
          transition={{ duration: 0.3 }}
          className=" border-solid border-2 mt-[1vh] text-center border-[#6A8D92] bg-[#221B22] rounded-md font-medium text-[#D5E2D0]"
        >
          Sign Up
        </motion.div>
      </form>
    </motion.section>
  );
}

export default PersonForm;
