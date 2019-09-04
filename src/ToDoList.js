import React from "react";

import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  const taskRows = props.tasks.map(item => (
    <ToDoItem key={item.id} item={item} deleteTask={props.deleteTask} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
          <th>DELETE</th>
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
