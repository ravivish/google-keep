import "./App.css";
import { Component } from "react";
import AddNotes from "./AddNotes/addnotes";
import NotesCard from "./NotesCard/notescard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      noteslist: [],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3001/api/notes`)
      .then((response) => response.json())
      .then(
        (result) =>
          this.setState({
            isLoaded: true,
            noteslist: result,
          }),
        (error) => {
          return this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, noteslist } = this.state;
    if (error) {
      <section className="App">Error Occured</section>
    } else if (!isLoaded) {
      return <section>Loading</section>
    } else {
      return (
        <main className="App">
          <AddNotes />
          {noteslist.forEach((element) =>
          {
            <NotesCard
              title={element.title}
              body={element.body}
              isPinned={element.pinnedstatus}
            />
          })}          
        </main>
      );
    }
  }
}

export default App;
