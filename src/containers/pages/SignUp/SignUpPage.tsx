import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import './SignUpPage.css';
import { Input } from '../../../components';
import { userRegister } from '../../../modules/user/actions';

const avator = require('./avator.png');

interface State {
  username: string;
  password: string;
  confirmPassword: string;
  usernameValid: boolean;
  passwordValid: boolean;
  confirmPasswordValid: boolean;
}

class SignUpPage extends React.Component<DispatchProp<object> & RouteComponentProps<object>, State> {
  constructor(props: DispatchProp<object> & RouteComponentProps<object>) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      usernameValid: true,
      passwordValid: true,
      confirmPasswordValid: true
    };
  }

  inputValidation() {
    let state = {
        ...this.state,
        usernameValid: true,
        passwordValid: true,
        confirmPasswordValid: true,
    };

    if (this.state.username === '') {
      state.usernameValid = false;
    }
    if (this.state.password === '' || !(/^[a-zA-Z0-9]{0,12}$/.test(this.state.password))) {
      state.passwordValid = false;
    }

    if (this.state.confirmPassword === '' || this.state.confirmPassword !== this.state.password) {
      state.confirmPasswordValid = false;
    }

    if (state.usernameValid === true && state.passwordValid === true && state.confirmPasswordValid === true) {
      const { dispatch } = this.props;
      dispatch(userRegister({
        username: state.username,
        password: state.password
      }));
    }

    this.setState(state);
  }

  onChangeState = (name) => (e) => {
    this.setState({[name]: e.target.value});
  }

  render() {
    const {usernameValid, passwordValid, confirmPasswordValid} = this.state;
    return (
      <div className="sign-up">
        {/*<Header name="注册" />*/}
        <div className="avator">
          <img src={avator} />
        </div>
        <div className="sign-up-content">
          <Input placeholder="用户名" className="username" onChange={this.onChangeState('username')}/>
          {usernameValid ? '' : <p className="error-input">Please enter your username</p>}
          <Input placeholder="密码" type="password" className="password" onChange={this.onChangeState('password')}/>
          {passwordValid ? '' : <p className="error-input">Please enter valid password</p>}
          <Input
            placeholder="确认密码"
            type="password"
            className="confirm-password"
            onChange={this.onChangeState('confirmPassword')}
          />
          {confirmPasswordValid ? '' : <p className="error-input">Please confirm the password is same as above one</p>}
          {/* <Button name="注册" color="#123451" className="signup-button" />*/}
          <button className="signup-button" onClick={() => { this.inputValidation(); }}>注册</button>
        </div>
      </div>
    );
  }
}

export default connect()(SignUpPage);
