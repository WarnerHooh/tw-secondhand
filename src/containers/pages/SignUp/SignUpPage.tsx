import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import './SignUpPage.css';

const avator = require('./avator.png');

interface State {
  username: string;
  password: string;
  confirmPassword: string;
  usernameValid: boolean;
  passwordValid: boolean;
  confirmPasswordValid: boolean;
}

class SignUpPage extends React.Component<DispatchProp<object> & RouteComponentProps<object>, State>{
  constructor(props:any) {
    super(props);
    this.state={
      username: '',
      password: '',
      confirmPassword: '',
      usernameValid: true,
      passwordValid: true,
      confirmPasswordValid: true
    }
  }

  inputValidation() {
    let state = {
        ...this.state,
        usernameValid: true,
        passwordValid: true,
        confirmPasswordValid: true,
    };

    if (this.state.username == '') {
      state.usernameValid = false;
    }
    if (this.state.password == '' || !(/^[a-zA-Z0-9]{0,12}$/.test(this.state.password))) {
      state.passwordValid = false;
    }

    if (this.state.confirmPassword == '' || this.state.confirmPassword != this.state.password) {
      state.confirmPasswordValid = false;
    }

    if(state.usernameValid == true && state.passwordValid == true && state.confirmPasswordValid == true) {
      alert("Perfect, we will create an account for you");
    }

    this.setState(state);
  }

  changeState(stateType, value) {
    this.setState({[stateType]: value});
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
          <input placeholder="用户名" className="username" onChange={(e)=>{this.changeState('username', e.target.value);}}/>
          {usernameValid ? '' : <p className="error-input">Please enter your username</p>}
          <input placeholder="密码" className="password" onChange={(e)=>{this.changeState('password', e.target.value);}}/>
          {passwordValid ? '' : <p className="error-input">Please enter valid password</p>}
          <input placeholder="确认密码" className="confirm-password" onChange={(e)=>{this.changeState('confirmPassword', e.target.value);}}/>
          {confirmPasswordValid ? '' : <p className="error-input">Please confirm the password is same as above one</p>}
          {/* <Button name="注册" color="#123451" className="signup-button" />*/}
          <button className="signup-button" onClick={()=>{this.inputValidation();}}>注册</button>
        </div>
      </div>
    )
  }
}

export default connect()(SignUpPage);
