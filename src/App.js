
import './App.css';
import { HashRouter } from 'react-router-dom';
import ItemMenu from './component/menu/ItemMenu';
import 'antd/dist/antd.css';
import React from 'react';
import { Row, Col,Spin } from 'antd';
import { connect } from "react-redux";

class App extends React.Component{
  render() {
    return (
      <Spin  spinning={this.props.loading}>
          <Row>
            <Col span={12} offset={6}>
              <HashRouter>
                <ItemMenu ></ItemMenu>
              </HashRouter>
            </Col>
          </Row>
      </Spin>
    );
  }

}

const mapStateToProps = state => {
  return { loading:state.loadingReducer.loading };
}


export default connect(mapStateToProps)(App);
