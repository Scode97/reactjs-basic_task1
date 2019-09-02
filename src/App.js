import React from "react";
import "./App.css";
import tasks from "./data";

import "font-awesome/css/font-awesome.min.css";
function App() {
  // const statusIcon = done => {
  //   if (done) {
  //     return <i className="fa fa-check-circle" />;
  //   } else {
  //     return <i className="fa fa-times-circle" />;
  //   }
  // };
  // calling for above
  // {/* <td>{statusIcon(tasks[0].done)}</td> */}
  //or

  const statusIcon = asis => {
    if (asis) return "fa fa-check-circle";
    return "fa fa-times-circle";
  };

  // let icon = <i className="fa fa-check-circle" />
  console.log(tasks);
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <table>
        <thead>
          <tr>
            <th>STATUS</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i className={statusIcon(tasks[0].done)} />
            </td>
            <td>{tasks[0].task}</td>
            <td className={tasks[0].priority}>
              {tasks[0].priority.toUpperCase()}
            </td>
          </tr>
          <tr>
            <td>
              <i className={statusIcon(tasks[1].done)} />
            </td>
            <td>{tasks[1].task}</td>
            <td className={tasks[1].priority}>
              {tasks[1].priority.toUpperCase()}
            </td>
          </tr>
          <tr>
            <td>
              <i className={statusIcon(tasks[2].done)} />
            </td>
            <td>{tasks[2].task}</td>
            <td className={tasks[2].priority}>
              {tasks[2].priority.toUpperCase()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
