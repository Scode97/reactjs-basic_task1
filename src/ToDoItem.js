import React, { Component } from "react";
class ToDoItem extends Component {
  state = {
    done: this.props.item.done
  };

  item = this.props.item;
  // statusIcon = done => {
  //   if (done) return "fa fa-check-circle";
  //   return "fa fa-times-circle";
  // };
  statusIcon = () => {
    if (this.state.done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };

  toggleStatus = () => {
    this.setState({
      done: !this.state.done
    });
    this.item.done = !this.item.done;
    console.log(this.item);
  };
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
  // deletetask = id => alert(`${this.item.id}`);
  render() {
    const item = this.props.item;
    return (
      <tr>
        <td>
          <i className={this.statusIcon()} onClick={this.toggleStatus} />
        </td>
        <td>{this.item.task}</td>
        <td className={this.item.priority}>
          {this.item.priority.toUpperCase()}
        </td>
        <td>
          <i
            className="fa fa-times"
            onClick={() => this.props.deleteTask(item.id)}
          />
        </td>
      </tr>
    );
  }
}

export default ToDoItem;
