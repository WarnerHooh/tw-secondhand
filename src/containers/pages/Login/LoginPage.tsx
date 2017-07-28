import * as React from 'react';

import './LoginPage.css';
import '../../../styles/common.css';

const loginImg = require('../../../styles/assets/login.png');

interface LoginProps {

}

interface LoginState {
      username: string;
      password: string;
}

class LoginPage extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
           super(props);
           this.state = {
             username: '',
             password: ''
           };
        }

    public handleSubmit() {
      alert('submit');
    }

    public handleChange(key, value) {
      this.setState({[key]: value});
    }

    render() {
      return (
            <div className="login">
                <div className="login-header">
                    <span>请登录</span>
                </div>
                <div className="login-main">
                  <img src= {loginImg} className="login-img" />
                  <input type="text" className="input" placeholder="用户名" onChange={(e) => this.handleChange('username', e.target.value)}/>
                  <input type="text" className="input" placeholder="密码"  onChange={(e) => this.handleChange('password', e.target.value)}/>
                  <button className="dis-btn" onClick={this.handleSubmit}>  登录 </button>
                  <button className="btn">  免费注册 </button>
                </div>
            </div>
       );
    }
}

export default LoginPage;
