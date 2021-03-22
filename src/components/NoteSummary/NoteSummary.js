import React, { useRef, useEffect } from "react";
import moment from "moment";

import { Link } from "react-router-dom";
import DeleteNote from "../DeleteNote/DeleteNote";
import propTypes from "prop-types";

function NoteSummary({ id, name, modified }) {

  const humanFriendlyDate = moment(modified).format("Do MMM YYYY");

  return (
    <div className="Note_summary--wrapper">
      <Link to={`/note/${id}`} className="Note_summary--title">
        <h2>{name}</h2>
      </Link>
      <div className="Note_summary--body">
        <span>Date modified on {humanFriendlyDate}</span>
        <DeleteNote noteId={id} />
      </div>
    </div>
  );
}
NoteSummary.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  modified: propTypes.string,
};
// Props validate -> string
export default NoteSummary;
