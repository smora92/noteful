import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import AddNote from "../../components/AddNote/AddNote";
import FolderList from "../../components/FolderList/FolderList";
import NoteList from "../../components/NoteList/NoteList";
import PageContent from "../../components/PageContent/PageContent";
import SideBar from "../../components/SideBar/SideBar";
import Context from "../../store/Context";
import fetchData from "../../utilities/fetch";

function FolderPage() {
  const { state, dispatch } = useContext(Context);
  const [notes, setNotes] = useState([]);
  const { folderId } = useParams();

  const filterNote = (folderId) => {
    console.log("running with ", state.notes);
    const folderNotes = state.notes.filter((note) => {
      return note.folderId === folderId;
    });

    return folderNotes;
  };

  // const fetchNotes = async () => {
  //   const API_BASE_URL = "http://localhost:9090";

  //   const notes = await fetchData(notesEndpoint);

  //   if (!notes.error) {
  //     dispatch({ type: "SET_NOTES", payload: notes });
  //     const folderIdNotesOnly = filterNote(folderId);
  //     setNotes(folderIdNotesOnly);
  //   }
  // };

  const fetchFolders = async () => {
    const API_BASE_URL = "http://localhost:9090";
    const folderEndpoint = API_BASE_URL + "/folders";
    const folders = await fetchData(folderEndpoint);

    dispatch({ type: "SET_FOLDERS", payload: folders });
  };

  const fetchNotes = async () => {
    const API_BASE_URL = "http://localhost:9090";
    const notesEndpoint = API_BASE_URL + "/notes";

    const notes = await fetchData(notesEndpoint);

    dispatch({ type: "SET_NOTES", payload: notes });
  };

  useEffect(() => {
    console.log("geting here");
    fetchFolders();
    fetchNotes();
  }, []);

  return (
    <div>
      <SideBar>
        <FolderList folders={state.folders} activeFolderId={folderId} />
        {/* <AddButton /> */}
      </SideBar>
      <PageContent>
        <NoteList notes={state.notes} />
        {/* <AddNote /> */}
      </PageContent>
    </div>
  );
}
export default FolderPage;
