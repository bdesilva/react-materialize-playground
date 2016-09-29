import React from 'react';
import { browserHistory } from 'react-router';
import Fetch from 'node-fetch';
import Styles from '../../styles/main.css';
import { Row , Col, Input, Button, Icon, Card } from 'react-materialize';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      validError: '',
      validSuccess: ''
    }
  }

  async login(event) {
    //TODO: Disabling POST request till CORS issue is fixed.
    /*const res = await Fetch('http://localhost:8008/login', 
      { method: 'POST', body: {"username": this.formData.username, "password": this.formData.password},
      headers: {"Content-Type": "application/json", "Access-Control-Allow-Credentials": "true"}});*/
    event.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      console.log(`invalid state: ${this.state.validError}`);
      this.setState({validError: 'Field cannot be empty'})
    } else {
      const res = await Fetch(`http://localhost:8008/login/${this.state.username}/${this.state.password}`
      , { method: 'GET' });
      const authorized = await res.json();    
      authorized ? browserHistory.push('/main') : browserHistory.push('/');
      this.setState({username: '', password: ''});
      console.log(`username: ${this.state.username}, password: ${this.state.password}`);
      this.setState({validSuccess: 'Good job!'})
      console.log(`invalid state: ${this.state.validSuccess}`);
    }    
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Welcome to the login page!</h1>
        <div className='section'>
          <Row>
            <Col m={6} s={12}>
              <Card className='hoverable' title='Login' 
                actions={[<div key="loginButton"><Button onClick={::this.login} waves='light'>Login<Icon right>perm_identity</Icon></Button></div>]}>
                <Input validate={true} error={this.state.validError} success={this.state.validSuccess} type="text" s={12} label="Username" value={this.state.username} 
                  onChange={::this.handleUsernameChange} />
                <Input type="password" label="Password" s={12} value={this.state.password} 
                  onChange={::this.handlePasswordChange} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
