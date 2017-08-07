import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as modalAction from '../../../modules/modal/action';
import { Input, Button } from '../../../components';
import { userLogin } from '../../../modules/user/actions';
import * as D from '../../../definitions';

import './LoginPage.css';

const loginImg = require('../../../styles/assets/login.png');

interface LoginProps {
  dispatch?: Redux.Dispatch<object>;
  referer?: string;
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

    public handleLogin = (name, pass) => () => {
      const { dispatch, referer } = this.props;
      dispatch(userLogin(
        {
          username: name,
          password: pass
        },
        {
          referer: referer
        })
      );
    }

    public handleSignUp = () => {
      const {dispatch} = this.props;
      dispatch(modalAction.show({anchor: '#signUpModal'}));
    }

    public handleChange = (key) => (e) => {
      this.setState({[key]: e.target.value});
    }

    render() {
      return (
            <div className="login">
                <div className="login-header">
                    <h3>请登录</h3>
                </div>
                <div className="login-main">
                  <img src= {loginImg} className="login-img" />
                  <div className="login-content">
                  <Input type="text" className="input" placeholder="用户名" onChange={this.handleChange('username')}/>
                  <Input type="password" className="input" placeholder="密码"  onChange={this.handleChange('password')}/>
                  <Button
                      className="btn"
                      onClick={this.handleLogin(this.state.username, this.state.password)}
                      text="登录"
                  />
                  <Button
                      className="btn"
                      onClick={this.handleSignUp}
                      text="免费注册"
                  />
                  </div>
                </div>
            </div>
       );
    }
}

export default connect(
  (state: D.RootState<object>) => ({
    user: state.user,
  })
)(LoginPage);
