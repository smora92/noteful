import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AddNote from "../../components/AddNote/AddNote";
import PageContent from "../../components/PageContent/PageContent";
import Context from "../../store/Context";
import PropTypes from "prop-types";
import SideBar from "../../components/SideBar/SideBar";

function AddNotePage() {
  const { state, dispatch } = useContext(Context);
  const history = useHistory();
  return (
    <>
      <SideBar>
        <button className="Back_button" onClick={() => history.goBack()}>
          Go back
        </button>
      </SideBar>
      <PageContent>
        <AddNote folders={state.folders} />
      </PageContent>
    </>
  );
}

// AddNote.prototype = {
//   note: PropTypes.string,
// };

export default AddNotePage;
