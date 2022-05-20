import * as React from 'react';
import './App.css';
import Header from './components/Header';
import TodoWall from './components/TodoWall';
import NewTodoForms from './components/NewTodoForms';

function App() {
  return (
    <div>
      <Header />
      <NewTodoForms />
      <TodoWall />
    </div>
  );
}

export default App;
