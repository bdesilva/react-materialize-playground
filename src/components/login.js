import React from 'react';
import { browserHistory } from 'react-router';
import Fetch from 'node-fetch';
import Styles from '../../styles/main.css';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      validError: ''
    }
  }

  async login(event) {
    //TODO: Disabling POST request till CORS issue is fixed.
    /*const res = await Fetch('http://localhost:8008/login', 
      { method: 'POST', body: {"username": this.formData.username, "password": this.formData.password},
      headers: {"Content-Type": "application/json", "Access-Control-Allow-Credentials": "true"}});*/
    event.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      this.setState({ validError: 'Field cannot be empty' });
      Materialize.toast('Field cannot be empty', 1000)
    } else {
      // const res = await Fetch(`http://localhost:8008/login/${this.state.username}/${this.state.password}`
      // , { method: 'GET' });
      const res = await Fetch('http://localhost:8008/login',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({"username": this.state.username, "password": this.state.password}),
          headers: { "Content-Type": "application/json", Accept: 'application/json' }
        });
      const authorized = await res.json();
      authorized ? browserHistory.push('/main') : Materialize.toast('Invalid credentials', 1000);
    }
    this.setState({ username: '', password: '' });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the login page!</h1>
        <div className='row'>
          <div className='col s12 m4 l3'>
            {/* <!-- Left sidebar panel --> */}
          </div>

          <div className='col s12 m8 l9'>
            {/* <!-- Main content  --> */}
            <div className='row'>
              <div className='col s12 m6 l6'>
                <div className='card hoverable'>
                  <div className='card-content'>
                    <span className='card-title'>Login</span>
                    <form>
                      <div className='row'>
                        <div className='input-field col s12 m12 l12'>
                          <input id='username' type='text' className='validate' value={this.state.username} onChange={::this.handleUsernameChange} />
                          <label htmlFor='username' data-error={this.state.validError}>Username</label>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='input-field col s12 m12 l12'>
                          <input id='password' type='password' className='validate' value={this.state.password} onChange={::this.handlePasswordChange} />
                          <label htmlFor='password' data-error={this.state.validError}>Password</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className='card-action'>
                    <a href='#' onClick={::this.login} className='waves-effect waves-light btn'><i className='material-icons left'>perm_identity</i>Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>        
      </div >
    );
  }
}
