import React from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import axios from 'axios'
import Todos from './components/Todos';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  componentDidMount = () => {
    this.getTodos();
  }

  getTodos = () => {
    axios.get('http://localhost:5000/todos')
    .then((response) => {
      alert('DATA HAS BEEN RETRIEVED');
      const data = response.data;
      this.setState({todos: data})
      console.log(response.data);
    })
    .catch(()=>{
      alert('ERROR RETRIEVING DATA');
    })
  }

  render() {
    return (
      <div className="App">
        <Form getTodos={this.getTodos}/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
