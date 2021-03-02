import React from "react";

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

export default NoteList;
