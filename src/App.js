import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

const todoData = [
  {
    task: 'Study JavaScript',
    id: 1,
    completed: false
  },
  {
    task: 'Review React Doc',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoData
    };
  }
  clear = e => {
    e.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(item => !item.completed)
    });
  };

  addItem = (e, itemTask) => {
    e.preventDefault();
    const existing = this.state.todoData.filter(item => item.task === itemTask);
    if (existing.length === 0) {
      const newItem = {
        task: itemTask,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todoData: [...this.state.todoData, newItem]
      });
    }
  };
  toggleItem = itemId => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };
  
  render() {
    return (
      <div className='container'>
        <h2>Welcome To My To do App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList 
          todoData={this.state.todoData}
          toggleItem={this.toggleItem}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default App;
