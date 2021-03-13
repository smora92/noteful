import React from "react";
import { useHistory } from "react-router-dom";
import AddFolder from "../../components/AddFolder/AddFolder";
import PageContent from "../../components/PageContent/PageContent";
import SideBar from "../../components/SideBar/SideBar";

function AddFolderPage() {
  const history = useHistory();
  return (
    <>
      <SideBar>
        <button className="Back_button" onClick={() => history.goBack()}>
          Go back
        </button>
      </SideBar>
      <PageContent>
        <AddFolder />
      </PageContent>
    </>
  );
}

export default AddFolderPage;
