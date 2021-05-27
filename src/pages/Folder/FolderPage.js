import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import AddButton from "../../components/AddButton/AddButton";

import FolderList from "../../components/FolderList/FolderList";
import NoteList from "../../components/NoteList/NoteList";
import PageContent from "../../components/PageContent/PageContent";
import SideBar from "../../components/SideBar/SideBar";
import Context from "../../store/Context";
import fetchData from "../../utilities/fetch";

function FolderPage() {
  const { state, dispatch } = useContext(Context);
  const { folderId } = useParams();

  const filterNote = (notes, folderId) => {
    const folderNotes = notes.filter((note) => {
      return note.folderId === folderId;
    });

    return folderNotes;
  };

  const fetchFolders = async () => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const folderEndpoint = API_BASE_URL + "/folders";
    const folders = await fetchData(folderEndpoint);

    dispatch({ type: "SET_FOLDERS", payload: folders });
  };

  const fetchNotes = async () => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const notesEndpoint = API_BASE_URL + "/notes";

    const notes = await fetchData(notesEndpoint);
    const filteredNotes = filterNote(notes, folderId);

    dispatch({ type: "SET_NOTES", payload: filteredNotes });
  };

  useEffect(() => {
    fetchFolders();
    fetchNotes();
  }, [folderId]);

  return (
    <>
      <SideBar>
        <FolderList folders={state.folders} activeFolderId={folderId} />
        <AddButton />
      </SideBar>
      <PageContent>
        <NoteList notes={state.notes} />
        <Link className="Add_note--link" to="/addnote">
          Add Note
        </Link>
      </PageContent>
    </>
  );
}
export default FolderPage;
