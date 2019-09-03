import React from "react";

import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  const taskRows = props.tasks.map(task => (
    <ToDoItem key={task.id} task={task} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
        </tr>
      </thead>
      <tbody>
        {/* <ToDoItem task={tasks[0]} />
          <ToDoItem task={tasks[1]} />
          <ToDoItem task={tasks[2]} /> */}
        {/* send to every todoItem an object */}
        {taskRows}
      </tbody>
    </table>
  );
}

export default ToDoList;
