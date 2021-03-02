import React from "react";

import NoteSummary from "../NoteSummary/NoteSummary";

function NoteContent({ id, name, modified, content }) {
  return (
    <div>
      <NoteSummary id={id} name={name} modified={modified} />
      <p>{content}</p>
    </div>
  );
}

export default NoteContent;
