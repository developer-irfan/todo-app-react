import { useState } from "react";
import "./App.css";
import AllNotes from "./components/AllNotes/AllNotes";
import Navbar from "./components/Navbar/Navbar";
import NewNotes from "./components/NewNote/NewNotes";

const notes = ["My Note 1", "My Note 2", "My Note 3"];

function App() {
  const [allNotes, setAllNotes] = useState(notes);

  const handleNewNote = (Note) => {
    console.log(Note);
    setAllNotes((prev) => {
      return [Note, ...prev];
    });
  };
  //return statement
  return (
    <div className="bg-white dark:bg-darker">
      <Navbar />
      <NewNotes newNote={handleNewNote} />
      <AllNotes items={allNotes} />
    </div>
  );
}

export default App;
