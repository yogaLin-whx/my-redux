import React from 'react';
import './App.css';
import AddItem from './component/addItem/AddItem';
import DoneItem from './component/doneItem/DoneItem';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './component/menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <HashRouter>
          <Menu></Menu>
          <Route path="/done" component={DoneItem}>
          </Route>
          <Route path="/item" component={AddItem}>
          </Route>


        </HashRouter>


      </header>
    </div>
  );
}

export default App;
