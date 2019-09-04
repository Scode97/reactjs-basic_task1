import React, { Component } from "react";
import "./App.css";
import tasks from "./data";

import "font-awesome/css/font-awesome.min.css";

import ToDoList from "./ToDoList";

class App extends Component {
  state = {
    tasks: tasks
  };
  // let icon = <i className="fa fa-check-circle" />
  // const deleteTask = id => alert(`${this.item.id}`);
  deleteTask = id => {
    // filter, return all the tasks that there id is not equal to the id pressed
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  };

  // console.log(tasks);
  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <p>The number of tasks is: {tasks.length}</p>
        <ToDoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
