import * as React from 'react';
import './App.css';
import Header from './components/Header';
import TodoTable from './components/TodoTable';
import NewTodoForms from './components/NewTodoForms';

function App() {
  return (
    <div>
      <Header />
      <NewTodoForms />
      <TodoTable />
    </div>
  );
}

export default App;
