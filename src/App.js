import React from 'react';
import './App.css';
import AddItem from './component/addItem/AddItem';
import TodoItemList from './TodoItemList/TodoItemList';
import DoneItem from './component/doneItem/DoneItem';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddItem/>
        <TodoItemList></TodoItemList>
        <DoneItem></DoneItem>
      </header>
    </div>
  );
}

export default App;
