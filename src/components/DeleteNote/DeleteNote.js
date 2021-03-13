import React, { useState, useContext } from "react";
import fetch from "node-fetch";
import { Redirect } from "react-router-dom";
import Context from "../../store/Context";

function DeleteNote({ noteId }) {
  const { state, dispatch } = useContext(Context);
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteNote = async () => {
    const deleteResponse = await fetch(
      `http://localhost:9090/notes/${noteId}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const notes = state.notes.filter((note) => {
      return note.id !== noteId;
    });

    dispatch({ type: "SET_NOTES", payload: notes });
    setIsDeleted(true);
  };

  return (
    <div>
      <button className="Delete_button" onClick={() => deleteNote()}>
        Delete Note
      </button>
      {isDeleted && <Redirect to="/" />}
    </div>
  );
}

// Validate props, noteId > string

export default DeleteNote;
