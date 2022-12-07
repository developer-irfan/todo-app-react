import React from "react";
import NoteItem from "./NoteItem";

function AllNotes(props) {
  console.log(props.items);
  return (
    <div className="my-8 xl:mx-[350px]">
      {props.items.map((item, index) => (
        <NoteItem item={item} key={index} />
      ))}
    </div>
  );
}

export default AllNotes;
