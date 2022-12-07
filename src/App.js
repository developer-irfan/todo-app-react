import { Routes, Route } from "react-router-dom";
import AllNotes from "./components/AllNotes/AllNotes";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Main";

function App() {
  //return statement
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notes" element={<AllNotes />} />
      </Routes>
    </div>
  );
}

export default App;
