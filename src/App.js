import React, { Component } from "react";
import { Route, Switch } from "react-router";
import MainPage from "./pages/Main/MainPage";
import NotePage from "./pages/Note/NotePage";
import FolderPage from "./pages/Folder/FolderPage";

import Header from "./components/Header/Header";
import GlobalStateProvider from "./store/GlobalStateProvider";
import AddFolderPage from "./pages/AddFolderPage/AddFolderPage";
import AddNotePage from "./pages/AddNotePage/AddNotePage";

import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary /ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStateProvider>
          <Header />
          <Switch>
            <div className="App_body">
              <ErrorBoundary>
                <Route exact path="/" component={MainPage} />
              </ErrorBoundary>
              <ErrorBoundary>
                <Route exact path="/folder/:folderId" component={FolderPage} />
              </ErrorBoundary>
              <ErrorBoundary>
                <Route exact path="/note/:noteId" component={NotePage} />
              </ErrorBoundary>
              <ErrorBoundary>
                <Route exact path="/addfolder" component={AddFolderPage} />
              </ErrorBoundary>
              <ErrorBoundary>
                <Route exact path="/addnote" component={AddNotePage} />
              </ErrorBoundary>
            </div>
          </Switch>
        </GlobalStateProvider>
      </div>
    );
  }
}

export default App;
