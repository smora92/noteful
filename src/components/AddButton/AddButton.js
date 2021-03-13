import React from "react";
import { Link } from "react-router-dom";

function AddButton() {
  return (
    <div className="AddButton_wrapper">
      <Link to="/addfolder"> Add folder </Link>
    </div>
  );
}

export default AddButton;
