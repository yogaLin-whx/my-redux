import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Menu from './component/menu/Menu';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col>
            <HashRouter>
              <Menu></Menu>
            </HashRouter>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
