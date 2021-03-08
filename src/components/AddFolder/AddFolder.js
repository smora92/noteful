import React, { Component } from "react";
import fetch from "node-fetch";

import InputError from "../ValidationError/InputError";

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderName: {
        value: "",
        touched: false,
      },
      postResponse: "",
    };
  }

  updateFolderName(value) {
    this.setState({
      folderName: {
        value,
        touched: true,
      },
    });
  }

  validateFolderName() {
    const folderName = this.state.folderName.value;

    if (folderName.length <= 2) {
      return "Folder name must be greater than 2";
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const API_BASE_URL = "http://localhost:9090";
    const endpoint = API_BASE_URL + "/folders";
    const postResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: this.state.folderName.value.trim() }),
    });
    const postResponseJSON = await postResponse.json();

    if (postResponseJSON.id) {
      this.setState({ postResponse: "Folder created successfully" });
      return;
    }

    this.setState({ postResponse: "Unable to create folder " });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              onChange={(e) => this.updateFolderName(e.target.value)}
            />
            {this.state.folderName.touched && (
              <InputError message={this.validateFolderName()} />
            )}
          </div>
          <div>
            <button type="submit" disabled={this.validateFolderName()}>
              Add Folder
            </button>
            <p>{this.state.postResponse}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default AddFolder;
