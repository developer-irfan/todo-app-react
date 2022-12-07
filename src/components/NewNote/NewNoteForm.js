import React, { useState } from "react";

function NewNoteForm(props) {
  const [note, setNote] = useState("");
  const handleInput = (e) => {
    setNote(e.target.value);
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note) {
      alert("Enter something");
    } else {
      props.notesDatas(note);
    }

    setNote(" ");
  };

  //return statement
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label htmlFor="email" className="text-gray-600 dark:text-gray-300">
          Title
        </label>
        <input
          type="text"
          name="note"
          value={note}
          onChange={handleInput}
          id="note"
          autoComplete="username"
          className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
        />
      </div>

      <button
        type="submit"
        className="relative bg-purple-700 flex rounded-md h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary- before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
      >
        <span className="relative text-base font-semibold text-white dark:text-dark">
          Add Note
        </span>
      </button>
    </form>
  );
}

export default NewNoteForm;
