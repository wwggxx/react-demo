import React, { Component } from 'react';
import { Button } from 'antd';
import '@/static/styles/login.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="login">
        <div className="tx">
          <div>
            <span>
              <img src={require('@/static/images/logo.svg')} alt="" />
            </span>
          </div>
        </div>
        <div className="login_form">
          <div className="login_row">
            <svg><path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"></path></svg>
            <input type="text" className="login_input" placeholder="请输入账号"/>
          </div>
          <div className="login_row">
            <svg><path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"></path></svg>
            <input type="text" className="login_input" placeholder="请输入密码"/>
          </div>
        </div>
        <Button type="primary"></Button>
      </div>
    );
  }
}

export default App;
