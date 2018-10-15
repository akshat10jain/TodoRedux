import React, { Component } from 'react';
import TaskHeader from './component/taskheader/index'
import TaskList from './component/taskheader/taskList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Heloo</h1>
      <TaskHeader/>
      <TaskList/> 
        
      </div>
    );
  }
}

export default App;
