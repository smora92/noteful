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
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStateProvider>
          <Header />
          <div className="App_body">
            <Switch>
              <Route exact path="/">
                <ErrorBoundary>
                  <MainPage />
                </ErrorBoundary>
              </Route>

              <Route exact path="/folder/:folderId" >
                <ErrorBoundary>
                  <FolderPage />
                </ErrorBoundary>
              </Route>

              <Route exact path="/note/:noteId" >
                <ErrorBoundary>
                  <NotePage />
                </ErrorBoundary>
              </Route>

              <Route exact path="/addfolder">
                <ErrorBoundary>
                  <AddFolderPage />
                </ErrorBoundary>
              </Route>

              <Route exact path="/addnote">
                <ErrorBoundary>
                  <AddNotePage />
                </ErrorBoundary>
              </Route>
            </Switch>
          </div>
        </GlobalStateProvider>
      </div>
    );
  }
}

export default App;
