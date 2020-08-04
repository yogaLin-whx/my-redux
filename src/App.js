import React from 'react';
import './App.css';
import AddItem from './component/addItem/AddItem';
import TodoItemList from './TodoItemList/TodoItemList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddItem/>
        <TodoItemList></TodoItemList>
      </header>
    </div>
  );
}

export default App;
