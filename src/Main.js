import { useState } from "react";
import NewNotes from "./components/NewNote/NewNotes";

const notes = ["Buy Bag", "Withdraw cash", "Shopping"];

function Main() {
  const [allNotes, setAllNotes] = useState(notes);

  //storing our all notes to localstorage
  localStorage.setItem("notes", JSON.stringify(allNotes));

  const handleNewNote = (Note) => {
    setAllNotes((prev) => {
      return [Note, ...prev];
    });
  };
  //return statement
  return (
    <div className="bg-white dark:bg-darker">
      <NewNotes newNote={handleNewNote} />
    </div>
  );
}

export default Main;
