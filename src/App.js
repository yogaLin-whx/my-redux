
import './App.css';
import { HashRouter } from 'react-router-dom';
import Menu from './component/menu/Menu';
import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col,Spin } from 'antd';
import { connect } from "react-redux";
class App extends React.Component{
  render() {
    return (
      <Spin  spinning={this.props.loading}>
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
      </Spin>
    );
  }

}

const mapStateToProps = state => {
  return { loading:state.loadingReducer.loading };
}


export default connect(mapStateToProps)(App);
