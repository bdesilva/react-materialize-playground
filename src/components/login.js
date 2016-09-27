import React from 'react';
import { browserHistory } from 'react-router';
import Fetch from 'node-fetch';
import Styles from '../../styles/main.css';
import { Row , Col, Input, Button, Icon } from 'react-materialize';

export default class Login extends React.Component {
  constructor() {
    super();
    this.formData = {};
  }

  async login() {
    const res = await Fetch('http://localhost:8008/login', 
      { method: 'POST', body: {"username": this.formData.username, "password": this.formData.password},
      headers: {"Access-Control-Allow-Credentials": "true"}});
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
            <Col s={12} m={4}>
              <Input s={12} label="Username" onChange={(event) => this.formData.username = event.target.value} />
              <Input type="password" label="Password" s={12} onChange={(event) => this.formData.password = event.target.value} />
            </Col>
          </Row>
          <Row>
            <Col s={12} m={4}>
              <Button onClick={::this.login} waves='light'>Login<Icon left>cloud</Icon></Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
