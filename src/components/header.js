import React from 'react';
import { browserHistory } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';
 
export default class Header extends React.Component {
  render() {
    let pages = {
      '/public/': 'Home Page',
      '/public/main': 'About Page',
    };

    let style = {
      float: 'left',
      marginRight: '1em',
    };

    return (      
      <div className='navbar-fixed'>
        <Navbar brand='React-Materialize Demo' right>
          <NavItem href='#' onClick={() => browserHistory.push('/public/')}>Home</NavItem>
          <NavItem href='#' onClick={() => browserHistory.push('/public/main')}>Main</NavItem>
        </Navbar>
      </div>
    );
  }
}
