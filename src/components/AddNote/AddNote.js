import React, { Component } from "react";
import fetch from "node-fetch";
import InputError from "../ValidationError/InputError";
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
        touched: false,
      },
      folder: {
        value: "",
        touched: false,
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
    this.setState({ content: { value: content, touched: true } });
  }
  updateFolder(folder) {
    this.setState({ folder: { value: folder, touched: true } });

  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }
  validateContent() {
    const content = this.state.content.value.trim();
    if (content.length === 0) {
      return 'content is required';
    } else if (content.length < 10) {
      return '10 characters or more'
    }
  }

  validateFolder() {
    const folder = this.state.folder.value.trim();
    if (folder.length === 0) {
      return 'Please select a folder';
    }
  }


  async handleSubmit(e) {
    e.preventDefault();
    const API_BASE_URL = "http://localhost:9090";
    const endpoint = API_BASE_URL + "/notes";

    try {
      const postResponse = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name.value.trim(),
          content: this.state.content.value.trim(),
          folderId: this.state.folder.value,
        }),
      });
      const postResponseJSON = await postResponse.json();

      if (postResponseJSON.id) {
        this.setState({ postResponse: "note created successfully" });
        return;
      } else {
        this.setState({ postResponse: "Unable to create note " });
        return;
      }

    } catch (err) {
      this.setState({ postResponse: "Server Errror: Unable to create note " });
      return;
    }

  }

  render() {
    const folders = this.props.folders.map((folder) => (
      <option key={folder.id} value={folder.id}>
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
            {this.state.content.touched && (
              <InputError message={this.validateContent()} />
            )}
          </div>
          <div className="form-control">
            <label htmlFor="folderName">Note Folder</label>
            <select id="folderName" onChange={(e) => this.updateFolder(e.target.value)}>
              <option value="">Select Folder</option>
              {folders}
            </select>
            {this.state.folder.touched && (
              <InputError message={this.validateFolder()} />
            )}
          </div>
          <div className="form-control">
            <button type="submit" disabled={this.validateName() || this.validateContent() || this.validateFolder()}>
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
  folders: propTypes.array.isRequired
};
//Here validate props, type is an array
export default AddNote;
