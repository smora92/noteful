import React from "react";

import { Link } from "react-router-dom";
import propTypes from "prop-types";

function FolderList({ folders, activeFolderId }) {
  return (
    <ul>
      {folders.map((folder) => (
        <li key={folder.id}>
          {" "}
          <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          {folder.id === activeFolderId ? "**" : ""}{" "}
        </li>
      ))}
    </ul>
  );
}
FolderList.propTypes = {
  folders: propTypes.array.isRequired,
  activeFolderId: propTypes.string.isRequired,
};
// Props, folders = Array, activeFolderId -> String

export default FolderList;
