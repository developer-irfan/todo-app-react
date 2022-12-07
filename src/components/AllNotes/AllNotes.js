import React from "react";
import NoteItem from "./NoteItem";

function AllNotes() {
  const getNotes = JSON.parse(localStorage.getItem("notes"));

  //return
  return (
    <div className="py-8 mx-[40px] xl:mx-[350px] pt-[100px] xl:pt-[120px]">
      {getNotes.map((item, index) => (
        <NoteItem item={item} key={index} />
      ))}
    </div>
  );
}

export default AllNotes;
