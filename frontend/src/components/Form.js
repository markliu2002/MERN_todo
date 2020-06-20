import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      category: ''
    }
  }
  
  // handleNameChange function to set the state of the AddExpense component. Changes the 'name' key to the value of the input element
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    });
  }

  submitHandler = (e) => {
    // e.preventDefault();
    alert(`New Expense Added: ${this.state.title} ${this.state.category}`)
    axios.post('http://localhost:5000/todos', this.state) // This returns a promise , so we can use the .then() syntax. Only after the post is done, then, it will have the POSTED alert
    .then(() => {
      alert('POSTING COMPLETE'); // This never runs for some reason
      this.setState({
        title: '',
        category: ''
      });
      this.props.getTodos(); 
    })
    .catch(() => {
      alert('ERROR POSTING');
    })

    // Changed the order of this and this.props.getTodos() and it fixed the problem where you would have to refresh to get the todo
    // this.setState({
      // title: '',
      // category: ''
    // });
    // After the todo has been posted to the database, now we gotta call getTodos() to actually update the todos to see the new one that was added

    // This should be at the end   
    // this.props.getTodos(); 
  }


  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>

          <label>Title:</label> 
          <div>
            <input // Input for expense name
            type="text"
            title="todo"
            placeholder="Add Todo..."
            value={this.state.title} // Sets value to this.state.title (initially is '')
            onChange={this.handleTitleChange} // React ships with a number of synthetic events that work across all browsers. "onChange" will capture any changes to our input box. need to add an onChange handler and update the state b/c when we start typing in the textbox, the title in the state is going to have whatever we type inside of it.
            />
          </div>

          <label>Category:</label> 
          <div>
            <input // Input for expense name
            type="text"
            title="category"
            placeholder="Add Category..."
            value={this.state.category} // Sets value to this.state.category (initially is '')
            onChange={this.handleCategoryChange} // React ships with a number of synthetic events that work across all browsers. "onChange" will capture any changes to our input box. need to add an onChange handler and update the state b/c when we start typing in the textbox, the title in the state is going to have whatever we type inside of it.
            />
          </div>

          <div>
            <button // Input for the submit button
            type="submit" 
            value="Submit"
            >Submit</button>
          </div>

        </form>
      </div>
    )
  }
}

export default Form
