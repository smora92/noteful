import React, { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import MainPage from "./pages/Main/MainPage";
import NotePage from "./pages/Note/NotePage";
import FolderPage from "./pages/Folder/FolderPage";

import Header from "./components/Header/Header";
import GlobalStateProvider from "./store/GlobalStateProvider";
import AddFolderPage from "./pages/AddFolderPage/AddFolderPage";
import AddNotePage from "./pages/AddNotePage/AddNotePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStateProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/folder/:folderId" component={FolderPage} />
            <Route exact path="/note/:noteId" component={NotePage} />
            <Route exact path="/addfolder" component={AddFolderPage} />
            <Route exact path="/addnote" component={AddNotePage} />
          </Switch>
        </GlobalStateProvider>
      </div>
    );
  }
}

export default App;
