import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App_header">
      <h1 className="App_title">
        <Link to="/"> Noteful </Link>
      </h1>
    </header>
  );
}

export default Header;
