import React from "react";
import "./App.css";
import tasks from "./data";

import "font-awesome/css/font-awesome.min.css";

import ToDoList from "./ToDoList";

function App() {
  // let icon = <i className="fa fa-check-circle" />

  console.log(tasks);

  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <p>The number of tasks is: {tasks.length}</p>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
