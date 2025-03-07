import React from "react";

import NoteSummary from "../NoteSummary/NoteSummary";
import propTypes from "prop-types";

function NoteContent({ id, name, modified, content }) {
  return (
    <div>
      <NoteSummary id={id} name={name} modified={modified} />
      <p className="Note_content">{content}</p>
    </div>
  );
}

NoteContent.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  modified: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};
// String props validation
export default NoteContent;
