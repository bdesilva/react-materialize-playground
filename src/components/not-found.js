import React from 'react';
import Styles from '../../styles/main.css';
 
export default class NotFound extends React.Component {
  render() {
    return (      
      <div className={Styles.notFoundContainer}>
        <h1>Uh oh, Not found!</h1>
      </div>
    );
  }
}
