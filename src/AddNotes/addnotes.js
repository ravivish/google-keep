import { Component } from "react";
import "./addnotes.css";
import App from "../App";

class AddNotes extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", pinnedstatus: false };
    // this.showFullBox = this.showFullBox.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  showfullbox() {
    
  }
  handleChanges = (event) => {
    if (event.target.name === "notebody") {
      this.setState({ body: event.target.value });
    } else if (event.target.name === "notetitle") {
      this.setState({ title: event.target.value });
    }
  };
  handleClick(e) {
    debugger;
    const req = new Request("http://localhost:3001/api/notes", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(this.state),
      // mode: 'no-cors'
    });
    if (this.state.title && this.state.body) {
      fetch(req)
        .then((response) => response.json())
        .then(
          (result) => {
            this.setState({title:'',body:''});
            <App />
            console.log("success")
          },
          (error) => {
            console.log("error", error);
          }
        );
    }
  }

  render() {
    return (
      <div className="add-notes">
        <input
          name="notetitle"
          className="note-title"
          onChange={this.handleChanges}
          placeholder="Title"
        />
        <input
          name="notebody"
          onClick={this.showFullBox}
          className="note-body"
          onChange={this.handleChanges}
          placeholder="Take a note..."
        />
        <button
          name="closebtn"
          onClick={this.handleClick}
          className="close-btn"
        >
          Close
        </button>
      </div>
    );
  }
}

export default AddNotes;
