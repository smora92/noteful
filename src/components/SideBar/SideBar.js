import React from "react";
import propTypes from "prop-types";

function SideBar({ children }) {
  return <div className="App_sidebar">{children}</div>;
}

SideBar.propTypes = {
  children: propTypes.node.isRequired,
};
// children -> ReactNode
export default SideBar;
