import React from "react";

import { Link } from "react-router-dom";
import FolderPage from "../../pages/Folder/FolderPage";
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
  folders: propTypes.array,
  activeFolderId: propTypes.string,
};
// Props, folders = Array, activeFolderId -> String

export default FolderList;
