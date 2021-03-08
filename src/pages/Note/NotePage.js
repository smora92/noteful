import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import AddButton from "../../components/AddButton/AddButton";
import NoteContent from "../../components/NoteContent/NoteContent";
import PageContent from "../../components/PageContent/PageContent";
import SideBar from "../../components/SideBar/SideBar";
import Context from "../../store/Context";

function NotePage() {
  const { noteId } = useParams();
  const history = useHistory();

  const { state } = useContext(Context);
  const [note, setNote] = useState({});
  const [folder, setFolder] = useState({});

  const findNoteById = (noteId) => {
    const foundNote = state.notes.find((note) => {
      return note.id === noteId;
    });

    return foundNote;
  };

  const findFolderById = (folderId) => {
    const foundFolder = state.folders.find((folder) => {
      return folder.id === folderId;
    });

    return foundFolder;
  };

  useEffect(() => {
    const foundNote = findNoteById(noteId);
    const noteFolder = findFolderById(foundNote.folderId);

    setNote(foundNote);
    setFolder(noteFolder);
  }, [findNoteById, findFolderById]);

  return (
    <div>
      <SideBar>
        <button onClick={() => history.goBack()}>Go back</button>
        <span>{folder.name}</span>
      </SideBar>
      <PageContent>
        <NoteContent
          id={note.id}
          name={note.name}
          modified={note.modified}
          content={note.content}
        />
      </PageContent>
    </div>
  );
}
export default NotePage;
