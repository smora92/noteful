import React from "react";
import propTypes from "prop-types";

function PageContent({ children }) {
  return <div className="App_content">{children}</div>;
}

PageContent.propTypes = {
  children: propTypes.node,
};
// Children -> React.ReactNode

export default PageContent;
