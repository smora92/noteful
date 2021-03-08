import React from "react";
import moment from "moment";

import { Link } from "react-router-dom";
import DeleteNote from "../DeleteNote/DeleteNote";

function NoteSummary({ id, name, modified }) {
  const humanFriendlyDate = moment(modified).format("Do MMM YYYY");

  return (
    <div>
      <Link to={`/note/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div>
        <span>Date modified on {humanFriendlyDate}</span>
        <DeleteNote noteId={id} />
      </div>
    </div>
  );
}

export default NoteSummary;
