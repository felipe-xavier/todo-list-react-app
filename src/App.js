import './App.css';
import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";
import {v4 as uuid} from 'uuid';
import Todos from "./components/todos/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/todos/AddTodo";
import About from "./components/about/About";


class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}));
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      }
    );
  }

  deleteTodo = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/{$id}').then(res =>
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      })
    );

  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => {
        const new_todo = {
          id: uuid(),
          title,
          completed: false
        }
        console.log(res.data);
        this.setState({todos: [new_todo, ...this.state.todos]});
      });
      // .then(res => this.setState({todos: [res.data, ...this.state.todos]}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo
                  addTodo={this.addTodo}
                />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )}/>

            <Route path='/about' component={About}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;

