import React from 'react';
import { browserHistory } from 'react-router';
import Fetch from 'node-fetch';
import Styles from '../../styles/main.css';
import { Row , Col, Input, Button, Icon, Card } from 'react-materialize';

export default class Login extends React.Component {
  constructor() {
    super();
    this.formData = {};
  }

  async login() {
    //TODO: Disabling POST request till CORS issue is fixed.
    /*const res = await Fetch('http://localhost:8008/login', 
      { method: 'POST', body: {"username": this.formData.username, "password": this.formData.password},
      headers: {"Content-Type": "application/json", "Access-Control-Allow-Credentials": "true"}});*/
    const res = await Fetch(`http://localhost:8008/login/${this.formData.username}/${this.formData.password}`
      , { method: 'GET' });
    const json = await res.json();
    console.dir(json);
    browserHistory.push('/public/main');
  }

  render() {
    return (
      <div className={Styles.contentBody}>
        <h1>Welcome to the login page!</h1>
        <div className='section'>
          <Row>
            <Col m={6} s={12}>
              <Card title='Login' 
                actions={[<div key="loginButton"><Button onClick={::this.login} waves='light'>Login<Icon right>perm_identity</Icon></Button></div>]}>
                <Input s={12} label="Username" onChange={(event) => this.formData.username = event.target.value} />
                <Input type="password" label="Password" s={12} onChange={(event) => this.formData.password = event.target.value} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
