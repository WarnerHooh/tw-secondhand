import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as modalAction from '../../../modules/modal/action';
import { v4 as uuid } from 'uuid';
import { Input, Button } from '../../../components';
import { userLogin } from '../../../modules/user/actions';
import * as D from '../../../definitions';

import './LoginPage.css';
import '../../../styles/common.css';

const loginImg = require('../../../styles/assets/login.png');

interface LoginProps {
  dispatch?: Redux.Dispatch<object>;
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
      const { dispatch } = this.props;
      dispatch(userLogin({
        username: name,
        password: pass
      }));
      dispatch(modalAction.dismiss());
    }

    public handleSignUp = () => {
      const {dispatch} = this.props;
      dispatch(modalAction.show({id: uuid(), anchor: '#signUpModal'}));
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
                  <Input type="text" className="input" placeholder="用户名" onChange={this.handleChange('username')}/>
                  <Input type="password" className="input" placeholder="密码"  onChange={this.handleChange('password')}/>
                  <Button
                      className="dis-btn"
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
       );
    }
}

export default connect(
  (state: D.RootState<object>) => ({
    user: state.user,
  })
)(LoginPage);
