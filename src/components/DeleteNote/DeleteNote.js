import React, { useState, useContext, useEffect } from "react";
import fetch from "node-fetch";
import { Redirect } from "react-router-dom";
import Context from "../../store/Context";
import propTypes from "prop-types";

function DeleteNote({ noteId }) {
  const { state, dispatch } = useContext(Context);
  const [deleteError, setDeleteError] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);

  let isMounted = true;

  const deleteNote = async () => {
    try {
      const deleteResponse = await fetch(`${process.env.REACT_APP_API_BASE_URL}/notes/${noteId}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (deleteResponse.status === 204) {
        const notes = state.notes.filter((note) => {
          return note.id !== noteId;
        });

        if (isMounted) {
          dispatch({ type: "SET_NOTES", payload: notes });
          setIsDeleted(true);

        }
        return;

      }
      setDeleteError('Unable to delete');
      return;
    } catch (err) {
      setDeleteError('Server Error');
    }
  };

  useEffect(() => {
    return () => {
      isMounted = false;
    }
  }, [])

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
DeleteNote.propTypes = {
  noteId: propTypes.string.isRequired
}
// Validate props, noteId > string

export default DeleteNote;
