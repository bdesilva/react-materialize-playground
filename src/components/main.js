import React from 'react';
import Styles from '../../styles/main.css';
 
export default class Main extends React.Component {
  render() {
    return (
      <div className={Styles.contentBody}>
        <h1>You've arrived!</h1>    
      </div>
    );
  }
}

