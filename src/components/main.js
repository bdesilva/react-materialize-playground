import React from 'react';
import Styles from '../../styles/main.css';
 
export default class Main extends React.Component {
  render() {
    return (
      <div className={Styles.contentBody}>
        <h1>You've navigated to the Main page!</h1>
        <p>First name: {this.props.params.firstName}</p>
        <p>Last name: {this.props.params.lastName}</p>
        <p>First name: {this.props.params.query}</p>
      </div>
    );
  }
}

