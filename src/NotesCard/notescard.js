import { Component } from "react";

class NotesCard extends Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {};
  }

  render() {
    const { note } = this.props;
    return (
      <div className="notes-card">
        <span>{note.title}</span>
        <span>{note.body}</span>
        <span>{note.pinnedstatus}</span>
      </div>
    );
  }
}

export default NotesCard;
