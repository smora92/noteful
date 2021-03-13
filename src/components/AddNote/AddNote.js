import React, { Component } from "react";
import fetch from "node-fetch";
import InputError from "../ValidationError/InputError";
import FolderList from "../FolderList/FolderList";
import propTypes from "prop-types";

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
      <>
        <form className="Add_note--form" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <h2>Create a new note</h2>
          </div>
          <div className="form-control">
            <label htmlFor="note-name">Note Name</label>
            <input
              id="note-name"
              type="text"
              className="note_name"
              onChange={(e) => this.updateName(e.target.value)}
            />
            {this.state.name.touched && (
              <InputError message={this.validateName()} />
            )}
          </div>

          <div className="form-control">
            <label htmlFor="note-content">Note Content</label>
            <textarea
              id="note-content"
              onChange={(e) => this.updateContent(e.target.value)}
            ></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="folderName">Note Folder</label>
            <select id="folderName" onChange={(e) => this.updateFolder(e)}>
              <option value="Important">Select Folder</option>
              {folders}
            </select>
          </div>
          <div className="form-control">
            <button type="submit" disabled={this.validateName()}>
              AddNote
            </button>
          </div>
          <p>{this.state.postResponse}</p>
        </form>
      </>
    );
  }
}
AddNote.propTypes = {
  folders: propTypes.array,
};
//Here validate props, type is an array
export default AddNote;
