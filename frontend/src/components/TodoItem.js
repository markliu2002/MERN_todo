import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title} {'  '} {this.props.todo.category}</p>
      </div>
    );
  }
}

export default TodoItem
