// == Import
import React from "react";
import Form from "../Form";
import Counter from "../Counter";
import List from "../List";
import tasksData from "../../data/tasks";

import "../../styles/index.scss";

// == Composant

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasksData,
      newTaskText: "",
    };

    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
    this.handleTaskFormSubmit = this.handleTaskFormSubmit.bind(this);
    this.handleTaskStatusChange = this.handleTaskStatusChange.bind(this);
  }

  handleTaskInputChange(event) {
    this.setState({
      newTaskText: event.target.value,
    });
  }

  handleTaskFormSubmit(event) {
    event.preventDefault();

    const { newTaskText, tasks } = this.state;

    // on veut ajouter une task au tableau tasks
    // on construit un objet task => création d'un id

    // on veut recuperer l'id le plus grand du tableau tasks

    const ids = tasks.map((task) => task.id);
    const maxId = Math.max(...ids);
    const newId = maxId + 1;
    // on crée une nouvelle tache
    const newTask = {
      id: newId,
      label: newTaskText,
      done: false,
    };
    // je modifie mon state

    this.setState({
      tasks: [...tasksData, newTask],
      newTaskText: "",
    });
  }

  handleTaskStatusChange(taskIdChecked) {
    const { tasks } = this.state;

    const newTasks = tasks.map((task) => {
      if (task.id === taskIdChecked) {
        return {
          ...task,
          done: !task.done,
        };
      } else {
        return task;
      }
    });

    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    const { newTaskText, tasks } = this.state;

    return (
      <div className="app">
        <Form
          onChangeInput={this.handleTaskInputChange}
          newTaskText={newTaskText}
          onSubmitForm={this.handleTaskFormSubmit}
        />
        <Counter nbOfOnGoingTasks={tasks.filter((task) => !task.done).length} />
        <List
          tasksList={tasks}
          onTaskStatusChange={this.handleTaskStatusChange}
        />
      </div>
    );
  }
}

// == Export
export default App;
