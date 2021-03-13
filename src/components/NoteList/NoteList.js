import React from "react";
import propTypes from "prop-types";

import NoteSummary from "../NoteSummary/NoteSummary";

function NoteList({ notes }) {
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <NoteSummary
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

NoteList.propTypes = {
  notes: propTypes.array,
};
// Props validation., notes -> aray

export default NoteList;
