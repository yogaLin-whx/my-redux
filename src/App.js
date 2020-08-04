import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Menu from './component/menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Menu></Menu>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
