import React, { useContext } from "react";
import AddNote from "../../components/AddNote/AddNote";
import PageContent from "../../components/PageContent/PageContent";
import Context from "../../store/Context";

function AddNotePage() {
  const { state, dispatch } = useContext(Context);
  console.log(state);
  return (
    <PageContent>
      <AddNote folders={state.folders} />
    </PageContent>
  );
}

export default AddNotePage;
