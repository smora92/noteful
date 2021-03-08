import React, { Component } from "react";
import fetch from "node-fetch";
import InputError from "../ValidationError/InputError";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false,
      },
      content: {
        value: "",
      },
      folder: {
        value: "",
      },
      postResponse: "",
    };
  }

  updateName(value) {
    this.setState({
      name: {
        value,
        touched: true,
      },
    });
  }
  updateContent(content) {
    this.setState({ content: { value: content } });
  }
  updateFolder(folder) {
    console.log("f", folder.target.value);
    this.setState({ folder: { value: folder } });
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const API_BASE_URL = "http://localhost:9090";
    const endpoint = API_BASE_URL + "/notes";
    const postResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: this.state.name.value.trim() }),
    });
    const postResponseJSON = await postResponse.json();

    if (postResponseJSON.id) {
      this.setState({ postResponse: "note created successfully" });
      return;
    }

    this.setState({ postResponse: "Unable to create note " });
  }

  render() {
    const folders = this.props.folders.map((folder) => (
      <option key={folder.id} value={folder.name}>
        {folder.name}
      </option>
    ));

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              className="note_name"
              onChange={(e) => this.updateName(e.target.value)}
            />
          </div>

          <div>
            <textarea
              onChange={(e) => this.updateContent(e.target.value)}
            ></textarea>
          </div>
          {this.state.name.touched && (
            <InputError message={this.validateName()} />
          )}

          <label htmlFor="folderName">
            <select onChange={(e) => this.updateFolder(e)}>
              <option value="Important">Select Folder</option>
              {folders}
            </select>
          </label>
          <button type="submit" disabled={this.validateName()}>
            AddNote
          </button>
          <p>{this.state.postResponse}</p>
        </form>
      </div>
    );
  }
}
export default AddNote;
