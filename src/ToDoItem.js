import React from "react";
function ToDoItem(props) {
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

  return (
    <tr>
      <td>
        <i className={statusIcon(props.task.done)} />
      </td>
      <td>{props.task.task}</td>
      <td className={props.task.priority}>
        {props.task.priority.toUpperCase()}
      </td>
    </tr>
  );
}

export default ToDoItem;
