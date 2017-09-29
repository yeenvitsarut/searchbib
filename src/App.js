import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav'
import { Content } from './Content'
import {Row, Col} from 'antd'

class App extends Component {
  render() {
    return (
      <div className="background-body">
         <Nav />
       <Row>
       <Col span={3}></Col>
       <Col span={18}>
        <Content />
       </Col>
       <Col span={3}></Col>
       </Row>
      </div>
    );
  }
}

export default App;
