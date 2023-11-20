// == Import
import React from "react";
import Form from "../Form";
import Counter from "../Counter";
import List from "../List";
import data from "../../data/tasks";

import "../../styles/index.scss";

// == Composant

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      newTask: event.target.value,
    });
  }

  render() {
    return (
      <div className="app">
        <Form
          onChangeInput={this.handleInputChange}
          taskInput={this.state.newTask}
        />
        <Counter />
        <List tasksList={data} />
      </div>
    );
  }
}

// == Export
export default App;
