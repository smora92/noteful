import React, { useState, useContext } from "react";
import fetch from "node-fetch";
import { Redirect } from "react-router-dom";
import Context from "../../store/Context";
import propTypes from "prop-types";

function DeleteNote({ noteId }) {
  const { state, dispatch } = useContext(Context);
  const [deleteError, setDeleteError] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteNote = async () => {
    try {
     const deleteResponse = await fetch(`http://localhost:9090/notes/${noteId}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      );
   if (deleteResponse.status === 200) {
     const notes = state.notes.filter((note) => {
       return note.id !== noteId;
     });
     dispatch({ type: "SET_NOTES", payload: notes });
     setIsDeleted(true);
     return;

   }
   setDeleteError('Unable to delete');
    return;
    } catch(err) {
      setDeleteError('Server Error');
    }
  };

  return (
    <div>
      <button className="Delete_button" onClick={() => deleteNote()}>
        Delete Note
      </button>
      <p>{deleteError}</p>
      {isDeleted && <Redirect to="/" />}
    </div>
  );
}
DeleteNote.propTypes= {
  noteId: propTypes.string.isRequired
}
// Validate props, noteId > string

export default DeleteNote;
