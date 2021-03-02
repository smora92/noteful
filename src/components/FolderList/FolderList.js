import React from "react";

import { Link } from "react-router-dom";

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

export default FolderList;
