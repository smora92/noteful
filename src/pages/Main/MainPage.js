import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../utilities/fetch";

import AddButton from "../../components/AddButton/AddButton";
import FolderList from "../../components/FolderList/FolderList";
import NoteList from "../../components/NoteList/NoteList";
import PageContent from "../../components/PageContent/PageContent";
import SideBar from "../../components/SideBar/SideBar";

import Context from "../../store/Context";

function MainPage() {
  const { state, dispatch } = useContext(Context);

  const fetchNoteAndFolders = async () => {
    const API_BASE_URL = "http://localhost:9090";
    const endpoints = { notes: "/notes", folders: "/folders" };

    const noteEndpoint = API_BASE_URL + endpoints.notes;
    const folderEndpoint = API_BASE_URL + endpoints.folders;

    const notes = await fetchData(noteEndpoint);
    const folders = await fetchData(folderEndpoint);

    if (!notes.error) {
      dispatch({ type: "SET_NOTES", payload: notes });
    }

    if (!folders.error) {
      dispatch({ type: "SET_FOLDERS", payload: folders });
    }
  };

  useEffect(() => {
    fetchNoteAndFolders();
  }, []);
  return (
    <>
      <SideBar>
        <FolderList folders={state.folders} />
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
export default MainPage;
