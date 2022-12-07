import React from "react";

function NoteItem(props) {
  return (
    <div className="bg-purple-700 my-3 py-3">
      <h1 className="text-white text-center">{props.item}</h1>
    </div>
  );
}

export default NoteItem;
