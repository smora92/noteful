import React, { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import MainPage from "./pages/Main/MainPage";
import NotePage from "./pages/Note/NotePage";
import FolderPage from "./pages/Folder/FolderPage";

import store from "./store";
import Header from "./components/Header/Header";
import GlobalStateProvider from "./store/GlobalStateProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStateProvider>
          <Header className="App__header" />
          <Switch className="App-main">
            <Route exact path="/" component={MainPage} />
            <Route exact path="/folder/:folderId" component={FolderPage} />
            <Route exact path="/note/:noteId" component={NotePage} />
          </Switch>
        </GlobalStateProvider>
      </div>
    );
  }
}

export default App;
