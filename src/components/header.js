import React from 'react';
import { browserHistory } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';
 
export default class Header extends React.Component {
  render() {
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
